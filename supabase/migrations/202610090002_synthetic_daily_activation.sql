-- Reveal 3-10 existing demo learners daily, starting tomorrow at 09:00 UTC+7.
begin;
create extension if not exists pg_cron with schema pg_catalog;

create table public.synthetic_activation_settings (
  singleton boolean primary key default true check (singleton),
  enabled boolean not null default true,
  starts_on date not null
);
insert into public.synthetic_activation_settings (starts_on)
values ((pg_catalog.now() at time zone 'Asia/Bangkok')::date + 1);

create table public.synthetic_activation_runs (
  run_on date primary key,
  requested_count integer not null check (requested_count between 3 and 10),
  learner_ids uuid[] not null,
  remaining_count integer not null check (remaining_count >= 0),
  created_at timestamptz not null default pg_catalog.now(),
  check (cardinality(learner_ids) <= requested_count)
);
alter table public.synthetic_activation_settings enable row level security;
alter table public.synthetic_activation_runs enable row level security;
revoke all on table public.synthetic_activation_settings, public.synthetic_activation_runs
  from public, anon, authenticated;

create function public.hanyu_activate_daily_synthetic_learners()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  today date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  settings public.synthetic_activation_settings%rowtype;
  previous public.synthetic_activation_runs%rowtype;
  requested integer;
  activated uuid[];
  remaining integer;
begin
  -- Serialize with concurrent invocations and administrator visibility edits.
  lock table public.synthetic_learners in share row exclusive mode;
  select * into settings from public.synthetic_activation_settings where singleton;
  if not found or not settings.enabled or today < settings.starts_on then
    return jsonb_build_object('status','not_due','run_on',today);
  end if;
  select * into previous from public.synthetic_activation_runs where run_on = today;
  if found then
    return jsonb_build_object('status','already_ran','run_on',today,
      'activated_count',cardinality(previous.learner_ids));
  end if;
  requested := 3 + floor(pg_catalog.random() * 8)::integer;
  with picked as (
    select id from public.synthetic_learners where not active
    order by pg_catalog.random() limit requested
  ), changed as (
    update public.synthetic_learners s
    set active = true, updated_at = pg_catalog.now()
    from picked where s.id = picked.id and not s.active
    returning s.id
  ) select coalesce(array_agg(id), '{}'::uuid[]) into activated from changed;
  select count(*) into remaining from public.synthetic_learners where not active;
  insert into public.synthetic_activation_runs(run_on, requested_count, learner_ids, remaining_count)
    values (today, requested, activated, remaining);
  if remaining = 0 then
    update public.synthetic_activation_settings set enabled = false where singleton;
  end if;
  return jsonb_build_object('status','completed','run_on',today,'requested_count',requested,
    'activated_count',cardinality(activated),'remaining_count',remaining);
end;
$$;
revoke all on function public.hanyu_activate_daily_synthetic_learners()
  from public, anon, authenticated;

-- The hosted scheduler uses GMT: 02:00 GMT is 09:00 Asia/Bangkok.
select cron.schedule('hanyu-daily-synthetic-activation', '0 2 * * *',
  'select public.hanyu_activate_daily_synthetic_learners();');
commit;
