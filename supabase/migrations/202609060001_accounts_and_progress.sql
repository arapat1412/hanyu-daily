-- Hanyu Daily: cloud accounts, private learning progress and a safe public leaderboard.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  display_name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_format check (
    username = lower(username)
    and username ~ '^[a-z0-9._]{3,24}$'
  ),
  constraint profiles_display_name_length check (
    char_length(trim(display_name)) between 2 and 80
  )
);

create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  progress jsonb not null default '{"version":1,"bookmarks":[],"known":[],"mistakes":[],"lessons":{},"attempts":[]}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint learning_progress_is_object check (jsonb_typeof(progress) = 'object')
);

create table if not exists public.leaderboard_stats (
  user_id uuid primary key references auth.users(id) on delete cascade,
  xp integer not null default 0 check (xp >= 0),
  weekly_xp integer not null default 0 check (weekly_xp >= 0),
  completed integer not null default 0 check (completed >= 0),
  average_score integer not null default 0 check (average_score between 0 and 100),
  streak integer not null default 0 check (streak >= 0),
  hsk text not null default 'Mới học' check (char_length(hsk) between 1 and 20),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.learning_progress enable row level security;
alter table public.leaderboard_stats enable row level security;

drop policy if exists "Public profiles are readable" on public.profiles;
create policy "Public profiles are readable"
  on public.profiles for select
  to anon, authenticated
  using (true);

drop policy if exists "Users update their own profile" on public.profiles;
create policy "Users update their own profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists "Users read their own progress" on public.learning_progress;
create policy "Users read their own progress"
  on public.learning_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users insert their own progress" on public.learning_progress;
create policy "Users insert their own progress"
  on public.learning_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users update their own progress" on public.learning_progress;
create policy "Users update their own progress"
  on public.learning_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Leaderboard stats are public" on public.leaderboard_stats;
create policy "Leaderboard stats are public"
  on public.leaderboard_stats for select
  to anon, authenticated
  using (true);

drop policy if exists "Users insert their own leaderboard stats" on public.leaderboard_stats;
create policy "Users insert their own leaderboard stats"
  on public.leaderboard_stats for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users update their own leaderboard stats" on public.leaderboard_stats;
create policy "Users update their own leaderboard stats"
  on public.leaderboard_stats for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  new_username text := lower(trim(coalesce(new.raw_user_meta_data ->> 'username', '')));
  new_display_name text := trim(coalesce(new.raw_user_meta_data ->> 'display_name', ''));
begin
  if new_username !~ '^[a-z0-9._]{3,24}$' then
    raise exception 'Invalid username';
  end if;
  if char_length(new_display_name) < 2 or char_length(new_display_name) > 80 then
    raise exception 'Invalid display name';
  end if;

  insert into public.profiles (id, username, display_name)
  values (new.id, new_username, new_display_name);

  insert into public.learning_progress (user_id) values (new.id);
  insert into public.leaderboard_stats (user_id) values (new.id);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

drop view if exists public.public_leaderboard;
create view public.public_leaderboard
with (security_invoker = true)
as
select
  s.user_id,
  p.display_name,
  p.username,
  s.xp,
  s.weekly_xp,
  s.completed,
  s.average_score,
  s.streak,
  s.hsk,
  s.updated_at
from public.leaderboard_stats s
join public.profiles p on p.id = s.user_id;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.learning_progress from anon, authenticated;
revoke all on table public.leaderboard_stats from anon, authenticated;
grant select on table public.profiles to anon, authenticated;
grant update (username, display_name, updated_at) on table public.profiles to authenticated;
grant select, insert, update on table public.learning_progress to authenticated;
grant select on table public.leaderboard_stats to anon, authenticated;
grant insert, update on table public.leaderboard_stats to authenticated;
grant select on table public.public_leaderboard to anon, authenticated;
