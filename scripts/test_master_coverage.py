# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

from hsk79_part1a import METADATA_1A, TRANSLATIONS_1A
from hsk79_part1b import METADATA_1B, TRANSLATIONS_1B
from hsk79_part2 import METADATA_2, TRANSLATIONS_2
from hsk79_part3 import METADATA_3, TRANSLATIONS_3
from hsk79_part4 import METADATA_4, TRANSLATIONS_4

all_meta = METADATA_1A + METADATA_1B + METADATA_2 + METADATA_3 + METADATA_4
all_trans = {**TRANSLATIONS_1A, **TRANSLATIONS_1B, **TRANSLATIONS_2, **TRANSLATIONS_3, **TRANSLATIONS_4}

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

print(f"Total raw items: {len(items)}")
print(f"Total metadata items: {len(all_meta)}")
print(f"Total translations in dict: {len(all_trans)}")

missing_items = 0
missing_sentences = 0
total_sentences = 0

for it in items:
    order = it['order']
    meta = next((m for m in all_meta if m['order'] == order), None)
    if not meta:
        print(f"Missing metadata for order {order}: {it['title']}")
        missing_items += 1
    for c in it['cases']:
        total_sentences += 1
        if c not in all_trans:
            print(f"Missing translation in [{order}] {it['title']}: {c}")
            missing_sentences += 1
        elif not all_trans[c].strip():
            print(f"Empty translation in [{order}] {it['title']}: {c}")
            missing_sentences += 1

print("--- SUMMARY ---")
print(f"Total sentences checked: {total_sentences}")
print(f"Missing items: {missing_items}")
print(f"Missing/empty sentences: {missing_sentences}")
