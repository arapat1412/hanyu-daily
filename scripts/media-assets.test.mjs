import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
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

test('local song covers have versioned images and thumbnails', async () => {
  const songData = await readFile(path.join(projectRoot, 'src/data/songsData.ts'), 'utf8');
  const localCovers = uniqueMatches(songData, /\/songs\/[^']+\.webp/g);

  assert.ok(localCovers.length > 0, 'at least one local song cover exists');
  await Promise.all(
    localCovers.flatMap((coverPath) => {
      const basePath = coverPath.replace(/\.v\d+(?:-thumb)?\.webp$/i, '');
      return ['.v1.webp', '.v1-thumb.webp'].map(async (suffix) => {
        const file = path.join(projectRoot, 'public', `${basePath}${suffix}`);
        const metadata = await stat(file);
        assert.ok(metadata.size > 0, `${file} must not be empty`);
      });
    }),
  );
});

test('song media entries and files have no duplicates', async () => {
  const [songData, songCatalog] = await Promise.all([
    readFile(path.join(projectRoot, 'src/data/songsData.ts'), 'utf8'),
    readFile(path.join(projectRoot, 'src/data/songsCatalog.ts'), 'utf8'),
  ]);

  const extractIds = (source) =>
    [...source.matchAll(/^    id: '([^']+)'/gm)].map((match) => match[1]);

  const dataIds = extractIds(songData);
  const catalogIds = extractIds(songCatalog);

  assert.equal(dataIds.length, new Set(dataIds).size, 'songData IDs must be unique');
  assert.equal(catalogIds.length, new Set(catalogIds).size, 'songCatalog IDs must be unique');

  const audioMatches = [...songData.matchAll(/audioUrl:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.equal(
    audioMatches.length,
    new Set(audioMatches).size,
    'all referenced audioUrls must be unique',
  );

  const songsDir = path.join(projectRoot, 'public', 'songs');
  const songEntries = await readdir(songsDir);
  const mp3Files = songEntries.filter((name) => name.endsWith('.mp3'));

  const hashes = new Set();
  for (const filename of mp3Files) {
    const fileBuffer = await readFile(path.join(songsDir, filename));
    const hash = createHash('sha256').update(fileBuffer).digest('hex');
    assert.ok(
      !hashes.has(hash),
      `duplicate mp3 file detected: ${filename} shares content with another audio file`,
    );
    hashes.add(hash);
  }
});
