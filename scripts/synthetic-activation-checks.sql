-- Run inside a rollback-only migration rehearsal.
create temporary table activation_test_before on commit drop as
select * from public.synthetic_learners;
update public.synthetic_activation_settings
set starts_on = (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
do $$
declare
  first_result jsonb;
  second_result jsonb;
  activated integer;
begin
  first_result := public.hanyu_activate_daily_synthetic_learners();
  second_result := public.hanyu_activate_daily_synthetic_learners();
  activated := (first_result->>'activated_count')::integer;
  if first_result->>'status' <> 'completed' or activated not between 3 and 10
    or second_result->>'status' <> 'already_ran'
    or (select count(*) from public.synthetic_activation_runs) <> 1
  then raise exception 'Daily limit or idempotence failed'; end if;
  if (select count(*) from public.synthetic_learners where active)
    <> (select count(*) from activation_test_before where active) + activated
  then raise exception 'Activation count failed'; end if;
  if exists (
    select 1 from activation_test_before b join public.synthetic_learners s using(id)
    where (to_jsonb(b) - array['active','updated_at'])
      <> (to_jsonb(s) - array['active','updated_at'])
      or (b.active and not s.active)
  ) then raise exception 'Protected learner data changed'; end if;
  -- Test exhaustion: fewer than three remaining activates only the remaining rows.
  update public.synthetic_activation_runs set run_on = run_on - 1;
  update public.synthetic_learners set active = true;
  update public.synthetic_learners set active = false
    where id in (select id from public.synthetic_learners order by id limit 2);
  first_result := public.hanyu_activate_daily_synthetic_learners();
  if (first_result->>'activated_count')::integer <> 2
    or (first_result->>'remaining_count')::integer <> 0
    or (select enabled from public.synthetic_activation_settings where singleton)
  then raise exception 'Pool exhaustion handling failed'; end if;
end;
$$;
select jsonb_build_object('checks_passed',true,'job_schedule',
  (select schedule from cron.job where jobname='hanyu-daily-synthetic-activation')) as test_result;
