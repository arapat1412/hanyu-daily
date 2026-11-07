import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

req = urllib.request.Request('https://xiehanzi.com/thu-vien-yct/yct-4/', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

# Search for lesson links or text
matches = re.findall(r'href="([^"]*yct-4[^"]*)"', html)
print("Links containing yct-4:")
for m in sorted(set(matches)):
    print(" ", m)

# Search for any titles or lessons
lesson_mentions = re.findall(r'Bài \d+[^<]*', html, re.IGNORECASE)
print("\nLesson mentions in HTML:")
for lm in sorted(set(lesson_mentions)):
    print(" ", lm)
