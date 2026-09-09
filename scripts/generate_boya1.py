# -*- coding: utf-8 -*-
"""
Script to generate src/data/boya1Data.ts
Complete, authentic vocabulary dataset for Giáo trình Hán ngữ Boya Sơ cấp 1 (30 lessons, 6 units).
"""
import os
import json
import csv

# Load hanviet mapping
hanviet_map = {}
if os.path.exists('data/dictionary-source/hanviet.csv'):
    with open('data/dictionary-source/hanviet.csv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) >= 2:
                char = row[0].strip()
                reading = row[1].strip().strip("[]'\" ")
                hanviet_map[char] = reading

def get_hanviet(hz):
    readings = [hanviet_map.get(c, c) for c in hz]
    return ' '.join(readings)

# Define 6 units
UNITS = [
    {
        "unit": 1,
        "title": "Làm quen – Giới thiệu bản thân",
        "titleZh": "结识与自我介绍",
        "description": "Các bài học nhập môn giúp làm quen, chào hỏi, giới thiệu quốc tịch, trường lớp và phương vị cơ bản.",
        "lessonRange": "Bài 1 – 5",
        "lessons": [1, 2, 3, 4, 5]
    },
    {
        "unit": 2,
        "title": "Thời gian – Sinh hoạt hằng ngày",
        "titleZh": "时间与日常生活",
        "description": "Cách nói giờ giấc, lịch trình học tập, số điện thoại, giá cả khi mua sắm và giới thiệu gia đình.",
        "lessonRange": "Bài 6 – 10",
        "lessons": [6, 7, 8, 9, 10]
    },
    {
        "unit": 3,
        "title": "Thời tiết – Hoạt động – Sở thích",
        "titleZh": "天气、活动与爱好",
        "description": "Miêu tả các mùa và thời tiết, hành động đang tiếp diễn, hỏi đường đi, màu sắc trang phục và ngày sinh nhật.",
        "lessonRange": "Bài 11 – 15",
        "lessons": [11, 12, 13, 14, 15]
    },
    {
        "unit": 4,
        "title": "Cuộc sống hằng ngày & Giao tiếp mở rộng",
        "titleZh": "日常生活与交际",
        "description": "Lên kế hoạch cuối tuần, văn hóa đến thăm nhà làm khách, thói quen sinh hoạt và thăm người ốm.",
        "lessonRange": "Bài 16 – 20",
        "lessons": [16, 17, 18, 19, 20]
    },
    {
        "unit": 5,
        "title": "Các tình huống sinh hoạt đa dạng",
        "titleZh": "丰富的生活情景",
        "description": "Tiệc tùng ăn uống, cảm cúm đi khám bệnh, thời lượng học tập, sắp xếp công việc và rèn luyện thân thể.",
        "lessonRange": "Bài 21 – 25",
        "lessons": [21, 22, 23, 24, 25]
    },
    {
        "unit": 6,
        "title": "Giao tiếp trong học tập & Đời sống thực tế",
        "titleZh": "学习与实际生活",
        "description": "Chuẩn bị thi cử, kế hoạch nghỉ hè về quê, đánh giá kết quả học tập, đặt vé du lịch và tham gia dạ hội liên hoan.",
        "lessonRange": "Bài 26 – 30",
        "lessons": [26, 27, 28, 29, 30]
    }
]

# Lessons metadata
LESSONS = [
    {"number": 1, "unit": 1, "titleZh": "你好", "titlePinyin": "Nǐ hǎo", "titleVi": "Xin chào"},
    {"number": 2, "unit": 1, "titleZh": "你是哪国人", "titlePinyin": "Nǐ shì nǎ guó rén", "titleVi": "Bạn là người nước nào"},
    {"number": 3, "unit": 1, "titleZh": "那是你的书吗", "titlePinyin": "Nà shì nǐ de shū ma", "titleVi": "Đó là sách của bạn phải không"},
    {"number": 4, "unit": 1, "titleZh": "图书馆在哪儿", "titlePinyin": "Túshūguǎn zài nǎr", "titleVi": "Thư viện ở đâu"},
    {"number": 5, "unit": 1, "titleZh": "在北京大学的东边", "titlePinyin": "Zài Běijīng Dàxué de dōngbian", "titleVi": "Ở phía đông Đại học Bắc Kinh"},
    
    {"number": 6, "unit": 2, "titleZh": "现在几点", "titlePinyin": "Xiànzài jǐ diǎn", "titleVi": "Bây giờ là mấy giờ"},
    {"number": 7, "unit": 2, "titleZh": "明天你有课吗", "titlePinyin": "Míngtiān nǐ yǒu kè ma", "titleVi": "Ngày mai bạn có tiết học không"},
    {"number": 8, "unit": 2, "titleZh": "你的电话号码是多少", "titlePinyin": "Nǐ de diànhuà hàomǎ shì duōshao", "titleVi": "Số điện thoại của bạn là bao nhiêu"},
    {"number": 9, "unit": 2, "titleZh": "多少钱一瓶", "titlePinyin": "Duōshao qián yì píng", "titleVi": "Bao nhiêu tiền một chai"},
    {"number": 10, "unit": 2, "titleZh": "你家有几口人", "titlePinyin": "Nǐ jiā yǒu jǐ kǒu rén", "titleVi": "Nhà bạn có mấy người"},

    {"number": 11, "unit": 3, "titleZh": "北京的冬天比较冷", "titlePinyin": "Běijīng de dōngtiān bǐjiào lěng", "titleVi": "Mùa đông ở Bắc Kinh khá lạnh"},
    {"number": 12, "unit": 3, "titleZh": "你在干什么呢", "titlePinyin": "Nǐ zài gànshénme ne", "titleVi": "Bạn đang làm gì thế"},
    {"number": 13, "unit": 3, "titleZh": "去图书馆怎么走", "titlePinyin": "Qù túshūguǎn zěnme zǒu", "titleVi": "Đến thư viện đi như thế nào"},
    {"number": 14, "unit": 3, "titleZh": "我喜欢浅颜色的", "titlePinyin": "Wǒ xǐhuan qiǎn yánsè de", "titleVi": "Tôi thích màu nhạt"},
    {"number": 15, "unit": 3, "titleZh": "明天是我朋友的生日", "titlePinyin": "Míngtiān shì wǒ péngyou de shēngrì", "titleVi": "Ngày mai là sinh nhật bạn tôi"},

    {"number": 16, "unit": 4, "titleZh": "周末你干什么", "titlePinyin": "Zhōumò nǐ gànshénme", "titleVi": "Cuối tuần bạn làm gì"},
    {"number": 17, "unit": 4, "titleZh": "做客（一）", "titlePinyin": "Zuòkè (yī)", "titleVi": "Làm khách (Phần 1)"},
    {"number": 18, "unit": 4, "titleZh": "做客（二）", "titlePinyin": "Zuòkè (èr)", "titleVi": "Làm khách (Phần 2)"},
    {"number": 19, "unit": 4, "titleZh": "现在习惯了", "titlePinyin": "Xiànzài xíguàn le", "titleVi": "Bây giờ đã quen rồi"},
    {"number": 20, "unit": 4, "titleZh": "看病人", "titlePinyin": "Kàn bìngrén", "titleVi": "Thăm người ốm"},

    {"number": 21, "unit": 5, "titleZh": "我喝了半斤白酒", "titlePinyin": "Wǒ hē le bàn jīn báijiǔ", "titleVi": "Tôi đã uống nửa cân rượu trắng"},
    {"number": 22, "unit": 5, "titleZh": "他感冒了", "titlePinyin": "Tā gǎnmào le", "titleVi": "Anh ấy bị cảm rồi"},
    {"number": 23, "unit": 5, "titleZh": "你学了多长时间汉语", "titlePinyin": "Nǐ xué le duō cháng shíjiān Hànyǔ", "titleVi": "Bạn học tiếng Trung được bao lâu rồi"},
    {"number": 24, "unit": 5, "titleZh": "你吃了早饭来找我", "titlePinyin": "Nǐ chī le zǎofàn lái zhǎo wǒ", "titleVi": "Bạn ăn sáng xong đến tìm tôi nhé"},
    {"number": 25, "unit": 5, "titleZh": "你得多锻炼锻炼了", "titlePinyin": "Nǐ děi duō duànliàn duànliàn le", "titleVi": "Bạn cần phải rèn luyện nhiều hơn rồi"},

    {"number": 26, "unit": 6, "titleZh": "快考试了", "titlePinyin": "Kuài kǎoshì le", "titleVi": "Sắp thi rồi"},
    {"number": 27, "unit": 6, "titleZh": "爸爸妈妈让我回家", "titlePinyin": "Bàba māma ràng wǒ huíjiā", "titleVi": "Bố mẹ bảo tôi về nhà"},
    {"number": 28, "unit": 6, "titleZh": "考得怎么样", "titlePinyin": "Kǎo de zěnmeyàng", "titleVi": "Thi cử thế nào"},
    {"number": 29, "unit": 6, "titleZh": "我们已经买好票了", "titlePinyin": "Wǒmen yǐjīng mǎihǎo piào le", "titleVi": "Chúng tôi đã mua vé xong rồi"},
    {"number": 30, "unit": 6, "titleZh": "我要参加一个中国学生的联欢会", "titlePinyin": "Wǒ yào cānjiā yí ge Zhōngguó xuésheng de liánhuānhuì", "titleVi": "Tôi muốn tham gia buổi liên hoan sinh viên Trung Quốc"}
]

# Raw vocabulary data per lesson
RAW_VOCAB = {
    1: [
        ("你", "nǐ", "Đại từ", "nhĩ", "Bạn, cậu, anh, chị", "你好吗？", "Nǐ hǎo ma?", "Bạn có khỏe không?"),
        ("好", "hǎo", "Tính từ", "hảo", "Tốt, đẹp, khỏe", "这本书很好。", "Zhè běn shū hěn hǎo.", "Quyển sách này rất tốt."),
        ("是", "shì", "Động từ", "thị", "Là, vâng, phải", "我是越南人。", "Wǒ shì Yuènánrén.", "Tôi là người Việt Nam."),
        ("老师", "lǎoshī", "Danh từ", "lão sư", "Thầy giáo, cô giáo", "王老师是我们的汉语老师。", "Wáng lǎoshī shì wǒmen de Hànyǔ lǎoshī.", "Thầy Vương là giáo viên tiếng Trung của chúng tôi."),
        ("吗", "ma", "Trợ từ", "ma", "Không, à (trợ từ nghi vấn cuối câu)", "你是学生吗？", "Nǐ shì xuésheng ma?", "Bạn là học sinh phải không?"),
        ("不", "bù", "Phó từ", "bất", "Không (phủ định)", "我不是老师。", "Wǒ bú shì lǎoshī.", "Tôi không phải là giáo viên."),
        ("我", "wǒ", "Đại từ", "ngã", "Tôi, tao, tớ, mình", "我是大学生。", "Wǒ shì dàxuéshēng.", "Tôi là sinh viên đại học."),
        ("学生", "xuésheng", "Danh từ", "học sinh", "Học sinh, sinh viên", "我们都是好学生。", "Wǒmen dōu shì hǎo xuésheng.", "Chúng tôi đều là học sinh chăm."),
        ("她", "tā", "Đại từ", "tha", "Cô ấy, bà ấy, chị ấy", "她是我的朋友。", "Tā shì wǒ de péngyou.", "Cô ấy là bạn của tôi."),
        ("谢谢", "xièxie", "Động từ", "tạ tạ", "Cảm ơn", "太谢谢你了！", "Tài xièxie nǐ le!", "Cảm ơn bạn rất nhiều!"),
        ("不客气", "bú kèqi", "Cụm từ", "bất khách khí", "Không có gì, đừng khách sáo", "不客气，这是我应该做的。", "Bú kèqi, zhè shì wǒ yīnggāi zuò de.", "Không có gì, đây là việc tôi nên làm."),
        ("您", "nín", "Đại từ", "nâm", "Ngài, ông, bà (kính ngữ của 你)", "您身体好吗？", "Nín shēntǐ hǎo ma?", "Sức khỏe bác dạo này tốt không ạ?"),
        ("留学生", "liúxuéshēng", "Danh từ", "lưu học sinh", "Du học sinh", "他在北京当留学生。", "Tā zài Běijīng dāng liúxuéshēng.", "Anh ấy đang làm lưu học sinh ở Bắc Kinh."),
        ("叫", "jiào", "Động từ", "khiếu", "Gọi là, tên là", "你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"),
        ("什么", "shénme", "Đại từ", "thập ma", "Cái gì, gì", "这是什么东西？", "Zhè shì shénme dōngxi?", "Đây là đồ vật gì thế?"),
        ("名字", "míngzi", "Danh từ", "danh tự", "Tên gọi", "他的名字很好听。", "Tā de míngzi hěn hǎotīng.", "Tên của anh ấy nghe rất hay.")
    ],
    2: [
        ("哪", "nǎ", "Đại từ", "nả", "Nào, đâu", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"),
        ("国", "guó", "Danh từ", "quốc", "Nước, quốc gia", "中国很大。", "Zhōngguó hěn dà.", "Trung Quốc rất rộng lớn."),
        ("人", "rén", "Danh từ", "nhân", "Người", "他是北京人。", "Tā shì Běijīng rén.", "Anh ấy là người Bắc Kinh."),
        ("同学", "tóngxué", "Danh từ", "đồng học", "Bạn cùng lớp, bạn học", "他们都是我的大学同学。", "Tāmen dōu shì wǒ de dàxué tóngxué.", "Họ đều là bạn đại học của tôi."),
        ("们", "men", "Hậu tố", "môn", "Các, chúng (chỉ số nhiều người)", "同学们好！", "Tóngxuémen hǎo!", "Chào các bạn học sinh!"),
        ("来", "lái", "Động từ", "lai", "Đến, tới; lại đây", "他明天来学校。", "Tā míngtiān lái xuéxiào.", "Ngày mai cậu ấy sẽ đến trường."),
        ("介绍", "jièshào", "Động từ", "giới thiệu", "Giới thiệu", "我来介绍一下。", "Wǒ lái jièshào yíxià.", "Để tôi giới thiệu một chút nhé."),
        ("一下儿", "yíxiàr", "Lượng từ", "nhất hạ nhi", "Một chút, một lát", "请等我一下儿。", "Qǐng děng wǒ yíxiàr.", "Xin hãy đợi tôi một lát."),
        ("姓", "xìng", "Động từ/Danh từ", "tính", "Mang họ, họ", "您贵姓？我姓王。", "Nín guì xìng? Wǒ xìng Wáng.", "Xin hỏi quý danh của ngài? Tôi họ Vương."),
        ("的", "de", "Trợ từ", "đích", "Của (trợ từ sở hữu)", "这是我的书。", "Zhè shì wǒ de shū.", "Đây là sách của tôi."),
        ("他", "tā", "Đại từ", "tha", "Anh ấy, ông ấy, cậu ấy", "他是美国人。", "Tā shì Měiguórén.", "Anh ấy là người Mỹ."),
        ("认识", "rènshi", "Động từ", "nhận thức", "Quen biết, hiểu biết", "认识你很高兴。", "Rènshi nǐ hěn gāoxìng.", "Rất vui được làm quen với bạn."),
        ("很", "hěn", "Phó từ", "ngận", "Rất, quá", "今天天气很好。", "Jīntiān tiānqì hěn hǎo.", "Hôm nay thời tiết rất đẹp."),
        ("高兴", "gāoxìng", "Tính từ", "cao hứng", "Vui mừng, phấn khởi", "大家都很高兴。", "Dàjiā dōu hěn gāoxìng.", "Mọi người đều rất vui vẻ."),
        ("也", "yě", "Phó từ", "dã", "Cũng", "我也是大学生。", "Wǒ yě shì dàxuéshēng.", "Tôi cũng là sinh viên đại học."),
        ("呢", "ne", "Trợ từ", "ni", "Còn... thì sao? (trợ từ ngữ khí)", "我是越南人，你呢？", "Wǒ shì Yuènánrén, nǐ ne?", "Tôi là người Việt Nam, còn bạn thì sao?")
    ],
    3: [
        ("那", "nà", "Đại từ", "na", "Kia, đó", "那是谁的车？", "Nà shì shéi de chē?", "Kia là xe của ai thế?"),
        ("书", "shū", "Danh từ", "thư", "Sách", "我喜欢看汉语书。", "Wǒ xǐhuan kàn Hànyǔ shū.", "Tôi thích đọc sách tiếng Hán."),
        ("谁", "shéi / shuí", "Đại từ", "thùy", "Ai", "谁是你的同屋？", "Shéi shì nǐ de tóngwū?", "Ai là bạn cùng phòng của bạn?"),
        ("同屋", "tóngwū", "Danh từ", "đồng ốc", "Bạn cùng phòng", "我和我的同屋关系很好。", "Wǒ hé wǒ de tóngwū guānxi hěn hǎo.", "Tôi và bạn cùng phòng có quan hệ rất tốt."),
        ("汉语", "Hànyǔ", "Danh từ", "Hán ngữ", "Tiếng Trung, tiếng Hán", "汉语不难，汉字很难。", "Hànyǔ bù nán, Hànzì hěn nán.", "Tiếng Hán không khó, chữ Hán rất khó."),
        ("课本", "kèběn", "Danh từ", "khóa bản", "Sách giáo khoa, giáo trình", "这是我们的博雅课本。", "Zhè shì wǒmen de Bóyǎ kèběn.", "Đây là giáo trình Boya của chúng tôi."),
        ("词典", "cídiǎn", "Danh từ", "từ điển", "Từ điển", "这本汉越词典很有用。", "Zhè běn Hàn-Yuè cídiǎn hěn yǒuyòng.", "Quyển từ điển Hán - Việt này rất hữu dụng."),
        ("就是", "jiùshì", "Phó từ", "tựu thị", "Chính là, đúng là", "那位老师就是王老师。", "Nà wèi lǎoshī jiùshì Wáng lǎoshī.", "Vị giáo viên kia chính là thầy Vương."),
        ("这", "zhè", "Đại từ", "giá", "Đây, này", "这是你的手机吗？", "Zhè shì nǐ de shǒujī ma?", "Đây có phải điện thoại của bạn không?"),
        ("杂志", "zázhì", "Danh từ", "tạp chí", "Tạp chí, báo chí", "桌子上有一本杂志。", "Zhuōzi shang yǒu yì běn zázhì.", "Trên bàn có một cuốn tạp chí."),
        ("音乐", "yīnyuè", "Danh từ", "âm nhạc", "Âm nhạc", "我喜欢听中国音乐。", "Wǒ xǐhuan tīng Zhōngguó yīnyuè.", "Tôi thích nghe nhạc Trung Quốc."),
        ("朋友", "péngyou", "Danh từ", "bằng hữu", "Bạn bè", "他是我的好朋友。", "Tā shì wǒ de hǎo péngyou.", "Cậu ấy là bạn tốt của tôi."),
        ("日语", "Rìyǔ", "Danh từ", "Nhật ngữ", "Tiếng Nhật", "他会说英语和日语。", "Tā huì shuō Yīngyǔ hé Rìyǔ.", "Anh ấy biết nói tiếng Anh và tiếng Nhật."),
        ("磁带", "cídài", "Danh từ", "từ đới", "Băng từ, băng cassette", "这是一盘汉语听力磁带。", "Zhè shì yì pán Hànyǔ tīnglì cídài.", "Đây là một cuốn băng nghe tiếng Hán.")
    ],
    4: [
        ("请问", "qǐngwèn", "Động từ", "thỉnh vấn", "Xin hỏi, làm ơn cho hỏi", "请问，洗手间在哪儿？", "Qǐngwèn, xǐshǒujiān zài nǎr?", "Xin hỏi, nhà vệ sinh ở đâu vậy?"),
        ("图书馆", "túshūguǎn", "Danh từ", "đồ thư quán", "Thư viện", "我常去图书馆借书。", "Wǒ cháng qù túshūguǎn jiè shū.", "Tôi thường đến thư viện mượn sách."),
        ("在", "zài", "Giới từ/Động từ", "tại", "Ở, tại; đang", "图书馆在学校东边。", "Túshūguǎn zài xuéxiào dōngbian.", "Thư viện nằm ở phía đông của trường."),
        ("哪儿", "nǎr", "Đại từ", "nả nhi", "Ở đâu, chỗ nào", "你在哪儿学习汉语？", "Nǐ zài nǎr xuéxí Hànyǔ?", "Bạn học tiếng Hán ở đâu?"),
        ("教学", "jiàoxué", "Danh từ/Động từ", "giáo học", "Giảng dạy, dạy học", "这是学校的教学楼。", "Zhè shì xuéxiào de jiàoxuélóu.", "Đây là tòa nhà giảng đường của trường."),
        ("楼", "lóu", "Danh từ", "lâu", "Tòa nhà, tầng, lầu", "他在三楼上课。", "Tā zài sān lóu shàngkè.", "Cậu ấy học ở tầng ba."),
        ("宿舍", "sùshè", "Danh từ", "túc xá", "Ký túc xá", "留学生宿舍很干净。", "Liúxuéshēng sùshè hěn gānjìng.", "Ký túc xá du học sinh rất sạch sẽ."),
        ("北边", "běibian", "Danh từ", "bắc biên", "Phía bắc, bên bắc", "宿舍楼在北边。", "Sùshèlóu zài běibian.", "Tòa ký túc xá nằm ở phía bắc."),
        ("左边", "zuǒbian", "Danh từ", "tả biên", "Bên trái, phía trái", "图书馆在左边。", "Túshūguǎn zài zuǒbian.", "Thư viện ở phía bên trái."),
        ("右边", "yòubian", "Danh từ", "hữu biên", "Bên phải, phía phải", "食堂在右边。", "Shítáng zài yòubian.", "Nhà ăn ở phía bên phải."),
        ("旁边", "pángbiān", "Danh từ", "bàng biên", "Bên cạnh", "我家在学校旁边。", "Wǒ jiā zài xuéxiào pángbiān.", "Nhà tôi ở ngay cạnh trường học."),
        ("知道", "zhīdào", "Động từ", "tri đạo", "Biết, hiểu rõ", "你不知道这件事情吗？", "Nǐ bù zhīdào zhè jiàn shìqing ma?", "Cậu không biết chuyện này sao?"),
        ("没关系", "méi guānxi", "Cụm từ", "một quan hệ", "Không sao, không hề gì", "没关系，慢慢来。", "Méi guānxi, mànman lái.", "Không sao cả, cứ thong thả thôi."),
        ("不用", "búyòng", "Phó từ", "bất dụng", "Không cần", "不用谢，这是我顺路带的。", "Búyòng xiè, zhè shì wǒ shùnlù dài de.", "Không cần cảm ơn đâu, tiện đường tôi mang giúp thôi.")
    ],
    5: [
        ("东边", "dōngbian", "Danh từ", "đông biên", "Phía đông", "太阳从东边升起。", "Tàiyáng cóng dōngbian shēngqǐ.", "Mặt trời mọc từ phía đông."),
        ("西边", "xībian", "Danh từ", "tây biên", "Phía tây", "西边有一家大超市。", "Xībian yǒu yì jiā dà chāoshì.", "Phía tây có một siêu thị lớn."),
        ("南边", "nánbian", "Danh từ", "nam biên", "Phía nam", "南方冬天不太冷。", "Nánfāng dōngtiān bú tài lěng.", "Mùa đông ở miền nam không quá lạnh."),
        ("前边", "qiánbian", "Danh từ", "tiền biên", "Phía trước", "前边就是地铁站。", "Qiánbian jiùshì dìtiězhàn.", "Phía trước chính là ga tàu điện ngầm."),
        ("后边", "hòubian", "Danh từ", "hậu biên", "Phía sau", "教学楼后边是一个操场。", "Jiàoxuélóu hòubian shì yí ge cāochǎng.", "Phía sau giảng đường là sân vận động."),
        ("专业", "zhuānyè", "Danh từ", "chuyên nghiệp", "Chuyên ngành", "你的专业是什么？", "Nǐ de zhuānyè shì shénme?", "Chuyên ngành của bạn là gì?"),
        ("国际", "guójì", "Tính từ/Danh từ", "quốc tế", "Quốc tế", "他学国际关系专业。", "Tā xué guójì guānxi zhuānyè.", "Anh ấy học chuyên ngành quan hệ quốc tế."),
        ("关系", "guānxi", "Danh từ", "quan hệ", "Mối quan hệ, liên quan", "他们俩的关系很好。", "Tāmen liǎ de guānxi hěn hǎo.", "Mối quan hệ của hai người bọn họ rất tốt."),
        ("中文", "Zhōngwén", "Danh từ", "Trung văn", "Tiếng Trung, tiếng Hoa", "中文很有意思。", "Zhōngwén hěn yǒu yìsi.", "Tiếng Trung rất thú vị."),
        ("系", "xì", "Danh từ", "hệ", "Khoa (trong trường đại học)", "他是中文系的学生。", "Tā shì Zhōngwén xì de xuésheng.", "Anh ấy là sinh viên của khoa tiếng Trung."),
        ("研究生", "yánjiūshēng", "Danh từ", "nghiên cứu sinh", "Học viên cao học, nghiên cứu sinh", "他正在北京大学读研究生。", "Tā zhèngzài Běijīng Dàxué dú yánjiūshēng.", "Anh ấy đang học thạc sĩ tại Đại học Bắc Kinh."),
        ("现代", "xiàndài", "Tính từ/Danh từ", "hiện đại", "Hiện đại", "我很喜欢中国现代文学。", "Wǒ hěn xǐhuan Zhōngguó xiàndài wénxué.", "Tôi rất thích văn học hiện đại Trung Quốc."),
        ("文学", "wénxué", "Danh từ", "văn học", "Văn học", "鲁迅是中国著名的文学家。", "Lǔ Xùn shì Zhōngguó zhùmíng de wénxuéjiā.", "Lỗ Tấn là một nhà văn nổi tiếng của Trung Quốc."),
        ("有", "yǒu", "Động từ", "hữu", "Có", "你明天有时间吗？", "Nǐ míngtiān yǒu shíjiān ma?", "Ngày mai bạn có thời gian không?"),
        ("空儿", "kòngr", "Danh từ", "không nhi", "Thời gian rảnh, lúc rỗi", "今天下午你有空儿吗？", "Jīntiān xiàwǔ nǐ yǒu kòngr ma?", "Chiều nay cậu có rảnh không?"),
        ("时候", "shíhou", "Danh từ", "thời hậu", "Khi, lúc, thời gian", "你什么时候来找我？", "Nǐ shénme shíhou lái zhǎo wǒ?", "Khi nào bạn tới tìm tôi?"),
        ("欢迎", "huānyíng", "Động từ", "hoan nghênh", "Hoan nghênh, chào đón", "欢迎你来我家玩儿！", "Huānyíng nǐ lái wǒ jiā wánr!", "Chào đón bạn tới nhà tôi chơi!"),
        ("去", "qù", "Động từ", "khứ", "Đi, đến", "我们一起去食堂吃饭吧。", "Wǒmen yìqǐ qù shítáng chīfàn ba.", "Chúng mình cùng đến nhà ăn dùng bữa nhé."),
        ("玩儿", "wánr", "Động từ", "ngoạn nhi", "Chơi, vui chơi", "周末你想去哪儿玩儿？", "Zhōumò nǐ xiǎng qù nǎr wánr?", "Cuối tuần bạn muốn đi đâu chơi?"),
        ("对", "duì", "Tính từ/Giới từ", "đối", "Đúng; đối với", "你说得很对。", "Nǐ shuō de hěn duì.", "Bạn nói rất đúng.")
    ],
    6: [
        ("点", "diǎn", "Lượng từ/Danh từ", "điểm", "Giờ (thời gian)", "现在是早上八点。", "Xiànzài shì zǎoshang bā diǎn.", "Bây giờ là tám giờ sáng."),
        ("分", "fēn", "Lượng từ", "phân", "Phút", "差五分九点。", "Chà wǔ fēn jiǔ diǎn.", "Chín giờ kém năm phút."),
        ("半", "bàn", "Số từ", "bán", "Nửa, rưỡi (30 phút)", "现在是七点半。", "Xiànzài shì qī diǎn bàn.", "Bây giờ là bảy giờ rưỡi."),
        ("差", "chà", "Động từ/Tính từ", "sai", "Kém, thiếu; tệ", "差一刻十点。", "Chà yí kè shí diǎn.", "Mười giờ kém mười lăm phút."),
        ("刻", "kè", "Lượng từ", "khắc", "Khắc (15 phút)", "三点一刻我们在校门见。", "Sān diǎn yí kè wǒmen zài xiàomén jiàn.", "Ba giờ mười lăm chúng ta gặp nhau ở cổng trường."),
        ("现在", "xiànzài", "Danh từ", "hiện tại", "Bây giờ, hiện nay", "现在几点了？", "Xiànzài jǐ diǎn le?", "Bây giờ là mấy giờ rồi?"),
        ("早上", "zǎoshang", "Danh từ", "tảo thượng", "Buổi sáng sớm", "我早上六点起床。", "Wǒ zǎoshang liù diǎn qǐchuáng.", "Tôi thức dậy lúc sáu giờ sáng."),
        ("上午", "shàngwǔ", "Danh từ", "thượng ngọ", "Buổi sáng (từ 8h - 12h)", "上午我有两节汉语课。", "Shàngwǔ wǒ yǒu liǎng jié Hànyǔ kè.", "Buổi sáng tôi có hai tiết tiếng Hán."),
        ("中午", "zhōngwǔ", "Danh từ", "trung ngọ", "Buổi trưa (12h - 13h)", "中午我们一起吃饺子。", "Zhōngwǔ wǒmen yìqǐ chī jiǎozi.", "Buổi trưa chúng mình cùng ăn sủi cảo nhé."),
        ("下午", "xiàwǔ", "Danh từ", "hạ ngọ", "Buổi chiều", "下午三点半下课。", "Xiàwǔ sān diǎn bàn xiàkè.", "Chiều ba giờ rưỡi tan học."),
        ("晚上", "wǎnshang", "Danh từ", "vãn thượng", "Buổi tối", "晚上我常复习生词。", "Wǎnshang wǒ cháng fùxí shēngcí.", "Buổi tối tôi thường ôn tập từ mới."),
        ("几", "jǐ", "Đại từ", "kỷ", "Mấy (dưới 10)", "你今天有几节课？", "Nǐ jīntiān yǒu jǐ jié kè?", "Hôm nay bạn có mấy tiết học?"),
        ("上课", "shàngkè", "Động từ", "thượng khóa", "Lên lớp, vào học", "老师来了，我们上课吧。", "Lǎoshī lái le, wǒmen shàngkè ba.", "Cô giáo vào rồi, chúng ta bắt đầu bài học thôi."),
        ("下课", "xiàkè", "Động từ", "hạ khóa", "Tan học, kết thúc bài học", "十二点准时下课。", "Shí'èr diǎn zhǔnshí xiàkè.", "Mười hai giờ tan học đúng giờ."),
        ("开始", "kāishǐ", "Động từ/Danh từ", "khai thủy", "Bắt đầu", "电影八点开始。", "Diànyǐng bā diǎn kāishǐ.", "Bộ phim bắt đầu lúc tám giờ."),
        ("讲座", "jiǎngzuò", "Danh từ", "giảng tọa", "Buổi diễn thuyết, tọa đàm", "明天下午有一个文学讲座。", "Míngtiān xiàwǔ yǒu yí ge wénxué jiǎngzuò.", "Chiều mai có một buổi tọa đàm văn học."),
        ("一会儿", "yíhuìr", "Danh từ", "nhất hội nhi", "Một lát, một chốc", "休息一会儿再做吧。", "Xiūxi yíhuìr zài zuò ba.", "Nghỉ ngơi một lát rồi làm tiếp nhé."),
        ("见", "jiàn", "Động từ", "kiến", "Gặp, thấy", "明天见！", "Míngtiān jiàn!", "Hẹn ngày mai gặp lại!")
    ],
    7: [
        ("明天", "míngtiān", "Danh từ", "minh thiên", "Ngày mai", "明天是星期六。", "Míngtiān shì xīngqīliù.", "Ngày mai là thứ bảy."),
        ("今天", "jīntiān", "Danh từ", "kim thiên", "Hôm nay", "今天天气非常晴朗。", "Jīntiān tiānqì fēicháng qínglǎng.", "Hôm nay trời nắng rất đẹp."),
        ("昨天", "zuótiān", "Danh từ", "tạc thiên", "Hôm qua", "昨天你去了哪儿？", "Zuótiān nǐ qù le nǎr?", "Hôm qua bạn đã đi đâu thế?"),
        ("课", "kè", "Danh từ", "khóa", "Bài học, tiết học, môn học", "明天你没有课吗？", "Míngtiān nǐ méiyǒu kè ma?", "Ngày mai cậu không có tiết học nào à?"),
        ("星期", "xīngqī", "Danh từ", "tinh kỳ", "Tuần lễ, thứ", "一个星期有七天。", "Yí ge xīngqī yǒu qī tiān.", "Một tuần có bảy ngày."),
        ("没有", "méiyǒu", "Động từ/Phó từ", "một hữu", "Không có, chưa", "我没有自行车。", "Wǒ méiyǒu zìxíngchē.", "Tôi không có xe đạp."),
        ("自行车", "zìxíngchē", "Danh từ", "tự hành xa", "Xe đạp", "我骑自行车去上学。", "Wǒ qí zìxíngchē qù shàngxué.", "Tôi đạp xe đạp đi học."),
        ("事", "shì", "Danh từ", "sự", "Việc, chuyện, sự việc", "你找我有什么事？", "Nǐ zhǎo wǒ yǒu shénme shì?", "Cậu tìm tớ có việc gì thế?"),
        ("可是", "kěshì", "Liên từ", "khả thị", "Nhưng, nhưng mà", "我很想去，可是没有空儿。", "Wǒ hěn xiǎng qù, kěshì méiyǒu kòngr.", "Tôi rất muốn đi, nhưng lại không rảnh."),
        ("电影", "diànyǐng", "Danh từ", "điện ảnh", "Phim, điện ảnh", "那部电影非常好看。", "Nà bù diànyǐng fēicháng hǎokàn.", "Bộ phim đó xem rất hay."),
        ("听", "tīng", "Động từ", "thính", "Nghe", "你在听什么音乐？", "Nǐ zài tīng shénme yīnyuè?", "Bạn đang nghe nhạc gì thế?"),
        ("广播", "guǎngbō", "Danh từ/Động từ", "quảng bá", "Phát thanh, đài truyền thanh", "每天早上我都听汉语广播。", "Měitiān zǎoshang wǒ dōu tīng Hànyǔ guǎngbō.", "Mỗi buổi sáng tôi đều nghe đài tiếng Hán."),
        ("贵", "guì", "Tính từ", "quý", "Đắt, quý báu", "这件衣服太贵了。", "Zhè jiàn yīfu tài guì le.", "Bộ quần áo này đắt quá."),
        ("便宜", "piányi", "Tính từ", "tiện nghi", "Rẻ, giá phải chăng", "水果在市场买比较便宜。", "Shuǐguǒ zài shìchǎng mǎi bǐjiào piányi.", "Mua trái cây ở chợ thì tương đối rẻ.")
    ],
    8: [
        ("电话", "diànhuà", "Danh từ", "điện thoại", "Điện thoại, cuộc gọi", "请给我打电话。", "Qǐng gěi wǒ dǎ diànhuà.", "Làm ơn gọi điện thoại cho tôi nhé."),
        ("号码", "hàomǎ", "Danh từ", "hiệu mã", "Số, mã số", "你的门牌号码是多少？", "Nǐ de ménpái hàomǎ shì duōshao?", "Số nhà của bạn là bao nhiêu?"),
        ("多少", "duōshao", "Đại từ", "đa thiếu", "Bao nhiêu (trên 10)", "请问这台电脑多少钱？", "Qǐngwèn zhè tái diànnǎo duōshao qián?", "Xin hỏi chiếc máy vi tính này giá bao nhiêu tiền?"),
        ("手机", "shǒujī", "Danh từ", "thủ cơ", "Điện thoại di động", "我的手机没电了。", "Wǒ de shǒujī méi diàn le.", "Điện thoại của tôi hết pin rồi."),
        ("周末", "zhōumò", "Danh từ", "chu mạt", "Cuối tuần", "周末你通常做什么？", "Zhōumò nǐ tōngcháng zuò shénme?", "Cuối tuần bạn thường làm gì?"),
        ("怎么", "zěnme", "Đại từ", "chẩm ma", "Như thế nào, làm sao", "去故宫怎么走？", "Qù Gùgōng zěnme zǒu?", "Đi đến Cố Cung đi như thế nào?"),
        ("走", "zǒu", "Động từ", "tẩu", "Đi, bước đi, rời đi", "我们走路去学校吧。", "Wǒmen zǒulù qù xuéxiào ba.", "Chúng mình đi bộ đến trường đi."),
        ("和", "hé", "Liên từ", "hòa", "Và, cùng với", "我和小王是同班同学。", "Wǒ hé Xiǎo Wáng shì tóngbān tóngxué.", "Tôi và Tiểu Vương là bạn cùng lớp."),
        ("路", "lù", "Danh từ/Lượng từ", "lộ", "Tuyến xe buýt, con đường", "坐332路公共汽车可以到。", "Zuò sān-sān-èr lù gōnggòng qìchē kěyǐ dào.", "Đi tuyến xe buýt 332 là có thể tới."),
        ("公共汽车", "gōnggòng qìchē", "Danh từ", "công cộng khí xa", "Xe buýt", "北京的公共汽车很方便。", "Běijīng de gōnggòng qìchē hěn fāngbiàn.", "Xe buýt ở Bắc Kinh rất thuận tiện."),
        ("地铁", "dìtiě", "Danh từ", "địa thiết", "Tàu điện ngầm", "坐地铁又快又便宜。", "Zuò dìtiě yòu kuài yòu piányi.", "Đi tàu điện ngầm vừa nhanh vừa rẻ."),
        ("坐", "zuò", "Động từ", "tọa", "Ngồi; đi (xe, tàu, máy bay)", "请坐，别客气。", "Qǐng zuò, bié kèqi.", "Mời ngồi, đừng khách sáo."),
        ("骑", "qí", "Động từ", "kị", "Cưỡi, chạy (xe đạp, xe máy, ngựa)", "他骑自行车去超市。", "Tā qí zìxíngchē qù chāoshì.", "Anh ấy đạp xe đạp tới siêu thị."),
        ("打车", "dǎchē", "Động từ", "đả xa", "Bắt taxi, gọi xe", "下雨了，我们打车回去吧。", "Xiàyǔ le, wǒmen dǎchē huíqù ba.", "Mưa rồi, chúng mình bắt taxi về đi.")
    ],
    9: [
        ("钱", "qián", "Danh từ", "tiền", "Tiền bạc", "这本书要多少钱？", "Zhè běn shū yào duōshao qián?", "Quyển sách này cần bao nhiêu tiền?"),
        ("块", "kuài", "Lượng từ", "khối", "Đồng (đơn vị tiền tệ khẩu ngữ)", "一斤苹果五块钱。", "Yì jīn píngguǒ wǔ kuài qián.", "Một cân táo giá năm tệ."),
        ("元", "yuán", "Lượng từ", "nguyên", "Đồng, tệ (văn viết)", "一共是一百元人民币。", "Yígòng shì yìbǎi yuán rénmínbì.", "Tổng cộng là 100 nhân dân tệ."),
        ("毛", "máo", "Lượng từ", "mao", "Hào (khẩu ngữ = 1/10 đồng)", "这瓶水两块五毛。", "Zhè píng shuǐ liǎng kuài wǔ máo.", "Chai nước này hai tệ năm hào."),
        ("角", "jiǎo", "Lượng từ", "giác", "Hào (văn viết)", "三元八角。", "Sān yuán bā jiǎo.", "Ba đồng tám hào."),
        ("瓶", "píng", "Lượng từ/Danh từ", "bình", "Chai, bình, lọ", "我想买一瓶可乐。", "Wǒ xiǎng mǎi yì píng kělè.", "Tôi muốn mua một chai Coca."),
        ("斤", "jīn", "Lượng từ", "cân", "Cân Trung Quốc (bằng 500g)", "买两斤香蕉吧。", "Mǎi liǎng jīn xiāngjiāo ba.", "Mua hai cân chuối đi."),
        ("苹果", "píngguǒ", "Danh từ", "bình quả", "Quả táo", "红苹果很甜。", "Hóng píngguǒ hěn tián.", "Quả táo đỏ rất ngọt."),
        ("啤酒", "píjiǔ", "Danh từ", "bia tửu", "Bia", "青岛啤酒很有名。", "Qīngdǎo píjiǔ hěn yǒumíng.", "Bia Thanh Đảo rất nổi tiếng."),
        ("水", "shuǐ", "Danh từ", "thủy", "Nước", "多喝热水对身体好。", "Duō hē rè shuǐ duì shēntǐ hǎo.", "Uống nhiều nước ấm rất tốt cho sức khỏe."),
        ("矿泉水", "kuàngquánshuǐ", "Danh từ", "khoáng tuyền thủy", "Nước khoáng", "给我来一瓶矿泉水。", "Gěi wǒ lái yì píng kuàngquánshuǐ.", "Cho tôi một chai nước khoáng nhé."),
        ("买", "mǎi", "Động từ", "mãi", "Mua", "你想买什么东西？", "Nǐ xiǎng mǎi shénme dōngxi?", "Bạn muốn mua đồ gì?"),
        ("卖", "mài", "Động từ", "mại", "Bán", "这里卖新鲜水果。", "Zhèlǐ mài xīnxiān shuǐguǒ.", "Ở đây có bán trái cây tươi ngon."),
        ("一共", "yígòng", "Phó từ", "nhất cộng", "Tổng cộng, tất cả", "一共多少钱？", "Yígòng duōshao qián?", "Tổng cộng hết bao nhiêu tiền?"),
        ("找", "zhǎo", "Động từ", "trảo", "Tìm kiếm; thối tiền thừa", "找您两块钱。", "Zhǎo nín liǎng kuài qián.", "Thối lại ngài hai đồng tiền thừa.")
    ],
    10: [
        ("家", "jiā", "Danh từ", "gia", "Nhà, gia đình", "我家在河内。", "Wǒ jiā zài Hénèi.", "Nhà tôi ở Hà Nội."),
        ("口", "kǒu", "Lượng từ", "khẩu", "Lượng từ chỉ số người trong gia đình", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"),
        ("爸爸", "bàba", "Danh từ", "bá ba", "Bố, ba, cha", "我爸爸是工程师。", "Wǒ bàba shì gōngchéngshī.", "Bố tôi là kỹ sư."),
        ("妈妈", "māma", "Danh từ", "ma ma", "Mẹ, má", "妈妈做的菜最好吃。", "Māma zuò de cài zuì hǎochī.", "Cơm mẹ nấu là ngon nhất."),
        ("哥哥", "gēge", "Danh từ", "ca ca", "Anh trai", "我哥哥在银行工作。", "Wǒ gēge zài yínháng gōngzuò.", "Anh trai tôi làm việc ở ngân hàng."),
        ("姐姐", "jiějie", "Danh từ", "tỷ tỷ", "Chị gái", "我姐姐是一名护士。", "Wǒ jiějie shì yì míng hùshi.", "Chị gái tôi là một y tá."),
        ("弟弟", "dìdi", "Danh từ", "đệ đệ", "Em trai", "弟弟今年上高中。", "Dìdi jīnnián shàng gāozhōng.", "Em trai tôi năm nay học cấp ba."),
        ("妹妹", "mèimei", "Danh từ", "muội muội", "Em gái", "我妹妹很喜欢唱歌。", "Wǒ mèimei hěn xǐhuan chànggē.", "Em gái tôi rất thích ca hát."),
        ("爷爷", "yéye", "Danh từ", "gia gia", "Ông nội", "爷爷今年七十岁了。", "Yéye jīnnián qīshí suì le.", "Ông nội năm nay 70 tuổi rồi."),
        ("奶奶", "nǎinai", "Danh từ", "nãi nãi", "Bà nội", "奶奶身体非常健康。", "Nǎinai shēntǐ fēicháng jiànkāng.", "Bà nội sức khỏe rất dẻo dai."),
        ("孩子", "háizi", "Danh từ", "hài tử", "Con cái, đứa trẻ", "院子里有几个小孩子。", "Yuànzi lǐ yǒu jǐ ge xiǎo háizi.", "Trong sân có mấy đứa trẻ con."),
        ("工作", "gōngzuò", "Động từ/Danh từ", "công tác", "Làm việc; công việc", "你在哪儿工作？", "Nǐ zài nǎr gōngzuò?", "Bạn làm việc ở đâu?"),
        ("做", "zuò", "Động từ", "tố", "Làm, chế tạo", "你在做什么呢？", "Nǐ zài zuò shénme ne?", "Cậu đang làm gì vậy?"),
        ("医生", "yīshēng", "Danh từ", "y sinh", "Bác sĩ", "李医生在医院工作。", "Lǐ yīshēng zài yīyuàn gōngzuò.", "Bác sĩ Lý làm việc ở bệnh viện."),
        ("护士", "hùshi", "Danh từ", "hộ sĩ", "Y tá", "那所医院的护士很细心。", "Nà suǒ yīyuàn de hùshi hěn xìxīn.", "Y tá của bệnh viện đó rất chu đáo."),
        ("职员", "zhíyuán", "Danh từ", "chức viên", "Nhân viên công ty, viên chức", "他是外企的职员。", "Tā shì wàiqǐ de zhíyuán.", "Anh ấy là nhân viên doanh nghiệp nước ngoài."),
        ("岁", "suì", "Lượng từ", "tuế", "Tuổi", "你今年多大岁数？", "Nǐ jīnnián duō dà suìshu?", "Năm nay bác bao nhiêu tuổi rồi ạ?")
    ],
    11: [
        ("天气", "tiānqì", "Danh từ", "thiên khí", "Thời tiết", "今天天气真不错。", "Jīntiān tiānqì zhēn búcuò.", "Thời tiết hôm nay thật dễ chịu."),
        ("季节", "jìjié", "Danh từ", "quý tiết", "Mùa trong năm", "一年有四个季节。", "Yì nián yǒu sì ge jìjié.", "Một năm có bốn mùa."),
        ("春天", "chūntiān", "Danh từ", "xuân thiên", "Mùa xuân", "春天百花盛开。", "Chūntiān bǎihuā shèngkāi.", "Mùa xuân trăm hoa đua nở."),
        ("夏天", "xiàtiān", "Danh từ", "hạ thiên", "Mùa hè", "夏天的北京比较热。", "Xiàtiān de Běijīng bǐjiào rè.", "Mùa hè ở Bắc Kinh tương đối nóng."),
        ("秋天", "qiūtiān", "Danh từ", "thu thiên", "Mùa thu", "北京的秋天最美丽。", "Běijīng de qiūtiān zuì měilì.", "Mùa thu ở Bắc Kinh là đẹp nhất."),
        ("冬天", "dōngtiān", "Danh từ", "đông thiên", "Mùa đông", "冬天常常下雪。", "Dōngtiān chángcháng xiàxuě.", "Mùa đông thường hay có tuyết rơi."),
        ("冷", "lěng", "Tính từ", "lãnh", "Lạnh, rét", "外面很冷，多穿点衣服。", "Wàimiàn hěn lěng, duō chuān diǎn yīfu.", "Bên ngoài rất lạnh, hãy mặc thêm áo vào."),
        ("热", "rè", "Tính từ", "nhiệt", "Nóng, nhiệt độ cao", "房间里有点儿热。", "Fángjiān lǐ yǒudiǎnr rè.", "Trong phòng hơi nóng một chút."),
        ("刮风", "guāfēng", "Động từ", "quát phong", "Nổi gió, có gió thổi", "今天刮大风，别出门了。", "Jīntiān guā dàfēng, bié chūmén le.", "Hôm nay gió to lắm, đừng ra ngoài nữa."),
        ("下雨", "xiàyǔ", "Động từ", "hạ vũ", "Mưa rơi, trời mưa", "外面下雨了，带把伞吧。", "Wàimiàn xiàyǔ le, dài bǎ sǎn ba.", "Bên ngoài trời đổ mưa rồi, cầm ô theo nhé."),
        ("下雪", "xiàxuě", "Động từ", "hạ tuyết", "Tuyết rơi", "下雪的时候很漂亮。", "Xiàxuě de shíhou hěn piàoliang.", "Lúc tuyết rơi cảnh rất đẹp."),
        ("比较", "bǐjiào", "Phó từ/Động từ", "tỉ giảo", "Khá, tương đối; so sánh", "他的汉语水平比较高。", "Tā de Hànyǔ shuǐpíng bǐjiào gāo.", "Trình độ tiếng Hán của anh ấy khá cao."),
        ("常常", "chángcháng", "Phó từ", "thường thường", "Thường xuyên, hay", "周末我常常去图书馆。", "Zhōumò wǒ chángcháng qù túshūguǎn.", "Cuối tuần tôi thường tới thư viện."),
        ("最", "zuì", "Phó từ", "tối", "Nhất (cực cấp)", "这是我最喜欢的水果。", "Zhè shì wǒ zuì xǐhuan de shuǐguǒ.", "Đây là loại trái cây tôi thích nhất."),
        ("度", "dù", "Lượng từ", "độ", "Độ (nhiệt độ)", "今天最高气温三十度。", "Jīntiān zuìgāo qìwēn sānshí dù.", "Nhiệt độ cao nhất hôm nay là 30 độ."),
        ("气温", "qìwēn", "Danh từ", "khí ôn", "Nhiệt độ không khí", "明天气温会下降。", "Míngtiān qìwēn huì xiàjiàng.", "Ngày mai nhiệt độ không khí sẽ giảm.")
    ],
    12: [
        ("正在", "zhèngzài", "Phó từ", "chính tại", "Đang (tiếp diễn hành động)", "他正在房间里看书。", "Tā zhèngzài fángjiān lǐ kàn shū.", "Anh ấy đang ở trong phòng đọc sách."),
        ("干", "gàn", "Động từ", "can", "Làm (khẩu ngữ)", "你在干什么呢？", "Nǐ zài gànshénme ne?", "Cậu đang làm gì đấy?"),
        ("作业", "zuòyè", "Danh từ", "tác nghiệp", "Bài tập về nhà", "今天的汉语作业很多。", "Jīntiān de Hànyǔ zuòyè hěn duō.", "Bài tập tiếng Trung hôm nay nhiều quá."),
        ("玩", "wán", "Động từ", "ngoạn", "Chơi, giải trí", "别玩手机了，快去学习！", "Bié wán shǒujī le, kuài qù xuéxí!", "Đừng bấm điện thoại nữa, mau đi học đi!"),
        ("电脑", "diànnǎo", "Danh từ", "điện não", "Máy vi tính", "他买了一台新电脑。", "Tā mǎi le yì tái xīn diànnǎo.", "Cậu ấy đã mua một chiếc máy tính mới."),
        ("游戏", "yóuxì", "Danh từ", "du hí", "Trò chơi, game", "很多年轻人喜欢玩电脑游戏。", "Hěn duō niánqīngrén xǐhuan wán diànnǎo yóuxì.", "Rất nhiều bạn trẻ thích chơi game máy tính."),
        ("录音", "lùyīn", "Danh từ/Động từ", "lục âm", "Ghi âm, bản ghi âm", "每天听课文录音对听力很有帮助。", "Měitiān tīng kèwén lùyīn duì tīnglì hěn yǒu bāngzhù.", "Hàng ngày nghe ghi âm bài đọc rất bổ ích cho khả năng nghe."),
        ("准备", "zhǔnbèi", "Động từ", "chuẩn bị", "Chuẩn bị, trù bị", "我们正在准备明天的考试。", "Wǒmen zhèngzài zhǔnbèi míngtiān de kǎoshì.", "Chúng tôi đang chuẩn bị cho bài thi ngày mai."),
        ("睡觉", "shuìjiào", "Động từ", "thụy giác", "Đi ngủ", "我习惯晚上十一点睡觉。", "Wǒ xíguàn wǎnshang shíyī diǎn shuìjiào.", "Tôi có thói quen đi ngủ lúc 11 giờ đêm."),
        ("电视", "diànshì", "Danh từ", "điện thị", "Truyền hình, TV", "爷爷喜欢看电视新闻。", "Yéye xǐhuan kàn diànshì xīnwén.", "Ông nội thích xem tin tức truyền hình."),
        ("喝茶", "hēchá", "Động từ", "hát trà", "Uống trà", "中国人喜欢喝绿茶。", "Zhōngguórén xǐhuan hē lǜchá.", "Người Trung Quốc rất thích uống trà xanh."),
        ("给", "gěi", "Giới từ/Động từ", "cấp", "Cho, biếu; đối với", "我给他发了一条短信。", "Wǒ gěi tā fā le yì tiáo duǎnxìn.", "Tôi đã gửi cho anh ấy một tin nhắn."),
        ("聊天", "liáotiān", "Động từ", "liêu thiên", "Nói chuyện phiếm, tán gẫu", "我和朋友在网上聊天。", "Wǒ hé péngyou zài wǎngshang liáotiān.", "Tôi cùng bạn tán gẫu trên mạng.")
    ],
    13: [
        ("往", "wǎng", "Giới từ", "vãng", "Hướng về, đi về phía", "一直往前走就到了。", "Yìzhí wǎng qián zǒu jiù dào le.", "Cứ đi thẳng về phía trước là tới nơi rồi."),
        ("前", "qián", "Danh từ", "tiền", "Phía trước", "前边是红绿灯。", "Qiánbian shì hónglǜdēng.", "Phía trước là đèn tín hiệu giao thông."),
        ("左", "zuǒ", "Danh từ", "tả", "Trái, bên trái", "到十字路口往左拐。", "Dào shízì lùkǒu wǎng zuǒ guǎi.", "Đến ngã tư rẽ về phía bên trái."),
        ("右", "yòu", "Danh từ", "hữu", "Phải, bên phải", "往右看，银行就在那儿。", "Wǎng yòu kàn, yínháng jiù zài nàr.", "Nhìn sang bên phải, ngân hàng ở ngay đó."),
        ("拐", "guǎi", "Động từ", "quải", "Rẽ, quẹo", "在第二个路口往右拐。", "Zài dì-èr ge lùkǒu wǎng yòu guǎi.", "Ở ngã rẽ thứ hai hãy quẹo phải."),
        ("一直", "yìzhí", "Phó từ", "nhất trực", "Thẳng, liên tục, suốt", "一直走，别停。", "Yìzhí zǒu, bié tíng.", "Cứ đi thẳng mãi, đừng dừng lại."),
        ("路口", "lùkǒu", "Danh từ", "lộ khẩu", "Ngã rẽ, giao lộ, cửa đường", "我们在路口见面吧。", "Wǒmen zài lùkǒu jiànmiàn ba.", "Chúng ta gặp nhau ở đầu đường ngã rẽ nhé."),
        ("红绿灯", "hónglǜdēng", "Danh từ", "hồng lục đăng", "Đèn giao thông xanh đỏ", "过红绿灯要小心。", "Guò hónglǜdēng yào xiǎoxīn.", "Băng qua đèn xanh đèn đỏ phải cẩn thận."),
        ("离", "lí", "Giới từ", "ly", "Cách (khoảng cách)", "我家离学校不太远。", "Wǒ jiā lí xuéxiào bú tài yuǎn.", "Nhà tôi cách trường học không xa lắm."),
        ("远", "yuǎn", "Tính từ", "viễn", "Xa", "故宫离这里很远。", "Gùgōng lí zhèlǐ hěn yuǎn.", "Cố Cung cách nơi đây rất xa."),
        ("近", "jìn", "Tính từ", "cận", "Gần", "超市就在附近，非常近。", "Chāoshì jiù zài fùjìn, fēicháng jìn.", "Siêu thị ở ngay gần đây, rất gần."),
        ("经过", "jīngguò", "Động từ/Danh từ", "kinh quá", "Đi qua, trải qua", "去火车站要经过这家医院。", "Qù huǒchēzhàn yào jīngguò zhè jiā yīyuàn.", "Đi đến ga xe lửa phải đi qua bệnh viện này."),
        ("大概", "dàgài", "Phó từ", "đại khái", "Khoảng chừng, đại khái", "走路大概要十五分钟。", "Zǒulù dàgài yào shíwǔ fēnzhōng.", "Đi bộ khoảng chừng mười lăm phút.")
    ],
    14: [
        ("颜色", "yánsè", "Danh từ", "nhan sắc", "Màu sắc", "你喜欢什么颜色？", "Nǐ xǐhuan shénme yánsè?", "Bạn thích màu sắc gì?"),
        ("浅", "qiǎn", "Tính từ", "thiển", "Nhạt (màu), nông (nước)", "我喜欢浅蓝色的衬衫。", "Wǒ xǐhuan qiǎnlánsè de chènshān.", "Tôi thích áo sơ mi màu xanh da trời nhạt."),
        ("深", "shēn", "Tính từ", "thâm", "Đậm (màu), sâu (nước)", "深色衣服不容易脏。", "Shēnsè yīfu bù róngyì zāng.", "Quần áo màu sẫm không dễ bị bẩn."),
        ("红", "hóng", "Tính từ", "hồng", "Màu đỏ", "中国红非常喜庆。", "Zhōngguó hóng fēicháng xǐqìng.", "Màu đỏ Trung Hoa mang lại cảm giác rất vui tươi may mắn."),
        ("黄", "huáng", "Tính từ", "hoàng", "Màu vàng", "秋天的银杏叶是黄色的。", "Qiūtiān de yínxìng yè shì huángsè de.", "Lá ngân hạnh mùa thu có màu vàng óng."),
        ("蓝", "lán", "Tính từ", "lam", "Màu xanh lam", "今天的天空很蓝。", "Jīntiān de tiānkōng hěn lán.", "Bầu trời hôm nay rất xanh."),
        ("白", "bái", "Tính từ", "bạch", "Màu trắng", "白色的羽绒服很好看。", "Báisè de yǔróngfú hěn hǎokàn.", "Chiếc áo phao màu trắng trông rất đẹp."),
        ("黑", "hēi", "Tính từ", "hắc", "Màu đen", "他穿着黑色的皮鞋。", "Tā chuān zhe hēisè de píxié.", "Anh ấy đang mang đôi giày da màu đen."),
        ("绿", "lǜ", "Tính từ", "lục", "Màu xanh lá cây", "路两旁的树非常绿。", "Lù liǎngpáng de shù fēicháng lǜ.", "Cây cối hai bên đường xanh ngắt."),
        ("件", "jiàn", "Lượng từ", "kiện", "Chiếc, cái (lượng từ áo, sự việc)", "我想买一件大衣。", "Wǒ xiǎng mǎi yí jiàn dàyī.", "Tôi muốn mua một chiếc áo khoác dạ."),
        ("条", "tiáo", "Lượng từ", "điều", "Cái, chiếc (quần, váy, khăn, cá)", "这条裙子很适合你。", "Zhè tiáo qúnzi hěn shìhé nǐ.", "Chiếc váy này rất hợp với bạn đấy."),
        ("衣服", "yīfu", "Danh từ", "y phục", "Quần áo, y phục", "周末我去商场买衣服。", "Zhōumò wǒ qù shāngchǎng mǎi yīfu.", "Cuối tuần tôi đi trung tâm mua sắm mua quần áo."),
        ("穿", "chuān", "Động từ", "xuyên", "Mặc (quần áo), đi (giày dép)", "今天天冷，多穿点。", "Jīntiān tiān lěng, duō chuān diǎn.", "Hôm nay trời lạnh, hãy mặc ấm vào nhé."),
        ("试", "shì", "Động từ", "thí", "Thử (thử đồ, thử nghiệm)", "我可以试一下这件吗？", "Wǒ kěyǐ shì yíxià zhè jiàn ma?", "Tôi có thể thử chiếc này một chút được không?"),
        ("合适", "héshì", "Tính từ", "hợp thích", "Thích hợp, vừa vặn", "这双鞋大小正合适。", "Zhè shuāng xié dàxiǎo zhèng héshì.", "Đôi giày này kích cỡ vừa khít."),
        ("怎么样", "zěnmeyàng", "Đại từ", "chẩm ma dạng", "Thế nào, ra sao", "你觉得这条裤子怎么样？", "Nǐ juéde zhè tiáo kùzi zěnmeyàng?", "Cậu thấy chiếc quần này thế nào?")
    ],
    15: [
        ("生日", "shēngrì", "Danh từ", "sinh nhật", "Ngày sinh nhật", "祝你生日快乐！", "Zhù nǐ shēngrì kuàilè!", "Chúc bạn sinh nhật vui vẻ!"),
        ("快乐", "kuàilè", "Tính từ", "khoái lạc", "Vui vẻ, hạnh phúc", "祝大家新年快乐！", "Zhù dàjiā xīnnián kuàilè!", "Chúc mọi người năm mới vui vẻ tràn ngập hạnh phúc!"),
        ("打算", "dǎsuàn", "Động từ/Danh từ", "đả toán", "Dự định, tính toán", "放假你有什么打算？", "Fàngjià nǐ yǒu shénme dǎsuàn?", "Nghỉ lễ bạn có dự định gì chưa?"),
        ("聚会", "jùhuì", "Danh từ/Động từ", "tụ hội", "Buổi tụ họp, liên hoan", "今晚班里有一个聚会。", "Jīnwǎn bān lǐ yǒu yí ge jùhuì.", "Tối nay lớp có một buổi liên hoan tụ họp."),
        ("礼物", "lǐwù", "Danh từ", "lễ vật", "Món quà, quà tặng", "这是我送给你的生日礼物。", "Zhè shì wǒ sòng gěi nǐ de shēngrì lǐwù.", "Đây là món quà sinh nhật tôi tặng cho bạn."),
        ("蛋糕", "dàngāo", "Danh từ", "đản cao", "Bánh ngọt, bánh gato", "生日蛋糕上点着蜡烛。", "Shēngrì dàngāo shang diǎn zhe làzhú.", "Trên bánh sinh nhật cắm những ngọn nến sáng."),
        ("送", "sòng", "Động từ", "tống", "Tặng, biếu; tiễn", "朋友送了我一本中文书。", "Péngyou sòng le wǒ yì běn Zhōngwén shū.", "Bạn bè đã tặng tôi một cuốn sách tiếng Trung."),
        ("参加", "cānjiā", "Động từ", "tham gia", "Tham gia, dự", "你想参加明天的活动吗？", "Nǐ xiǎng cānjiā míngtiān de huódòng ma?", "Bạn có muốn tham gia hoạt động ngày mai không?"),
        ("祝", "zhù", "Động từ", "chúc", "Chúc mừng, cầu chúc", "祝你一路平安！", "Zhù nǐ yílù píng'ān!", "Chúc bạn thượng lộ bình an!"),
        ("祝贺", "zhùhè", "Động từ", "chúc hạ", "Chúc mừng (sự thành công)", "祝贺你取得好成绩！", "Zhùhè nǐ qǔdé hǎo chéngjì!", "Chúc mừng bạn đạt được thành tích tốt!"),
        ("预订", "yùdìng", "Động từ", "dự đính", "Đặt trước (phòng, bàn, vé)", "我们已经在餐厅预订了位子。", "Wǒmen yǐjīng zài cāntīng yùdìng le wèizi.", "Chúng tôi đã đặt bàn trước ở nhà hàng rồi.")
    ],
    16: [
        ("爬山", "páshān", "Động từ", "bà sơn", "Leo núi", "周末我们打算去香山爬山。", "Zhōumò wǒmen dǎsuàn qù Xiāngshān páshān.", "Cuối tuần chúng mình dự định đi leo núi Hương Sơn."),
        ("看电影", "kàn diànyǐng", "Động từ", "khán điện ảnh", "Xem phim", "周六晚上我们去看电影吧。", "Zhōuliù wǎnshang wǒmen qù kàn diànyǐng ba.", "Tối thứ bảy chúng mình đi xem phim nhé."),
        ("运动", "yùndòng", "Danh từ/Động từ", "vận động", "Thể thao, vận động", "运动有利于身体健康。", "Yùndòng yǒulì yú shēntǐ jiànkāng.", "Tập luyện thể thao có lợi cho sức khỏe."),
        ("游泳", "yóuyǒng", "Động từ", "du vịnh", "Bơi lội", "夏天我最喜欢游泳。", "Xiàtiān wǒ zuì xǐhuan yóuyǒng.", "Mùa hè tôi thích nhất là đi bơi."),
        ("打球", "dǎqiú", "Động từ", "đả cầu", "Chơi bóng (bóng rổ, bóng bàn, cầu lông)", "下午下课后我们去打球。", "Xiàwǔ xiàkè hòu wǒmen qù dǎqiú.", "Buổi chiều tan học xong chúng mình đi chơi bóng."),
        ("踢足球", "tī zúqiú", "Động từ", "thích túc cầu", "Đá bóng, đá banh", "操场上有很多人在踢足球。", "Cāochǎng shang yǒu hěn duō rén zài tī zúqiú.", "Trên sân cỏ có rất nhiều người đang đá bóng."),
        ("休息", "xiūxi", "Động từ", "hưu tức", "Nghỉ ngơi", "学累了就好好休息一下。", "Xué lèi le jiù hǎohāo xiūxi yíxià.", "Học mệt rồi thì nghỉ ngơi tử tế một lát nhé."),
        ("逛街", "guàngjiē", "Động từ", "cuống nhai", "Dạo phố, đi dạo shopping", "女孩们周末都喜欢逛街。", "Nǚháimen zhōumò dōu xǐhuan guàngjiē.", "Các bạn nữ cuối tuần đều thích dạo phố mua sắm."),
        ("散步", "sànbù", "Động từ", "tán bộ", "Đi dạo, tản bộ", "晚饭后散步对身体很好。", "Wǎnfàn hòu sànbù duì shēntǐ hěn hǎo.", "Sau bữa tối đi tản bộ rất tốt cho cơ thể."),
        ("有意思", "yǒu yìsi", "Tính từ", "hữu ý tư", "Thú vị, hay ho, có ý nghĩa", "这本书越看越有意思。", "Zhè běn shū yuè kàn yuè yǒu yìsi.", "Cuốn sách này càng đọc lại càng thấy thú vị.")
    ],
    17: [
        ("做客", "zuòkè", "Động từ", "tố khách", "Làm khách, đến thăm nhà", "今天我去中国朋友家做客。", "Jīntiān wǒ qù Zhōngguó péngyou jiā zuòkè.", "Hôm nay tôi đến nhà bạn người Trung Quốc làm khách."),
        ("请进", "qǐngjìn", "Cụm từ", "thỉnh tiến", "Mời vào", "请进，快请坐！", "Qǐngjìn, kuài qǐng zuò!", "Mời vào, mau mời ngồi!"),
        ("客气", "kèqi", "Tính từ", "khách khí", "Khách khí, lịch sự, khách sáo", "你太客气了，还带了水果。", "Nǐ tài kèqi le, hái dài le shuǐguǒ.", "Bạn khách khí quá, còn mang theo cả trái cây nữa."),
        ("坐", "zuò", "Động từ", "tọa", "Ngồi", "大家坐下慢慢聊吧。", "Dàjiā zuòxia mànman liáo ba.", "Mọi người ngồi xuống rồi thong thả trò chuyện nào."),
        ("喝", "hē", "Động từ", "hát", "Uống", "你想喝茶还是喝咖啡？", "Nǐ xiǎng hē chá háishi hē kāfēi?", "Bạn muốn uống trà hay uống cà phê?"),
        ("咖啡", "kāfēi", "Danh từ", "cà phê", "Cà phê", "我习惯早上喝一杯黑咖啡。", "Wǒ xíguàn zǎoshang hē yì bēi hēi kāfēi.", "Tôi quen buổi sáng uống một cốc cà phê đen."),
        ("随便", "suíbiàn", "Tính từ/Phó từ", "tùy tiện", "Tùy ý, tự nhiên", "别拘束，就像在自己家一样随便。", "Bié jūshù, jiù xiàng zài zìjǐ jiā yíyàng suíbiàn.", "Đừng câu nệ, cứ tự nhiên như ở nhà mình nhé."),
        ("尝", "cháng", "Động từ", "thường", "Nếm thử", "请尝尝我妈妈做的饺子。", "Qǐng chángcháng wǒ māma zuò de jiǎozi.", "Xin mời nếm thử sủi cảo do mẹ tôi tự tay làm."),
        ("味道", "wèidao", "Danh từ", "vị đạo", "Mùi vị, hương vị", "这道菜的味道好极了！", "Zhè dào cài de wèidao hǎo jí le!", "Mùi vị món ăn này tuyệt hảo quá!"),
        ("点心", "diǎnxin", "Danh từ", "điểm tâm", "Bánh ngọt điểm tâm, món ăn nhẹ", "吃点中国传统点心吧。", "Chī diǎn Zhōngguó chuántǒng diǎnxin ba.", "Ăn một chút bánh ngọt điểm tâm truyền thống Trung Quốc nhé."),
        ("别客气", "bié kèqi", "Cụm từ", "biệt khách khí", "Đừng khách sáo", "都是自己人，别客气。", "Dōu shì zìjǐrén, bié kèqi.", "Đều là người nhà cả, đừng khách sáo.")
    ],
    18: [
        ("菜", "cài", "Danh từ", "thái", "Món ăn, thức ăn; rau củ", "今天桌上有不少好菜。", "Jīntiān zhuō shang yǒu bùshǎo hǎo cài.", "Hôm nay trên bàn có bao nhiêu món ăn ngon."),
        ("拿手", "náshǒu", "Tính từ", "nã thủ", "Sở trường, tủ (món tủ, việc thạo)", "做川菜是他的拿手好戏。", "Zuò Chuāncài shì tā de náshǒu hǎoxì.", "Nấu món Tứ Xuyên là ngón nghề tủ của anh ấy."),
        ("糖醋里脊", "tángcù lǐji", "Danh từ", "đường giấm lý tích", "Thịt thăn chua ngọt (món nổi tiếng)", "糖醋里脊酸甜可口。", "Tángcù lǐji suāntián kěkǒu.", "Món thịt thăn sốt chua ngọt có vị chua ngọt thanh rất vừa miệng."),
        ("麻婆豆腐", "mápó dòufu", "Danh từ", "ma bà đậu hũ", "Đậu phụ Tứ Xuyên sốt cay", "麻婆豆腐又麻又辣。", "Mápó dòufu yòu má yòu là.", "Đậu phụ Ma Bà vừa tê lại vừa cay xè."),
        ("筷子", "kuàizi", "Danh từ", "khoái tử", "Đôi đũa", "外国人学用筷子不容易。", "Wàiguórén xué yòng kuàizi bù róngyì.", "Người nước ngoài học dùng đũa không hề dễ dàng."),
        ("慢用", "mànyòng", "Động từ", "mạn dụng", "Dùng bữa thong thả, ngon miệng", "菜齐了，请大家慢用！", "Cài qí le, qǐng dàjiā mànyòng!", "Món lên đủ rồi, mời mọi người dùng bữa tự nhiên!"),
        ("饱", "bǎo", "Tính từ", "bão", "No bụng", "我已经吃饱了，谢谢。", "Wǒ yǐjīng chī bǎo le, xièxie.", "Tôi đã ăn no nê rồi, xin cảm ơn."),
        ("干杯", "gānbēi", "Động từ", "can bôi", "Cạn ly, cụng ly", "为了我们的友谊，干杯！", "Wèile wǒmen de yǒuyì, gānbēi!", "Vì tình hữu nghị của chúng ta, cạn ly!"),
        ("手艺", "shǒuyì", "Danh từ", "thủ nghệ", "Tay nghề nấu nướng, tay nghề thủ công", "阿姨做菜的手艺真棒！", "Āyí zuòcài de shǒuyì zhēn bàng!", "Tay nghề nấu nướng của dì tuyệt vời thật!"),
        ("丰盛", "fēngshèng", "Tính từ", "phong thịnh", "Thịnh soạn, dồi dào phong phú", "今天这一桌菜太丰盛了。", "Jīntiān zhè yì zhuō cài tài fēngshèng le.", "Mâm cơm hôm nay thịnh soạn quá.")
    ],
    19: [
        ("习惯", "xíguàn", "Động từ/Danh từ", "tập quán", "Thói quen; quen với", "我已经习惯这里的气候了。", "Wǒ yǐjīng xíguàn zhèlǐ de qìhòu le.", "Tôi đã quen với khí hậu nơi đây rồi."),
        ("起床", "qǐchuáng", "Động từ", "khởi sàng", "Thức dậy, rời giường", "早上按时起床是个好习惯。", "Zǎoshang ànshí qǐchuáng shì ge hǎo xíguàn.", "Buổi sáng thức dậy đúng giờ là một thói quen tốt."),
        ("早", "zǎo", "Tính từ/Phó từ", "tảo", "Sớm", "他每天都很早就来到教室。", "Tā měitiān dōu hěn zǎo jiù lái dào jiàoshì.", "Ngày nào cậu ấy cũng đến phòng học từ rất sớm."),
        ("晚", "wǎn", "Tính từ/Phó từ", "vãn", "Muộn, trễ", "昨晚我睡得很晚。", "Zuówǎn wǒ shuì de hěn wǎn.", "Tối qua tôi đi ngủ muộn lắm."),
        ("生活", "shēnghuó", "Danh từ/Động từ", "sinh hoạt", "Cuộc sống; sinh hoạt", "你在北京的生活怎么样？", "Nǐ zài Běijīng de shēnghuó zěnmeyàng?", "Cuộc sống của bạn tại Bắc Kinh dạo này thế nào?"),
        ("适应", "shìyìng", "Động từ", "thích ứng", "Thích nghi, thích ứng", "留学生很快适应了大学生活。", "Liúxuéshēng hěn kuài shìyìng le dàxué shēnghuó.", "Các bạn du học sinh đã nhanh chóng thích nghi với đời sống đại học."),
        ("差不多", "chàbuduō", "Tính từ/Phó từ", "sai bất đa", "Xấp xỉ, gần như, hầu như", "作业我已经写得差不多了。", "Zuòyè wǒ yǐjīng xiě de chàbuduō le.", "Bài tập về nhà tôi đã viết gần xong xuôi rồi."),
        ("比如", "bǐrú", "Liên từ", "tỉ như", "Ví dụ như, chẳng hạn", "我喜欢很多运动，比如游泳和跑步。", "Wǒ xǐhuan hěn duō yùndòng, bǐrú yóuyǒng hé pǎobù.", "Tôi thích nhiều môn thể thao, chẳng hạn như bơi lội và chạy bộ."),
        ("改变", "gǎibiàn", "Động từ/Danh từ", "cải biến", "Thay đổi", "学习外语能改变一个人。", "Xuéxí wàiyǔ néng gǎibiàn yí ge rén.", "Học ngoại ngữ có thể thay đổi tư duy của một con người.")
    ],
    20: [
        ("生病", "shēngbìng", "Động từ", "sinh bệnh", "Bị ốm, bị bệnh", "他生病了，今天不能来上课。", "Tā shēngbìng le, jīntiān bù néng lái shàngkè.", "Anh ấy bị ốm rồi, hôm nay không thể đến lớp học được."),
        ("感冒", "gǎnmào", "Động từ/Danh từ", "cảm mạo", "Cảm lạnh, cảm cúm", "天冷容易感冒，要注意保暖。", "Tiān lěng róngyì gǎnmào, yào zhùyì bǎonuǎn.", "Trời lạnh dễ bị cảm, nhớ chú ý giữ ấm nhé."),
        ("发烧", "fāshāo", "Động từ", "phát thiêu", "Phát sốt, sốt cao", "他有点儿发烧，体温三十八度。", "Tā yǒudiǎnr fāshāo, tǐwēn sānshíbā dù.", "Anh ấy hơi sốt một chút, thân nhiệt 38 độ."),
        ("头疼", "tóuténg", "Động từ/Tính từ", "đầu đông", "Đau đầu, nhức đầu", "我头疼得厉害，想躺一会儿。", "Wǒ tóuténg de lìhai, xiǎng tǎng yíhuìr.", "Tôi đau đầu dữ dội quá, muốn nằm nghỉ một lát."),
        ("咳嗽", "késou", "Động từ", "khái thấu", "Ho, tiếng ho", "他咳嗽得很厉害，该去看看医生了。", "Tā késou de hěn lìhai, gāi qù kànkan yīshēng le.", "Anh ấy ho nặng tiếng quá, nên đi khám bác sĩ thôi."),
        ("吃药", "chīyào", "Động từ", "ngật dược", "Uống thuốc", "大夫叫他一天吃三次药。", "Dàifu jiào tā yì tiān chī sān cì yào.", "Bác sĩ dặn anh ấy mỗi ngày uống thuốc ba lần."),
        ("医院", "yīyuàn", "Danh từ", "y viện", "Bệnh viện", "学校附近有一家大医院。", "Xuéxiào fùjìn yǒu yì jiā dà yīyuàn.", "Gần trường học có một bệnh viện lớn."),
        ("舒服", "shūfu", "Tính từ", "thư phục", "Thoải mái, dễ chịu (sức khỏe)", "你今天身体舒服一点儿了吗？", "Nǐ jīntiān shēntǐ shūfu yìdiǎnr le ma?", "Hôm nay trong người bạn đã thấy dễ chịu hơn chút nào chưa?"),
        ("检查", "jiǎnchá", "Động từ/Danh từ", "kiểm tra", "Kiểm tra, khám bệnh", "医生给他做了全面检查。", "Yīshēng gěi tā zuò le quánmiàn jiǎnchá.", "Bác sĩ đã tiến hành khám toàn diện cho anh ấy."),
        ("康复", "kāngfù", "Động từ", "khang phục", "Bình phục, hồi phục sức khỏe", "祝你早日康复！", "Zhù nǐ zǎorì kāngfù!", "Chúc bạn mau chóng bình phục sức khỏe nhé!"),
        ("探望", "tànwàng", "Động từ", "thám vọng", "Thăm nom, thăm hỏi", "我们下午去医院探望张老师。", "Wǒmen xiàwǔ qù yīyuàn tànwàng Zhāng lǎoshī.", "Chiều nay chúng tôi vào bệnh viện thăm hỏi thầy Trương.")
    ],
    21: [
        ("醉", "zuì", "Tính từ/Động từ", "túy", "Say rượu", "昨晚他喝醉了。", "Zuówǎn tā hē zuì le.", "Tối hôm qua anh ấy đã uống say mèm."),
        ("白酒", "báijiǔ", "Danh từ", "bạch tửu", "Rượu trắng Trung Quốc", "中国白酒度数很高。", "Zhōngguó báijiǔ dùshù hěn gāo.", "Rượu trắng Trung Quốc nồng độ cồn rất cao."),
        ("杯", "bēi", "Lượng từ/Danh từ", "bôi", "Cốc, ly, chén", "我们一起喝一杯吧！", "Wǒmen yìqǐ hē yì bēi ba!", "Chúng ta cùng cạn một ly nào!"),
        ("头晕", "tóuyūn", "Tính từ/Động từ", "đầu vựng", "Chóng mặt, hoa mắt", "喝了酒以后我感觉头晕。", "Hē le jiǔ yǐhòu wǒ gǎnjué tóuyūn.", "Sau khi uống rượu tôi cảm thấy đầu óc quay cuồng choáng váng."),
        ("难受", "nánshòu", "Tính từ", "nan thụ", "Khó chịu, khổ sở, buồn bực", "胃里很不舒服，真难受。", "Wèi lǐ hěn bù shūfu, zhēn nánshòu.", "Trong dạ dày cồn cào bứt rứt, thật khó chịu."),
        ("以后", "yǐhòu", "Danh từ/Liên từ", "dĩ hậu", "Sau này, sau khi", "吃完晚饭以后我们去散步。", "Chīwán wǎnfàn yǐhòu wǒmen qù sànbù.", "Sau khi ăn tối xong chúng mình đi dạo mát nhé."),
        ("劝酒", "quànjiǔ", "Động từ", "khuyến tửu", "Mời rượu, ép rượu", "在中国聚会上朋友们喜欢劝酒。", "Zài Zhōngguó jùhuì shang péngyoumen xǐhuan quànjiǔ.", "Trong những bữa tiệc ở Trung Quốc bạn bè thường hay mời và chuốc rượu nhau.")
    ],
    22: [
        ("严重", "yánzhòng", "Tính từ", "nghiêm trọng", "Nghiêm trọng, nặng", "他的病情不太严重，多休息就好。", "Tā de bìngqíng bú tài yánzhòng, duō xiūxi jiù hǎo.", "Bệnh tình của anh ấy không nặng lắm, nghỉ ngơi nhiều là khỏi thôi."),
        ("嗓子", "sǎngzi", "Danh từ", "tảng tử", "Cổ họng, giọng", "我感冒了，嗓子很疼。", "Wǒ gǎnmào le, sǎngzi hěn téng.", "Tôi bị cảm rồi, cổ họng đau rát quá."),
        ("疼", "téng", "Tính từ/Động từ", "đông", "Đau, buốt", "你哪儿疼？", "Nǐ nǎr téng?", "Bạn bị đau ở chỗ nào?"),
        ("针", "zhēn", "Danh từ", "châm", "Cây kim, mũi tiêm", "医生建议他打一针。", "Yīshēng jiànyì tā dǎ yì zhēn.", "Bác sĩ khuyên anh ấy nên tiêm một mũi."),
        ("打针", "dǎzhēn", "Động từ", "đả châm", "Tiêm thuốc, chích thuốc", "小孩子最怕打针了。", "Xiǎo háizi zuì pà dǎzhēn le.", "Trẻ con sợ nhất là chuyện bị tiêm thuốc."),
        ("开药", "kāiyào", "Động từ", "khai dược", "Kê đơn thuốc", "大夫给他开了一些感冒药。", "Dàifu gěi tā kāi le yìxiē gǎnmàoyào.", "Bác sĩ đã kê cho anh ấy một ít thuốc cảm cúm."),
        ("假", "jià", "Danh từ", "giả", "Nghỉ phép, kỳ nghỉ", "我想向老师请两天假。", "Wǒ xiǎng xiàng lǎoshī qǐng liǎng tiān jià.", "Em muốn xin phép thầy giáo cho nghỉ hai ngày."),
        ("请假", "qǐngjià", "Động từ", "thỉnh giả", "Xin phép nghỉ", "生病了就要跟单位请假。", "Shēngbìng le jiù yào gēn dānwèi qǐngjià.", "Bị ốm thì phải làm đơn xin cơ quan cho nghỉ phép."),
        ("身体", "shēntǐ", "Danh từ", "thân thể", "Thân thể, sức khỏe", "身体是革命的本钱。", "Shēntǐ shì gémìng de běnqián.", "Sức khỏe là vốn quý nhất của con người."),
        ("体温", "tǐwēn", "Danh từ", "thể ôn", "Thân nhiệt, nhiệt độ cơ thể", "护士量了他的体温。", "Hùshi liáng le tā de tǐwēn.", "Y tá đã đo nhiệt độ cơ thể cho anh ấy.")
    ],
    23: [
        ("已经", "yǐjīng", "Phó từ", "dĩ kinh", "Đã, rồi", "他已经学了半年汉语了。", "Tā yǐjīng xué le bàn nián Hànyǔ le.", "Cậu ấy đã học tiếng Hán được nửa năm rồi."),
        ("年", "nián", "Lượng từ/Danh từ", "niên", "Năm", "他在中国住了三年。", "Tā zài Zhōngguó zhù le sān nián.", "Anh ấy đã sống ở Trung Quốc suốt ba năm."),
        ("月", "yuè", "Danh từ", "nguyệt", "Tháng", "我们学了两个月汉语。", "Wǒmen xué le liǎng ge yuè Hànyǔ.", "Chúng tôi đã học tiếng Hán được hai tháng."),
        ("天", "tiān", "Lượng từ/Danh từ", "thiên", "Ngày", "他在北京玩了五天。", "Tā zài Běijīng wán le wǔ tiān.", "Cậu ấy đã đi chơi ở Bắc Kinh trong năm ngày."),
        ("小时", "xiǎoshí", "Danh từ", "tiểu thời", "Giờ đồng hồ, tiếng đồng hồ", "每天我都要学三个小时。", "Měitiān wǒ dōu yào xué sān ge xiǎoshí.", "Mỗi ngày tôi đều dành ba tiếng đồng hồ để học bài."),
        ("坚持", "jiānchí", "Động từ", "kiên trì", "Kiên trì, giữ vững", "只要坚持，就一定能学会。", "Zhǐyào jiānchí, jiù yídìng néng xuéhuì.", "Chỉ cần kiên trì bền bỉ thì nhất định sẽ học thành tài."),
        ("努力", "nǔlì", "Tính từ/Động từ", "nỗ lực", "Nỗ lực, chăm chỉ cố gắng", "大家都在努力学习。", "Dàjiā dōu zài nǔlì xuéxí.", "Mọi người đều đang nỗ lực học tập không ngừng."),
        ("进步", "jìnbù", "Động từ/Danh từ", "tiến bộ", "Tiến bộ", "他的中文水平进步很快。", "Tā de Zhōngwén shuǐpíng jìnbù hěn kuài.", "Trình độ tiếng Trung của anh ấy tiến bộ rất nhanh."),
        ("难", "nán", "Tính từ", "nan", "Khó, hóc búa", "语法并不难，记单词比较难。", "Yǔfǎ bìng bù nán, jì dāncí bǐjiào nán.", "Ngữ pháp không hề khó, ghi nhớ từ vựng mới khó."),
        ("容易", "róngyì", "Tính từ", "dung dị", "Dễ dàng, đơn giản", "这个问题很容易回答。", "Zhè ge wèntí hěn róngyì huídá.", "Câu hỏi này rất dễ trả lời."),
        ("水平", "shuǐpíng", "Danh từ", "thủy bình", "Trình độ, mức độ", "我想提高自己的听力水平。", "Wǒ xiǎng tígāo zìjǐ de tīnglì shuǐpíng.", "Tôi muốn nâng cao trình độ nghe hiểu của bản thân."),
        ("提高", "tígāo", "Động từ", "đề cao", "Nâng cao, cải thiện", "多听多说能提高口语。", "Duō tīng duō shuō néng tígāo kǒuyǔ.", "Nghe nhiều nói nhiều có thể nâng cao khẩu ngữ.")
    ],
    24: [
        ("早饭", "zǎofàn", "Danh từ", "tảo phạn", "Bữa sáng, điểm tâm sáng", "早上一定要吃早饭。", "Zǎoshang yídìng yào chī zǎofàn.", "Buổi sáng nhất định phải ăn bữa sáng."),
        ("找", "zhǎo", "Động từ", "trảo", "Tìm, kiếm; đến gặp", "下了课你来找我吧。", "Xià le kè nǐ lái zhǎo wǒ ba.", "Tan học xong cậu sang tìm tớ nhé."),
        ("然后", "ránhòu", "Liên từ", "nhiên hậu", "Sau đó, rồi thì", "我们先吃早饭，然后去图书馆。", "Wǒmen xiān chī zǎofàn, ránhòu qù túshūguǎn.", "Chúng ta ăn sáng trước, sau đó cùng đến thư viện."),
        ("见面", "jiànmiàn", "Động từ", "kiến diện", "Gặp mặt, hội ngộ", "很久没见面了，你好吗？", "Hěn jiǔ méi jiànmiàn le, nǐ hǎo ma?", "Lâu lắm rồi không gặp mặt, bạn khỏe không?"),
        ("一起", "yìqǐ", "Phó từ", "nhất khởi", "Cùng nhau", "我们一起去食堂吧。", "Wǒmen yìqǐ qù shítáng ba.", "Chúng ta cùng đi tới nhà ăn nhé."),
        ("等", "děng", "Động từ", "đẳng", "Đợi, chờ", "你在校门等我一会儿。", "Nǐ zài xiàomén děng wǒ yíhuìr.", "Cậu đứng ở cổng trường đợi tớ một lát nhé."),
        ("办", "bàn", "Động từ", "biện", "Làm, xử lý, giải quyết", "今天我要去银行办点事。", "Jīntiān wǒ yào qù yínháng bàn diǎn shì.", "Hôm nay tôi cần ra ngân hàng làm một số thủ tục."),
        ("事情", "shìqing", "Danh từ", "sự tình", "Sự việc, công việc", "今天有很多事情要做。", "Jīntiān yǒu hěn duō shìqing yào zuò.", "Hôm nay có rất nhiều việc phải giải quyết."),
        ("马上", "mǎshàng", "Phó từ", "mã thượng", "Ngay lập tức, tức thì", "你等一下，我马上就来！", "Nǐ děng yíxià, wǒ mǎshàng jiù lái!", "Cậu đợi một tí, tớ tới ngay đây!")
    ],
    25: [
        ("得", "děi", "Trợ động từ", "đắc", "Phải, cần phải", "时间不早了，我得走了。", "Shíjiān bù zǎo le, wǒ děi zǒu le.", "Thời gian không còn sớm nữa, tôi phải đi rồi."),
        ("锻炼", "duànliàn", "Động từ", "đoán luyện", "Rèn luyện, tập thể dục", "每天跑步锻炼身体。", "Měitiān pǎobù duànliàn shēntǐ.", "Mỗi ngày chạy bộ rèn luyện thân thể."),
        ("跑步", "pǎobù", "Động từ", "bào bộ", "Chạy bộ", "早上操场上有很多人在跑步。", "Zǎoshang cāochǎng shang yǒu hěn duō rén zài pǎobù.", "Buổi sáng ở sân vận động có rất nhiều người chạy bộ."),
        ("胖", "pàng", "Tính từ", "bạng", "Béo, mập mạp", "最近他吃得好，长胖了一点。", "Zuìjìn tā chī de hǎo, zhǎng pàng le yìdiǎnr.", "Dạo này anh ấy ăn uống tốt nên hơi béo ra một chút."),
        ("瘦", "shòu", "Tính từ", "sấu", "Gầy, ốm, mảnh khảnh", "运动能让你瘦下来。", "Yùndòng néng ràng nǐ shòu xiàlái.", "Vận động thể thao có thể giúp bạn giảm cân thon gọn."),
        ("健康", "jiànkāng", "Tính từ/Danh từ", "kiện khang", "Khỏe mạnh; sức khỏe", "祝你身体健康，万事如意！", "Zhù nǐ shēntǐ jiànkāng, wànshì rúyì!", "Chúc bạn dồi dào sức khỏe, vạn sự như ý!"),
        ("减肥", "jiǎnféi", "Động từ", "giảm phì", "Giảm béo, giảm cân", "很多女生都在努力减肥。", "Hěn duō nǚshēng dōu zài nǔlì jiǎnféi.", "Rất nhiều bạn nữ đang nỗ lực giảm cân."),
        ("力量", "lìliang", "Danh từ", "lực lượng", "Sức mạnh, sức lực", "做俯卧撑可以增强手臂力量。", "Zuò fǔwòchēng kěyǐ zēngqiáng shǒubì lìliang.", "Hít đất có thể giúp tăng cường sức mạnh cơ bắp tay.")
    ],
    26: [
        ("考试", "kǎoshì", "Danh từ/Động từ", "khảo thí", "Kỳ thi, kiểm tra; đi thi", "下周我们要举行期中考试。", "Xià zhōu wǒmen yào jǔxíng qīzhōng kǎoshì.", "Tuần tới chúng tôi sẽ tổ chức kỳ thi giữa kỳ."),
        ("紧张", "jǐnzhāng", "Tính từ", "khẩn trương", "Căng thẳng, hồi hộp", "面对大考，心里有点紧张。", "Miànduì dàkǎo, xīnlǐ yǒudiǎnr jǐnzhāng.", "Đứng trước kỳ thi lớn, trong lòng có phần căng thẳng."),
        ("复习", "fùxí", "Động từ", "phục tập", "Ôn tập, ôn bài", "快考试了，大家都在抓紧复习。", "Kuài kǎoshì le, dàjiā dōu zài zhuājǐn fùxí.", "Sắp thi rồi, mọi người đều đang khẩn trương ôn bài."),
        ("题目", "tímù", "Danh từ", "đề mục", "Đề bài, câu hỏi bài thi", "这次考试的题目挺灵活的。", "Zhè cì kǎoshì de tímù tǐng línghuó de.", "Đề thi lần này khá là linh hoạt."),
        ("成绩", "chéngjì", "Danh từ", "thành tích", "Thành tích, kết quả, điểm số", "他这次考试成绩非常优异。", "Tā zhè cì kǎoshì chéngjì fēicháng yōuyì.", "Thành tích kỳ thi lần này của cậu ấy xuất sắc lắm."),
        ("担心", "dānxīn", "Động từ", "đam tâm", "Lo lắng, bận lòng", "别担心，你一定能考好的。", "Bié dānxīn, nǐ yídìng néng kǎo hǎo de.", "Đừng lo lắng quá, bạn nhất định sẽ thi tốt mà."),
        ("轻松", "qīngsōng", "Tính từ", "khinh tùng", "Thư thái, nhẹ nhõm", "考完试之后大家心情很轻松。", "Kǎowán shì zhīhòu dàjiā xīnqíng hěn qīngsōng.", "Thi cử xong xuôi tâm trạng mọi người thật nhẹ nhõm."),
        ("合格", "hégé", "Tính từ", "hợp cách", "Đạt chuẩn, đỗ, hợp lệ", "考试成绩合格就可以拿到证书。", "Kǎoshì chéngjì hégé jiù kěyǐ nádào zhèngshū.", "Điểm thi đạt chuẩn là có thể nhận được chứng chỉ.")
    ],
    27: [
        ("让", "ràng", "Động từ", "nhượng", "Bảo, để, cho phép; nhường", "妈妈让我早点回家吃晚饭。", "Māma ràng wǒ zǎodiǎn huíjiā chī wǎnfàn.", "Mẹ bảo tôi về nhà sớm dùng bữa tối."),
        ("寄", "jì", "Động từ", "ký", "Gửi (thư, bưu phẩm, đồ)", "我想去邮局寄一封信。", "Wǒ xiǎng qù yóujú jì yì fēng xìn.", "Tôi muốn đến bưu điện gửi một bức thư."),
        ("信", "xìn", "Danh từ", "tín", "Lá thư, thư từ; tin tưởng", "我每个月都给家里写信。", "Wǒ měi ge yuè dōu gěi jiā lǐ xiě xìn.", "Mỗi tháng tôi đều viết thư về thăm hỏi gia đình."),
        ("想念", "xiǎngniàn", "Động từ", "tưởng niệm", "Nhớ nhung, hoài niệm", "出国久了，我很想念家乡和父母。", "Chūguó jiǔ le, wǒ hěn xiǎngniàn jiāxiāng hé fùmǔ.", "Ra nước ngoài lâu ngày, tôi rất nhớ quê nhà và cha mẹ."),
        ("放假", "fàngjià", "Động từ", "phóng giả", "Nghỉ lễ, nghỉ phép", "学校什么时候开始放假？", "Xuéxiào shénme shíhou kāishǐ fàngjià?", "Khi nào thì trường học bắt đầu cho nghỉ lễ?"),
        ("回家", "huíjiā", "Động từ", "hồi gia", "Về nhà", "暑假到了，大部分留学生都回家探亲。", "Shǔjià dào le, dà bùfen liúxuéshēng dōu huíjiā tànqīn.", "Kỳ nghỉ hè tới rồi, phần lớn lưu học sinh đều về nước thăm gia đình."),
        ("暑假", "shǔjià", "Danh từ", "thử giả", "Kỳ nghỉ hè", "暑假有两个月那么长。", "Shǔjià yǒu liǎng ge yuè nàme cháng.", "Kỳ nghỉ hè kéo dài tới hai tháng liền."),
        ("寒假", "hánjià", "Danh từ", "hàn giả", "Kỳ nghỉ đông", "北方大学的寒假一般比较长。", "Běifāng dàxué de hánjià yìbān bǐjiào cháng.", "Kỳ nghỉ đông của các trường miền bắc thường khá dài."),
        ("机票", "jīpiào", "Danh từ", "cơ phiếu", "Vé máy bay", "他在网上订了一张回国的机票。", "Tā zài wǎngshang dìng le yì zhāng huíguó de jīpiào.", "Cậu ấy đã đặt trên mạng một tấm vé máy bay về nước.")
    ],
    28: [
        ("考", "kǎo", "Động từ", "khảo", "Thi cử, kiểm tra", "今天下午我们考听力。", "Jīntiān xiàwǔ wǒmen kǎo tīnglì.", "Chiều nay chúng mình thi kỹ năng nghe."),
        ("不错", "búcuò", "Tính từ", "bất thác", "Không tệ, rất tốt, chuẩn", "这部电影真不错。", "Zhè bù diànyǐng zhēn búcuò.", "Bộ phim này xem thực sự không tệ chút nào."),
        ("还行", "hái xíng", "Cụm từ", "hoàn hành", "Cũng tạm được, cũng ổn", "考试题目不算太难，考得还行。", "Kǎoshì tímù bú suàn tài nán, kǎo de hái xíng.", "Đề thi không quá khó, làm bài cũng tạm ổn."),
        ("糟糕", "zāogāo", "Tính từ", "tao gao", "Gay go rồi, tệ hại, hỏng bét", "糟糕，我把钱包忘在家里了！", "Zāogāo, wǒ bǎ qiánbāo wàng zài jiā lǐ le!", "Gay rồi, tôi để quên ví tiền ở nhà mất rồi!"),
        ("满意", "mǎnyì", "Tính từ/Động từ", "mãn ý", "Hài lòng, vừa ý", "老师对这次考试成绩很满意。", "Lǎoshī duì zhè cì kǎoshì chéngjì hěn mǎnyì.", "Thầy giáo rất hài lòng về kết quả thi lần này."),
        ("语法", "yǔfǎ", "Danh từ", "ngữ pháp", "Ngữ pháp", "博雅教材的语法讲解很系统。", "Bóyǎ jiàocái de ngữ pháp讲解 rất hệ thống.", "Giải thích ngữ pháp của giáo trình Boya rất hệ thống."),
        ("听力", "tīnglì", "Danh từ", "thính lực", "Kỹ năng nghe hiểu", "多做听力练习对学语言很有好处。", "Duō zuò tīnglì liànxí duì xué yǔyán hěn yǒu hǎochu.", "Luyện nghe nhiều rất có lợi cho việc học ngôn ngữ."),
        ("口语", "kǒuyǔ", "Danh từ", "khẩu ngữ", "Kỹ năng nói, khẩu ngữ", "他的汉语口语很地道。", "Tā de Hànyǔ kǒuyǔ hěn dìdao.", "Khẩu ngữ tiếng Hán của anh ấy rất tự nhiên và bản xứ."),
        ("阅读", "yuèdú", "Động từ/Danh từ", "duyệt độc", "Đọc hiểu, kỹ năng đọc", "每天阅读一篇短文能扩大词汇量。", "Měitiān yuèdú yì piān duǎnwén néng kuòdà cíhuìliàng.", "Hàng ngày đọc một mẩu bài ngắn giúp mở rộng vốn từ vựng."),
        ("写作", "xiězuò", "Động từ/Danh từ", "tả tác", "Viết lách, kỹ năng viết", "多写短文能提高写作水平。", "Duō xiě duǎnwén néng tígāo xiězuò shuǐpíng.", "Viết nhiều đoạn văn ngắn có thể nâng cao kỹ năng viết.")
    ],
    29: [
        ("买好", "mǎihǎo", "Động từ", "mãi hảo", "Đã mua xong, mua chuẩn bị xong", "我已经买好明天去上海的火车票了。", "Wǒ yǐjīng mǎihǎo míngtiān qù Shànghǎi de huǒchēpiào le.", "Tôi đã mua xong vé tàu hỏa đi Thượng Hải ngày mai rồi."),
        ("票", "piào", "Danh từ", "phiếu", "Vé", "入场需要门票。", "Rùchǎng xūyào ménpiào.", "Vào cửa cần phải xuất trình vé."),
        ("门票", "ménpiào", "Danh từ", "môn phiếu", "Vé vào cổng, vé tham quan", "故宫的门票六十元一张。", "Gùgōng de ménpiào liùshí yuán yì zhāng.", "Vé vào cửa Cố Cung sáu mươi tệ một vé."),
        ("火车票", "huǒchēpiào", "Danh từ", "hỏa xa phiếu", "Vé tàu hỏa", "春运期间火车票很难买。", "Chūnyùn qījiān huǒchēpiào hěn nán mǎi.", "Dịp tết xuân vận vé tàu hỏa rất khó mua."),
        ("出发", "chūfā", "Động từ", "xuất phát", "Khởi hành, xuất phát", "明早七点准时出发。", "Míngzǎo qī diǎn zhǔnshí chūfā.", "Sáng mai đúng 7 giờ sẽ khởi hành xuất phát."),
        ("准时", "zhǔnshí", "Tính từ/Phó từ", "chuẩn thời", "Đúng giờ", "大家请准时到达集合地点。", "Dàjiā qǐng zhǔnshí dàodá jíhé dìdiǎn.", "Mời mọi người đến điểm tập trung đúng giờ quy định."),
        ("整理", "zhěnglǐ", "Động từ", "chỉnh lý", "Sắp xếp, thu dọn, chỉnh đốn", "出发前要把行李整理好。", "Chūfā qián yào bǎ xíngli zhěnglǐ hǎo.", "Trước khi khởi hành phải thu xếp hành lý cho ngăn nắp."),
        ("行李", "xíngli", "Danh từ", "hành lý", "Hành lý", "他的行李箱装得满满的。", "Tā de xínglixiāng zhuāng de mǎnmǎn de.", "Chiếc vali hành lý của cậu ấy nhét đầy ắp đồ."),
        ("旅途", "lǚtú", "Danh từ", "lữ đồ", "Chuyến đi, lộ trình du lịch", "祝你们旅途愉快！", "Zhù nǐmen lǚtú yúkuài!", "Chúc các bạn có một chuyến đi du lịch thật vui vẻ!"),
        ("顺利", "shùnlì", "Tính từ", "thuận lợi", "Thuận lợi, suôn sẻ", "这次旅行一切都非常顺利。", "Zhè cì lǚxíng yíqiè dōu fēicháng shùnlì.", "Chuyến du lịch lần này mọi việc đều vô cùng suôn sẻ.")
    ],
    30: [
        ("联欢会", "liánhuānhuì", "Danh từ", "liên hoan hội", "Buổi họp mặt liên hoan, dạ hội", "元旦前夕学校举办了新年联欢会。", "Yuándàn qiánxī xuéxiào jǔbàn le xīnnián liánhuānhuì.", "Đêm trước Tết Dương lịch trường đã tổ chức một buổi dạ hội mừng năm mới."),
        ("表演", "biǎoyǎn", "Động từ/Danh từ", "biểu diễn", "Biểu diễn, trình diễn; tiết mục", "留学生们表演了精彩的节目。", "Liúxuéshēngmen biǎoyǎn le jīngcǎi de jiémù.", "Các bạn du học sinh đã trình diễn những tiết mục rất đặc sắc."),
        ("节目", "jiémù", "Danh từ", "tiết mục", "Tiết mục biểu diễn, chương trình", "晚会的节目非常丰富多样。", "Wǎnhuì de jiémù fēicháng fēngfù duōyàng.", "Tiết mục của đêm liên hoan vô cùng đa dạng và phong phú."),
        ("唱歌", "chànggē", "Động từ", "xướng ca", "Ca hát, hát", "她唱歌唱得非常好听。", "Tā chànggē chàng de fēicháng hǎotīng.", "Cô ấy hát rất hay và truyền cảm."),
        ("跳舞", "tiàowǔ", "Động từ", "khiêu vũ", "Khiêu vũ, múa", "大家一边唱歌一边跳舞。", "Dàjiā yìbiān chànggē yìbiān tiàowǔ.", "Mọi người vừa ca hát lại vừa cùng nhau khiêu vũ nhảy múa."),
        ("精彩", "jīngcǎi", "Tính từ", "tinh thải", "Đặc sắc, tuyệt vời, kỳ diệu", "昨天的足球比赛非常精彩。", "Zuótiān de zúqiú bǐsài fēicháng jīngcǎi.", "Trận đấu bóng đá hôm qua vô cùng đặc sắc."),
        ("欢迎", "huānyíng", "Động từ", "hoan nghênh", "Chào đón, nhiệt liệt hoan nghênh", "热烈欢迎新同学的到来！", "Rèliè huānyíng xīn tóngxué de dàolái!", "Nhiệt liệt chào đón sự có mặt của các bạn học sinh mới!"),
        ("结束", "jiéshù", "Động từ", "kết thúc", "Kết thúc, hoàn thành", "联欢会在热烈的掌声中结束了。", "Liánhuānhuì zài rèliè de zhǎngshēng zhōng jiéshù le.", "Buổi liên hoan đã khép lại trong tràng pháo tay nồng nhiệt."),
        ("难忘", "nánwàng", "Tính từ", "nan vong", "Khó quên, đáng nhớ", "这是一个难忘而美好的夜晚。", "Zhè shì yí ge nánwàng ér měihǎo de yèwǎn.", "Đây thật là một đêm dạ hội đáng nhớ và tuyệt đẹp.")
    ]
}

def generate_ts():
    all_words = []
    lesson_counts = {}

    for les_num in sorted(RAW_VOCAB.keys()):
        raw_list = RAW_VOCAB[les_num]
        les_meta = next(l for l in LESSONS if l["number"] == les_num)
        unit_meta = next(u for u in UNITS if u["unit"] == les_meta["unit"])
        lesson_counts[les_num] = len(raw_list)

        for idx, item in enumerate(raw_list, 1):
            hz, py, pos, hv, vn, ex_zh, ex_py, ex_vn = item
            if not hv:
                hv = get_hanviet(hz)
            
            word_id = f"boya1-{les_num:02d}-{idx:02d}"
            all_words.append({
                "id": word_id,
                "lesson": les_num,
                "lessonTitle": f"Bài {les_num}: {les_meta['titleZh']} ({les_meta['titleVi']})",
                "unit": les_meta["unit"],
                "unitTitle": f"Đơn vị {les_meta['unit']}: {unit_meta['title']}",
                "hanzi": hz,
                "pinyin": py,
                "sinoVietnamese": hv,
                "partOfSpeech": pos,
                "meaning": vn,
                "hskLevel": "boya1",
                "exampleSentence": {
                    "chinese": ex_zh,
                    "pinyin": ex_py,
                    "vietnamese": ex_vn
                }
            })

    lessons_output = []
    for l in LESSONS:
        lessons_output.append({
            **l,
            "wordCount": lesson_counts.get(l["number"], 0)
        })

    ts_code = f"""// src/data/boya1Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 1 (30 bài học, 6 đơn vị)
// Generated automatically from verified curriculum sources.

import type {{ VocabularyWord }} from '../types';

export interface BoyaUnit {{
  unit: number;
  title: string;
  titleZh: string;
  description: string;
  lessonRange: string;
  lessons: number[];
}}

export interface BoyaLesson {{
  number: number;
  unit: number;
  titleZh: string;
  titlePinyin: string;
  titleVi: string;
  wordCount: number;
}}

export interface BoyaVocabularyWord extends VocabularyWord {{
  lesson: number;
  lessonTitle: string;
  unitTitle: string;
}}

export const BOYA1_UNITS: BoyaUnit[] = {json.dumps(UNITS, ensure_ascii=False, indent=2)};

export const BOYA1_LESSONS: BoyaLesson[] = {json.dumps(lessons_output, ensure_ascii=False, indent=2)};

export const BOYA1_VOCABULARY: BoyaVocabularyWord[] = {json.dumps(all_words, ensure_ascii=False, indent=2)};

/**
 * Lấy danh sách từ vựng theo số thứ tự bài học (1-30)
 */
export function getBoyaWordsByLesson(lessonNum: number): BoyaVocabularyWord[] {{
  return BOYA1_VOCABULARY.filter(w => w.lesson === lessonNum);
}}

/**
 * Lấy danh sách từ vựng theo Đơn vị (1-6)
 */
export function getBoyaWordsByUnit(unitNum: number): BoyaVocabularyWord[] {{
  return BOYA1_VOCABULARY.filter(w => w.unit === unitNum);
}}

/**
 * Thống kê từ vựng Boya 1
 */
export const BOYA1_STATS = {{
  totalWords: {len(all_words)},
  totalLessons: {len(LESSONS)},
  totalUnits: {len(UNITS)}
}};
"""

    os.makedirs('src/data', exist_ok=True)
    with open('src/data/boya1Data.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)
    
    print(f"Successfully generated src/data/boya1Data.ts with {len(all_words)} words across 30 lessons.")

if __name__ == '__main__':
    generate_ts()
