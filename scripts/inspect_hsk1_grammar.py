import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('data/hsk-source/hsk_grammar_pretty.json', 'r', encoding='utf-8') as f:
    records = json.load(f)['data']['records']

hsk1_records = [r for r in records if r.get('examLevelId') == 'HSK1']
print(f'Total HSK1 records: {len(hsk1_records)}')
for i, r in enumerate(hsk1_records):
    print(f"{i+1:02d}. [{r['grammarType']}] [{r['categoryType']}] {r['grammarDetail']} -> {r['content']}")
    cases = [c for c in r.get('cases', '').split('\r\n') if c.strip()]
    print(f"    Cases ({len(cases)}): {cases[:2]}")
