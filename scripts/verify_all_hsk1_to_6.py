# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re

levels = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'hsk6']

def read_ts_array(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = rf'export const {var_name}(?::\s*EnrichedGrammarPoint\[\])?\s*=\s*(\[[\s\S]*?\]);\s*$'
    m = re.search(pattern, content)
    if not m:
        pattern2 = rf'export const {var_name}(?::\s*EnrichedGrammarPoint\[\])?\s*=\s*(\[[\s\S]*?\]);'
        m = re.search(pattern2, content)
    if not m:
        raise Exception(f"Could not find array {var_name} in {filepath}")
    return json.loads(m.group(1))

total_all_points = 0
total_all_sentences = 0
has_error = False

for lvl in levels:
    lvl_upper = lvl.upper()
    ts_file = f'src/data/{lvl}GrammarData.ts'
    var_name = f'{lvl_upper}_ENRICHED_GRAMMAR'
    items = read_ts_array(ts_file, var_name)
    
    with open(f'public/data/hsk/{lvl}.json', 'r', encoding='utf-8') as f:
        raw_data = json.load(f)
    raw_items = raw_data.get('grammar', [])
    
    num_items = len(items)
    num_raw = len(raw_items)
    num_sentences = sum(len(x.get('examples', [])) for x in items)
    total_all_points += num_items
    total_all_sentences += num_sentences

    print(f"=== {lvl_upper} Verification ===")
    print(f"Grammar points: {num_items} (Raw: {num_raw}) | Examples: {num_sentences}")

    if num_items != num_raw:
        print(f"ERROR: Count mismatch in {lvl}: enriched {num_items} vs raw {num_raw}")
        has_error = True

    # Validate each item
    for idx, item in enumerate(items):
        gid = item.get('id', '')
        v_title = item.get('titleVi', '')
        z_title = item.get('titleZh', '')
        struct = item.get('structure', '')
        cat = item.get('category', '')
        exp = item.get('explanationVi', '')
        examples = item.get('examples', [])

        if not v_title.strip():
            print(f"ERROR: Empty titleVi in {gid}")
            has_error = True
        if not z_title.strip():
            print(f"ERROR: Empty titleZh in {gid}")
            has_error = True
        if not struct.strip():
            print(f"ERROR: Empty structure in {gid}")
            has_error = True
        if not cat.strip():
            print(f"ERROR: Empty category in {gid}")
            has_error = True
        if not exp.strip():
            print(f"ERROR: Empty explanationVi in {gid}")
            has_error = True
        if not examples:
            print(f"WARNING: Zero examples in {gid}")

        for s_idx, s in enumerate(examples):
            cn = s.get('chinese', '').strip()
            py = s.get('pinyin', '').strip()
            vi = s.get('vietnamese', '').strip()
            if not cn:
                print(f"ERROR: Empty chinese in {gid} sentence #{s_idx+1}")
                has_error = True
            if not py:
                print(f"ERROR: Empty pinyin in {gid} sentence #{s_idx+1}")
                has_error = True
            if not vi:
                print(f"ERROR: Empty vietnamese in {gid} sentence #{s_idx+1}: '{cn}'")
                has_error = True

print(f"\n==========================================")
print(f"TOTAL ACROSS ALL HSK 1 - 6:")
print(f"Total Grammar Points: {total_all_points}")
print(f"Total Example Sentences: {total_all_sentences}")
if not has_error:
    print("STATUS: ALL CHECKS PASSED! 100% PERFECT COVERAGE ACROSS ALL 6 LEVELS!")
else:
    print("STATUS: ERRORS DETECTED!")
