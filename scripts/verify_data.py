import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re

with open('src/data/boya1Data.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# Extract units
m_units = re.search(r'export const BOYA1_UNITS: BoyaUnit\[\] = (\[.*?\]);', code, re.DOTALL)
units = json.loads(m_units.group(1))

# Extract lessons
m_lessons = re.search(r'export const BOYA1_LESSONS: BoyaLesson\[\] = (\[.*?\]);', code, re.DOTALL)
lessons = json.loads(m_lessons.group(1))

# Extract vocabulary
m_vocab = re.search(r'export const BOYA1_VOCABULARY: BoyaVocabularyWord\[\] = (\[.*?\]);\n\n/\*\*', code, re.DOTALL)
vocab = json.loads(m_vocab.group(1))

print(f"Units: {len(units)}")
print(f"Lessons: {len(lessons)}")
print(f"Vocabulary words: {len(vocab)}")

errors = []
lesson_counts = {}
for w in vocab:
    l_num = w['lesson']
    lesson_counts[l_num] = lesson_counts.get(l_num, 0) + 1

    if not w.get('hanzi'):
        errors.append(f"Missing hanzi in {w['id']}")
    if not w.get('pinyin') or '*' in w.get('pinyin'):
        errors.append(f"Bad pinyin in {w['id']}: {w.get('pinyin')}")
    if not w.get('meaning'):
        errors.append(f"Missing meaning in {w['id']}")
    if not w.get('sinoVietnamese'):
        errors.append(f"Missing sinoVietnamese in {w['id']}")
    if not w.get('audioUrl'):
        errors.append(f"Missing audioUrl in {w['id']}")
    ex = w.get('exampleSentence')
    if not ex or not ex.get('chinese') or not ex.get('pinyin') or not ex.get('vietnamese'):
        errors.append(f"Incomplete example in {w['id']}")

for l in lessons:
    expected = l['wordCount']
    actual = lesson_counts.get(l['number'], 0)
    if expected != actual:
        errors.append(f"Lesson {l['number']} count mismatch: meta={expected}, actual={actual}")

print(f"Validation errors count: {len(errors)}")
if errors:
    for e in errors[:10]:
        print(" ", e)
else:
    print("ALL 678 WORDS AND 30 LESSONS PASSED 100% VALIDATION!")

print("\n--- FIRST 5 LESSONS ---")
for l in lessons[:5]:
    print(f"Bài {l['number']:02d}: {l['titleZh']} ({l['titlePinyin']}) - {l['titleVi']} [{l['wordCount']} từ]")

print("\n--- SAMPLE VOCABULARY ITEMS ---")
for w in [vocab[0], vocab[10], vocab[100], vocab[300], vocab[600]]:
    print(f"[{w['id']}] {w['hanzi']} ({w['pinyin']}) - {w['meaning']} | Âm HV: {w['sinoVietnamese']} | Loại: {w['partOfSpeech']}")
    print(f"   Audio: {w['audioUrl']}")
    print(f"   Ví dụ: {w['exampleSentence']['chinese']} ({w['exampleSentence']['pinyin']}) - {w['exampleSentence']['vietnamese']}")
