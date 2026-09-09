import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re

with open('scripts/topic1_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find "words":\[ in the HTML or RSC
# Notice in Match 11:
# \"plannedWordCount\":16,\"words\":[
# Because it's escaped inside self.__next_f.push("[..., \"... escaped string ...\"]")

# Let's write an extractor for the words array
# In the raw html:
match = re.search(r'\"words\":(\[.*?\]),\"chars\"', html)
if not match:
    # try unescaping the json string inside self.__next_f
    print("Trying regex on unescaped content...")
    # Find the push that contains "plannedWordCount"
    pushes = re.findall(r'self\.__next_f\.push\(\[1,"(.*)"\]\)', html)
    for p in pushes:
        if 'plannedWordCount' in p:
            print("Found push with plannedWordCount!")
            # The push string is a JSON-encoded string (with escaped quotes)
            # Let's decode it
            decoded = json.loads('"' + p + '"')
            # Now inside decoded, let's find the words json
            m2 = re.search(r'"words":(\[.*?\])(?=,"chars"|,"curriculum"|,\"(?:[a-zA-Z]+)\":)', decoded)
            if m2:
                words_json = m2.group(1)
                words = json.loads(words_json)
                print(f"Successfully extracted {len(words)} words!")
                print("First word:")
                print(json.dumps(words[0], ensure_ascii=False, indent=2))
                print("\nAll hanzi in topic 1:")
                for i, w in enumerate(words):
                    print(f"{i+1}. {w.get('hanzi')} | {w.get('pinyin')} | {w.get('wordType')} | {w.get('translationVi')} | {w.get('hanviet')}")
            else:
                print("m2 not matched in decoded, length of decoded:", len(decoded))
                with open('scripts/decoded_push.txt', 'w', encoding='utf-8') as f_out:
                    f_out.write(decoded)
                print("Wrote to scripts/decoded_push.txt")

