import json
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/all_topic_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

topic_hanzi = set(w['hanzi'] for w in topic_words)

lesson_files = sorted(glob.glob('scripts/cached_yct4/lesson_*.json'))
for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lnum = ldata['lesson']['lessonNumber']
    for w in ldata['lesson']['words']:
        if w['hanzi'] not in topic_hanzi:
            print(f"L{lnum}: {w['hanzi']} - {w.get('pinyin')} - {w.get('wordMeaningVi') or w.get('translationVi')} - topicSlug: {w.get('topicSlug')}")
