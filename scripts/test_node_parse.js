const fs = require('fs');

const scriptContent = fs.readFileSync('scripts/script_raw.js', 'utf8');

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

eval(scriptContent);

console.log('Got targetChunk?', !!targetChunk);
if (targetChunk) {
  // targetChunk starts with something like "10:[\"$\",\"$L26\",null,{\"state\":{\"mutations\":[],\"queries\":[{\"state\":{\"data\":...
  // Let's strip the prefix "10:" or whatever index:
  const jsonStart = targetChunk.indexOf('[');
  const jsonStr = targetChunk.slice(jsonStart);
  try {
    const parsed = JSON.parse(jsonStr);
    console.log('Successfully parsed JSON!');
    // Let's find the query data
    const state = parsed[3]?.state;
    const queries = state?.queries || [];
    console.log('Queries count:', queries.length);
    for (const q of queries) {
      console.log('Query key:', JSON.stringify(q.queryKey));
      const data = q.state?.data;
      if (data && data.words) {
        console.log('Found words! Count:', data.words.length);
        console.log('Topic info:', {
          level: data.level,
          topic: data.topic,
          topicSlug: data.topicSlug,
          plannedWordCount: data.plannedWordCount
        });
        console.log('Sample word 0:', JSON.stringify(data.words[0], null, 2));
        fs.writeFileSync('scripts/parsed_topic1.json', JSON.stringify(data, null, 2), 'utf8');
      }
    }
  } catch (err) {
    console.error('Parse error:', err);
  }
}
