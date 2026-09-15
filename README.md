# HSK learning UI

React + TypeScript + Vite. The existing visual design is retained; HSK routes use a complete local syllabus dataset instead of sample lesson arrays.

## Run

```sh
npm install
npm run dev
npm test
npm run build
```

Default development URL: `http://localhost:3005/hsk`. The host must serve `index.html` for SPA routes such as `/lesson/hsk1-1/list`; serve `/data/hsk/*.json` and `/data/hsk-annotations/*` as static files.

## Supabase accounts and deployment

The account, score and leaderboard system uses Supabase Auth + Postgres. Learners register with a public nickname, a separate sign-in username and a password of at least 6 characters; the app creates an internal, non-user-facing Auth email. The browser keeps a local progress cache for instant rendering and offline resilience, then debounces writes to Supabase. Passwords are handled only by Supabase Auth; they are never stored in the app database or source code. Leaderboard weeks run from Monday 00:00 through Sunday 23:59 in `Asia/Bangkok`; weekly XP and streaks are derived at query time so inactive rows expire without requiring a client sync. XP from New HSK 3.0, Boya, YCT, Chengyu, Tang poetry and the culture games is stored in the same account progress and contributes to the same overall/weekly leaderboard.

1. Create a Supabase project on the free plan.
2. Open **SQL Editor**, then run the files in `supabase/migrations/` in filename order through `202609140001_unified_xp.sql`. The production-hardening migration removes direct client writes to leaderboard statistics and adds private feedback storage.
3. Copy `.env.example` to `.env.local`, then fill in the project URL and **publishable** key from **Project Settings → API**.
4. In **Authentication → Providers → Email**, turn off **Confirm email**. This app intentionally uses username-only accounts and does not send confirmation or password-recovery email.
5. Start the app and register the intended administrator username `mogiadev` once. Then run `202609140002_admin_analytics.sql` followed by `202609140003_admin_ip_controls.sql`. The analytics migration deliberately fails if this exact account does not already exist, and its schema enforces a single administrator. To add the optional set of 200 clearly labelled simulated learners, run `202609150001_synthetic_learners.sql`, `202609150002_synthetic_learner_management.sql`, `202609150003_synthetic_learner_visibility.sql`, `202609150004_synthetic_learner_sorting.sql` and `202609150005_synthetic_streak_integrity.sql` last in that order.
6. Restart `npm run dev`. For Vercel, Netlify or Cloudflare Pages, add the same two `VITE_...` values in the hosting provider's environment-variable settings. SPA fallback is included in `vercel.json` and `public/_redirects`.

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
VITE_SITE_URL=https://YOUR_PUBLIC_DOMAIN
```

For production IP blocking on Vercel, add two server-only variables in **Project Settings → Environment Variables**. Use a current Supabase secret key where possible; the legacy service-role variable remains supported during migration. Never prefix either variable with `VITE_`.

```env
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=sb_secret_YOUR_SERVER_ONLY_KEY
```

`VITE_SITE_URL` should be the final HTTPS origin without a trailing slash. It is used for canonical and social-sharing URLs; the production build automatically emits `robots.txt` and `sitemap.xml` when this value is configured.

Never expose a Supabase `service_role` or secret key in a `VITE_` variable. The included migration enables Row Level Security: learners can access only their own progress. The public leaderboard view contains display name, username and learning statistics only; it does not expose the internal Auth email. Because accounts do not use a real email address, automatic password recovery is unavailable; an administrator must handle forgotten-password resets.

The private dashboard is available at `/admin`. Its summary, visitor/IP log, denylist, account list and feedback inbox are served only through database functions that verify the signed-in administrator; the underlying tables have no client-readable policy. On Vercel, root `middleware.ts` checks the denylist before serving document routes and returns HTTP 403 for a blocked IP; `/admin` stays reachable for recovery. Page-view collection also covers anonymous visitors, rate-limits duplicates/abuse and removes logs older than 90 days opportunistically. IP values come from the proxy headers visible to Supabase/Vercel and may be unavailable when an upstream proxy does not provide them. Passwords are one-way bcrypt hashes in Supabase Auth, cannot be viewed by an administrator, and must never be added to a migration or frontend environment variable.

The optional synthetic-learner migrations create leaderboard-only demo rows, not Auth accounts. Each simulated learner receives a deterministic daily XP amount based on the `Asia/Bangkok` date, so scores advance without cron or a deployment server. Simulated join dates and streaks are bounded by the site's 2026-09-10 launch date; the administrator can edit the current streak, which then continues advancing daily. They are labelled **Mô phỏng** publicly, never generate fake traffic/IP records, and can be added, edited, deleted, enabled or disabled globally or one at a time from the admin dashboard. Admin-managed pictures are resized to WebP and stored under the protected `avatars/synthetic/` prefix.

Learners can change their public nickname, verify their current password before setting a new one, and add or replace their own profile picture on `/me`. Password changes are handled only by Supabase Auth. The browser center-crops and compresses profile images to WebP at no more than 512×512 before upload, keeping page loads light. The public `avatars` bucket is limited to 2 MB per stored file; Storage RLS permits uploads only inside the signed-in user's own folder.

## Data and provenance

Source: [profesorm/hsk30](https://github.com/profesorm/hsk30), which attributes the syllabus to Chinese Testing International. Dataset license: CC BY 4.0; original license preserved at `data/hsk-source/LICENCE`.

| Level | New vocabulary entries | Learning sections | Grammar entries |
| --- | ---: | ---: | ---: |
| HSK 1 | 300 | 15 | 70 |
| HSK 2 | 200 | 15 | 78 |
| HSK 3 | 500 | 18 | 96 |
| HSK 4 | 1,000 | 100 | 95 |
| HSK 5 | 1,600 | 160 | 70 |
| HSK 6 | 1,800 | 180 | 50 |
| HSK 7–9 | 5,600 | 560 | 134 |
| Total | 11,000 | 1,048 | 593 |

These are entries, not necessarily unique written forms: numbered homographs keep distinct IDs (`hsk30-{source sort}`), sourceWord and sourceLevel. The displayed Hanzi removes only trailing sense numbers. Level assignment uses the first level in the source's `levelName`, preserving secondary-level annotations separately.

```sh
npm run import:hsk                 # Download sources if absent; otherwise use cache
npm run import:hsk -- --offline    # Reproduce from checked-in source snapshot
npm run import:hsk -- --refresh    # Explicitly refresh remote source snapshot
```

The importer downloads the vocabulary CSV first and preserves raw grammar/Hanzi/topic/task JSON plus license. It validates expected counts, sorts and exact lesson coverage before producing one JSON shard per level in `public/data/hsk/` and `src/data/hsk-manifest.json`. The manifest includes a SHA-256 of the vocabulary source. Source files and generated data should be deployed/committed together. Ordinary app builds do not require access to GitHub.

## Vietnamese dictionary enrichment

The app now loads a separate annotation shard per level, without changing the 11,000-entry syllabus or 1,048-section partition:

- All 11,000 entries now have Vietnamese meanings: 10,865 automatic matches plus 135 explicitly reviewed pronunciation/missing-entry cases.
- 10,759 entries have character-by-character Sino-Vietnamese reference readings.
- `data/hsk-content-review.json` is empty. The 135 resolved cases are pinned by stable source IDs in `data/hsk-reviewed-overrides.json`; 13 project-authored glosses retain links to the Chinese entries used for verification.
- 10,914 entries are eligible for automatic meaning questions. Eligibility is a matching/ambiguity filter, not a teacher-review certification.

Sources: [CVDICT by Phong Phan](https://github.com/ph0ngp/CVDICT), derived from CC-CEDICT (CC BY-SA 4.0), and [Hán Việt Pinyin wordlist by Phong Phan](https://github.com/ph0ngp/hanviet-pinyin-wordlist) (MIT). CVDICT is AI-assisted with some upstream manual corrections; it can contain translation errors. Each card labels this fact and exposes full matching definitions, traditional forms and dictionary pinyin. No paid API, account key or automatic translation service is used.

```sh
npm run enrich:hsk                # Download pinned snapshots if absent, then generate annotation shards
npm run enrich:hsk -- --offline   # Reproduce using the preserved snapshots
```

Dictionary commits and expected SHA-256 checksums are pinned in `scripts/enrich-hsk.mjs`. Raw sources and original notices are in `data/dictionary-source/`; reviewed overrides are in `data/hsk-reviewed-overrides.json`; generated annotations are in `public/data/hsk-annotations/`; coverage is in `src/data/hsk-enrichment.json`. Refreshing the base HSK source must be followed by re-running enrichment. Ordinary builds need no network.

Matching is tone-sensitive, with explicit 一/不 sandhi handling. Different neutral-tone conventions are accepted only for the stable IDs explicitly recorded as reviewed; tones are not stripped globally. Competing readings with conflicting explicit tones are excluded when a neutral-tone match exists. Numbered HSK homographs retain their source IDs; combined dictionary senses are labeled and excluded from automatic meaning quizzes. Cross-references are resolved with a cycle/depth guard. Ordinary glosses beginning with Vietnamese “xem” are not mistakenly discarded. Han-Viet readings are aligned against the matched traditional form and dictionary pinyin; ambiguous whole-word alternatives are left unset.

CVDICT-derived annotation data and its adaptations retain CC BY-SA 4.0. This does not change the UI source-code license. Public attribution and full notices: `public/data/hsk-annotations/ATTRIBUTION.md`, `CVDICT-README.md`, and `HANVIET-LICENSE`. Preserve these on deployment/redistribution. No endorsement by the source publishers is implied.

## Content boundaries

- HSK 1–3 use a checked-in snapshot of Meiday's publicly exposed lesson titles, Vietnamese translations and word placement (15/15/18 lessons). Title pinyin is generated locally during import.
- HSK 4–9 follow Meiday's public 10-word grouping model: 100/160/180/560 stable vocabulary units. Words remain in syllabus order instead of being reshuffled between builds.
- Original CSV fields are `type,word,pinyin,cixing,sort,levelName`; it has no Vietnamese meanings, Sino-Vietnamese readings, vocabulary sentences or audio recordings. The separate dictionary and reviewed-override layers now supply definitions/readings. Existing local annotations are retained only for matching Hanzi AND tone-sensitive pinyin. The “Chưa có nghĩa Việt” filter remains available as a data-integrity check and currently returns no entries.
- All 593 grammar records retain their original Chinese examples; complete Vietnamese grammar explanations are not available.
- All 11,000 vocabulary entries display an example block with Chinese, pinyin and Vietnamese, and highlight the target Hanzi. Locally authored contextual examples take priority; entries without one rotate deterministically through 32 distinct learning frames (`Câu mẫu tự động`) so adjacent cards do not repeat the same wording.
- Natural examples use a separate shard for each of the 1,048 lessons/units. Opening one section fetches only that section's small example file and caches it; the 11,000 examples are never added to the already-large level payloads. Curated examples always win, a missing/failed shard keeps the existing fallback, AI examples are labeled `Câu AI · Chờ rà soát`, and corpus examples cannot be published until marked reviewed.
- Audio uses device speech synthesis, with visible error messages; Chinese voices and audio output depend on the OS/browser. Stroke data is loaded from the Hanzi Writer public CDN and needs connectivity.
- Full bilingual teaching-content parity still requires editorial review of the broader AI-assisted dictionary, natural contextual vocabulary sentences and grammar translations. This implementation guarantees meaning and example-UI coverage for all 11,000 entries, but does not claim that every definition or automatically framed sentence is teacher-certified, or that the lessons/audio are identical to Meiday.

## Learning behavior

- `/hsk`: real totals and persisted completion. `/hsk/:code`: overview. Subroutes: `vocab` (thematic lessons for HSK 1–3, 10-word units for HSK 4–9), `words`, `grammar`, `review`, `syllabus`.
- `/lesson/:lessonId/list`, `grammar`, `journey`, `test`; examples: `hsk1-1`, `hsk6-180`, `hsk7-9-560`.
- Search supports Hanzi, accent-insensitive pinyin and Vietnamese; filters and pagination keep rendering bounded. A review session snapshots the currently displayed page so results do not remove questions mid-session.
- Flashcards record each word's latest rating once, finish correctly on the last card, and store words to revisit.
- Practice: pinyin choice, Vietnamese meaning where available, listening, typed tone-marked pinyin. Homophones are excluded from listening distractors. Answer keys ignore spacing/case but preserve tones.
- Quizzes show per-question feedback, totals and wrong-answer review. Only full-lesson assessment modes can update the lesson score; 80% is required for quiz completion. Sentence scramble and timed word matching are ungraded practice and never overwrite a lesson's best score. The separate manual completion button is explicitly self-reported. Best scores are retained; retrying only wrong answers cannot inflate a lesson score.
- Storage is versioned and validated; reload and other-tab changes are supported. Supabase accounts require a unique username and a password of at least 6 characters. Auth sessions and password security are managed by Supabase. Progress and scores sync across devices, while a local cache keeps the UI fast. The online leaderboard combines remembered HSK/Boya words, completed HSK sections, best HSK test scores and validated XP events from YCT and culture/discovery content. One-time achievements use stable event IDs; YCT quiz and matching rewards keep only the best result per level and Bangkok calendar day.

## Checks

`npm test` covers CSV parsing, level/sense handling, 11,000-entry partition integrity, generated data consistency, complete example fallback/highlighting, quiz distractors, tone validation, missing meanings, real lesson coverage at all seven levels, numbered-to-marked pinyin conversion, dictionary cross-references/cycles, tone-sandhi limits, surname/classifier ordering, Hán-Việt pinyin alignment, ambiguous meaning-quiz exclusion and enrichment report totals. `npm run build` runs strict TypeScript checks and a production Vite build.

Browser verification: completed all 20 questions of HSK 1 lesson 1 (100%), verified completion/bookmarks after reload, checked flashcard duplicate-rating protection, accentless search/empty results, HSK 7–9 last lesson and last word, Chinese grammar examples, multi-character stroke selection and writing mode. At 390px viewport the overview and vocabulary pages have no horizontal document overflow. No browser console errors were observed during these checks. Listening uses device TTS; actual audio quality and a full handwritten-character attempt were not verified.

## Natural example workflow

The first broad Chinese–Vietnamese corpus trial was deliberately not published: most mechanically matched rows came from web-novel or machine-translation subsets and were not suitable as learner examples. Candidate collection now excludes those subsets and writes only to `data/hsk-example-candidates/`, never to the website.

```sh
npm run prepare:examples   # 1,048 model-agnostic section batches, covering 11,000 words
npm run generate:examples  # call a configured OpenAI-compatible model, resume by stable word ID
npm run enrich:examples    # validate JSONL overrides and rebuild 1,048 public shards
```

Put generated/reviewed rows in `data/hsk-example-overrides.jsonl`, one JSON object per line. Required fields are `id`, `chinese`, and `vietnamese`; `pinyin` is generated locally when omitted. Defaults are `source: "ai"` and `reviewStatus: "ai-generated"`. Corpus rows must explicitly use `source: "dataset"` and `reviewStatus: "reviewed"`. The importer rejects unknown/duplicate IDs, duplicate Chinese sentences, metalinguistic frames, missing targets, implausible lengths, markup, unsupported provenance, and target readings that conflict with the syllabus. `npm run collect:example-candidates` is an optional, slow corpus-research step and does not publish anything.

For automatic generation, configure `HSK_EXAMPLE_API_URL` (a chat-completions URL), `HSK_EXAMPLE_API_KEY`, and `HSK_EXAMPLE_MODEL`. The generator appends completed lessons to the override file and resumes from existing stable IDs; use `npm run generate:examples -- --limit=1` for a one-lesson trial. Credentials are read only from the process environment and are never written into the repository.

Dictionary-phase browser verification: searched accentless Vietnamese `sieu thi`, completed a meaning question for 超市 with correct scoring, verified the three unannotated HSK 1 words in the missing-meaning filter, and inspected resolved definitions/Hán-Việt/flashcard labels for 做主 at the end of HSK 7–9. No console errors were observed. These checks verify the software flow, not the linguistic accuracy of every dictionary entry.

React Router has been upgraded to 7.18.3 and the production dependency audit reports no known vulnerabilities. Supabase integration and schema are included, but migrations are not applied to a remote project automatically; configure the project URL and publishable key, then run the migrations in filename order before deployment.
