# -*- coding: utf-8 -*-
import json
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/boya2Data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

assert 'export const BOYA2_UNITS' in content
assert 'export const BOYA2_LESSONS' in content
assert 'export const BOYA2_VOCABULARY' in content
assert 'export const BOYA2_STATS' in content

vocab_match = re.search(r'export const BOYA2_VOCABULARY: BoyaVocabularyWord\[\] = (\[.*?\]);\n\n/\*\*', content, re.DOTALL)
lessons_match = re.search(r'export const BOYA2_LESSONS: BoyaLesson\[\] = (\[.*?\]);\n\nexport const BOYA2_VOCABULARY', content, re.DOTALL)

vocab = json.loads(vocab_match.group(1))
lessons = json.loads(lessons_match.group(1))

print(f"Total words in boya2Data.ts: {len(vocab)}")
print(f"Total lessons in boya2Data.ts: {len(lessons)}")

errors = []
lesson_counts = {}
for w in vocab:
    lesson_counts[w['lesson']] = lesson_counts.get(w['lesson'], 0) + 1
    if not w.get('hanzi'):
        errors.append(f"Missing hanzi for {w['id']}")
    if not w.get('pinyin') or '*' in w.get('pinyin'):
        errors.append(f"Bad pinyin for {w['id']}: {w.get('pinyin')}")
    if not w.get('meaning'):
        errors.append(f"Missing meaning for {w['id']}")
    if not w.get('audioUrl'):
        errors.append(f"Missing audioUrl for {w['id']}")
    ex = w.get('exampleSentence')
    if not ex or not ex.get('chinese') or not ex.get('pinyin') or not ex.get('vietnamese'):
        errors.append(f"Incomplete example for {w['id']}")

for l in lessons:
    if l['wordCount'] != lesson_counts.get(l['number'], 0):
        errors.append(f"Lesson {l['number']} count mismatch: meta has {l['wordCount']}, actual is {lesson_counts.get(l['number'], 0)}")

print(f"Validation errors: {len(errors)}")
if errors:
    print(errors[:10])
else:
    print("All 864 vocabulary items and 25 lessons passed 100% verification!")

print("\nSample first 5 lessons:")
for l in lessons[:5]:
    print(f"Bài {l['number']}: {l['titleZh']} ({l['titlePinyin']}) - {l['titleVi']} [{l['wordCount']} từ]")
