# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('public/data/hsk/hsk7-9.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("Keys:", list(data.keys()))
print("Level code:", data.get('code'))
print("Level name:", data.get('name'))
print("Words count:", len(data.get('words', [])))
print("Lessons count:", len(data.get('lessons', [])))
grammar = data.get('grammar', [])
print("Grammar count:", len(grammar))

for i in range(min(10, len(grammar))):
    g = grammar[i]
    print(f"[{i+1}] type={g.get('grammarType')} | detail={g.get('grammarDetail')} | content={g.get('content')}")
    cases = g.get('cases', '').strip().split('\n')
    print(f"    Cases ({len(cases)}):", cases[:2])
