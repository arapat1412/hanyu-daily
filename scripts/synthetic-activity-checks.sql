-- Execute after the activity migration, or inside its transaction before rollback.
do $$
declare
  sample_id uuid := 'f0000000-0000-4000-8000-000000000001';
  day date;
  award integer;
  had_break boolean := false;
  had_return boolean := false;
  previous_award integer := 0;
begin
  if public.hanyu_synthetic_daily_xp(sample_id, date '2026-09-09', 5, 50) <> 0
    or public.hanyu_synthetic_daily_xp(sample_id, date '2026-10-09', 0, 0) <> 0
    or public.hanyu_synthetic_streak_at(sample_id, date '2026-10-10', 5, date '2026-10-09', 50, date '2026-10-09') <> 0
    or public.hanyu_synthetic_streak_at(sample_id, date '2026-09-10', 5, date '2026-10-09', 0, date '2026-10-09') <> 0
  then raise exception 'Launch, join or zero-XP boundary failed'; end if;
  if public.hanyu_synthetic_streak_at(sample_id, date '2026-09-10', 3, date '2026-10-09', 50, date '2026-10-09') <> 3 then
    raise exception 'Explicit administrator streak setting failed';
  end if;
  for day in select date '2026-10-09' + offset_day from generate_series(0, 89) offset_day loop
    award := public.hanyu_synthetic_daily_xp(sample_id, day, 5, 50);
    if award <> public.hanyu_synthetic_daily_xp(sample_id, day, 5, 50)
      or award < 0 or award > 50 or (award > 0 and award < 5)
      or (not public.hanyu_synthetic_has_activity(sample_id, day) and award <> 0)
    then raise exception 'Determinism, XP range or rest-day consistency failed'; end if;
    if award = 0 and previous_award = 0 then
      had_break := true;
      if public.hanyu_synthetic_streak_at(sample_id, date '2026-09-10', 0, date '2026-09-09', 50, day) <> 0 then
        raise exception 'Two missed days did not reset the streak';
      end if;
    elsif award > 0 and previous_award = 0 then had_return := true;
    end if;
    previous_award := award;
  end loop;
  if not had_break or not had_return then raise exception 'Sample never took a break or returned'; end if;
  if exists (
    select 1 from public.synthetic_learners s cross join generate_series(0, 89) as days(offset_day)
    where s.active
    group by s.id
    having count(*) filter (where not public.hanyu_synthetic_has_activity(s.id, date '2026-10-09' + offset_day)) = 0
  ) then raise exception 'A learner still studies on every day of the 90-day sample'; end if;
end;
$$;
