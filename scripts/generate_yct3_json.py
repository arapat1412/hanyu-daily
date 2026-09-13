import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import glob
import re
import pypinyin

# 1. Load 20 topics
with open('scripts/yct3_level_info.json', 'r', encoding='utf-8') as f:
    level_info = json.load(f)

topics_raw = level_info['level']['topics']

# 2. Load 11 lessons
with open('scripts/cached_yct3/lessons_list.json', 'r', encoding='utf-8') as f:
    lessons_list = json.load(f)

# 3. Load all topic words
with open('scripts/cached_yct3/all_300_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

# 4. Load all lesson files
lesson_files = sorted(glob.glob('scripts/cached_yct3/lesson_*.json'))
lesson_words_dict = {}
for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lnum = ldata['lesson']['lessonNumber']
    for w in ldata['lesson']['words']:
        lesson_words_dict[w['hanzi']] = (lnum, w)

# Clean pinyin helper
def clean_pinyin(p):
    if not p:
        return ""
    return p.replace('*', '').strip()

def get_sentence_pinyin(zh_text):
    py_list = pypinyin.pinyin(zh_text, style=pypinyin.Style.TONE)
    res = []
    for item in py_list:
        res.append(item[0])
    s = " ".join(res)
    if s:
        s = s[0].upper() + s[1:]
    return s

def pinyin_slug(p):
    # remove tone marks for id
    s = pypinyin.slug(p, separator='-')
    s = re.sub(r'[^a-zA-Z0-9\-]', '', s)
    return s.lower()

# Known manual fallbacks for the 3 missing-vietnamese examples
MANUAL_EXAMPLES = {
    '丈夫': {
        'zh': '她的丈夫是一位医生。',
        'py': 'Tā de zhàngfu shì yí wèi yīshēng.',
        'vi': 'Chồng cô ấy là một bác sĩ.'
    },
    '裙子': {
        'zh': '她穿着一条红色的裙子。',
        'py': 'Tā chuānzhe yì tiáo hóngsè de qúnzi.',
        'vi': 'Cô ấy đang mặc một chiếc váy màu đỏ.'
    },
    '眼镜': {
        'zh': '他戴着一副眼镜。',
        'py': 'Tā dàizhe yí fù yǎnjìng.',
        'vi': 'Anh ấy đang đeo một cặp kính.'
    }
}

def parse_best_example(raw_word):
    hz = raw_word['hanzi']
    if hz in MANUAL_EXAMPLES:
        return MANUAL_EXAMPLES[hz]['zh'], MANUAL_EXAMPLES[hz]['py'], MANUAL_EXAMPLES[hz]['vi']

    exs = raw_word.get('examples', [])
    for ex in exs:
        if isinstance(ex, dict):
            zh = ex.get('hanzi') or ex.get('zh') or ex.get('sentence') or ''
            py = ex.get('pinyin') or ''
            vi = ex.get('meaningVi') or ex.get('vietnamese') or ex.get('vi') or ex.get('meaning') or ''
            if zh and vi:
                if not py:
                    py = get_sentence_pinyin(zh)
                return zh.strip(), py.strip(), vi.strip()

    # If no dict has both zh and vi, fallback to word meaning
    py = clean_pinyin(raw_word.get('pinyin', ''))
    meaning = raw_word.get('wordMeaningVi') or raw_word.get('translationVi') or ''
    return hz, py, meaning

# Merge all words
merged = {}
for w in topic_words:
    hz = w['hanzi']
    merged[hz] = {
        'raw': w,
        'lessonNumber': lesson_words_dict.get(hz, (None, None))[0]
    }

for hz, (lnum, lw) in lesson_words_dict.items():
    if hz not in merged:
        merged[hz] = {
            'raw': lw,
            'lessonNumber': lnum
        }

print(f"Total unique merged words: {len(merged)}")

# Map topics to slug
topic_mapping = {
    'do-an-va-do-uong': {'nameVi': 'Đồ ăn & Thức uống', 'nameZh': '美食饮品', 'icon': '🍜', 'badgeColor': 'bg-orange-100 text-orange-800 border-orange-300', 'desc': 'Bánh bao, món ăn, hoa quả, trà, sữa, nhà hàng'},
    'nha-va-gia-dinh': {'nameVi': 'Gia đình & Nhà cửa', 'nameZh': '家庭居家', 'icon': '🏡', 'badgeColor': 'bg-rose-100 text-rose-800 border-rose-300', 'desc': 'Người nhà, phòng ở, đồ đạc, đồ gia dụng'},
    'suc-khoe-va-co-the': {'nameVi': 'Sức khỏe & Cơ thể', 'nameZh': '身体健康', 'icon': '💪', 'badgeColor': 'bg-indigo-100 text-indigo-800 border-indigo-300', 'desc': 'Các bộ phận cơ thể, trạng thái khỏe mạnh, đau ốm'},
    'giai-tri-va-vui-choi-giai-tri': {'nameVi': 'Vui chơi & Thể thao', 'nameZh': '运动娱乐', 'icon': '⚽', 'badgeColor': 'bg-purple-100 text-purple-800 border-purple-300', 'desc': 'Bóng đá, bóng rổ, bơi lội, ca hát, nhảy múa, vẽ tranh'},
    'nhung-nguoi': {'nameVi': 'Con người & Nghề nghiệp', 'nameZh': '人物职业', 'icon': '👨‍👩‍👧', 'badgeColor': 'bg-pink-100 text-pink-800 border-pink-300', 'desc': 'Bác sĩ, thầy cô, bạn học, học sinh, chú, bác'},
    'nghien-cuu-va-lam-viec': {'nameVi': 'Học tập & Trường lớp', 'nameZh': '学习学校', 'icon': '📚', 'badgeColor': 'bg-teal-100 text-teal-800 border-teal-300', 'desc': 'Lớp học, bài tập, kỳ thi, câu hỏi, trả lời, bút sách'},
    'thoi-gian': {'nameVi': 'Thời gian & Lịch trình', 'nameZh': '时间日期', 'icon': '⏰', 'badgeColor': 'bg-sky-100 text-sky-800 border-sky-300', 'desc': 'Giờ phút, năm tháng ngày, sáng tối, mùa màng'},
    'thien-nhien-va-dong-vat': {'nameVi': 'Thiên nhiên & Động vật', 'nameZh': '动物自然', 'icon': '🐼', 'badgeColor': 'bg-emerald-100 text-emerald-800 border-emerald-300', 'desc': 'Mặt trời, mặt trăng, mưa, tuyết, hoa cỏ, muông thú'},
    'giao-tiep-va-phep-xa-giao': {'nameVi': 'Chào hỏi & Giao tiếp', 'nameZh': '问候礼貌', 'icon': '👋', 'badgeColor': 'bg-amber-100 text-amber-800 border-amber-300', 'desc': 'Chào hỏi, cảm ơn, xin lỗi, chúc mừng sinh nhật'},
    'dai-tu': {'nameVi': 'Đại từ xưng hô & Chỉ thị', 'nameZh': '人称代词', 'icon': '🙋‍♂️', 'badgeColor': 'bg-blue-100 text-blue-800 border-blue-300', 'desc': 'Tôi, bạn, anh ấy, chúng tôi, cái này, cái kia'},
    'cac-tu-chuc-nang-va-cau-hoi': {'nameVi': 'Hư từ & Câu hỏi', 'nameZh': '虚词问句', 'icon': '❓', 'badgeColor': 'bg-cyan-100 text-cyan-800 border-cyan-300', 'desc': 'Từ để hỏi, trợ từ, liên từ, giới từ ngữ pháp'},
    'dong-tu': {'nameVi': 'Động từ hành động', 'nameZh': '动作行为', 'icon': '🏃', 'badgeColor': 'bg-lime-100 text-lime-800 border-lime-300', 'desc': 'Đi, chạy, nhảy, mua, bán, mặc, cởi, mở, đóng'},
    'giao-thong-va-giao-thong': {'nameVi': 'Phương tiện giao thông', 'nameZh': '交通出行', 'icon': '🚗', 'badgeColor': 'bg-violet-100 text-violet-800 border-violet-300', 'desc': 'Xe buýt, taxi, máy bay, tàu hỏa, xe đạp'},
    'so-luong-va-do-luong': {'nameVi': 'Số lượng & Lượng từ', 'nameZh': '数量量词', 'icon': '🔢', 'badgeColor': 'bg-yellow-100 text-yellow-800 border-yellow-300', 'desc': 'Số đếm, lượng từ chỉ cái, con, quyển, chiếc, ly'},
    'pho-tu': {'nameVi': 'Phó từ chỉ mức độ', 'nameZh': '程度副词', 'icon': '⚡', 'badgeColor': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300', 'desc': 'Rất, cực kỳ, quá, hơn, đều, lại, cũng'},
    'quan-ao-va-phu-kien': {'nameVi': 'Trang phục & Phụ kiện', 'nameZh': '服装配饰', 'icon': '👕', 'badgeColor': 'bg-red-100 text-red-800 border-red-300', 'desc': 'Áo quần, váy, giày dép, nón mũ, mắt kính'},
    'noi': {'nameVi': 'Địa điểm & Nơi chốn', 'nameZh': '地点场所', 'icon': '📍', 'badgeColor': 'bg-emerald-100 text-emerald-800 border-emerald-300', 'desc': 'Trường học, bệnh viện, sân bay, công viên, sở thú'},
    'tinh-tu': {'nameVi': 'Tính từ miêu tả', 'nameZh': '性质特征', 'icon': '🎨', 'badgeColor': 'bg-amber-100 text-amber-800 border-amber-300', 'desc': 'Màu sắc, kích cỡ, tâm trạng, tính chất sự vật'},
    'suy-nghi-va-cam-xuc': {'nameVi': 'Cảm xúc & Suy nghĩ', 'nameZh': '心理情感', 'icon': '😊', 'badgeColor': 'bg-rose-100 text-rose-800 border-rose-300', 'desc': 'Vui, buồn, sợ, thích, muốn, cảm thấy, nghĩ rằng'},
    'khac': {'nameVi': 'Chủ đề tổng hợp khác', 'nameZh': '综合其他', 'icon': '✨', 'badgeColor': 'bg-slate-100 text-slate-800 border-slate-300', 'desc': 'Các từ vựng bổ trợ đa dạng khác'}
}

# Assign categories to the 7 lesson-only words
LESSON_ONLY_CATEGORY = {
    '蛋糕': 'do-an-va-do-uong',
    '作业': 'nghien-cuu-va-lam-viec',
    '班': 'nghien-cuu-va-lam-viec',
    '糖': 'do-an-va-do-uong',
    '花': 'thien-nhien-va-dong-vat',
    '帮': 'dong-tu',
    '面条儿': 'do-an-va-do-uong'
}

# Build final words array
final_words = []
used_ids = set()

for hz, info in merged.items():
    raw = info['raw']
    py = clean_pinyin(raw.get('pinyin', ''))
    meaning = raw.get('wordMeaningVi') or raw.get('translationVi') or ''
    
    # category
    cat_slug = raw.get('topicSlug')
    if not cat_slug or cat_slug not in topic_mapping:
        cat_slug = LESSON_ONLY_CATEGORY.get(hz, 'khac')

    # id
    base_slug = pinyin_slug(py) if py else 'word'
    word_id = f"yct3-{base_slug}"
    if word_id in used_ids:
        # append hanzi
        suffix = pypinyin.slug(hz, separator='')
        word_id = f"yct3-{base_slug}-{suffix}"
    if word_id in used_ids:
        idx = 2
        while f"{word_id}-{idx}" in used_ids:
            idx += 1
        word_id = f"{word_id}-{idx}"
    used_ids.add(word_id)

    zh_ex, py_ex, vi_ex = parse_best_example(raw)

    entry = {
        'id': word_id,
        'hanzi': hz,
        'pinyin': py,
        'meaning': meaning,
        'category': cat_slug,
        'example': zh_ex,
        'examplePinyin': py_ex,
        'exampleVi': vi_ex
    }
    if info['lessonNumber']:
        entry['lessonNumber'] = info['lessonNumber']
    final_words.append(entry)

print(f"Generated {len(final_words)} words successfully!")
print("Sample word:", json.dumps(final_words[0], ensure_ascii=False, indent=2))

with open('scripts/cached_yct3/final_yct3_words.json', 'w', encoding='utf-8') as f:
    json.dump(final_words, f, ensure_ascii=False, indent=2)
print("Saved final_yct3_words.json!")
