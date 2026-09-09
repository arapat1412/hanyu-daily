-- Public profile pictures with owner-only uploads and updates.

alter table public.profiles
  add column if not exists avatar_url text;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'avatars',
  'avatars',
  true,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Avatar images are publicly readable" on storage.objects;
create policy "Avatar images are publicly readable"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'avatars');

drop policy if exists "Users upload their own avatar" on storage.objects;
create policy "Users upload their own avatar"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

drop policy if exists "Users update their own avatar" on storage.objects;
create policy "Users update their own avatar"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and owner_id = (select auth.uid()::text)
  )
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

drop policy if exists "Users delete their own avatar" on storage.objects;
create policy "Users delete their own avatar"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and owner_id = (select auth.uid()::text)
  );

grant update (avatar_url, updated_at) on table public.profiles to authenticated;

drop view if exists public.public_leaderboard;
create view public.public_leaderboard
with (security_invoker = true)
as
select
  s.user_id,
  p.display_name,
  p.username,
  p.avatar_url,
  s.xp,
  s.weekly_xp,
  s.completed,
  s.average_score,
  s.streak,
  s.hsk,
  s.updated_at
from public.leaderboard_stats s
join public.profiles p on p.id = s.user_id;

grant select on table public.public_leaderboard to anon, authenticated;
