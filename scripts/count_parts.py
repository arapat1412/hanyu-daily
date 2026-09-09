# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

p1 = sum(len(x['cases']) for x in items[0:24])
p2 = sum(len(x['cases']) for x in items[24:64])
p3 = sum(len(x['cases']) for x in items[64:96])
p4 = sum(len(x['cases']) for x in items[96:134])

print(f"Part 1 (Items 1-24): {p1} sentences")
print(f"Part 2 (Items 25-64): {p2} sentences")
print(f"Part 3 (Items 65-96): {p3} sentences")
print(f"Part 4 (Items 97-134): {p4} sentences")
print(f"Total: {p1+p2+p3+p4} sentences")
