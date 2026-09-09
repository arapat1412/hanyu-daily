const fs = require('fs');

const lessons = require('./all_parsed_lessons.json');

let totalWords = 0;
let wordsWithExamples = 0;
let wordsWithCompleteExamples = 0;
let wordsWithoutExamples = 0;
let wordTypesCount = {};
let wordClassesCount = {};
let emptyTranslationCount = 0;
let emptyPinyinCount = 0;
let emptyHanvietCount = 0;

for (const lesson of lessons) {
  for (const w of lesson.words) {
    totalWords++;
    if (!w.pinyin) emptyPinyinCount++;
    if (!w.translationVi && !w.wordMeaningVi) emptyTranslationCount++;
    if (!w.hanviet) emptyHanvietCount++;

    if (w.wordType) {
      wordTypesCount[w.wordType] = (wordTypesCount[w.wordType] || 0) + 1;
    }
    if (w.wordClasses) {
      for (const wc of w.wordClasses) {
        wordClassesCount[wc] = (wordClassesCount[wc] || 0) + 1;
      }
    }

    if (w.examples && w.examples.length > 0) {
      wordsWithExamples++;
      const firstEx = w.examples[0];
      if (firstEx.hanzi && firstEx.pinyin && firstEx.vietnamese && firstEx.vietnamese !== 'undefined') {
        wordsWithCompleteExamples++;
      }
    } else {
      wordsWithoutExamples++;
    }
  }
}

console.log('Total words:', totalWords);
console.log('Words without examples:', wordsWithoutExamples);
console.log('Words with examples:', wordsWithExamples);
console.log('Words with complete examples (hanzi + pinyin + vi):', wordsWithCompleteExamples);
console.log('Empty translation count:', emptyTranslationCount);
console.log('Empty pinyin count:', emptyPinyinCount);
console.log('Empty hanviet count:', emptyHanvietCount);
console.log('\nWord Classes count:', wordClassesCount);
console.log('\nWord Types count:', wordTypesCount);
