-- Sync culture-game XP and include it in the public learning leaderboard.

alter table public.leaderboard_stats
  add column if not exists culture_xp integer not null default 0 check (culture_xp >= 0),
  add column if not exists culture_weekly_xp integer not null default 0 check (culture_weekly_xp >= 0);

create table if not exists public.culture_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_slug text not null,
  done_count integer not null default 0,
  xp integer not null default 0,
  weekly_xp integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, topic_slug),
  constraint culture_progress_topic check (
    topic_slug in ('lich-su', 'van-hoc', 'van-hoa', 'nghe-thuat', 'khoa-hoc', 'thien-van', 'doi-song')
  ),
  constraint culture_progress_values check (
    done_count between 0 and case topic_slug
      when 'lich-su' then 200
      when 'van-hoc' then 200
      when 'van-hoa' then 171
      when 'nghe-thuat' then 118
      when 'khoa-hoc' then 69
      when 'thien-van' then 144
      when 'doi-song' then 95
    end
    and xp between 0 and case topic_slug
      when 'lich-su' then 4000
      when 'van-hoc' then 4000
      when 'van-hoa' then 3420
      when 'nghe-thuat' then 2360
      when 'khoa-hoc' then 1380
      when 'thien-van' then 2880
      when 'doi-song' then 1900
    end
    and weekly_xp between 0 and xp
  )
);

alter table public.culture_progress enable row level security;

drop policy if exists "Users read their own culture progress" on public.culture_progress;
create policy "Users read their own culture progress"
  on public.culture_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users insert their own culture progress" on public.culture_progress;
create policy "Users insert their own culture progress"
  on public.culture_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users update their own culture progress" on public.culture_progress;
create policy "Users update their own culture progress"
  on public.culture_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create or replace function public.hanyu_prepare_culture_progress()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := pg_catalog.now();
  if tg_op = 'UPDATE' then
    -- Overall earned XP is monotonic across devices. Weekly XP is a rolling
    -- client summary and is allowed to decrease as older awards expire.
    new.xp := greatest(old.xp, new.xp);
  end if;
  return new;
end;
$$;

drop trigger if exists prepare_culture_progress on public.culture_progress;
create trigger prepare_culture_progress
  before insert or update on public.culture_progress
  for each row execute function public.hanyu_prepare_culture_progress();

create or replace function public.hanyu_rebuild_culture_stats()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  xp_delta integer := 0;
  weekly_xp_delta integer := 0;
begin
  if tg_op = 'INSERT' then
    xp_delta := new.xp;
    weekly_xp_delta := new.weekly_xp;
  else
    xp_delta := new.xp - old.xp;
    weekly_xp_delta := new.weekly_xp - old.weekly_xp;
  end if;

  insert into public.leaderboard_stats as stats (user_id, culture_xp, culture_weekly_xp, updated_at)
  values (new.user_id, new.xp, new.weekly_xp, pg_catalog.now())
  on conflict (user_id) do update set
    -- Apply the topic delta while holding the leaderboard row lock. Recomputing
    -- SUM() here loses updates when several topic upserts run concurrently.
    culture_xp = greatest(0, stats.culture_xp + xp_delta),
    culture_weekly_xp = greatest(
      0,
      stats.culture_weekly_xp + weekly_xp_delta
    ),
    updated_at = excluded.updated_at;

  return new;
end;
$$;

drop trigger if exists rebuild_culture_stats on public.culture_progress;
create trigger rebuild_culture_stats
  after insert or update on public.culture_progress
  for each row execute function public.hanyu_rebuild_culture_stats();

drop view if exists public.public_leaderboard;
create view public.public_leaderboard
with (security_invoker = true)
as
select
  s.user_id,
  p.display_name,
  p.username,
  p.avatar_url,
  s.xp + s.culture_xp as xp,
  s.weekly_xp + s.culture_weekly_xp as weekly_xp,
  s.completed,
  s.average_score,
  s.streak,
  s.hsk,
  s.updated_at
from public.leaderboard_stats s
join public.profiles p on p.id = s.user_id;

revoke all on table public.culture_progress from anon, authenticated;
grant select, insert, update on table public.culture_progress to authenticated;
grant select on table public.public_leaderboard to anon, authenticated;

revoke execute on function public.hanyu_prepare_culture_progress() from public, anon, authenticated;
revoke execute on function public.hanyu_rebuild_culture_stats() from public, anon, authenticated;
