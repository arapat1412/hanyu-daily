# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk5_raw_grammar.json', 'r', encoding='utf-8') as f:
    hsk5 = json.load(f)

with open('scripts/hsk5_sentences_dump.txt', 'w', encoding='utf-8') as out:
    for item in hsk5:
        out.write(f"=== [{item['order']:02d}] {item['id']} | {item.get('grammarType','')} | {item.get('grammarDetail','')} | {item.get('content','')} ===\n")
        for c in item['cases']:
            out.write(f"- {c}\n")
        out.write("\n")

print("Dumped HSK5 sentences.")

with open('scripts/hsk6_raw_grammar.json', 'r', encoding='utf-8') as f:
    hsk6 = json.load(f)

with open('scripts/hsk6_sentences_dump.txt', 'w', encoding='utf-8') as out:
    for item in hsk6:
        out.write(f"=== [{item['order']:02d}] {item['id']} | {item.get('grammarType','')} | {item.get('grammarDetail','')} | {item.get('content','')} ===\n")
        for c in item['cases']:
            out.write(f"- {c}\n")
        out.write("\n")

print("Dumped HSK6 sentences.")
