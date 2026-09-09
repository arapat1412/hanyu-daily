import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_hsk1_grammar_raw.json', 'r', encoding='utf-8') as f:
    records = json.load(f)

for r in records:
    print(f"=== {r['id']}: {r['content']} ({r['grammarDetail'] or r['categoryType']}) ===")
    for c in r['cases']:
        print(f"  - {c}")
