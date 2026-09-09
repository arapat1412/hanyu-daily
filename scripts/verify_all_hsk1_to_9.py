# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re

levels = [
    ("HSK 1", "src/data/hsk1GrammarData.ts", "HSK1_ENRICHED_GRAMMAR"),
    ("HSK 2", "src/data/hsk2GrammarData.ts", "HSK2_ENRICHED_GRAMMAR"),
    ("HSK 3", "src/data/hsk3GrammarData.ts", "HSK3_ENRICHED_GRAMMAR"),
    ("HSK 4", "src/data/hsk4GrammarData.ts", "HSK4_ENRICHED_GRAMMAR"),
    ("HSK 5", "src/data/hsk5GrammarData.ts", "HSK5_ENRICHED_GRAMMAR"),
    ("HSK 6", "src/data/hsk6GrammarData.ts", "HSK6_ENRICHED_GRAMMAR"),
    ("HSK 7-9", "src/data/hsk79GrammarData.ts", "HSK79_ENRICHED_GRAMMAR"),
]

grand_total_points = 0
grand_total_examples = 0
has_error = False

print(f"{'Level':<10} | {'Points':<8} | {'Examples':<10} | {'Empty Fields Check'}")
print("-" * 55)

for name, path, const_name in levels:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # extract JSON array
    match = re.search(rf'export const {const_name}: EnrichedGrammarPoint\[\] = (\[[\s\S]*?\]);', content)
    if not match:
        print(f"FAILED TO PARSE {name}")
        has_error = True
        continue

    data = json.loads(match.group(1))
    points_count = len(data)
    examples_count = 0
    empty_fields = 0

    for pt in data:
        if not pt.get('titleVi', '').strip():
            empty_fields += 1
        if not pt.get('structure', '').strip():
            empty_fields += 1
        if not pt.get('explanationVi', '').strip():
            empty_fields += 1

        for ex in pt.get('examples', []):
            examples_count += 1
            if not ex.get('chinese', '').strip() or not ex.get('pinyin', '').strip() or not ex.get('vietnamese', '').strip():
                empty_fields += 1

    grand_total_points += points_count
    grand_total_examples += examples_count

    status = "OK (0 empty)" if empty_fields == 0 else f"ERR ({empty_fields} empty)"
    if empty_fields > 0:
        has_error = True

    print(f"{name:<10} | {points_count:<8} | {examples_count:<10} | {status}")

print("-" * 55)
print(f"{'TOTAL':<10} | {grand_total_points:<8} | {grand_total_examples:<10} | {'ALL CLEAN' if not has_error else 'HAS ERRORS'}")
