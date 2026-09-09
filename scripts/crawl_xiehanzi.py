import urllib.request
import re
import json

url = 'https://xiehanzi.com/thu-vien-boya/boya-elementary-1/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8')
    print('Fetched HTML len:', len(html))
    links = re.findall(r'href="(/thu-vien-boya/boya-elementary-1/[^"]+)"', html)
    unique_links = []
    for l in links:
        if l not in unique_links and not l.endswith('/luyen-tap/'):
            unique_links.append(l)
    print(f'Found {len(unique_links)} topic links:')
    for l in unique_links:
        print('  ', l)
except Exception as e:
    import traceback
    traceback.print_exc()
