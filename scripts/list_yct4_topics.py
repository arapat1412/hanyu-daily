import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/level_info.json', 'r', encoding='utf-8') as f:
    info = json.load(f)

for idx, t in enumerate(info['level']['topics']):
    print(f"{idx+1}. slug: '{t['topicSlug']}' | vi: '{t['topic']}' | count: {t.get('wordCount')}")
