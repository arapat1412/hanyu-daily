export type SrsRating = 1 | 2 | 3 | 4;

export interface SrsCard {
  wordId: string;
  repetition: number;
  interval: number;
  easeFactor: number;
  dueDate: string;
  lastReviewed: string;
  lapses: number;
}

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;
const MAX_EASE_FACTOR = 3;

export function createSrsCard(wordId: string, now = new Date()): SrsCard {
  const timestamp = now.toISOString();
  return {
    wordId,
    repetition: 0,
    interval: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    dueDate: timestamp,
    lastReviewed: timestamp,
    lapses: 0,
  };
}

export function calculateNextSrsState(
  card: SrsCard,
  rating: SrsRating,
  now = new Date(),
): SrsCard {
  let repetition = card.repetition;
  let interval = card.interval;
  let easeFactor = card.easeFactor;
  let lapses = card.lapses;

  if (rating === 1) {
    repetition = 0;
    interval = 1;
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor - 0.2);
    lapses += 1;
  } else if (rating === 2) {
    repetition = Math.max(1, repetition);
    interval = interval === 0 ? 1 : Math.max(1, Math.round(interval * 1.2));
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor - 0.15);
  } else if (rating === 3) {
    repetition += 1;
    interval =
      repetition === 1
        ? 1
        : repetition === 2
          ? 3
          : Math.max(1, Math.round(interval * easeFactor));
  } else {
    repetition += 1;
    interval =
      repetition === 1
        ? 3
        : repetition === 2
          ? 7
          : Math.max(1, Math.round(interval * easeFactor * 1.3));
    easeFactor = Math.min(MAX_EASE_FACTOR, easeFactor + 0.15);
  }

  const lastReviewed = now.toISOString();
  return {
    wordId: card.wordId,
    repetition,
    interval,
    easeFactor,
    dueDate: new Date(now.getTime() + interval * DAY_IN_MS).toISOString(),
    lastReviewed,
    lapses,
  };
}

function formatInterval(days: number): string {
  if (days < 30) return `${days} ngày`;
  const months = Math.max(1, Math.round(days / 30));
  return `${months} tháng`;
}

export function previewNextIntervals(
  card: SrsCard,
  now = new Date(),
): Record<SrsRating, string> {
  return {
    1: formatInterval(calculateNextSrsState(card, 1, now).interval),
    2: formatInterval(calculateNextSrsState(card, 2, now).interval),
    3: formatInterval(calculateNextSrsState(card, 3, now).interval),
    4: formatInterval(calculateNextSrsState(card, 4, now).interval),
  };
}
