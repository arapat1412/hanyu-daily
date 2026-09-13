-- Make leaderboard periods deterministic and query rankings on the server.
-- The public RPC exposes only the same profile/stat fields as public_leaderboard;
-- private progress is read inside the security-definer function solely to derive
-- current-week XP and the live streak.

alter table public.culture_progress
  add column if not exists xp_events jsonb not null default '{}'::jsonb;

create or replace function public.hanyu_bangkok_week_start()
returns timestamptz
language sql
stable
set search_path = ''
as $$
  select pg_catalog.date_trunc('week', pg_catalog.now() at time zone 'Asia/Bangkok')
    at time zone 'Asia/Bangkok';
$$;

create or replace function public.hanyu_progress_weekly_xp(payload jsonb)
returns integer
language plpgsql
stable
set search_path = ''
as $$
declare
  item record;
  event_time timestamptz;
  total integer := 0;
  week_start timestamptz := public.hanyu_bangkok_week_start();
  week_end timestamptz := week_start + interval '7 days';
begin
  if payload is null or pg_catalog.jsonb_typeof(payload) <> 'object' then
    return 0;
  end if;

  if pg_catalog.jsonb_typeof(payload -> 'knownAt') = 'object' then
    for item in select key, value from pg_catalog.jsonb_each_text(payload -> 'knownAt') loop
      event_time := public.hanyu_safe_timestamptz(item.value);
      if event_time >= week_start
        and event_time < week_end
        and event_time <= pg_catalog.now() + interval '5 minutes'
        and (payload -> 'known') @> pg_catalog.jsonb_build_array(item.key)
      then
        total := total + 2;
      end if;
    end loop;
  end if;

  if pg_catalog.jsonb_typeof(payload -> 'lessons') = 'object' then
    for item in select key, value from pg_catalog.jsonb_each(payload -> 'lessons') loop
      if coalesce((item.value ->> 'completed')::boolean, false) then
        event_time := public.hanyu_safe_timestamptz(
          coalesce(item.value ->> 'completedAt', item.value ->> 'updatedAt')
        );
        if event_time >= week_start
          and event_time < week_end
          and event_time <= pg_catalog.now() + interval '5 minutes'
        then
          total := total + 25;
        end if;
      end if;

      if item.value ? 'score' and item.value -> 'score' <> 'null'::jsonb then
        event_time := public.hanyu_safe_timestamptz(
          coalesce(item.value ->> 'scoreUpdatedAt', item.value ->> 'updatedAt')
        );
        if event_time >= week_start
          and event_time < week_end
          and event_time <= pg_catalog.now() + interval '5 minutes'
        then
          total := total + pg_catalog.round((item.value ->> 'score')::numeric)::integer;
        end if;
      end if;
    end loop;
  end if;

  return greatest(0, total);
exception when others then
  return 0;
end;
$$;

create or replace function public.hanyu_progress_streak(payload jsonb)
returns integer
language plpgsql
stable
set search_path = ''
as $$
declare
  item record;
  event_time timestamptz;
  event_day date;
  cursor_day date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  activity_days date[] := array[]::date[];
  result integer := 0;
begin
  if payload is null or pg_catalog.jsonb_typeof(payload) <> 'object' then
    return 0;
  end if;

  if pg_catalog.jsonb_typeof(payload -> 'knownAt') = 'object' then
    for item in select value from pg_catalog.jsonb_each_text(payload -> 'knownAt') loop
      event_time := public.hanyu_safe_timestamptz(item.value);
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then
          activity_days := pg_catalog.array_append(activity_days, event_day);
        end if;
      end if;
    end loop;
  end if;

  if pg_catalog.jsonb_typeof(payload -> 'lessons') = 'object' then
    for item in select value from pg_catalog.jsonb_each(payload -> 'lessons') loop
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'updatedAt');
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then
          activity_days := pg_catalog.array_append(activity_days, event_day);
        end if;
      end if;
    end loop;
  end if;

  if pg_catalog.jsonb_typeof(payload -> 'attempts') = 'array' then
    for item in select value from pg_catalog.jsonb_array_elements(payload -> 'attempts') loop
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'at');
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then
          activity_days := pg_catalog.array_append(activity_days, event_day);
        end if;
      end if;
    end loop;
  end if;

  if not (cursor_day = any(activity_days)) then
    cursor_day := cursor_day - 1;
  end if;
  while cursor_day = any(activity_days) loop
    result := result + 1;
    cursor_day := cursor_day - 1;
  end loop;
  return result;
exception when others then
  return 0;
end;
$$;

create or replace function public.hanyu_culture_weekly_xp(events jsonb)
returns integer
language plpgsql
stable
set search_path = ''
as $$
declare
  item record;
  event_time timestamptz;
  total integer := 0;
  week_start timestamptz := public.hanyu_bangkok_week_start();
  week_end timestamptz := week_start + interval '7 days';
begin
  if events is null or pg_catalog.jsonb_typeof(events) <> 'object' then return 0; end if;
  for item in select value from pg_catalog.jsonb_each(events) loop
    if pg_catalog.jsonb_typeof(item.value) = 'object'
      and pg_catalog.jsonb_typeof(item.value -> 'amount') = 'number'
    then
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'earnedAt');
      if event_time >= week_start
        and event_time < week_end
        and event_time <= pg_catalog.now() + interval '5 minutes'
      then
        total := total + pg_catalog.round((item.value ->> 'amount')::numeric)::integer;
      end if;
    end if;
  end loop;
  return greatest(0, total);
exception when others then
  return 0;
end;
$$;

create or replace function public.hanyu_validate_scoring_metadata()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  item record;
  event_time timestamptz;
  old_lesson jsonb;
  old_score numeric;
  new_score numeric;
  immutable_time text;
  legacy_known_at jsonb := '{}'::jsonb;
begin
  if tg_op = 'UPDATE' then
    -- Words learned by pre-migration clients have no trustworthy award time.
    -- Mark them as legacy rather than incorrectly crediting them in this week.
    select coalesce(
      pg_catalog.jsonb_object_agg(value #>> '{}', '1970-01-01T00:00:00.000Z'::text),
      '{}'::jsonb
    ) into legacy_known_at
    from pg_catalog.jsonb_array_elements(old.progress -> 'known');

    -- A client may merge progress from several devices, but it must never be
    -- able to move an existing award into the current week.  The right-hand
    -- object wins for duplicate keys, so the first knownAt value is retained.
    new.progress := pg_catalog.jsonb_set(
      new.progress,
      '{knownAt}',
      coalesce(new.progress -> 'knownAt', '{}'::jsonb)
        || legacy_known_at
        || coalesce(old.progress -> 'knownAt', '{}'::jsonb),
      true
    );
    new.progress := pg_catalog.jsonb_set(
      new.progress,
      '{lessons}',
      coalesce(old.progress -> 'lessons', '{}'::jsonb)
        || coalesce(new.progress -> 'lessons', '{}'::jsonb),
      true
    );

    for item in select key, value from pg_catalog.jsonb_each(new.progress -> 'lessons') loop
      old_lesson := old.progress -> 'lessons' -> item.key;
      if pg_catalog.jsonb_typeof(item.value -> 'score') = 'number' then
        item.value := pg_catalog.jsonb_set(
          item.value,
          '{score}',
          pg_catalog.to_jsonb(pg_catalog.round((item.value ->> 'score')::numeric)::integer),
          true
        );
      end if;
      if pg_catalog.jsonb_typeof(old_lesson) is distinct from 'object' then
        new.progress := pg_catalog.jsonb_set(
          new.progress,
          array['lessons', item.key],
          item.value,
          true
        );
        continue;
      end if;

      -- Completion is monotonic. Preserve the original completion timestamp
      -- even if an older/offline client sends a stale lesson snapshot.
      if coalesce((old_lesson ->> 'completed')::boolean, false) then
        immutable_time := coalesce(old_lesson ->> 'completedAt', old_lesson ->> 'updatedAt');
        item.value := pg_catalog.jsonb_set(item.value, '{completed}', 'true'::jsonb, true);
        if immutable_time is not null then
          item.value := pg_catalog.jsonb_set(
            item.value,
            '{completedAt}',
            pg_catalog.to_jsonb(immutable_time),
            true
          );
        end if;
      end if;

      -- Only a strictly better assessment may replace the best score and its
      -- award time. Equal/lower stale writes keep the existing score metadata.
      if pg_catalog.jsonb_typeof(old_lesson -> 'score') = 'number' then
        old_score := pg_catalog.round((old_lesson ->> 'score')::numeric);
        new_score := case
          when pg_catalog.jsonb_typeof(item.value -> 'score') = 'number'
            then (item.value ->> 'score')::numeric
          else null
        end;
        if new_score is null or new_score <= old_score then
          immutable_time := coalesce(
            old_lesson ->> 'scoreUpdatedAt',
            old_lesson ->> 'updatedAt'
          );
          item.value := pg_catalog.jsonb_set(
            item.value,
            '{score}',
            pg_catalog.to_jsonb(old_score),
            true
          );
          if immutable_time is not null then
            item.value := pg_catalog.jsonb_set(
              item.value,
              '{scoreUpdatedAt}',
              pg_catalog.to_jsonb(immutable_time),
              true
            );
          end if;
        end if;
      end if;

      new.progress := pg_catalog.jsonb_set(
        new.progress,
        array['lessons', item.key],
        item.value,
        true
      );
    end loop;
  end if;

  if new.progress ? 'knownAt' then
    if pg_catalog.jsonb_typeof(new.progress -> 'knownAt') <> 'object'
      or (select count(*) from pg_catalog.jsonb_object_keys(new.progress -> 'knownAt')) > 11000
    then
      raise exception 'Invalid knownAt payload';
    end if;
    for item in select key, value from pg_catalog.jsonb_each(new.progress -> 'knownAt') loop
      event_time := public.hanyu_safe_timestamptz(item.value #>> '{}');
      if pg_catalog.jsonb_typeof(item.value) <> 'string'
        or not public.hanyu_valid_word_id(item.key)
        or event_time is null
        or event_time > pg_catalog.now() + interval '5 minutes'
      then
        raise exception 'Invalid knownAt event';
      end if;
    end loop;
  end if;

  for item in select key, value from pg_catalog.jsonb_each(new.progress -> 'lessons') loop
    if pg_catalog.jsonb_typeof(item.value -> 'score') = 'number' then
      item.value := pg_catalog.jsonb_set(
        item.value,
        '{score}',
        pg_catalog.to_jsonb(pg_catalog.round((item.value ->> 'score')::numeric)::integer),
        true
      );
    end if;
    -- Canonicalize legacy completion/score timestamps on the first write so
    -- subsequent writes are governed by the immutable rules above.
    if coalesce((item.value ->> 'completed')::boolean, false)
      and (not (item.value ? 'completedAt') or item.value -> 'completedAt' = 'null'::jsonb)
    then
      item.value := pg_catalog.jsonb_set(
        item.value,
        '{completedAt}',
        pg_catalog.to_jsonb(item.value ->> 'updatedAt'),
        true
      );
    end if;
    if pg_catalog.jsonb_typeof(item.value -> 'score') = 'number'
      and (not (item.value ? 'scoreUpdatedAt') or item.value -> 'scoreUpdatedAt' = 'null'::jsonb)
    then
      item.value := pg_catalog.jsonb_set(
        item.value,
        '{scoreUpdatedAt}',
        pg_catalog.to_jsonb(item.value ->> 'updatedAt'),
        true
      );
    end if;

    if item.value ? 'completedAt' and item.value -> 'completedAt' <> 'null'::jsonb then
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'completedAt');
      if pg_catalog.jsonb_typeof(item.value -> 'completedAt') <> 'string'
        or event_time is null
        or event_time > pg_catalog.now() + interval '5 minutes'
        or not coalesce((item.value ->> 'completed')::boolean, false)
      then
        raise exception 'Invalid completedAt event';
      end if;
    end if;

    if item.value ? 'score' and item.value -> 'score' <> 'null'::jsonb then
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'scoreUpdatedAt');
      if pg_catalog.jsonb_typeof(item.value -> 'scoreUpdatedAt') <> 'string'
        or event_time is null
        or event_time > pg_catalog.now() + interval '5 minutes'
      then
        raise exception 'Invalid scoreUpdatedAt event';
      end if;
    end if;

    new.progress := pg_catalog.jsonb_set(
      new.progress,
      array['lessons', item.key],
      item.value,
      true
    );
  end loop;
  return new;
end;
$$;

drop trigger if exists enforce_scoring_metadata on public.learning_progress;
drop trigger if exists validate_scoring_metadata on public.learning_progress;
-- PostgreSQL runs same-kind triggers alphabetically. This name intentionally
-- sorts before validate_and_rebuild_leaderboard so stats see canonical data.
create trigger enforce_scoring_metadata
  before insert or update of progress on public.learning_progress
  for each row execute function public.hanyu_validate_scoring_metadata();

create or replace function public.hanyu_prepare_culture_progress()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  item record;
  event_time timestamptz;
  event_total integer := 0;
  event_count integer := 0;
  lesson_number integer;
  topic_lesson_limit integer;
begin
  new.updated_at := pg_catalog.now();
  if tg_op = 'UPDATE' then
    -- Merge concurrent devices and keep already-recorded awards immutable.
    new.xp_events := coalesce(new.xp_events, '{}'::jsonb) || old.xp_events;
    new.done_count := greatest(old.done_count, new.done_count);
  end if;
  if pg_catalog.jsonb_typeof(new.xp_events) <> 'object' then
    raise exception 'Invalid culture XP events';
  end if;
  topic_lesson_limit := case new.topic_slug
    when 'lich-su' then 200 when 'van-hoc' then 200 when 'van-hoa' then 171
    when 'nghe-thuat' then 118 when 'khoa-hoc' then 69 when 'thien-van' then 144
    when 'doi-song' then 95 else 0 end;
  for item in select key, value from pg_catalog.jsonb_each(new.xp_events) loop
    event_time := public.hanyu_safe_timestamptz(item.value ->> 'earnedAt');
    lesson_number := case
      when item.key ~ '^L[0-9]+:(open|q[01])$'
        then substring(item.key from '^L([0-9]+):')::integer
      else 0
    end;
    if item.key !~ '^L[0-9]+:(open|q[01])$'
      or lesson_number not between 1 and topic_lesson_limit
      or pg_catalog.jsonb_typeof(item.value) <> 'object'
      or pg_catalog.jsonb_typeof(item.value -> 'amount') <> 'number'
      or (item.value ->> 'amount')::numeric not in (5, 10)
      or pg_catalog.jsonb_typeof(item.value -> 'earnedAt') <> 'string'
      or event_time is null
      or event_time > pg_catalog.now() + interval '5 minutes'
    then
      raise exception 'Invalid culture XP event';
    end if;
    event_total := event_total + pg_catalog.round((item.value ->> 'amount')::numeric)::integer;
    event_count := event_count + 1;
  end loop;

  if event_count > 0 then
    new.xp := event_total;
    new.weekly_xp := public.hanyu_culture_weekly_xp(new.xp_events);
  elsif tg_op = 'UPDATE' then
    -- Preserve legacy totals until that topic is next opened and sends its event log.
    new.xp := greatest(old.xp, new.xp);
    new.weekly_xp := 0;
  else
    new.weekly_xp := 0;
  end if;
  return new;
end;
$$;

create or replace function public.get_public_leaderboard(
  p_period text default 'overall',
  p_scope text default 'all',
  p_hsk text default null,
  p_search text default null,
  p_limit integer default 100,
  p_offset integer default 0,
  p_include_current boolean default false
)
returns table (
  rank bigint,
  total_count bigint,
  filtered_count bigint,
  period_xp bigint,
  highest_streak integer,
  user_id uuid,
  display_name text,
  username text,
  avatar_url text,
  xp integer,
  weekly_xp integer,
  culture_xp integer,
  culture_weekly_xp integer,
  completed integer,
  average_score integer,
  streak integer,
  hsk text,
  is_supplemental boolean
)
language sql
stable
security definer
set search_path = ''
as $$
  with culture as (
    select
      cp.user_id,
      coalesce(pg_catalog.sum(cp.xp), 0)::integer as xp,
      coalesce(pg_catalog.sum(
        case
          when cp.xp_events <> '{}'::jsonb then public.hanyu_culture_weekly_xp(cp.xp_events)
          when cp.updated_at >= public.hanyu_bangkok_week_start()
            and cp.updated_at < public.hanyu_bangkok_week_start() + interval '7 days'
          then cp.weekly_xp
          else 0
        end
      ), 0)::integer as weekly_xp
    from public.culture_progress cp
    group by cp.user_id
  ), base as (
    select
      s.user_id,
      p.display_name,
      p.username,
      p.avatar_url,
      (s.xp + coalesce(c.xp, 0))::integer as xp,
      (public.hanyu_progress_weekly_xp(lp.progress) + coalesce(c.weekly_xp, 0))::integer as weekly_xp,
      coalesce(c.xp, 0)::integer as culture_xp,
      coalesce(c.weekly_xp, 0)::integer as culture_weekly_xp,
      s.completed,
      s.average_score,
      public.hanyu_progress_streak(lp.progress) as streak,
      s.hsk
    from public.leaderboard_stats s
    join public.profiles p on p.id = s.user_id
    join public.learning_progress lp on lp.user_id = s.user_id
    left join culture c on c.user_id = s.user_id
    where p_hsk is null or p_hsk = '' or s.hsk = p_hsk
  ), ranked as (
    select
      pg_catalog.row_number() over (
        order by
          case
            when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
            when p_scope = 'culture' then b.culture_xp
            when p_period = 'weekly' then b.weekly_xp
            else b.xp
          end desc,
          b.streak desc,
          b.user_id asc
      ) as rank,
      pg_catalog.count(*) over () as total_count,
      pg_catalog.sum(
        case
          when p_search is null
            or pg_catalog.btrim(p_search) = ''
            or pg_catalog.strpos(pg_catalog.lower(b.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
            or pg_catalog.strpos(pg_catalog.lower(b.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
          then 1 else 0
        end
      ) over () as filtered_count,
      pg_catalog.sum(
        case
          when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
          when p_scope = 'culture' then b.culture_xp
          when p_period = 'weekly' then b.weekly_xp
          else b.xp
        end
      ) over () as period_xp,
      pg_catalog.max(b.streak) over () as highest_streak,
      b.*
    from base b
    where p_period in ('weekly', 'overall') and p_scope in ('all', 'culture')
  ), matched as (
    select r.*
    from ranked r
    where p_search is null
      or pg_catalog.btrim(p_search) = ''
      or pg_catalog.strpos(pg_catalog.lower(r.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
      or pg_catalog.strpos(pg_catalog.lower(r.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
  ), page_rows as (
    select m.*, false as is_supplemental
    from matched m
    order by m.rank
    limit least(100, greatest(1, p_limit))
    offset greatest(0, p_offset)
  ), current_rows as (
    select r.*, true as is_supplemental
    from ranked r
    where p_include_current
      and r.user_id = (select auth.uid())
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), previous_rows as (
    select r.*, true as is_supplemental
    from ranked r
    join current_rows me on r.rank = me.rank - 1
    where not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), summary_rows as (
    select r.*, true as is_supplemental
    from ranked r
    where r.rank <= 3
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
      and not exists (select 1 from current_rows c where c.user_id = r.user_id)
      and not exists (select 1 from previous_rows p where p.user_id = r.user_id)
  )
  select
    selected.rank,
    selected.total_count,
    selected.filtered_count,
    selected.period_xp,
    selected.highest_streak,
    selected.user_id,
    selected.display_name,
    selected.username,
    selected.avatar_url,
    selected.xp,
    selected.weekly_xp,
    selected.culture_xp,
    selected.culture_weekly_xp,
    selected.completed,
    selected.average_score,
    selected.streak,
    selected.hsk,
    selected.is_supplemental
  from (
    select * from page_rows
    union all select * from current_rows
    union all select * from previous_rows
    union all select * from summary_rows
  ) selected
  order by selected.rank;
$$;

revoke execute on function public.hanyu_bangkok_week_start() from public, anon, authenticated;
revoke execute on function public.hanyu_progress_weekly_xp(jsonb) from public, anon, authenticated;
revoke execute on function public.hanyu_progress_streak(jsonb) from public, anon, authenticated;
revoke execute on function public.hanyu_culture_weekly_xp(jsonb) from public, anon, authenticated;
revoke execute on function public.hanyu_validate_scoring_metadata() from public, anon, authenticated;
revoke execute on function public.hanyu_prepare_culture_progress() from public, anon, authenticated;
revoke all on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean) from public;
grant execute on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean)
  to anon, authenticated;
