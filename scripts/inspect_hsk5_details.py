# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk5_raw_grammar.json', 'r', encoding='utf-8') as f:
    hsk5 = json.load(f)

print(f"Total HSK5 items: {len(hsk5)}")
total_cases_hsk5 = sum(len(x['cases']) for x in hsk5)
print(f"Total HSK5 sentences: {total_cases_hsk5}")

with open('scripts/hsk6_raw_grammar.json', 'r', encoding='utf-8') as f:
    hsk6 = json.load(f)

print(f"Total HSK6 items: {len(hsk6)}")
total_cases_hsk6 = sum(len(x['cases']) for x in hsk6)
print(f"Total HSK6 sentences: {total_cases_hsk6}")

print("\nFirst 3 HSK5 items:")
for i in range(3):
    print(json.dumps(hsk5[i], ensure_ascii=False, indent=2))
