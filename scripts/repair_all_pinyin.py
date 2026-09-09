# -*- coding: utf-8 -*-
"""
Script to fix Pinyin formatting across all HSK levels (HSK 1 - HSK 7-9).
Fixes:
- Bracket artifacts like § L B R A C K § § R B R A C K § -> []
- Erhua tokens like § N A R § -> nǎr, § Y I D I A N R § -> yìdiǎnr
- Quotation mark spacing: "word" instead of word"word"de
- Punctuation spacing
"""
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import re
import json
from pypinyin import pinyin, Style

ERHUA_PAIRS = [
    ('早点儿', 'zǎodiǎnr'),
    ('一点儿', 'yìdiǎnr'),
    ('哪儿', 'nǎr'),
    ('这儿', 'zhèr'),
    ('那儿', 'nàr'),
    ('玩儿', 'wánr'),
    ('劲儿', 'jìnr'),
    ('头儿', 'tóur'),
    ('门儿', 'ménr'),
    ('个儿', 'gèr'),
    ('空儿', 'kòngr'),
    ('倍儿', 'bèir'),
]

def convert_to_clean_pinyin(text):
    s = text.replace('【】', ' [] ')
    s = s.replace('【', ' [ ')
    s = s.replace('】', ' ] ')
    
    erhua_tokens = {}
    counter = 0
    for ch_word, py_word in ERHUA_PAIRS:
        if ch_word in s:
            token = f"__ERHUA_{counter}__"
            erhua_tokens[token] = py_word
            s = s.replace(ch_word, f" {token} ")
            counter += 1

    res = []
    for part in s.split():
        if part in erhua_tokens:
            res.append(erhua_tokens[part])
        else:
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
    
    # Remove space before punctuation
    joined = re.sub(r'\s+([,.\?!;:»\)])', r'\1', joined)
    # Remove space after opening punctuation
    joined = re.sub(r'([«(\[])\s+', r'\1', joined)
    # Ensure space after closing punctuation if followed by a letter
    joined = re.sub(r'([,.\?!;:»\)])([A-Za-z0-9\u00C0-\u024F])', r'\1 \2', joined)
    # Ensure space before opening punctuation if preceded by a letter
    joined = re.sub(r'([A-Za-z0-9\u00C0-\u024F])([«(\[])', r'\1 \2', joined)
    
    # Handle quotes cleanly: "word"
    joined = re.sub(r'([A-Za-z0-9\u00C0-\u024F])"', r'\1 "', joined)
    joined = re.sub(r'"([A-Za-z0-9\u00C0-\u024F])', r'" \1', joined)
    parts = joined.split('"')
    if len(parts) > 1:
        fixed_parts = []
        for i, p in enumerate(parts):
            fixed_parts.append(p.strip())
        new_joined = ""
        for i, p in enumerate(fixed_parts):
            if i == 0:
                new_joined += p
            elif i % 2 == 1:
                new_joined += f' "{p}"'
            else:
                if p:
                    # check if previous ends with quote, add space if needed
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

files_to_process = [
    ('HSK 1', 'src/data/hsk1GrammarData.ts', 'HSK1_ENRICHED_GRAMMAR'),
    ('HSK 2', 'src/data/hsk2GrammarData.ts', 'HSK2_ENRICHED_GRAMMAR'),
    ('HSK 3', 'src/data/hsk3GrammarData.ts', 'HSK3_ENRICHED_GRAMMAR'),
    ('HSK 4', 'src/data/hsk4GrammarData.ts', 'HSK4_ENRICHED_GRAMMAR'),
    ('HSK 5', 'src/data/hsk5GrammarData.ts', 'HSK5_ENRICHED_GRAMMAR'),
    ('HSK 6', 'src/data/hsk6GrammarData.ts', 'HSK6_ENRICHED_GRAMMAR'),
    ('HSK 7-9', 'src/data/hsk79GrammarData.ts', 'HSK79_ENRICHED_GRAMMAR'),
]

total_repaired = 0

for level_name, file_path, const_name in files_to_process:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(rf'export const {const_name}: EnrichedGrammarPoint\[\] = (\[[\s\S]*?\]);', content)
    if not match:
        print(f"Error parsing {file_path}")
        continue

    data = json.loads(match.group(1))
    file_repaired = 0

    for pt in data:
        for ex in pt['examples']:
            ch = ex['chinese']
            old_py = ex['pinyin']
            new_py = convert_to_clean_pinyin(ch)
            if new_py != old_py:
                ex['pinyin'] = new_py
                file_repaired += 1
                total_repaired += 1

    # Replace in file content
    new_json = json.dumps(data, ensure_ascii=False, indent=2)
    start_pos = match.start(1)
    end_pos = match.end(1)
    new_content = content[:start_pos] + new_json + content[end_pos:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"[{level_name}] Repaired {file_repaired} sentences in {file_path}")

print(f"\n--- TOTAL SENTENCES REPAIRED: {total_repaired} ---")
