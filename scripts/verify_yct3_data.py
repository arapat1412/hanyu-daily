import sys
sys.stdout.reconfigure(encoding='utf-8')
import re
import json

with open('src/data/yct3Data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract YCT3_CATEGORIES
m_cats = re.search(r'export const YCT3_CATEGORIES: Yct3Category\[\] = (\[.*?\]);', text, re.DOTALL)
if not m_cats:
    print("ERROR: YCT3_CATEGORIES not found!")
    sys.exit(1)
cats = json.loads(m_cats.group(1))
cat_ids = set(c['id'] for c in cats)
print(f"Categories count: {len(cats)}")

# Extract YCT3_LESSONS
m_lessons = re.search(r'export const YCT3_LESSONS: Yct3Lesson\[\] = (\[.*?\]);', text, re.DOTALL)
if not m_lessons:
    print("ERROR: YCT3_LESSONS not found!")
    sys.exit(1)
lessons = json.loads(m_lessons.group(1))
print(f"Lessons count: {len(lessons)}")

# Extract YCT3_WORDS
m_words = re.search(r'export const YCT3_WORDS: YctWord\[\] = (\[.*?\]);', text, re.DOTALL)
if not m_words:
    print("ERROR: YCT3_WORDS not found!")
    sys.exit(1)
words = json.loads(m_words.group(1))
print(f"Total words: {len(words)}")

# Verification checks
errors = []
ids = set()
lesson_counts = {}

for idx, w in enumerate(words):
    wid = w.get('id')
    if not wid:
        errors.append(f"Word {idx} missing id")
    elif wid in ids:
        errors.append(f"Duplicate id: {wid}")
    ids.add(wid)

    if not w.get('hanzi'):
        errors.append(f"Word {wid} missing hanzi")
    if not w.get('pinyin'):
        errors.append(f"Word {wid} missing pinyin")
    if not w.get('meaning'):
        errors.append(f"Word {wid} missing meaning")
    if not w.get('category'):
        errors.append(f"Word {wid} missing category")
    elif w.get('category') not in cat_ids:
        errors.append(f"Word {wid} invalid category: {w.get('category')}")
    if not w.get('example'):
        errors.append(f"Word {wid} missing example")
    if not w.get('exampleVi'):
        errors.append(f"Word {wid} missing exampleVi")
    if not w.get('examplePinyin'):
        errors.append(f"Word {wid} missing examplePinyin")

    lnum = w.get('lessonNumber')
    if lnum:
        lesson_counts[lnum] = lesson_counts.get(lnum, 0) + 1

if errors:
    print(f"FAILED: Found {len(errors)} errors:")
    for e in errors[:10]:
        print(" ", e)
    sys.exit(1)
else:
    print("SUCCESS: All words verified with complete and valid fields!")
    print(f"Lesson distribution across {len(lesson_counts)} lessons:")
    for l in sorted(lesson_counts.keys()):
        print(f"  Lesson {l}: {lesson_counts[l]} words")
    print(f"Words in review/cumulative: {len(words) - sum(lesson_counts.values())}")
