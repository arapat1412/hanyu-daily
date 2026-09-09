# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
from pypinyin import pinyin, lazy_pinyin, Style

test_sentences = [
    "我奶奶虽然没有文化，【】做事却十分干脆，【】听了这话便找出存折，【】抱着我便径直走出家门去银行取钱。",
    "中国政府秉承“以人为本”的精神，【】根据被援助国要求和国际社会的呼吁，【】及时提供了救灾物资、救援队和医疗队，【】尽力提供现汇资金援助，【】积极参与了国际合作的重大紧急救援任务。",
    "虽然【】没有得到为国家献身的机会，但也一直做好了准备；如果到了那一天，汪昌绪绝对丝毫不会犹豫。",
    "他巴不得早点儿退休，好能到处游山玩水。",
    "你下班之后就回家不行吗？天天在外面玩儿个什么劲儿？",
    "你说到哪儿去了，我才不会对他产生任何好感！",
    "甘草i于亚欧大陆的中国北部、蒙古、俄罗斯西伯利亚地区、哈萨克斯坦、巴基斯坦等地都有分布，Øi在中国具体分布于东北、华北、西北等地。"
]

for s in test_sentences:
    print("ORIGINAL:", s)
    res = pinyin(s, style=Style.TONE)
    print("PINYIN:", res[:10])
