-- Hanyu Daily production hardening:
-- 1. leaderboard statistics are derived by the database from validated progress;
-- 2. clients can no longer write leaderboard_stats directly;
-- 3. authenticated learners can submit private, rate-limited feedback.

create or replace function public.hanyu_valid_word_id(word_id text)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select case
    when word_id ~ '^hsk30-[0-9]+$'
      then substring(word_id from '^hsk30-([0-9]+)$')::integer between 1 and 11000
    -- Retained for progress created by early Meiday-layout builds.
    when word_id ~ '^meiday-[0-9]+$'
      then substring(word_id from '^meiday-([0-9]+)$')::integer between 1 and 11000
    else false
  end;
$$;

create or replace function public.hanyu_valid_lesson_id(lesson_id text)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select case
    when lesson_id ~ '^hsk1-[0-9]+$'
      then substring(lesson_id from '^hsk1-([0-9]+)$')::integer between 1 and 15
    when lesson_id ~ '^hsk2-[0-9]+$'
      then substring(lesson_id from '^hsk2-([0-9]+)$')::integer between 1 and 15
    when lesson_id ~ '^hsk3-[0-9]+$'
      then substring(lesson_id from '^hsk3-([0-9]+)$')::integer between 1 and 18
    when lesson_id ~ '^hsk4-[0-9]+$'
      then substring(lesson_id from '^hsk4-([0-9]+)$')::integer between 1 and 100
    when lesson_id ~ '^hsk5-[0-9]+$'
      then substring(lesson_id from '^hsk5-([0-9]+)$')::integer between 1 and 160
    when lesson_id ~ '^hsk6-[0-9]+$'
      then substring(lesson_id from '^hsk6-([0-9]+)$')::integer between 1 and 180
    when lesson_id ~ '^hsk7-9-[0-9]+$'
      then substring(lesson_id from '^hsk7-9-([0-9]+)$')::integer between 1 and 560
    else false
  end;
$$;

create or replace function public.hanyu_safe_timestamptz(value text)
returns timestamptz
language plpgsql
stable
set search_path = ''
as $$
begin
  if value is null or value = '' or char_length(value) > 40 then
    return null;
  end if;
  return value::timestamptz;
exception when others then
  return null;
end;
$$;

create or replace function public.hanyu_valid_progress(payload jsonb)
returns boolean
language plpgsql
stable
set search_path = ''
as $$
declare
  item record;
  item_count integer;
  numeric_score numeric;
begin
  if payload is null
    or pg_catalog.jsonb_typeof(payload) <> 'object'
    or payload ->> 'version' <> '1'
    or pg_catalog.pg_column_size(payload) > 2097152
    or pg_catalog.jsonb_typeof(payload -> 'bookmarks') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'known') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'mistakes') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'lessons') <> 'object'
    or pg_catalog.jsonb_typeof(payload -> 'attempts') <> 'array'
  then
    return false;
  end if;

  if pg_catalog.jsonb_array_length(payload -> 'bookmarks') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'known') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'mistakes') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'attempts') > 500
  then
    return false;
  end if;

  for item in
    select value
    from pg_catalog.jsonb_array_elements(payload -> 'bookmarks')
    union all
    select value
    from pg_catalog.jsonb_array_elements(payload -> 'known')
    union all
    select value
    from pg_catalog.jsonb_array_elements(payload -> 'mistakes')
  loop
    if pg_catalog.jsonb_typeof(item.value) <> 'string'
      or not public.hanyu_valid_word_id(item.value #>> '{}')
    then
      return false;
    end if;
  end loop;

  select count(*) into item_count
  from pg_catalog.jsonb_object_keys(payload -> 'lessons');
  if item_count > 1048 then
    return false;
  end if;

  for item in
    select key, value from pg_catalog.jsonb_each(payload -> 'lessons')
  loop
    if not public.hanyu_valid_lesson_id(item.key)
      or pg_catalog.jsonb_typeof(item.value) <> 'object'
      or pg_catalog.jsonb_typeof(item.value -> 'completed') <> 'boolean'
      or pg_catalog.jsonb_typeof(item.value -> 'updatedAt') <> 'string'
      or char_length(item.value ->> 'updatedAt') > 40
    then
      return false;
    end if;

    if item.value ? 'score' and item.value -> 'score' <> 'null'::jsonb then
      if pg_catalog.jsonb_typeof(item.value -> 'score') <> 'number' then
        return false;
      end if;
      numeric_score := (item.value ->> 'score')::numeric;
      if numeric_score < 0 or numeric_score > 100 then
        return false;
      end if;
    end if;

    if item.value ? 'scoreUpdatedAt'
      and item.value -> 'scoreUpdatedAt' <> 'null'::jsonb
      and (
        pg_catalog.jsonb_typeof(item.value -> 'scoreUpdatedAt') <> 'string'
        or char_length(item.value ->> 'scoreUpdatedAt') > 40
      )
    then
      return false;
    end if;
  end loop;

  for item in
    select value from pg_catalog.jsonb_array_elements(payload -> 'attempts')
  loop
    if pg_catalog.jsonb_typeof(item.value) <> 'object'
      or not public.hanyu_valid_lesson_id(item.value ->> 'lessonId')
      or pg_catalog.jsonb_typeof(item.value -> 'score') <> 'number'
      or (item.value ->> 'score')::numeric not between 0 and 100
      or pg_catalog.jsonb_typeof(item.value -> 'at') <> 'string'
      or char_length(item.value ->> 'at') > 40
    then
      return false;
    end if;
  end loop;

  return true;
exception when others then
  return false;
end;
$$;

create or replace function public.hanyu_rebuild_leaderboard_stats()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  item record;
  known_count integer := 0;
  completed_count integer := 0;
  score_count integer := 0;
  score_total integer := 0;
  weekly_total integer := 0;
  highest_level integer := 0;
  streak_count integer := 0;
  item_score integer;
  item_level integer;
  completion_time timestamptz;
  score_time timestamptz;
  activity_day date;
  activity_cursor date;
  activity_days date[] := array[]::date[];
  hsk_label text := 'Mới học';
begin
  if not public.hanyu_valid_progress(new.progress) then
    raise exception 'Invalid learning progress payload';
  end if;

  new.updated_at := pg_catalog.now();

  select count(distinct value #>> '{}') into known_count
  from pg_catalog.jsonb_array_elements(new.progress -> 'known');

  for item in
    select key, value from pg_catalog.jsonb_each(new.progress -> 'lessons')
  loop
    completion_time := public.hanyu_safe_timestamptz(item.value ->> 'updatedAt');
    score_time := public.hanyu_safe_timestamptz(
      coalesce(item.value ->> 'scoreUpdatedAt', item.value ->> 'updatedAt')
    );

    if (item.value ->> 'completed')::boolean then
      completed_count := completed_count + 1;
      if completion_time between pg_catalog.now() - interval '7 days'
        and pg_catalog.now() + interval '5 minutes'
      then
        weekly_total := weekly_total + 25;
      end if;
    end if;

    if item.value ? 'score' and item.value -> 'score' <> 'null'::jsonb then
      item_score := pg_catalog.round((item.value ->> 'score')::numeric)::integer;
      score_count := score_count + 1;
      score_total := score_total + item_score;
      if score_time between pg_catalog.now() - interval '7 days'
        and pg_catalog.now() + interval '5 minutes'
      then
        weekly_total := weekly_total + item_score;
      end if;
    end if;

    if completion_time is not null
      and completion_time <= pg_catalog.now() + interval '5 minutes'
    then
      activity_day := (completion_time at time zone 'UTC')::date;
      if not (activity_day = any(activity_days)) then
        activity_days := pg_catalog.array_append(activity_days, activity_day);
      end if;
    end if;

    if (item.value ->> 'completed')::boolean then
      item_level := case
        when item.key like 'hsk7-9-%' then 7
        else substring(item.key from '^hsk([1-6])-')::integer
      end;
      highest_level := greatest(highest_level, item_level);
    end if;
  end loop;

  activity_cursor := (pg_catalog.now() at time zone 'UTC')::date;
  if not (activity_cursor = any(activity_days)) then
    activity_cursor := activity_cursor - 1;
  end if;
  while activity_cursor = any(activity_days) loop
    streak_count := streak_count + 1;
    activity_cursor := activity_cursor - 1;
  end loop;

  hsk_label := case
    when highest_level = 7 then 'HSK 7–9'
    when highest_level between 1 and 6 then 'HSK ' || highest_level::text
    else 'Mới học'
  end;

  insert into public.leaderboard_stats (
    user_id, xp, weekly_xp, completed, average_score, streak, hsk, updated_at
  ) values (
    new.user_id,
    known_count * 2 + completed_count * 25 + score_total,
    weekly_total,
    completed_count,
    case when score_count > 0 then pg_catalog.round(score_total::numeric / score_count)::integer else 0 end,
    streak_count,
    hsk_label,
    pg_catalog.now()
  )
  on conflict (user_id) do update set
    xp = excluded.xp,
    weekly_xp = excluded.weekly_xp,
    completed = excluded.completed,
    average_score = excluded.average_score,
    streak = excluded.streak,
    hsk = excluded.hsk,
    updated_at = excluded.updated_at;

  return new;
end;
$$;

drop trigger if exists validate_and_rebuild_leaderboard on public.learning_progress;
create trigger validate_and_rebuild_leaderboard
  before insert or update of progress on public.learning_progress
  for each row execute function public.hanyu_rebuild_leaderboard_stats();

drop policy if exists "Users insert their own leaderboard stats" on public.leaderboard_stats;
drop policy if exists "Users update their own leaderboard stats" on public.leaderboard_stats;
revoke insert, update, delete on table public.leaderboard_stats from anon, authenticated;

-- The progress insert now creates the initial leaderboard row through the trigger.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_username text := pg_catalog.lower(pg_catalog.btrim(coalesce(new.raw_user_meta_data ->> 'username', '')));
  new_display_name text := pg_catalog.btrim(coalesce(new.raw_user_meta_data ->> 'display_name', ''));
begin
  if new_username !~ '^[a-z0-9._]{3,24}$' then
    raise exception 'Invalid username';
  end if;
  if pg_catalog.char_length(new_display_name) < 2 or pg_catalog.char_length(new_display_name) > 80 then
    raise exception 'Invalid display name';
  end if;

  insert into public.profiles (id, username, display_name)
  values (new.id, new_username, new_display_name);
  insert into public.learning_progress (user_id) values (new.id);
  return new;
end;
$$;

-- Recalculate existing valid rows. Invalid legacy rows keep their private progress,
-- but their public statistics are reset until the client writes a valid payload.
update public.learning_progress
set progress = progress
where public.hanyu_valid_progress(progress);

update public.leaderboard_stats as stats
set xp = 0,
    weekly_xp = 0,
    completed = 0,
    average_score = 0,
    streak = 0,
    hsk = 'Mới học',
    updated_at = pg_catalog.now()
where exists (
  select 1 from public.learning_progress as progress
  where progress.user_id = stats.user_id
    and not public.hanyu_valid_progress(progress.progress)
);

create table if not exists public.feedback_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  message text not null,
  created_at timestamptz not null default now(),
  constraint feedback_message_length check (char_length(trim(message)) between 1 and 1500)
);

create index if not exists feedback_messages_user_created_idx
  on public.feedback_messages (user_id, created_at desc);

alter table public.feedback_messages enable row level security;

drop policy if exists "Authenticated users submit feedback" on public.feedback_messages;
create policy "Authenticated users submit feedback"
  on public.feedback_messages for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create or replace function public.hanyu_prepare_feedback()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select auth.uid()) is null or new.user_id is distinct from (select auth.uid()) then
    raise exception 'Authentication required';
  end if;

  new.message := pg_catalog.btrim(new.message);
  new.created_at := pg_catalog.now();

  if pg_catalog.char_length(new.message) < 1 or pg_catalog.char_length(new.message) > 1500 then
    raise exception 'Feedback must contain between 1 and 1500 characters';
  end if;

  if (
    select count(*) from public.feedback_messages
    where user_id = new.user_id
      and created_at >= pg_catalog.now() - interval '1 hour'
  ) >= 5 then
    raise exception 'Feedback rate limit exceeded';
  end if;

  return new;
end;
$$;

drop trigger if exists prepare_feedback on public.feedback_messages;
create trigger prepare_feedback
  before insert on public.feedback_messages
  for each row execute function public.hanyu_prepare_feedback();

revoke all on table public.feedback_messages from anon, authenticated;
grant insert (user_id, message) on table public.feedback_messages to authenticated;

revoke execute on function public.hanyu_valid_word_id(text) from public, anon, authenticated;
revoke execute on function public.hanyu_valid_lesson_id(text) from public, anon, authenticated;
revoke execute on function public.hanyu_safe_timestamptz(text) from public, anon, authenticated;
revoke execute on function public.hanyu_valid_progress(jsonb) from public, anon, authenticated;
revoke execute on function public.hanyu_rebuild_leaderboard_stats() from public, anon, authenticated;
revoke execute on function public.hanyu_prepare_feedback() from public, anon, authenticated;
