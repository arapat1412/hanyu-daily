# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

for lvl in ['hsk5', 'hsk6']:
    with open(f'scripts/{lvl}_raw_grammar.json', 'r', encoding='utf-8') as f:
        items = json.load(f)
    all_sents = []
    for item in items:
        for c in item['cases']:
            all_sents.append((item['order'], item['id'], c))
    print(f"Total raw sentence entries in {lvl}: {len(all_sents)}")
    with open(f'scripts/{lvl}_all_sentences.json', 'w', encoding='utf-8') as f:
        json.dump(all_sents, f, ensure_ascii=False, indent=2)
