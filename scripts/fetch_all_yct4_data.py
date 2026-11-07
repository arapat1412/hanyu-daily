import urllib.request
import json
import os
import sys
import time

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('scripts/cached_yct4', exist_ok=True)
os.makedirs('scripts/cached_yct4/topics', exist_ok=True)

# 1. Fetch Level info
level_url = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-4"
print(f"Fetching level info from {level_url}...")
req = urllib.request.Request(level_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    level_data = json.loads(resp.read().decode('utf-8'))

with open('scripts/cached_yct4/level_info.json', 'w', encoding='utf-8') as f:
    json.dump(level_data, f, ensure_ascii=False, indent=2)

topics = level_data.get('level', {}).get('topics', [])
print(f"Total topics: {len(topics)}")

# 2. Fetch Lessons list
lessons_url = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-4/lessons"
print(f"Fetching lessons list from {lessons_url}...")
req = urllib.request.Request(lessons_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lessons_data = json.loads(resp.read().decode('utf-8'))

with open('scripts/cached_yct4/lessons_list.json', 'w', encoding='utf-8') as f:
    json.dump(lessons_data, f, ensure_ascii=False, indent=2)

lessons = lessons_data.get('lessons', [])
print(f"Total lessons: {len(lessons)}")

# 3. Fetch each lesson
all_lesson_words = []
for l in lessons:
    slug = l['lessonSlug']
    lnum = l['lessonNumber']
    path = f"scripts/cached_yct4/lesson_{lnum:02d}_{slug}.json"
    if not os.path.exists(path):
        url = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-4/lessons/{slug}"
        print(f"Fetching lesson {lnum}: {slug}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            time.sleep(0.15)
        except Exception as e:
            print(f"Error fetching lesson {slug}: {e}")
            continue
    else:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)

    words = data.get('lesson', {}).get('words', [])
    print(f"  Lesson {lnum} ({l.get('titleVi')}) has {len(words)} words")
    all_lesson_words.extend(words)

print(f"Total words collected from all lessons: {len(all_lesson_words)}")
unique_lesson_hanzi = set(w['hanzi'] for w in all_lesson_words)
print(f"Unique hanzi from lessons: {len(unique_lesson_hanzi)}")

# 4. Fetch each topic
all_topic_words = {}
for idx, t in enumerate(topics):
    slug = t['topicSlug']
    path = f"scripts/cached_yct4/topics/topic_{idx+1:02d}_{slug}.json"
    if not os.path.exists(path):
        url = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-4/topics/{slug}"
        print(f"[{idx+1}/{len(topics)}] Fetching topic {slug} ({t['topic']})...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            time.sleep(0.15)
        except Exception as e:
            print(f"Error fetching topic {slug}: {e}")
            continue
    else:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)

    words = data.get('topic', {}).get('words', [])
    print(f"  Topic {t['topic']} has {len(words)} words (expected: {t.get('wordCount')})")
    for w in words:
        all_topic_words[w['hanzi']] = w

print(f"Total unique words across all topics: {len(all_topic_words)}")
with open('scripts/cached_yct4/all_topic_words.json', 'w', encoding='utf-8') as f:
    json.dump(list(all_topic_words.values()), f, ensure_ascii=False, indent=2)
print("Saved scripts/cached_yct4/all_topic_words.json!")
