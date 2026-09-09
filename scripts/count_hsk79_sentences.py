# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

for it in items:
    print(f"[{it['order']:03d}] {it['id']}: {len(it['cases'])} sentences | {it['content']}")
