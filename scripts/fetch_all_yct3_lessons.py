import urllib.request
import json
import time
import os

os.makedirs('scripts/cached_yct3', exist_ok=True)

# 1. Fetch lessons list
url_lessons = "https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-3/lessons"
req = urllib.request.Request(url_lessons, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    lessons_data = json.loads(resp.read().decode('utf-8'))

with open('scripts/cached_yct3/lessons_list.json', 'w', encoding='utf-8') as f:
    json.dump(lessons_data, f, ensure_ascii=False, indent=2)

# 2. Fetch all 11 lessons
all_lesson_words = []
lesson_items = lessons_data.get('lessons', [])
print(f"Total lessons: {len(lesson_items)}")

for l in lesson_items:
    slug = l['lessonSlug']
    path = f'scripts/cached_yct3/lesson_{l["lessonNumber"]:02d}_{slug}.json'
    if not os.path.exists(path):
        url = f"https://api.xiehanzi.com/api/v1/hanzi-curriculums/yct/levels/yct-3/lessons/{slug}"
        print(f"Fetching lesson {l['lessonNumber']}: {slug}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            time.sleep(0.2)
        except Exception as e:
            print(f"Error fetching lesson {slug}: {e}")
    else:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)

    words = data.get('lesson', {}).get('words', [])
    print(f"  Lesson {l['lessonNumber']} has {len(words)} words")
    all_lesson_words.extend(words)

print(f"Total words from 11 lessons: {len(all_lesson_words)}")
unique_lesson_hanzi = set(w['hanzi'] for w in all_lesson_words)
print(f"Unique hanzi from 11 lessons: {len(unique_lesson_hanzi)}")
