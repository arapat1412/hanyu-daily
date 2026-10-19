# Boya 1 reviewed example corrections

## Goal and decisions
- Apply all 26 distinct reviewed items in `docs/boya1-example-grammar-audit-2026-10-19.md` (sections A–E), including six editorial improvements.
- Keep CSV source and application TypeScript examples synchronized. Preserve all 678 IDs, order, lessons, and unrelated fields.
- Keep reviewed repairs reproducible in `scripts/repair_boya_examples.py`; use Boya 1 per-entry pinyin overrides where necessary rather than global pronunciation changes.
- Correct the meaning and part of speech of `boya1-28-6` to describe 得 / de as a complement particle in both sources.
- Preserve Boya 2 and unrelated pre-existing changes to README.md and hanyudaily-seo.srt.

## Tasks
1. Worker: update the repair registry, apply Boya 1 corrections, and add focused synchronization / polyphonic usage regression checks.
2. Codex: review actual changes, verify 26 intended rows only, confirm repair idempotence and unchanged Boya 2, run relevant tests and build.
3. Codex: mark the audit applied, commit only task files, push to origin/main and verify remote HEAD.

## Validation
- `node --test scripts/boya-examples.test.mjs`
- `npm run repair:boya-examples` and compare before/after hashes for idempotence
- `npm run build`
- `git diff --check`; review staged files before commit

## Status
- All 26 reviewed items applied; CSV and TypeScript examples match across all 678 rows.
- Only approved example fields and the 得/de metadata changed; Boya 2 remains byte-for-byte unchanged.
- Reviewed worker changes independently. Repair rerun is idempotent; Boya tests pass 4/4, production build passes, and diff whitespace checks pass.
- Git publication is authorized by the user; the resulting commit records the completed correction set.
