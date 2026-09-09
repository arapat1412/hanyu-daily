# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('public/data/hsk/hsk7-9.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

grammar = data.get('grammar', [])
print(f"Total HSK 7-9 grammar items: {len(grammar)}")

items = []
total_sentences = 0
for idx, g in enumerate(grammar):
    cases_str = g.get('cases', '')
    cases = [c.strip() for c in cases_str.replace('\r', '').split('\n') if c.strip()]
    total_sentences += len(cases)
    items.append({
        "order": idx + 1,
        "id": f"hsk7-9-g-{idx+1:03d}",
        "grammarType": g.get('grammarType', ''),
        "grammarDetail": g.get('grammarDetail', ''),
        "content": g.get('content', ''),
        "cases": cases
    })

print(f"Total HSK 7-9 example sentences: {total_sentences}")

with open('scripts/hsk79_raw_grammar.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, ensure_ascii=False, indent=2)

with open('scripts/hsk79_summary.txt', 'w', encoding='utf-8') as f:
    for it in items:
        f.write(f"[{it['order']:03d}] {it['id']} | {it['grammarType']} | {it['grammarDetail']} | {it['content']} ({len(it['cases'])} ví dụ)\n")

print("Saved scripts/hsk79_raw_grammar.json and scripts/hsk79_summary.txt")
