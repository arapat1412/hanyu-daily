# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def to_pinyin(sentence):
    # Convert sentence to nicely formatted pinyin
    res = []
    for char in sentence:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '？！?!':
            res.append(char)
        elif char in '“”""':
            res.append('"')
        elif char in '（(':
            res.append('(')
        elif char in '）)':
            res.append(')')
        elif char in '：:':
            res.append(':')
        elif char in '——':
            res.append('—')
        elif char.strip():
            res.append(char)
    s = ' '.join(res)
    s = re.sub(r'\s+([,.\?!:"])', r'\1', s)
    s = re.sub(r'([("])\s+', r'\1', s)
    if s:
        s = s[0].upper() + s[1:]
    return s

print("Test pinyin:", to_pinyin("小高去哪儿了？"))
