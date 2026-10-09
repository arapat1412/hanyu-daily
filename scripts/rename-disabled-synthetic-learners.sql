-- Run with the project's database administrator in Supabase SQL Editor.
-- Updates display names only; active learners and all scoring fields are preserved.
-- The result includes the previous name and a rollback statement for each change.
begin;

lock table public.synthetic_learners in share row exclusive mode;

create temporary table synthetic_before on commit drop as
select * from public.synthetic_learners;

create temporary table synthetic_name_pool (
  position integer primary key,
  display_name text not null
) on commit drop;

insert into synthetic_name_pool (position, display_name)
select ordinality::integer, name
from unnest(array[
  'Mai Anh', 'Tuấn Dũng', 'Phương Nhi', 'Nguyễn Đức Anh',
  'Bảo Trâm', 'Thu Hương', 'Trần Nhật Minh', 'Hoài Nam',
  'Yến Nhi', 'Lê Hoàng Phúc', 'Thảo Nguyên', 'Đỗ Minh Châu',
  'Hồng Nhung', 'Quốc Bảo', 'Nguyễn Tú Anh', 'Tường Vi',
  'Hữu Nghĩa', 'Trần Bích Ngọc', 'Ngọc Ánh', 'Đức Hưng',
  'Phạm Thu Hà', 'An Nhiên', 'Bùi Hải Yến', 'Hoàng Sơn',
  'Diệu Linh', 'Nguyễn Thành Đạt', 'Lâm Anh', 'Thanh Thúy',
  'Võ Gia Hân', 'Duy Khang', 'Trúc Mai', 'Lê Quỳnh Anh',
  'Nhật Quang', 'Nguyễn Hồng Vân', 'Kim Ngân', 'Đặng Hoài An',
  'Hà My', 'Minh Triết', 'Trần Ngọc Diệp', 'Xuân Trường',
  'Phan Thanh Tâm', 'Khánh Ngân', 'Đỗ Hải Đăng', 'Hương Giang',
  'Quang Vinh', 'Nguyễn Phương Thảo', 'Bảo Ngọc', 'Vũ Anh Thư',
  'Huy Hoàng', 'Nguyễn Tuệ Minh', 'Thiên Ân', 'Đinh Ngọc Hân',
  'Thanh Trúc', 'Trần Quốc Huy', 'Mỹ Duyên', 'Phúc Lâm',
  'Uyên Phương', 'Lê Bảo An', 'Như Quỳnh', 'Đặng Minh Hiếu',
  'nhi.ng', 'BaoTran98', 'duypham', 'MyMy_03',
  'linhchi2001', 'Annie Lê', 'tuananh_92', 'Bé Mun',
  'hanhnguyen', 'DuyBắp', 'thuytrang04', 'Tít học bài',
  'QuynhAnh99', 'phuongg', 'Nấm Nhỏ', 'bichngoc_97',
  'NamNguyen88', 'Hana Trần', 'tram.anh', 'BinBin',
  'yen_nhi02', 'BảoBối', 'KhanhTran95', 'Hạnh Miu',
  'tientien', 'Rin Nguyễn', 'dangkhoa_01', 'NgaNgố',
  'Vy cà phê', 'HoangLong96', 'mimi_0808', 'Thu béo',
  'Khanggg', 'Tú Anh nè', 'nhatminh_24', 'Bống Bống',
  'PhucLe', 'susu.99', 'Ngân Nguyễn', 'Jun Phạm',
  'tramy_2k', 'Huy Mèo', 'KimAnh2109', 'Nhím Lười',
  'lethanh93', 'Dâu Tây', 'nhunggg', 'Hải Đỗ',
  'Bắp rang bơ', 'moc_moc', 'AnAn07', 'Bình thường thôi',
  'Mê ngủ hơn học', 'Học xong đi ăn', 'Đợi tui tra từ', 'Chưa nhớ thanh 3',
  'Mỗi ngày một chữ', 'Trà đào ít đá', 'Cà phê rồi học', 'Tối nay ôn bài',
  'Bé hay quên', 'Đang tập viết', 'Ủa đọc sao ta', 'Có hẹn với HSK',
  'Mai thi rồi á', 'Đi học vì mê phim', 'Một chiếc bánh bao', 'Lười mà vẫn học',
  'Đừng gọi tui dậy', 'Team nghe chưa hiểu', 'Học chút thôi', 'Mèo nằm cạnh sách',
  'Đậu HSK thì đi chơi', 'Xin vía nhớ từ', 'Bún bò không hành', 'Tui lại quên chữ',
  'Thích ăn sủi cảo', 'Chờ ngày đi Thượng Hải', 'Hôm nay có học', 'Cú đêm ôn HSK',
  'Nghe thêm lần nữa', 'Một cốc ô long', 'Cơm xong học tiếp', 'Bút hết mực rồi',
  'Lạc giữa chữ Hán', 'Mê phim cổ trang', 'Từ từ tui hiểu', 'Học cùng bé Cam',
  'Lại sai thanh điệu', 'Không bỏ streak đâu', 'Nắng ngoài cửa sổ', 'Ôn bài trên xe bus',
  'Mèo cam học tiếng', 'Chờ tới cuối tuần', 'Học để gọi món', 'Tiểu màn thầu',
  'Bánh cuốn nóng', 'Một ngày không lười', 'Chép chữ hơi xấu', 'Đang nghe podcast',
  'Nhớ được ba từ', 'Sắp thuộc rồi đó', 'Cuối tháng thi HSK', 'Ngủ sớm mai học',
  'xiaoyu', 'linlin_95', 'A Cheng', 'Tiểu Lục',
  'yueyue', 'XiaoMi27', 'Tiểu Ninh', 'Mộc Mộc',
  'QingQing', 'A Bạch', 'Tiểu Đậu', 'XiaoHan',
  'An Yue', 'Yun nhi', 'xiaonan_03', 'Trúc Tử',
  'Tiểu Mãn', 'Chen Chen', 'Yiyi', 'A Dương',
  '小雨', '安安', '林夕', '小桃',
  '阿宁', '子墨', '小鱼', '一一',
  '晚晴', '阿月', '小满', '沐沐',
  '星河', '小禾', '安然', '小林',
  '明月', '小白', '可可', '小夏'
]::text[]) with ordinality as names(name, ordinality);

-- Exclude names already used by any simulated learner.
create temporary table synthetic_rename_plan on commit drop as
with available_names as (
  select row_number() over (order by md5(pool.display_name || ':names-20261009'), pool.position) as slot, pool.display_name
  from synthetic_name_pool pool
  where not exists (
    select 1 from public.synthetic_learners learner
    where lower(btrim(learner.display_name)) = lower(btrim(pool.display_name))
  )
), disabled_learners as (
  select row_number() over (order by md5(id::text || ':rename-20261009'), id) as slot,
    id, username, display_name as previous_name
  from public.synthetic_learners
  where active = false
)
select learner.id, learner.username, learner.previous_name,
  names.display_name as new_name
from disabled_learners learner
join available_names names using (slot);

do $$
begin
  if exists (
    select 1 from synthetic_name_pool
    where char_length(display_name) not between 2 and 80
  ) or exists (
    select 1 from synthetic_name_pool
    group by lower(btrim(display_name)) having count(*) > 1
  ) then
    raise exception 'Invalid or duplicate candidate names; no changes applied';
  end if;
  if (select count(*) from synthetic_rename_plan)
    <> (select count(*) from public.synthetic_learners where active = false) then
    raise exception 'Not enough unique names to rename every disabled learner; no changes applied';
  end if;
end;
$$;

update public.synthetic_learners learner
set display_name = plan.new_name
from synthetic_rename_plan plan
where learner.id = plan.id and learner.active = false;

do $$
begin
  if exists (
    select 1 from synthetic_before original
    join public.synthetic_learners current using (id)
    where (original.active and to_jsonb(original) <> to_jsonb(current))
      or (to_jsonb(original) - 'display_name') <> (to_jsonb(current) - 'display_name')
  ) then
    raise exception 'A protected field changed; rolling back';
  end if;
  if exists (
    select 1 from synthetic_rename_plan plan
    join public.synthetic_learners learner on learner.id = plan.id
    where learner.display_name <> plan.new_name or learner.active
  ) then
    raise exception 'Rename verification failed; rolling back';
  end if;
end;
$$;

-- Save this result before closing the SQL Editor to retain the original names.
select jsonb_build_object(
  'renamed', (select count(*) from synthetic_rename_plan),
  'active_unchanged', (select count(*) from synthetic_before where active),
  'protected_fields_unchanged', true,
  'changes', (select jsonb_agg(jsonb_build_object(
    'id', plan.id, 'username', plan.username, 'previous_name', plan.previous_name,
    'new_name', plan.new_name,
    'rollback_sql', format('UPDATE public.synthetic_learners SET display_name = %L WHERE id = %L AND active = false AND display_name = %L;',
      plan.previous_name, plan.id, plan.new_name)
  ) order by plan.username) from synthetic_rename_plan plan)
) as rename_result;

commit;
