import os
import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request
import re
import json
import time

TOPICS_LIST_URL = 'https://xiehanzi.com/thu-vien-boya/boya-elementary-2/'
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

cache_dir = 'scripts/cached_boya2_topics'
os.makedirs(cache_dir, exist_ok=True)

index_cache_path = os.path.join(cache_dir, 'index.html')
if not os.path.exists(index_cache_path):
    print("Fetching index page...")
    req = urllib.request.Request(TOPICS_LIST_URL, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        index_html = resp.read().decode('utf-8')
    with open(index_cache_path, 'w', encoding='utf-8') as f:
        f.write(index_html)
else:
    print("Reading index page from cache...")
    with open(index_cache_path, 'r', encoding='utf-8') as f:
        index_html = f.read()

links = re.findall(r'href="(/thu-vien-boya/boya-elementary-2/[^"]+)"', index_html)
unique_links = []
for l in links:
    if l not in unique_links and not l.endswith('/luyen-tap/'):
        unique_links.append(l)

print(f"Found {len(unique_links)} topic links.")

for i, rel_url in enumerate(unique_links):
    topic_num = i + 1
    raw_html_file = os.path.join(cache_dir, f'topic_{topic_num:02d}.html')
    full_url = f'https://xiehanzi.com{rel_url}'
    
    if not os.path.exists(raw_html_file):
        print(f"[{topic_num}/{len(unique_links)}] Fetching {full_url} ...")
        try:
            req = urllib.request.Request(full_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as resp:
                html = resp.read().decode('utf-8')
            with open(raw_html_file, 'w', encoding='utf-8') as f:
                f.write(html)
            time.sleep(0.3)
        except Exception as e:
            print(f"Error fetching {full_url}: {e}")
            continue
    else:
        print(f"[{topic_num}/{len(unique_links)}] Already downloaded {raw_html_file}")

print("All Boya 2 topic HTMLs downloaded.")
