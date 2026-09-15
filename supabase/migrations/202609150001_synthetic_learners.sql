-- Optional, clearly-labelled synthetic learners for a populated demo leaderboard.
-- These rows are not Supabase Auth accounts, cannot sign in, and never create
-- fake visitor/IP events. Their XP is derived from the Bangkok calendar date,
-- so no Vercel function, Edge Function or pg_cron job is required.

create table if not exists public.synthetic_learners (
  id uuid primary key,
  username text not null unique,
  display_name text not null,
  joined_on date not null,
  starting_xp integer not null check (starting_xp between 0 and 100000),
  daily_xp_min integer not null check (daily_xp_min between 0 and 500),
  daily_xp_max integer not null check (daily_xp_max between daily_xp_min and 500),
  culture_percent integer not null default 20 check (culture_percent between 0 and 100),
  completed_base integer not null default 0 check (completed_base between 0 and 10000),
  average_score integer not null default 80 check (average_score between 0 and 100),
  hsk text not null check (hsk in ('Mới học', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'HSK 7-9')),
  active boolean not null default true,
  created_at timestamptz not null default pg_catalog.now()
);

alter table public.synthetic_learners enable row level security;
revoke all on table public.synthetic_learners from public, anon, authenticated;

-- Return a stable pseudo-random award for one learner/day. The same date always
-- returns the same value, so refreshing a page cannot award extra XP.
create or replace function public.hanyu_synthetic_daily_xp(
  p_id uuid,
  p_day date,
  p_min integer,
  p_max integer
)
returns integer
language sql
immutable
set search_path = ''
as $$
  select greatest(0, p_min) + pg_catalog.mod(
    (('x' || pg_catalog.substr(pg_catalog.md5(p_id::text || ':' || p_day::text), 1, 8))::bit(32)::bigint),
    greatest(1, p_max - p_min + 1)
  )::integer;
$$;

do $$
declare
  surnames text[] := array['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Vũ', 'Đặng', 'Bùi'];
  middles text[] := array['Minh', 'Thanh', 'Ngọc', 'Gia', 'Khánh'];
  given_names text[] := array['An', 'Linh', 'Vy', 'Huy', 'Trang'];
  i integer;
  learner_id uuid;
begin
  for i in 1..200 loop
    learner_id := ('f0000000-0000-4000-8000-' || pg_catalog.lpad(i::text, 12, '0'))::uuid;
    insert into public.synthetic_learners (
      id, username, display_name, joined_on, starting_xp,
      daily_xp_min, daily_xp_max, culture_percent,
      completed_base, average_score, hsk
    ) values (
      learner_id,
      'mophong' || pg_catalog.lpad(i::text, 3, '0'),
      surnames[((i - 1) % 8) + 1] || ' '
        || middles[(((i - 1) / 8) % 5) + 1] || ' '
        || given_names[(((i - 1) / 40) % 5) + 1],
      (pg_catalog.now() at time zone 'Asia/Bangkok')::date - (15 + ((i * 17) % 106)),
      40 + ((i * 137) % 1160),
      5 + ((i * 7) % 16),
      35 + ((i * 11) % 36),
      10 + ((i * 13) % 31),
      1 + ((i * 5) % 30),
      65 + ((i * 7) % 34),
      (array['Mới học', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'HSK 7-9'])[((i - 1) % 8) + 1]
    )
    on conflict (id) do update set
      username = excluded.username,
      display_name = excluded.display_name,
      starting_xp = excluded.starting_xp,
      daily_xp_min = excluded.daily_xp_min,
      daily_xp_max = excluded.daily_xp_max,
      culture_percent = excluded.culture_percent,
      completed_base = excluded.completed_base,
      average_score = excluded.average_score,
      hsk = excluded.hsk;
  end loop;
end;
$$;

-- The return shape gains is_synthetic. Drop first because PostgreSQL cannot
-- change a function's table return type with CREATE OR REPLACE alone.
drop function if exists public.get_public_leaderboard(text, text, text, text, integer, integer, boolean);

create function public.get_public_leaderboard(
  p_period text default 'overall', p_scope text default 'all', p_hsk text default null,
  p_search text default null, p_limit integer default 100, p_offset integer default 0,
  p_include_current boolean default false
)
returns table (
  rank bigint, total_count bigint, filtered_count bigint, period_xp bigint,
  highest_streak integer, user_id uuid, display_name text, username text,
  avatar_url text, xp integer, weekly_xp integer, culture_xp integer,
  culture_weekly_xp integer, completed integer, average_score integer,
  streak integer, hsk text, is_supplemental boolean, is_synthetic boolean
)
language sql stable security definer set search_path = ''
as $$
  with calendar as (
    select
      (pg_catalog.now() at time zone 'Asia/Bangkok')::date as today,
      (public.hanyu_bangkok_week_start() at time zone 'Asia/Bangkok')::date as week_start
  ), real_learners as (
    select
      s.user_id, p.display_name, p.username, p.avatar_url,
      (s.xp + public.hanyu_unified_xp(lp.progress))::integer as xp,
      (public.hanyu_progress_weekly_xp(lp.progress) + public.hanyu_unified_weekly_xp(lp.progress))::integer as weekly_xp,
      public.hanyu_unified_xp(lp.progress, 'culture')::integer as culture_xp,
      public.hanyu_unified_weekly_xp(lp.progress, 'culture')::integer as culture_weekly_xp,
      s.completed, s.average_score, public.hanyu_progress_streak(lp.progress) as streak,
      s.hsk, false as is_synthetic
    from public.leaderboard_stats s
    join public.profiles p on p.id = s.user_id
    join public.learning_progress lp on lp.user_id = s.user_id
  ), synthetic_scored as (
    select
      learner.*,
      coalesce(score.total_gain, 0)::integer as total_gain,
      coalesce(score.week_gain, 0)::integer as week_gain,
      coalesce(score.culture_total_gain, 0)::integer as culture_total_gain,
      coalesce(score.culture_week_gain, 0)::integer as culture_week_gain,
      calendar.today
    from public.synthetic_learners learner
    cross join calendar
    cross join lateral (
      select
        pg_catalog.sum(daily.amount)::bigint as total_gain,
        pg_catalog.sum(daily.amount) filter (where daily.award_day >= calendar.week_start)::bigint as week_gain,
        pg_catalog.sum((daily.amount * learner.culture_percent / 100))::bigint as culture_total_gain,
        pg_catalog.sum((daily.amount * learner.culture_percent / 100))
          filter (where daily.award_day >= calendar.week_start)::bigint as culture_week_gain
      from (
        select
          generated.day::date as award_day,
          public.hanyu_synthetic_daily_xp(
            learner.id, generated.day::date, learner.daily_xp_min, learner.daily_xp_max
          ) as amount
        from pg_catalog.generate_series(learner.joined_on, calendar.today, interval '1 day') generated(day)
      ) daily
    ) score
    where learner.active
  ), synthetic_learners as (
    select
      synthetic.id as user_id,
      synthetic.display_name,
      synthetic.username,
      null::text as avatar_url,
      (synthetic.starting_xp + synthetic.total_gain)::integer as xp,
      synthetic.week_gain::integer as weekly_xp,
      ((synthetic.starting_xp * synthetic.culture_percent / 100) + synthetic.culture_total_gain)::integer as culture_xp,
      synthetic.culture_week_gain::integer as culture_weekly_xp,
      (synthetic.completed_base + synthetic.total_gain / 45)::integer as completed,
      synthetic.average_score,
      least(120, greatest(1, synthetic.today - synthetic.joined_on + 1))::integer as streak,
      synthetic.hsk,
      true as is_synthetic
    from synthetic_scored synthetic
  ), base as (
    select * from real_learners
    union all
    select * from synthetic_learners
  ), filtered_hsk as (
    select * from base
    where p_hsk is null or p_hsk = '' or hsk = p_hsk
  ), ranked as (
    select
      pg_catalog.row_number() over (order by
        case when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
          when p_scope = 'culture' then b.culture_xp
          when p_period = 'weekly' then b.weekly_xp else b.xp end desc,
        b.streak desc, b.user_id asc) as rank,
      pg_catalog.count(*) over () as total_count,
      pg_catalog.sum(case when p_search is null or pg_catalog.btrim(p_search) = ''
        or pg_catalog.strpos(pg_catalog.lower(b.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
        or pg_catalog.strpos(pg_catalog.lower(b.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
        then 1 else 0 end) over () as filtered_count,
      pg_catalog.sum(case when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
        when p_scope = 'culture' then b.culture_xp
        when p_period = 'weekly' then b.weekly_xp else b.xp end) over () as period_xp,
      pg_catalog.max(b.streak) over () as highest_streak,
      b.*
    from filtered_hsk b
    where p_period in ('weekly', 'overall') and p_scope in ('all', 'culture')
  ), matched as (
    select r.* from ranked r
    where p_search is null or pg_catalog.btrim(p_search) = ''
      or pg_catalog.strpos(pg_catalog.lower(r.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
      or pg_catalog.strpos(pg_catalog.lower(r.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
  ), page_rows as (
    select m.*, false as is_supplemental from matched m order by m.rank
    limit least(100, greatest(1, p_limit)) offset greatest(0, p_offset)
  ), current_rows as (
    select r.*, true as is_supplemental from ranked r
    where p_include_current and not r.is_synthetic
      and r.user_id = (select auth.uid())
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), previous_rows as (
    select r.*, true as is_supplemental from ranked r
    join current_rows me on r.rank = me.rank - 1
    where not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), summary_rows as (
    select r.*, true as is_supplemental from ranked r where r.rank <= 3
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
      and not exists (select 1 from current_rows c where c.user_id = r.user_id)
      and not exists (select 1 from previous_rows p where p.user_id = r.user_id)
  )
  select selected.rank, selected.total_count, selected.filtered_count, selected.period_xp,
    selected.highest_streak, selected.user_id, selected.display_name, selected.username,
    selected.avatar_url, selected.xp, selected.weekly_xp, selected.culture_xp,
    selected.culture_weekly_xp, selected.completed, selected.average_score,
    selected.streak, selected.hsk, selected.is_supplemental, selected.is_synthetic
  from (
    select * from page_rows union all select * from current_rows
    union all select * from previous_rows union all select * from summary_rows
  ) selected
  order by selected.rank;
$$;

revoke all on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean) from public;
grant execute on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean)
  to anon, authenticated;

create or replace function public.admin_set_synthetic_learners_enabled(p_enabled boolean)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  affected integer;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  if p_enabled is null then
    raise exception 'Enabled state is required' using errcode = '22023';
  end if;

  update public.synthetic_learners set active = p_enabled where active <> p_enabled;
  get diagnostics affected = row_count;
  return affected;
end;
$$;

-- Keep real accounts and simulated learners as separate admin metrics.
create or replace function public.admin_get_summary()
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  bangkok_day_start timestamptz := (
    pg_catalog.date_trunc('day', pg_catalog.now() at time zone 'Asia/Bangkok')
    at time zone 'Asia/Bangkok'
  );
  result jsonb;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  select pg_catalog.jsonb_build_object(
    'visits_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start),
    'visits_last_7_days', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start - interval '6 days'),
    'unique_visitors_today', (select pg_catalog.count(distinct v.visitor_id) from public.visitor_events v where v.visited_at >= bangkok_day_start),
    'unique_ips_today', (select pg_catalog.count(distinct v.ip_address) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.ip_address is not null),
    'anonymous_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.user_id is null),
    'authenticated_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.user_id is not null),
    'total_users', (select pg_catalog.count(*) from public.profiles),
    'synthetic_users', (select pg_catalog.count(*) from public.synthetic_learners),
    'synthetic_enabled', (select pg_catalog.bool_or(s.active) from public.synthetic_learners s),
    'total_feedback', (select pg_catalog.count(*) from public.feedback_messages),
    'blocked_ips', (select pg_catalog.count(*) from public.blocked_ips)
  ) into result;

  return result;
end;
$$;

revoke all on function public.hanyu_synthetic_daily_xp(uuid, date, integer, integer) from public, anon, authenticated;
revoke all on function public.admin_set_synthetic_learners_enabled(boolean) from public;
grant execute on function public.admin_set_synthetic_learners_enabled(boolean) to authenticated;
