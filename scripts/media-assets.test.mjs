import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');

function uniqueMatches(source, pattern) {
  return [...new Set([...source.matchAll(pattern)].map((match) => match[0]))];
}

test('every story illustration has a versioned reader image and thumbnail', async () => {
  const storyData = await readFile(path.join(projectRoot, 'src/data/storiesData.ts'), 'utf8');
  const imagePaths = uniqueMatches(storyData, /\/stories\/[^']+\.png/g);

  assert.equal(imagePaths.length, 29);
  await Promise.all(
    imagePaths.flatMap((imagePath) => {
      const basePath = imagePath.replace(/\.png$/i, '');
      return ['.v1.webp', '.v1-thumb.webp'].map(async (suffix) => {
        const file = path.join(projectRoot, 'public', `${basePath}${suffix}`);
        const metadata = await stat(file);
        assert.ok(metadata.size > 0, `${file} must not be empty`);
      });
    }),
  );
});

test('story and song catalogs contain the same top-level ids as detail data', async () => {
  const [storyData, storyCatalog, songData, songCatalog] = await Promise.all([
    readFile(path.join(projectRoot, 'src/data/storiesData.ts'), 'utf8'),
    readFile(path.join(projectRoot, 'src/data/storiesCatalog.ts'), 'utf8'),
    readFile(path.join(projectRoot, 'src/data/songsData.ts'), 'utf8'),
    readFile(path.join(projectRoot, 'src/data/songsCatalog.ts'), 'utf8'),
  ]);

  const topLevelIds = (source) =>
    [...source.matchAll(/^    id: '([^']+)'/gm)].map((match) => match[1]).sort();

  assert.deepEqual(topLevelIds(storyCatalog), topLevelIds(storyData));
  assert.deepEqual(topLevelIds(songCatalog), topLevelIds(songData));
});

test('every referenced local song file exists', async () => {
  const songData = await readFile(path.join(projectRoot, 'src/data/songsData.ts'), 'utf8');
  const audioPaths = uniqueMatches(songData, /\/songs\/[^']+\.mp3/g);

  await Promise.all(
    audioPaths.map(async (audioPath) => {
      const metadata = await stat(path.join(projectRoot, 'public', audioPath));
      assert.ok(metadata.size > 0, `${audioPath} must not be empty`);
    }),
  );
});
