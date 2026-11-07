import urllib.request
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('scripts/cached_yct6', exist_ok=True)

# 1. Fetch Level info
level_url = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-6"
print(f"Fetching level info from {level_url}...")
req = urllib.request.Request(level_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    level_data = json.loads(resp.read().decode('utf-8'))

with open('scripts/cached_yct6/level_info.json', 'w', encoding='utf-8') as f:
    json.dump(level_data, f, ensure_ascii=False, indent=2)

print(f"Level name: {level_data.get('level', {}).get('name')}, wordCount: {level_data.get('level', {}).get('wordCount')}, lessonCount: {level_data.get('level', {}).get('lessonCount')}")

# 2. Fetch Lessons list
lessons_url = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-6/lessons"
print(f"Fetching lessons list from {lessons_url}...")
req = urllib.request.Request(lessons_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lessons_data = json.loads(resp.read().decode('utf-8'))

with open('scripts/cached_yct6/lessons_list.json', 'w', encoding='utf-8') as f:
    json.dump(lessons_data, f, ensure_ascii=False, indent=2)

lessons = lessons_data.get('lessons', [])
print(f"Total lessons: {len(lessons)}")

# 3. Fetch each lesson
for l in lessons:
    slug = l['lessonSlug']
    lnum = l['lessonNumber']
    path = f"scripts/cached_yct6/lesson_{lnum:02d}_{slug}.json"
    if not os.path.exists(path):
        url = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-6/lessons/{slug}"
        print(f"Fetching lesson {lnum}: {slug}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            time.sleep(0.15)
        except Exception as e:
            print(f"Error fetching lesson {lnum}: {e}")

# 4. Check topics
topics_url = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-6/topics"
print(f"Fetching topics list from {topics_url}...")
try:
    req = urllib.request.Request(topics_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        topics_data = json.loads(resp.read().decode('utf-8'))
    with open('scripts/cached_yct6/topics_list.json', 'w', encoding='utf-8') as f:
        json.dump(topics_data, f, ensure_ascii=False, indent=2)
    topics = topics_data.get('topics', [])
    print(f"Total topics: {len(topics)}")
    for t in topics:
        slug = t.get('topicSlug') or t.get('slug')
        tpath = f"scripts/cached_yct6/topic_{slug}.json"
        if not os.path.exists(tpath):
            turl = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-6/topics/{slug}"
            req = urllib.request.Request(turl, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                tdata = json.loads(resp.read().decode('utf-8'))
            with open(tpath, 'w', encoding='utf-8') as f:
                json.dump(tdata, f, ensure_ascii=False, indent=2)
            time.sleep(0.15)
except Exception as e:
    print(f"No topics or error fetching topics: {e}")

print("Done fetching YCT 6!")
