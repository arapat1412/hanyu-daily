# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
from hsk79_part4 import METADATA_4, TRANSLATIONS_4

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

missing = 0
for it in items[96:134]:
    for c in it['cases']:
        if c not in TRANSLATIONS_4:
            print(f"Missing in item {it['order']}: {c}")
            missing += 1

print(f"Items 97-134 missing translations count: {missing}")
print(f"Items in METADATA_4: {len(METADATA_4)}")
print(f"Translations in TRANSLATIONS_4: {len(TRANSLATIONS_4)}")
