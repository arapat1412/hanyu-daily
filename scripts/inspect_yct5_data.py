import glob
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

lesson_files = sorted(glob.glob('scripts/cached_yct5/lesson_*.json'))
all_words = []
cat_map = {}

for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        data = json.load(f)
    lnum = data['lesson']['lessonNumber']
    for w in data['lesson'].get('words', []):
        all_words.append((lnum, w))
        c = w.get('topicSlug') or 'khac'
        cat_map[c] = cat_map.get(c, 0) + 1

print(f"Total words: {len(all_words)}")
print("Categories found in words:")
for c, count in sorted(cat_map.items(), key=lambda x: -x[1]):
    print(f"  {c}: {count}")

# Check missing meaning, pinyin, examples
missing_meanings = []
missing_pinyin = []
missing_examples = []

for lnum, w in all_words:
    meaning = w.get('wordMeaningVi') or w.get('translationVi')
    if not meaning:
        missing_meanings.append(w['hanzi'])
    pinyin = w.get('pinyin') or w.get('wordPinyin')
    if not pinyin:
        missing_pinyin.append(w['hanzi'])
    if not w.get('examples'):
        missing_examples.append(w['hanzi'])

print(f"Missing meanings: {len(missing_meanings)}")
print(f"Missing pinyin: {len(missing_pinyin)}")
print(f"Missing examples: {len(missing_examples)}")
