import sys
sys.stdout.reconfigure(encoding='utf-8')
import re

with open('scripts/topic1_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

matches = [m.start() for m in re.finditer(re.escape('你好'), html)]
for i, idx in enumerate(matches[5:20]):
    snippet = html[max(0, idx-50):min(len(html), idx+250)]
    print(f"=== Match {i+6} ===")
    print(snippet)
    print()

