import json
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/level_info.json', 'r', encoding='utf-8') as f:
    level_info = json.load(f)

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

print(f"Total merged unique words: {len(merged)}")
lesson_assigned = sum(1 for v in merged.values() if v['lessonNumber'] is not None)
print(f"Words assigned to lessons: {lesson_assigned}")

# Inspect missing meanings, pinyin, or examples
missing_meanings = []
missing_pinyin = []
missing_examples = []

for hz, v in merged.items():
    raw = v['raw']
    meaning = raw.get('wordMeaningVi') or raw.get('translationVi')
    if not meaning:
        missing_meanings.append(hz)
    pinyin = raw.get('pinyin') or raw.get('wordPinyin')
    if not pinyin:
        missing_pinyin.append(hz)
    examples = raw.get('examples', [])
    if not examples:
        missing_examples.append(hz)

print(f"Missing meanings: {len(missing_meanings)}")
if missing_meanings:
    print("  ", missing_meanings)
print(f"Missing pinyin: {len(missing_pinyin)}")
if missing_pinyin:
    print("  ", missing_pinyin)
print(f"Missing examples: {len(missing_examples)}")
if missing_examples:
    print("  ", missing_examples[:20])
