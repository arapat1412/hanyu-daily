-- Append inside the migration transaction, then ROLLBACK; never persist fixtures.
create temporary table entry_test_before on commit drop as
select * from public.synthetic_learners;
update public.synthetic_activation_settings
set starts_on=(pg_catalog.now() at time zone 'Asia/Bangkok')::date where singleton;
do $$
declare
  today date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  start_time timestamptz;
  first_time timestamptz;
  first_id uuid;
  second_id uuid;
  third_id uuid;
  planned integer;
  result jsonb;
  next_result jsonb;
  first_new public.synthetic_learners%rowtype;
  returned public.synthetic_learners%rowtype;
begin
  start_time := (today + time '00:00') at time zone 'Asia/Bangkok';
  result := public.hanyu_process_synthetic_entries_at(start_time);
  select count(*),min(scheduled_at) into planned,first_time
    from public.synthetic_activation_queue where run_on=today;
  if planned not between 3 and 10 or (result->>'activated_now')::integer <> 0 then
    raise exception 'Daily planning count or premature activation failed';
  end if;
  if exists(select 1 from public.synthetic_activation_queue where run_on=today and
    ((scheduled_at at time zone 'Asia/Bangkok')::time < time '07:00'
      or (scheduled_at at time zone 'Asia/Bangkok')::time >= time '23:00'))
  or exists(select 1 from (
    select scheduled_at-lag(scheduled_at) over(order by scheduled_at) as gap
    from public.synthetic_activation_queue where run_on=today
  ) times where gap < interval '48 minutes') then
    raise exception 'Local time window or spacing failed';
  end if;
  perform public.hanyu_process_synthetic_entries_at(start_time);
  if (select count(*) from public.synthetic_activation_queue where run_on=today) <> planned then
    raise exception 'Repeated planner changed the saved plan';
  end if;
  select learner_id into first_id from public.synthetic_activation_queue where run_on=today order by scheduled_at limit 1;
  select learner_id into second_id from public.synthetic_activation_queue where run_on=today order by scheduled_at offset 1 limit 1;
  select learner_id into third_id from public.synthetic_activation_queue where run_on=today order by scheduled_at offset 2 limit 1;
  -- Ensure both branches and an admin-enabled conflict are exercised every run.
  update public.synthetic_activation_queue set entry_kind='new' where learner_id=first_id;
  update public.synthetic_activation_queue set entry_kind='returning' where learner_id=second_id;
  update public.synthetic_learners set active=true where id=third_id;
  result := public.hanyu_process_synthetic_entries_at(first_time-interval '1 second');
  if (result->>'activated_now')::integer <> 0 then raise exception 'Released before due time'; end if;
  result := public.hanyu_process_synthetic_entries_at(first_time+interval '1 second');
  if (result->>'activated_now')::integer <> 1 then raise exception 'First release was not individual'; end if;
  result := public.hanyu_process_synthetic_entries_at((today+time '23:59') at time zone 'Asia/Bangkok');
  if (result->>'activated_today')::integer <> planned-1
    or (result->>'pending_today')::integer <> 0
    or (select status from public.synthetic_activation_queue where learner_id=third_id) <> 'skipped'
  then raise exception 'Day completion or administrator conflict handling failed'; end if;
  next_result := public.hanyu_process_synthetic_entries_at((today+time '23:59') at time zone 'Asia/Bangkok');
  if (next_result->>'activated_now')::integer <> 0 then raise exception 'Duplicate release'; end if;
  select * into first_new from public.synthetic_learners where id=first_id;
  if first_new.joined_on <> today or first_new.starting_xp <> 0
    or first_new.xp_adjustment <> 0 or first_new.completed_base <> 0
    or first_new.streak_days not between 0 and 1
    or public.hanyu_synthetic_xp_gain(first_new.id,first_new.joined_on,first_new.daily_xp_min,first_new.daily_xp_max)
      <> public.hanyu_synthetic_daily_xp(first_new.id,today,first_new.daily_xp_min,first_new.daily_xp_max)
  then raise exception 'New learner inherited history'; end if;
  select * into returned from public.synthetic_learners where id=second_id;
  if exists(select 1 from entry_test_before b where b.id=second_id and
    (returned.starting_xp,returned.xp_adjustment,returned.completed_base,returned.joined_on,returned.average_score)
      is distinct from (b.starting_xp,b.xp_adjustment,b.completed_base,b.joined_on,b.average_score))
    or returned.streak_days not between 0 and 1
  then raise exception 'Returning learner lost achievements or retained an old streak'; end if;
  if exists(select 1 from entry_test_before b join public.synthetic_learners s using(id)
    where (to_jsonb(b)-array['active','updated_at','simulation_activated_at','joined_on','starting_xp',
      'xp_adjustment','completed_base','average_score','streak_days','streak_updated_on'])
    <> (to_jsonb(s)-array['active','updated_at','simulation_activated_at','joined_on','starting_xp',
      'xp_adjustment','completed_base','average_score','streak_days','streak_updated_on']))
  then raise exception 'Identity or XP configuration changed'; end if;
  -- Already revealed rows manually disabled later must remain under admin control.
  update public.synthetic_learners set active=false where id=first_id;
  perform public.hanyu_process_synthetic_entries_at(start_time+interval '1 day');
  if exists(select 1 from public.synthetic_activation_queue where run_on=today+1 and learner_id=first_id)
    or (select count(*) from public.synthetic_activation_queue where run_on=today+1) not between 3 and 10
  then raise exception 'Recycled a revealed learner or failed next-day planning'; end if;
  -- Leave two unplanned candidates, then simulate a missed day and pool exhaustion.
  update public.synthetic_learners s set active=true
    where not s.active and s.simulation_activated_at is null
      and not exists(select 1 from public.synthetic_activation_queue q where q.learner_id=s.id)
      and s.id not in (
        select candidate.id from public.synthetic_learners candidate
        where not candidate.active and candidate.simulation_activated_at is null
          and not exists(select 1 from public.synthetic_activation_queue q where q.learner_id=candidate.id)
        order by candidate.id limit 2
      );
  result := public.hanyu_process_synthetic_entries_at(start_time+interval '2 days');
  if exists(select 1 from public.synthetic_activation_queue where run_on=today+1 and status<>'skipped')
    or (select count(*) from public.synthetic_activation_queue where run_on=today+2) <> 2
    or (result->>'activated_now')::integer <> 0
  then raise exception 'Outage catch-up or small final batch failed'; end if;
  result := public.hanyu_process_synthetic_entries_at(start_time+interval '2 days 23 hours 59 minutes');
  if (result->>'activated_now')::integer <> 2
    or (select enabled from public.synthetic_activation_settings where singleton)
    or exists(select 1 from public.synthetic_activation_queue where status='pending')
  then raise exception 'Final batch did not complete or scheduler did not stop'; end if;
end;
$$;
select jsonb_build_object('checks_passed',true,'planned',
  (select count(*) from public.synthetic_activation_queue), 'schedule',
  (select schedule from cron.job where jobname='hanyu-daily-synthetic-activation')) as test_result;
