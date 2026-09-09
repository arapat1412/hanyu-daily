# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
from hsk79_part1a import TRANSLATIONS_1A
from hsk79_part1b import TRANSLATIONS_1B

all_trans = {**TRANSLATIONS_1A, **TRANSLATIONS_1B}

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

missing = 0
for it in items[:24]:
    for c in it['cases']:
        if c not in all_trans:
            print(f"Missing in item {it['order']}: {c}")
            missing += 1

print(f"Items 1-24 missing translations count: {missing}")
