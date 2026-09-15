-- Allow the sole administrator to show or hide one synthetic learner.
-- The existing bulk function remains the source of truth for show/hide all.

create or replace function public.admin_set_synthetic_learner_enabled(
  p_learner_id uuid,
  p_enabled boolean
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.hanyu_is_admin() then
    raise exception 'Admin access required' using errcode = '42501';
  end if;
  if p_learner_id is null or p_enabled is null then
    raise exception 'Learner and enabled state are required' using errcode = '22023';
  end if;

  update public.synthetic_learners
  set active = p_enabled,
      updated_at = pg_catalog.now()
  where id = p_learner_id;

  if not found then
    raise exception 'Synthetic learner not found' using errcode = 'P0002';
  end if;
  return true;
end;
$$;

revoke all on function public.admin_set_synthetic_learner_enabled(uuid, boolean) from public;
grant execute on function public.admin_set_synthetic_learner_enabled(uuid, boolean) to authenticated;

