import { VocabularyWord } from '../types';

export const SAMPLE_VOCABULARY: Record<string, VocabularyWord[]> = {
  hsk1: [
    {
      id: 'hsk1-00',
      hanzi: '啊',
      pinyin: 'a',
      sinoVietnamese: 'A',
      partOfSpeech: 'Trợ từ',
      hskLevel: 'hsk1',
      unit: 1,
      meaning: 'Thán từ cuối câu, thể hiện sự khẳng định, tán thành hoặc đồng ý',
      exampleSentence: {
        chinese: '啊，我明白了！',
        pinyin: 'A, wǒ míngbai le!',
        vietnamese: 'À, tôi hiểu rồi!'
      }
    },
    {
      id: 'hsk1-01',
      hanzi: '爱',
      pinyin: 'ài',
      sinoVietnamese: 'Ái',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk1',
      unit: 1,
      meaning: 'Yêu, thích',
      exampleSentence: {
        chinese: '我爱学习中文。',
        pinyin: 'Wǒ ài xuéxí zhōngwén.',
        vietnamese: 'Tôi yêu thích việc học tiếng Trung.'
      }
    },
    {
      id: 'hsk1-02',
      hanzi: '朋友',
      pinyin: 'péngyou',
      sinoVietnamese: 'Bằng hữu',
      partOfSpeech: 'Danh từ',
      hskLevel: 'hsk1',
      unit: 1,
      meaning: 'Bạn bè, bạn thân',
      exampleSentence: {
        chinese: '他是我的好朋友。',
        pinyin: 'Tā shì wǒ de hǎo péngyou.',
        vietnamese: 'Cậu ấy là bạn tốt của tôi.'
      }
    },
    {
      id: 'hsk1-03',
      hanzi: '谢谢',
      pinyin: 'xièxie',
      sinoVietnamese: 'Tạ tạ',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk1',
      unit: 1,
      meaning: 'Cảm ơn',
      exampleSentence: {
        chinese: '太谢谢你了！',
        pinyin: 'Tài xièxie nǐ le!',
        vietnamese: 'Cảm ơn bạn rất nhiều!'
      }
    },
    {
      id: 'hsk1-04',
      hanzi: '学习',
      pinyin: 'xuéxí',
      sinoVietnamese: 'Học tập',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk1',
      unit: 2,
      meaning: 'Học, học tập, nghiên cứu',
      exampleSentence: {
        chinese: '我们在学校学习汉字。',
        pinyin: 'Wǒmen zài xuéxiào xuéxí hànzì.',
        vietnamese: 'Chúng tôi học chữ Hán ở trường.'
      }
    },
    {
      id: 'hsk1-05',
      hanzi: '老师',
      pinyin: 'lǎoshī',
      sinoVietnamese: 'Lão sư',
      partOfSpeech: 'Danh từ',
      hskLevel: 'hsk1',
      unit: 2,
      meaning: 'Thầy giáo, cô giáo',
      exampleSentence: {
        chinese: '王老师是我们的中文老师。',
        pinyin: 'Wáng lǎoshī shì wǒmen de zhōngwén lǎoshī.',
        vietnamese: 'Thầy Vương là giáo viên tiếng Trung của chúng tôi.'
      }
    },
    {
      id: 'hsk1-06',
      hanzi: '漂亮',
      pinyin: 'piàoliang',
      sinoVietnamese: 'Phiêu lượng',
      partOfSpeech: 'Tính từ',
      hskLevel: 'hsk1',
      unit: 2,
      meaning: 'Đẹp, xinh đẹp',
      exampleSentence: {
        chinese: '这件衣服真漂亮！',
        pinyin: 'Zhè jiàn yīfu zhēn piàoliang!',
        vietnamese: 'Bộ quần áo này thật xinh đẹp!'
      }
    },
    {
      id: 'hsk1-07',
      hanzi: '吃饭',
      pinyin: 'chīfàn',
      sinoVietnamese: 'Ngật phạn',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk1',
      unit: 3,
      meaning: 'Ăn cơm, dùng bữa',
      exampleSentence: {
        chinese: '你想跟我一起吃饭吗？',
        pinyin: 'Nǐ xiǎng gēn wǒ yìqǐ chīfàn ma?',
        vietnamese: 'Bạn có muốn cùng tôi đi ăn cơm không?'
      }
    },
    {
      id: 'hsk1-08',
      hanzi: '喝茶',
      pinyin: 'hēchá',
      sinoVietnamese: 'Hát trà',
      partOfSpeech: 'Cụm động từ',
      hskLevel: 'hsk1',
      unit: 3,
      meaning: 'Uống trà',
      exampleSentence: {
        chinese: '中国人很喜欢喝茶。',
        pinyin: 'Zhōngguó rén hěn xǐhuan hēchá.',
        vietnamese: 'Người Trung Quốc rất thích uống trà.'
      }
    },
    {
      id: 'hsk1-09',
      hanzi: '明天',
      pinyin: 'míngtiān',
      sinoVietnamese: 'Minh thiên',
      partOfSpeech: 'Danh từ thời gian',
      hskLevel: 'hsk1',
      unit: 3,
      meaning: 'Ngày mai',
      exampleSentence: {
        chinese: '明天下午我们去图书馆。',
        pinyin: 'Míngtiān xiàwǔ wǒmen qù túshūguǎn.',
        vietnamese: 'Chiều mai chúng ta đi thư viện nhé.'
      }
    },
    {
      id: 'hsk1-10',
      hanzi: '开心',
      pinyin: 'kāixīn',
      sinoVietnamese: 'Khai tâm',
      partOfSpeech: 'Tính từ',
      hskLevel: 'hsk1',
      unit: 4,
      meaning: 'Vui vẻ, hân hoan',
      exampleSentence: {
        chinese: '今天认识你我很开心。',
        pinyin: 'Jīntiān rènshi nǐ wǒ hěn kāixīn.',
        vietnamese: 'Hôm nay được quen biết bạn tôi rất vui.'
      }
    }
  ],
  hsk2: [
    {
      id: 'hsk2-01',
      hanzi: '准备',
      pinyin: 'zhǔnbèi',
      sinoVietnamese: 'Chuẩn bị',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk2',
      unit: 1,
      meaning: 'Chuẩn bị, dự định',
      exampleSentence: {
        chinese: '你准备好了吗？',
        pinyin: 'Nǐ zhǔnbèi hǎo le ma?',
        vietnamese: 'Bạn đã chuẩn bị xong chưa?'
      }
    },
    {
      id: 'hsk2-02',
      hanzi: '运动',
      pinyin: 'yùndòng',
      sinoVietnamese: 'Vận động',
      partOfSpeech: 'Danh từ/Động từ',
      hskLevel: 'hsk2',
      unit: 1,
      meaning: 'Thể thao, vận động',
      exampleSentence: {
        chinese: '多做运动对身体好。',
        pinyin: 'Duō zuò yùndòng duì shēntǐ hǎo.',
        vietnamese: 'Tập thể dục nhiều rất tốt cho sức khỏe.'
      }
    },
    {
      id: 'hsk2-03',
      hanzi: '希望',
      pinyin: 'xīwàng',
      sinoVietnamese: 'Hy vọng',
      partOfSpeech: 'Động từ/Danh từ',
      hskLevel: 'hsk2',
      unit: 2,
      meaning: 'Hy vọng, mong muốn',
      exampleSentence: {
        chinese: '我希望明天是个好天气。',
        pinyin: 'Wǒ xīwàng míngtiān shì gè hǎo tiānqì.',
        vietnamese: 'Tôi hy vọng ngày mai sẽ là một ngày thời tiết đẹp.'
      }
    }
  ],
  hsk3: [
    {
      id: 'hsk3-01',
      hanzi: '坚持',
      pinyin: 'jiānchí',
      sinoVietnamese: 'Kiên trì',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk3',
      unit: 1,
      meaning: 'Kiên trì, bền bỉ',
      exampleSentence: {
        chinese: '坚持每天练习，你一定能学好。',
        pinyin: 'Jiānchí měitiān liànxí, nǐ yídìng néng xuéhǎo.',
        vietnamese: 'Kiên trì luyện tập mỗi ngày, bạn nhất định sẽ học tốt.'
      }
    },
    {
      id: 'hsk3-02',
      hanzi: '环境',
      pinyin: 'huánjìng',
      sinoVietnamese: 'Hoàn cảnh / Môi trường',
      partOfSpeech: 'Danh từ',
      hskLevel: 'hsk3',
      unit: 1,
      meaning: 'Môi trường, hoàn cảnh xung quanh',
      exampleSentence: {
        chinese: '这里的学习环境很安静。',
        pinyin: 'Zhèlǐ de xuéxí huánjìng hěn ānjìng.',
        vietnamese: 'Môi trường học tập ở đây rất yên tĩnh.'
      }
    }
  ]
};
