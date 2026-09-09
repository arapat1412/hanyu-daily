# -*- coding: utf-8 -*-
"""
Script to generate src/data/hsk79GrammarData.ts with all 134 grammar points and 596 example sentences.
Fully localized with Vietnamese titles, formulas, pedagogical explanations, tips, tone-marked Pinyin, and translations.
"""
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

from hsk79_part1a import METADATA_1A, TRANSLATIONS_1A
from hsk79_part1b import METADATA_1B, TRANSLATIONS_1B
from hsk79_part2 import METADATA_2, TRANSLATIONS_2
from hsk79_part3 import METADATA_3, TRANSLATIONS_3
from hsk79_part4 import METADATA_4, TRANSLATIONS_4

def clean_sentence_pinyin(sentence):
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('玩儿', '§WANR§').replace('早点儿', '§ZAODIANR§')
    s_temp = s_temp.replace('【', '§LBRACK§').replace('】', '§RBRACK§')

    res = []
    for char in s_temp:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '；;':
            res.append(';')
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
        elif char in '《':
            res.append('«')
        elif char in '》':
            res.append('»')
        elif char.strip():
            res.append(char)

    joined = ' '.join(res)
    joined = joined.replace('§NAR§', 'nǎr').replace('§ZHER§', 'zhèr').replace('§NAR2§', 'nàr')
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§ZAODIANR§', 'zǎodiǎnr')
    joined = joined.replace('§LBRACK§', '[').replace('§RBRACK§', ']')

    joined = re.sub(r'\s+([,.;\?!:、"»\)])', r'\1', joined)
    joined = re.sub(r'([("«\[])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

HSK79_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "cau-tu-tu-loai", "name": "Hình vị & Từ loại cao cấp", "icon": "🔬" },
    { "id": "cu-phap-4-chu", "name": "Cụm 4 chữ & Dấu hiệu diễn ngôn", "icon": "💬" },
    { "id": "cau-truc-co-dinh", "name": "Cấu trúc cố định & Khẩu ngữ", "icon": "⚡" },
    { "id": "cau-phuc-da-tang", "name": "Câu so sánh & Câu phức đa tầng", "icon": "🔗" },
    { "id": "mach-lac-van-ban", "name": "Đoạn văn & Quần câu (句群)", "icon": "📑" }
]

CATEGORY_NAMES = {
    "cau-tu-tu-loai": ("Hình vị & Từ loại cao cấp", "🔬"),
    "cu-phap-4-chu": ("Cụm 4 chữ & Dấu hiệu diễn ngôn", "💬"),
    "cau-truc-co-dinh": ("Cấu trúc cố định & Khẩu ngữ", "⚡"),
    "cau-phuc-da-tang": ("Câu so sánh & Câu phức đa tầng", "🔗"),
    "mach-lac-van-ban": ("Đoạn văn & Quần câu (句群)", "📑")
}

def main():
    all_meta = METADATA_1A + METADATA_1B + METADATA_2 + METADATA_3 + METADATA_4
    all_trans = {**TRANSLATIONS_1A, **TRANSLATIONS_1B, **TRANSLATIONS_2, **TRANSLATIONS_3, **TRANSLATIONS_4}

    with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
        raw_items = json.load(f)

    print(f"Loaded {len(raw_items)} raw items and {len(all_meta)} metadata items.")

    enriched_points = []
    total_examples = 0

    for it in raw_items:
        order = it['order']
        meta = next((m for m in all_meta if m['order'] == order), None)
        if not meta:
            raise ValueError(f"Missing metadata for order {order}: {it['title']}")

        cat_id = meta.get('category', 'cau-tu-tu-loai')
        cat_name, cat_icon = CATEGORY_NAMES.get(cat_id, ("Ngữ pháp HSK 7-9", "📚"))

        examples = []
        for c in it['cases']:
            total_examples += 1
            if c not in all_trans or not all_trans[c].strip():
                raise ValueError(f"Missing or empty translation for item {order}: {c}")
            
            py = clean_sentence_pinyin(c)
            vi = all_trans[c].strip()
            examples.append({
                "chinese": c,
                "pinyin": py,
                "vietnamese": vi
            })

        point = {
            "id": f"hsk79-g-{order:02d}",
            "order": order,
            "category": cat_id,
            "categoryName": cat_name,
            "categoryIcon": cat_icon,
            "titleVi": meta["titleVi"],
            "titleZh": it.get("content", it.get("title", "")),
            "grammarType": it.get("grammarType", ""),
            "categoryType": it.get("categoryType", ""),
            "grammarDetail": it.get("grammarDetail", ""),
            "structure": meta["structure"],
            "explanationVi": meta["explanation"],
            "tips": meta.get("tips", ""),
            "examples": examples
        }
        enriched_points.append(point)

    print(f"Enriched {len(enriched_points)} grammar points with {total_examples} examples.")

    # Write src/data/hsk79GrammarData.ts
    out_path = 'src/data/hsk79GrammarData.ts'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('export interface GrammarExample {\n')
        f.write('  chinese: string;\n')
        f.write('  pinyin: string;\n')
        f.write('  vietnamese: string;\n')
        f.write('}\n\n')

        f.write('export interface EnrichedGrammarPoint {\n')
        f.write('  id: string;\n')
        f.write('  order: number;\n')
        f.write('  category: string;\n')
        f.write('  categoryName: string;\n')
        f.write('  categoryIcon: string;\n')
        f.write('  titleVi: string;\n')
        f.write('  titleZh: string;\n')
        f.write('  grammarType: string;\n')
        f.write('  categoryType: string;\n')
        f.write('  grammarDetail: string;\n')
        f.write('  structure: string;\n')
        f.write('  explanationVi: string;\n')
        f.write('  tips?: string;\n')
        f.write('  examples: GrammarExample[];\n')
        f.write('}\n\n')

        f.write('export interface GrammarCategory {\n')
        f.write('  id: string;\n')
        f.write('  name: string;\n')
        f.write('  icon: string;\n')
        f.write('}\n\n')

        f.write('export const HSK79_GRAMMAR_CATEGORIES: GrammarCategory[] = ')
        f.write(json.dumps(HSK79_CATEGORIES, ensure_ascii=False, indent=2))
        f.write(';\n\n')

        f.write('export const HSK79_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = ')
        f.write(json.dumps(enriched_points, ensure_ascii=False, indent=2))
        f.write(';\n')

    print(f"Successfully generated {out_path}!")

if __name__ == '__main__':
    main()
