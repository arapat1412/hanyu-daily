# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
from hsk79_part3 import METADATA_3, TRANSLATIONS_3

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

missing = 0
for it in items[64:96]:
    for c in it['cases']:
        if c not in TRANSLATIONS_3:
            print(f"Missing in item {it['order']}: {c}")
            missing += 1

print(f"Items 65-96 missing translations count: {missing}")
print(f"Items in METADATA_3: {len(METADATA_3)}")
print(f"Translations in TRANSLATIONS_3: {len(TRANSLATIONS_3)}")
