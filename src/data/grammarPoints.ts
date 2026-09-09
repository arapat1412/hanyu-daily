import { GrammarPoint } from '../types';

export const SAMPLE_GRAMMAR: Record<string, GrammarPoint[]> = {
  hsk1: [
    {
      id: 'g-hsk1-01',
      title: 'Câu hỏi nghi vấn với 吗 (ma)',
      structure: 'Khẳng định + 吗？',
      pinyinStructure: 'Kěn-dìng + ma?',
      explanation: 'Thêm trợ từ nghi vấn 吗 vào cuối câu trần thuật để biến câu đó thành câu hỏi Có/Không (Yes/No Question).',
      hskLevel: 'hsk1',
      examples: [
        {
          chinese: '你是学生吗？',
          pinyin: 'Nǐ shì xuésheng ma?',
          vietnamese: 'Bạn có phải là học sinh không?'
        },
        {
          chinese: '中文难吗？',
          pinyin: 'Zhōngwén nán ma?',
          vietnamese: 'Tiếng Trung có khó không?'
        }
      ]
    },
    {
      id: 'g-hsk1-02',
      title: 'Trợ từ kết cấu 的 (de) biểu thị sở hữu',
      structure: 'Danh từ/Đại từ + 的 + Danh từ',
      pinyinStructure: 'N + de + N',
      explanation: 'Được dùng để liên kết người/vật sở hữu với vật bị sở hữu, tương đương với từ "của" trong tiếng Việt.',
      hskLevel: 'hsk1',
      examples: [
        {
          chinese: '这是我的书。',
          pinyin: 'Zhè shì wǒ de shū.',
          vietnamese: 'Đây là sách của tôi.'
        },
        {
          chinese: '老师的中文非常好。',
          pinyin: 'Lǎoshī de zhōngwén fēicháng hǎo.',
          vietnamese: 'Tiếng Trung của thầy giáo cực kỳ tốt.'
        }
      ]
    },
    {
      id: 'g-hsk1-03',
      title: 'Cấu trúc câu chữ 是 (shì)',
      structure: 'Chủ ngữ + 是 + Tân ngữ',
      pinyinStructure: 'Zhǔyǔ + shì + Bīnyǔ',
      explanation: 'Biểu thị sự phán đoán, tương đương với động từ "là" trong tiếng Việt. Thể phủ định dùng 不是 (bú shì).',
      hskLevel: 'hsk1',
      examples: [
        {
          chinese: '他是中国人。',
          pinyin: 'Tā shì zhōngguó rén.',
          vietnamese: 'Anh ấy là người Trung Quốc.'
        },
        {
          chinese: '我不是越南人。',
          pinyin: 'Wǒ bú shì yuènán rén.',
          vietnamese: 'Tôi không phải là người Việt Nam.'
        }
      ]
    }
  ],
  hsk2: [
    {
      id: 'g-hsk2-01',
      title: 'Cấu trúc so sánh 比 (bǐ)',
      structure: 'A + 比 + B + Tính từ',
      pinyinStructure: 'A + bǐ + B + Xíngróngcí',
      explanation: 'Dùng để so sánh giữa hai đối tượng A và B về một tính chất nào đó (A hơn B).',
      hskLevel: 'hsk2',
      examples: [
        {
          chinese: '今天比昨天冷。',
          pinyin: 'Jīntiān bǐ zuótiān lěng.',
          vietnamese: 'Hôm nay lạnh hơn hôm qua.'
        }
      ]
    }
  ]
};
