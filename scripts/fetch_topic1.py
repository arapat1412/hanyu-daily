import urllib.request
import re
import json

url = 'https://xiehanzi.com/thu-vien-boya/boya-elementary-1/boya-elementary-1-ni-hao/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8')
    print('Topic 1 len:', len(html))
    with open('scripts/topic1_sample.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('Saved to scripts/topic1_sample.html')
except Exception as e:
    import traceback
    traceback.print_exc()
