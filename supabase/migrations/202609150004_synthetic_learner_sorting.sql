-- Show synthetic learners in the admin dashboard by current XP, highest first.

create or replace function public.admin_get_synthetic_learners(
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

revoke all on function public.admin_get_synthetic_learners(text, integer, integer) from public;
grant execute on function public.admin_get_synthetic_learners(text, integer, integer) to authenticated;

