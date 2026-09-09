const tones = {
  a: "āáǎà",
  e: "ēéěè",
  i: "īíǐì",
  o: "ōóǒò",
  u: "ūúǔù",
  ü: "ǖǘǚǜ",
};
export function numberedSyllable(value) {
  const syllable = value.toLowerCase().replace(/u:|v/g, "ü");
  const match = /^(.*?)([0-5])$/.exec(syllable);
  if (!match) return syllable;
  const base = match[1],
    tone = Number(match[2]);
  if (!tone || tone === 5) return base;
  let index = base.indexOf("a");
  if (index < 0) index = base.indexOf("e");
  if (index < 0 && base.includes("ou")) index = base.indexOf("o");
  if (index < 0)
    for (let i = base.length - 1; i >= 0; i--)
      if (tones[base[i]]) {
        index = i;
        break;
      }
  if (index < 0) {
    if (/^[mn]g?$/.test(base))
      return (
        base[0] +
        ["", "\u0304", "\u0301", "\u030c", "\u0300"][tone] +
        base.slice(1)
      ).normalize("NFC");
    return syllable;
  }
  return (
    base.slice(0, index) + tones[base[index]][tone - 1] + base.slice(index + 1)
  );
}
export function numberedPinyin(value) {
  return value
    .toLowerCase()
    .replace(/u:|v/g, "ü")
    .replace(/[a-zü]+[0-5]/g, (syllable) => numberedSyllable(syllable));
}
export function readingKey(value) {
  return numberedPinyin(value)
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\s’'·-]/g, "");
}
export function readingVariants(value) {
  return value.split("/").map(readingKey);
}
export function sameReading(first, second) {
  return readingVariants(first).some((key) =>
    readingVariants(second).includes(key),
  );
}
export function tonelessKey(value) {
  return readingKey(value)
    .replace(/[üǖǘǚǜ]/g, "v")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
