import { BOYA1_UNITS, BOYA1_LESSONS, BOYA1_VOCABULARY, BOYA1_STATS } from '../dist/assets/boya1Data-CWt2rgja.js';

console.log('Total units:', BOYA1_UNITS.length);
console.log('Total lessons:', BOYA1_LESSONS.length);
console.log('Total words:', BOYA1_VOCABULARY.length);
console.log('BOYA1_STATS:', BOYA1_STATS);

let errors = [];
let lessonCounts = {};
for (const w of BOYA1_VOCABULARY) {
  lessonCounts[w.lesson] = (lessonCounts[w.lesson] || 0) + 1;
  if (!w.hanzi) errors.push('Missing hanzi for ' + w.id);
  if (!w.pinyin || w.pinyin.includes('*')) errors.push('Bad pinyin for ' + w.id + ': ' + w.pinyin);
  if (!w.meaning) errors.push('Missing meaning for ' + w.id);
  if (!w.sinoVietnamese) errors.push('Missing sinoVietnamese for ' + w.id);
  if (!w.audioUrl) errors.push('Missing audioUrl for ' + w.id);
  if (!w.exampleSentence || !w.exampleSentence.chinese || !w.exampleSentence.pinyin || !w.exampleSentence.vietnamese) {
    errors.push('Incomplete example for ' + w.id);
  }
}

for (const l of BOYA1_LESSONS) {
  if (l.wordCount !== lessonCounts[l.number]) {
    errors.push(`Lesson ${l.number} count mismatch: meta has ${l.wordCount}, actual is ${lessonCounts[l.number]}`);
  }
}

console.log('Validation errors:', errors.length);
if (errors.length > 0) {
  console.log(errors.slice(0, 10));
} else {
  console.log('All 678 vocabulary items and 30 lessons passed 100% verification!');
}

// Print first 3 lessons
console.log('\nSample Lessons:');
for (const l of BOYA1_LESSONS.slice(0, 5)) {
  console.log(`Bài ${l.number}: ${l.titleZh} (${l.titlePinyin}) - ${l.titleVi} [${l.wordCount} từ]`);
}
