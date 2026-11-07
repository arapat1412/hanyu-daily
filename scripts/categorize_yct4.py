import json
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/cached_yct4/level_info.json', 'r', encoding='utf-8') as f:
    topics_info = json.load(f)['level']['topics']

with open('scripts/cached_yct4/all_topic_words.json', 'r', encoding='utf-8') as f:
    topic_words = json.load(f)

lesson_files = sorted(glob.glob('scripts/cached_yct4/lesson_*.json'))
lesson_words_dict = {}
for lf in lesson_files:
    with open(lf, 'r', encoding='utf-8') as f:
        ldata = json.load(f)
    lnum = ldata['lesson']['lessonNumber']
    for w in ldata['lesson']['words']:
        lesson_words_dict[w['hanzi']] = (lnum, w)

# topic mapping fallback
FALLBACK = {
    'khac': 'thong-tin-va-phuong-tien',
    'nha-va-gia-dinh': 'nha-va-cuoc-song',
    'giai-tri-va-vui-choi-giai-tri': 'ngay-le-va-giai-tri',
    'tu-chuc-nang': 'cac-tu-chuc-nang-va-cau-hoi',
    'dong-tu': 'dong-tu-toi',
    'nghien-cuu-va-lam-viec': 'hoc',
    'ngoi-nha-va-cuoc-song-hang-ngay': 'gia-dinh'
}

merged = {}
for w in topic_words:
    hz = w['hanzi']
    cat = w.get('topicSlug')
    merged[hz] = (cat, lesson_words_dict.get(hz, (None, None))[0], w)

for hz, (lnum, lw) in lesson_words_dict.items():
    if hz not in merged:
        raw_cat = lw.get('topicSlug', 'khac')
        cat = FALLBACK.get(raw_cat, raw_cat)
        merged[hz] = (cat, lnum, lw)

cat_counts = {}
cat_examples = {}
for hz, (cat, lnum, w) in merged.items():
    cat_counts[cat] = cat_counts.get(cat, 0) + 1
    if cat not in cat_examples:
        cat_examples[cat] = []
    if len(cat_examples[cat]) < 5:
        cat_examples[cat].append(hz)

for t in topics_info:
    slug = t['topicSlug']
    cnt = cat_counts.get(slug, 0)
    exs = ", ".join(cat_examples.get(slug, []))
    print(f"{slug} | {t['topic']} | {cnt} words | ex: {exs}")
