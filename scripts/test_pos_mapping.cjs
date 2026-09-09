const lessons = require('./all_parsed_lessons.json');

function mapPartOfSpeech(w) {
  // 1. Check if wordType is already in Vietnamese
  const wt = (w.wordType || '').trim();
  const wc = w.wordClasses || [];

  const viMap = {
    'noun': 'Danh từ',
    'verb': 'Động từ',
    'adjective': 'Tính từ',
    'adj': 'Tính từ',
    'pronoun': 'Đại từ',
    'adverb': 'Phó từ',
    'adv': 'Phó từ',
    'particle': 'Trợ từ',
    'preposition': 'Giới từ',
    'prep': 'Giới từ',
    'conjunction': 'Liên từ',
    'conj': 'Liên từ',
    'numeral': 'Số từ',
    'num': 'Số từ',
    'measure': 'Lượng từ',
    'classifier': 'Lượng từ',
    'interjection': 'Thán từ',
    'idiom': 'Thành ngữ',
    'phrase': 'Cụm từ',
    'locality': 'Từ chỉ phương vị',
    'onomatopoeia': 'Từ tượng thanh',
    'auxiliary': 'Trợ động từ',
    'proper-noun': 'Danh từ riêng'
  };

  // If wordType contains Vietnamese words like "danh từ", "động từ", "tính từ"
  const wtLower = wt.toLowerCase();
  if (wtLower.includes('danh từ') || wtLower.includes('động từ') || wtLower.includes('tính từ') || 
      wtLower.includes('đại từ') || wtLower.includes('phó từ') || wtLower.includes('trợ từ') ||
      wtLower.includes('thán từ') || wtLower.includes('lượng từ') || wtLower.includes('liên từ') ||
      wtLower.includes('giới từ') || wtLower.includes('số từ') || wtLower.includes('thành ngữ') ||
      wtLower.includes('cụm từ') || wtLower.includes('trạng từ')) {
    // Normalize casing
    return wt.charAt(0).toUpperCase() + wt.slice(1);
  }

  // If wordClasses is available, use it!
  if (wc.length > 0) {
    const mapped = wc.map(c => viMap[c] || c).filter(Boolean);
    if (mapped.length > 0) {
      return mapped.join(' / ');
    }
  }

  // If wordType is in viMap
  if (viMap[wtLower]) {
    return viMap[wtLower];
  }

  if (wtLower === 'single-char-used-as-word' || wtLower === 'compound-semantic' || wtLower === 'other' || wtLower === 'reduplication') {
    // Check if wordClasses had anything, or return 'Từ vựng'
    return 'Từ vựng';
  }

  return wt || 'Từ vựng';
}

const posStats = {};
for (const l of lessons) {
  for (const w of l.words) {
    const pos = mapPartOfSpeech(w);
    posStats[pos] = (posStats[pos] || 0) + 1;
  }
}

console.log('Mapped Part of Speech distribution:');
console.log(posStats);
