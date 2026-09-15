-- Keep simulated learner history consistent with the website launch date.
-- The site launched on 2026-09-10 (Bangkok), so on 2026-09-15 no simulated
-- learner can have a streak longer than six days.

alter table public.synthetic_learners
  add column if not exists streak_days integer not null default 1,
  add column if not exists streak_updated_on date not null
    default ((pg_catalog.now() at time zone 'Asia/Bangkok')::date);

alter table public.synthetic_learners
  drop constraint if exists synthetic_learners_streak_days_check;
alter table public.synthetic_learners
  add constraint synthetic_learners_streak_days_check
    check (streak_days between 0 and 10000);

create or replace function public.hanyu_site_age_days()
returns integer
language sql
stable
set search_path = ''
as $$
  select greatest(
    1,
    (pg_catalog.now() at time zone 'Asia/Bangkok')::date - date '2026-09-10' + 1
  )::integer;
$$;

create or replace function public.hanyu_synthetic_streak(
  p_streak_days integer,
  p_updated_on date
)
returns integer
language sql
stable
set search_path = ''
as $$
  select least(
    public.hanyu_site_age_days(),
    greatest(
      0,
      coalesce(p_streak_days, 0)
        + greatest(0, (pg_catalog.now() at time zone 'Asia/Bangkok')::date - coalesce(p_updated_on, (pg_catalog.now() at time zone 'Asia/Bangkok')::date))
    )
  )::integer;
$$;

-- Reset impossible historical values. Names, pictures, levels and visibility
-- are preserved, while dates, XP and lesson counts are rebuilt from no earlier
-- than the real launch date.
with context as (
  select
    (pg_catalog.now() at time zone 'Asia/Bangkok')::date as today,
    public.hanyu_site_age_days() as site_age
), ordered as (
  select
    learner.id,
    pg_catalog.row_number() over (order by learner.id) as sequence_number,
    context.today,
    context.site_age
  from public.synthetic_learners learner
  cross join context
), normalized as (
  select
    ordered.*,
    ordered.today - pg_catalog.mod((ordered.sequence_number - 1)::integer, ordered.site_age) as normalized_joined_on
  from ordered
)
update public.synthetic_learners learner
set
  joined_on = normalized.normalized_joined_on,
  starting_xp = 0,
  xp_adjustment = 0,
  completed_base = 0,
  streak_days = 1 + pg_catalog.mod(
    (normalized.sequence_number * 5)::integer,
    normalized.today - normalized.normalized_joined_on + 1
  ),
  streak_updated_on = normalized.today,
  updated_at = pg_catalog.now()
from normalized
where learner.id = normalized.id;

-- Public leaderboard: use the managed streak instead of deriving it from an
-- old artificial join date.
create or replace function public.get_public_leaderboard(
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
    select (public.hanyu_bangkok_week_start() at time zone 'Asia/Bangkok')::date as week_start
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
    select learner.*, gains.total_gain, gains.week_gain
    from public.synthetic_learners learner
    cross join calendar
    cross join lateral (
      select
        public.hanyu_synthetic_xp_gain(
          learner.id, learner.joined_on, learner.daily_xp_min, learner.daily_xp_max
        ) as total_gain,
        public.hanyu_synthetic_xp_gain(
          learner.id, learner.joined_on, learner.daily_xp_min, learner.daily_xp_max,
          calendar.week_start
        ) as week_gain
    ) gains
    where learner.active
  ), synthetic_rows as (
    select
      synthetic.id as user_id,
      synthetic.display_name,
      synthetic.username,
      synthetic.avatar_url,
      greatest(0, synthetic.starting_xp + synthetic.xp_adjustment + synthetic.total_gain)::integer as xp,
      synthetic.week_gain::integer as weekly_xp,
      greatest(0, (synthetic.starting_xp + synthetic.xp_adjustment + synthetic.total_gain)
        * synthetic.culture_percent / 100)::integer as culture_xp,
      (synthetic.week_gain * synthetic.culture_percent / 100)::integer as culture_weekly_xp,
      (synthetic.completed_base + synthetic.total_gain / 45)::integer as completed,
      synthetic.average_score,
      public.hanyu_synthetic_streak(synthetic.streak_days, synthetic.streak_updated_on) as streak,
      synthetic.hsk,
      true as is_synthetic
    from synthetic_scored synthetic
  ), base as (
    select * from real_learners
    union all
    select * from synthetic_rows
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

-- The return columns changed, so this function must be dropped first.
drop function if exists public.admin_get_synthetic_learners(text, integer, integer);

create function public.admin_get_synthetic_learners(
  p_search text default null,
  p_limit integer default 50,
  p_offset integer default 0
)
returns table (
  learner_id uuid,
  username text,
  display_name text,
  avatar_url text,
  xp integer,
  weekly_xp integer,
  daily_xp_min integer,
  daily_xp_max integer,
  streak_days integer,
  max_streak_days integer,
  hsk text,
  active boolean,
  joined_on date,
  created_at timestamptz,
  updated_at timestamptz,
  total_count bigint
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  return query
  with calendar as (
    select (public.hanyu_bangkok_week_start() at time zone 'Asia/Bangkok')::date as week_start
  ), scored as (
    select
      learner.id as learner_id,
      learner.username,
      learner.display_name,
      learner.avatar_url,
      greatest(0, learner.starting_xp + learner.xp_adjustment + gains.total_gain)::integer as xp,
      gains.week_gain::integer as weekly_xp,
      learner.daily_xp_min,
      learner.daily_xp_max,
      public.hanyu_synthetic_streak(learner.streak_days, learner.streak_updated_on) as streak_days,
      public.hanyu_site_age_days() as max_streak_days,
      learner.hsk,
      learner.active,
      learner.joined_on,
      learner.created_at,
      learner.updated_at
    from public.synthetic_learners learner
    cross join calendar
    cross join lateral (
      select
        public.hanyu_synthetic_xp_gain(
          learner.id, learner.joined_on, learner.daily_xp_min, learner.daily_xp_max
        ) as total_gain,
        public.hanyu_synthetic_xp_gain(
          learner.id, learner.joined_on, learner.daily_xp_min, learner.daily_xp_max,
          calendar.week_start
        ) as week_gain
    ) gains
    where p_search is null or pg_catalog.btrim(p_search) = ''
      or pg_catalog.strpos(pg_catalog.lower(learner.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
      or pg_catalog.strpos(pg_catalog.lower(learner.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
  )
  select scored.*, pg_catalog.count(*) over () as total_count
  from scored
  order by scored.xp desc, scored.learner_id asc
  limit least(100, greatest(1, coalesce(p_limit, 50)))
  offset greatest(0, coalesce(p_offset, 0));
end;
$$;

-- Replace CRUD signatures with versions that also manage the streak.
drop function if exists public.admin_create_synthetic_learner(text, integer, text, integer, integer, text);
drop function if exists public.admin_create_synthetic_learner(text, integer, text, integer, integer, integer, text);

create function public.admin_create_synthetic_learner(
  p_display_name text,
  p_xp integer default 0,
  p_hsk text default 'Mới học',
  p_daily_xp_min integer default 5,
  p_daily_xp_max integer default 30,
  p_streak_days integer default 1,
  p_avatar_url text default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_id uuid := pg_catalog.gen_random_uuid();
  normalized_name text := pg_catalog.btrim(coalesce(p_display_name, ''));
  normalized_avatar text := nullif(pg_catalog.btrim(coalesce(p_avatar_url, '')), '');
  today date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  new_joined_on date;
  initial_gain integer;
  new_active boolean;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  if char_length(normalized_name) not between 2 and 80 then
    raise exception 'Invalid synthetic learner name' using errcode = '22023';
  end if;
  if coalesce(p_xp, -1) not between 0 and 10000000 then
    raise exception 'Invalid synthetic XP' using errcode = '22023';
  end if;
  if coalesce(p_daily_xp_min, -1) not between 0 and 500
    or coalesce(p_daily_xp_max, -1) not between 0 and 500
    or p_daily_xp_min > p_daily_xp_max then
    raise exception 'Invalid synthetic daily XP' using errcode = '22023';
  end if;
  if coalesce(p_streak_days, -1) not between 0 and public.hanyu_site_age_days() then
    raise exception 'Invalid synthetic streak' using errcode = '22023';
  end if;
  if coalesce(p_hsk, '') not in ('Mới học', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'HSK 7-9') then
    raise exception 'Invalid synthetic HSK' using errcode = '22023';
  end if;
  if normalized_avatar is not null and (char_length(normalized_avatar) > 2048 or normalized_avatar !~ '^https://') then
    raise exception 'Invalid synthetic avatar URL' using errcode = '22023';
  end if;

  new_joined_on := today - greatest(0, p_streak_days - 1);
  initial_gain := public.hanyu_synthetic_xp_gain(
    new_id, new_joined_on, p_daily_xp_min, p_daily_xp_max
  );
  select coalesce(pg_catalog.bool_or(active), true) into new_active
  from public.synthetic_learners;

  insert into public.synthetic_learners (
    id, username, display_name, avatar_url, joined_on, starting_xp, xp_adjustment,
    daily_xp_min, daily_xp_max, culture_percent, completed_base,
    average_score, hsk, active, streak_days, streak_updated_on
  ) values (
    new_id,
    'mophong_' || pg_catalog.substr(pg_catalog.replace(new_id::text, '-', ''), 1, 12),
    normalized_name,
    normalized_avatar,
    new_joined_on,
    p_xp,
    -initial_gain,
    p_daily_xp_min,
    p_daily_xp_max,
    20,
    0,
    80,
    p_hsk,
    new_active,
    p_streak_days,
    today
  );
  return new_id;
end;
$$;

drop function if exists public.admin_update_synthetic_learner(uuid, text, integer, text, integer, integer, text);
drop function if exists public.admin_update_synthetic_learner(uuid, text, integer, text, integer, integer, integer, text);

create function public.admin_update_synthetic_learner(
  p_learner_id uuid,
  p_display_name text,
  p_xp integer,
  p_hsk text,
  p_daily_xp_min integer,
  p_daily_xp_max integer,
  p_streak_days integer,
  p_avatar_url text default null
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  learner public.synthetic_learners%rowtype;
  normalized_name text := pg_catalog.btrim(coalesce(p_display_name, ''));
  normalized_avatar text := nullif(pg_catalog.btrim(coalesce(p_avatar_url, '')), '');
  today date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  adjusted_joined_on date;
  recalculated_gain integer;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  select * into learner from public.synthetic_learners where id = p_learner_id for update;
  if not found then
    raise exception 'Synthetic learner not found' using errcode = 'P0002';
  end if;
  if char_length(normalized_name) not between 2 and 80 then
    raise exception 'Invalid synthetic learner name' using errcode = '22023';
  end if;
  if coalesce(p_xp, -1) not between 0 and 10000000 then
    raise exception 'Invalid synthetic XP' using errcode = '22023';
  end if;
  if coalesce(p_daily_xp_min, -1) not between 0 and 500
    or coalesce(p_daily_xp_max, -1) not between 0 and 500
    or p_daily_xp_min > p_daily_xp_max then
    raise exception 'Invalid synthetic daily XP' using errcode = '22023';
  end if;
  if coalesce(p_streak_days, -1) not between 0 and public.hanyu_site_age_days() then
    raise exception 'Invalid synthetic streak' using errcode = '22023';
  end if;
  if coalesce(p_hsk, '') not in ('Mới học', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'HSK 7-9') then
    raise exception 'Invalid synthetic HSK' using errcode = '22023';
  end if;
  if normalized_avatar is not null and (char_length(normalized_avatar) > 2048 or normalized_avatar !~ '^https://') then
    raise exception 'Invalid synthetic avatar URL' using errcode = '22023';
  end if;

  adjusted_joined_on := least(
    learner.joined_on,
    today - greatest(0, p_streak_days - 1)
  );
  recalculated_gain := public.hanyu_synthetic_xp_gain(
    learner.id, adjusted_joined_on, p_daily_xp_min, p_daily_xp_max
  );
  update public.synthetic_learners set
    display_name = normalized_name,
    avatar_url = normalized_avatar,
    joined_on = adjusted_joined_on,
    xp_adjustment = p_xp - starting_xp - recalculated_gain,
    hsk = p_hsk,
    daily_xp_min = p_daily_xp_min,
    daily_xp_max = p_daily_xp_max,
    streak_days = p_streak_days,
    streak_updated_on = today,
    updated_at = pg_catalog.now()
  where id = learner.id;
  return true;
end;
$$;

revoke all on function public.hanyu_site_age_days() from public, anon, authenticated;
revoke all on function public.hanyu_synthetic_streak(integer, date) from public, anon, authenticated;
revoke all on function public.admin_get_synthetic_learners(text, integer, integer) from public;
revoke all on function public.admin_create_synthetic_learner(text, integer, text, integer, integer, integer, text) from public;
revoke all on function public.admin_update_synthetic_learner(uuid, text, integer, text, integer, integer, integer, text) from public;

grant execute on function public.admin_get_synthetic_learners(text, integer, integer) to authenticated;
grant execute on function public.admin_create_synthetic_learner(text, integer, text, integer, integer, integer, text) to authenticated;
grant execute on function public.admin_update_synthetic_learner(uuid, text, integer, text, integer, integer, integer, text) to authenticated;
