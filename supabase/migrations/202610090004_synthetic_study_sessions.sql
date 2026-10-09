-- Habitual hours and incremental XP at the end of deterministic short sessions.
begin;
lock table public.synthetic_learners in share row exclusive mode;
create temporary table session_migration_before on commit drop as
select s.*, public.hanyu_synthetic_xp_gain(id,joined_on,daily_xp_min,daily_xp_max) as old_gain,
  public.hanyu_synthetic_streak(id,joined_on,streak_days,streak_updated_on,daily_xp_max) as old_streak
from public.synthetic_learners s;

create table public.synthetic_session_settings (
  singleton boolean primary key default true check(singleton),
  starts_on date not null
);
-- Today's already awarded daily XP is grandfathered; tomorrow starts at zero earned XP.
insert into public.synthetic_session_settings(starts_on)
values ((pg_catalog.now() at time zone 'Asia/Bangkok')::date+1);
alter table public.synthetic_session_settings enable row level security;
revoke all on table public.synthetic_session_settings from public,anon,authenticated;

create function public.hanyu_synthetic_sessions(
  p_id uuid, p_day date, p_min integer, p_max integer, p_not_before timestamptz default null
)
returns table(session_no integer, starts_at timestamptz, ends_at timestamptz, xp integer, preferred_period text)
language plpgsql immutable set search_path='' as $$
declare
  budget integer := public.hanyu_synthetic_daily_xp(p_id,p_day,p_min,p_max);
  profile integer := (public.hanyu_synthetic_hash(p_id::text || ':study-period:v1')%100)::integer;
  preferred integer;
  actual integer;
  roll integer;
  count_sessions integer;
  gap integer;
  first_start timestamptz;
  last_end timestamptz := (p_day+time '23:55') at time zone 'Asia/Bangkok';
  duration integer;
  weights integer[] := '{}';
  weight_total integer := 0;
  allocated integer := 0;
  award integer;
  i integer;
begin
  if p_id is null or p_day is null or coalesce(budget,0)<=0 then return; end if;
  preferred := case when profile<30 then 0 when profile<55 then 1 else 2 end;
  actual := preferred;
  preferred_period := (array['morning','midday','evening'])[preferred+1];
  -- Most dates stay in the habitual window, with an occasional other window.
  if public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':other-period:v1')%10=0 then
    actual := (preferred+1+(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':alternate:v1')%2)::integer)%3;
  end if;
  roll := (public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':session-count:v1')%100)::integer;
  count_sessions := least(budget,case when roll<40 then 1 when roll<85 then 2 else 3 end);
  gap := 35+(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':session-gap:v1')%41)::integer;
  first_start := ((p_day+time '00:00') at time zone 'Asia/Bangkok') + interval '1 minute' *
    ((array[435,750,1200])[actual+1]
      +(public.hanyu_synthetic_hash(p_id::text || ':habit-offset:v1')%41)::integer-20
      +(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':time-jitter:v1')%81)::integer-40);
  first_start := least(first_start,last_end-interval '18 minutes'-interval '1 minute'*(count_sessions-1)*gap);
  if p_not_before is not null then
    first_start := greatest(first_start,p_not_before+interval '1 minute'*
      (5+(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':arrival-delay:v1')%16)::integer));
  end if;
  -- Late arrivals may have fewer sessions; never place an award across midnight.
  while count_sessions>0 and first_start+interval '18 minutes'+interval '1 minute'*(count_sessions-1)*gap>last_end loop
    count_sessions := count_sessions-1;
  end loop;
  if count_sessions=0 then return; end if;
  for i in 1..count_sessions loop
    weights := array_append(weights,20+(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':' || i::text || ':session-weight:v1')%81)::integer);
    weight_total := weight_total+weights[i];
  end loop;
  for i in 1..count_sessions loop
    duration := 5+(public.hanyu_synthetic_hash(p_id::text || ':' || p_day::text || ':' || i::text || ':session-duration:v1')%14)::integer;
    award := case when i=count_sessions then budget-allocated
      else 1+((budget-count_sessions)::bigint*weights[i]/weight_total)::integer end;
    allocated := allocated+award;
    session_no := i;
    starts_at := first_start+interval '1 minute'*(i-1)*gap;
    ends_at := starts_at+interval '1 minute'*duration;
    xp := award;
    return next;
  end loop;
end;
$$;

create function public.hanyu_synthetic_session_xp_at(
  p_id uuid,p_day date,p_min integer,p_max integer,p_now timestamptz,p_not_before timestamptz default null
)
returns integer language sql immutable set search_path='' as $$
  select coalesce(sum(s.xp) filter(where s.ends_at<=p_now),0)::integer
  from public.hanyu_synthetic_sessions(p_id,p_day,p_min,p_max,p_not_before) s;
$$;

create function public.hanyu_synthetic_xp_gain_at(
  p_id uuid,p_joined_on date,p_daily_min integer,p_daily_max integer,p_from_day date,p_now timestamptz
)
returns integer language plpgsql stable set search_path='' as $$
declare
  today date := (p_now at time zone 'Asia/Bangkok')::date;
  cutover date;
  first_arrival timestamptz;
  arrival_day date;
  result integer;
begin
  select starts_on into cutover from public.synthetic_session_settings where singleton;
  -- Only brand-new learners need to wait until after their first appearance.
  select simulation_activated_at into first_arrival from public.synthetic_learners
    where id=p_id and simulation_entry_kind='new';
  arrival_day := (first_arrival at time zone 'Asia/Bangkok')::date;
  select coalesce(sum(case
    when days.day::date<cutover then public.hanyu_synthetic_daily_xp(p_id,days.day::date,p_daily_min,p_daily_max)
    when days.day::date=today then public.hanyu_synthetic_session_xp_at(p_id,today,p_daily_min,p_daily_max,p_now,
      case when today=arrival_day then first_arrival else null end)
    when days.day::date=arrival_day then public.hanyu_synthetic_session_xp_at(p_id,arrival_day,p_daily_min,p_daily_max,
      (arrival_day+time '23:59:59') at time zone 'Asia/Bangkok',first_arrival)
    else public.hanyu_synthetic_daily_xp(p_id,days.day::date,p_daily_min,p_daily_max)
  end),0)::integer into result
  from pg_catalog.generate_series(greatest(p_joined_on,coalesce(p_from_day,p_joined_on)),today,interval '1 day') days(day);
  return result;
end;
$$;

create or replace function public.hanyu_synthetic_xp_gain(
  p_id uuid,p_joined_on date,p_daily_min integer,p_daily_max integer,p_from_day date default null
)
returns integer language sql stable set search_path='' as $$
  select public.hanyu_synthetic_xp_gain_at(p_id,p_joined_on,p_daily_min,p_daily_max,p_from_day,pg_catalog.now());
$$;

create function public.hanyu_synthetic_streak_clock_at(
  p_id uuid,p_joined_on date,p_seed integer,p_updated_on date,p_daily_max integer,p_now timestamptz
)
returns integer language plpgsql stable set search_path='' as $$
declare
  today date := (p_now at time zone 'Asia/Bangkok')::date;
  cutover date;
  cursor_day date;
  first_day date := greatest(p_joined_on,date '2026-09-10');
  result integer := 0;
  minimum integer := 1;
  arrival timestamptz;
  activation timestamptz;
  arrival_day date;
  earned integer;
begin
  if p_id is null or p_now is null or p_joined_on is null or coalesce(p_daily_max,0)<=0 or today<first_day then return 0; end if;
  select starts_on into cutover from public.synthetic_session_settings where singleton;
  if today<cutover then
    return public.hanyu_synthetic_streak_at(p_id,p_joined_on,p_seed,p_updated_on,p_daily_max,today);
  end if;
  select s.daily_xp_min,s.simulation_activated_at,
    case when s.simulation_entry_kind='new' then s.simulation_activated_at else null end
  into minimum,activation,arrival from public.synthetic_learners s where s.id=p_id;
  minimum := coalesce(minimum,1);
  arrival_day := (arrival at time zone 'Asia/Bangkok')::date;
  earned := public.hanyu_synthetic_session_xp_at(p_id,today,minimum,p_daily_max,p_now,
    case when today=arrival_day then arrival else null end);
  if (activation at time zone 'Asia/Bangkok')::date=today and p_updated_on=today then
    return case when earned>0 then 1 else 0 end;
  end if;
  -- Keep explicit same-day administrator edits; automatic entry seeds are handled above.
  if p_updated_on=today then return least(greatest(0,coalesce(p_seed,0)),today-first_day+1); end if;
  cursor_day := case when earned>0 then today else today-1 end;
  while cursor_day>=first_day loop
    if cursor_day=p_updated_on and p_updated_on>=first_day then
      -- The pre-session migration seed may have carried yesterday's streak on a rest day.
      if p_updated_on<cutover and not public.hanyu_synthetic_has_activity(p_id,cursor_day) then exit; end if;
      return least(result+greatest(0,coalesce(p_seed,0)),today-first_day+1);
    end if;
    if cursor_day<>today then
      if cursor_day=arrival_day and cursor_day>=cutover then
        if public.hanyu_synthetic_session_xp_at(p_id,cursor_day,minimum,p_daily_max,
          (cursor_day+time '23:59:59') at time zone 'Asia/Bangkok',arrival)=0 then exit; end if;
      elsif not public.hanyu_synthetic_has_activity(p_id,cursor_day) then exit;
      end if;
    end if;
    result := result+1;
    cursor_day := cursor_day-1;
  end loop;
  return result;
end;
$$;

create or replace function public.hanyu_synthetic_streak(
  p_id uuid,p_joined_on date,p_seed integer,p_updated_on date,p_daily_max integer
)
returns integer language sql stable set search_path='' as $$
  select public.hanyu_synthetic_streak_clock_at(p_id,p_joined_on,p_seed,p_updated_on,p_daily_max,pg_catalog.now());
$$;

-- Future entry seeds reflect planned first sessions, including very late arrivals.
do $$
declare
  definition text := pg_catalog.pg_get_functiondef('public.hanyu_process_synthetic_entries_at(timestamptz)'::regprocedure);
  old_expression text := 'public.hanyu_synthetic_daily_xp(s.id,today,s.daily_xp_min,s.daily_xp_max)>0';
  new_expression text := '(select coalesce(sum(session.xp),0)>0 from public.hanyu_synthetic_sessions(s.id,today,s.daily_xp_min,s.daily_xp_max,case when queued.entry_kind=''new'' then p_now else null end) session)';
begin
  if strpos(definition,old_expression)=0 then raise exception 'Unexpected deployed activation definition'; end if;
  execute pg_catalog.replace(definition,old_expression,new_expression);
end;
$$;

revoke all on function public.hanyu_synthetic_sessions(uuid,date,integer,integer,timestamptz) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_session_xp_at(uuid,date,integer,integer,timestamptz,timestamptz) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_xp_gain_at(uuid,date,integer,integer,date,timestamptz) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_streak_clock_at(uuid,date,integer,date,integer,timestamptz) from public,anon,authenticated;

-- Existing data, totals and today's streaks must remain exactly unchanged.
do $$
begin
  if exists(select 1 from session_migration_before b join public.synthetic_learners s using(id)
    where (to_jsonb(b)-array['old_gain','old_streak'])<>to_jsonb(s)
      or b.old_gain<>public.hanyu_synthetic_xp_gain(s.id,s.joined_on,s.daily_xp_min,s.daily_xp_max)
      or b.old_streak<>public.hanyu_synthetic_streak(s.id,s.joined_on,s.streak_days,s.streak_updated_on,s.daily_xp_max))
  then raise exception 'Existing totals, streaks or data changed'; end if;
end;
$$;
select jsonb_build_object('starts_on',(select starts_on from public.synthetic_session_settings),
  'data_and_totals_preserved',true) as session_migration_result;
commit;
