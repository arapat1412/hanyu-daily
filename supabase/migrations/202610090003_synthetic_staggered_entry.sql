-- Stagger demo visibility and distinguish new learners from returning learners.
begin;
lock table public.synthetic_learners in share row exclusive mode;

alter table public.synthetic_learners
  add column simulation_entry_kind text not null default 'returning'
    check (simulation_entry_kind in ('new','returning')),
  add column simulation_activated_at timestamptz;
update public.synthetic_learners set
  simulation_entry_kind = case when not active and
    public.hanyu_synthetic_hash(id::text || ':entry-kind:v1') % 100 < 70
    then 'new' else 'returning' end,
  simulation_activated_at = case when active then pg_catalog.now() else null end;

create table public.synthetic_activation_queue (
  learner_id uuid primary key,
  run_on date not null references public.synthetic_activation_runs(run_on),
  entry_kind text not null check (entry_kind in ('new','returning')),
  scheduled_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending','activated','skipped')),
  processed_at timestamptz,
  check ((scheduled_at at time zone 'Asia/Bangkok')::date = run_on)
);
create index synthetic_activation_queue_due_idx
  on public.synthetic_activation_queue(scheduled_at) where status = 'pending';
alter table public.synthetic_activation_queue enable row level security;
revoke all on table public.synthetic_activation_queue from public, anon, authenticated;

-- Private explicit-clock entry point permits transaction-only scheduler tests.
create function public.hanyu_process_synthetic_entries_at(p_now timestamptz)
returns jsonb language plpgsql set search_path = '' as $$
declare
  today date := (p_now at time zone 'Asia/Bangkok')::date;
  settings public.synthetic_activation_settings%rowtype;
  queued public.synthetic_activation_queue%rowtype;
  requested integer;
  selected_count integer;
  selected_ids uuid[];
  ordinal integer;
  local_start timestamptz;
  due_at timestamptz;
  entry text;
  remaining integer;
  changed integer;
  activated_count integer := 0;
begin
  if p_now is null then raise exception 'A processing time is required'; end if;
  lock table public.synthetic_learners in share row exclusive mode;
  select * into settings from public.synthetic_activation_settings where singleton;
  if not found or not settings.enabled or today < settings.starts_on then
    return jsonb_build_object('status','not_due','run_on',today);
  end if;

  -- Never release yesterday's missed queue in today's batch after an outage.
  update public.synthetic_activation_queue set status='skipped', processed_at=p_now
    where status='pending' and run_on < today;

  if not exists (select 1 from public.synthetic_activation_runs where run_on=today) then
    requested := 3 + floor(pg_catalog.random() * 8)::integer;
    select coalesce(array_agg(id), '{}'::uuid[]) into selected_ids from (
      select s.id from public.synthetic_learners s
      where not s.active and s.simulation_activated_at is null
        and not exists (select 1 from public.synthetic_activation_queue q where q.learner_id=s.id)
      order by pg_catalog.random() limit requested
    ) candidates;
    selected_count := cardinality(selected_ids);
    select count(*) into remaining from public.synthetic_learners s
      where not s.active and s.simulation_activated_at is null
        and not exists (select 1 from public.synthetic_activation_queue q where q.learner_id=s.id);
    insert into public.synthetic_activation_runs(run_on,requested_count,learner_ids,remaining_count)
      values(today,requested,'{}'::uuid[],remaining);
    local_start := (today + time '07:00') at time zone 'Asia/Bangkok';
    for ordinal in 1..selected_count loop
      -- Jitter within the middle half of each slot: >=48 minutes apart at 10/day.
      due_at := local_start + interval '1 minute' *
        (960.0 / selected_count * (ordinal - 0.75 + pg_catalog.random() * 0.5));
      select simulation_entry_kind into entry from public.synthetic_learners
        where id=selected_ids[ordinal];
      insert into public.synthetic_activation_queue(learner_id,run_on,entry_kind,scheduled_at)
        values(selected_ids[ordinal],today,entry,due_at);
    end loop;
  end if;

  for queued in select * from public.synthetic_activation_queue
    where status='pending' and run_on=today and scheduled_at<=p_now
    order by scheduled_at
  loop
    -- Admin-enabled rows are skipped; an already revealed learner is never recycled.
    if queued.entry_kind='new' then
      update public.synthetic_learners s set
        active=true, simulation_activated_at=p_now, updated_at=p_now,
        joined_on=today, starting_xp=0, xp_adjustment=0, completed_base=0,
        average_score=case when public.hanyu_synthetic_daily_xp(s.id,today,s.daily_xp_min,s.daily_xp_max)>0
          then 55+(public.hanyu_synthetic_hash(s.id::text || ':first-score:v1')%36)::integer else 0 end,
        streak_days=case when public.hanyu_synthetic_daily_xp(s.id,today,s.daily_xp_min,s.daily_xp_max)>0
          then 1 else 0 end,
        streak_updated_on=today
      where s.id=queued.learner_id and not s.active and s.simulation_activated_at is null;
    else
      update public.synthetic_learners s set
        active=true, simulation_activated_at=p_now, updated_at=p_now,
        streak_days=case when public.hanyu_synthetic_daily_xp(s.id,today,s.daily_xp_min,s.daily_xp_max)>0
          then 1 else 0 end,
        streak_updated_on=today
      where s.id=queued.learner_id and not s.active and s.simulation_activated_at is null;
    end if;
    get diagnostics changed = row_count;
    update public.synthetic_activation_queue
      set status=case when changed=1 then 'activated' else 'skipped' end, processed_at=p_now
      where learner_id=queued.learner_id;
    if changed=1 then
      activated_count := activated_count+1;
      update public.synthetic_activation_runs set learner_ids=array_append(learner_ids,queued.learner_id)
        where run_on=today;
    end if;
  end loop;
  select count(*) into remaining from public.synthetic_learners s
    where not s.active and s.simulation_activated_at is null
      and not exists (select 1 from public.synthetic_activation_queue q where q.learner_id=s.id);
  update public.synthetic_activation_runs set remaining_count=remaining where run_on=today;
  if remaining=0 and not exists (select 1 from public.synthetic_activation_queue where status='pending') then
    update public.synthetic_activation_settings set enabled=false where singleton;
  end if;
  return jsonb_build_object('status','processed','run_on',today,'activated_now',activated_count,
    'activated_today',(select cardinality(learner_ids) from public.synthetic_activation_runs where run_on=today),
    'pending_today',(select count(*) from public.synthetic_activation_queue where run_on=today and status='pending'),
    'remaining_unplanned',remaining);
end;
$$;
revoke all on function public.hanyu_process_synthetic_entries_at(timestamptz)
  from public, anon, authenticated;

create or replace function public.hanyu_activate_daily_synthetic_learners()
returns jsonb language sql security definer set search_path = '' as $$
  select public.hanyu_process_synthetic_entries_at(pg_catalog.now());
$$;
revoke all on function public.hanyu_activate_daily_synthetic_learners()
  from public, anon, authenticated;

-- Update the existing job instead of adding a duplicate daily batch.
select cron.schedule('hanyu-daily-synthetic-activation','*/5 * * * *',
  'select public.hanyu_activate_daily_synthetic_learners();');
commit;
