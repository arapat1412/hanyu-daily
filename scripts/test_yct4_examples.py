import json
import glob
import re
import sys
import pypinyin

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/all_topic_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

lesson_files = sorted(glob.glob('scripts/cached_yct4/lesson_*.json'))
lesson_words_dict = {}
for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lnum = ldata['lesson']['lessonNumber']
    for w in ldata['lesson']['words']:
        lesson_words_dict[w['hanzi']] = (lnum, w)

merged = {}
for w in topic_words:
    hz = w['hanzi']
    merged[hz] = {
        'raw': w,
        'lessonNumber': lesson_words_dict.get(hz, (None, None))[0]
    }

for hz, (lnum, lw) in lesson_words_dict.items():
    if hz not in merged:
        merged[hz] = {
            'raw': lw,
            'lessonNumber': lnum
        }

def clean_pinyin(p):
    if not p:
        return ""
    return p.replace('*', '').strip()

def get_sentence_pinyin(zh_text):
    py_list = pypinyin.pinyin(zh_text, style=pypinyin.Style.TONE)
    res = []
    for item in py_list:
        res.append(item[0])
    s = " ".join(res)
    if s:
        s = s[0].upper() + s[1:]
    return s

def parse_best_example(raw_word):
    hz = raw_word['hanzi']
    exs = raw_word.get('examples', [])
    for ex in exs:
        if isinstance(ex, dict):
            zh = ex.get('hanzi') or ex.get('zh') or ex.get('sentence') or ''
            py = ex.get('pinyin') or ''
            vi = ex.get('meaningVi') or ex.get('vietnamese') or ex.get('vi') or ex.get('meaning') or ''
            if zh and vi:
                if not py:
                    py = get_sentence_pinyin(zh)
                return zh.strip(), py.strip(), vi.strip()

    py = clean_pinyin(raw_word.get('pinyin', ''))
    meaning = raw_word.get('wordMeaningVi') or raw_word.get('translationVi') or ''
    return hz, py, meaning

missing_ex = 0
for hz, v in merged.items():
    zh, py, vi = parse_best_example(v['raw'])
    if not zh or not vi:
        missing_ex += 1
        print(f"Word {hz} missing example: {zh} | {py} | {vi}")

print(f"Total words: {len(merged)}, Missing valid example: {missing_ex}")
