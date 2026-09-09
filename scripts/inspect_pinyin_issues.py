# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re

with open('src/data/hsk79GrammarData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const HSK79_ENRICHED_GRAMMAR: EnrichedGrammarPoint\[\] = (\[[\s\S]*?\]);', content)
if not match:
    print("Could not find data")
    sys.exit(1)

data = json.loads(match.group(1))

for pt in data:
    for ex in pt['examples']:
        py = ex['pinyin']
        if '§' in py or 'BRACK' in py or 'L B R' in py:
            print(f"[{pt['order']}] BRACKET BUG: {py}")
        if 'Ø' in py or 'Øi' in py:
            print(f"[{pt['order']}] PHI BUG: {py}")
        # Check weird tokens
        if re.search(r'[A-Za-z0-9]\"[A-Za-z0-9]', py):
            print(f"[{pt['order']}] QUOTE SPACING: {py}")
