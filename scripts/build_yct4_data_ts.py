import json
import glob
import re
import sys
import pypinyin

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load lessons
with open('scripts/cached_yct4/lessons_list.json', 'r', encoding='utf-8') as f:
    lessons_list = json.load(f).get('lessons', [])

lesson_files = sorted(glob.glob('scripts/cached_yct4/lesson_*.json'))
lessons_meta = []
lesson_words_dict = {}

for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lesson = ldata.get('lesson', {})
    lnum = lesson['lessonNumber']
    slug = lesson['lessonSlug']
    title_vi = lesson['titleVi']
    title_zh = lesson['titleZh']
    word_count = lesson.get('wordCount', len(lesson.get('words', [])))
    est_mins = lesson.get('estimatedMinutes', 8)
    
    lessons_meta.append({
        'lessonNumber': lnum,
        'lessonSlug': slug,
        'titleVi': title_vi,
        'titleZh': title_zh,
        'wordCount': word_count,
        'estimatedMinutes': est_mins
    })
    
    for w in lesson.get('words', []):
        lesson_words_dict[w['hanzi']] = (lnum, w)

# 2. Load topics
with open('scripts/cached_yct4/level_info.json', 'r', encoding='utf-8') as f:
    level_info = json.load(f)
topics_raw = level_info['level']['topics']

# 3. Load all topic words
with open('scripts/cached_yct4/all_topic_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

# Categories config
CATEGORIES = [
    {
        "id": "do-an-va-do-uong",
        "nameVi": "Đồ ăn & Thức uống",
        "nameZh": "美食饮品",
        "icon": "🍜",
        "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
        "description": "Món ăn, hoa quả, đồ uống, no đói, bánh ngọt"
    },
    {
        "id": "gia-dinh",
        "nameVi": "Gia đình & Thân nhân",
        "nameZh": "家庭亲属",
        "icon": "👨‍👩‍👧",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Bố mẹ, anh chị em, cô chú, người thân trong nhà"
    },
    {
        "id": "nha-va-cuoc-song",
        "nameVi": "Nhà cửa & Sinh hoạt",
        "nameZh": "居家生活",
        "icon": "🏡",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Phòng ốc, đồ nội thất, thiết bị sinh hoạt gia đình"
    },
    {
        "id": "hoc",
        "nameVi": "Học tập & Giáo dục",
        "nameZh": "学习教育",
        "icon": "📚",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "description": "Trường lớp, bài học, ôn tập, thi cử, kỳ nghỉ hè"
    },
    {
        "id": "cong-viec",
        "nameVi": "Công việc & Văn phòng",
        "nameZh": "工作职场",
        "icon": "💼",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
        "description": "Công ty, văn phòng, hội nghị, phương pháp, ca làm"
    },
    {
        "id": "ngay-le-va-giai-tri",
        "nameVi": "Lễ hội & Giải trí",
        "nameZh": "节日娱乐",
        "icon": "🎉",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Sở thích, du lịch, leo núi, vẽ tranh, đánh đàn, nghỉ ngơi"
    },
    {
        "id": "giao-tiep-va-tuong-tac",
        "nameVi": "Giao tiếp & Tương tác",
        "nameZh": "交际互动",
        "icon": "🤝",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Gặp gỡ, giúp đỡ, trả lời, trò chuyện xã giao"
    },
    {
        "id": "phep-lich-su",
        "nameVi": "Phép lịch sự & Lễ phép",
        "nameZh": "礼貌用语",
        "icon": "🙏",
        "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
        "description": "Chào mừng, cẩn thận, làm phiền, quan tâm săn sóc"
    },
    {
        "id": "thong-tin-va-phuong-tien",
        "nameVi": "Thông tin & Truyền thông",
        "nameZh": "信息媒体",
        "icon": "📱",
        "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
        "description": "Điện thoại, máy tính, email, báo chí, từ điển"
    },
    {
        "id": "cac-mon-the-thao",
        "nameVi": "Thể thao & Rèn luyện",
        "nameZh": "体育运动",
        "icon": "⚽",
        "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
        "description": "Bóng rổ, bóng đá, thi đấu, rèn luyện, kungfu võ thuật"
    },
    {
        "id": "suc-khoe-va-co-the",
        "nameVi": "Sức khỏe & Cơ thể",
        "nameZh": "身体健康",
        "icon": "💪",
        "badgeColor": "bg-red-100 text-red-800 border-red-300",
        "description": "Bộ phận cơ thể, trạng thái sức khỏe, ốm đau, khám bệnh"
    },
    {
        "id": "tu-duy",
        "nameVi": "Suy nghĩ & Nhận thức",
        "nameZh": "思维认知",
        "icon": "💡",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
        "description": "Hiểu biết, suy nghĩ, dự định, xuất hiện, biểu thị"
    },
    {
        "id": "tinh-cam-va-cam-xuc",
        "nameVi": "Tình cảm & Cảm xúc",
        "nameZh": "情感心理",
        "icon": "😊",
        "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
        "description": "Vui vẻ, khóc, lo lắng, sợ hãi, hồi hộp, mệt mỏi"
    },
    {
        "id": "thoi-gian",
        "nameVi": "Thời gian & Khoảnh khắc",
        "nameZh": "时间日期",
        "icon": "⏰",
        "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
        "description": "Giờ, phút, cuối tuần, gần đây, quá khứ, năm ngoái"
    },
    {
        "id": "thien-nhien",
        "nameVi": "Thiên nhiên & Muông thú",
        "nameZh": "自然动植物",
        "icon": "🌿",
        "badgeColor": "bg-green-100 text-green-800 border-green-300",
        "description": "Cỏ cây, hoa lá, muông thú, cá, cảnh sắc đất trời"
    },
    {
        "id": "thoi-tiet",
        "nameVi": "Thời tiết & Mùa",
        "nameZh": "气候天气",
        "icon": "⛅",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
        "description": "Mưa, tuyết, mây, các mùa xuân hạ thu đông"
    },
    {
        "id": "noi",
        "nameVi": "Địa điểm & Nơi chốn",
        "nameZh": "场所地点",
        "icon": "📍",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Siêu thị, khách sạn, vườn thú, nhà hàng, thành phố"
    },
    {
        "id": "giao-thong-va-giao-thong",
        "nameVi": "Giao thông & Đi lại",
        "nameZh": "交通出行",
        "icon": "🚗",
        "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
        "description": "Tàu điện ngầm, taxi, bến xe, thuyền bè, đi lại"
    },
    {
        "id": "cac-tu-chuc-nang-va-cau-hoi",
        "nameVi": "Hư từ & Câu hỏi",
        "nameZh": "虚词问句",
        "icon": "❓",
        "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
        "description": "Từ để hỏi, câu chữ 把, 被, 比, trợ từ 過, ngữ khí"
    },
    {
        "id": "pho-tu",
        "nameVi": "Phó từ chỉ mức độ",
        "nameZh": "程度副词",
        "icon": "⚡",
        "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
        "description": "So sánh, nhất định, mới, đại khái, bao nhiêu, rất"
    },
    {
        "id": "dai-tu",
        "nameVi": "Đại từ chỉ định & Xưng hô",
        "nameZh": "代词指称",
        "icon": "🙋‍♂️",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
        "description": "Mọi người, cả hai, mỗi người, cái này, cái kia"
    },
    {
        "id": "dem-tu",
        "nameVi": "Lượng từ đếm đồ vật",
        "nameZh": "计量量词",
        "icon": "🔢",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Con, quyển, tầng, cái, nhà, chiếc, nhánh"
    },
    {
        "id": "danh-tu",
        "nameVi": "Danh từ & Khái niệm",
        "nameZh": "名词概念",
        "icon": "📦",
        "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
        "description": "Đồ vật, hộp, lịch sử, câu nói, sự việc tổng hợp"
    },
    {
        "id": "so-luong-va-do-luong",
        "nameVi": "Số lượng & Đo lường",
        "nameZh": "数量度量",
        "icon": "📏",
        "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
        "description": "Trăm, nửa, nhiều, ki-lô-gam, mét, kích thước"
    },
    {
        "id": "dia-ly",
        "nameVi": "Địa lý & Đất nước",
        "nameZh": "地理国家",
        "icon": "🌏",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "description": "Bản đồ, quốc gia, phương bắc, Thượng Hải, biển cả"
    },
    {
        "id": "tinh-tu",
        "nameVi": "Tính từ miêu tả đặc điểm",
        "nameZh": "形容修饰",
        "icon": "🎨",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Yên tĩnh, thấp, rẻ, lớn, nhỏ, nhanh, chậm, bận"
    },
    {
        "id": "thu-tu-trinh-bay",
        "nameVi": "Liên từ & Từ nối",
        "nameZh": "连词逻辑",
        "icon": "🔗",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Không những... mà còn, tuy nhiên, đương nhiên"
    },
    {
        "id": "quan-ao-va-phu-kien",
        "nameVi": "Trang phục & Phụ kiện",
        "nameZh": "服装配饰",
        "icon": "👕",
        "badgeColor": "bg-red-100 text-red-800 border-red-300",
        "description": "Áo sơ mi, quần, mũ nón, váy vóc, ô dù che mưa"
    },
    {
        "id": "mo-ta-con-nguoi",
        "nameVi": "Miêu tả con người & Đời sống",
        "nameZh": "人物描绘",
        "icon": "👥",
        "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
        "description": "Khách khứa, hàng xóm, trẻ trung, cuộc sống thường nhật"
    },
    {
        "id": "dong-tu-toi",
        "nameVi": "Động từ hành vi (Phần 1)",
        "nameZh": "行为动词一",
        "icon": "🏃",
        "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
        "description": "Đứng, yêu thích, sinh trưởng, ôm ấp, đạt được, cầm lấy"
    },
    {
        "id": "words-ii",
        "nameVi": "Động từ hành vi (Phần 2)",
        "nameZh": "行为动词二",
        "icon": "🎯",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Mở, xem, tổ chức, đón nhận, khắc cốt ghi tâm"
    },
    {
        "id": "dong-tu-ho-gia-dinh",
        "nameVi": "Động từ sinh hoạt hằng ngày",
        "nameZh": "日常动词",
        "icon": "🧹",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Dọn dẹp, đeo mặc, treo móc, ăn uống sinh hoạt gia đình"
    }
]

valid_cat_ids = set(c['id'] for c in CATEGORIES)

FALLBACK_CATEGORY = {
    'khac': 'thong-tin-va-phuong-tien',
    'nha-va-gia-dinh': 'nha-va-cuoc-song',
    'giai-tri-va-vui-choi-giai-tri': 'ngay-le-va-giai-tri',
    'tu-chuc-nang': 'cac-tu-chuc-nang-va-cau-hoi',
    'dong-tu': 'dong-tu-toi',
    'nghien-cuu-va-lam-viec': 'hoc',
    'ngoi-nha-va-cuoc-song-hang-ngay': 'gia-dinh'
}

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
    s = pypinyin.slug(p, separator='-')
    s = re.sub(r'[^a-zA-Z0-9\-]', '', s)
    return s.lower()

def parse_best_example(raw_word):
    hz = raw_word['hanzi']
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

for hz, info in merged.items():
    raw = info['raw']
    py = clean_pinyin(raw.get('pinyin', '') or raw.get('wordPinyin', ''))
    meaning = (raw.get('wordMeaningVi') or raw.get('translationVi') or '').strip()

    raw_cat = raw.get('topicSlug')
    cat = FALLBACK_CATEGORY.get(raw_cat, raw_cat)
    if not cat or cat not in valid_cat_ids:
        cat = 'danh-tu'

    base_slug = pinyin_slug(py) if py else 'word'
    word_id = f"yct4-{base_slug}"
    if word_id in used_ids:
        suffix = pypinyin.slug(hz, separator='')
        word_id = f"yct4-{base_slug}-{suffix}"
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
        'category': cat,
        'example': zh_ex,
        'examplePinyin': py_ex,
        'exampleVi': vi_ex
    }
    if info['lessonNumber'] is not None:
        entry['lessonNumber'] = info['lessonNumber']
    
    final_words.append(entry)

print(f"Total processed words: {len(final_words)}")
print(f"Total with lessonNumber: {sum(1 for w in final_words if 'lessonNumber' in w)}")

# Generate TS code
ts_lines = [
    'import type { VocabularyWord } from "../types";',
    'import { awardDailyXp, awardXp } from "../lib/hsk";',
    'import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";',
    '',
    'export interface YctWord {',
    '  id: string;',
    '  hanzi: string;',
    '  pinyin: string;',
    '  meaning: string;',
    '  category: Yct4CategoryId;',
    '  lessonNumber?: number;',
    '  example: string;',
    '  examplePinyin: string;',
    '  exampleVi: string;',
    '}',
    '',
    'export type Yct4CategoryId =',
]

for idx, c in enumerate(CATEGORIES):
    pipe = "  |" if idx == 0 else "  |"
    ts_lines.append(f'{pipe} "{c["id"]}"')
ts_lines[-1] += ';'

ts_lines.extend([
    '',
    'export interface Yct4Category {',
    '  id: Yct4CategoryId;',
    '  nameVi: string;',
    '  nameZh: string;',
    '  icon: string;',
    '  badgeColor: string;',
    '  description: string;',
    '}',
    '',
    'export interface Yct4Lesson {',
    '  lessonNumber: number;',
    '  lessonSlug: string;',
    '  titleVi: string;',
    '  titleZh: string;',
    '  wordCount: number;',
    '  estimatedMinutes: number;',
    '}',
    '',
    'export const YCT4_LESSONS: Yct4Lesson[] = ' + json.dumps(lessons_meta, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT4_CATEGORIES: Yct4Category[] = ' + json.dumps(CATEGORIES, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT4_WORDS: YctWord[] = ' + json.dumps(final_words, ensure_ascii=False, indent=2) + ';',
    '',
    'export function toVocabularyWord4(word: YctWord): VocabularyWord {',
    '  return {',
    '    id: word.id,',
    '    hanzi: word.hanzi,',
    '    pinyin: word.pinyin,',
    '    meaning: word.meaning,',
    '    sinoVietnamese: "",',
    '    partOfSpeech: "yct4",',
    '    hskLevel: "HSK3",',
    '    exampleSentence: {',
    '      chinese: word.example,',
    '      pinyin: word.examplePinyin,',
    '      vietnamese: word.exampleVi,',
    '    },',
    '  };',
    '}',
    '',
    'const STORAGE_KEY_YCT4 = "hanyu.yct4.progress.v1";',
    '',
    'export interface Yct4Progress {',
    '  learnedWordIds: string[];',
    '  quizzesPassed: number;',
    '  bestQuizScore: number;',
    '  xp: number;',
    '}',
    '',
    'export function getYct4Progress(): Yct4Progress {',
    '  try {',
    '    const raw = localStorage.getItem(STORAGE_KEY_YCT4);',
    '    if (!raw) {',
    '      return {',
    '        learnedWordIds: [],',
    '        quizzesPassed: 0;',
    '        bestQuizScore: 0;',
    '        xp: 0;',
    '      };',
    '    }',
    '    return JSON.parse(raw) as Yct4Progress;',
    '  } catch {',
    '    return {',
    '      learnedWordIds: [],',
    '      quizzesPassed: 0;',
    '      bestQuizScore: 0;',
    '      xp: 0;',
    '    };',
    '  }',
    '}',
    '',
    'export function saveYct4Progress(progress: Yct4Progress): void {',
    '  try {',
    '    localStorage.setItem(STORAGE_KEY_YCT4, JSON.stringify(progress));',
    '  } catch {',
    '    // ignore',
    '  }',
    '}',
    '',
    'export function toggleLearnedWord4(wordId: string): Yct4Progress {',
    '  const current = getYct4Progress();',
    '  const exists = current.learnedWordIds.includes(wordId);',
    '  const nextLearned = exists',
    '    ? current.learnedWordIds.filter((id) => id !== wordId)',
    '    : [...current.learnedWordIds, wordId];',
    '',
    '  const xpGain = exists ? 0 : 5;',
    '  const earnedXp = exists',
    '    ? 0',
    '    : awardXp(`yct:4:word:${encodeURIComponent(wordId)}`, "yct", xpGain);',
    '  const updated: Yct4Progress = {',
    '    ...current,',
    '    learnedWordIds: nextLearned,',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct4Progress(updated);',
    '  return updated;',
    '}',
    '',
    'export function recordQuizCompletion4(',
    '  score: number,',
    '  total: number',
    '): { progress: Yct4Progress; earnedXp: number } {',
    '  const current = getYct4Progress();',
    '  const reward = total > 0 ? Math.round((score / total) * 30) : 0;',
    '  const earnedXp = reward > 0 ? awardDailyXp("yct:4:quiz", "yct", reward) : 0;',
    '  const updated: Yct4Progress = {',
    '    ...current,',
    '    quizzesPassed: current.quizzesPassed + 1,',
    '    bestQuizScore: Math.max(current.bestQuizScore, score),',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct4Progress(updated);',
    '  return { progress: updated, earnedXp };',
    '}',
    '',
    '// Quiz Generator for kids',
    'export interface YctQuizQuestion {',
    '  id: string;',
    '  type: "meaning" | "pinyin" | "listen";',
    '  prompt: string;',
    '  hanzi: string;',
    '  pinyin: string;',
    '  audioText: string;',
    '  options: string[];',
    '  correctAnswer: string;',
    '  word: YctWord;',
    '}',
    '',
    'export function generateYct4Quiz(',
    '  count = 10,',
    '  filter?: { category?: Yct4CategoryId; lessonNumber?: number }',
    '): YctQuizQuestion[] {',
    '  let pool = YCT4_WORDS;',
    '  if (filter?.lessonNumber) {',
    '    pool = pool.filter((w) => w.lessonNumber === filter.lessonNumber);',
    '  } else if (filter?.category) {',
    '    pool = pool.filter((w) => w.category === filter.category);',
    '  }',
    '',
    '  const shuffled = [...pool].sort(() => Math.random() - 0.5);',
    '  const selected = shuffled.slice(0, Math.min(count, shuffled.length));',
    '',
    '  return selected.map((word, idx) => {',
    '    const types: ("meaning" | "pinyin" | "listen")[] = ["meaning", "pinyin", "listen"];',
    '    const type = types[idx % types.length];',
    '',
    '    const distractors = YCT4_WORDS.filter((w) => w.id !== word.id)',
    '      .sort(() => Math.random() - 0.5)',
    '      .slice(0, 3);',
    '',
    '    if (type === "meaning") {',
    '      const correct = word.meaning;',
    '      const options = [correct, ...distractors.map((d) => d.meaning)].sort(',
    '        () => Math.random() - 0.5',
    '      );',
    '      return {',
    '        id: `q4-${word.id}-${idx}`,',
    '        type: "meaning",',
    '        prompt: "Từ này nghĩa tiếng Việt là gì bé nhỉ?",',
    '        hanzi: word.hanzi,',
    '        pinyin: word.pinyin,',
    '        audioText: word.hanzi,',
    '        options,',
    '        correctAnswer: correct,',
    '        word,',
    '      };',
    '    } else if (type === "pinyin") {',
    '      const correct = word.pinyin;',
    '      const options = [correct, ...distractors.map((d) => d.pinyin)].sort(',
    '        () => Math.random() - 0.5',
    '      );',
    '      return {',
    '        id: `q4-${word.id}-${idx}`,',
    '        type: "pinyin",',
    '        prompt: "Cách phát âm Pinyin chuẩn của chữ này là gì?",',
    '        hanzi: word.hanzi,',
    '        pinyin: word.pinyin,',
    '        audioText: word.hanzi,',
    '        options,',
    '        correctAnswer: correct,',
    '        word,',
    '      };',
    '    } else {',
    '      const correct = word.hanzi;',
    '      const options = [correct, ...distractors.map((d) => d.hanzi)].sort(',
    '        () => Math.random() - 0.5',
    '      );',
    '      return {',
    '        id: `q4-${word.id}-${idx}`,',
    '        type: "listen",',
    '        prompt: "Nghe phát âm và chọn chữ Hán chính xác:",',
    '        hanzi: word.hanzi,',
    '        pinyin: word.pinyin,',
    '        audioText: word.hanzi,',
    '        options,',
    '        correctAnswer: correct,',
    '        word,',
    '      };',
    '    }',
    '  });',
    '}',
    '',
    'const CATEGORY_EMOJIS_4: Record<string, string> = {',
])

for c in CATEGORIES:
    ts_lines.append(f'  "{c["id"]}": "{c["icon"]}",')
ts_lines.append('};')
ts_lines.extend([
    '',
    'export const WORD_EMOJIS_4: Record<string, string> = {',
])
# Sample specific word emojis if needed
for w in final_words:
    pass

ts_lines.extend([
    '};',
    '',
    'export function getWordEmoji4(word: YctWord): string {',
    '  return WORD_EMOJIS_4[word.id] || CATEGORY_EMOJIS_4[word.category] || "✨";',
    '}',
    ''
])

output_content = '\n'.join(ts_lines)

# Fix any semicolons in object literal return
output_content = output_content.replace('quizzesPassed: 0;', 'quizzesPassed: 0,')
output_content = output_content.replace('bestQuizScore: 0;', 'bestQuizScore: 0,')
output_content = output_content.replace('xp: 0;', 'xp: 0,')

with open('src/data/yct4Data.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully wrote src/data/yct4Data.ts with {len(output_content)} bytes and {len(final_words)} words!")
