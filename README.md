# Hanyu Daily — Chinese Learning Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tests](https://img.shields.io/badge/tests-55%20passing-brightgreen)](#testing-and-quality)

**Hanyu Daily** is a full-stack Chinese-learning platform for Vietnamese learners. It combines the New HSK 3.0 curriculum with interactive practice, cross-device progress synchronization, gamified XP and a private administration dashboard.

**Live website:** [hanyudaily.id.vn](https://hanyudaily.id.vn)

**Source:** [github.com/arapat1412/hanyu-daily](https://github.com/arapat1412/hanyu-daily)

## Project highlights

- **11,000 New HSK 3.0 vocabulary entries** organized into **1,048 learning sections** from HSK 1 through HSK 7–9.
- Vietnamese meanings for all vocabulary entries, with **10,759 character-level Sino-Vietnamese readings**.
- Flashcards, listening practice, tone-aware pinyin input, quizzes, sentence scrambling, word matching and Hanzi stroke practice.
- Supabase authentication, PostgreSQL persistence, avatar storage, XP events, streaks and weekly/overall leaderboards.
- Responsive PWA experience with route-level code splitting, local caching and offline-aware behavior.
- Private administration dashboard for user analytics, feedback, visitor monitoring and IP access control.
- **55 automated tests** covering content integrity, pronunciation, quiz generation, scoring and leaderboard behavior.

## Features

### Structured learning

- New HSK 3.0 routes for vocabulary, grammar, review, syllabus and lesson assessments.
- Boya and YCT learning materials alongside Chengyu, Tang poetry, bilingual stories and Chinese songs.
- Search by Hanzi, accent-insensitive pinyin or Vietnamese meaning.
- Speech synthesis, multi-character stroke visualization and hands-free playback.
- Best-score retention, wrong-answer review and explicit separation between graded assessments and ungraded practice.

### Progress and gamification

- Versioned local progress for fast rendering and offline resilience.
- Debounced synchronization to Supabase for use across devices.
- Unified XP from HSK, Boya, YCT and culture/discovery activities.
- Weekly rankings calculated using the `Asia/Bangkok` calendar.
- Streaks, remembered vocabulary, completed sections and skill statistics.

### Accounts and administration

- Username-based accounts backed by Supabase Auth.
- Profile editing, password verification/change and client-side WebP avatar compression.
- PostgreSQL Row Level Security so learners can access only their own private progress.
- Server-validated leaderboard functions rather than direct client writes to aggregate statistics.
- Admin-only analytics, feedback inbox, user management and IP denylist controls.

## Architecture

```text
React + TypeScript UI
        │
        ├── Local versioned cache ──► fast/offline-aware rendering
        │
        ├── Static content shards ──► HSK, examples, grammar and media metadata
        │
        └── Supabase client
                ├── Auth
                ├── PostgreSQL + RLS
                ├── Storage
                └── RPC functions for leaderboard and admin operations
```

Large learning datasets are split into level and lesson shards. Opening a section loads only the required content and caches it, instead of placing all 11,000 examples in the initial bundle. Application pages are also lazy-loaded through React Router.

## Technology stack

| Area | Technologies |
| --- | --- |
| Frontend | React 18, TypeScript, React Router, Tailwind CSS |
| Build | Vite, PostCSS, strict TypeScript checks |
| Backend | Supabase Auth, PostgreSQL, SQL functions, Storage |
| Learning UI | Hanzi Writer, Web Speech API, custom practice engines |
| Deployment | Vercel-compatible middleware and SPA routing |
| Testing | Node.js test runner and deterministic data validation |

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
- A Supabase project if account synchronization is required

### Installation

```bash
git clone https://github.com/arapat1412/hanyu-daily.git
cd hanyu-daily
npm install
cp .env.example .env.local
npm run dev
```

The development server opens at `http://localhost:3005`. The HSK overview is available at `http://localhost:3005/hsk`.

### Environment variables

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
VITE_SITE_URL=https://YOUR_PUBLIC_DOMAIN
```

Production IP blocking on Vercel additionally requires server-only variables:

```env
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=sb_secret_YOUR_SERVER_ONLY_KEY
```

Never prefix a Supabase secret or service-role key with `VITE_`. Variables with that prefix are included in the browser bundle.

## Supabase setup

1. Create a Supabase project.
2. Run the SQL files in `supabase/migrations/` in filename order.
3. Disable email confirmation if you want to preserve the project's username-only sign-in flow.
4. Configure the public URL and publishable key in `.env.local`.
5. Restart the development server.

The migrations create profiles, learning progress, scoring, leaderboards, feedback storage, analytics and IP-control functions. Optional synthetic learners are clearly labelled as simulated leaderboard entries and are separate from Auth accounts.

## Available commands

```bash
npm run dev                 # Start the Vite development server
npm test                    # Run the automated test suite
npm run build               # Type-check and create a production build
npm run preview             # Preview the production build
npm run import:hsk          # Import and validate New HSK source data
npm run enrich:hsk          # Generate Vietnamese annotation shards
npm run prepare:examples    # Prepare generation batches for example sentences
npm run generate:examples   # Generate resumable example overrides
npm run enrich:examples     # Validate and publish example shards
```

Import and enrichment scripts support checked-in snapshots, so ordinary application builds do not require access to external data providers.

## Data pipeline

```text
Pinned HSK source snapshots
        │
        ├── schema and count validation
        ├── stable IDs for homographs and numbered senses
        ├── tone-sensitive Vietnamese dictionary matching
        ├── reviewed overrides and provenance checks
        └── generated level/lesson JSON shards
                         │
                         └── runtime validation and lazy loading
```

The pipeline verifies expected counts, lesson coverage, pronunciation alignment, duplicate IDs and source checksums. Cross-references use cycle/depth guards, and ambiguous entries are excluded from automatic meaning questions.

## Testing and quality

```bash
npm test
npm run build
```

The current suite contains 55 tests covering:

- 11,000-entry partition and lesson integrity;
- Vietnamese enrichment coverage and provenance;
- numbered-to-marked pinyin conversion and tone handling;
- quiz distractor generation and answer validation;
- example sentence validation and target highlighting;
- score, XP, streak and weekly leaderboard calculations;
- story and song media consistency.

The production build runs strict TypeScript checks before Vite bundles the application.

## Project structure

```text
src/
├── components/          Reusable learning and navigation components
├── data/                Manifests and authored curriculum metadata
├── lib/                 Auth, progress, search, practice and data loaders
└── pages/               Route-level application pages

scripts/                 Import, enrichment and validation pipelines
supabase/migrations/     PostgreSQL schema, RLS and server functions
public/data/             Deployable HSK and example shards
middleware.ts            Server-side IP denylist check for Vercel
```

## Security notes

- Passwords are handled only by Supabase Auth and are never stored in application tables or source code.
- Row Level Security protects private learner data and avatar paths.
- Public leaderboard responses contain only display and learning statistics.
- Administrative tables have no direct client-readable policy; access is exposed through admin-verified functions.
- Avatar files are validated, center-cropped and compressed before upload.
- Feedback and visitor tracking include rate limiting and bounded data retention.

## Data sources and attribution

The New HSK syllabus is sourced from [profesorm/hsk30](https://github.com/profesorm/hsk30), which attributes it to Chinese Testing International. The dataset is distributed under **CC BY 4.0**; its original license is preserved in `data/hsk-source/LICENCE`.

Vietnamese annotations use:

- [CVDICT](https://github.com/ph0ngp/CVDICT), derived from CC-CEDICT — **CC BY-SA 4.0**;
- [Hán Việt Pinyin wordlist](https://github.com/ph0ngp/hanviet-pinyin-wordlist) — **MIT**.

Full notices are preserved in `public/data/hsk-annotations/`. Dictionary-derived content may contain errors and is not presented as teacher-certified material. AI-generated examples remain visibly labelled until editorial review.

## Deployment

The repository includes Vercel SPA rewrites, middleware, `robots.txt`/`sitemap.xml` generation and static data assets. Configure the environment variables in the hosting provider, apply all required Supabase migrations, and then run:

```bash
npm run build
```

The output is written to `dist/`.

## Author

Developed by [Mô Ham Mách A Ra Pát](https://github.com/arapat1412).
