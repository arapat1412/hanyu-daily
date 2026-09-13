import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request
import json
import time
import os

os.makedirs('scripts/cached_yct3/topics', exist_ok=True)

with open('scripts/yct3_level_info.json', 'r', encoding='utf-8') as f:
    level_info = json.load(f)

topics = level_info.get('level', {}).get('topics', [])
print(f"Total topics: {len(topics)}")

all_topic_words = {}

for idx, t in enumerate(topics):
    slug = t['topicSlug']
    path = f'scripts/cached_yct3/topics/topic_{idx+1:02d}_{slug}.json'
    if not os.path.exists(path):
        url = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-3/topics/{slug}"
        print(f"[{idx+1}/{len(topics)}] Fetching topic {slug}...", flush=True)
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            time.sleep(0.15)
        except Exception as e:
            print(f"Error fetching topic {slug}: {e}", flush=True)
    else:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)

    words = data.get('topic', {}).get('words', [])
    print(f"  Topic {t['topic']} has {len(words)} words (expected: {t.get('wordCount')})", flush=True)
    for w in words:
        all_topic_words[w['hanzi']] = w

print(f"Total unique words across all topics: {len(all_topic_words)}")
with open('scripts/cached_yct3/all_300_words.json', 'w', encoding='utf-8') as f:
    json.dump(list(all_topic_words.values()), f, ensure_ascii=False, indent=2)
print("Saved all_300_words.json successfully!")
