import glob
import json
import re
import sys
import pypinyin

sys.stdout.reconfigure(encoding='utf-8')

# Categories config (20 categories)
CATEGORIES_5 = [
    {
        "id": "do-an-va-do-uong",
        "nameVi": "Đồ ăn & Thức uống",
        "nameZh": "美食饮品",
        "icon": "🍜",
        "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
        "description": "Món ăn, hoa quả, đồ uống, súp, thịt cừu, vịt quay, kem"
    },
    {
        "id": "gia-dinh",
        "nameVi": "Gia đình & Con người",
        "nameZh": "家庭人物",
        "icon": "👨‍👩‍👧",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Bố mẹ, anh chị em, con cái, họ hàng, người khác, hàng xóm"
    },
    {
        "id": "nha-va-cuoc-song",
        "nameVi": "Nhà cửa & Đời sống",
        "nameZh": "居家生活",
        "icon": "🏡",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Tòa nhà, tầng gác, thang máy, điều hòa, đồ gia dụng"
    },
    {
        "id": "hoc",
        "nameVi": "Học tập & Trường lớp",
        "nameZh": "学习教育",
        "icon": "📚",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "description": "Nghỉ hè, nghỉ đông, ôn tập, rèn luyện, nâng cao kiến thức"
    },
    {
        "id": "cong-viec",
        "nameVi": "Công việc & Nghề nghiệp",
        "nameZh": "工作职场",
        "icon": "💼",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
        "description": "Làm việc, đi công tác, bác sĩ, y tá, người phục vụ"
    },
    {
        "id": "ngay-le-va-giai-tri",
        "nameVi": "Vui chơi & Giải trí",
        "nameZh": "娱乐活动",
        "icon": "🎉",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Du lịch, chụp ảnh, đánh đàn, leo núi, tập thể thao"
    },
    {
        "id": "giao-tiep-va-tuong-tac",
        "nameVi": "Giao tiếp & Xã giao",
        "nameZh": "人际交往",
        "icon": "🤝",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Giúp đỡ, giới thiệu, nói cho biết, mời mọc, chào đón"
    },
    {
        "id": "suc-khoe-va-co-the",
        "nameVi": "Sức khỏe & Cơ thể",
        "nameZh": "身体健康",
        "icon": "💪",
        "badgeColor": "bg-red-100 text-red-800 border-red-300",
        "description": "Đau bụng, sốt, tiêm thuốc, trám răng, kê đơn, rèn luyện"
    },
    {
        "id": "tinh-cam-va-cam-xuc",
        "nameVi": "Tình cảm & Cảm xúc",
        "nameZh": "情感心理",
        "icon": "😊",
        "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
        "description": "Vui mừng, lo lắng, chán ghét, tin tưởng, ngạc nhiên"
    },
    {
        "id": "thoi-gian",
        "nameVi": "Thời gian & Khoảnh khắc",
        "nameZh": "时间日期",
        "icon": "⏰",
        "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
        "description": "Tương lai, cuối tuần, một lát, trước đây, quá khứ"
    },
    {
        "id": "thien-nhien",
        "nameVi": "Thiên nhiên & Muông thú",
        "nameZh": "自然物候",
        "icon": "🌿",
        "badgeColor": "bg-green-100 text-green-800 border-green-300",
        "description": "Con voi, thỏ, bướm, sâu bọ, bốn mùa xuân hạ thu đông"
    },
    {
        "id": "noi",
        "nameVi": "Địa điểm & Nơi chốn",
        "nameZh": "场所地点",
        "icon": "📍",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Công viên, nhà thi đấu, miền Nam, miền Bắc, bản đồ"
    },
    {
        "id": "giao-thong-va-giao-thong",
        "nameVi": "Giao thông & Đi lại",
        "nameZh": "交通出行",
        "icon": "🚗",
        "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
        "description": "Tàu điện ngầm, tàu hỏa, đi dạo, rời khỏi, bay lượn"
    },
    {
        "id": "cac-tu-chuc-nang-va-cau-hoi",
        "nameVi": "Hư từ & Cấu trúc ngữ pháp",
        "nameZh": "虚词句式",
        "icon": "❓",
        "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
        "description": "Trợ từ ngữ khí, càng ngày càng, hơn nữa, hay là"
    },
    {
        "id": "pho-tu",
        "nameVi": "Phó từ chỉ mức độ",
        "nameZh": "程度副词",
        "icon": "⚡",
        "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
        "description": "Rất, cực kỳ, đặc biệt, nhất định, đột nhiên, ngay lập tức"
    },
    {
        "id": "dem-tu",
        "nameVi": "Lượng từ & Đếm đồ vật",
        "nameZh": "计量量词",
        "icon": "🔢",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Tòa, tầng, đôi, tấm, cái đĩa, cái bát, cái nĩa"
    },
    {
        "id": "tinh-tu",
        "nameVi": "Tính từ miêu tả đặc điểm",
        "nameZh": "性质特征",
        "icon": "🎨",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Lợi hại, thấp, ngắn, đẹp trai, nghiêm túc, thuận tiện, an toàn"
    },
    {
        "id": "thu-tu-trinh-bay",
        "nameVi": "Liên từ & Thứ tự",
        "nameZh": "连词逻辑",
        "icon": "🔗",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Trước tiên, sau đó, ngoài ra, nếu... thì, hoặc là"
    },
    {
        "id": "dong-tu",
        "nameVi": "Động từ hành vi & Thao tác",
        "nameZh": "动作行为",
        "icon": "🏃",
        "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
        "description": "Đặt để, mang theo, dùng, nằm, đứng, ngồi, chuẩn bị, đánh răng"
    },
    {
        "id": "khac",
        "nameVi": "Từ vựng tổng hợp khác",
        "nameZh": "综合其他",
        "icon": "✨",
        "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
        "description": "Đồ vật, ảnh chụp, thói quen và các từ vựng bổ trợ"
    }
]

valid_cat_ids = set(c['id'] for c in CATEGORIES_5)

MAP_CATEGORY_5 = {
    'cac-mon-the-thao': 'ngay-le-va-giai-tri',
    'giai-tri-va-vui-choi-giai-tri': 'ngay-le-va-giai-tri',
    'su-chuyen-dong': 'dong-tu',
    'dong-tu-toi': 'dong-tu',
    'dong-tu-ho-gia-dinh': 'dong-tu',
    'words-ii': 'dong-tu',
    'mo-ta-con-nguoi': 'gia-dinh',
    'nhung-nguoi': 'gia-dinh',
    'nha-va-gia-dinh': 'gia-dinh',
    'ngoi-nha-va-cuoc-song-hang-ngay': 'nha-va-cuoc-song',
    'than-hinh': 'suc-khoe-va-co-the',
    'giao-tiep-va-phep-xa-giao': 'giao-tiep-va-tuong-tac',
    'boya-elementary-1-xian-zai-ji-dian': 'thoi-gian',
    'boya-elementary-1-ming-tian-jian': 'giao-tiep-va-tuong-tac',
    'ban-tinh': 'tinh-tu',
    'danh-tu': 'khac',
    'nghien-cuu-va-lam-viec': 'hoc',
    'cong-viec-va-tien-bac': 'cong-viec',
    'thoi-tiet': 'thien-nhien',
    'thien-nhien-va-dong-vat': 'thien-nhien',
    'thuc-an-va-do-uong': 'do-an-va-do-uong',
    'dia-ly': 'noi',
    'huong': 'noi',
    'tu-duy': 'tinh-cam-va-cam-xuc',
    'dai-tu': 'cac-tu-chuc-nang-va-cau-hoi',
    'so-luong-va-do-luong': 'dem-tu',
    'thong-tin-va-phuong-tien': 'khac',
    'quan-ao-va-phu-kien': 'khac'
}

# Individual word overrides if needed
WORD_CAT_OVERRIDE = {
    '补牙': 'suc-khoe-va-co-the',
    '开药': 'suc-khoe-va-co-the',
    '护士': 'suc-khoe-va-co-the',
    '服务员': 'cong-viec',
    '工作': 'cong-viec',
    '出差': 'cong-viec',
    '功夫': 'ngay-le-va-giai-tri',
    '体育馆': 'noi',
    '比赛': 'ngay-le-va-giai-tri',
    '散步': 'ngay-le-va-giai-tri',
}

lesson_files = sorted(glob.glob('scripts/cached_yct5/lesson_*.json'))
unmapped = []

for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        data = json.load(f)
    for w in data['lesson'].get('words', []):
        hz = w['hanzi']
        if hz in WORD_CAT_OVERRIDE:
            final_cat = WORD_CAT_OVERRIDE[hz]
        else:
            raw_c = w.get('topicSlug') or 'khac'
            final_cat = MAP_CATEGORY_5.get(raw_c, raw_c)
        if final_cat not in valid_cat_ids:
            unmapped.append((hz, raw_c, final_cat))

print(f"Unmapped words: {len(unmapped)}")
if unmapped:
    print(unmapped)
