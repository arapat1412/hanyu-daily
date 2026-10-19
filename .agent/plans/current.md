# Boya 2 reviewed example corrections

## Goal and decisions
- Boya 1 corrections were completed and published in commit 6d61ea5.
- Review all 864 Boya 2 examples across 25 lessons; apply reviewed Chinese, Vietnamese, pronunciation, and directly related headword corrections.
- Keep CSV and application TypeScript examples synchronized. Preserve IDs, order, lessons, and unrelated fields.
- Keep repairs reproducible in the existing script, with scoped pronunciation overrides and metadata updates; preserve Boya 1 byte-for-byte.
- Preserve unrelated pre-existing README.md and hanyudaily-seo.srt changes.

## Tasks
1. Codex: review language and apply the reviewed content/registry corrections; write an audit with before/after evidence.
2. Worker (test file only): extend CSV synchronization and focused semantic/pronunciation regressions to Boya 2.
3. Codex: independently review changes, confirm repair idempotence, run relevant tests and build, commit task files and push to origin/main.

## Validation
- `node --test scripts/boya-examples.test.mjs`
- `npm run repair:boya-examples` and compare before/after hashes for idempotence
- `npm run build`
- `git diff --check`; review staged files before commit

## Status
- All 864 examples reviewed; 72 items corrected, including 35 Chinese text changes and 16 directly related headword metadata changes.
- CSV and TypeScript match for all 864 rows. Approved edits independently checked against the original data; IDs/order/lessons preserved.
- Boya 1 data and registry remain unchanged; repair rerun is idempotent.
- Boya tests pass 6/6, production build passes, and diff whitespace checks pass.
- Detailed before/after audit saved in `docs/boya2-example-grammar-audit-2026-10-20.md`.
- User authorized commit and push; resulting Git history records the completed correction set.
