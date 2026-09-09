const FALLBACK_TEMPLATES = [
  {
    chinese: "今天我要复习的词是“{hanzi}”。",
    pinyin: "Jīntiān wǒ yào fùxí de cí shì “{pinyin}”.",
    vietnamese: "Từ tôi muốn ôn hôm nay là {term}.",
  },
  {
    chinese: "老师让我们读一遍“{hanzi}”。",
    pinyin: "Lǎoshī ràng wǒmen dú yí biàn “{pinyin}”.",
    vietnamese: "Giáo viên yêu cầu chúng tôi đọc {term} một lần.",
  },
  {
    chinese: "我把“{hanzi}”写在了笔记本上。",
    pinyin: "Wǒ bǎ “{pinyin}” xiě zài le bǐjìběn shàng.",
    vietnamese: "Tôi đã viết {term} vào vở ghi chép.",
  },
  {
    chinese: "课本里有“{hanzi}”这个词。",
    pinyin: "Kèběn lǐ yǒu “{pinyin}” zhège cí.",
    vietnamese: "Trong sách giáo khoa có từ {term}.",
  },
  {
    chinese: "你知道“{hanzi}”是什么意思吗？",
    pinyin: "Nǐ zhīdào “{pinyin}” shì shénme yìsi ma?",
    vietnamese: "Bạn có biết {term} có nghĩa là gì không?",
  },
  {
    chinese: "我们一起练习“{hanzi}”的发音。",
    pinyin: "Wǒmen yìqǐ liànxí “{pinyin}” de fāyīn.",
    vietnamese: "Chúng ta cùng luyện phát âm từ {term}.",
  },
  {
    chinese: "请注意“{hanzi}”的读音。",
    pinyin: "Qǐng zhùyì “{pinyin}” de dúyīn.",
    vietnamese: "Hãy chú ý cách đọc của từ {term}.",
  },
  {
    chinese: "我今天新学了“{hanzi}”。",
    pinyin: "Wǒ jīntiān xīn xué le “{pinyin}”.",
    vietnamese: "Hôm nay tôi vừa học từ mới {term}.",
  },
  {
    chinese: "下课前，我们再复习一遍“{hanzi}”。",
    pinyin: "Xiàkè qián, wǒmen zài fùxí yí biàn “{pinyin}”.",
    vietnamese: "Trước khi tan học, chúng ta ôn lại {term} một lần nữa.",
  },
  {
    chinese: "她在词卡上写了“{hanzi}”。",
    pinyin: "Tā zài cíkǎ shàng xiě le “{pinyin}”.",
    vietnamese: "Cô ấy đã viết {term} lên thẻ từ vựng.",
  },
  {
    chinese: "这个单元会学到“{hanzi}”。",
    pinyin: "Zhège dānyuán huì xué dào “{pinyin}”.",
    vietnamese: "Trong bài này chúng ta sẽ học từ {term}.",
  },
  {
    chinese: "我想记住“{hanzi}”这个词。",
    pinyin: "Wǒ xiǎng jìzhù “{pinyin}” zhège cí.",
    vietnamese: "Tôi muốn ghi nhớ từ {term}.",
  },
  {
    chinese: "听到“{hanzi}”时，我马上记了下来。",
    pinyin: "Tīngdào “{pinyin}” shí, wǒ mǎshàng jì le xiàlái.",
    vietnamese: "Khi nghe thấy {term}, tôi lập tức ghi lại.",
  },
  {
    chinese: "请用“{hanzi}”造一个句子。",
    pinyin: "Qǐng yòng “{pinyin}” zào yí ge jùzi.",
    vietnamese: "Hãy dùng từ {term} để đặt một câu.",
  },
  {
    chinese: "“{hanzi}”是今天的重点词之一。",
    pinyin: "“{pinyin}” shì jīntiān de zhòngdiǎn cí zhī yī.",
    vietnamese: "{term} là một trong những từ trọng tâm hôm nay.",
  },
  {
    chinese: "同学们正在练习写“{hanzi}”。",
    pinyin: "Tóngxuémen zhèngzài liànxí xiě “{pinyin}”.",
    vietnamese: "Các bạn học sinh đang luyện viết từ {term}.",
  },
  {
    chinese: "我已经会读“{hanzi}”了。",
    pinyin: "Wǒ yǐjīng huì dú “{pinyin}” le.",
    vietnamese: "Tôi đã biết đọc từ {term} rồi.",
  },
  {
    chinese: "先听“{hanzi}”的发音，再跟着读。",
    pinyin: "Xiān tīng “{pinyin}” de fāyīn, zài gēnzhe dú.",
    vietnamese: "Hãy nghe cách phát âm của {term} trước rồi đọc theo.",
  },
  {
    chinese: "老师在黑板上写下了“{hanzi}”。",
    pinyin: "Lǎoshī zài hēibǎn shàng xiěxià le “{pinyin}”.",
    vietnamese: "Giáo viên đã viết {term} lên bảng.",
  },
  {
    chinese: "我在生词表里找到了“{hanzi}”。",
    pinyin: "Wǒ zài shēngcíbiǎo lǐ zhǎodào le “{pinyin}”.",
    vietnamese: "Tôi đã tìm thấy {term} trong bảng từ mới.",
  },
  {
    chinese: "学习“{hanzi}”以后，请再读一遍。",
    pinyin: "Xuéxí “{pinyin}” yǐhòu, qǐng zài dú yí biàn.",
    vietnamese: "Sau khi học {term}, hãy đọc lại một lần.",
  },
  {
    chinese: "今天的听写里有“{hanzi}”。",
    pinyin: "Jīntiān de tīngxiě lǐ yǒu “{pinyin}”.",
    vietnamese: "Trong bài chính tả hôm nay có từ {term}.",
  },
  {
    chinese: "我用红笔标出了“{hanzi}”。",
    pinyin: "Wǒ yòng hóngbǐ biāochū le “{pinyin}”.",
    vietnamese: "Tôi đã dùng bút đỏ đánh dấu từ {term}.",
  },
  {
    chinese: "请把“{hanzi}”读得更清楚一点。",
    pinyin: "Qǐng bǎ “{pinyin}” dú de gèng qīngchu yìdiǎn.",
    vietnamese: "Hãy đọc từ {term} rõ hơn một chút.",
  },
  {
    chinese: "复习时，我先看“{hanzi}”的拼音。",
    pinyin: "Fùxí shí, wǒ xiān kàn “{pinyin}” de pīnyīn.",
    vietnamese: "Khi ôn tập, tôi xem pinyin của {term} trước.",
  },
  {
    chinese: "今天的生词中有“{hanzi}”。",
    pinyin: "Jīntiān de shēngcí zhōng yǒu “{pinyin}”.",
    vietnamese: "Trong số từ mới hôm nay có {term}.",
  },
  {
    chinese: "我把“{hanzi}”加入了复习清单。",
    pinyin: "Wǒ bǎ “{pinyin}” jiārù le fùxí qīngdān.",
    vietnamese: "Tôi đã thêm {term} vào danh sách ôn tập.",
  },
  {
    chinese: "请跟老师一起读“{hanzi}”。",
    pinyin: "Qǐng gēn lǎoshī yìqǐ dú “{pinyin}”.",
    vietnamese: "Hãy cùng giáo viên đọc từ {term}.",
  },
  {
    chinese: "这张词卡帮助我记住了“{hanzi}”。",
    pinyin: "Zhè zhāng cíkǎ bāngzhù wǒ jìzhù le “{pinyin}”.",
    vietnamese: "Thẻ từ này giúp tôi ghi nhớ {term}.",
  },
  {
    chinese: "我想再听一次“{hanzi}”的发音。",
    pinyin: "Wǒ xiǎng zài tīng yí cì “{pinyin}” de fāyīn.",
    vietnamese: "Tôi muốn nghe lại cách phát âm của {term} một lần nữa.",
  },
  {
    chinese: "看到“{hanzi}”以后，我试着读了出来。",
    pinyin: "Kàndào “{pinyin}” yǐhòu, wǒ shìzhe dú le chūlái.",
    vietnamese: "Sau khi nhìn thấy {term}, tôi thử đọc thành tiếng.",
  },
  {
    chinese: "请在生词本上圈出“{hanzi}”。",
    pinyin: "Qǐng zài shēngcí běn shàng quānchū “{pinyin}”.",
    vietnamese: "Hãy khoanh từ {term} trong sổ từ mới.",
  },
];

function stableTemplateIndex(word) {
  if (Number.isFinite(word.sort)) {
    return Math.abs(Math.trunc(word.sort) - 1) % FALLBACK_TEMPLATES.length;
  }
  const key = word.id || `${word.hanzi}|${word.pinyin}`;
  let hash = 0;
  for (const character of key) hash = (hash * 31 + character.codePointAt(0)) | 0;
  return Math.abs(hash) % FALLBACK_TEMPLATES.length;
}

function fillTemplate(template, values) {
  return template.replace(/\{(hanzi|pinyin|term)\}/g, (_, key) => values[key]);
}

export function createFallbackExample(word, meaning) {
  const gloss = (meaning || "từ đang học").replace(/[.!?。！？;；\s]+$/g, "");
  const template = FALLBACK_TEMPLATES[stableTemplateIndex(word)];
  const values = {
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    term: `“${word.hanzi}” [${gloss}]`,
  };
  return {
    chinese: fillTemplate(template.chinese, values),
    pinyin: fillTemplate(template.pinyin, values),
    vietnamese: fillTemplate(template.vietnamese, values),
    source: "generated-template",
  };
}

export function splitHighlightedText(text, target) {
  if (!target) return [{ text, highlighted: false }];
  const source = text.toLocaleLowerCase();
  const needle = target.toLocaleLowerCase();
  const parts = [];
  let cursor = 0;
  while (cursor < text.length) {
    const index = source.indexOf(needle, cursor);
    if (index < 0) {
      parts.push({ text: text.slice(cursor), highlighted: false });
      break;
    }
    if (index > cursor)
      parts.push({ text: text.slice(cursor, index), highlighted: false });
    parts.push({
      text: text.slice(index, index + target.length),
      highlighted: true,
    });
    cursor = index + target.length;
  }
  return parts.length ? parts : [{ text, highlighted: false }];
}
