import json
import glob
import re
import sys
import pypinyin

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load lessons
with open('scripts/cached_yct5/lessons_list.json', 'r', encoding='utf-8') as f:
    lessons_list = json.load(f).get('lessons', [])

lesson_files = sorted(glob.glob('scripts/cached_yct5/lesson_*.json'))
lessons_meta = []
all_lesson_words = []

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
        all_lesson_words.append((lnum, w))

# 20 Categories config
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

final_words = []
used_ids = set()

for lnum, raw in all_lesson_words:
    hz = raw['hanzi']
    py = clean_pinyin(raw.get('pinyin', '') or raw.get('wordPinyin', ''))
    meaning = (raw.get('wordMeaningVi') or raw.get('translationVi') or '').strip()

    if hz in WORD_CAT_OVERRIDE:
        cat = WORD_CAT_OVERRIDE[hz]
    else:
        raw_c = raw.get('topicSlug') or 'khac'
        cat = MAP_CATEGORY_5.get(raw_c, raw_c)
    if not cat or cat not in valid_cat_ids:
        cat = 'khac'

    base_slug = pinyin_slug(py) if py else 'word'
    word_id = f"yct5-{base_slug}"
    if word_id in used_ids:
        suffix = pypinyin.slug(hz, separator='')
        word_id = f"yct5-{base_slug}-{suffix}"
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
        'lessonNumber': lnum,
        'example': zh_ex,
        'examplePinyin': py_ex,
        'exampleVi': vi_ex
    }
    final_words.append(entry)

print(f"Total processed words: {len(final_words)}")

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
    '  category: Yct5CategoryId;',
    '  lessonNumber?: number;',
    '  example: string;',
    '  examplePinyin: string;',
    '  exampleVi: string;',
    '}',
    '',
    'export type Yct5CategoryId =',
]

for idx, c in enumerate(CATEGORIES_5):
    pipe = "  |"
    ts_lines.append(f'{pipe} "{c["id"]}"')
ts_lines[-1] += ';'

ts_lines.extend([
    '',
    'export interface Yct5Category {',
    '  id: Yct5CategoryId;',
    '  nameVi: string;',
    '  nameZh: string;',
    '  icon: string;',
    '  badgeColor: string;',
    '  description: string;',
    '}',
    '',
    'export interface Yct5Lesson {',
    '  lessonNumber: number;',
    '  lessonSlug: string;',
    '  titleVi: string;',
    '  titleZh: string;',
    '  wordCount: number;',
    '  estimatedMinutes: number;',
    '}',
    '',
    'export const YCT5_LESSONS: Yct5Lesson[] = ' + json.dumps(lessons_meta, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT5_CATEGORIES: Yct5Category[] = ' + json.dumps(CATEGORIES_5, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT5_WORDS: YctWord[] = ' + json.dumps(final_words, ensure_ascii=False, indent=2) + ';',
    '',
    'export function toVocabularyWord5(word: YctWord): VocabularyWord {',
    '  return {',
    '    id: word.id,',
    '    hanzi: word.hanzi,',
    '    pinyin: word.pinyin,',
    '    meaning: word.meaning,',
    '    sinoVietnamese: "",',
    '    partOfSpeech: "yct5",',
    '    hskLevel: "HSK3",',
    '    exampleSentence: {',
    '      chinese: word.example,',
    '      pinyin: word.examplePinyin,',
    '      vietnamese: word.exampleVi,',
    '    },',
    '  };',
    '}',
    '',
    'const STORAGE_KEY_YCT5 = "hanyu.yct5.progress.v1";',
    '',
    'export interface Yct5Progress {',
    '  learnedWordIds: string[];',
    '  quizzesPassed: number;',
    '  bestQuizScore: number;',
    '  xp: number;',
    '}',
    '',
    'export function getYct5Progress(): Yct5Progress {',
    '  try {',
    '    const raw = localStorage.getItem(STORAGE_KEY_YCT5);',
    '    if (!raw) {',
    '      return {',
    '        learnedWordIds: [],',
    '        quizzesPassed: 0,',
    '        bestQuizScore: 0,',
    '        xp: 0,',
    '      };',
    '    }',
    '    return JSON.parse(raw) as Yct5Progress;',
    '  } catch {',
    '    return {',
    '      learnedWordIds: [],',
    '      quizzesPassed: 0,',
    '      bestQuizScore: 0,',
    '      xp: 0,',
    '    };',
    '  }',
    '}',
    '',
    'export function saveYct5Progress(progress: Yct5Progress): void {',
    '  try {',
    '    localStorage.setItem(STORAGE_KEY_YCT5, JSON.stringify(progress));',
    '  } catch {',
    '    // ignore',
    '  }',
    '}',
    '',
    'export function toggleLearnedWord5(wordId: string): Yct5Progress {',
    '  const current = getYct5Progress();',
    '  const exists = current.learnedWordIds.includes(wordId);',
    '  const nextLearned = exists',
    '    ? current.learnedWordIds.filter((id) => id !== wordId)',
    '    : [...current.learnedWordIds, wordId];',
    '',
    '  const xpGain = exists ? 0 : 5;',
    '  const earnedXp = exists',
    '    ? 0',
    '    : awardXp(`yct:5:word:${encodeURIComponent(wordId)}`, "yct", xpGain);',
    '  const updated: Yct5Progress = {',
    '    ...current,',
    '    learnedWordIds: nextLearned,',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct5Progress(updated);',
    '  return updated;',
    '}',
    '',
    'export function recordQuizCompletion5(',
    '  score: number,',
    '  total: number',
    '): { progress: Yct5Progress; earnedXp: number } {',
    '  const current = getYct5Progress();',
    '  const reward = total > 0 ? Math.round((score / total) * 30) : 0;',
    '  const earnedXp = reward > 0 ? awardDailyXp("yct:5:quiz", "yct", reward) : 0;',
    '  const updated: Yct5Progress = {',
    '    ...current,',
    '    quizzesPassed: current.quizzesPassed + 1,',
    '    bestQuizScore: Math.max(current.bestQuizScore, score),',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct5Progress(updated);',
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
    'export function generateYct5Quiz(',
    '  count = 10,',
    '  filter?: { category?: Yct5CategoryId; lessonNumber?: number }',
    '): YctQuizQuestion[] {',
    '  let pool = YCT5_WORDS;',
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
    '    const distractors = YCT5_WORDS.filter((w) => w.id !== word.id)',
    '      .sort(() => Math.random() - 0.5)',
    '      .slice(0, 3);',
    '',
    '    if (type === "meaning") {',
    '      const correct = word.meaning;',
    '      const options = [correct, ...distractors.map((d) => d.meaning)].sort(',
    '        () => Math.random() - 0.5',
    '      );',
    '      return {',
    '        id: `q5-${word.id}-${idx}`,',
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
    '        id: `q5-${word.id}-${idx}`,',
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
    '        id: `q5-${word.id}-${idx}`,',
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
    'const CATEGORY_EMOJIS_5: Record<string, string> = {',
])

for c in CATEGORIES_5:
    ts_lines.append(f'  "{c["id"]}": "{c["icon"]}",')
ts_lines.append('};')
ts_lines.extend([
    '',
    'export const WORD_EMOJIS_5: Record<string, string> = {',
    '};',
    '',
    'export function getWordEmoji5(word: YctWord): string {',
    '  return WORD_EMOJIS_5[word.id] || CATEGORY_EMOJIS_5[word.category] || "✨";',
    '}',
    ''
])

output_content = '\n'.join(ts_lines)

with open('src/data/yct5Data.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully wrote src/data/yct5Data.ts with {len(output_content)} bytes and {len(final_words)} words!")
