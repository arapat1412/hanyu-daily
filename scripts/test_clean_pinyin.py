# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import re
from pypinyin import pinyin, Style

ERHUA_MAP = {
    '哪儿': 'nǎr',
    '这儿': 'zhèr',
    '那儿': 'nàr',
    '一点儿': 'yìdiǎnr',
    '早点儿': 'zǎodiǎnr',
    '玩儿': 'wánr',
    '什么劲儿': 'shénme jìnr',
    '看头儿': 'kàntóur',
    '吃头儿': 'chītóur',
    '话语标记': 'huàyǔ biāojì',
}

PUNCT_MAP = {
    '，': ', ',
    '。': '. ',
    '！': '! ',
    '？': '? ',
    '；': '; ',
    '：': ': ',
    '、': ', ',
    '——': ' — ',
    '……': '...',
    '“': ' "',
    '”': '" ',
    '‘': " '",
    '’': "' ",
    '（': ' (',
    '）': ') ',
    '《': ' «',
    '》': '» ',
    '【': ' [',
    '】': '] ',
    '【】': ' [] ',
}

def convert_to_clean_pinyin(text):
    # Protect specific erhua words with temporary unique tokens that don't look like English letters or §
    # Or token-based replacement
    tokens = []
    
    # Pre-replace brackets
    s = text.replace('【】', ' [ ] ')
    s = s.replace('【', ' [ ')
    s = s.replace('】', ' ] ')
    
    # Specific erhua patterns before char split
    erhua_tokens = {}
    counter = 0
    for ch_word, py_word in [
        ('早点儿', 'zǎodiǎnr'),
        ('一点儿', 'yìdiǎnr'),
        ('哪儿', 'nǎr'),
        ('这儿', 'zhèr'),
        ('那儿', 'nàr'),
        ('玩儿', 'wánr'),
        ('劲儿', 'jìnr'),
        ('头儿', 'tóur'),
    ]:
        if ch_word in s:
            token = f"__ERHUA_{counter}__"
            erhua_tokens[token] = py_word
            s = s.replace(ch_word, f" {token} ")
            counter += 1

    # Now convert remaining Chinese characters to pinyin
    res = []
    for part in s.split():
        if part in erhua_tokens:
            res.append(erhua_tokens[part])
        else:
            # Process part character by character or with pinyin
            # Check if part has Chinese
            sub_res = []
            for char in part:
                if '\u4e00' <= char <= '\u9fff':
                    py = pinyin(char, style=Style.TONE)[0][0]
                    sub_res.append(py)
                elif char in '，,':
                    sub_res.append(',')
                elif char in '。':
                    sub_res.append('.')
                elif char in '！!':
                    sub_res.append('!')
                elif char in '？?':
                    sub_res.append('?')
                elif char in '；;':
                    sub_res.append(';')
                elif char in '：:':
                    sub_res.append(':')
                elif char in '、':
                    sub_res.append(',')
                elif char in '“”""':
                    sub_res.append('"')
                elif char in '（(':
                    sub_res.append('(')
                elif char in '）)':
                    sub_res.append(')')
                elif char in '《':
                    sub_res.append('«')
                elif char in '》':
                    sub_res.append('»')
                elif char in '—':
                    sub_res.append('—')
                elif char in '[]':
                    sub_res.append(char)
                elif char in 'Ø':
                    sub_res.append('Ø')
                elif char.strip():
                    sub_res.append(char)
            res.append(' '.join(sub_res))

    joined = ' '.join(res)
    
    # Clean up punctuation spacing
    # Remove space before punctuation: , . ! ? ; : » ) ]
    joined = re.sub(r'\s+([,.\?!;:»\)])', r'\1', joined)
    # Remove space after opening punctuation: « ( [
    joined = re.sub(r'([«(\[])\s+', r'\1', joined)
    # Ensure space after closing punctuation if followed by a letter
    joined = re.sub(r'([,.\?!;:»\)])([A-Za-z0-9\u00C0-\u024F])', r'\1 \2', joined)
    # Ensure space before opening punctuation if preceded by a letter
    joined = re.sub(r'([A-Za-z0-9\u00C0-\u024F])([«(\[])', r'\1 \2', joined)
    
    # Handle quotes cleanly: "word" -> ensure spaces around quotes if touching letters
    # Example: bǐng chéng"yǐ -> bǐng chéng "yǐ
    joined = re.sub(r'([A-Za-z0-9\u00C0-\u024F])"', r'\1 "', joined)
    joined = re.sub(r'"([A-Za-z0-9\u00C0-\u024F])', r'" \1', joined)
    # But if opening quote has space after it, remove it: " word " -> "word"
    # Actually, standard quotation: "quote text"
    # Let's fix quotes:
    # A pair of quotes " ... "
    # If quote has trailing space before word or leading space after word:
    parts = joined.split('"')
    if len(parts) > 1:
        fixed_parts = []
        for i, p in enumerate(parts):
            if i % 2 == 1: # inside quotes
                fixed_parts.append(p.strip())
            else: # outside quotes
                fixed_parts.append(p.strip())
        # Reconstruct with proper spacing
        new_joined = ""
        for i, p in enumerate(fixed_parts):
            if i == 0:
                new_joined += p
            elif i % 2 == 1:
                new_joined += f' "{p}"'
            else:
                if p:
                    new_joined += f' {p}'
        joined = new_joined.strip()

    # Normalize double brackets [ ]
    joined = re.sub(r'\[\s*\]', r'[]', joined)
    # Ensure spaces around []
    joined = re.sub(r'([A-Za-z0-9,;.\?!])(\[\])', r'\1 \2', joined)
    joined = re.sub(r'(\[\])([A-Za-z0-9])', r'\1 \2', joined)

    # Normalize spaces
    joined = re.sub(r'\s+', ' ', joined).strip()

    # Capitalize first letter
    if joined:
        joined = joined[0].upper() + joined[1:]

    return joined

test_cases = [
    "我奶奶虽然没有文化，【】做事却十分干脆，【】听了这话便找出存折，【】抱着我便径直走出家门去银行取钱。",
    "中国政府秉承“以人为本”的精神，【】根据被援助国要求和国际社会的呼吁，【】及时提供了救灾物资、救援队和医疗队，【】尽力提供现汇资金援助，【】积极参与了国际合作的重大紧急救援任务。",
    "虽然【】没有得到为国家献身的机会，但也一直做好了准备；如果到了那一天，汪昌绪绝对丝毫不会犹豫。",
    "他巴不得早点儿退休，好能到处游山玩水。",
    "你下班之后就回家不行吗？天天在外面玩儿个什么劲儿？",
    "你说到哪儿去了，我才不会对他产生任何好感！",
    "甘草i于亚欧大陆的中国北部、蒙古、俄罗斯西伯利亚地区、哈萨克斯坦、巴基斯坦等地都有分布，Øi在中国具体分布于东北、华北、西北等地。"
]

for tc in test_cases:
    print("TC:", tc)
    print("PY:", convert_to_clean_pinyin(tc))
    print()
