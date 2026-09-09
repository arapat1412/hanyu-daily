# Vietnamese vocabulary annotations

This directory contains supplemental annotations, separate from the original HSK syllabus and from application code. They are automatically matched dictionary references, not a reproduction of Meiday's authored course, and have not undergone a full pedagogical review.

## Vietnamese definitions

- Source: **CVDICT**, published by **Phong Phan**: https://github.com/ph0ngp/CVDICT
- Based on **CC-CEDICT**, its contributors, and CEDICT — Copyright (C) 1997, 1998 Paul Andrew Denisowski: https://www.mdbg.net/chinese/dictionary?page=cc-cedict
- Source revision: `c379d909e308343a247e51619f7839a2060a271c`
- License: **Creative Commons Attribution-ShareAlike 4.0 International**, https://creativecommons.org/licenses/by-sa/4.0/
- Legal text: https://creativecommons.org/licenses/by-sa/4.0/legalcode.en
- CVDICT-derived definitions and adaptations in this directory are distributed under **CC BY-SA 4.0**. Preserve attribution and ShareAlike when redistributing them. No additional restrictions or endorsement by the source authors are implied. No warranties are provided.
- Changes: parsed dictionary text; normalized one malformed duplicated pinyin bracket; matched Chinese forms and tone-sensitive pinyin to HSK entries; allowed explicit 一/不 tone sandhi; removed classifier/pronunciation metadata from gloss display; resolved dictionary cross-references; deduplicated definitions and selected up to three for card previews; prioritized common readings before surname readings when the syllabus uses lowercase pinyin, and classifier glosses for measure-word entries; partitioned by HSK level and stable ID. The complete matching gloss list and source line numbers are retained per annotation.
- The publisher states that most translation was AI-assisted, with some manual corrections. Errors can remain. This application does not relabel the dataset as fully human-reviewed.

The original publisher's README is included as `CVDICT-README.md`. The full original snapshot is preserved in the project at `data/dictionary-source/CVDICT.u8`.

## Sino-Vietnamese character readings

- Source: **Hán Việt Pinyin wordlist**, **Phong Phan**: https://github.com/ph0ngp/hanviet-pinyin-wordlist
- Copyright (c) 2024 Phong Phan.
- Source revision: `b9923df92c8b55f013001390e37cddd35e986dc1`
- License: **MIT**, reproduced in `HANVIET-LICENSE` in this directory.
- Changes: selected traditional forms from matched CVDICT entries, aligned pinyin syllables with characters, selected explicit or wildcard readings according to the source, and joined character readings for reference. Multiple readings within one character are separated by `/`; ambiguous whole-word alternatives are not automatically chosen.
- These are character-by-character Sino-Vietnamese readings, **not Vietnamese definitions** or guarantees about normal modern Vietnamese word usage.

## HSK base data and local content

The syllabus vocabulary remains a separate dataset in `/data/hsk/`, from https://github.com/profesorm/hsk30 (CC BY 4.0), attributed upstream to Chinese Testing International. Original local project notes are also kept separate and take precedence when Chinese and pinyin match. This notice does not change the license of the application's UI/source code.

Missing or pronunciation-mismatched dictionary entries are not silently accepted. They remain in `data/hsk-content-review.json` in the project for editorial review. A word's `meaningQuizEligible` flag concerns automatic matching/ambiguity only; it is not a claim that the translation was reviewed by a teacher.
