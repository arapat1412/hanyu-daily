# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('scripts/hsk79_raw_grammar.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

def dump_part(start_idx, end_idx, filename):
    with open(filename, 'w', encoding='utf-8') as out:
        for it in items[start_idx:end_idx]:
            out.write(f"\n=== [{it['order']:03d}] {it['content']} ({len(it['cases'])}) ===\n")
            for c in it['cases']:
                out.write(f'"{c}": "",\n')

dump_part(0, 24, 'scripts/part1_sentences.txt')
dump_part(24, 64, 'scripts/part2_sentences.txt')
dump_part(64, 96, 'scripts/part3_sentences.txt')
dump_part(96, 134, 'scripts/part4_sentences.txt')
print("Dumped all 4 parts.")
