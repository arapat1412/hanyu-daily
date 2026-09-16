const STORY_IMAGE_VERSION = 'v1';

function replacePngSuffix(source: string, replacement: string): string {
  return source.replace(/\.png$/i, replacement);
}

export function getOptimizedStoryImage(source: string): string {
  return replacePngSuffix(source, `.${STORY_IMAGE_VERSION}.webp`);
}

export function getStoryThumbnail(source: string): string {
  return replacePngSuffix(source, `.${STORY_IMAGE_VERSION}-thumb.webp`);
}
