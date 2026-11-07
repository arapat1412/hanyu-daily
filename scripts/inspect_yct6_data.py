import glob
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

lessons = sorted(glob.glob("scripts/cached_yct6/lesson_*.json"))
print(f"Total lesson files: {len(lessons)}")

total_words = []
words_per_lesson = {}
missing_pinyin = 0
missing_meaning = 0
missing_example = 0
topic_slugs = set()
topic_names = {}

for lpath in lessons:
    with open(lpath, "r", encoding="utf-8") as f:
        data = json.load(f)
    lesson = data.get("lesson", {})
    lnum = lesson.get("lessonNumber")
    ltitle = lesson.get("titleVi")
    ltitle_zh = lesson.get("titleZh")
    words = lesson.get("words", [])
    words_per_lesson[lnum] = (ltitle, ltitle_zh, len(words))
    for w in words:
        total_words.append(w)
        if not w.get("pinyin"):
            missing_pinyin += 1
        if not (w.get("translationVi") or w.get("meaningVi")):
            missing_meaning += 1
        examples = w.get("examples", [])
        if not examples:
            missing_example += 1
        tslug = w.get("topicSlug")
        tname = w.get("topic")
        if tslug:
            topic_slugs.add(tslug)
            if tname:
                topic_names[tslug] = tname

unique_hanzi = set(w["hanzi"] for w in total_words)
print(f"Total word entries across lessons: {len(total_words)}")
print(f"Unique simplified words: {len(unique_hanzi)}")
print(f"Missing pinyin: {missing_pinyin}, Missing meaning: {missing_meaning}, Missing example: {missing_example}")
print(f"Unique topic slugs ({len(topic_slugs)}):")
for ts in sorted(topic_slugs):
    print(f"  - {ts}: {topic_names.get(ts)}")

print("\nLessons breakdown:")
for lnum, (title, title_zh, count) in sorted(words_per_lesson.items()):
    print(f"Lesson {lnum:02d}: {title_zh} ({title}) -> {count} words")

# Print first 2 sample words
print("\nSample words:")
for w in total_words[:2]:
    exs = w.get("examples", [])
    print(json.dumps({
        "hanzi": w.get("hanzi"),
        "pinyin": w.get("pinyin"),
        "translationVi": w.get("translationVi"),
        "topic": w.get("topic"),
        "topicSlug": w.get("topicSlug"),
        "examples_count": len(exs),
        "first_example": exs[0] if exs else None
    }, ensure_ascii=False, indent=2))
