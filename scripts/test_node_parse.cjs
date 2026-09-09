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

const jsonStart = targetChunk.indexOf('[');
const jsonStr = targetChunk.slice(jsonStart);
const parsed = JSON.parse(jsonStr);
const state = parsed[3]?.state;
const query = state?.queries?.[0];
console.log('Query state keys:', Object.keys(query.state));
console.log('Query data keys:', Object.keys(query.state.data));
console.log('Topic:', query.state.data.topic);
console.log('Words is array?', Array.isArray(query.state.data.words));
console.log('Words length:', query.state.data.words?.length);
if (query.state.data.words?.length > 0) {
  console.log('Word 0:', query.state.data.words[0]);
}
fs.writeFileSync('scripts/parsed_topic1.json', JSON.stringify(query.state.data, null, 2), 'utf8');
