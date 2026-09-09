import sys
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup
import json
import re

with open('scripts/topic1_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect self.__next_f chunks
pushes = re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)', html, re.DOTALL)
print(f"Total pushes: {len(pushes)}")

full_rsc = ""
for p in pushes:
    # unescape standard js escapes
    try:
        unescaped = p.encode('utf-8').decode('unicode_escape')
        full_rsc += unescaped
    except Exception:
        full_rsc += p

print("full_rsc length:", len(full_rsc))
# Check if vocab data is in full_rsc
# Save full_rsc to inspect
with open('scripts/rsc_sample.txt', 'w', encoding='utf-8') as f:
    f.write(full_rsc)

# Also let's inspect the HTML rendered DOM with BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')
h1 = soup.find('h1')
print("H1:", h1.get_text() if h1 else None)

# Find vocabulary items in HTML
# Look for hanzi links, e.g. /tra-chu/...
tra_chu_links = soup.find_all('a', href=re.compile(r'/tra-chu/'))
print(f"Found {len(tra_chu_links)} /tra-chu/ links")
for a in tra_chu_links[:10]:
    print("  Link:", a.get('href'), "Text:", a.get_text().strip())

