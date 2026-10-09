-- Run inside the migration transaction, followed by ROLLBACK.
do $$
declare
  learner record;
  planned record;
  test_day date;
  cutover date := (select starts_on from public.synthetic_session_settings where singleton);
  full_award integer;
  credited integer;
  previous_end timestamptz;
  previous_credit integer;
  session_count integer;
  matched_windows integer := 0;
  study_days integer := 0;
  counts integer[] := '{}';
  first_id uuid;
  return_id uuid;
  arrival timestamptz;
  first_end timestamptz;
  before_total integer;
  after_total integer;
  day_end timestamptz;
  clock_streak integer;
begin
  -- Sample all active learners over two weeks, including rest days and shifted hours.
  for learner in select * from public.synthetic_learners where active loop
    for offset_day in 0..13 loop
      test_day := cutover+offset_day;
      full_award := public.hanyu_synthetic_daily_xp(learner.id,test_day,learner.daily_xp_min,learner.daily_xp_max);
      session_count := 0;
      previous_end := null;
      previous_credit := 0;
      for planned in select * from public.hanyu_synthetic_sessions(learner.id,test_day,learner.daily_xp_min,learner.daily_xp_max) order by session_no loop
        session_count := session_count+1;
        if planned.xp<=0 or (planned.ends_at-planned.starts_at) not between interval '5 minutes' and interval '18 minutes'
          or (planned.starts_at at time zone 'Asia/Bangkok')::date<>test_day
          or (planned.ends_at at time zone 'Asia/Bangkok')::date<>test_day
          or (previous_end is not null and planned.starts_at<=previous_end)
        then raise exception 'Invalid session timing, XP or overlap'; end if;
        credited := public.hanyu_synthetic_session_xp_at(learner.id,test_day,learner.daily_xp_min,learner.daily_xp_max,planned.ends_at-interval '1 microsecond');
        if credited<>previous_credit then raise exception 'XP awarded before session completion'; end if;
        credited := public.hanyu_synthetic_session_xp_at(learner.id,test_day,learner.daily_xp_min,learner.daily_xp_max,planned.ends_at);
        if credited<>previous_credit+planned.xp or credited<previous_credit
          or credited<>public.hanyu_synthetic_session_xp_at(learner.id,test_day,learner.daily_xp_min,learner.daily_xp_max,planned.ends_at)
        then raise exception 'Incremental award or determinism failed'; end if;
        if session_count=1 then
          study_days := study_days+1;
          if (planned.preferred_period='morning' and (planned.starts_at at time zone 'Asia/Bangkok')::time between time '06:00' and time '10:00')
            or (planned.preferred_period='midday' and (planned.starts_at at time zone 'Asia/Bangkok')::time between time '11:00' and time '15:00')
            or (planned.preferred_period='evening' and (planned.starts_at at time zone 'Asia/Bangkok')::time between time '18:00' and time '23:55')
          then matched_windows := matched_windows+1; end if;
        end if;
        previous_credit := credited;
        previous_end := planned.ends_at;
      end loop;
      if previous_credit<>full_award or session_count>3
        or (full_award=0 and session_count<>0) or (full_award>0 and session_count=0)
      then raise exception 'Daily budget, session count or rest day failed'; end if;
      if session_count>0 then counts := array_append(counts,session_count); end if;
      -- Tomorrow begins with no award; completed sessions never cause a midnight jump.
      day_end := (test_day+time '23:59:59') at time zone 'Asia/Bangkok';
      before_total := public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,day_end);
      after_total := public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,
        ((test_day+1)+time '00:00') at time zone 'Asia/Bangkok');
      if before_total<>after_total then raise exception 'XP jumped at midnight'; end if;
      if offset_day>=2 and public.hanyu_synthetic_daily_xp(learner.id,test_day-1,learner.daily_xp_min,learner.daily_xp_max)=0 then
        clock_streak := public.hanyu_synthetic_streak_clock_at(learner.id,learner.joined_on,learner.streak_days,learner.streak_updated_on,
          learner.daily_xp_max,(test_day+time '00:00') at time zone 'Asia/Bangkok');
        if clock_streak<>0 then raise exception 'Yesterday missed but streak survived without today study'; end if;
      end if;
    end loop;
  end loop;
  if matched_windows*100 < study_days*80 or not (1=any(counts) and 2=any(counts) and 3=any(counts)) then
    raise exception 'Habitual window or variety check failed'; end if;
  if exists(select 1 from public.hanyu_synthetic_sessions('f0000000-0000-4000-8000-000000000001',cutover,0,0)) then
    raise exception 'Zero-XP learner has a session'; end if;

  -- Use two already saved future entries; all mutations remain in this rollback transaction.
  select q.learner_id,q.scheduled_at into first_id,arrival from public.synthetic_activation_queue q
    join public.synthetic_learners s on s.id=q.learner_id
    where q.run_on=cutover and q.entry_kind='new'
      and public.hanyu_synthetic_daily_xp(s.id,cutover,s.daily_xp_min,s.daily_xp_max)>0
    order by q.scheduled_at limit 1;
  if first_id is null then raise exception 'No first-day activity fixture available'; end if;
  perform public.hanyu_process_synthetic_entries_at(arrival+interval '1 second');
  select * into learner from public.synthetic_learners where id=first_id;
  if public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,learner.simulation_activated_at)<>0
    or public.hanyu_synthetic_streak_clock_at(learner.id,learner.joined_on,learner.streak_days,learner.streak_updated_on,learner.daily_xp_max,learner.simulation_activated_at)<>0
  then raise exception 'New learner received XP or streak at appearance'; end if;
  select min(ends_at) into first_end from public.hanyu_synthetic_sessions(learner.id,cutover,learner.daily_xp_min,learner.daily_xp_max,learner.simulation_activated_at);
  if first_end<=learner.simulation_activated_at then raise exception 'First session predates arrival'; end if;
  if public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,first_end)<=0
    or public.hanyu_synthetic_streak_clock_at(learner.id,learner.joined_on,learner.streak_days,learner.streak_updated_on,learner.daily_xp_max,first_end)<>1
  then raise exception 'First completed session did not award XP and start the streak'; end if;
  day_end := (cutover+time '23:59:59') at time zone 'Asia/Bangkok';
  if public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,day_end)
    <>public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,(cutover+1+time '00:00') at time zone 'Asia/Bangkok')
  then raise exception 'Arrival day credit changed at midnight'; end if;
  if exists(select 1 from public.hanyu_synthetic_sessions(learner.id,cutover,learner.daily_xp_min,learner.daily_xp_max,
    (cutover+time '23:54') at time zone 'Asia/Bangkok')) then raise exception 'Too-late arrival session crosses midnight'; end if;

  select q.learner_id,q.scheduled_at into return_id,arrival from public.synthetic_activation_queue q
    where q.run_on=cutover and q.status='pending' order by scheduled_at limit 1;
  update public.synthetic_activation_queue set entry_kind='returning' where learner_id=return_id;
  update public.synthetic_learners set simulation_entry_kind='returning' where id=return_id;
  select * into learner from public.synthetic_learners where id=return_id;
  before_total := public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,arrival+interval '1 second');
  perform public.hanyu_process_synthetic_entries_at(arrival+interval '1 second');
  select * into learner from public.synthetic_learners where id=return_id;
  after_total := public.hanyu_synthetic_xp_gain_at(learner.id,learner.joined_on,learner.daily_xp_min,learner.daily_xp_max,null,arrival+interval '1 second');
  if before_total<>after_total then raise exception 'Returning learner lost XP'; end if;
  raise notice 'Habitual-window share: % of % study days',matched_windows,study_days;
end;
$$;
select jsonb_build_object('checks_passed',true,'learners_sampled',49,'days_per_learner',14,
  'starts_on',(select starts_on from public.synthetic_session_settings)) as session_test_result;
