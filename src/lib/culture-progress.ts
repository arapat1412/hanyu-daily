import { AUTH_CHANGED_EVENT } from "./auth";
import { CULTURE_TOPICS, getTopicProgress, type CultureTopic } from "../data/cultureTopics";
import { importXpEvents, type XpEvent } from "./hsk";

const syncTimers = new Map<string, ReturnType<typeof setTimeout>>();

function importCultureTopicXp(topic: CultureTopic): number {
  const progress = getTopicProgress(topic.storageKey);
  const events: Record<string, XpEvent> = {};
  for (const [eventId, event] of Object.entries(progress.xpEvents)) {
    events[`culture:${topic.slug}:${eventId}`] = {
      source: "culture",
      amount: event.amount,
      earnedAt: event.earnedAt,
    };
  }
  return importXpEvents(events);
}

export async function syncCultureProgress(topic: CultureTopic): Promise<void> {
  importCultureTopicXp(topic);
}

export function scheduleCultureProgressSync(topic: CultureTopic) {
  const previous = syncTimers.get(topic.slug);
  if (previous) clearTimeout(previous);
  syncTimers.set(
    topic.slug,
    setTimeout(() => {
      syncTimers.delete(topic.slug);
      void syncCultureProgress(topic);
    }, 300),
  );
}

export async function syncAllCultureProgress() {
  for (const topic of CULTURE_TOPICS) importCultureTopicXp(topic);
}

window.addEventListener(AUTH_CHANGED_EVENT, () => void syncAllCultureProgress());
