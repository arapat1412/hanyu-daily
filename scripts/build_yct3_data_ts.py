import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re
import glob
import pypinyin

# 1. Load topics and lessons data
with open('scripts/yct3_level_info.json', 'r', encoding='utf-8') as f:
    level_info = json.load(f)

# 2. Load cached topics words
with open('scripts/cached_yct3/all_300_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

# 3. Load lessons
lesson_files = sorted(glob.glob('scripts/cached_yct3/lesson_*.json'))
lessons_meta = []
lesson_words_dict = {}

for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lesson = ldata['lesson']
    lnum = lesson['lessonNumber']
    slug = lesson['lessonSlug']
    title_vi = lesson['titleVi']
    title_zh = lesson['titleZh']
    word_count = lesson['wordCount']
    est_mins = lesson.get('estimatedMinutes', 8)
    
    lessons_meta.append({
        'lessonNumber': lnum,
        'lessonSlug': slug,
        'titleVi': title_vi,
        'titleZh': title_zh,
        'wordCount': word_count,
        'estimatedMinutes': est_mins
    })
    
    for w in lesson['words']:
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
    # pinyin normal style for clean id
    s = pypinyin.slug(p, style=pypinyin.Style.NORMAL, separator='-')
    s = re.sub(r'[^a-zA-Z0-9\-]', '', s)
    return s.lower()

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

    py = clean_pinyin(raw_word.get('pinyin', ''))
    meaning = raw_word.get('wordMeaningVi') or raw_word.get('translationVi') or ''
    return hz, py, meaning

# 20 Categories definition
CATEGORIES = [
    {
        "id": "do-an-va-do-uong",
        "nameVi": "Đồ ăn & Thức uống",
        "nameZh": "美食饮品",
        "icon": "🍜",
        "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
        "description": "Bánh bao, món ăn, hoa quả, trà, sữa, nhà hàng",
    },
    {
        "id": "nha-va-gia-dinh",
        "nameVi": "Gia đình & Nhà cửa",
        "nameZh": "家庭居家",
        "icon": "🏡",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Người nhà, phòng ở, đồ đạc, đồ gia dụng trong gia đình",
    },
    {
        "id": "suc-khoe-va-co-the",
        "nameVi": "Sức khỏe & Cơ thể",
        "nameZh": "身体健康",
        "icon": "💪",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
        "description": "Các bộ phận cơ thể, trạng thái khỏe mạnh, ốm đau, khám bệnh",
    },
    {
        "id": "giai-tri-va-vui-choi-giai-tri",
        "nameVi": "Vui chơi & Thể thao",
        "nameZh": "运动娱乐",
        "icon": "⚽",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Bóng đá, bóng rổ, bơi lội, ca hát, nhảy múa, vẽ tranh",
    },
    {
        "id": "nhung-nguoi",
        "nameVi": "Con người & Nghề nghiệp",
        "nameZh": "人物职业",
        "icon": "👨‍👩‍👧",
        "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
        "description": "Bác sĩ, thầy cô, bạn học, học sinh, chú bác, tài xế",
    },
    {
        "id": "nghien-cuu-va-lam-viec",
        "nameVi": "Học tập & Trường lớp",
        "nameZh": "学习学校",
        "icon": "📚",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "description": "Lớp học, bài tập, kỳ thi, câu hỏi, trả lời, sách bút",
    },
    {
        "id": "thoi-gian",
        "nameVi": "Thời gian & Lịch trình",
        "nameZh": "时间日期",
        "icon": "⏰",
        "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
        "description": "Giờ phút, năm tháng ngày, sáng tối, các mùa trong năm",
    },
    {
        "id": "thien-nhien-va-dong-vat",
        "nameVi": "Thiên nhiên & Động vật",
        "nameZh": "动物自然",
        "icon": "🐼",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Mặt trời, mặt trăng, mưa, tuyết, hoa cỏ, muông thú đáng yêu",
    },
    {
        "id": "giao-tiep-va-phep-xa-giao",
        "nameVi": "Chào hỏi & Giao tiếp",
        "nameZh": "问候礼貌",
        "icon": "👋",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Chào hỏi, cảm ơn, xin lỗi, chúc mừng sinh nhật, lễ phép",
    },
    {
        "id": "dai-tu",
        "nameVi": "Đại từ xưng hô & Chỉ thị",
        "nameZh": "人称代词",
        "icon": "🙋‍♂️",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
        "description": "Tôi, bạn, anh ấy, chúng tôi, cái này, cái kia, mọi người",
    },
    {
        "id": "cac-tu-chuc-nang-va-cau-hoi",
        "nameVi": "Hư từ & Câu hỏi",
        "nameZh": "虚词问句",
        "icon": "❓",
        "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
        "description": "Từ để hỏi, trợ từ ngữ khí, liên từ, giới từ ngữ pháp",
    },
    {
        "id": "dong-tu",
        "nameVi": "Động từ hành động",
        "nameZh": "动作行为",
        "icon": "🏃",
        "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
        "description": "Đi, chạy, nhảy, mua, bán, mặc, cởi, mở, đóng, giúp đỡ",
    },
    {
        "id": "giao-thong-va-giao-thong",
        "nameVi": "Phương tiện giao thông",
        "nameZh": "交通出行",
        "icon": "🚗",
        "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
        "description": "Xe buýt, taxi, máy bay, tàu hỏa, xe đạp, đường sá",
    },
    {
        "id": "so-luong-va-do-luong",
        "nameVi": "Số lượng & Lượng từ",
        "nameZh": "数量量词",
        "icon": "🔢",
        "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
        "description": "Số đếm, lượng từ chỉ cái, con, quyển, chiếc, ly, mét",
    },
    {
        "id": "pho-tu",
        "nameVi": "Phó từ chỉ mức độ",
        "nameZh": "程度副词",
        "icon": "⚡",
        "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
        "description": "Rất, cực kỳ, quá, hơn, đều, lại, cũng, nhất",
    },
    {
        "id": "quan-ao-va-phu-kien",
        "nameVi": "Trang phục & Phụ kiện",
        "nameZh": "服装配饰",
        "icon": "👕",
        "badgeColor": "bg-red-100 text-red-800 border-red-300",
        "description": "Áo quần, váy, giày dép, nón mũ, mắt kính, đồng hồ",
    },
    {
        "id": "noi",
        "nameVi": "Địa điểm & Nơi chốn",
        "nameZh": "地点场所",
        "icon": "📍",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Trường học, bệnh viện, sân bay, công viên, sở thú, thư viện",
    },
    {
        "id": "tinh-tu",
        "nameVi": "Tính từ miêu tả",
        "nameZh": "性质特征",
        "icon": "🎨",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Màu sắc, kích cỡ, tính chất, hình dáng đồ vật và con người",
    },
    {
        "id": "suy-nghi-va-cam-xuc",
        "nameVi": "Cảm xúc & Suy nghĩ",
        "nameZh": "心理情感",
        "icon": "😊",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Vui, buồn, sợ, thích, muốn, cảm thấy, nghĩ rằng, nhớ mong",
    },
    {
        "id": "khac",
        "nameVi": "Chủ đề tổng hợp khác",
        "nameZh": "综合其他",
        "icon": "✨",
        "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
        "description": "Các từ vựng bổ trợ đa dạng mở rộng cho giao tiếp",
    }
]

cat_ids = set(c['id'] for c in CATEGORIES)

LESSON_ONLY_CATEGORY = {
    '蛋糕': 'do-an-va-do-uong',
    '作业': 'nghien-cuu-va-lam-viec',
    '班': 'nghien-cuu-va-lam-viec',
    '糖': 'do-an-va-do-uong',
    '花': 'thien-nhien-va-dong-vat',
    '帮': 'dong-tu',
    '面条儿': 'do-an-va-do-uong'
}

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

final_words = []
used_ids = set()

# Emoji mapper
DEFAULT_EMOJIS = {
    'do-an-va-do-uong': '🍜',
    'nha-va-gia-dinh': '🏡',
    'suc-khoe-va-co-the': '💪',
    'giai-tri-va-vui-choi-giai-tri': '⚽',
    'nhung-nguoi': '🧑',
    'nghien-cuu-va-lam-viec': '📖',
    'thoi-gian': '⏰',
    'thien-nhien-va-dong-vat': '🐼',
    'giao-tiep-va-phep-xa-giao': '👋',
    'dai-tu': '🙋',
    'cac-tu-chuc-nang-va-cau-hoi': '❓',
    'dong-tu': '🏃',
    'giao-thong-va-giao-thong': '🚗',
    'so-luong-va-do-luong': '🔢',
    'pho-tu': '⚡',
    'quan-ao-va-phu-kien': '👕',
    'noi': '📍',
    'tinh-tu': '🎨',
    'suy-nghi-va-cam-xuc': '😊',
    'khac': '✨'
}

SPECIFIC_EMOJIS = {
    '包子': '🥟', '米饭': '🍚', '面条': '🍜', '面条儿': '🍜', '苹果': '🍎',
    '蛋糕': '🎂', '糖': '🍬', '水果': '🍉', '香蕉': '🍌', '茶': '🍵',
    '牛奶': '🥛', '水': '💧', '菜': '🥗', '果汁': '🧃', '饭馆': '🏬',
    '吃': '😋', '喝': '🥤', '好吃': '🤤', '好喝': '🥤',
    '爸爸': '👨', '妈妈': '👩', '哥哥': '👦', '姐姐': '👧', '弟弟': '👶',
    '妹妹': '👧', '爷爷': '👴', '奶奶': '👵', '家': '🏡', '房间': '🚪',
    '桌子': '🪑', '椅子': '🪑', '床': '🛏️', '电视': '📺', '电脑': '💻',
    '猫': '🐱', '狗': '🐶', '鸟': '🐦', '鱼': '🐟', '熊猫': '🐼',
    '花': '🌸', '树': '🌳', '太阳': '☀️', '月亮': '🌙', '雨': '🌧️',
    '雪': '❄️', '风': '💨', '天': '☁️',
    '眼睛': '👀', '鼻子': '👃', '耳朵': '👂', '嘴': '👄', '手': '🖐️',
    '脚': '🦶', '头发': '💇', '个子': '🧍', '疼': '🩹', '感冒': '🤧',
    '病': '🤒', '医生': '👨‍⚕️', '护士': '👩‍⚕️', '医院': '🏥',
    '足球': '⚽', '篮球': '🏀', '乒乓球': '🏓', '游泳': '🏊', '画画儿': '🎨',
    '唱歌': '🎤', '跳舞': '💃', '玩': '🎮', '运动': '🏃', '游戏': '🎲',
    '学校': '🏫', '教室': '🏫', '老师': '👩‍🏫', '学生': '🧑‍🎓', '同学': '🎒',
    '朋友': '🤝', '书包': '🎒', '铅笔': '✏️', '书': '📚', '本子': '📓',
    '作业': '📝', '年级': '🎓', '课': '📖', '汉语': '🇨🇳', '英语': '🇬🇧',
    '飞机': '✈️', '公共汽车': '🚌', '出租车': '🚕', '火车': '🚆', '自行车': '🚲',
    '船': '🚢', '站': '🚉', '路': '🛣️',
    '衣服': '👕', '裙子': '👗', '裤子': '👖', '鞋': '👟', '帽子': '🧢',
    '雨伞': '🌂', '眼镜': '👓',
    '红': '🔴', '黄': '🟡', '蓝': '🔵', '绿': '🟢', '白': '⚪', '黑': '⚫',
    '大': '🐘', '小': '🐥', '多': '🍇', '少': '🤏', '长': '📏', '短': '📐',
    '高': '🦒', '矮': '🦆', '快': '⚡', '慢': '🐢', '热': '🔥', '冷': '❄️',
    '新': '✨', '旧': '📦', '贵': '💎', '便宜': '🏷️', '漂亮': '✨',
    '高兴': '😄', '笑': '😆', '哭': '😢', '爱': '❤️', '喜欢': '🥰',
    '觉得': '💭', '知道': '💡', '认识': '🤝',
    '今天': '📅', '昨天': '🗓️', '明天': '📆', '现在': '⏰', '早上': '🌅',
    '晚上': '🌙', '年': '🗓️', '月': '🌙', '日': '☀️', '点': '🕐',
    '分钟': '⏱️', '生日': '🎂', '春天': '🌱', '夏天': '☀️', '秋天': '🍁', '冬天': '⛄'
}

word_emojis = {}

for hz, info in merged.items():
    raw = info['raw']
    py = clean_pinyin(raw.get('pinyin', ''))
    meaning = raw.get('wordMeaningVi') or raw.get('translationVi') or ''
    
    cat_slug = raw.get('topicSlug')
    if not cat_slug or cat_slug not in cat_ids:
        cat_slug = LESSON_ONLY_CATEGORY.get(hz, 'khac')

    base_slug = pinyin_slug(hz)
    word_id = f"yct3-{base_slug}"
    if word_id in used_ids:
        suffix = pypinyin.slug(hz, style=pypinyin.Style.NORMAL, separator='')
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

    # emoji
    emoji = SPECIFIC_EMOJIS.get(hz) or DEFAULT_EMOJIS.get(cat_slug, '✨')
    word_emojis[word_id] = emoji

# Sort: words with lessonNumber first, then remaining
final_words.sort(key=lambda w: (w.get('lessonNumber', 999), w['id']))

# Output TypeScript file
ts_content = f'''import type {{ VocabularyWord }} from "../types";
import {{ YCT_PDF_RESOURCES, type YctPdfResource }} from "./yct1Data";

export interface YctWord {{
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct3CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}}

export type Yct3CategoryId =
  | "do-an-va-do-uong"
  | "nha-va-gia-dinh"
  | "suc-khoe-va-co-the"
  | "giai-tri-va-vui-choi-giai-tri"
  | "nhung-nguoi"
  | "nghien-cuu-va-lam-viec"
  | "thoi-gian"
  | "thien-nhien-va-dong-vat"
  | "giao-tiep-va-phep-xa-giao"
  | "dai-tu"
  | "cac-tu-chuc-nang-va-cau-hoi"
  | "dong-tu"
  | "giao-thong-va-giao-thong"
  | "so-luong-va-do-luong"
  | "pho-tu"
  | "quan-ao-va-phu-kien"
  | "noi"
  | "tinh-tu"
  | "suy-nghi-va-cam-xuc"
  | "khac";

export interface Yct3Category {{
  id: Yct3CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}}

export interface Yct3Lesson {{
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}}

export const YCT3_LESSONS: Yct3Lesson[] = {json.dumps(lessons_meta, ensure_ascii=False, indent=2)};

export const YCT3_CATEGORIES: Yct3Category[] = {json.dumps(CATEGORIES, ensure_ascii=False, indent=2)};

export const YCT3_WORDS: YctWord[] = {json.dumps(final_words, ensure_ascii=False, indent=2)};

// Helper to convert YctWord to standard VocabularyWord for modals
export function toVocabularyWord3(word: YctWord): VocabularyWord {{
  return {{
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct3",
    hskLevel: "HSK3",
    exampleSentence: {{
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    }},
  }};
}}

// Progress persistence for YCT3
const STORAGE_KEY_YCT3 = "hanyu.yct3.progress.v1";

export interface Yct3Progress {{
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}}

export function getYct3Progress(): Yct3Progress {{
  try {{
    const raw = localStorage.getItem(STORAGE_KEY_YCT3);
    if (!raw) {{
      return {{
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      }};
    }}
    return JSON.parse(raw) as Yct3Progress;
  }} catch {{
    return {{
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    }};
  }}
}}

export function saveYct3Progress(progress: Yct3Progress): void {{
  try {{
    localStorage.setItem(STORAGE_KEY_YCT3, JSON.stringify(progress));
  }} catch {{
    // ignore
  }}
}}

export function toggleLearnedWord3(wordId: string): Yct3Progress {{
  const current = getYct3Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const updated: Yct3Progress = {{
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + xpGain,
  }};
  saveYct3Progress(updated);
  return updated;
}}

export function recordQuizCompletion3(
  score: number,
  total: number
): {{ progress: Yct3Progress; earnedXp: number }} {{
  const current = getYct3Progress();
  const earnedXp = Math.round((score / total) * 30);
  const updated: Yct3Progress = {{
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  }};
  saveYct3Progress(updated);
  return {{ progress: updated, earnedXp }};
}}

// Quiz Generator for kids
export interface YctQuizQuestion {{
  id: string;
  type: "meaning" | "pinyin" | "listen";
  prompt: string;
  hanzi: string;
  pinyin: string;
  audioText: string;
  options: string[];
  correctAnswer: string;
  word: YctWord;
}}

export function generateYct3Quiz(
  count = 10,
  filter?: {{ category?: Yct3CategoryId; lessonNumber?: number }}
): YctQuizQuestion[] {{
  let pool = YCT3_WORDS;
  if (filter?.lessonNumber) {{
    pool = pool.filter((w) => w.lessonNumber === filter.lessonNumber);
  }} else if (filter?.category) {{
    pool = pool.filter((w) => w.category === filter.category);
  }}

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((word, idx) => {{
    const types: ("meaning" | "pinyin" | "listen")[] = ["meaning", "pinyin", "listen"];
    const type = types[idx % types.length];

    const distractors = YCT3_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {{
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {{
        id: `q3-${{word.id}}-${{idx}}`,
        type: "meaning",
        prompt: "Từ này nghĩa tiếng Việt là gì bé nhỉ?",
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      }};
    }} else if (type === "pinyin") {{
      const correct = word.pinyin;
      const options = [correct, ...distractors.map((d) => d.pinyin)].sort(
        () => Math.random() - 0.5
      );
      return {{
        id: `q3-${{word.id}}-${{idx}}`,
        type: "pinyin",
        prompt: "Cách đọc Pinyin nào đúng cho chữ này?",
        hanzi: word.hanzi,
        pinyin: "",
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      }};
    }} else {{
      const correct = `${{word.hanzi}} (${{word.pinyin}})`;
      const options = [
        correct,
        ...distractors.map((d) => `${{d.hanzi}} (${{d.pinyin}})`),
      ].sort(() => Math.random() - 0.5);
      return {{
        id: `q3-${{word.id}}-${{idx}}`,
        type: "listen",
        prompt: "Bé hãy bấm nghe loa và chọn chữ Hán đúng nhé!",
        hanzi: "🔊",
        pinyin: "",
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      }};
    }}
  }});
}}

export const WORD_EMOJIS_3: Record<string, string> = {json.dumps(word_emojis, ensure_ascii=False, indent=2)};

export function getWordEmoji3(word: YctWord): string {{
  return WORD_EMOJIS_3[word.id] || "✨";
}}
'''

with open('src/data/yct3Data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated src/data/yct3Data.ts with {len(final_words)} words, {len(lessons_meta)} lessons, {len(CATEGORIES)} categories!")
