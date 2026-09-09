# -*- coding: utf-8 -*-
import os
import json
import csv
import re

# 1. Load hanviet map
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

# 2. Curated examples for the 56 remaining items
MANUAL_EXAMPLES = {
    "大卫": {"chinese": "大卫是我的好朋友。", "pinyin": "Dàwèi shì wǒ de hǎo péngyou.", "vietnamese": "David là bạn tốt của tôi."},
    "李军": {"chinese": "李军也是中国留学生。", "pinyin": "Lǐ Jūn yě shì Zhōngguó liúxuéshēng.", "vietnamese": "Lý Quân cũng là lưu học sinh Trung Quốc."},
    "王": {"chinese": "王老师教我们汉语。", "pinyin": "Wáng lǎoshī jiāo wǒmen Hànyǔ.", "vietnamese": "Thầy Vương dạy chúng tôi tiếng Trung."},
    "英语": {"chinese": "他会说英语和汉语。", "pinyin": "Tā huì shuō Yīngyǔ hé Hànyǔ.", "vietnamese": "Anh ấy biết nói tiếng Anh và tiếng Trung."},
    "法语": {"chinese": "我的姐姐在大学学法语。", "pinyin": "Wǒ de jiějie zài dàxué xué Fǎyǔ.", "vietnamese": "Chị gái tôi học tiếng Pháp ở trường đại học."},
    "韩语": {"chinese": "你会说韩语吗？", "pinyin": "Nǐ huì shuō Hányǔ ma?", "vietnamese": "Bạn có biết nói tiếng Hàn không?"},
    "中国": {"chinese": "我喜欢去中国旅行。", "pinyin": "Wǒ xǐhuan qù Zhōngguó lǚxíng.", "vietnamese": "Tôi thích đi du lịch Trung Quốc."},
    "美国": {"chinese": "他是美国留学生。", "pinyin": "Tā shì Měiguó liúxuéshēng.", "vietnamese": "Cậu ấy là du học sinh Mỹ."},
    "英国": {"chinese": "英国的天气常常下雨。", "pinyin": "Yīngguó de tiānqì chángcháng xià yǔ.", "vietnamese": "Thời tiết ở nước Anh thường hay mưa."},
    "法国": {"chinese": "我想去法国看埃菲尔铁塔。", "pinyin": "Wǒ xiǎng qù Fǎguó kàn Āifēi'ěr Tiětǎ.", "vietnamese": "Tôi muốn đến Pháp ngắm tháp Eiffel."},
    "日本": {"chinese": "他在日本工作过两年。", "pinyin": "Tā zài Rìběn gōngzuò guo liǎng nián.", "vietnamese": "Anh ấy từng làm việc ở Nhật Bản hai năm."},
    "韩国": {"chinese": "韩国泡菜非常好吃。", "pinyin": "Hánguó pàocài fēicháng hǎochī.", "vietnamese": "Kim chi Hàn Quốc rất ngon."},
    "加拿大": {"chinese": "他打算明年去加拿大留学。", "pinyin": "Tā dǎsuàn míngnián qù Jiānádà liúxué.", "vietnamese": "Cậu ấy dự định năm sau đi du học Canada."},
    "汉字": {"chinese": "学好汉字需要多练习。", "pinyin": "Xué hǎo Hànzì xūyào duō liànxí.", "vietnamese": "Học tốt chữ Hán cần phải luyện tập nhiều."},
    "不用谢": {"chinese": "不用谢，这是我应该做的。", "pinyin": "Búyòng xiè, zhè shì wǒ yīnggāi zuò de.", "vietnamese": "Không cần cảm ơn, đây là việc tôi nên làm."},
    "北京大学": {"chinese": "北京大学是中国著名的高校。", "pinyin": "Běijīng Dàxué shì Zhōngguó zhùmíng de gāoxiào.", "vietnamese": "Đại học Bắc Kinh là trường đại học nổi tiếng của Trung Quốc."},
    "清华大学": {"chinese": "他的哥哥在清华大学读研究生。", "pinyin": "Tā de gēge zài Qīnghuá Dàxué dú yánjiūshēng.", "vietnamese": "Anh trai của cậu ấy học cao học ở Đại học Thanh Hoa."},
    "大部分": {"chinese": "大部分学生都按时来上课了。", "pinyin": "Dà bùfen xuésheng dōu ànshí lái shàngkè le.", "vietnamese": "Phần lớn học sinh đều đã đến lớp đúng giờ."},
    "一会见": {"chinese": "我现在有事，一会见！", "pinyin": "Wǒ xiànzài yǒu shì, yíhuìr jiàn!", "vietnamese": "Bây giờ tôi có việc, lát nữa gặp lại nhé!"},
    "没问题": {"chinese": "这件事包在我身上，没问题！", "pinyin": "Zhè jiàn shì bāo zài wǒ shēnshang, méi wèntí!", "vietnamese": "Việc này cứ để tôi, không thành vấn đề!"},
    "车棚": {"chinese": "我的自行车停在宿舍楼下的车棚里。", "pinyin": "Wǒ de zìxíngchē tíng zài sùshè lóu xià de chēpéng lǐ.", "vietnamese": "Xe đạp của tôi để ở nhà xe dưới tầng ký túc xá."},
    "爸": {"chinese": "我爸每天早上都去公园跑步。", "pinyin": "Wǒ bà měitiān zǎoshang dōu qù gōngyuán pǎobù.", "vietnamese": "Bố tôi mỗi sáng đều ra công viên chạy bộ."},
    "妈": {"chinese": "我妈做的饭特别香。", "pinyin": "Wǒ mā zuò de fàn tèbié xiāng.", "vietnamese": "Cơm mẹ tôi nấu thơm ngon đặc biệt."},
    "狗": {"chinese": "我家养了一只可爱的小狗。", "pinyin": "Wǒ jiā yǎng le yì zhī kě'ài de xiǎogǒu.", "vietnamese": "Nhà tôi nuôi một chú cún con rất đáng yêu."},
    "独生子": {"chinese": "他是家里的独生子，深受父母宠爱。", "pinyin": "Tā shì jiā lǐ de dúshēngzǐ, shēn shòu fùmǔ chǒng'ài.", "vietnamese": "Cậu ấy là con trai duy nhất trong nhà, rất được bố mẹ yêu thương."},
    "事儿": {"chinese": "你找我有什么事儿吗？", "pinyin": "Nǐ zhǎo wǒ yǒu shénme shìr ma?", "vietnamese": "Bạn tìm tôi có việc gì thế?"},
    "发": {"chinese": "请把资料发到我的邮箱。", "pinyin": "Qǐng bǎ zīliào fā dào wǒ de yóuxiāng.", "vietnamese": "Xin hãy gửi tài liệu vào hòm thư của tôi."},
    "电子邮件": {"chinese": "我今天收到了老师的电子邮件。", "pinyin": "Wǒ jīntiān shōudào le lǎoshī de diànzǐ yóujiàn.", "vietnamese": "Hôm nay tôi đã nhận được email của thầy giáo."},
    "阅览室": {"chinese": "我们在阅览室看中文杂志。", "pinyin": "Wǒmen zài yuèlǎnshì kàn Zhōngwén zázhì.", "vietnamese": "Chúng tôi đọc tạp chí tiếng Trung ở phòng đọc sách."},
    "借书证": {"chinese": "去图书馆借书需要出示借书证。", "pinyin": "Qù túshūguǎn jiè shū xūyào chūshì jièshūzhèng.", "vietnamese": "Đến thư viện mượn sách cần xuất trình thẻ mượn sách."},
    "看起来": {"chinese": "你今天看起来很高兴，有什么好事吗？", "pinyin": "Nǐ jīntiān kàn qilai hěn gāoxìng, yǒu shénme hǎoshì ma?", "vietnamese": "Hôm nay trông bạn rất vui, có chuyện gì tốt à?"},
    "好好儿": {"chinese": "周末我想好好儿睡一觉。", "pinyin": "Zhōumò wǒ xiǎng hǎohāor shuì yí jiào.", "vietnamese": "Cuối tuần tôi muốn ngủ một giấc thật đã."},
    "睡懒觉": {"chinese": "平时上班太累，星期天我就喜欢睡懒觉。", "pinyin": "Píngshí shàngbān tài lèi, xīngqītiān wǒ jiù xǐhuan shuì lǎnjiào.", "vietnamese": "Ngày thường đi làm mệt quá, chủ nhật tôi thích ngủ nướng."},
    "收下": {"chinese": "这是我一点儿小小心意，请您收下。", "pinyin": "Zhè shì wǒ yìdiǎnr xiǎoxiǎo xīnyì, qǐng nín shōuxia.", "vietnamese": "Đây là chút lòng thành của tôi, xin ngài nhận lấy."},
    "迪厅": {"chinese": "星期六晚上他们一起去迪厅跳舞。", "pinyin": "Xīngqīliù wǎnshang tāmen yìqǐ qù dítīng tiàowǔ.", "vietnamese": "Tối thứ bảy họ cùng nhau đến vũ trường khiêu vũ."},
    "音乐会": {"chinese": "明天晚上学校大礼堂有一场音乐会。", "pinyin": "Míngtiān wǎnshang xuéxiào dà lǐtáng yǒu yì chǎng yīnyuèhuì.", "vietnamese": "Tối mai ở hội trường lớn của trường có một buổi hòa nhạc."},
    "生词": {"chinese": "学每篇课文前要先预习生词。", "pinyin": "Xué měi piān kèwén qián yào xiān yùxí shēngcí.", "vietnamese": "Trước khi học mỗi bài khóa cần chuẩn bị trước từ mới."},
    "对了": {"chinese": "对了，你明天有空跟我去书店吗？", "pinyin": "Duì le, nǐ míngtiān yǒu kòng gēn wǒ qù shūdiàn ma?", "vietnamese": "Đúng rồi, ngày mai bạn có rảnh đi nhà sách với tôi không?"},
    "不停": {"chinese": "外面雨下个不停，我们不能出去了。", "pinyin": "Wàimiàn yǔ xià ge bùtíng, wǒmen bù néng chūqu le.", "vietnamese": "Bên ngoài mưa rơi không ngớt, chúng ta không thể đi ra ngoài được rồi."},
    "刚": {"chinese": "我刚下课，准备去食堂吃午饭。", "pinyin": "Wǒ gāng xiàkè, zhǔnbèi qù shítáng chī wǔfàn.", "vietnamese": "Tôi vừa tan học, chuẩn bị đến nhà ăn dùng bữa trưa."},
    "昨晚": {"chinese": "昨晚我复习功课复习得很晚。", "pinyin": "Zuówǎn wǒ fùxí gōngkè fùxí de hěn wǎn.", "vietnamese": "Tối qua tôi ôn bài học đến rất khuya."},
    "打网球": {"chinese": "他每个周末都和朋友打网球。", "pinyin": "Tā měi ge zhōumò dōu hé péngyou dǎ wǎngqiú.", "vietnamese": "Mỗi cuối tuần anh ấy đều chơi quần vợt với bạn."},
    "太极拳": {"chinese": "很多老人在公园里打太极拳。", "pinyin": "Hěn duō lǎorén zài gōngyuán lǐ dǎ tàijíquán.", "vietnamese": "Rất nhiều người lớn tuổi tập Thái Cực Quyền trong công viên."},
    "国外": {"chinese": "毕业后她打算去国外深造。", "pinyin": "Bìyè hòu tā dǎsuàn qù guówài shēnzào.", "vietnamese": "Sau khi tốt nghiệp cô ấy dự định ra nước ngoài học nâng cao."},
    "国内": {"chinese": "放假期间国内旅游的人很多。", "pinyin": "Fàngjià qījiān guónèi lǚyóu de rén hěn duō.", "vietnamese": "Trong kỳ nghỉ lễ người đi du lịch trong nước rất đông."},
    "祝一路平安": {"chinese": "明天你回国了，祝你一路平安！", "pinyin": "Míngtiān nǐ huí guó le, zhù nǐ yílù píng'ān!", "vietnamese": "Ngày mai bạn về nước rồi, chúc bạn thượng lộ bình an!"},
    "还可以": {"chinese": "今天考试的题目虽然有点难，但我感觉还可以。", "pinyin": "Jīntiān kǎoshì de tímù suīrán yǒudiǎn nán, dàn wǒ gǎnjué hái kěyǐ.", "vietnamese": "Đề thi hôm nay tuy hơi khó nhưng tôi cảm thấy cũng tàm tạm."},
    "软卧": {"chinese": "从北京去上海我们订了软卧车票。", "pinyin": "Cóng Běijīng qù Shànghǎi wǒmen dìng le ruǎnwò chēpiào.", "vietnamese": "Từ Bắc Kinh đi Thượng Hải chúng tôi đã đặt vé giường nằm mềm."},
    "硬卧": {"chinese": "坐硬卧虽然便宜一些，但也很舒服。", "pinyin": "Zuò yìngwò suīrán piányi yìxiē, dàn yě hěn shūfu.", "vietnamese": "Đi giường nằm cứng tuy rẻ hơn một chút nhưng cũng rất thoải mái."},
    "软座": {"chinese": "短途旅行坐软座是最方便的选择。", "pinyin": "Duǎntú lǚxíng zuò ruǎnzuò shì zuì fāngbiàn de xuǎnzé.", "vietnamese": "Chuyến đi cự ly ngắn ngồi ghế mềm là lựa chọn tiện lợi nhất."},
    "硬座": {"chinese": "春运期间硬座车厢里非常拥挤。", "pinyin": "Chūnyùn qījiān yìngzuò chēxiāng lǐ fēicháng yōngjǐ.", "vietnamese": "Vào dịp tết toa ghế cứng trên tàu cực kỳ đông đúc."},
    "超重": {"chinese": "托运行李不能超重，否则需要多交费用。", "pinyin": "Tuōyùn xíngli bù néng chāozhòng, fǒuzé xūyào duō jiāo fèiyong.", "vietnamese": "Hành lý ký gửi không được quá cân, nếu không sẽ phải trả thêm phí."},
    "安全": {"chinese": "过马路时一定要注意交通安全。", "pinyin": "Guò mǎlù shí yídìng yào zhùyì jiāotōng ānquán.", "vietnamese": "Khi qua đường nhất định phải chú ý an toàn giao thông."},
    "弹钢琴": {"chinese": "妹妹从小就喜欢弹钢琴。", "pinyin": "Mèimei cóngxiǎo jiù xǐhuan tán gāngqín.", "vietnamese": "Em gái từ nhỏ đã thích chơi đàn piano."},
    "拉小提琴": {"chinese": "联欢会上他为大家拉小提琴。", "pinyin": "Liánhuānhuì shang tā wèi dàjiā lā xiǎotíqín.", "vietnamese": "Tại buổi liên hoan anh ấy kéo đàn violin cho mọi người nghe."},
    "讲故事": {"chinese": "老师正在给小朋友们讲成语故事。", "pinyin": "Lǎoshī zhèngzài gěi xiǎopéngyoumen jiǎng chéngyǔ gùshi.", "vietnamese": "Thầy giáo đang kể chuyện thành ngữ cho các em nhỏ nghe."}
}

# 3. Load existing boya1Data.ts sentences
existing_examples = {}
if os.path.exists('src/data/boya1Data.ts'):
    with open('src/data/boya1Data.ts', encoding='utf-8') as f:
        content = f.read()
    m = re.search(r'export const BOYA1_VOCABULARY: BoyaVocabularyWord\[\] = (\[.*?\]);', content, re.DOTALL)
    if m:
        for w in json.loads(m.group(1)):
            if w.get('exampleSentence'):
                existing_examples[w['hanzi']] = w['exampleSentence']

# 4. Load HSK matched examples
hsk_examples = {}
if os.path.exists('scripts/matched_from_hsk.json'):
    with open('scripts/matched_from_hsk.json', encoding='utf-8') as f:
        hsk_examples = json.load(f)

# 5. Units definition
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

LESSONS_META = [
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
    {"number": 22, "unit": 5, "titleZh": "我感冒了", "titlePinyin": "Wǒ gǎnmào le", "titleVi": "Tôi bị cảm rồi"},
    {"number": 23, "unit": 5, "titleZh": "你学了多长时间汉语", "titlePinyin": "Nǐ xué le duō cháng shíjiān Hànyǔ", "titleVi": "Bạn học tiếng Trung được bao lâu rồi"},
    {"number": 24, "unit": 5, "titleZh": "你吃了早饭来找我", "titlePinyin": "Nǐ chī le zǎofàn lái zhǎo wǒ", "titleVi": "Bạn ăn sáng xong đến tìm tôi nhé"},
    {"number": 25, "unit": 5, "titleZh": "你得多锻炼锻炼了", "titlePinyin": "Nǐ děi duō duànliàn duànliàn le", "titleVi": "Bạn cần phải rèn luyện nhiều hơn rồi"},

    {"number": 26, "unit": 6, "titleZh": "快考试了", "titlePinyin": "Kuài kǎoshì le", "titleVi": "Sắp thi rồi"},
    {"number": 27, "unit": 6, "titleZh": "爸爸妈妈让我回家", "titlePinyin": "Bàba māma ràng wǒ huíjiā", "titleVi": "Bố mẹ bảo tôi về nhà"},
    {"number": 28, "unit": 6, "titleZh": "考得怎么样", "titlePinyin": "Kǎo de zěnmeyàng", "titleVi": "Thi cử thế nào"},
    {"number": 29, "unit": 6, "titleZh": "我们已经买好票了", "titlePinyin": "Wǒmen yǐjīng mǎihǎo piào le", "titleVi": "Chúng tôi đã mua vé xong rồi"},
    {"number": 30, "unit": 6, "titleZh": "我要参加一个中国学生的联欢会", "titlePinyin": "Wǒ yào cānjiā yí ge Zhōngguó xuésheng de liánhuānhuì", "titleVi": "Tôi muốn tham gia buổi liên hoan sinh viên Trung Quốc"}
]

lesson_map = {l['number']: l for l in LESSONS_META}
unit_map = {u['unit']: u for u in UNITS}

def format_pos(raw):
    raw = raw.strip()
    if not raw:
        return "Từ vựng"
    # split by / or ,
    parts = re.split(r'[/,]', raw)
    cleaned = []
    for p in parts:
        p = p.strip()
        if p:
            cleaned.append(p[0].upper() + p[1:])
    return " / ".join(cleaned)

# 6. Read CSV
with open('data/boya1_vocab.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    csv_rows = list(reader)

all_words = []
lesson_word_counts = {}

for idx, row in enumerate(csv_rows):
    lesson_str = row['Bài học'].strip()
    # parse "Bài 1"
    m_les = re.search(r'\d+', lesson_str)
    lesson_num = int(m_les.group()) if m_les else 1
    
    lesson_word_counts[lesson_num] = lesson_word_counts.get(lesson_num, 0) + 1
    word_index_in_lesson = lesson_word_counts[lesson_num]
    
    hz = row['Chữ Hán'].strip()
    pinyin = row['Phiên âm Pinyin'].strip()
    pos = format_pos(row['Từ loại'])
    meaning = row['Nghĩa tiếng Việt'].strip()
    
    # Sino-Vietnamese
    sino = get_hanviet(hz)
    
    # Example sentence selection
    example = None
    if hz in existing_examples:
        example = existing_examples[hz]
    elif hz in MANUAL_EXAMPLES:
        example = MANUAL_EXAMPLES[hz]
    elif hz in hsk_examples:
        example = hsk_examples[hz]
    else:
        # Fallback default example
        example = {
            "chinese": f"这是{hz}。",
            "pinyin": f"Zhè shì {pinyin}.",
            "vietnamese": f"Đây là {meaning}."
        }
        
    les_meta = lesson_map.get(lesson_num, {"titleVi": f"Bài {lesson_num}", "titleZh": "", "unit": 1})
    u_num = les_meta['unit']
    u_meta = unit_map.get(u_num, {"title": f"Đơn vị {u_num}"})
    
    word_obj = {
        "id": f"boya1-{lesson_num}-{word_index_in_lesson}",
        "lesson": lesson_num,
        "lessonTitle": f"Bài {lesson_num}: {les_meta['titleZh']} ({les_meta['titleVi']})",
        "unit": u_num,
        "unitTitle": f"Đơn vị {u_num}: {u_meta['title']}",
        "hanzi": hz,
        "pinyin": pinyin,
        "sinoVietnamese": sino,
        "meaning": meaning,
        "partOfSpeech": pos,
        "hskLevel": "boya1",
        "exampleSentence": example
    }
    all_words.append(word_obj)

# Update wordCount in lessons
lessons_output = []
for l in LESSONS_META:
    l_copy = dict(l)
    l_copy['wordCount'] = lesson_word_counts.get(l['number'], 0)
    lessons_output.append(l_copy)

# 7. Generate boya1Data.ts
ts_code = f"""// src/data/boya1Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 1 (30 bài học, 6 đơn vị)
// Generated automatically from verified curriculum sources (503 chuẩn từ vựng).

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
  exampleSentence?: {{
    chinese: string;
    pinyin: string;
    vietnamese: string;
  }};
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
  totalLessons: {len(LESSONS_META)},
  totalUnits: {len(UNITS)}
}};
"""

with open('src/data/boya1Data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"SUCCESS: Generated src/data/boya1Data.ts with {len(all_words)} words across {len(LESSONS_META)} lessons.")
