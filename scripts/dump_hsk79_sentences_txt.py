# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

with open('scripts/hsk79_sentences_dump.txt', 'w', encoding='utf-8') as out:
    for item in items:
        out.write(f"=== [{item['order']:03d}] {item['id']} | {item['grammarType']} | {item['grammarDetail']} | {item['content']} ===\n")
        for s in item['cases']:
            out.write(f"- {s}\n")
        out.write("\n")

print(f"Dumped {len(items)} items and {sum(len(i['cases']) for i in items)} sentences to scripts/hsk79_sentences_dump.txt")
