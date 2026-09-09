import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/topic1_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

idx = html.find('plannedWordCount')
# find preceding script tag
script_start = html.rfind('<script>', 0, idx)
script_end = html.find('</script>', idx)
print("Script start:", script_start, "Script end:", script_end)
script_content = html[script_start+8:script_end]
print("Script content starts with:", script_content[:100])
print("Script content ends with:", script_content[-100:])
print("Total script content len:", len(script_content))

with open('scripts/script_raw.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

