# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re

def read_ts_array(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = rf'export const {var_name}(?::\s*EnrichedGrammarPoint\[\])?\s*=\s*(\[[\s\S]*?\]);\s*$'
    m = re.search(pattern, content)
    if not m:
        pattern2 = rf'export const {var_name}(?::\s*EnrichedGrammarPoint\[\])?\s*=\s*(\[[\s\S]*?\]);'
        m = re.search(pattern2, content)
    return json.loads(m.group(1))

hsk4 = read_ts_array('src/data/hsk4GrammarData.ts', 'HSK4_ENRICHED_GRAMMAR')
print(f"HSK 4 items: {len(hsk4)}")
total_examples = sum(len(x.get('examples', [])) for x in hsk4)
print(f"HSK 4 total examples: {total_examples}")

errors = 0
for item in hsk4:
    gid = item.get('id')
    if not item.get('titleVi'):
        print(f"Missing titleVi: {gid}")
        errors += 1
    if not item.get('titleZh'):
        print(f"Missing titleZh: {gid}")
        errors += 1
    if not item.get('structure'):
        print(f"Missing structure: {gid}")
        errors += 1
    if not item.get('explanationVi'):
        print(f"Missing explanationVi: {gid}")
        errors += 1
    for eg in item.get('examples', []):
        if not eg.get('chinese'):
            print(f"Missing chinese: {gid}")
            errors += 1
        if not eg.get('pinyin'):
            print(f"Missing pinyin: {gid}")
            errors += 1
        if not eg.get('vietnamese'):
            print(f"Missing vietnamese: {gid} in {eg.get('chinese')}")
            errors += 1

print(f"Validation finished. Total errors in HSK 4: {errors}")
