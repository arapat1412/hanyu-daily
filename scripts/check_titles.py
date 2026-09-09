import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re

with open('scripts/all_parsed_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

for l in lessons:
    raw = l['rawTopicTitle']
    m = re.match(r'^(.*?)\s*\((.*?)\)$', raw)
    if m:
        vi = m.group(1).strip().rstrip('！!？?')
        zh = m.group(2).strip().rstrip('！!？?')
    else:
        vi = raw
        zh = raw
    print(f"Bài {l['lessonNumber']}: zh='{zh}', vi='{vi}', words={l['wordCount']}")
