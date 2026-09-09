# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import glob

for f in glob.glob('src/data/hsk*.ts'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    if '§' in c:
        print(f"Found '§' in {f}!")
    if 'L B R' in c:
        print(f"Found 'L B R' in {f}!")
    if 'Y I D I A N R' in c:
        print(f"Found 'Y I D I A N R' in {f}!")
    if 'N A R' in c:
        print(f"Found 'N A R' in {f}!")
