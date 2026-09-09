# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
from hsk79_part2 import METADATA_2, TRANSLATIONS_2

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

missing = 0
for it in items[24:64]:
    for c in it['cases']:
        if c not in TRANSLATIONS_2:
            print(f"Missing in item {it['order']}: {c}")
            missing += 1

print(f"Items 25-64 missing translations count: {missing}")
print(f"Items in METADATA_2: {len(METADATA_2)}")
print(f"Translations in TRANSLATIONS_2: {len(TRANSLATIONS_2)}")
