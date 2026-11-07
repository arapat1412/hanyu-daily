import glob
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# The 20 categories for YCT 6
CATEGORIES_6 = [
    {"id": "do-an-va-do-uong", "nameVi": "Đồ ăn & Thức uống", "nameZh": "美食饮品", "icon": "🍜", "badgeColor": "bg-orange-100 text-orange-800 border-orange-300"},
    {"id": "gia-dinh", "nameVi": "Gia đình & Con người", "nameZh": "家庭人物", "icon": "👨‍👩‍👧", "badgeColor": "bg-rose-100 text-rose-800 border-rose-300"},
    {"id": "nha-va-cuoc-song", "nameVi": "Nhà cửa & Đời sống", "nameZh": "居家生活", "icon": "🏡", "badgeColor": "bg-amber-100 text-amber-800 border-amber-300"},
    {"id": "hoc", "nameVi": "Học tập & Trường lớp", "nameZh": "学习教育", "icon": "📚", "badgeColor": "bg-teal-100 text-teal-800 border-teal-300"},
    {"id": "cong-viec", "nameVi": "Công việc & Nghề nghiệp", "nameZh": "工作职场", "icon": "💼", "badgeColor": "bg-blue-100 text-blue-800 border-blue-300"},
    {"id": "ngay-le-va-giai-tri", "nameVi": "Vui chơi & Giải trí", "nameZh": "娱乐活动", "icon": "🎉", "badgeColor": "bg-purple-100 text-purple-800 border-purple-300"},
    {"id": "giao-tiep-va-tuong-tac", "nameVi": "Giao tiếp & Xã giao", "nameZh": "人际交往", "icon": "🤝", "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300"},
    {"id": "suc-khoe-va-co-the", "nameVi": "Sức khỏe & Y tế", "nameZh": "身体健康", "icon": "💪", "badgeColor": "bg-red-100 text-red-800 border-red-300"},
    {"id": "tinh-cam-va-cam-xuc", "nameVi": "Tình cảm & Cảm xúc", "nameZh": "情感心理", "icon": "😊", "badgeColor": "bg-pink-100 text-pink-800 border-pink-300"},
    {"id": "thoi-gian", "nameVi": "Thời gian & Khoảnh khắc", "nameZh": "时间日期", "icon": "⏰", "badgeColor": "bg-sky-100 text-sky-800 border-sky-300"},
    {"id": "thien-nhien", "nameVi": "Thiên nhiên & Động vật", "nameZh": "自然动物", "icon": "🌿", "badgeColor": "bg-green-100 text-green-800 border-green-300"},
    {"id": "noi", "nameVi": "Địa điểm & Nơi chốn", "nameZh": "场所地点", "icon": "📍", "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300"},
    {"id": "giao-thong-va-giao-thong", "nameVi": "Giao thông & Đi lại", "nameZh": "交通出行", "icon": "🚗", "badgeColor": "bg-violet-100 text-violet-800 border-violet-300"},
    {"id": "cac-tu-chuc-nang-va-cau-hoi", "nameVi": "Hư từ & Cấu trúc câu", "nameZh": "虚词句式", "icon": "❓", "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300"},
    {"id": "pho-tu", "nameVi": "Phó từ & Trạng từ", "nameZh": "副词修饰", "icon": "⚡", "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300"},
    {"id": "dem-tu", "nameVi": "Lượng từ & Số lượng", "nameZh": "计量量词", "icon": "🔢", "badgeColor": "bg-amber-100 text-amber-800 border-amber-300"},
    {"id": "tinh-tu", "nameVi": "Tính từ miêu tả", "nameZh": "性质特征", "icon": "🎨", "badgeColor": "bg-rose-100 text-rose-800 border-rose-300"},
    {"id": "thu-tu-trinh-bay", "nameVi": "Liên từ & Thứ tự", "nameZh": "连词逻辑", "icon": "🔗", "badgeColor": "bg-purple-100 text-purple-800 border-purple-300"},
    {"id": "dong-tu", "nameVi": "Động từ hành động", "nameZh": "动作行为", "icon": "🏃", "badgeColor": "bg-lime-100 text-lime-800 border-lime-300"},
    {"id": "khac", "nameVi": "Từ vựng tổng hợp khác", "nameZh": "综合其他", "icon": "✨", "badgeColor": "bg-slate-100 text-slate-800 border-slate-300"},
]

valid_ids = set(c["id"] for c in CATEGORIES_6)

MAP_CATEGORY_6 = {
    'do-an-va-do-uong': 'do-an-va-do-uong',
    'thuc-pham-ii': 'do-an-va-do-uong',
    'gia-dinh-va-cac-moi-quan-he': 'gia-dinh',
    'gia-dinh-va-tre-em': 'gia-dinh',
    'mo-ta-con-nguoi': 'gia-dinh',
    'nhung-nguoi': 'gia-dinh',
    'can-nha': 'nha-va-cuoc-song',
    'ho-gia-dinh': 'nha-va-cuoc-song',
    'nha-va-cuoc-song': 'nha-va-cuoc-song',
    'hoc': 'hoc',
    'nghien-cuu-va-lam-viec': 'hoc',
    'cong-viec': 'cong-viec',
    'cong-viec-va-tien-bac': 'cong-viec',
    'giai-tri': 'ngay-le-va-giai-tri',
    'cac-mon-the-thao': 'ngay-le-va-giai-tri',
    'le-hoi-va-doi-song-xa-hoi': 'ngay-le-va-giai-tri',
    'ngay-le-va-doi-song-xa-hoi': 'ngay-le-va-giai-tri',
    'ngay-le-va-giai-tri': 'ngay-le-va-giai-tri',
    'thoi-gian-ranh-roi': 'ngay-le-va-giai-tri',
    'giao-tiep-va-tuong-tac': 'giao-tiep-va-tuong-tac',
    'giao-tiep-va-phep-xa-giao': 'giao-tiep-va-tuong-tac',
    'doi-thoai-va-thao-luan': 'giao-tiep-va-tuong-tac',
    'phep-lich-su': 'giao-tiep-va-tuong-tac',
    'suc-khoe-va-co-the': 'suc-khoe-va-co-the',
    'suc-khoe-va-y-hoc': 'suc-khoe-va-co-the',
    'tinh-cam-va-cam-xuc': 'tinh-cam-va-cam-xuc',
    'suy-nghi-va-cam-xuc': 'tinh-cam-va-cam-xuc',
    'tu-duy': 'tinh-cam-va-cam-xuc',
    'thoi-gian': 'thoi-gian',
    'thien-nhien': 'thien-nhien',
    'thien-nhien-va-dong-vat': 'thien-nhien',
    'thoi-tiet': 'thien-nhien',
    'noi': 'noi',
    'dia-ly': 'noi',
    'vi-tri-va-du-lich': 'noi',
    'giao-thong-va-giao-thong': 'giao-thong-va-giao-thong',
    'van-chuyen-va-di-chuyen': 'giao-thong-va-giao-thong',
    'cac-tu-chuc-nang-va-cau-hoi': 'cac-tu-chuc-nang-va-cau-hoi',
    'tu-chuc-nang': 'cac-tu-chuc-nang-va-cau-hoi',
    'tu-chuc-nang-i': 'cac-tu-chuc-nang-va-cau-hoi',
    'dai-tu': 'cac-tu-chuc-nang-va-cau-hoi',
    'pho-tu': 'pho-tu',
    'dem-tu': 'dem-tu',
    'do-luong-tu': 'dem-tu',
    'so-luong-va-do-luong': 'dem-tu',
    'tinh-tu': 'tinh-tu',
    'dac-diem': 'tinh-tu',
    'ban-tinh': 'tinh-tu',
    'thu-tu-trinh-bay': 'thu-tu-trinh-bay',
    'xu-huong-va-nhung-thay-doi': 'thu-tu-trinh-bay',
    'dong-tu': 'dong-tu',
    'dong-tu-toi': 'dong-tu',
    'dong-tu-ho-gia-dinh': 'dong-tu',
    'words-ii': 'dong-tu',
    'danh-tu': 'khac',
    'thong-tin': 'khac',
    'thong-tin-va-phuong-tien': 'khac',
    'mua-sam': 'khac',
    'quan-ao-va-ngoai-hinh': 'khac',
    'quan-ao-va-phu-kien': 'khac',
    'khac': 'khac',
    'boya-intermediate-1-liu-xue-zhong-guo': 'hoc',
    'boya-quasi-intermediate-1-xiang-gang-de-da-lou-bei-jing-de-da-shu': 'noi'
}

WORD_CAT_OVERRIDE = {
    '勇敢': 'tinh-tu',
    '聪明': 'tinh-tu',
    '活泼': 'tinh-tu',
    '马虎': 'tinh-tu',
    '双胞胎': 'gia-dinh',
    '属': 'dong-tu',
    '猴': 'thien-nhien',
    '鸟': 'thien-nhien',
    '鱼': 'thien-nhien',
    '猫': 'thien-nhien',
    '熊猫': 'thien-nhien',
    '动物园': 'noi',
    '月亮': 'thien-nhien',
    '辣': 'tinh-tu',
    '帽子': 'khac',
    '盘子': 'nha-va-cuoc-song',
    '换': 'dong-tu',
    '注意': 'tinh-cam-va-cam-xuc',
    '数学': 'hoc',
    '表演': 'ngay-le-va-giai-tri',
    '打扫': 'nha-va-cuoc-song',
    '房间': 'nha-va-cuoc-song',
    '唱歌': 'ngay-le-va-giai-tri',
    '受欢迎': 'tinh-cam-va-cam-xuc',
    '麻婆豆腐': 'do-an-va-do-uong',
    '鱼缸': 'nha-va-cuoc-song',
    '儿童车': 'giao-thong-va-giao-thong',
    '吃不了': 'do-an-va-do-uong',
    '藏起来': 'dong-tu',
    '身': 'dem-tu',
    '想起来': 'tinh-cam-va-cam-xuc',
}

lessons = sorted(glob.glob("scripts/cached_yct6/lesson_*.json"))
all_words = []
for lpath in lessons:
    with open(lpath, "r", encoding="utf-8") as f:
        data = json.load(f)
    for w in data.get("lesson", {}).get("words", []):
        all_words.append(w)

unmapped = set()
mapped_distribution = {}

for w in all_words:
    hanzi = w.get("hanzi")
    tslug = w.get("topicSlug", "")
    target = WORD_CAT_OVERRIDE.get(hanzi) or MAP_CATEGORY_6.get(tslug)
    if not target or target not in valid_ids:
        unmapped.add((tslug, hanzi))
    else:
        mapped_distribution[target] = mapped_distribution.get(target, 0) + 1

if unmapped:
    print(f"Unmapped ({len(unmapped)}): {unmapped}")
else:
    print("All 187 words successfully mapped to the 20 categories!")
    print("\nCategory distribution:")
    for cat in CATEGORIES_6:
        cid = cat["id"]
        cnt = mapped_distribution.get(cid, 0)
        print(f"  {cat['icon']} {cat['nameVi']} ({cid}): {cnt} words")
