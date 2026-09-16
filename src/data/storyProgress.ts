const STORAGE_KEY = 'hanyu_stories_progress_v1';

export interface StoryProgress {
  currentPage: number;
  completed: boolean;
  completedAt?: string;
  earnedXp?: number;
}

export function getStoryProgress(storyId: string): StoryProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { currentPage: 1, completed: false };
    const data = JSON.parse(raw) as Record<string, StoryProgress>;
    return data[storyId] || { currentPage: 1, completed: false };
  } catch {
    return { currentPage: 1, completed: false };
  }
}

export function saveStoryProgress(
  storyId: string,
  page: number,
  isCompleted = false,
  xpAwarded = 0,
): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = (raw ? JSON.parse(raw) : {}) as Record<string, StoryProgress>;
    const existing = data[storyId] || { currentPage: 1, completed: false };

    data[storyId] = {
      ...existing,
      currentPage: Math.max(existing.currentPage || 1, page),
      completed: existing.completed || isCompleted,
      completedAt: isCompleted ? new Date().toISOString() : existing.completedAt,
      earnedXp: (existing.earnedXp || 0) + xpAwarded,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save story progress', error);
  }
}
