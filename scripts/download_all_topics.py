import os
import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request
import re
import json
import time

TOPICS_LIST_URL = 'https://xiehanzi.com/thu-vien-boya/boya-elementary-1/'
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

os.makedirs('scripts/cached_topics', exist_ok=True)

# 1. Fetch index page if not cached
index_cache_path = 'scripts/cached_topics/index.html'
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

# Extract topic links in order
# Looking for links like /thu-vien-boya/boya-elementary-1/boya-elementary-1-.../
# Let's preserve order from index_html
links = re.findall(r'href="(/thu-vien-boya/boya-elementary-1/[^"]+)"', index_html)
unique_links = []
for l in links:
    if l not in unique_links and not l.endswith('/luyen-tap/'):
        unique_links.append(l)

print(f"Found {len(unique_links)} topic links.")

# 2. For each topic, fetch and extract the JSON query data
def extract_topic_data(html):
    # Find script tag with plannedWordCount or boya-elementary-1
    idx = html.find('plannedWordCount')
    if idx == -1:
        return None
    script_start = html.rfind('<script>', 0, idx)
    script_end = html.find('</script>', idx)
    script_content = html[script_start+8:script_end]
    
    # Extract string from self.__next_f.push([1,"..."])
    m = re.search(r'self\.__next_f\.push\(\[1,"(.*)"\]\)', script_content)
    if not m:
        # maybe multiple pushes or differently formatted
        # let's find the unescaped string
        m2 = re.search(r'\"words\":\[', script_content)
        if not m2:
            return None
    # Let's use node to evaluate script_content safely if needed, or parse here
    return script_content

for i, rel_url in enumerate(unique_links):
    topic_num = i + 1
    cache_file = f'scripts/cached_topics/topic_{topic_num:02d}.json'
    raw_html_file = f'scripts/cached_topics/topic_{topic_num:02d}.html'
    
    full_url = f'https://xiehanzi.com{rel_url}'
    
    if not os.path.exists(raw_html_file):
        print(f"[{topic_num}/30] Fetching {full_url} ...")
        try:
            req = urllib.request.Request(full_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as resp:
                html = resp.read().decode('utf-8')
            with open(raw_html_file, 'w', encoding='utf-8') as f:
                f.write(html)
            time.sleep(0.5) # friendly delay
        except Exception as e:
            print(f"Error fetching {full_url}: {e}")
            continue
    else:
        print(f"[{topic_num}/30] Already downloaded {raw_html_file}")

print("All topic HTMLs downloaded.")
