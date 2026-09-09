# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def clean_sentence_pinyin(sentence):
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('玩儿', '§WANR§').replace('女孩儿', '§NVHAIR§')
    s_temp = s_temp.replace('一块儿', '§YIKUAIR§').replace('快点儿', '§KUAIDIANR§').replace('多点儿', '§DUODIANR§').replace('早点儿', '§ZAODIANR§')

    res = []
    for char in s_temp:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '？！?!':
            res.append(char)
        elif char in '“”""':
            res.append('"')
        elif char in '（(':
            res.append('(')
        elif char in '）)':
            res.append(')')
        elif char in '：:':
            res.append(':')
        elif char in '、':
            res.append('、')
        elif char in '——':
            res.append('—')
        elif char in '0123456789':
            res.append(char)
        elif char.strip():
            res.append(char)

    joined = ' '.join(res)
    joined = joined.replace('§NAR§', 'nǎr').replace('§ZHER§', 'zhèr').replace('§NAR2§', 'nàr')
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§NVHAIR§', 'nǚháir')
    joined = joined.replace('§YIKUAIR§', 'yíkuàir').replace('§KUAIDIANR§', 'kuàidiǎnr').replace('§DUODIANR§', 'duōdiǎnr').replace('§ZAODIANR§', 'zǎodiǎnr')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

# Categories for HSK 3
HSK3_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "ba_bei_sentences", "name": "Câu chữ 把 & Câu bị động 被", "icon": "⭐" },
    { "id": "complements_advanced", "name": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "icon": "🎯" },
    { "id": "compound_sentences", "name": "Câu phức & Liên từ nối", "icon": "🔗" },
    { "id": "comparisons_advanced", "name": "Câu so sánh nâng cao (跟...一样, 越...越)", "icon": "⚖️" },
    { "id": "special_patterns", "name": "Cấu trúc đặc biệt & Câu tồn hiện", "icon": "🌟" },
    { "id": "modal_verbs_separable", "name": "Động từ năng nguyện & Ly hợp", "icon": "⚡" },
    { "id": "adverbs_modalities", "name": "Phó từ các loại", "icon": "🔥" },
    { "id": "prepositions", "name": "Giới từ phương hướng & đối tượng", "icon": "🛡️" },
    { "id": "pronouns_measures", "name": "Đại từ, Lượng từ & Số từ", "icon": "🔢" },
    { "id": "word_building", "name": "Cấu tạo từ & Thành phần câu", "icon": "🏗️" }
]

print("HSK3 builder init ready.")
