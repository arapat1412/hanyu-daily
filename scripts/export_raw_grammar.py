import json
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('data/hsk-source/hsk_grammar_pretty.json', 'r', encoding='utf-8') as f:
    records = json.load(f)['data']['records']

hsk1_records = [r for r in records if r.get('examLevelId') == 'HSK1']

formatted = []
for i, r in enumerate(hsk1_records):
    cases = [c.strip() for c in r.get('cases', '').replace('\r\n', '\n').split('\n') if c.strip()]
    formatted.append({
        "id": f"hsk1-g-{i+1:02d}",
        "index": i + 1,
        "grammarType": r.get('grammarType', ''),
        "categoryType": r.get('categoryType', ''),
        "grammarDetail": r.get('grammarDetail', ''),
        "content": r.get('content', ''),
        "cases": cases
    })

with open('scripts/all_hsk1_grammar_raw.json', 'w', encoding='utf-8') as f:
    json.dump(formatted, f, ensure_ascii=False, indent=2)

print(f"Exported {len(formatted)} raw HSK1 grammar records to scripts/all_hsk1_grammar_raw.json")
