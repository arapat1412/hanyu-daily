import json
import glob
import re
import sys
import pypinyin

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load lessons
with open('scripts/cached_yct6/lessons_list.json', 'r', encoding='utf-8') as f:
    lessons_list = json.load(f).get('lessons', [])

lesson_files = sorted(glob.glob('scripts/cached_yct6/lesson_*.json'))
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
    est_mins = lesson.get('estimatedMinutes', 10)
    
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
CATEGORIES_6 = [
    {
        "id": "do-an-va-do-uong",
        "nameVi": "Đồ ăn & Thức uống",
        "nameZh": "美食饮品",
        "icon": "🍜",
        "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
        "description": "Món ăn ngon, đồ uống, hương vị chua cay mặn ngọt"
    },
    {
        "id": "gia-dinh",
        "nameVi": "Gia đình & Con người",
        "nameZh": "家庭人物",
        "icon": "👨‍👩‍👧",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Gia đình, bạn bè, anh em sinh đôi, tuổi tác"
    },
    {
        "id": "nha-va-cuoc-song",
        "nameVi": "Nhà cửa & Đời sống",
        "nameZh": "居家生活",
        "icon": "🏡",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Dọn dẹp phòng ốc, đồ gia dụng, đĩa, bát, bể cá"
    },
    {
        "id": "hoc",
        "nameVi": "Học tập & Trường lớp",
        "nameZh": "学习教育",
        "icon": "📚",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "description": "Môn toán, trường học, bài học, kiến thức, rèn luyện"
    },
    {
        "id": "cong-viec",
        "nameVi": "Công việc & Nghề nghiệp",
        "nameZh": "工作职场",
        "icon": "💼",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
        "description": "Nghề nghiệp, công việc, trách nhiệm xã hội"
    },
    {
        "id": "ngay-le-va-giai-tri",
        "nameVi": "Vui chơi & Giải trí",
        "nameZh": "娱乐活动",
        "icon": "🎉",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Ca hát, biểu diễn kịch, ca nhạc, thể thao, trò chơi"
    },
    {
        "id": "giao-tiep-va-tuong-tac",
        "nameVi": "Giao tiếp & Xã giao",
        "nameZh": "人际交往",
        "icon": "🤝",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Đối thoại, thảo luận, lịch sự, trao đổi, tương tác"
    },
    {
        "id": "suc-khoe-va-co-the",
        "nameVi": "Sức khỏe & Y tế",
        "nameZh": "身体健康",
        "icon": "💪",
        "badgeColor": "bg-red-100 text-red-800 border-red-300",
        "description": "Sức khỏe, cơ thể, giữ gìn vệ sinh, thể lực"
    },
    {
        "id": "tinh-cam-va-cam-xuc",
        "nameVi": "Tình cảm & Cảm xúc",
        "nameZh": "情感心理",
        "icon": "😊",
        "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
        "description": "Cảm xúc, suy nghĩ, nhớ ra, chú ý, yêu thích"
    },
    {
        "id": "thoi-gian",
        "nameVi": "Thời gian & Khoảnh khắc",
        "nameZh": "时间日期",
        "icon": "⏰",
        "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
        "description": "Khoảnh khắc, thời gian, trước đây, sau này, tương lai"
    },
    {
        "id": "thien-nhien",
        "nameVi": "Thiên nhiên & Động vật",
        "nameZh": "自然动物",
        "icon": "🌿",
        "badgeColor": "bg-green-100 text-green-800 border-green-300",
        "description": "Mặt trăng, chim non, cá nhỏ, mèo, gấu trúc, khỉ"
    },
    {
        "id": "noi",
        "nameVi": "Địa điểm & Nơi chốn",
        "nameZh": "场所地点",
        "icon": "📍",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
        "description": "Sở thú, khoảng cách xa gần, xung quanh, phụ cận"
    },
    {
        "id": "giao-thong-va-giao-thong",
        "nameVi": "Giao thông & Đi lại",
        "nameZh": "交通出行",
        "icon": "🚗",
        "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
        "description": "Phương tiện di chuyển, chuyển nhà, xe cộ"
    },
    {
        "id": "cac-tu-chuc-nang-va-cau-hoi",
        "nameVi": "Hư từ & Cấu trúc câu",
        "nameZh": "虚词句式",
        "icon": "❓",
        "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
        "description": "Câu chữ bị, câu chữ bả, trợ từ, đại từ nghi vấn"
    },
    {
        "id": "pho-tu",
        "nameVi": "Phó từ & Trạng từ",
        "nameZh": "副词修饰",
        "icon": "⚡",
        "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
        "description": "Cực kỳ, đang, luôn luôn, đặc biệt, rất, liên tục"
    },
    {
        "id": "dem-tu",
        "nameVi": "Lượng từ & Số lượng",
        "nameZh": "计量量词",
        "icon": "🔢",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
        "description": "Số lượng, con, cái, chiếc, bộ, đĩa, bát"
    },
    {
        "id": "tinh-tu",
        "nameVi": "Tính từ miêu tả",
        "nameZh": "性质特征",
        "icon": "🎨",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
        "description": "Dũng cảm, thông minh, hoạt bát, cẩu thả, cay, ngon"
    },
    {
        "id": "thu-tu-trinh-bay",
        "nameVi": "Liên từ & Thứ tự",
        "nameZh": "连词逻辑",
        "icon": "🔗",
        "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
        "description": "Mối quan hệ nhân quả, điều kiện, chuyển ý"
    },
    {
        "id": "dong-tu",
        "nameVi": "Động từ hành động",
        "nameZh": "动作行为",
        "icon": "🏃",
        "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
        "description": "Đổi lấy, cất giấu, dọn dẹp, biểu diễn, chuyển nhà, ngủ"
    },
    {
        "id": "khac",
        "nameVi": "Từ vựng tổng hợp khác",
        "nameZh": "综合其他",
        "icon": "✨",
        "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
        "description": "Trang phục, đồ dùng, thông tin và các từ mở rộng"
    }
]

valid_cat_ids = set(c['id'] for c in CATEGORIES_6)

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
    '想起来': 'tinh-cam-va-cam-xuc'
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
        cat = MAP_CATEGORY_6.get(raw_c, raw_c)
    if not cat or cat not in valid_cat_ids:
        cat = 'khac'

    base_slug = pinyin_slug(py) if py else 'word'
    word_id = f"yct6-{base_slug}"
    if word_id in used_ids:
        suffix = pypinyin.slug(hz, separator='')
        word_id = f"yct6-{base_slug}-{suffix}"
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
    '  category: Yct6CategoryId;',
    '  lessonNumber?: number;',
    '  example: string;',
    '  examplePinyin: string;',
    '  exampleVi: string;',
    '}',
    '',
    'export type Yct6CategoryId =',
]

for idx, c in enumerate(CATEGORIES_6):
    pipe = "  |"
    ts_lines.append(f'{pipe} "{c["id"]}"')
ts_lines[-1] += ';'

ts_lines.extend([
    '',
    'export interface Yct6Category {',
    '  id: Yct6CategoryId;',
    '  nameVi: string;',
    '  nameZh: string;',
    '  icon: string;',
    '  badgeColor: string;',
    '  description: string;',
    '}',
    '',
    'export interface Yct6Lesson {',
    '  lessonNumber: number;',
    '  lessonSlug: string;',
    '  titleVi: string;',
    '  titleZh: string;',
    '  wordCount: number;',
    '  estimatedMinutes: number;',
    '}',
    '',
    'export const YCT6_LESSONS: Yct6Lesson[] = ' + json.dumps(lessons_meta, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT6_CATEGORIES: Yct6Category[] = ' + json.dumps(CATEGORIES_6, ensure_ascii=False, indent=2) + ';',
    '',
    'export const YCT6_WORDS: YctWord[] = ' + json.dumps(final_words, ensure_ascii=False, indent=2) + ';',
    '',
    'export function toVocabularyWord6(word: YctWord): VocabularyWord {',
    '  return {',
    '    id: word.id,',
    '    hanzi: word.hanzi,',
    '    pinyin: word.pinyin,',
    '    meaning: word.meaning,',
    '    sinoVietnamese: "",',
    '    partOfSpeech: "yct6",',
    '    hskLevel: "HSK3",',
    '    exampleSentence: {',
    '      chinese: word.example,',
    '      pinyin: word.examplePinyin,',
    '      vietnamese: word.exampleVi,',
    '    },',
    '  };',
    '}',
    '',
    'const STORAGE_KEY_YCT6 = "hanyu.yct6.progress.v1";',
    '',
    'export interface Yct6Progress {',
    '  learnedWordIds: string[];',
    '  quizzesPassed: number;',
    '  bestQuizScore: number;',
    '  xp: number;',
    '}',
    '',
    'export function getYct6Progress(): Yct6Progress {',
    '  try {',
    '    const raw = localStorage.getItem(STORAGE_KEY_YCT6);',
    '    if (!raw) {',
    '      return {',
    '        learnedWordIds: [],',
    '        quizzesPassed: 0,',
    '        bestQuizScore: 0,',
    '        xp: 0,',
    '      };',
    '    }',
    '    return JSON.parse(raw) as Yct6Progress;',
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
    'export function saveYct6Progress(progress: Yct6Progress): void {',
    '  try {',
    '    localStorage.setItem(STORAGE_KEY_YCT6, JSON.stringify(progress));',
    '  } catch {',
    '    // ignore',
    '  }',
    '}',
    '',
    'export function toggleLearnedWord6(wordId: string): Yct6Progress {',
    '  const current = getYct6Progress();',
    '  const exists = current.learnedWordIds.includes(wordId);',
    '  const nextLearned = exists',
    '    ? current.learnedWordIds.filter((id) => id !== wordId)',
    '    : [...current.learnedWordIds, wordId];',
    '',
    '  const xpGain = exists ? 0 : 5;',
    '  const earnedXp = exists',
    '    ? 0',
    '    : awardXp(`yct:6:word:${encodeURIComponent(wordId)}`, "yct", xpGain);',
    '  const updated: Yct6Progress = {',
    '    ...current,',
    '    learnedWordIds: nextLearned,',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct6Progress(updated);',
    '  return updated;',
    '}',
    '',
    'export function recordQuizCompletion6(',
    '  score: number,',
    '  total: number',
    '): { progress: Yct6Progress; earnedXp: number } {',
    '  const current = getYct6Progress();',
    '  const reward = total > 0 ? Math.round((score / total) * 30) : 0;',
    '  const earnedXp = reward > 0 ? awardDailyXp("yct:6:quiz", "yct", reward) : 0;',
    '  const updated: Yct6Progress = {',
    '    ...current,',
    '    quizzesPassed: current.quizzesPassed + 1,',
    '    bestQuizScore: Math.max(current.bestQuizScore, score),',
    '    xp: current.xp + earnedXp,',
    '  };',
    '  saveYct6Progress(updated);',
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
    'export function generateYct6Quiz(',
    '  count = 10,',
    '  filter?: { category?: Yct6CategoryId; lessonNumber?: number }',
    '): YctQuizQuestion[] {',
    '  let pool = YCT6_WORDS;',
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
    '    const distractors = YCT6_WORDS.filter((w) => w.id !== word.id)',
    '      .sort(() => Math.random() - 0.5)',
    '      .slice(0, 3);',
    '',
    '    if (type === "meaning") {',
    '      const correct = word.meaning;',
    '      const options = [correct, ...distractors.map((d) => d.meaning)].sort(',
    '        () => Math.random() - 0.5',
    '      );',
    '      return {',
    '        id: `q6-${word.id}-${idx}`,',
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
    '        id: `q6-${word.id}-${idx}`,',
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
    '        id: `q6-${word.id}-${idx}`,',
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
    'const CATEGORY_EMOJIS_6: Record<string, string> = {',
])

for c in CATEGORIES_6:
    ts_lines.append(f'  "{c["id"]}": "{c["icon"]}",')
ts_lines.append('};')
ts_lines.extend([
    '',
    'export const WORD_EMOJIS_6: Record<string, string> = {',
    '};',
    '',
    'export function getWordEmoji6(word: YctWord): string {',
    '  return WORD_EMOJIS_6[word.id] || CATEGORY_EMOJIS_6[word.category] || "✨";',
    '}',
    ''
])

output_content = '\n'.join(ts_lines)

with open('src/data/yct6Data.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully wrote src/data/yct6Data.ts with {len(output_content)} bytes and {len(final_words)} words!")
