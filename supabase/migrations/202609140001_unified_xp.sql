-- Unify non-HSK rewards in learning_progress.progress.xpEvents.
-- HSK/Boya vocabulary and HSK lesson rewards remain derived from canonical
-- progress fields; every other learning area contributes validated XP events.

create or replace function public.hanyu_valid_word_id(word_id text)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select case
    when word_id ~ '^hsk30-[0-9]+$'
      then substring(word_id from '^hsk30-([0-9]+)$')::integer between 1 and 11000
    when word_id ~ '^meiday-[0-9]+$'
      then substring(word_id from '^meiday-([0-9]+)$')::integer between 1 and 11000
    when word_id ~ '^boya1-[0-9]+-[0-9]+$'
      then substring(word_id from '^boya1-([0-9]+)-')::integer between 1 and 30
    when word_id ~ '^boya2-[0-9]+-[0-9]+$'
      then substring(word_id from '^boya2-([0-9]+)-')::integer between 1 and 25
    else false
  end;
$$;

create or replace function public.hanyu_valid_xp_event(event_key text, event_value jsonb)
returns boolean
language plpgsql
stable
set search_path = ''
as $$
declare
  amount integer;
  event_time timestamptz;
  source_name text;
  lesson_number integer;
  lesson_limit integer;
begin
  if event_key is null or char_length(event_key) not between 1 and 180
    or pg_catalog.jsonb_typeof(event_value) <> 'object'
    or pg_catalog.jsonb_typeof(event_value -> 'source') <> 'string'
    or pg_catalog.jsonb_typeof(event_value -> 'amount') <> 'number'
    or pg_catalog.jsonb_typeof(event_value -> 'earnedAt') <> 'string'
  then return false; end if;

  if (event_value ->> 'amount')::numeric <> pg_catalog.round((event_value ->> 'amount')::numeric)
  then return false; end if;
  amount := (event_value ->> 'amount')::integer;
  source_name := event_value ->> 'source';
  event_time := public.hanyu_safe_timestamptz(event_value ->> 'earnedAt');
  if amount <= 0 or event_time is null or event_time > pg_catalog.now() + interval '5 minutes'
  then return false; end if;

  if event_key ~ '^chengyu:quiz:[a-z0-9-]+$' then
    return source_name = 'chengyu' and amount = 10;
  elsif event_key ~ '^poetry:quiz:[a-z0-9-]+$' then
    return source_name = 'poetry' and amount = 10;
  elsif event_key ~ '^yct:[123]:word:.+$' then
    return source_name = 'yct' and amount = 5;
  elsif event_key ~ '^yct:[123]:quiz:[0-9]{4}-[0-9]{2}-[0-9]{2}$' then
    return source_name = 'yct' and amount between 1 and 30
      and substring(event_key from '([0-9]{4}-[0-9]{2}-[0-9]{2})$')
        = (event_time at time zone 'Asia/Bangkok')::date::text;
  elsif event_key ~ '^yct:[123]:match:[0-9]{4}-[0-9]{2}-[0-9]{2}$' then
    return source_name = 'yct' and amount between 10 and 100 and amount % 10 = 0
      and substring(event_key from '([0-9]{4}-[0-9]{2}-[0-9]{2})$')
        = (event_time at time zone 'Asia/Bangkok')::date::text;
  elsif event_key ~ '^yct:[123]:legacy$' then
    return source_name = 'yct' and amount <= 100000
      and event_time = '1970-01-01T00:00:00Z'::timestamptz;
  elsif event_key ~ '^culture:(lich-su|van-hoc|van-hoa|nghe-thuat|khoa-hoc|thien-van|doi-song):legacy$' then
    return source_name = 'culture' and amount <= 4000
      and event_time = '1970-01-01T00:00:00Z'::timestamptz;
  elsif event_key ~ '^culture:(lich-su|van-hoc|van-hoa|nghe-thuat|khoa-hoc|thien-van|doi-song):L[0-9]+:(open|q[01])$' then
    lesson_number := substring(event_key from ':L([0-9]+):')::integer;
    lesson_limit := case
      when event_key like 'culture:lich-su:%' then 200
      when event_key like 'culture:van-hoc:%' then 200
      when event_key like 'culture:van-hoa:%' then 171
      when event_key like 'culture:nghe-thuat:%' then 118
      when event_key like 'culture:khoa-hoc:%' then 69
      when event_key like 'culture:thien-van:%' then 144
      when event_key like 'culture:doi-song:%' then 95
      else 0 end;
    return source_name = 'culture'
      and lesson_number between 1 and lesson_limit
      and amount = case when event_key like '%:open' then 10 else 5 end;
  end if;
  return false;
exception when others then
  return false;
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
    or pg_catalog.pg_column_size(payload) > 4194304
    or pg_catalog.jsonb_typeof(payload -> 'bookmarks') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'known') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'mistakes') <> 'array'
    or pg_catalog.jsonb_typeof(payload -> 'lessons') <> 'object'
    or pg_catalog.jsonb_typeof(payload -> 'attempts') <> 'array'
    or (payload ? 'xpEvents' and pg_catalog.jsonb_typeof(payload -> 'xpEvents') <> 'object')
  then return false; end if;

  if pg_catalog.jsonb_array_length(payload -> 'bookmarks') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'known') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'mistakes') > 11000
    or pg_catalog.jsonb_array_length(payload -> 'attempts') > 500
  then return false; end if;

  for item in
    select value from pg_catalog.jsonb_array_elements(payload -> 'bookmarks')
    union all select value from pg_catalog.jsonb_array_elements(payload -> 'known')
    union all select value from pg_catalog.jsonb_array_elements(payload -> 'mistakes')
  loop
    if pg_catalog.jsonb_typeof(item.value) <> 'string'
      or not public.hanyu_valid_word_id(item.value #>> '{}')
    then return false; end if;
  end loop;

  select count(*) into item_count from pg_catalog.jsonb_object_keys(payload -> 'lessons');
  if item_count > 1048 then return false; end if;
  for item in select key, value from pg_catalog.jsonb_each(payload -> 'lessons') loop
    if not public.hanyu_valid_lesson_id(item.key)
      or pg_catalog.jsonb_typeof(item.value) <> 'object'
      or pg_catalog.jsonb_typeof(item.value -> 'completed') <> 'boolean'
      or pg_catalog.jsonb_typeof(item.value -> 'updatedAt') <> 'string'
      or char_length(item.value ->> 'updatedAt') > 40
    then return false; end if;
    if item.value ? 'score' and item.value -> 'score' <> 'null'::jsonb then
      if pg_catalog.jsonb_typeof(item.value -> 'score') <> 'number' then return false; end if;
      numeric_score := (item.value ->> 'score')::numeric;
      if numeric_score < 0 or numeric_score > 100 then return false; end if;
    end if;
    if item.value ? 'scoreUpdatedAt' and item.value -> 'scoreUpdatedAt' <> 'null'::jsonb
      and (pg_catalog.jsonb_typeof(item.value -> 'scoreUpdatedAt') <> 'string'
        or char_length(item.value ->> 'scoreUpdatedAt') > 40)
    then return false; end if;
  end loop;

  for item in select value from pg_catalog.jsonb_array_elements(payload -> 'attempts') loop
    if pg_catalog.jsonb_typeof(item.value) <> 'object'
      or not public.hanyu_valid_lesson_id(item.value ->> 'lessonId')
      or pg_catalog.jsonb_typeof(item.value -> 'score') <> 'number'
      or (item.value ->> 'score')::numeric not between 0 and 100
      or pg_catalog.jsonb_typeof(item.value -> 'at') <> 'string'
      or char_length(item.value ->> 'at') > 40
    then return false; end if;
  end loop;

  if payload ? 'xpEvents' then
    select count(*) into item_count from pg_catalog.jsonb_object_keys(payload -> 'xpEvents');
    if item_count > 20000 then return false; end if;
    for item in select key, value from pg_catalog.jsonb_each(payload -> 'xpEvents') loop
      if not public.hanyu_valid_xp_event(item.key, item.value) then return false; end if;
    end loop;
  end if;
  return true;
exception when others then
  return false;
end;
$$;

create or replace function public.hanyu_prepare_unified_xp()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  item record;
  old_event jsonb;
  merged_events jsonb;
begin
  if not (new.progress ? 'xpEvents') then
    new.progress := pg_catalog.jsonb_set(new.progress, '{xpEvents}', '{}'::jsonb, true);
  end if;
  if tg_op = 'UPDATE' then
    merged_events := coalesce(new.progress -> 'xpEvents', '{}'::jsonb);
    for item in select key, value from pg_catalog.jsonb_each(coalesce(old.progress -> 'xpEvents', '{}'::jsonb)) loop
      old_event := item.value;
      if item.key ~ '^yct:[123]:(quiz|match):[0-9]{4}-[0-9]{2}-[0-9]{2}$'
        and merged_events ? item.key
        and (merged_events -> item.key ->> 'amount')::integer > (old_event ->> 'amount')::integer
      then
        -- YCT keeps the best result for each mode/day. Preserve the first
        -- award time while accepting only a strictly higher total.
        merged_events := pg_catalog.jsonb_set(
          merged_events,
          array[item.key, 'earnedAt'],
          old_event -> 'earnedAt',
          true
        );
      else
        merged_events := pg_catalog.jsonb_set(merged_events, array[item.key], old_event, true);
      end if;
    end loop;
    new.progress := pg_catalog.jsonb_set(
      new.progress,
      '{xpEvents}',
      merged_events,
      true
    );
  end if;
  if pg_catalog.jsonb_typeof(new.progress -> 'xpEvents') <> 'object'
    or (select count(*) from pg_catalog.jsonb_object_keys(new.progress -> 'xpEvents')) > 20000
  then raise exception 'Invalid XP event payload'; end if;
  for item in select key, value from pg_catalog.jsonb_each(new.progress -> 'xpEvents') loop
    if not public.hanyu_valid_xp_event(item.key, item.value)
    then raise exception 'Invalid XP event'; end if;
  end loop;
  return new;
end;
$$;

drop trigger if exists canonicalize_unified_xp on public.learning_progress;
create trigger canonicalize_unified_xp
  before insert or update of progress on public.learning_progress
  for each row execute function public.hanyu_prepare_unified_xp();

-- Events are validated on write, so ranking reads only need a small aggregate.
create or replace function public.hanyu_unified_xp(payload jsonb, source_filter text default null)
returns integer
language sql
stable
set search_path = ''
as $$
  select coalesce(pg_catalog.sum((entry.value ->> 'amount')::integer), 0)::integer
  from pg_catalog.jsonb_each(
    case when pg_catalog.jsonb_typeof(payload -> 'xpEvents') = 'object'
      then payload -> 'xpEvents' else '{}'::jsonb end
  ) entry
  where source_filter is null or entry.value ->> 'source' = source_filter;
$$;

create or replace function public.hanyu_unified_weekly_xp(payload jsonb, source_filter text default null)
returns integer
language sql
stable
set search_path = ''
as $$
  select coalesce(pg_catalog.sum((entry.value ->> 'amount')::integer), 0)::integer
  from pg_catalog.jsonb_each(
    case when pg_catalog.jsonb_typeof(payload -> 'xpEvents') = 'object'
      then payload -> 'xpEvents' else '{}'::jsonb end
  ) entry
  where (source_filter is null or entry.value ->> 'source' = source_filter)
    and public.hanyu_safe_timestamptz(entry.value ->> 'earnedAt') >= public.hanyu_bangkok_week_start()
    and public.hanyu_safe_timestamptz(entry.value ->> 'earnedAt') < public.hanyu_bangkok_week_start() + interval '7 days'
    and public.hanyu_safe_timestamptz(entry.value ->> 'earnedAt') <= pg_catalog.now() + interval '5 minutes';
$$;

create or replace function public.hanyu_progress_streak(payload jsonb)
returns integer
language plpgsql
stable
set search_path = ''
as $$
declare
  item record; event_time timestamptz; event_day date;
  cursor_day date := (pg_catalog.now() at time zone 'Asia/Bangkok')::date;
  activity_days date[] := array[]::date[]; result integer := 0;
begin
  if payload is null or pg_catalog.jsonb_typeof(payload) <> 'object' then return 0; end if;
  if pg_catalog.jsonb_typeof(payload -> 'knownAt') = 'object' then
    for item in select value from pg_catalog.jsonb_each_text(payload -> 'knownAt') loop
      event_time := public.hanyu_safe_timestamptz(item.value);
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then activity_days := pg_catalog.array_append(activity_days, event_day); end if;
      end if;
    end loop;
  end if;
  if pg_catalog.jsonb_typeof(payload -> 'lessons') = 'object' then
    for item in select value from pg_catalog.jsonb_each(payload -> 'lessons') loop
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'updatedAt');
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then activity_days := pg_catalog.array_append(activity_days, event_day); end if;
      end if;
    end loop;
  end if;
  if pg_catalog.jsonb_typeof(payload -> 'attempts') = 'array' then
    for item in select value from pg_catalog.jsonb_array_elements(payload -> 'attempts') loop
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'at');
      if event_time is not null and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then activity_days := pg_catalog.array_append(activity_days, event_day); end if;
      end if;
    end loop;
  end if;
  if pg_catalog.jsonb_typeof(payload -> 'xpEvents') = 'object' then
    for item in select value from pg_catalog.jsonb_each(payload -> 'xpEvents') loop
      event_time := public.hanyu_safe_timestamptz(item.value ->> 'earnedAt');
      if event_time is not null and event_time > '1970-01-02'::timestamptz
        and event_time <= pg_catalog.now() + interval '5 minutes' then
        event_day := (event_time at time zone 'Asia/Bangkok')::date;
        if not (event_day = any(activity_days)) then activity_days := pg_catalog.array_append(activity_days, event_day); end if;
      end if;
    end loop;
  end if;
  if not (cursor_day = any(activity_days)) then cursor_day := cursor_day - 1; end if;
  while cursor_day = any(activity_days) loop
    result := result + 1; cursor_day := cursor_day - 1;
  end loop;
  return result;
exception when others then return 0;
end;
$$;

-- Preserve culture awards already synced by the previous implementation.
with legacy_events as (
  select
    cp.user_id,
    'culture:' || cp.topic_slug || ':' || event.key as event_key,
    event.value || pg_catalog.jsonb_build_object('source', 'culture') as event_value
  from public.culture_progress cp
  cross join lateral pg_catalog.jsonb_each(cp.xp_events) event
  union all
  select
    cp.user_id,
    'culture:' || cp.topic_slug || ':legacy',
    pg_catalog.jsonb_build_object(
      'source', 'culture', 'amount', cp.xp, 'earnedAt', '1970-01-01T00:00:00.000Z'
    )
  from public.culture_progress cp
  where cp.xp > 0 and cp.xp_events = '{}'::jsonb
), grouped as (
  select user_id, pg_catalog.jsonb_object_agg(event_key, event_value) as events
  from legacy_events group by user_id
)
update public.learning_progress lp
set progress = pg_catalog.jsonb_set(
  lp.progress,
  '{xpEvents}',
  grouped.events || coalesce(lp.progress -> 'xpEvents', '{}'::jsonb),
  true
)
from grouped
where grouped.user_id = lp.user_id;

create or replace function public.get_public_leaderboard(
  p_period text default 'overall', p_scope text default 'all', p_hsk text default null,
  p_search text default null, p_limit integer default 100, p_offset integer default 0,
  p_include_current boolean default false
)
returns table (
  rank bigint, total_count bigint, filtered_count bigint, period_xp bigint,
  highest_streak integer, user_id uuid, display_name text, username text,
  avatar_url text, xp integer, weekly_xp integer, culture_xp integer,
  culture_weekly_xp integer, completed integer, average_score integer,
  streak integer, hsk text, is_supplemental boolean
)
language sql stable security definer set search_path = ''
as $$
  with base as (
    select
      s.user_id, p.display_name, p.username, p.avatar_url,
      (s.xp + public.hanyu_unified_xp(lp.progress))::integer as xp,
      (public.hanyu_progress_weekly_xp(lp.progress) + public.hanyu_unified_weekly_xp(lp.progress))::integer as weekly_xp,
      public.hanyu_unified_xp(lp.progress, 'culture')::integer as culture_xp,
      public.hanyu_unified_weekly_xp(lp.progress, 'culture')::integer as culture_weekly_xp,
      s.completed, s.average_score, public.hanyu_progress_streak(lp.progress) as streak, s.hsk
    from public.leaderboard_stats s
    join public.profiles p on p.id = s.user_id
    join public.learning_progress lp on lp.user_id = s.user_id
    where p_hsk is null or p_hsk = '' or s.hsk = p_hsk
  ), ranked as (
    select
      pg_catalog.row_number() over (order by
        case when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
          when p_scope = 'culture' then b.culture_xp when p_period = 'weekly' then b.weekly_xp else b.xp end desc,
        b.streak desc, b.user_id asc) as rank,
      pg_catalog.count(*) over () as total_count,
      pg_catalog.sum(case when p_search is null or pg_catalog.btrim(p_search) = ''
        or pg_catalog.strpos(pg_catalog.lower(b.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
        or pg_catalog.strpos(pg_catalog.lower(b.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
        then 1 else 0 end) over () as filtered_count,
      pg_catalog.sum(case when p_scope = 'culture' and p_period = 'weekly' then b.culture_weekly_xp
        when p_scope = 'culture' then b.culture_xp when p_period = 'weekly' then b.weekly_xp else b.xp end) over () as period_xp,
      pg_catalog.max(b.streak) over () as highest_streak, b.*
    from base b where p_period in ('weekly', 'overall') and p_scope in ('all', 'culture')
  ), matched as (
    select r.* from ranked r where p_search is null or pg_catalog.btrim(p_search) = ''
      or pg_catalog.strpos(pg_catalog.lower(r.display_name), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
      or pg_catalog.strpos(pg_catalog.lower(r.username), pg_catalog.lower(pg_catalog.btrim(p_search))) > 0
  ), page_rows as (
    select m.*, false as is_supplemental from matched m order by m.rank
    limit least(100, greatest(1, p_limit)) offset greatest(0, p_offset)
  ), current_rows as (
    select r.*, true as is_supplemental from ranked r where p_include_current
      and r.user_id = (select auth.uid())
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), previous_rows as (
    select r.*, true as is_supplemental from ranked r join current_rows me on r.rank = me.rank - 1
    where not exists (select 1 from page_rows p where p.user_id = r.user_id)
  ), summary_rows as (
    select r.*, true as is_supplemental from ranked r where r.rank <= 3
      and not exists (select 1 from page_rows p where p.user_id = r.user_id)
      and not exists (select 1 from current_rows c where c.user_id = r.user_id)
      and not exists (select 1 from previous_rows p where p.user_id = r.user_id)
  )
  select selected.rank, selected.total_count, selected.filtered_count, selected.period_xp,
    selected.highest_streak, selected.user_id, selected.display_name, selected.username,
    selected.avatar_url, selected.xp, selected.weekly_xp, selected.culture_xp,
    selected.culture_weekly_xp, selected.completed, selected.average_score,
    selected.streak, selected.hsk, selected.is_supplemental
  from (select * from page_rows union all select * from current_rows
    union all select * from previous_rows union all select * from summary_rows) selected
  order by selected.rank;
$$;

revoke execute on function public.hanyu_valid_xp_event(text, jsonb) from public, anon, authenticated;
revoke execute on function public.hanyu_prepare_unified_xp() from public, anon, authenticated;
revoke execute on function public.hanyu_unified_xp(jsonb, text) from public, anon, authenticated;
revoke execute on function public.hanyu_unified_weekly_xp(jsonb, text) from public, anon, authenticated;
revoke all on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean) from public;
grant execute on function public.get_public_leaderboard(text, text, text, text, integer, integer, boolean)
  to anon, authenticated;
