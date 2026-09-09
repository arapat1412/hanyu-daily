# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('public/data/hsk/hsk7-9.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

for idx, g in enumerate(raw['grammar']):
    cases_raw = g.get('cases', '')
    lines = [l.strip() for l in cases_raw.replace('\r', '').split('\n') if l.strip()]
    for i, line in enumerate(lines):
        if not line.endswith(('。', '！', '？', '”', '…', '；', '：')) and i < len(lines) - 1:
            print(f"Item [{idx+1:03d}] line #{i+1} possible broken sentence:")
            print(f"   Line 1: {line}")
            print(f"   Line 2: {lines[i+1]}")
        # also check if line contains multiple sentences joined by space
        if '。 ' in line or '！ ' in line or '？ ' in line:
            print(f"Item [{idx+1:03d}] line #{i+1} has multiple sentences separated by space:")
            print(f"   {line}")
