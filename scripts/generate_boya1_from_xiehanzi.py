# -*- coding: utf-8 -*-
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re
import csv
from pypinyin import pinyin, Style, lazy_pinyin

# Load all parsed lessons from XieHanzi
with open('scripts/all_parsed_lessons.json', 'r', encoding='utf-8') as f:
    lessons_data = json.load(f)

# Supplementary curated examples for words lacking examples in XieHanzi
CURATED_EXAMPLES = {
    "你好": {"chinese": "你好，很高兴认识你。", "pinyin": "Nǐ hǎo, hěn gāoxìng rènshi nǐ.", "vietnamese": "Xin chào, rất vui được làm quen với bạn."},
    "就是": {"chinese": "这就是我的汉语老师。", "pinyin": "Zhè jiù shì wǒ de Hànyǔ lǎoshī.", "vietnamese": "Đây chính là thầy giáo tiếng Trung của tôi."},
    "哪儿": {"chinese": "请问，图书馆在哪儿？", "pinyin": "Qǐngwèn, túshūguǎn zài nǎr?", "vietnamese": "Xin hỏi, thư viện ở đâu?"},
    "这儿": {"chinese": "这儿的环境非常好。", "pinyin": "Zhèr de huánjìng fēicháng hǎo.", "vietnamese": "Môi trường ở đây rất tốt."},
    "那儿": {"chinese": "那儿有一家中国超市。", "pinyin": "Nàr yǒu yì jiā Zhōngguó chāoshì.", "vietnamese": "Ở đằng kia có một siêu thị Trung Quốc."},
    "室": {"chinese": "我的宿舍在302室。", "pinyin": "Wǒ de sùshè zài 302 shì.", "vietnamese": "Phòng ký túc xá của tôi ở phòng 302."},
    "毛衣": {"chinese": "这件红毛衣很暖和。", "pinyin": "Zhè jiàn hóng máoyī hěn nuǎnhuo.", "vietnamese": "Chiếc áo len đỏ này rất ấm áp."},
    "有点儿": {"chinese": "今天天气有点儿冷。", "pinyin": "Jīntiān tiānqì yǒudiǎnr lěng.", "vietnamese": "Hôm nay thời tiết hơi lạnh một chút."},
    "可": {"chinese": "这件衣服可真漂亮！", "pinyin": "Zhè jiàn yīfu kě zhēn piàoliang!", "vietnamese": "Bộ quần áo này quả thật là đẹp!"},
    "巧克力": {"chinese": "我最喜欢吃黑巧克力。", "pinyin": "Wǒ zuì xǐhuan chī hēi qiǎokèlì.", "vietnamese": "Tôi thích ăn sô-cô-la đen nhất."},
    "甜": {"chinese": "这个西瓜特别甜。", "pinyin": "Zhè ge xīguā tèbié tián.", "vietnamese": "Quả dưa hấu này đặc biệt ngọt."},
    "看起来": {"chinese": "你今天看起来很有精神。", "pinyin": "Nǐ jīntiān kàn qilai hěn yǒu jīngshen.", "vietnamese": "Hôm nay trông bạn rất có tinh thần."},
    "啦": {"chinese": "快走吧，要迟到啦！", "pinyin": "Kuài zǒu ba, yào chídào la!", "vietnamese": "Đi mau thôi, sắp muộn rồi đấy!"},
    "逛": {"chinese": "周末我们一起去逛街吧。", "pinyin": "Zhōumò wǒmen yìqǐ qù guàngjiē ba.", "vietnamese": "Cuối tuần chúng mình cùng nhau đi dạo phố nhé."},
    "安排": {"chinese": "周末你有什么特别的安排吗？", "pinyin": "Zhōumò nǐ yǒu shénme tèbié de ānpái ma?", "vietnamese": "Cuối tuần bạn có sắp xếp gì đặc biệt không?"},
    "一点儿": {"chinese": "我想喝一点儿温水。", "pinyin": "Wǒ xiǎng hē yìdiǎnr wēnshuǐ.", "vietnamese": "Tôi muốn uống một chút nước ấm."},
    "袋": {"chinese": "请给我一个塑料袋。", "pinyin": "Qǐng gěi wǒ yí ge sùliàodài.", "vietnamese": "Xin cho tôi một chiếc túi ni lông."},
    "做梦": {"chinese": "昨天晚上我做了一个好梦。", "pinyin": "Zuótiān wǎnshang wǒ zuò le yí ge hǎo mèng.", "vietnamese": "Tối hôm qua tôi đã có một giấc mơ đẹp."},
    "死": {"chinese": "今天跑了五公里，累死我了。", "pinyin": "Jīntiān pǎo le wǔ gōnglǐ, lèi sǐ wǒ le.", "vietnamese": "Hôm nay chạy 5 cây số, mệt chết tôi rồi."},
    "疯": {"chinese": "晚会上大家都玩疯了。", "pinyin": "Wǎnhuì shang dàjiā dōu wán fēng le.", "vietnamese": "Ở buổi dạ hội mọi người đều chơi thỏa thích."},
    "伞": {"chinese": "外面下雨了，记得带雨伞。", "pinyin": "Wàimiàn xià yǔ le, jìde dài yǔsǎn.", "vietnamese": "Bên ngoài đang mưa, nhớ mang theo ô dù."},
    "堵": {"chinese": "下班时间路上堵车很严重。", "pinyin": "Xiàbān shíjiān lùshang dǔchē hěn yánzhòng.", "vietnamese": "Giờ tan tầm trên đường tắc xe rất nghiêm trọng."},
    "葡萄酒": {"chinese": "法国的红葡萄酒非常有名。", "pinyin": "Fǎguó de hóng pútaojiǔ fēicháng yǒumíng.", "vietnamese": "Rượu vang đỏ của Pháp rất nổi tiếng."},
    "新鲜": {"chinese": "超市里的蔬菜都很新鲜。", "pinyin": "Chāoshì lǐ de shūcài dōu hěn xīnxiān.", "vietnamese": "Rau trong siêu thị đều rất tươi ngon."},
    "汗": {"chinese": "打完球后他出了一身汗。", "pinyin": "Dǎ wán qiú hòu tā chū le yì shēn hàn.", "vietnamese": "Chơi bóng xong cậu ấy ra một thân mồ hôi."},
    "决定": {"chinese": "我们决定明天早上八点出发。", "pinyin": "Wǒmen juédìng míngtiān zǎoshang bā diǎn chūfā.", "vietnamese": "Chúng tôi quyết định sáng mai tám giờ xuất phát."},
    "圣诞节": {"chinese": "圣诞节快乐！", "pinyin": "Shèngdànjié kuàilè!", "vietnamese": "Chúc mừng Giáng sinh!"},
    "待": {"chinese": "暑假我打算在家里待几天。", "pinyin": "Shǔjià wǒ dǎsuàn zài jiā lǐ dāi jǐ tiān.", "vietnamese": "Kỳ nghỉ hè tôi dự định ở nhà vài ngày."},
    "抓紧": {"chinese": "快考试了，我们要抓紧时间复习。", "pinyin": "Kuài kǎoshì le, wǒmen yào zhuājǐn shíjiān fùxí.", "vietnamese": "Sắp thi rồi, chúng ta phải tranh thủ thời gian ôn tập."},
    "趟": {"chinese": "下午我得去一趟银行。", "pinyin": "Xiàwǔ wǒ děi qù yí tàng yínháng.", "vietnamese": "Chiều nay tôi phải đi một chuyến ngân hàng."},
    "解决": {"chinese": "大家一起想办法解决这个问题。", "pinyin": "Dàjiā yìqǐ xiǎng bànfǎ jiějué zhè ge wèntí.", "vietnamese": "Mọi người cùng nghĩ cách giải quyết vấn đề này."},
    "收拾": {"chinese": "离开前请把房间收拾干净。", "pinyin": "Líkāi qián qǐng bǎ fángjiān shōushi gānjìng.", "vietnamese": "Trước khi rời đi xin hãy dọn dẹp phòng sạch sẽ."},
    "民歌": {"chinese": "奶奶特别喜欢听中国民歌。", "pinyin": "Nǎinai tèbié xǐhuan tīng Zhōngguó míngē.", "vietnamese": "Bà nội đặc biệt thích nghe dân ca Trung Quốc."},
    "面子": {"chinese": "中国人非常重视面子。", "pinyin": "Zhōngguó rén fēicháng zhòngshì miànzi.", "vietnamese": "Người Trung Quốc rất coi trọng thể diện."}
}

# Clean pinyin helper
def clean_pinyin(raw_pinyin):
    if not raw_pinyin:
        return ""
    # XieHanzi uses * between syllables, e.g. "nǐ*hǎo", "liú*xué*shēng"
    # But for "你好", clean is "nǐ hǎo" if phrase or "nǐhǎo"
    # Let's replace '*' with '' if there's already space, or check:
    return raw_pinyin.replace('*', '')

def sentence_to_pinyin(text):
    # Convert Chinese sentence to formatted tone-marked pinyin
    res = []
    for char in text:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '？！?!':
            res.append(char)
        elif char.strip():
            res.append(char)
    s = ' '.join(res)
    s = re.sub(r'\s+([,.\?!])', r'\1', s)
    if s:
        s = s[0].upper() + s[1:]
    return s

def map_part_of_speech(w):
    wt = (w.get('wordType') or '').strip()
    wc = w.get('wordClasses') or []

    vi_map = {
        'noun': 'Danh từ',
        'verb': 'Động từ',
        'adjective': 'Tính từ',
        'adj': 'Tính từ',
        'pronoun': 'Đại từ',
        'adverb': 'Phó từ',
        'adv': 'Phó từ',
        'particle': 'Trợ từ',
        'preposition': 'Giới từ',
        'prep': 'Giới từ',
        'conjunction': 'Liên từ',
        'conj': 'Liên từ',
        'numeral': 'Số từ',
        'num': 'Số từ',
        'measure': 'Lượng từ',
        'classifier': 'Lượng từ',
        'interjection': 'Thán từ',
        'idiom': 'Thành ngữ',
        'phrase': 'Cụm từ',
        'locality': 'Từ chỉ phương vị',
        'onomatopoeia': 'Từ tượng thanh',
        'auxiliary': 'Trợ động từ',
        'proper-noun': 'Danh từ riêng'
    }

    wt_lower = wt.lower()
    for vn_k in ['danh từ', 'động từ', 'tính từ', 'đại từ', 'phó từ', 'trợ từ', 'thán từ', 'lượng từ', 'liên từ', 'giới từ', 'số từ', 'thành ngữ', 'cụm từ', 'trạng từ']:
        if vn_k in wt_lower:
            parts = re.split(r'[/,]', wt)
            cleaned_parts = [p.strip().capitalize() for p in parts if p.strip()]
            return ' / '.join(cleaned_parts)

    if wc:
        mapped = [vi_map.get(c, c.capitalize()) for c in wc]
        if mapped:
            return ' / '.join(mapped)

    if wt_lower in vi_map:
        return vi_map[wt_lower]

    return 'Từ vựng'

# 6 Units Definition
UNITS = [
    {
        "unit": 1,
        "title": "Làm quen – Giới thiệu bản thân",
        "titleZh": "结识与自我介绍",
        "description": "Các bài học nhập môn giúp làm quen, chào hỏi, giới thiệu quốc tịch, trường lớp và phương vị cơ bản.",
        "lessonRange": "Bài 1 – 5",
        "lessons": [1, 2, 3, 4, 5]
    },
    {
        "unit": 2,
        "title": "Thời gian – Sinh hoạt hằng ngày",
        "titleZh": "时间与日常生活",
        "description": "Cách nói giờ giấc, lịch trình học tập, số điện thoại, giá cả khi mua sắm và giới thiệu gia đình.",
        "lessonRange": "Bài 6 – 10",
        "lessons": [6, 7, 8, 9, 10]
    },
    {
        "unit": 3,
        "title": "Thời tiết – Hoạt động – Sở thích",
        "titleZh": "天气、活动与爱好",
        "description": "Miêu tả các mùa và thời tiết, hành động đang tiếp diễn, hỏi đường đi, màu sắc trang phục và ngày sinh nhật.",
        "lessonRange": "Bài 11 – 15",
        "lessons": [11, 12, 13, 14, 15]
    },
    {
        "unit": 4,
        "title": "Cuộc sống hằng ngày & Giao tiếp mở rộng",
        "titleZh": "日常生活与交际",
        "description": "Lên kế hoạch cuối tuần, văn hóa đến thăm nhà làm khách, thói quen sinh hoạt và thăm người ốm.",
        "lessonRange": "Bài 16 – 20",
        "lessons": [16, 17, 18, 19, 20]
    },
    {
        "unit": 5,
        "title": "Các tình huống sinh hoạt đa dạng",
        "titleZh": "丰富的生活情景",
        "description": "Tiệc tùng ăn uống, cảm cúm đi khám bệnh, thời lượng học tập, sắp xếp công việc và rèn luyện thân thể.",
        "lessonRange": "Bài 21 – 25",
        "lessons": [21, 22, 23, 24, 25]
    },
    {
        "unit": 6,
        "title": "Giao tiếp trong học tập & Đời sống thực tế",
        "titleZh": "学习与实际生活",
        "description": "Chuẩn bị thi cử, kế hoạch nghỉ hè về quê, đánh giá kết quả học tập, đặt vé du lịch và tham gia dạ hội liên hoan.",
        "lessonRange": "Bài 26 – 30",
        "lessons": [26, 27, 28, 29, 30]
    }
]

# Process Lessons Meta
LESSONS_META = []
ALL_VOCABULARY = []
CSV_ROWS = []

global_word_index = 0

for lesson_data in lessons_data:
    les_num = lesson_data['lessonNumber']
    unit_num = (les_num - 1) // 5 + 1
    raw_title = lesson_data['rawTopicTitle']

    # Parse title
    if les_num == 17:
        vi_title = "Làm khách (Phần 1)"
        zh_title = "做客（一）"
        py_title = "Zuòkè (yī)"
    elif les_num == 18:
        vi_title = "Làm khách (Phần 2)"
        zh_title = "做客（二）"
        py_title = "Zuòkè (èr)"
    else:
        m = re.match(r'^(.*?)\s*\((.*?)\)$', raw_title)
        if m:
            vi_title = m.group(1).strip().rstrip('！!？?')
            zh_title = m.group(2).strip().rstrip('！!？?')
        else:
            vi_title = raw_title
            zh_title = raw_title
        py_title = sentence_to_pinyin(zh_title).replace('.', '')

    # Specific clean pinyin for titles
    TITLES_PY = {
        1: "Nǐ hǎo",
        2: "Nǐ shì nǎ guó rén",
        3: "Zhè shì nǐ de shū ma",
        4: "Túshūguǎn zài nǎr",
        5: "Qīnghuá Dàxué zài nǎr",
        6: "Xiànzài jǐ diǎn",
        7: "Míngtiān nǐ yǒu kè ma",
        8: "Nǐ de diànhuà hàomǎ shì duōshao",
        9: "Duōshao qián yì běn",
        10: "Nǐ jiā yǒu jǐ kǒu rén",
        11: "Běijīng de dōngtiān bǐjiào lěng",
        12: "Zài gànshénme ne",
        13: "Wǒ dǎsuàn qù shāngdiàn mǎi dōngxi",
        14: "Nǐ xǐhuan shénme yánsè de",
        15: "Míngtiān shì wǒ péngyou de shēngrì",
        16: "Zhōumò nǐ gànshénme",
        17: "Zuòkè (yī)",
        18: "Zuòkè (èr)",
        19: "Zǎo shuì zǎo qǐ bǐjiào hǎo a",
        20: "Kàn bìngrén",
        21: "Zhōngguó péngyou tài rèqíng le",
        22: "Tā gǎnmào le",
        23: "Nǐ xué le duō cháng shíjiān Hànyǔ",
        24: "Míngtiān jiàn",
        25: "Nǐ děi duō duànliàn duànliàn le",
        26: "Kuài kǎoshì le",
        27: "Bàba hé māma ràng wǒ huíjiā",
        28: "Kǎo de zěnmeyàng",
        29: "Nǐ shénme shíhou qù lǚxíng",
        30: "Wǒ yào cānjiā liánhuānhuì"
    }
    if les_num in TITLES_PY:
        py_title = TITLES_PY[les_num]

    words = lesson_data['words']
    word_count = len(words)

    LESSONS_META.append({
        "number": les_num,
        "unit": unit_num,
        "titleZh": zh_title,
        "titlePinyin": py_title,
        "titleVi": vi_title,
        "wordCount": word_count
    })

    unit_info = UNITS[unit_num - 1]

    for w_idx, w in enumerate(words):
        global_word_index += 1
        word_id = f"boya1-{les_num}-{w_idx + 1}"
        hanzi = w.get('hanzi', '').strip()
        raw_pinyin = w.get('pinyin', '').strip()
        pinyin_val = clean_pinyin(raw_pinyin)
        
        # Meaning
        meaning_val = (w.get('translationVi') or w.get('wordMeaningVi') or '').strip()
        # Clean meaning if it has uppercase first
        if meaning_val:
            # lower first letter unless proper noun
            if not hanzi[0].isupper() and w.get('wordType') != 'proper-noun':
                meaning_val = meaning_val[0].lower() + meaning_val[1:]

        # Hanviet
        hanviet_val = (w.get('hanviet') or '').strip()

        # Part of speech
        pos_val = map_part_of_speech(w)

        # Audio URL
        audio_url = None
        if w.get('audios') and len(w['audios']) > 0:
            audio_url = w['audios'][0]
        else:
            audio_url = f"https://static.xiehanzi.com/word_audios/{hanzi}.mp3"

        # Example Sentence
        example_obj = None
        if hanzi in CURATED_EXAMPLES:
            example_obj = CURATED_EXAMPLES[hanzi]
        elif w.get('examples') and len(w['examples']) > 0:
            for ex in w['examples']:
                zh_ex = (ex.get('hanzi') or ex.get('zh') or ex.get('sentence') or '').strip()
                vi_ex = (ex.get('vietnamese') or ex.get('meaningVi') or ex.get('vi') or ex.get('meaning') or '').strip()
                py_ex = (ex.get('pinyin') or '').strip()

                if zh_ex and vi_ex and vi_ex != 'undefined':
                    if not py_ex:
                        py_ex = sentence_to_pinyin(zh_ex)
                    example_obj = {
                        "chinese": zh_ex,
                        "pinyin": py_ex,
                        "vietnamese": vi_ex
                    }
                    break

        # Fallback example if still None
        if not example_obj:
            example_obj = {
                "chinese": f"{hanzi}。",
                "pinyin": f"{pinyin_val}.",
                "vietnamese": meaning_val
            }

        word_entry = {
            "id": word_id,
            "lesson": les_num,
            "lessonTitle": f"Bài {les_num}: {zh_title} ({vi_title})",
            "unit": unit_num,
            "unitTitle": f"Đơn vị {unit_num}: {unit_info['title']}",
            "hanzi": hanzi,
            "pinyin": pinyin_val,
            "sinoVietnamese": hanviet_val,
            "meaning": meaning_val,
            "partOfSpeech": pos_val,
            "hskLevel": "boya1",
            "audioUrl": audio_url,
            "exampleSentence": example_obj
        }

        ALL_VOCABULARY.append(word_entry)

        CSV_ROWS.append({
            "STT": global_word_index,
            "Bài học": f"Bài {les_num}",
            "Chữ Hán": hanzi,
            "Phiên âm Pinyin": pinyin_val,
            "Từ loại": pos_val,
            "Âm Hán Việt": hanviet_val,
            "Nghĩa tiếng Việt": meaning_val,
            "Ví dụ tiếng Trung": example_obj["chinese"],
            "Phiên âm ví dụ": example_obj["pinyin"],
            "Dịch ví dụ": example_obj["vietnamese"],
            "Audio URL": audio_url
        })

print(f"Processed {len(LESSONS_META)} lessons, {len(ALL_VOCABULARY)} words.")

# 1. Write src/data/boya1Data.ts
ts_content = f"""// src/data/boya1Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 1 (30 bài học, 6 đơn vị)
// Thu thập chuẩn xác từ Thư viện Boya Chinese (XieHanzi) - Tổng cộng {len(ALL_VOCABULARY)} từ vựng kèm Audio, Ví dụ & Âm Hán Việt.

import type {{ VocabularyWord }} from '../types';

export interface BoyaUnit {{
  unit: number;
  title: string;
  titleZh: string;
  description: string;
  lessonRange: string;
  lessons: number[];
}}

export interface BoyaLesson {{
  number: number;
  unit: number;
  titleZh: string;
  titlePinyin: string;
  titleVi: string;
  wordCount: number;
}}

export interface BoyaVocabularyWord extends VocabularyWord {{
  lesson: number;
  lessonTitle: string;
  unitTitle: string;
  exampleSentence?: {{
    chinese: string;
    pinyin: string;
    vietnamese: string;
  }};
}}

export const BOYA1_UNITS: BoyaUnit[] = {json.dumps(UNITS, ensure_ascii=False, indent=2)};

export const BOYA1_LESSONS: BoyaLesson[] = {json.dumps(LESSONS_META, ensure_ascii=False, indent=2)};

export const BOYA1_VOCABULARY: BoyaVocabularyWord[] = {json.dumps(ALL_VOCABULARY, ensure_ascii=False, indent=2)};

/**
 * Lấy danh sách từ vựng theo số thứ tự bài học (1-30)
 */
export function getBoyaWordsByLesson(lessonNum: number): BoyaVocabularyWord[] {{
  return BOYA1_VOCABULARY.filter(w => w.lesson === lessonNum);
}}

/**
 * Lấy danh sách từ vựng theo Đơn vị (1-6)
 */
export function getBoyaWordsByUnit(unitNum: number): BoyaVocabularyWord[] {{
  return BOYA1_VOCABULARY.filter(w => w.unit === unitNum);
}}

/**
 * Thống kê từ vựng Boya 1
 */
export const BOYA1_STATS = {{
  totalWords: {len(ALL_VOCABULARY)},
  totalLessons: {len(LESSONS_META)},
  totalUnits: {len(UNITS)}
}};
"""

with open('src/data/boya1Data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
print("Updated src/data/boya1Data.ts successfully!")

# 2. Write data/boya1_vocab.csv
csv_path = 'data/boya1_vocab.csv'
fieldnames = ["STT", "Bài học", "Chữ Hán", "Phiên âm Pinyin", "Từ loại", "Âm Hán Việt", "Nghĩa tiếng Việt", "Ví dụ tiếng Trung", "Phiên âm ví dụ", "Dịch ví dụ", "Audio URL"]
with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(CSV_ROWS)
print(f"Updated {csv_path} successfully!")
