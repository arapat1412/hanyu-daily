import { AUTH_CHANGED_EVENT, getCurrentAccountId, PROGRESS_SYNCED_EVENT } from "./auth";
import { CULTURE_TOPICS, getTopicProgress, type CultureTopic } from "../data/cultureTopics";
import { supabase } from "./supabase";

const syncTimers = new Map<string, ReturnType<typeof setTimeout>>();
let syncQueue: Promise<void> = Promise.resolve();

async function persistCultureProgress(topic: CultureTopic) {
  const accountId = getCurrentAccountId();
  if (!accountId || !supabase) return;
  const progress = getTopicProgress(topic.storageKey);
  if (progress.doneCount === 0 && progress.xp === 0) return;

  const { error } = await supabase.from("culture_progress").upsert(
    {
      user_id: accountId,
      topic_slug: topic.slug,
      done_count: Math.min(topic.totalLessons, progress.doneCount),
      xp: Math.min(topic.maxXp, progress.xp),
      weekly_xp: Math.min(topic.maxXp, progress.weeklyXp),
      xp_events: progress.xpEvents,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  if (!error && getCurrentAccountId() === accountId)
    window.dispatchEvent(new Event(PROGRESS_SYNCED_EVENT));
}

export function syncCultureProgress(topic: CultureTopic): Promise<void> {
  // Keep writes ordered so an older snapshot cannot arrive after a newer one.
  // This also avoids racing the per-topic leaderboard triggers during a full sync.
  syncQueue = syncQueue.then(() => persistCultureProgress(topic)).catch(() => undefined);
  return syncQueue;
}

export function scheduleCultureProgressSync(topic: CultureTopic) {
  const previous = syncTimers.get(topic.slug);
  if (previous) clearTimeout(previous);
  syncTimers.set(
    topic.slug,
    setTimeout(() => {
      syncTimers.delete(topic.slug);
      void syncCultureProgress(topic);
    }, 500),
  );
}

export async function syncAllCultureProgress() {
  for (const topic of CULTURE_TOPICS) await syncCultureProgress(topic);
}

window.addEventListener(AUTH_CHANGED_EVENT, () => void syncAllCultureProgress());
