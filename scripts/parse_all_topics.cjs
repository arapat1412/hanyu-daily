const fs = require('fs');
const path = require('path');

const cachedDir = path.join(__dirname, 'cached_topics');

let allLessons = [];
let totalWords = 0;

for (let i = 1; i <= 30; i++) {
  const file = path.join(cachedDir, `topic_${String(i).padStart(2, '0')}.html`);
  if (!fs.existsSync(file)) {
    console.error(`Missing file ${file}`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');

  // Find script tag containing plannedWordCount
  const idx = html.indexOf('plannedWordCount');
  if (idx === -1) {
    console.error(`Topic ${i}: plannedWordCount not found!`);
    continue;
  }

  const scriptStart = html.lastIndexOf('<script>', idx);
  const scriptEnd = html.indexOf('</script>', idx);
  const scriptContent = html.slice(scriptStart + 8, scriptEnd);

  let targetChunk = null;
  const self = {
    __next_f: {
      push: (arr) => {
        if (typeof arr[1] === 'string' && arr[1].includes('plannedWordCount')) {
          targetChunk = arr[1];
        }
      }
    }
  };

  try {
    eval(scriptContent);
  } catch (err) {
    console.error(`Topic ${i}: eval error:`, err.message);
    continue;
  }

  if (!targetChunk) {
    console.error(`Topic ${i}: targetChunk not found!`);
    continue;
  }

  const jsonStart = targetChunk.indexOf('[');
  const jsonStr = targetChunk.slice(jsonStart);
  try {
    const parsed = JSON.parse(jsonStr);
    const state = parsed[3]?.state;
    const query = state?.queries?.[0];
    const data = query?.state?.data;
    if (!data || !data.topic) {
      console.error(`Topic ${i}: data.topic missing!`);
      continue;
    }

    const topic = data.topic;
    const words = topic.words || [];
    totalWords += words.length;

    console.log(`Topic ${i}: "${topic.topic}" (${topic.topicSlug}) - Words: ${words.length} (planned: ${topic.plannedWordCount})`);
    allLessons.push({
      lessonNumber: i,
      rawTopicTitle: topic.topic,
      topicSlug: topic.topicSlug,
      plannedWordCount: topic.plannedWordCount,
      wordCount: words.length,
      words: words
    });
  } catch (err) {
    console.error(`Topic ${i}: JSON parse error:`, err.message);
  }
}

console.log(`\nParsed ${allLessons.length}/30 topics successfully! Total words: ${totalWords}`);
fs.writeFileSync(path.join(__dirname, 'all_parsed_lessons.json'), JSON.stringify(allLessons, null, 2), 'utf8');
