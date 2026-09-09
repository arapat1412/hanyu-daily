# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('public/data/hsk/hsk7-9.json', 'r', encoding='utf-8') as f:
    hsk79 = json.load(f)

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    cleaned = json.load(f)

for idx, g in enumerate(hsk79['grammar']):
    clean_cases = cleaned[idx]['cases']
    g['cases'] = '\n'.join(clean_cases)

with open('public/data/hsk/hsk7-9.json', 'w', encoding='utf-8') as f:
    json.dump(hsk79, f, ensure_ascii=False, indent=2)

print("Updated public/data/hsk/hsk7-9.json with cleaned cases!")
