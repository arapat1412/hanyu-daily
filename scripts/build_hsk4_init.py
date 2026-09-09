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
    s_temp = s_temp.replace('一块儿', '§YIKUAIR§').replace('快点儿', '§KUAIDIANR§').replace('多点儿', '§DUODIANR§')
    s_temp = s_temp.replace('画儿', '§HUAR§').replace('差一点儿', '§CHAYIDIANR§').replace('差点儿', '§CHADIANR§')

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
    joined = joined.replace('§YIKUAIR§', 'yíkuàir').replace('§KUAIDIANR§', 'kuàidiǎnr').replace('§DUODIANR§', 'duōdiǎnr')
    joined = joined.replace('§HUAR§', 'huàr').replace('§CHAYIDIANR§', 'chàyìdiǎnr').replace('§CHADIANR§', 'chàdiǎnr')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

# Categories for HSK 4
HSK4_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "ba_bei_sentences", "name": "Câu chữ 把 & Câu bị động (叫/让/被)", "icon": "⭐" },
    { "id": "compound_sentences", "name": "Hệ thống câu phức liên từ", "icon": "🔗" },
    { "id": "comparisons", "name": "Câu so sánh (不如, 跟...相比)", "icon": "⚖️" },
    { "id": "complements", "name": "Bổ ngữ khả năng & Mức độ (得/不了, 死了)", "icon": "🎯" },
    { "id": "special_patterns", "name": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "icon": "🌟" },
    { "id": "rhetorical_pivotal", "name": "Câu phản vấn & Câu kiêm ngữ (难道, 使/让)", "icon": "❓" },
    { "id": "adverbs", "name": "Phó từ thời gian, mức độ, ngữ khí", "icon": "🔥" },
    { "id": "prepositions", "name": "Giới từ thời gian, nơi chốn, căn cứ", "icon": "🛡️" },
    { "id": "pronouns_measures", "name": "Đại từ, Lượng từ & Số từ", "icon": "🔢" },
    { "id": "phrases_idioms", "name": "Cụm bốn chữ & Cụm từ cố định", "icon": "🏗️" }
]

print("HSK 4 builder init ready.")
