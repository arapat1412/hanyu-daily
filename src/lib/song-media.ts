const SONG_IMAGE_VERSION = 'v1';

export function getOptimizedSongImage(source: string): string {
  if (!source) return '';
  if (source.startsWith('http://') || source.startsWith('https://')) return source;
  if (/\.v\d+\.webp$/i.test(source)) return source;
  if (/\.v\d+-thumb\.webp$/i.test(source)) {
    return source.replace(/-thumb\.webp$/i, '.webp');
  }
  return source.replace(/\.(?:png|jpe?g|webp)$/i, `.${SONG_IMAGE_VERSION}.webp`);
}

export function getSongThumbnail(source: string): string {
  if (!source) return '';
  if (source.startsWith('http://') || source.startsWith('https://')) return source;
  if (/\.v\d+-thumb\.webp$/i.test(source)) return source;
  if (/\.v\d+\.webp$/i.test(source)) {
    return source.replace(/\.v(\d+)\.webp$/i, '.v$1-thumb.webp');
  }
  return source.replace(/\.(?:png|jpe?g|webp)$/i, `.${SONG_IMAGE_VERSION}-thumb.webp`);
}
