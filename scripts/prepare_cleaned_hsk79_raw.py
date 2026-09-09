# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json

with open('public/data/hsk/hsk7-9.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

def get_cleaned_cases(cases_str, item_order):
    text = cases_str.replace('\r', '')
    if item_order == 11:
        text = text.replace('不仅需攻克技术难题，而且投资\n巨大、耗时耗力', '不仅需攻克技术难题，而且投资巨大、耗时耗力')
    elif item_order == 13:
        text = text.replace('根据平台精准反馈的学情\n即时进行教学调整', '根据平台精准反馈的学情即时进行教学调整')
    elif item_order == 15:
        text = text.replace('毅然选\n择回乡工作。年轻人的私事', '毅然选择回乡工作。\n年轻人的私事')
        text = text.replace('我就不能不问一问了。 养护工人', '我就不能不问一问了。\n养护工人')
        text = text.replace('服务团队对重点区域进行了\n全方位的科学消杀', '服务团队对重点区域进行了全方位的科学消杀')
        text = text.replace('高速交警接警后，火速派附近警力和\n119消防车前往现场救援', '高速交警接警后，火速派附近警力和119消防车前往现场救援')
    elif item_order == 16:
        text = text.replace('通俗小说不见得不高雅，\n不见得不严肃', '通俗小说不见得不高雅，不见得不严肃')
    elif item_order == 17:
        text = text.replace('这哪里还是\n一个贫穷落后的小村庄', '这哪里还是一个贫穷落后的小村庄')

    lines = [l.strip() for l in text.split('\n') if l.strip()]
    return lines

cleaned_items = []
for idx, g in enumerate(raw['grammar']):
    order = idx + 1
    cases = get_cleaned_cases(g.get('cases', ''), order)
    cleaned_items.append({
        "order": order,
        "id": f"hsk7-9-g-{order:03d}",
        "grammarType": g.get('grammarType', ''),
        "grammarDetail": g.get('grammarDetail', ''),
        "content": g.get('content', ''),
        "cases": cases
    })

with open('scripts/hsk79_raw_grammar.json', 'w', encoding='utf-8') as f:
    json.dump(cleaned_items, f, ensure_ascii=False, indent=2)

print(f"Updated scripts/hsk79_raw_grammar.json with {len(cleaned_items)} items and {sum(len(x['cases']) for x in cleaned_items)} sentences.")

# Dump parts
def dump_part(start, end, filename):
    with open(filename, 'w', encoding='utf-8') as out:
        for it in cleaned_items[start:end]:
            out.write(f"\n=== [{it['order']:03d}] {it['content']} ({len(it['cases'])}) ===\n")
            for c in it['cases']:
                out.write(f'"{c}": "",\n')

dump_part(0, 14, 'scripts/clean_part1a_sentences.txt')
dump_part(14, 24, 'scripts/clean_part1b_sentences.txt')
dump_part(24, 64, 'scripts/clean_part2_sentences.txt')
dump_part(64, 96, 'scripts/clean_part3_sentences.txt')
dump_part(96, 134, 'scripts/clean_part4_sentences.txt')
print("Dumped all clean parts text files.")
