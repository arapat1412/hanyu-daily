-- Final-model regression rehearsal. Append before ROLLBACK, never before COMMIT.
create temporary table lifecycle_fixtures on commit drop as
select id from public.synthetic_learners where active;
do $$
declare
  cutover date := (select starts_on from public.synthetic_lifecycle_settings);
  fixture record;
  day date;
  phase text;
  award integer;
  enthusiastic_studies integer:=0; enthusiastic_days integer:=0;
  settling_studies integer:=0; settling_days integer:=0;
  exam_studies integer:=0; exam_days integer:=0;
  pauses integer:=0; returns integer:=0;
  sample uuid;
  pause_first date;
  pause_last date;
  before_progress record;
  after_progress record;
  prior_completed integer:=0;
  prior_level integer:=1;
  levels text[]:=array['Mới học','HSK 1','HSK 2','HSK 3','HSK 4','HSK 5','HSK 6','HSK 7-9'];
  first_session record;
  first_day date;
  queued_id uuid;
  arrival timestamptz;
  edited_id uuid;
  created_id uuid;
  admin_id uuid;
begin
  -- Controlled new-learner cohort for comparable age phases.
  update public.synthetic_learners s set joined_on=cutover,starting_xp=0,xp_adjustment=0,completed_base=0,
    average_score=0,hsk='Mới học',simulation_entry_kind='new',
    simulation_activated_at=(cutover+time '00:00') at time zone 'Asia/Bangkok',
    streak_days=0,streak_updated_on=cutover-1
    where s.id in(select id from lifecycle_fixtures);
  for fixture in select s.* from public.synthetic_learners s join lifecycle_fixtures f using(id) loop
    perform public.hanyu_reset_synthetic_progress_baseline(fixture.id,(cutover+time '00:00') at time zone 'Asia/Bangkok',0,0,'Mới học');
    for offset_day in 0..179 loop
      day:=cutover+offset_day;
      phase:=public.hanyu_synthetic_phase_for(fixture.id,day);
      award:=public.hanyu_synthetic_daily_xp(fixture.id,day,fixture.daily_xp_min,fixture.daily_xp_max);
      if award<0 or award>fixture.daily_xp_max or (award>0 and award<fixture.daily_xp_min)
        or award<>public.hanyu_synthetic_daily_xp(fixture.id,day,fixture.daily_xp_min,fixture.daily_xp_max)
      then raise exception 'XP bound or determinism failed'; end if;
      if phase='paused' then
        pauses:=pauses+1;
        if award<>0 or exists(select 1 from public.hanyu_synthetic_sessions(fixture.id,day,fixture.daily_xp_min,fixture.daily_xp_max))
        then raise exception 'Long pause still awards XP or creates sessions'; end if;
      elsif phase='returning' and award>0 then returns:=returns+1;
      end if;
      if phase='enthusiastic' then
        enthusiastic_days:=enthusiastic_days+1; enthusiastic_studies:=enthusiastic_studies+(award>0)::integer;
      elsif phase='settling' then
        settling_days:=settling_days+1; settling_studies:=settling_studies+(award>0)::integer;
      elsif phase='exam_prep' then
        exam_days:=exam_days+1; exam_studies:=exam_studies+(award>0)::integer;
        if award>=3 and (select count(*) from public.hanyu_synthetic_sessions(fixture.id,day,fixture.daily_xp_min,fixture.daily_xp_max)) not between 2 and 3
        then raise exception 'Exam preparation did not use extra sessions'; end if;
      end if;
    end loop;
  end loop;
  if pauses=0 or returns=0 or enthusiastic_studies::numeric/enthusiastic_days<=settling_studies::numeric/settling_days
    or exam_studies::numeric/exam_days<=settling_studies::numeric/settling_days
  then raise exception 'Lifecycle phases or participation ordering failed'; end if;

  select s.id into sample from public.synthetic_learners s join lifecycle_fixtures f using(id)
    where exists(select 1 from generate_series(35,95) d
      where public.hanyu_synthetic_phase(s.id,cutover+d,cutover)='paused')
    order by s.daily_xp_max desc,s.id limit 1;
  select * into before_progress from public.hanyu_synthetic_progress_at(sample,(cutover+time '00:00') at time zone 'Asia/Bangkok');
  if before_progress.completed<>0 or before_progress.average_score<>0 or before_progress.hsk<>'Mới học'
  then raise exception 'New learner inherited achievements'; end if;
  select min(cutover+d) into first_day from generate_series(0,20) d
    join public.synthetic_learners s on s.id=sample
    where public.hanyu_synthetic_daily_xp(sample,cutover+d,s.daily_xp_min,s.daily_xp_max)>0;
  select p.* into first_session from public.synthetic_learners s
    cross join lateral public.hanyu_synthetic_sessions(s.id,first_day,s.daily_xp_min,s.daily_xp_max,s.simulation_activated_at) p
    where s.id=sample order by p.session_no limit 1;
  select * into before_progress from public.hanyu_synthetic_progress_at(sample,first_session.ends_at-interval '1 microsecond');
  if before_progress.completed<>0 or before_progress.average_score<>0 then raise exception 'Achievements awarded before the first session'; end if;
  for offset_day in 0..180 by 30 loop
    select * into after_progress from public.hanyu_synthetic_progress_at(sample,(cutover+offset_day+time '23:59:59') at time zone 'Asia/Bangkok');
    if after_progress.completed<prior_completed or array_position(levels,after_progress.hsk)<prior_level
      or after_progress.average_score not between 0 and 100
      or (after_progress.completed=0 and after_progress.average_score<>0)
      or (after_progress.completed>0 and after_progress.average_score not between 40 and 98)
    then raise exception 'Activity and achievement progression diverged'; end if;
    prior_completed:=after_progress.completed; prior_level:=array_position(levels,after_progress.hsk);
  end loop;
  if prior_completed<20 or prior_level<2 then raise exception 'Sustained study never promoted the learner'; end if;
  select min(cutover+d),max(cutover+d) into pause_first,pause_last from generate_series(35,95) d
    where public.hanyu_synthetic_phase(sample,cutover+d,cutover)='paused';
  if pause_last-pause_first+1 not between 10 and 24 then raise exception 'Invalid long pause duration'; end if;
  select * into before_progress from public.hanyu_synthetic_progress_at(sample,(pause_first-1+time '23:59:59') at time zone 'Asia/Bangkok');
  select * into after_progress from public.hanyu_synthetic_progress_at(sample,(pause_last+time '23:59:59') at time zone 'Asia/Bangkok');
  if to_jsonb(before_progress)<>to_jsonb(after_progress) then raise exception 'Achievements changed during the long pause'; end if;
  if (select count(distinct public.hanyu_synthetic_lesson_score(sample,i,55,'Mới học')) from generate_series(1,60) i)<8
    or public.hanyu_synthetic_hsk_for('Mới học',19)<>'Mới học'
    or public.hanyu_synthetic_hsk_for('Mới học',20)<>'HSK 1'
  then raise exception 'Score variation or level threshold failed'; end if;

  -- Actual scheduled first appearance must reset the baseline to a beginner.
  select learner_id,scheduled_at into queued_id,arrival from public.synthetic_activation_queue
    where entry_kind='new' and status='pending' and run_on=cutover order by scheduled_at limit 1;
  if queued_id is null then raise exception 'No scheduled new-entry fixture'; end if;
  perform public.hanyu_process_synthetic_entries_at(arrival+interval '1 second');
  select * into after_progress from public.hanyu_synthetic_progress_at(queued_id,arrival+interval '1 second');
  if after_progress.completed<>0 or after_progress.average_score<>0 or after_progress.hsk<>'Mới học'
    or (select gain from public.synthetic_progress_baselines where learner_id=queued_id)<>0
  then raise exception 'Activation did not reset new learner baseline'; end if;

  -- Exercise the real authorized admin RPC signatures, within this rollback transaction.
  select user_id into admin_id from public.admin_users limit 1;
  if admin_id is null then raise exception 'No existing administrator for RPC check'; end if;
  perform set_config('request.jwt.claim.sub',admin_id::text,true);
  perform set_config('request.jwt.claims',jsonb_build_object('sub',admin_id,'role','authenticated')::text,true);
  select s.id into edited_id from public.synthetic_learners s
    where s.id not in(select id from lifecycle_fixtures) and s.id<>queued_id order by s.id desc limit 1;
  select * into before_progress from public.hanyu_synthetic_progress_at(edited_id,pg_catalog.now());
  select * into fixture from public.synthetic_learners where id=edited_id;
  perform public.admin_update_synthetic_learner(edited_id,fixture.display_name,999,'HSK 3',fixture.daily_xp_min,fixture.daily_xp_max,0,fixture.avatar_url);
  select * into after_progress from public.hanyu_synthetic_progress_at(edited_id,(cutover+time '00:00') at time zone 'Asia/Bangkok');
  if after_progress.completed<>before_progress.completed or after_progress.average_score<>before_progress.average_score
    or after_progress.hsk<>'HSK 3' or (select starting_xp+xp_adjustment+public.hanyu_synthetic_xp_gain(id,joined_on,daily_xp_min,daily_xp_max)
      from public.synthetic_learners where id=edited_id)<>999
  then raise exception 'Admin edit lost achievements or manual XP/level'; end if;
  created_id:=public.admin_create_synthetic_learner('Lifecycle regression fixture',100,'HSK 1',5,30,0,null);
  if not exists(select 1 from public.synthetic_progress_baselines where learner_id=created_id)
    or not exists(select 1 from public.admin_get_synthetic_learners('Lifecycle regression fixture',50,0) where learner_id=created_id)
  then raise exception 'Admin create/read failed'; end if;
  raise notice 'Study rates: enthusiastic %/%, settling %/%, exam %/%; pause days %, returning study days %',
    enthusiastic_studies,enthusiastic_days,settling_studies,settling_days,exam_studies,exam_days,pauses,returns;
end;
$$;
select jsonb_build_object('checks_passed',true,'learners_sampled',(select count(*) from lifecycle_fixtures),
  'days_per_learner',180,'starts_on',(select starts_on from public.synthetic_lifecycle_settings)) as lifecycle_test_result;
