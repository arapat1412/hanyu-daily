-- Evolving demo habits and one activity-derived source for achievements.
begin;
lock table public.synthetic_learners in share row exclusive mode;
create temporary table lifecycle_before on commit drop as
select s.*, public.hanyu_synthetic_xp_gain(id,joined_on,daily_xp_min,daily_xp_max) as old_gain
from public.synthetic_learners s;
create temporary table lifecycle_public_before on commit drop as
select * from public.get_public_leaderboard(p_limit=>100);

create table public.synthetic_lifecycle_settings (
  singleton boolean primary key default true check(singleton), starts_on date not null
);
insert into public.synthetic_lifecycle_settings(starts_on)
values ((pg_catalog.now() at time zone 'Asia/Bangkok')::date+1);
create table public.synthetic_progress_baselines (
  learner_id uuid primary key references public.synthetic_learners(id) on delete cascade,
  gain integer not null, completed integer not null check(completed>=0),
  average_score integer not null check(average_score between 0 and 100),
  hsk text not null, anchored_at timestamptz not null
);
insert into public.synthetic_progress_baselines
select id,old_gain,completed_base+old_gain/45,average_score,hsk,pg_catalog.now() from lifecycle_before;
alter table public.synthetic_lifecycle_settings enable row level security;
alter table public.synthetic_progress_baselines enable row level security;
revoke all on table public.synthetic_lifecycle_settings,public.synthetic_progress_baselines from public,anon,authenticated;

-- Retain the exact old history instead of recalculating earlier awards under new habits.
do $$
declare definition text;
begin
  definition := pg_get_functiondef('public.hanyu_synthetic_has_activity(uuid,date)'::regprocedure);
  execute replace(definition,'public.hanyu_synthetic_has_activity(','public.hanyu_synthetic_has_activity_v1(');
  definition := pg_get_functiondef('public.hanyu_synthetic_daily_xp(uuid,date,integer,integer)'::regprocedure);
  definition := replace(definition,'public.hanyu_synthetic_daily_xp(','public.hanyu_synthetic_daily_xp_v1(');
  execute replace(definition,'public.hanyu_synthetic_has_activity(','public.hanyu_synthetic_has_activity_v1(');
end;
$$;

create function public.hanyu_synthetic_phase(p_id uuid,p_day date,p_joined_on date)
returns text language plpgsql immutable strict set search_path='' as $$
declare
  age integer := p_day-p_joined_on;
  cycle_length integer := 140+(public.hanyu_synthetic_hash(p_id::text||':cycle-length:v2')%31)::integer;
  cycle integer;
  position integer;
  pause_start integer;
  pause_length integer;
  has_pause boolean;
  exam_day integer;
begin
  if age<0 then return 'not_joined'; end if;
  cycle := age/cycle_length; position := age%cycle_length;
  pause_start := 35+(public.hanyu_synthetic_hash(p_id::text||':'||cycle::text||':pause-start:v2')%35)::integer;
  pause_length := 10+(public.hanyu_synthetic_hash(p_id::text||':'||cycle::text||':pause-length:v2')%15)::integer;
  has_pause := public.hanyu_synthetic_hash(p_id::text||':'||cycle::text||':long-pause:v2')%4<>0;
  exam_day := 100+(public.hanyu_synthetic_hash(p_id::text||':'||cycle::text||':exam-day:v2')%20)::integer;
  if has_pause and position>=pause_start and position<pause_start+pause_length then return 'paused'; end if;
  if position>=exam_day-21 and position<exam_day then return 'exam_prep'; end if;
  if has_pause and position>=pause_start+pause_length and position<pause_start+pause_length+14 then return 'returning'; end if;
  if cycle=0 and age<14 then return 'enthusiastic'; end if;
  if cycle=0 and age<42 then return 'settling'; end if;
  if position>=exam_day and position<exam_day+7 then return 'recovery'; end if;
  return 'regular';
end;
$$;

create function public.hanyu_synthetic_phase_for(p_id uuid,p_day date)
returns text language sql stable set search_path='' as $$
  select public.hanyu_synthetic_phase(p_id,p_day,
    case when s.simulation_entry_kind='new' and s.simulation_activated_at is null
      then coalesce((select q.run_on from public.synthetic_activation_queue q
        where q.learner_id=s.id and q.status='pending'),s.joined_on)
      else s.joined_on end)
  from public.synthetic_learners s where s.id=p_id;
$$;

create or replace function public.hanyu_synthetic_has_activity(p_id uuid,p_day date)
returns boolean language plpgsql stable strict set search_path='' as $$
declare
  phase text;
  profile integer := (public.hanyu_synthetic_hash(p_id::text||':profile:v1')%100)::integer;
  chance integer;
  week_start date := p_day-(extract(isodow from p_day)::integer-1);
begin
  if p_day<(select starts_on from public.synthetic_lifecycle_settings where singleton) then
    return public.hanyu_synthetic_has_activity_v1(p_id,p_day);
  end if;
  phase := coalesce(public.hanyu_synthetic_phase_for(p_id,p_day),'regular');
  if phase in ('paused','not_joined') then return false; end if;
  chance := case when profile<20 then 25+profile%15 when profile<70 then 45+profile%26
    when profile<95 then 72+profile%16 else 90+profile%6 end;
  chance := chance+case phase when 'enthusiastic' then 20 when 'settling' then -12
    when 'returning' then 15 when 'exam_prep' then 24 when 'recovery' then -25 else 0 end;
  if extract(isodow from p_day)>=6 then
    chance := chance+(public.hanyu_synthetic_hash(p_id::text||':weekend:v1')%31)::integer-15;
  end if;
  if phase<>'exam_prep' and public.hanyu_synthetic_hash(p_id::text||':'||week_start::text||':busy:v1')%6=0 then
    chance := chance*35/100;
  end if;
  return public.hanyu_synthetic_hash(p_id::text||':'||p_day::text||':study:v1')%100<greatest(5,least(97,chance));
end;
$$;

create or replace function public.hanyu_synthetic_daily_xp(p_id uuid,p_day date,p_min integer,p_max integer)
returns integer language plpgsql stable strict set search_path='' as $$
declare
  roll bigint := public.hanyu_synthetic_hash(p_id::text||':'||p_day::text||':xp:v1')%1001;
  low integer := greatest(1,p_min);
  phase text;
  scaled bigint;
begin
  if p_day<(select starts_on from public.synthetic_lifecycle_settings where singleton) then
    return public.hanyu_synthetic_daily_xp_v1(p_id,p_day,p_min,p_max);
  end if;
  if p_max<=0 or not public.hanyu_synthetic_has_activity(p_id,p_day) then return 0; end if;
  phase := public.hanyu_synthetic_phase_for(p_id,p_day);
  scaled := case when phase in ('exam_prep','enthusiastic') then roll*1000
    when phase in ('settling','recovery') then roll*roll*roll/1000 else roll*roll end;
  return least(p_max,low+(scaled*greatest(0,p_max-low)/1000000)::integer);
end;
$$;

-- Callers that now consult lifecycle rows must not claim immutable volatility.
alter function public.hanyu_synthetic_streak_at(uuid,date,integer,date,integer,date) stable;
alter function public.hanyu_synthetic_sessions(uuid,date,integer,integer,timestamptz) stable;
alter function public.hanyu_synthetic_session_xp_at(uuid,date,integer,integer,timestamptz,timestamptz) stable;
do $$
declare
  definition text := pg_get_functiondef('public.hanyu_synthetic_sessions(uuid,date,integer,integer,timestamptz)'::regprocedure);
  original text := 'count_sessions := least(budget,case when roll<40 then 1 when roll<85 then 2 else 3 end);';
begin
  if strpos(definition,original)=0 then raise exception 'Unexpected session function'; end if;
  execute replace(definition,original,'count_sessions := least(budget,case when p_day>=(select starts_on from public.synthetic_lifecycle_settings where singleton) and public.hanyu_synthetic_phase_for(p_id,p_day)=''exam_prep'' then case when roll<65 then 3 else 2 end else case when roll<40 then 1 when roll<85 then 2 else 3 end end);');
end;
$$;

create function public.hanyu_synthetic_hsk_for(p_base text,p_new_lessons integer)
returns text language plpgsql immutable set search_path='' as $$
declare
  levels text[] := array['Mới học','HSK 1','HSK 2','HSK 3','HSK 4','HSK 5','HSK 6','HSK 7-9'];
  thresholds integer[] := array[0,20,65,140,280,500,850,1400];
  base_index integer := coalesce(array_position(levels,p_base),1);
  competency integer;
  i integer;
begin
  competency := thresholds[base_index]+greatest(0,p_new_lessons);
  for i in reverse 8..1 loop
    if competency>=thresholds[i] then return levels[i]; end if;
  end loop;
  return levels[base_index];
end;
$$;

create function public.hanyu_synthetic_lesson_score(p_id uuid,p_lesson integer,p_base_score integer,p_base_hsk text)
returns integer language plpgsql immutable set search_path='' as $$
declare
  levels text[] := array['Mới học','HSK 1','HSK 2','HSK 3','HSK 4','HSK 5','HSK 6','HSK 7-9'];
  thresholds integer[] := array[0,20,65,140,280,500,850,1400];
  base_index integer := coalesce(array_position(levels,p_base_hsk),1);
  new_index integer := array_position(levels,public.hanyu_synthetic_hsk_for(p_base_hsk,p_lesson));
  challenge integer := 0;
  noise integer := (public.hanyu_synthetic_hash(p_id::text||':'||p_lesson::text||':lesson-score:v2')%25)::integer-12;
begin
  if new_index>base_index and thresholds[base_index]+p_lesson-thresholds[new_index]<10 then challenge:=8; end if;
  return greatest(40,least(98,case when p_base_score>0 then p_base_score else 55 end
    +least(30,floor(ln(1+greatest(0,p_lesson))*6)::integer)+noise-challenge));
end;
$$;

create function public.hanyu_synthetic_progress_at(p_id uuid,p_now timestamptz)
returns table(completed integer,average_score integer,hsk text)
language plpgsql stable set search_path='' as $$
declare
  learner public.synthetic_learners%rowtype;
  baseline public.synthetic_progress_baselines%rowtype;
  cutover date;
  earned integer;
  extra integer;
  score_sum bigint;
  lesson_cost integer := 40+(public.hanyu_synthetic_hash(p_id::text||':lesson-cost:v2')%21)::integer;
begin
  select * into learner from public.synthetic_learners where id=p_id;
  if not found then return; end if;
  select starts_on into cutover from public.synthetic_lifecycle_settings where singleton;
  earned := public.hanyu_synthetic_xp_gain_at(p_id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,p_now);
  if (p_now at time zone 'Asia/Bangkok')::date<cutover then
    completed:=learner.completed_base+earned/45; average_score:=learner.average_score; hsk:=learner.hsk;
    return next; return;
  end if;
  select * into baseline from public.synthetic_progress_baselines where learner_id=p_id;
  if not found then
    baseline.gain:=0; baseline.completed:=learner.completed_base;
    baseline.average_score:=learner.average_score; baseline.hsk:=learner.hsk;
  end if;
  extra := greatest(0,earned-baseline.gain)/lesson_cost;
  completed := baseline.completed+extra;
  hsk := public.hanyu_synthetic_hsk_for(baseline.hsk,extra);
  select coalesce(sum(public.hanyu_synthetic_lesson_score(p_id,i,baseline.average_score,baseline.hsk)),0)
    into score_sum from generate_series(1,extra) i;
  average_score := case when completed=0 then 0 else round(
    (baseline.completed::bigint*baseline.average_score+score_sum)::numeric/completed)::integer end;
  return next;
end;
$$;

create function public.hanyu_reset_synthetic_progress_baseline(
  p_id uuid,p_now timestamptz,p_completed integer default null,p_score integer default null,p_hsk text default null
)
returns void language plpgsql set search_path='' as $$
declare learner public.synthetic_learners%rowtype; earned integer;
begin
  select * into learner from public.synthetic_learners where id=p_id;
  if not found then raise exception 'Synthetic learner not found'; end if;
  earned := public.hanyu_synthetic_xp_gain_at(p_id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,p_now);
  insert into public.synthetic_progress_baselines(learner_id,gain,completed,average_score,hsk,anchored_at)
  values(p_id,earned,coalesce(p_completed,learner.completed_base+earned/45),
    coalesce(p_score,learner.average_score),coalesce(p_hsk,learner.hsk),p_now)
  on conflict(learner_id) do update set gain=excluded.gain,completed=excluded.completed,
    average_score=excluded.average_score,hsk=excluded.hsk,anchored_at=excluded.anchored_at;
end;
$$;

-- Preserve signatures and grants; patch only validated portions of deployed RPCs.
do $$
declare definition text;
begin
  definition := pg_get_functiondef('public.get_public_leaderboard(text,text,text,text,integer,integer,boolean)'::regprocedure);
  if strpos(definition,'(synthetic.completed_base + synthetic.total_gain / 45)::integer as completed')=0
    or strpos(definition,'from synthetic_scored synthetic')=0 then raise exception 'Unexpected public RPC'; end if;
  definition := replace(definition,'(synthetic.completed_base + synthetic.total_gain / 45)::integer as completed','progress.completed');
  definition := replace(definition,'synthetic.average_score,','progress.average_score,');
  definition := replace(definition,'synthetic.hsk,','progress.hsk,');
  execute replace(definition,'from synthetic_scored synthetic','from synthetic_scored synthetic cross join lateral public.hanyu_synthetic_progress_at(synthetic.id,pg_catalog.now()) progress');
  definition := pg_get_functiondef('public.admin_get_synthetic_learners(text,integer,integer)'::regprocedure);
  if strpos(definition,'learner.hsk,')=0 then raise exception 'Unexpected admin RPC'; end if;
  definition := replace(definition,'learner.hsk,','progress.hsk,');
  execute replace(definition,'from public.synthetic_learners learner','from public.synthetic_learners learner cross join lateral public.hanyu_synthetic_progress_at(learner.id,pg_catalog.now()) progress');

  definition := pg_get_functiondef('public.hanyu_process_synthetic_entries_at(timestamptz)'::regprocedure);
  if strpos(definition,'joined_on=today, starting_xp=0, xp_adjustment=0, completed_base=0,')=0
    or strpos(definition,'if changed=1 then')=0 then raise exception 'Unexpected entry RPC'; end if;
  definition := replace(definition,'joined_on=today, starting_xp=0, xp_adjustment=0, completed_base=0,',
    'joined_on=today, starting_xp=0, xp_adjustment=0, completed_base=0, hsk=''Mới học'',');
  -- Mean is derived from completed lessons; raw first-day score is only a legacy field.
  execute replace(definition,'if changed=1 then','if changed=1 then
    if queued.entry_kind=''new'' then
      perform public.hanyu_reset_synthetic_progress_baseline(queued.learner_id,p_now,0,0,''Mới học'');
    end if;');

  definition := pg_get_functiondef('public.admin_create_synthetic_learner(text,integer,text,integer,integer,integer,text)'::regprocedure);
  if strpos(definition,'return new_id;')=0 then raise exception 'Unexpected admin create RPC'; end if;
  execute replace(definition,'return new_id;','perform public.hanyu_reset_synthetic_progress_baseline(new_id,pg_catalog.now()); return new_id;');
  definition := pg_get_functiondef('public.admin_update_synthetic_learner(uuid,text,integer,text,integer,integer,integer,text)'::regprocedure);
  if strpos(definition,'recalculated_gain integer;')=0 or strpos(definition,'adjusted_joined_on :=')=0
    or strpos(definition,'return true;')=0 then raise exception 'Unexpected admin update RPC'; end if;
  definition := replace(definition,'recalculated_gain integer;','recalculated_gain integer; prior_completed integer; prior_score integer;');
  definition := replace(definition,'adjusted_joined_on :=','select p.completed,p.average_score into prior_completed,prior_score from public.hanyu_synthetic_progress_at(p_learner_id,pg_catalog.now()) p; adjusted_joined_on :=');
  execute replace(definition,'return true;','perform public.hanyu_reset_synthetic_progress_baseline(p_learner_id,pg_catalog.now(),prior_completed,prior_score,p_hsk); return true;');
end;
$$;

revoke all on function public.hanyu_synthetic_has_activity_v1(uuid,date) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_daily_xp_v1(uuid,date,integer,integer) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_phase(uuid,date,date) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_phase_for(uuid,date) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_hsk_for(text,integer) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_lesson_score(uuid,integer,integer,text) from public,anon,authenticated;
revoke all on function public.hanyu_synthetic_progress_at(uuid,timestamptz) from public,anon,authenticated;
revoke all on function public.hanyu_reset_synthetic_progress_baseline(uuid,timestamptz,integer,integer,text) from public,anon,authenticated;

do $$
begin
  if exists(select 1 from lifecycle_before b join public.synthetic_learners s using(id)
    where (to_jsonb(b)-'old_gain')<>to_jsonb(s)
      or b.old_gain<>public.hanyu_synthetic_xp_gain(s.id,s.joined_on,s.daily_xp_min,s.daily_xp_max))
    or (select jsonb_agg(to_jsonb(b) order by user_id) from lifecycle_public_before b)
      is distinct from (select jsonb_agg(to_jsonb(a) order by user_id) from public.get_public_leaderboard(p_limit=>100) a)
  then raise exception 'Existing learner data or public achievements changed'; end if;
end;
$$;
select jsonb_build_object('starts_on',(select starts_on from public.synthetic_lifecycle_settings),
  'existing_data_preserved',true,'baseline_count',(select count(*) from public.synthetic_progress_baselines)) as lifecycle_result;
commit;
