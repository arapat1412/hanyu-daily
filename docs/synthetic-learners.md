# Simulated learners

These records are demo leaderboard data, not Auth accounts or visitor events. Keep the existing `is_synthetic` distinction. Simulated activity must not be included in actual registration, visitor or conversion metrics.

Apply the `202610090001` through `202610090005` migrations in filename order after the existing September migrations. Each transaction checks protected data before committing. On the live project these migrations were applied directly through Supabase SQL Editor; Git files document the deployed changes.

## Visibility and sessions

- One existing Cron job runs every five minutes. It saves a daily plan of 3–10 previously hidden learners, released individually between 07:00 and 23:00 in `Asia/Bangkok` (UTC+7).
- The queue prevents duplicate releases and respects rows administrators have already enabled. A missed previous-day queue is skipped, not added to the next day's allowance. The last batch can contain fewer than three learners; planning stops when the existing pool is exhausted.
- New learners reset XP history, completed lessons and level when revealed. Returning learners retain their achievements. New learners cannot earn XP before their first appearance.
- Each learner has a persistent morning, midday or evening preference, daily jitter and occasional other windows. Study days contain 1–3 sessions of 5–18 minutes. XP is earned only at session completion; rest days award zero. Reloading cannot reroll or duplicate awards.
- Session XP is derived from the clock when an RPC is read. No browser tab or desktop task needs to remain open. Already awarded XP on the migration date is retained; the new session model starts the following day.

## Habits over time

The per-learner lifecycle is anchored to joining, with individual cycles of 140–170 days:

- Initial enthusiasm during the first 14 days, followed by a settling period.
- Occasional 10–24 day absences, then a returning period.
- Individual simulated exam preparation periods of 21 days, followed by a recovery week. These are fictional milestones, not official exam dates.
- Existing weekend preferences, busy weeks and occasional rest days continue to apply. Preparation increases study likelihood, XP within the configured range and the number of sessions, without forcing perfect attendance.

Dates and learner identity determine the draws. Earlier activity is retained through versioned helpers; new habits never rewrite past XP.

## Achievements

`synthetic_progress_baselines` preserves existing completed counts, mean scores and levels. Future completed lessons require 40–60 earned XP per learner; practice can earn XP before a lesson is complete. New mean scores are weighted from completed lesson results, with individual errors, an improving learning curve and a temporary difficulty increase near level promotion. On a rest day, all these values remain unchanged.

Level thresholds are internal demo progression milestones, not HSK certifications:

| Level | Cumulative lesson milestones |
| --- | ---: |
| Mới học | 0 |
| HSK 1 | 20 |
| HSK 2 | 65 |
| HSK 3 | 140 |
| HSK 4 | 280 |
| HSK 5 | 500 |
| HSK 6 | 850 |
| HSK 7-9 | 1400 |

Existing levels act as the starting milestone. Public leaderboard results and admin level display use the same progress helper. Admin XP/level edits reset the baseline while preserving already completed lessons and the computed mean score.

## Verification and recovery

SQL checks in `scripts/synthetic-*-checks.sql` are rollback-only rehearsals. Run a migration with its matching checks before the final `ROLLBACK`, then apply the migration with `COMMIT` after the rehearsal passes. Fixtures may modify records inside the rehearsal transaction and must never be committed. The older checks document their original migrations; the lifecycle check validates the final evolving model.

Production snapshots, rollback SQL and screenshots live under ignored `data/synthetic-*` directories. Do not commit these snapshots, which can include real leaderboard users. Inspect a rollback script and account for later admin edits before applying it.

To pause releases, set `synthetic_activation_settings.enabled = false`; use the saved local pause script to also disable the Cron job. This leaves learners and audit history intact.
