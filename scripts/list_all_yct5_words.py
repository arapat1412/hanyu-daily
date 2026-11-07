import glob
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

lesson_files = sorted(glob.glob('scripts/cached_yct5/lesson_*.json'))
all_words = []

for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        data = json.load(f)
    lnum = data['lesson']['lessonNumber']
    for w in data['lesson'].get('words', []):
        all_words.append((lnum, w['hanzi'], w.get('pinyin'), w.get('topicSlug'), w.get('wordMeaningVi') or w.get('translationVi')))

for lnum, hz, py, slug, vi in all_words:
    print(f"L{lnum:02d} | {hz:6s} | {py:15s} | {slug:30s} | {vi}")
