# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re

ADDITIONAL_TRANSLATIONS = {
    "现在八点二十分。": "Bây giờ là 8 giờ 20 phút.",
    "一年有十二个月。": "Một năm có 12 tháng.",
    "你一天学习几个汉字？": "Một ngày bạn học mấy chữ Hán?",
    "房间里太热了。": "Trong phòng nóng quá.",
    "这儿的菜真好吃。": "Đồ ăn ở đây thật ngon.",
    "今天天气有点儿冷。": "Thời tiết hôm nay hơi lạnh một chút.",
    "他是学生，我也是学生。": "Anh ấy là học sinh, tôi cũng là học sinh.",
    "我学习汉语，我弟弟也学习汉语。": "Tôi học tiếng Hán, em trai tôi cũng học tiếng Hán.",
    "她去超市了，我没有去。": "Cô ấy đi siêu thị rồi, tôi không đi.",
    "请大家不要说话。": "Xin mọi người đừng nói chuyện.",
    "这个电影好看吗？": "Bộ phim này có hay không?",
    "她正在学习呢1。": "Cô ấy đang học bài đấy.",
    "我是中国人，你呢2？": "Tôi là người Trung Quốc, còn bạn thì sao?",
    "A：你的手机呢3？": "A: Điện thoại của bạn đâu rồi nhỉ?",
    "B：我的手机在房间里。": "B: Điện thoại của tôi ở trong phòng.",
    "这本书多少钱？": "Quyển sách này bao nhiêu tiền?",
    "我今年十二，我哥哥十五。": "Năm nay tôi 12 tuổi, anh trai tôi 15 tuổi.",
    "这本书二十八块。": "Quyển sách này giá 28 đồng.",
    "我的房间不大。": "Căn phòng của tôi không lớn.",
    "这个菜很好吃。": "Món ăn này rất ngon.",
    "我吃了二十个饺子。": "Tôi đã ăn 20 cái sủi cảo.",
    "我想买便宜的手机。": "Tôi muốn mua điện thoại giá rẻ.",
    "桌子下边有一只小狗。": "Dưới gầm bàn có một chú cún con.",
    "我们十二点下课。": "Chúng tôi 12 giờ tan học.",
    "我妈妈在医院工作。": "Mẹ tôi làm việc ở bệnh viện.",
    "我想看一下那件衣服。": "Tôi muốn xem thử bộ quần áo kia một chút.",
    "请写一下你的名字。": "Xin vui lòng viết tên của bạn một chút.",
    "同学们都来了没有？": "Các bạn học sinh đã đến hết chưa?",
    "今天冷不冷？": "Hôm nay có lạnh không?",
    "请大家不要说话！": "Xin mọi người đừng nói chuyện!",
    "她今天生病了，不能上课。": "Hôm nay cô ấy bị ốm rồi, không thể đi học.",
    "上午去，下午去？你说。": "Đi buổi sáng hay đi buổi chiều? Bạn nói xem.",
    "星期一、星期二、星期三、星期四、星期五、星期六、星期日/星期天": "Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật"
}

# Update TRANSLATIONS in build_hsk1_grammar_full.py
from build_hsk1_grammar_full import TRANSLATIONS, clean_sentence_pinyin
TRANSLATIONS.update(ADDITIONAL_TRANSLATIONS)

with open('scripts/all_hsk1_grammar_raw.json', 'r', encoding='utf-8') as f:
    raw_records = json.load(f)

# Re-import METADATA from generate_hsk1_grammar_ts
import generate_hsk1_grammar_ts
METADATA = generate_hsk1_grammar_ts.METADATA

ALL_ENRICHED_GRAMMAR = []
missing_count = 0

for idx, raw in enumerate(raw_records):
    meta = METADATA[idx]
    cases_raw = raw['cases']
    examples = []

    for c in cases_raw:
        # Clean special markers like 呢1, 呢2
        c_clean = re.sub(r'(呢)[123]', r'\1', c)
        c_clean = re.sub(r'([上下前后里外])边', r'\1边', c_clean)

        py = clean_sentence_pinyin(c_clean)
        vi = TRANSLATIONS.get(c, "") or TRANSLATIONS.get(c_clean, "")
        if not vi:
            missing_count += 1
            print(f"Missing: {c}")
            vi = c

        examples.append({
            "chinese": c_clean,
            "pinyin": py,
            "vietnamese": vi
        })

    item_obj = {
        "id": raw["id"],
        "order": idx + 1,
        "category": meta["category"],
        "categoryName": meta["categoryName"],
        "categoryIcon": meta["categoryIcon"],
        "titleVi": meta["titleVi"],
        "titleZh": raw["content"] or raw["grammarDetail"],
        "grammarType": raw["grammarType"],
        "categoryType": raw["categoryType"],
        "grammarDetail": raw["grammarDetail"],
        "structure": meta["structure"],
        "explanationVi": meta["explanationVi"],
        "tips": meta["tips"],
        "examples": examples
    }
    ALL_ENRICHED_GRAMMAR.append(item_obj)

print(f"Generated {len(ALL_ENRICHED_GRAMMAR)} enriched grammar points. Missing translations: {missing_count}")

ts_code = f"""// src/data/hsk1GrammarData.ts
// Dữ liệu giải thích ngữ pháp HSK 1 chuẩn New HSK 3.0 (70 điểm ngữ pháp)
// Đầy đủ tiêu đề tiếng Việt, công thức cấu trúc, phân loại, giải thích chi tiết, mẹo ghi nhớ và câu ví dụ có Pinyin + Dịch nghĩa.

export interface GrammarExample {{
  chinese: string;
  pinyin: string;
  vietnamese: string;
}}

export interface EnrichedGrammarPoint {{
  id: string;
  order: number;
  category: string;
  categoryName: string;
  categoryIcon: string;
  titleVi: string;
  titleZh: string;
  grammarType: string;
  categoryType: string;
  grammarDetail: string;
  structure: string;
  explanationVi: string;
  tips?: string;
  examples: GrammarExample[];
}}

export const HSK1_GRAMMAR_CATEGORIES = [
  {{ id: 'all', name: 'Tất cả (70)', icon: '🌟' }},
  {{ id: 'verbs', name: 'Động từ & Năng nguyện', icon: '⚡' }},
  {{ id: 'special_patterns', name: 'Cấu trúc câu đặc biệt', icon: '⭐' }},
  {{ id: 'questions', name: 'Các loại câu hỏi', icon: '❓' }},
  {{ id: 'particles_aspects', name: 'Trợ từ & Thời thể', icon: '🎯' }},
  {{ id: 'adverbs', name: 'Phó từ các loại', icon: '🔥' }},
  {{ id: 'pronouns', name: 'Đại từ xưng hô & Chỉ thị', icon: '👤' }},
  {{ id: 'numbers_measures', name: 'Số từ & Lượng từ', icon: '🔢' }},
  {{ id: 'prep_conj', name: 'Giới từ & Liên từ', icon: '🔗' }},
  {{ id: 'sentence_types', name: 'Các kiểu câu cơ bản', icon: '📐' }},
  {{ id: 'phrases_elements', name: 'Cụm từ & Bổ ngữ', icon: '🧩' }},
  {{ id: 'practical_expressions', name: 'Cách nói thực tế', icon: '🕒' }},
  {{ id: 'words', name: 'Tiền tố, Hậu tố & Phương vị', icon: '📍' }}
];

export const HSK1_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = {json.dumps(ALL_ENRICHED_GRAMMAR, ensure_ascii=False, indent=2)};
"""

with open('src/data/hsk1GrammarData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("Updated src/data/hsk1GrammarData.ts successfully!")
