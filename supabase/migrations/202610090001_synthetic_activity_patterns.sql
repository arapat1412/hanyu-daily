-- Deterministic demo activity with missed days and breaks, in the Bangkok calendar.
-- Apply once: current total XP and completed lesson counts are carried forward.
begin;
lock table public.synthetic_learners in share row exclusive mode;
create temporary table synthetic_activity_before on commit drop as
select s.*, public.hanyu_synthetic_xp_gain(id, joined_on, daily_xp_min, daily_xp_max) as old_gain
from public.synthetic_learners s;

create or replace function public.hanyu_synthetic_hash(p_key text)
returns bigint language sql immutable strict set search_path = '' as $$
  select ('x' || pg_catalog.substr(pg_catalog.md5(p_key), 1, 8))::bit(32)::bigint;
$$;

create or replace function public.hanyu_synthetic_has_activity(p_id uuid, p_day date)
returns boolean language plpgsql immutable strict set search_path = '' as $$
declare
  profile integer := (public.hanyu_synthetic_hash(p_id::text || ':profile:v1') % 100)::integer;
  chance integer;
  week_start date := p_day - (extract(isodow from p_day)::integer - 1);
  block integer := (p_day - date '2026-09-10') / 28;
  block_day integer := (p_day - date '2026-09-10') % 28;
  break_start integer;
  break_length integer;
begin
  if p_day < date '2026-09-10' then return false; end if;
  -- Occasional, regular, diligent and a small highly consistent cohort.
  chance := case when profile < 20 then 25 + profile % 15
    when profile < 70 then 45 + profile % 26
    when profile < 95 then 72 + profile % 16
    else 90 + profile % 6 end;
  if extract(isodow from p_day) >= 6 then
    chance := chance + (public.hanyu_synthetic_hash(p_id::text || ':weekend:v1') % 31)::integer - 15;
  end if;
  -- Some busy weeks and occasional multi-day absences, independently per learner.
  if public.hanyu_synthetic_hash(p_id::text || ':' || week_start::text || ':busy:v1') % 6 = 0 then
    chance := chance * 35 / 100;
  end if;
  if public.hanyu_synthetic_hash(p_id::text || ':' || block::text || ':break:v1') % 3 = 0 then
    break_start := (public.hanyu_synthetic_hash(p_id::text || ':' || block::text || ':break-start:v1') % 22)::integer;
    break_length := 2 + (public.hanyu_synthetic_hash(p_id::text || ':' || block::text || ':break-length:v1') % 4)::integer;
    if block_day >= break_start and block_day < break_start + break_length then return false; end if;
  end if;
  return public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':study:v1') % 100
    < greatest(10, least(97, chance));
end;
$$;

create or replace function public.hanyu_synthetic_daily_xp(p_id uuid, p_day date, p_min integer, p_max integer)
returns integer language plpgsql immutable strict set search_path = '' as $$
declare
  roll bigint := public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':xp:v1') % 1001;
  lower_bound integer := greatest(1, p_min);
begin
  if p_max <= 0 or not public.hanyu_synthetic_has_activity(p_id, p_day) then return 0; end if;
  -- More short sessions than long sessions, always within the configured range.
  return least(p_max, lower_bound + (roll * roll * greatest(0, p_max - lower_bound) / 1000000)::integer);
end;
$$;

create or replace function public.hanyu_synthetic_streak_at(
  p_id uuid, p_joined_on date, p_seed integer, p_updated_on date,
  p_daily_max integer, p_today date
)
returns integer language plpgsql immutable set search_path = '' as $$
declare
  first_day date := greatest(p_joined_on, date '2026-09-10');
  cursor_day date := p_today;
  result integer := 0;
begin
  if p_id is null or p_today is null or p_joined_on is null
    or p_daily_max is null or p_daily_max <= 0 or p_today < first_day then return 0; end if;
  -- A seed is an explicit admin setting; missed days AFTER that setting still reset it.
  if p_updated_on = p_today then
    return least(greatest(0, coalesce(p_seed, 0)), p_today - first_day + 1);
  end if;
  -- Match real learners: yesterday's streak survives while today is still in progress.
  if not public.hanyu_synthetic_has_activity(p_id, cursor_day) then cursor_day := cursor_day - 1; end if;
  while cursor_day >= first_day loop
    if p_updated_on >= first_day and cursor_day = p_updated_on then
      return least(result + greatest(0, coalesce(p_seed, 0)), p_today - first_day + 1);
    end if;
    if not public.hanyu_synthetic_has_activity(p_id, cursor_day) then exit; end if;
    result := result + 1;
    cursor_day := cursor_day - 1;
  end loop;
  return result;
end;
$$;

create or replace function public.hanyu_synthetic_streak(
  p_id uuid, p_joined_on date, p_seed integer, p_updated_on date, p_daily_max integer
)
returns integer language sql stable set search_path = '' as $$
  select public.hanyu_synthetic_streak_at(p_id, p_joined_on, p_seed, p_updated_on,
    p_daily_max, (pg_catalog.now() at time zone 'Asia/Bangkok')::date);
$$;

-- Preserve cumulative scores while reconstructing the current streak from demo activity.
with gains as (
  select old.*, public.hanyu_synthetic_xp_gain(id, joined_on, daily_xp_min, daily_xp_max) as new_gain
  from synthetic_activity_before old
)
update public.synthetic_learners s set
  xp_adjustment = gains.xp_adjustment + gains.old_gain - gains.new_gain,
  completed_base = gains.completed_base + gains.old_gain / 45 - gains.new_gain / 45,
  streak_days = public.hanyu_synthetic_streak_at(s.id, s.joined_on, 0, date '2026-09-09',
    s.daily_xp_max, (pg_catalog.now() at time zone 'Asia/Bangkok')::date),
  streak_updated_on = (pg_catalog.now() at time zone 'Asia/Bangkok')::date,
  updated_at = pg_catalog.now()
from gains where s.id = gains.id;

-- Preserve the deployed RPC bodies and permissions; replace only their streak expressions.
do $$
declare
  function_oid regprocedure;
  definition text;
  original_expression text;
  replacement_expression text;
begin
  for function_oid, original_expression, replacement_expression in
    select * from (values
      ('public.get_public_leaderboard(text,text,text,text,integer,integer,boolean)'::regprocedure,
       'public.hanyu_synthetic_streak(synthetic.streak_days, synthetic.streak_updated_on)',
       'public.hanyu_synthetic_streak(synthetic.id, synthetic.joined_on, synthetic.streak_days, synthetic.streak_updated_on, synthetic.daily_xp_max)'),
      ('public.admin_get_synthetic_learners(text,integer,integer)'::regprocedure,
       'public.hanyu_synthetic_streak(learner.streak_days, learner.streak_updated_on)',
       'public.hanyu_synthetic_streak(learner.id, learner.joined_on, learner.streak_days, learner.streak_updated_on, learner.daily_xp_max)')
    ) as changes(oid, original_expression, replacement_expression)
  loop
    definition := pg_catalog.pg_get_functiondef(function_oid);
    if pg_catalog.strpos(definition, original_expression) = 0 then
      raise exception 'Unexpected deployed RPC definition: %; rolling back', function_oid;
    end if;
    execute pg_catalog.replace(definition, original_expression, replacement_expression);
  end loop;
end;
$$;

-- Retire the unconditional date increment even for obsolete two-argument callers.
create or replace function public.hanyu_synthetic_streak(p_streak_days integer, p_updated_on date)
returns integer language sql stable set search_path = '' as $$
  select least(public.hanyu_site_age_days(), greatest(0, coalesce(p_streak_days, 0)));
$$;

revoke all on function public.hanyu_synthetic_hash(text) from public, anon, authenticated;
revoke all on function public.hanyu_synthetic_has_activity(uuid, date) from public, anon, authenticated;
revoke all on function public.hanyu_synthetic_daily_xp(uuid, date, integer, integer) from public, anon, authenticated;
revoke all on function public.hanyu_synthetic_streak_at(uuid, date, integer, date, integer, date) from public, anon, authenticated;
revoke all on function public.hanyu_synthetic_streak(uuid, date, integer, date, integer) from public, anon, authenticated;

-- Regression gates: identities, visibility, totals, completed counts and configuration.
do $$
begin
  if exists (
    select 1 from synthetic_activity_before old join public.synthetic_learners s using (id)
    where (to_jsonb(old) - array['old_gain','xp_adjustment','completed_base','streak_days','streak_updated_on','updated_at'])
       <> (to_jsonb(s) - array['xp_adjustment','completed_base','streak_days','streak_updated_on','updated_at'])
      or old.starting_xp + old.xp_adjustment + old.old_gain
       <> s.starting_xp + s.xp_adjustment + public.hanyu_synthetic_xp_gain(s.id, s.joined_on, s.daily_xp_min, s.daily_xp_max)
      or old.completed_base + old.old_gain / 45
       <> s.completed_base + public.hanyu_synthetic_xp_gain(s.id, s.joined_on, s.daily_xp_min, s.daily_xp_max) / 45
  ) then raise exception 'Protected data changed; rolling back'; end if;
end;
$$;

select jsonb_build_object(
  'learners', (select count(*) from public.synthetic_learners),
  'active', (select count(*) from public.synthetic_learners where active),
  'total_xp_preserved', true, 'identities_and_visibility_preserved', true,
  'streak_distribution', (select jsonb_object_agg(streak_days::text, learner_count)
    from (select streak_days, count(*) as learner_count from public.synthetic_learners where active group by streak_days) distribution),
  'studying_today', (select count(*) from public.synthetic_learners where active and daily_xp_max > 0
    and public.hanyu_synthetic_has_activity(id, (pg_catalog.now() at time zone 'Asia/Bangkok')::date))
) as activity_migration_result;
commit;
