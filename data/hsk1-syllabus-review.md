# HSK 1: Vietnamese topics and communication tasks

Reviewed on 2026-10-29 against the syllabus linked by the official HSK website:

- Official source page: https://www.chinesetest.cn/HSK
- PDF: https://hsk.cn-bj.ufileos.com/3.0/新版HSK考试大纲1219.pdf
- Publisher: 中外语言交流合作中心 (CLEC).
- Publication: November 2025; stated implementation: July 2026.
- PDF SHA-256: `ec74ce0439e837bbb15154be13e747ae798903b2fd3a331629df6c3b45504941`.
- Tasks: printed pages 2–5, PDF pages 5–8.
- Topics: printed pages 56–57, PDF pages 59–60.

## Coverage

`src/data/hsk1SyllabusVi.json` contains the complete Vietnamese translation and Chinese source text for:

- 5 main topic categories, 15 topic subcategories, 30 specific topics.
- 15 communication task groups, 59 individual capability descriptors.

Topics preserve the hierarchy and wording of the existing dataset, checked against the PDF. Task descriptions were extracted from the official PDF, removing line wraps, printed page numbers and repeated 汉考国际 watermarks. This is an independently maintained supplement so vocabulary imports cannot overwrite the reviewed translations.

## Differences from the existing imported task data

The PDF contains wording differences beyond punctuation. The displayed HSK 1 supplement follows the official PDF, including:

- Objects: `能询问关于上述日常物品的简单信息` rather than specifying family, friends and classmates as the people to ask.
- Travel: `能看懂火车、飞机等常见出行方式的基本信息` (basic travel information), rather than limiting the requirement to locations and times.
- Goods: minor word-order differences and omission of an extra 人 after 朋友等.
- Study/school: `关于学习情况的简单问题` and `关于上述学习或课后活动` match the current official wording.
- Traditional food: the PDF uses `面条儿` and slightly different wording for asking questions.

The base import in `public/data/hsk/hsk1.json` remains the raw imported dataset; the HSK 1 syllabus UI uses the reviewed supplement for these two sections. Counts remain 30 topics and 59 descriptors. Other levels continue using their existing data.

## Translation policy

Vietnamese is an editorial translation by Hanyu Daily, not an official CTI/CLEC translation. No examples, new capability requirements, skill labels, or assessment claims were added. The Chinese original and direct source links are available in the interface for verification.

Search covers the category names, task group names, Vietnamese translations and Chinese source text; Vietnamese searches support diacritics and unaccented input through the existing `normalizeSearch` utility.
