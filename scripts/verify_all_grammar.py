# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json, re

for lvl, file_path, exp_count in [
    ('HSK 1', 'src/data/hsk1GrammarData.ts', 70),
    ('HSK 2', 'src/data/hsk2GrammarData.ts', 78),
    ('HSK 3', 'src/data/hsk3GrammarData.ts', 96)
]:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    ids = re.findall(r'"id":\s*"(hsk\d-g-\d+)"', content)
    empty_expl = len(re.findall(r'"explanationVi":\s*""', content))
    empty_struct = len(re.findall(r'"structure":\s*""', content))
    empty_vn = len(re.findall(r'"vietnamese":\s*""', content))
    empty_py = len(re.findall(r'"pinyin":\s*""', content))
    ex_count = len(re.findall(r'"chinese":\s*"[^"]+"', content))
    
    print(f"=== {lvl} ===")
    print(f"Items: {len(ids)}/{exp_count}")
    print(f"Examples: {ex_count}")
    print(f"Empty fields: expl={empty_expl}, struct={empty_struct}, vn={empty_vn}, py={empty_py}")
    assert len(ids) == exp_count
    assert empty_expl == 0
    assert empty_struct == 0
    assert empty_vn == 0
    assert empty_py == 0

print("\nALL 3 DATASETS ARE 100% COMPLETE & VERIFIED!")
