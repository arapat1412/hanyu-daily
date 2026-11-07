import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/lessons_list.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f).get('lessons', [])

for l in lessons:
    print(f"Lesson {l['lessonNumber']}: slug={l['lessonSlug']} | zh={l.get('titleZh')} | vi={l.get('titleVi')} | words={l.get('wordCount')}")
