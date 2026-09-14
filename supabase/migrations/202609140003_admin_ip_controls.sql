-- Admin IP denylist. The production host checks this table before serving HTML.

create table if not exists public.blocked_ips (
  ip_address inet primary key,
  reason text not null default 'Bị chặn bởi quản trị viên',
  blocked_at timestamptz not null default pg_catalog.now(),
  blocked_by uuid not null references public.admin_users(user_id) on delete restrict,
  constraint blocked_ips_reason_length check (
    pg_catalog.char_length(pg_catalog.btrim(reason)) between 1 and 300
  )
);

create index if not exists blocked_ips_blocked_at_idx
  on public.blocked_ips (blocked_at desc);

alter table public.blocked_ips enable row level security;
revoke all on table public.blocked_ips from anon, authenticated;

create or replace function public.hanyu_request_ip()
returns inet
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  request_headers jsonb := '{}'::jsonb;
  raw_ip text;
begin
  begin
    request_headers := coalesce(
      nullif(pg_catalog.current_setting('request.headers', true), '')::jsonb,
      '{}'::jsonb
    );
  exception when others then
    request_headers := '{}'::jsonb;
  end;

  raw_ip := pg_catalog.btrim(coalesce(
    request_headers ->> 'cf-connecting-ip',
    request_headers ->> 'x-real-ip',
    pg_catalog.split_part(request_headers ->> 'x-forwarded-for', ',', 1)
  ));

  if raw_ip is null or raw_ip = '' then return null; end if;
  return pg_catalog.host(raw_ip::inet)::inet;
exception when invalid_text_representation then
  return null;
end;
$$;

create or replace function public.admin_block_ip(
  p_ip text,
  p_reason text default 'Bị chặn bởi quản trị viên'
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_ip inet;
  caller_ip inet;
  normalized_reason text;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  if p_ip is null or pg_catalog.btrim(p_ip) = '' then
    raise exception 'Invalid IP address' using errcode = '22023';
  end if;

  begin
    target_ip := pg_catalog.host(pg_catalog.btrim(p_ip)::inet)::inet;
  exception when invalid_text_representation then
    raise exception 'Invalid IP address' using errcode = '22023';
  end;

  caller_ip := public.hanyu_request_ip();
  if caller_ip is not null and caller_ip = target_ip then
    raise exception 'Cannot block your current IP address' using errcode = '22023';
  end if;

  normalized_reason := pg_catalog.left(
    coalesce(nullif(pg_catalog.btrim(p_reason), ''), 'Bị chặn bởi quản trị viên'),
    300
  );

  insert into public.blocked_ips (ip_address, reason, blocked_by)
  values (target_ip, normalized_reason, (select auth.uid()))
  on conflict (ip_address) do update
    set reason = excluded.reason,
        blocked_at = pg_catalog.now(),
        blocked_by = excluded.blocked_by;
end;
$$;

create or replace function public.admin_unblock_ip(p_ip text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_ip inet;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  if p_ip is null or pg_catalog.btrim(p_ip) = '' then
    raise exception 'Invalid IP address' using errcode = '22023';
  end if;

  begin
    target_ip := pg_catalog.host(pg_catalog.btrim(p_ip)::inet)::inet;
  exception when invalid_text_representation then
    raise exception 'Invalid IP address' using errcode = '22023';
  end;

  delete from public.blocked_ips where ip_address = target_ip;
end;
$$;

create or replace function public.admin_get_blocked_ips(
  p_limit integer default 100,
  p_offset integer default 0
)
returns table (
  ip_address text,
  reason text,
  blocked_at timestamptz,
  blocked_by uuid,
  total_count bigint
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  return query
  select
    b.ip_address::text,
    b.reason,
    b.blocked_at,
    b.blocked_by,
    pg_catalog.count(*) over () as total_count
  from public.blocked_ips b
  order by b.blocked_at desc
  limit least(200, greatest(1, coalesce(p_limit, 100)))
  offset greatest(0, coalesce(p_offset, 0));
end;
$$;

-- Called only by the Vercel server middleware with a server-side secret key.
create or replace function public.server_is_ip_blocked(p_ip text)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  target_ip inet;
begin
  if p_ip is null or pg_catalog.btrim(p_ip) = '' then return false; end if;
  begin
    target_ip := pg_catalog.host(pg_catalog.btrim(p_ip)::inet)::inet;
  exception when invalid_text_representation then
    return false;
  end;
  return exists (
    select 1 from public.blocked_ips b where b.ip_address = target_ip
  );
end;
$$;

-- Browser fallback for hosts without routing middleware. The caller cannot choose
-- an IP; it is always derived from Supabase's request headers.
create or replace function public.current_ip_is_blocked()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.blocked_ips b
    where b.ip_address = public.hanyu_request_ip()
  );
$$;

-- Include the current denylist size in the existing overview payload.
create or replace function public.admin_get_summary()
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  bangkok_day_start timestamptz := (
    pg_catalog.date_trunc('day', pg_catalog.now() at time zone 'Asia/Bangkok')
    at time zone 'Asia/Bangkok'
  );
  result jsonb;
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;

  select pg_catalog.jsonb_build_object(
    'visits_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start),
    'visits_last_7_days', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start - interval '6 days'),
    'unique_visitors_today', (select pg_catalog.count(distinct v.visitor_id) from public.visitor_events v where v.visited_at >= bangkok_day_start),
    'unique_ips_today', (select pg_catalog.count(distinct v.ip_address) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.ip_address is not null),
    'anonymous_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.user_id is null),
    'authenticated_today', (select pg_catalog.count(*) from public.visitor_events v where v.visited_at >= bangkok_day_start and v.user_id is not null),
    'total_users', (select pg_catalog.count(*) from public.profiles),
    'total_feedback', (select pg_catalog.count(*) from public.feedback_messages),
    'blocked_ips', (select pg_catalog.count(*) from public.blocked_ips)
  ) into result;

  return result;
end;
$$;

revoke all on function public.hanyu_request_ip() from public;
revoke all on function public.admin_block_ip(text, text) from public;
revoke all on function public.admin_unblock_ip(text) from public;
revoke all on function public.admin_get_blocked_ips(integer, integer) from public;
revoke all on function public.server_is_ip_blocked(text) from public;
revoke all on function public.current_ip_is_blocked() from public;

grant execute on function public.admin_block_ip(text, text) to authenticated;
grant execute on function public.admin_unblock_ip(text) to authenticated;
grant execute on function public.admin_get_blocked_ips(integer, integer) to authenticated;
grant execute on function public.server_is_ip_blocked(text) to service_role;
grant execute on function public.current_ip_is_blocked() to anon, authenticated;
grant select on table public.blocked_ips to service_role;
