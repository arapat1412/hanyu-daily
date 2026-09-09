# -*- coding: utf-8 -*-
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re
import csv
from pypinyin import pinyin, Style

# Load all parsed Boya 2 lessons from XieHanzi
with open('scripts/all_parsed_boya2_lessons.json', 'r', encoding='utf-8') as f:
    lessons_data = json.load(f)

# Curated high-quality examples for words lacking examples or having short collocations
CURATED_EXAMPLES = {
    "泰国": {"chinese": "明年暑假我想去泰国旅游。", "pinyin": "Míngnián shǔjià wǒ xiǎng qù Tàiguó lǚyóu.", "vietnamese": "Kỳ nghỉ hè năm sau tôi muốn đi du lịch Thái Lan."},
    "房租": {"chinese": "每个月五号以前必须交房租。", "pinyin": "Měi ge yuè wǔ hào yǐqián bìxū jiāo fángzū.", "vietnamese": "Trước ngày mùng 5 hàng tháng phải nộp tiền thuê nhà."},
    "衬衫": {"chinese": "他今天穿着一件白衬衫。", "pinyin": "Tā jīntiān chuān zhe yí jiàn bái chènshān.", "vietnamese": "Hôm nay anh ấy mặc một chiếc áo sơ mi trắng."},
    "寻": {"chinese": "警察正在寻找走失的孩子。", "pinyin": "Jǐngchá zhèngzài xúnzhǎo zǒushī de háizi.", "vietnamese": "Cảnh sát đang tìm kiếm đứa trẻ bị lạc."},
    "启事": {"chinese": "学校布告栏上贴了一张寻物启事。", "pinyin": "Xuéxiào bùgàolán shang tiē le yì zhāng xúnwù qǐshì.", "vietnamese": "Trên bảng thông báo của trường dán một tờ thông báo tìm đồ thất lạc."},
    "辣": {"chinese": "四川菜非常辣，但是很好吃。", "pinyin": "Sìchuān cài fēicháng là, dànshì hěn hǎochī.", "vietnamese": "Món ăn Tứ Xuyên rất cay, nhưng rất ngon."},
    "栏": {"chinese": "请看广告栏里的最新招聘信息。", "pinyin": "Qǐng kàn guǎnggàolán lǐ de zuìxīn zhāopìn xìnxī.", "vietnamese": "Xin hãy xem thông tin tuyển dụng mới nhất trong cột quảng cáo."},
    "贴": {"chinese": "墙上贴着一张世界地图。", "pinyin": "Qiáng shang tiē zhe yì zhāng shìjiè dìtú.", "vietnamese": "Trên tường dán một tấm bản đồ thế giới."},
    "交流": {"chinese": "多跟中国朋友交流能提高汉语水平。", "pinyin": "Duō gēn Zhōngguó péngyou jiāoliú néng tígāo Hànyǔ shuǐpíng.", "vietnamese": "Giao lưu nhiều với bạn Trung Quốc có thể nâng cao trình độ tiếng Hán."},
    "将": {"chinese": "下周学校将举办一场汉语演讲比赛。", "pinyin": "Xià zhōu xuéxiào jiāng jǔbàn yì chǎng Hànyǔ yǎnjiǎng bǐsài.", "vietnamese": "Tuần tới nhà trường sẽ tổ chức một cuộc thi hùng biện tiếng Hán."},
    "组织": {"chinese": "学生会组织了一次郊游活动。", "pinyin": "Xuéshēnghuì zǔzhī le yí cì jiāoyóu huódòng.", "vietnamese": "Hội học sinh đã tổ chức một hoạt động dã ngoại."},
    "酸": {"chinese": "这个柠檬太酸了，我吃不下。", "pinyin": "Zhè ge níngméng tài suān le, wǒ chī bu xià.", "vietnamese": "Quả chanh này chua quá, tôi không ăn nổi."},
    "塞": {"chinese": "他把书塞进了书包里。", "pinyin": "Tā bǎ shū sāi jìn le shūbāo lǐ.", "vietnamese": "Cậu ấy nhét sách vào trong cặp."},
    "猜": {"chinese": "你猜猜我手里拿的是什么？", "pinyin": "Nǐ cāicai wǒ shǒu lǐ ná de shì shénme?", "vietnamese": "Bạn đoán xem trong tay tôi cầm cái gì nào?"},
    "戴": {"chinese": "他戴着一副黑色的眼镜。", "pinyin": "Tā dài zhe yí fù hēisè de yǎnjìng.", "vietnamese": "Anh ấy đeo một cặp kính màu đen."},
    "副": {"chinese": "我买了一副新的手套。", "pinyin": "Wǒ mǎi le yí fù xīn de shǒutào.", "vietnamese": "Tôi đã mua một đôi găng tay mới."},
    "粗": {"chinese": "这棵大树的树干非常粗。", "pinyin": "Zhè kē dàshù de shùgàn fēicháng cū.", "vietnamese": "Thân cây to này rất to và thô."},
    "踢": {"chinese": "下午我们去操场踢足球吧。", "pinyin": "Xiàwǔ wǒmen qù cāochǎng tī zúqiú ba.", "vietnamese": "Chiều nay chúng mình ra sân tập đá bóng nhé."},
    "醒": {"chinese": "今天早上我六点就醒了。", "pinyin": "Jīntiān zǎoshang wǒ liù diǎn jiù xǐng le.", "vietnamese": "Sáng nay mới sáu giờ tôi đã tỉnh giấc rồi."},
    "扔": {"chinese": "请不要随地乱扔垃圾。", "pinyin": "Qǐng bú yào suídì luàn rēng lājī.", "vietnamese": "Xin đừng vứt rác bừa bãi khắp nơi."},
    "错过": {"chinese": "要是再不走，我们就会错过这趟火车。", "pinyin": "Yàoshi zài bù zǒu, wǒmen jiù huì cuòguò zhè tàng huǒchē.", "vietnamese": "Nếu không đi ngay thì chúng ta sẽ bỏ lỡ chuyến tàu này."},
    "后悔": {"chinese": "没能去留学，他感到非常后悔。", "pinyin": "Méi néng qù liúxué, tā gǎndào fēicháng hòuhuǐ.", "vietnamese": "Không thể đi du học, anh ấy cảm thấy rất hối hận."},
    "拐": {"chinese": "走到十字路口请向右拐。", "pinyin": "Zǒu dào shízì lùkǒu qǐng xiàng yòu guǎi.", "vietnamese": "Đi đến ngã tư xin hãy rẽ phải."},
    "近视": {"chinese": "经常看手机容易导致眼睛近视。", "pinyin": "Jīngcháng kàn shǒujī róngyì dǎozhì yǎnjìng jìnshì.", "vietnamese": "Thường xuyên xem điện thoại rất dễ dẫn đến cận thị mắt."},
    "脱": {"chinese": "进门前请先脱掉鞋子。", "pinyin": "Jìn mén qián qǐng xiān tuō diào xiézi.", "vietnamese": "Trước khi vào cửa xin hãy cởi giày ra."},
    "庙": {"chinese": "这座古庙已经有五百多年的历史了。", "pinyin": "Zhè zuò gǔ miào yǐjīng yǒu wǔbǎi duō nián de lìshǐ le.", "vietnamese": "Ngôi chùa cổ này đã có hơn năm trăm năm lịch sử."},
    "照": {"chinese": "我们在这里照一张合影吧。", "pinyin": "Wǒmen zài zhèlǐ zhào yì zhāng héyǐng ba.", "vietnamese": "Chúng mình chụp một tấm ảnh tập thể ở đây nhé."},
    "卧": {"chinese": "小狗在沙发上安静地卧着。", "pinyin": "Xiǎogǒu zài shāfā shang ānjìng de wò zhe.", "vietnamese": "Chú cún đang nằm ngoan ngoãn trên ghế sofa."},
    "登": {"chinese": "周末我们要去登长城。", "pinyin": "Zhōumò wǒmen yào qù dēng Chángchéng.", "vietnamese": "Cuối tuần chúng tôi sẽ đi leo Vạn Lý Trường Thành."},
    "难忘": {"chinese": "那是一次令人难忘的旅行。", "pinyin": "Nà shì yí cì lìng rén nánwàng de lǚxíng.", "vietnamese": "Đó là một chuyến du lịch khó quên."},
    "决心": {"chinese": "他下定决心一定要学好中文。", "pinyin": "Tā xiàdìng juéxīn yídìng yào xuéhǎo Zhōngwén.", "vietnamese": "Anh ấy hạ quyết tâm nhất định phải học giỏi tiếng Trung."},
    "加": {"chinese": "喝咖啡的时候请帮我加一点糖。", "pinyin": "Hē kāfēi de shíhou qǐng bāng wǒ jiā yìdiǎnr táng.", "vietnamese": "Lúc uống cà phê xin hãy cho thêm một chút đường giúp tôi."},
    "盐": {"chinese": "这道菜有点淡，需要加点儿盐。", "pinyin": "Zhè dào cài yǒudiǎnr dàn, xūyào jiā diǎnr yán.", "vietnamese": "Món này hơi nhạt, cần cho thêm một chút muối."},
    "尝": {"chinese": "你尝一尝这道菜好不好吃。", "pinyin": "Nǐ cháng yì cháng zhè dào cài hǎo bu hǎochī.", "vietnamese": "Bạn nếm thử món này xem có ngon không."},
    "香": {"chinese": "厨房里飘来了米饭的香味。", "pinyin": "Chúfáng lǐ piāo lái le mǐfàn de xiāngwèi.", "vietnamese": "Từ nhà bếp bay ra mùi cơm thơm phức."},
    "葱": {"chinese": "炒菜前先把葱切碎。", "pinyin": "Chǎo cài qián xiān bǎ cōng qiē suì.", "vietnamese": "Trước khi xào rau hãy thái nhỏ hành lá."},
    "姜": {"chinese": "煮汤时放两片姜可以去腥味。", "pinyin": "Zhǔ tāng shí fàng liǎng piàn jiāng kěyǐ qù xīngwèi.", "vietnamese": "Khi nấu canh cho hai lát gừng có thể khử mùi tanh."},
    "入": {"chinese": "请按顺序依次入内。", "pinyin": "Qǐng àn shùnxù yīcì rù nèi.", "vietnamese": "Xin hãy theo thứ tự lần lượt đi vào trong."},
    "按": {"chinese": "请按规定时间提交作业。", "pinyin": "Qǐng àn guīdìng shíjiān tíjiāo zuòyè.", "vietnamese": "Xin hãy nộp bài tập theo đúng thời gian quy định."},
    "下棋": {"chinese": "爷爷喜欢每天下午跟邻居下棋。", "pinyin": "Yéye xǐhuan měitiān xiàwǔ gēn línjū xiàqí.", "vietnamese": "Ông nội thích chơi cờ với hàng xóm vào mỗi buổi chiều."},
    "房东": {"chinese": "我的房东人非常热情和客气。", "pinyin": "Wǒ de fángdōng rén fēicháng rèqíng hé kèqi.", "vietnamese": "Bác chủ nhà của tôi rất nhiệt tình và lịch sự."},
    "暂时": {"chinese": "这个问题我们暂时还没有解决方案。", "pinyin": "Zhè ge wèntí wǒmen zànshí hái méiyǒu jiějué fāng'àn.", "vietnamese": "Vấn đề này chúng tôi tạm thời vẫn chưa có phương án giải quyết."},
    "辞": {"chinese": "他上个月辞职了，打算自己创业。", "pinyin": "Tā shàng ge yuè cízhí le, dǎsuàn zìjǐ chuàngyè.", "vietnamese": "Tháng trước anh ấy đã từ chức, dự định tự mình khởi nghiệp."},
    "奖": {"chinese": "他在中文演讲比赛中获得了一等奖。", "pinyin": "Tā zài Zhōngwén yǎnjiǎng bǐsài zhōng huòdé le yìděngjiǎng.", "vietnamese": "Cậu ấy đã đạt giải nhất trong cuộc thi hùng biện tiếng Hán."},
    "鼠": {"chinese": "小猫正在抓一只小老鼠。", "pinyin": "Xiǎomāo zhèngzài zhuā yì zhī xiǎolǎoshǔ.", "vietnamese": "Chú mèo con đang bắt một con chuột nhỏ."},
    "洞": {"chinese": "小兔子跑进了树洞里。", "pinyin": "Xiǎotùzi pǎo jìn le shù dòng lǐ.", "vietnamese": "Chú thỏ con đã chạy vào trong hốc cây."},
    "立": {"chinese": "校门口立着一块石碑。", "pinyin": "Xiào ménkǒu lì zhe yí kuài shíbēi.", "vietnamese": "Trước cổng trường dựng một tấm bia đá."},
    "拳": {"chinese": "他挥动拳头表达自己的力量。", "pinyin": "Tā huīdòng quántou biǎodá zìjǐ de lìliang.", "vietnamese": "Cậu ấy vung nắm đấm thể hiện sức mạnh của mình."},
    "忍": {"chinese": "牙疼得厉害，他实在忍不住了。", "pinyin": "Yá téng de lìhai, tā shízài rěn bu zhù le.", "vietnamese": "Đau răng dữ dội, anh ấy thực sự không chịu nổi nữa."},
    "羊": {"chinese": "草地上有一群白色的小山羊。", "pinyin": "Cǎodì shang yǒu yì qún báisè de xiǎoshānyáng.", "vietnamese": "Trên bãi cỏ có một đàn dê con màu trắng."},
    "炸": {"chinese": "弟弟最喜欢吃炸鸡翅。", "pinyin": "Dìdi zuì xǐhuan chī zhá jīchì.", "vietnamese": "Em trai thích ăn cánh gà chiên nhất."},
    "丝": {"chinese": "妈妈正在把土豆切成细丝。", "pinyin": "Māma zhèngzài bǎ tǔdòu qiē chéng xì sī.", "vietnamese": "Mẹ đang thái khoai tây thành sợi nhỏ."},
    "汤": {"chinese": "饭前喝一碗热汤对身体很好。", "pinyin": "Fàn qián hē yì wǎn rè tāng duì shēntǐ hěn hǎo.", "vietnamese": "Uống một bát canh nóng trước bữa ăn rất tốt cho sức khỏe."},
    "剥": {"chinese": "弟弟正在自己剥香蕉皮。", "pinyin": "Dìdi zhèngzài zìjǐ bāo xiāngjiāopí.", "vietnamese": "Em trai đang tự bóc vỏ chuối."},
    "细": {"chinese": "她做事情非常细心。", "pinyin": "Tā zuò shìqing fēicháng xìxīn.", "vietnamese": "Cô ấy làm việc vô cùng cẩn thận và tỉ mỉ."},
    "方式": {"chinese": "每个人都有自己的生活方式。", "pinyin": "Měi ge rén dōu yǒu zìjǐ de shēnghuó fāngshì.", "vietnamese": "Mỗi người đều có phương thức sống riêng của mình."},
    "活": {"chinese": "爷爷已经活了九十岁，身体依然硬朗。", "pinyin": "Yéye yǐjīng huó le jiǔshí suì, shēntǐ yīrán yìnglang.", "vietnamese": "Ông nội đã sống đến 90 tuổi, sức khỏe vẫn rất dẻo dai."},
    "暑假": {"chinese": "今年暑假你打算去哪里旅游？", "pinyin": "Jīnnián shǔjià nǐ dǎsuàn qù nǎlǐ lǚyóu?", "vietnamese": "Kỳ nghỉ hè năm nay bạn dự định đi du lịch ở đâu?"},
    "载": {"chinese": "他骑摩托车载着妹妹回家。", "pinyin": "Tā qí mótuōchē zài zhe mèimei huíjiā.", "vietnamese": "Anh ấy đi xe máy chở em gái về nhà."},
    "坡": {"chinese": "自行车骑上下坡的时候要特别小心。", "pinyin": "Zìxíngchē qí shàng xià pō de shíhou yào tèbié xiǎoxīn.", "vietnamese": "Khi đi xe đạp lên xuống dốc phải đặc biệt cẩn thận."},
    "量": {"chinese": "多读书能增加你的词汇量。", "pinyin": "Duō dúshū néng zēngjiā nǐ de cíhuìliàng.", "vietnamese": "Đọc nhiều sách có thể làm tăng vốn từ vựng của bạn."},
    "难道": {"chinese": "难道你真的不知道这件事吗？", "pinyin": "Nándào nǐ zhēn de bù zhīdào zhè jiàn shì ma?", "vietnamese": "Chẳng lẽ bạn thật sự không biết chuyện này sao?"},
    "脆": {"chinese": "这个苹果又甜又脆，非常好吃。", "pinyin": "Zhè ge píngguǒ yòu tián yòu cuì, fēicháng hǎochī.", "vietnamese": "Quả táo này vừa ngọt vừa giòn, rất ngon."},
    "顽皮": {"chinese": "那个小男孩非常顽皮可爱。", "pinyin": "Nà ge xiǎo nánhái fēicháng wánpí kě'ài.", "vietnamese": "Cậu bé kia rất nghịch ngợm đáng yêu."},
    "嫌": {"chinese": "他嫌房间太小，想换一间大的。", "pinyin": "Tā xián fángjiān tài xiǎo, xiǎng huàn yì jiān dà de.", "vietnamese": "Cậu ấy chê phòng nhỏ quá, muốn đổi một phòng lớn hơn."},
    "遮": {"chinese": "她用帽子遮住了阳光。", "pinyin": "Tā yòng màozi zhēzhù le yángguāng.", "vietnamese": "Cô ấy dùng mũ che đi ánh nắng."},
    "清晨": {"chinese": "清晨的公园空气非常清新。", "pinyin": "Qīngchén de gōngyuán kōngqì fēicháng qīngxīn.", "vietnamese": "Không khí trong công viên vào sáng sớm rất trong lành."},
    "拼": {"chinese": "大家一起拼搏，终于赢得了比赛。", "pinyin": "Dàjiā yìqǐ pīnbó, zhōngyú yíngdé le bǐsài.", "vietnamese": "Mọi người cùng nhau nỗ lực hết mình, cuối cùng đã thắng trận đấu."},
    "踏": {"chinese": "他脚踏实地，一步步走向成功。", "pinyin": "Tā jiǎotà-shídì, yíbù-bù zǒuxiàng chénggōng.", "vietnamese": "Anh ấy làm việc chắc chắn, từng bước một đi đến thành công."},
    "瓷": {"chinese": "中国景德镇的瓷器闻名世界。", "pinyin": "Zhōngguó Jǐngdézhèn de cíqì wénmíng shìjiè.", "vietnamese": "Đồ gốm sứ Cảnh Đức Trấn của Trung Quốc nổi tiếng thế giới."},
    "厚": {"chinese": "冬天到了，要穿厚衣服。", "pinyin": "Dōngtiān dào le, yào chuān hòu yīfu.", "vietnamese": "Mùa đông đến rồi, phải mặc quần áo dày."},
    "捧": {"chinese": "她双手捧着一杯热茶。", "pinyin": "Tā shuāngshǒu pěng zhe yì bēi rè chá.", "vietnamese": "Cô ấy hai tay nâng một tách trà nóng."},
    "端": {"chinese": "服务员给我们端上来了一盘热菜。", "pinyin": "Fúwùyuán gěi wǒmen duān shang lái le yì pán rè cài.", "vietnamese": "Người phục vụ bưng lên cho chúng tôi một đĩa đồ ăn nóng."},
    "愿": {"chinese": "愿你天天开心，学业进步！", "pinyin": "Yuàn nǐ tiāntiān kāixīn, xuéyè jìnbù!", "vietnamese": "Chúc bạn mỗi ngày đều vui vẻ, học tập tiến bộ!"},
    "伤口": {"chinese": "护士正在帮他处理伤口。", "pinyin": "Hùshi zhèngzài bāng tā chǔlǐ shāngkǒu.", "vietnamese": "Y tá đang giúp anh ấy xử lý vết thương."},
    "骄傲": {"chinese": "老师和父母都为你的成绩感到骄傲。", "pinyin": "Lǎoshī hé fùmǔ dōu wèi nǐ de chéngjì gǎndào jiāo'ào.", "vietnamese": "Thầy cô và cha mẹ đều cảm thấy tự hào về thành tích của con."},
    "放弃": {"chinese": "遇到困难千万不要轻易放弃。", "pinyin": "Yù dào kùnnan qiānwàn bú yào qīngyì fàngqì.", "vietnamese": "Khi gặp khó khăn tuyệt đối đừng dễ dàng từ bỏ."},
    "挨": {"chinese": "两座教学楼挨得很近。", "pinyin": "Liǎng zuò jiàoxuélóu āi de hěn jìn.", "vietnamese": "Hai toà nhà giảng đường nằm sát kề nhau."},
    "馋": {"chinese": "看到满桌的美食，我嘴馋极了。", "pinyin": "Kàndào mǎn zhuō de měishí, wǒ zuǐ chán jí le.", "vietnamese": "Trông thấy đồ ăn ngon đầy bàn, tôi thèm ơi là thèm."},
    "屋子": {"chinese": "请把屋子打扫得干干净净。", "pinyin": "Qǐng bǎ wūzi dǎsǎo de gāngānjìngjìng.", "vietnamese": "Xin hãy dọn dẹp căn phòng thật sạch sẽ."},
    "犯": {"chinese": "犯了错误就要勇敢改正。", "pinyin": "Fàn le cuòwù jiù yào yǒnggǎn gǎizhèng.", "vietnamese": "Phạm phải sai lầm thì phải dũng cảm sửa đổi."},
    "眼泪": {"chinese": "听到这个感人的故事，她流下了眼泪。", "pinyin": "Tīng dào zhè ge gǎnrén de gùshi, tā liúxià le yǎnlèi.", "vietnamese": "Nghe xong câu chuyện cảm động này, cô ấy đã rơi nước mắt."},
    "结论": {"chinese": "经过充分讨论，大家得出了统一的结论。", "pinyin": "Jīngguò chōngfèn tǎolùn, dàjiā déchū le tǒngyī de jiélùn.", "vietnamese": "Trải qua thảo luận kỹ lưỡng, mọi người đã rút ra được kết luận thống nhất."},
    "临": {"chinese": "临走前他向大家挥手告别。", "pinyin": "Lín zǒu qián tā xiàng dàjiā huīshǒu gàobié.", "vietnamese": "Trước lúc đi anh ấy vẫy tay chào tạm biệt mọi người."},
    "塌": {"chinese": "暴雨过后，那堵老墙塌了。", "pinyin": "Bàoyǔ guòhòu, nà dǔ lǎo qiáng tā le.", "vietnamese": "Sau cơn mưa lớn, bức tường cũ kia đã đổ sụp xuống."},
    "怀疑": {"chinese": "我们没有理由怀疑他的诚信。", "pinyin": "Wǒmen méiyǒu lǐyóu huáiyí tā de chéngxìn.", "vietnamese": "Chúng tôi không có lý do gì để nghi ngờ tính trung thực của anh ấy."},
    "了不起": {"chinese": "能在这个年纪取得这样的成就，真了不起！", "pinyin": "Néng zài zhè ge niánjì qǔdé zhèyàng de chéngjiù, zhēn liǎobuqǐ!", "vietnamese": "Có thể đạt được thành tựu như thế này ở độ tuổi này, thật là cừ khôi!"},
    "捎": {"chinese": "你能帮我给李老师捎一句话吗？", "pinyin": "Nǐ néng bāng wǒ gěi Lǐ lǎoshī shāo yí jù huà ma?", "vietnamese": "Bạn có thể nhắn hộ tôi một lời tới thầy Lý được không?"}
}

def clean_pinyin(raw_pinyin):
    if not raw_pinyin:
        return ""
    return raw_pinyin.replace('*', '')

def sentence_to_pinyin(text):
    res = []
    for char in text:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '？！?!…':
            res.append(char)
        elif char.strip():
            res.append(char)
    s = ' '.join(res)
    s = re.sub(r'\s+([,.\?!…])', r'\1', s)
    if s:
        s = s[0].upper() + s[1:]
    return s

def map_part_of_speech(w):
    wt = (w.get('wordType') or '').strip()
    wc = w.get('wordClasses') or []

    vi_map = {
        'noun': 'Danh từ',
        'verb': 'Động từ',
        'adjective': 'Tính từ',
        'adj': 'Tính từ',
        'pronoun': 'Đại từ',
        'adverb': 'Phó từ',
        'adv': 'Phó từ',
        'particle': 'Trợ từ',
        'preposition': 'Giới từ',
        'prep': 'Giới từ',
        'conjunction': 'Liên từ',
        'conj': 'Liên từ',
        'numeral': 'Số từ',
        'num': 'Số từ',
        'measure': 'Lượng từ',
        'classifier': 'Lượng từ',
        'interjection': 'Thán từ',
        'idiom': 'Thành ngữ',
        'phrase': 'Cụm từ',
        'locality': 'Từ chỉ phương vị',
        'onomatopoeia': 'Từ tượng thanh',
        'auxiliary': 'Trợ động từ',
        'proper-noun': 'Danh từ riêng'
    }

    wt_lower = wt.lower()
    for vn_k in ['danh từ', 'động từ', 'tính từ', 'đại từ', 'phó từ', 'trợ từ', 'thán từ', 'lượng từ', 'liên từ', 'giới từ', 'số từ', 'thành ngữ', 'cụm từ', 'trạng từ']:
        if vn_k in wt_lower:
            parts = re.split(r'[/,]', wt)
            cleaned_parts = [p.strip().capitalize() for p in parts if p.strip()]
            return ' / '.join(cleaned_parts)

    if wc:
        mapped = [vi_map.get(c, c.capitalize()) for c in wc]
        if mapped:
            return ' / '.join(mapped)

    if wt_lower in vi_map:
        return vi_map[wt_lower]

    return 'Từ vựng'

# 5 Units Definition for Boya Sơ cấp 2
UNITS = [
    {
        "unit": 1,
        "title": "Cuộc sống & Sinh hoạt thường nhật",
        "titleZh": "日常生活与交际",
        "description": "Các tình huống đàm thoại thực tế khi máy bay trễ, tìm phòng thuê ra ngoài ở, miêu tả trang phục và ẩm thực.",
        "lessonRange": "Bài 1 – 5",
        "lessons": [1, 2, 3, 4, 5]
    },
    {
        "unit": 2,
        "title": "Đời sống học đường & Hoạt động thể thao",
        "titleZh": "校园生活与文体活动",
        "description": "Đọc thông báo dán trên bảng tin, sinh hoạt ký túc xá, theo dõi trận đấu bóng kịch tính và leo núi ngắm cảnh.",
        "lessonRange": "Bài 6 – 10",
        "lessons": [6, 7, 8, 9, 10]
    },
    {
        "unit": 3,
        "title": "Kỹ năng sống & Giao tiếp xã hội",
        "titleZh": "生活技能与社会交往",
        "description": "Tự tay nấu món ăn gia đình, kinh nghiệm dọn dẹp chuyển nhà, viết thư thăm hỏi người thân và bí quyết thành công.",
        "lessonRange": "Bài 11 – 15",
        "lessons": [11, 12, 13, 14, 15]
    },
    {
        "unit": 4,
        "title": "Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
        "titleZh": "文化体验与生活感悟",
        "description": "Góc nhìn thú vị qua thói quen hằng ngày, viết nhật ký sinh viên, thưởng thức Kinh kịch truyền thống và những suy ngẫm sâu sắc.",
        "lessonRange": "Bài 16 – 20",
        "lessons": [16, 17, 18, 19, 20]
    },
    {
        "unit": 5,
        "title": "Du lịch kỳ nghỉ & Triết lý nhân sinh",
        "titleZh": "假日旅游与人生哲理",
        "description": "Kế hoạch du lịch dịp Tuần lễ vàng, trao đổi công việc qua điện thoại, câu chuyện vui hóm hỉnh và bài học làm người.",
        "lessonRange": "Bài 21 – 25",
        "lessons": [21, 22, 23, 24, 25]
    }
]

# Specific clean pinyin for Boya 2 lesson titles
TITLES_PY = {
    1: "Fēijī wǎndiǎn le",
    2: "Wǒ xiǎng bān dào wàimiàn qù",
    3: "Tā chuān zhe yí jiàn huáng chènshān",
    4: "Éluósī méiyǒu zhème duō zìxíngchē",
    5: "Zhè jiā cāntīng de cài búcuò",
    6: "Guǎnggàolán shang tiē zhe yí ge tōngzhī",
    7: "Bīngxiāng sāi de mǎnmǎn de",
    8: "Bǐsài hěn jīngcǎi",
    9: "Wǒ jìn bu qù le",
    10: "Shān shang de fēngjǐng měi jí le!",
    11: "Xīhóngshì chǎo jīdàn",
    12: "Bānjiā",
    13: "Yì fēng xìn",
    14: "Chénggōng xūyào duō cháng shíjiān",
    15: "Qǐng shāoděng",
    16: "Cóng nǎ yì tóur chī xiāngjiāo?",
    17: "Lǐ Jūn de rìjì",
    18: "Wǒ kàn guo Jīngjù",
    19: "Rúguǒ yǒu yì tiān...",
    20: "Hǎo kāfēi zǒngshì fàng zài rè bēizi lǐ de",
    21: "Huángjīnzhōu, tòngtòng-kuàikuài wánr yì zhōu",
    22: "Yí ge diànhuà",
    23: "Xiàohuà",
    24: "Rénshēng",
    25: "Diǎnxin xiǎojiě"
}

LESSONS_META = []
ALL_VOCABULARY = []
CSV_ROWS = []

global_word_index = 0

for lesson_data in lessons_data:
    les_num = lesson_data['lessonNumber']
    unit_num = (les_num - 1) // 5 + 1
    raw_title = lesson_data['rawTopicTitle']

    m = re.match(r'^(.*?)\s*\((.*?)\)$', raw_title)
    if m:
        vi_title = m.group(1).strip().rstrip('！!？?')
        zh_title = m.group(2).strip().rstrip('！!？?')
    else:
        vi_title = raw_title
        zh_title = raw_title

    py_title = TITLES_PY.get(les_num, sentence_to_pinyin(zh_title).replace('.', ''))

    words = lesson_data['words']
    word_count = len(words)

    LESSONS_META.append({
        "number": les_num,
        "unit": unit_num,
        "titleZh": zh_title,
        "titlePinyin": py_title,
        "titleVi": vi_title,
        "wordCount": word_count
    })

    unit_info = UNITS[unit_num - 1]

    for w_idx, w in enumerate(words):
        global_word_index += 1
        word_id = f"boya2-{les_num}-{w_idx + 1}"
        hanzi = w.get('hanzi', '').strip()
        raw_pinyin = w.get('pinyin', '').strip()
        pinyin_val = clean_pinyin(raw_pinyin)
        
        # Meaning
        meaning_val = (w.get('translationVi') or w.get('wordMeaningVi') or '').strip()
        if meaning_val and not hanzi[0].isupper() and w.get('wordType') != 'proper-noun':
            meaning_val = meaning_val[0].lower() + meaning_val[1:]

        # Hanviet
        hanviet_val = (w.get('hanviet') or '').strip()

        # Part of speech
        pos_val = map_part_of_speech(w)

        # Audio URL
        audio_url = None
        if w.get('audios') and len(w['audios']) > 0:
            audio_url = w['audios'][0]
        else:
            audio_url = f"https://static.xiehanzi.com/word_audios/{hanzi}.mp3"

        # Example Sentence
        example_obj = None
        if hanzi in CURATED_EXAMPLES:
            example_obj = CURATED_EXAMPLES[hanzi]
        elif w.get('examples') and len(w['examples']) > 0:
            for ex in w['examples']:
                zh_ex = (ex.get('hanzi') or ex.get('zh') or ex.get('sentence') or '').strip()
                vi_ex = (ex.get('vietnamese') or ex.get('meaningVi') or ex.get('vi') or ex.get('meaning') or '').strip()
                py_ex = (ex.get('pinyin') or '').strip()

                if zh_ex and vi_ex and vi_ex != 'undefined':
                    if not py_ex:
                        py_ex = sentence_to_pinyin(zh_ex)
                    example_obj = {
                        "chinese": zh_ex,
                        "pinyin": py_ex,
                        "vietnamese": vi_ex
                    }
                    break

        if not example_obj:
            example_obj = {
                "chinese": f"{hanzi}。",
                "pinyin": f"{pinyin_val}.",
                "vietnamese": meaning_val
            }

        word_entry = {
            "id": word_id,
            "lesson": les_num,
            "lessonTitle": f"Bài {les_num}: {zh_title} ({vi_title})",
            "unit": unit_num,
            "unitTitle": f"Đơn vị {unit_num}: {unit_info['title']}",
            "hanzi": hanzi,
            "pinyin": pinyin_val,
            "sinoVietnamese": hanviet_val,
            "meaning": meaning_val,
            "partOfSpeech": pos_val,
            "hskLevel": "boya2",
            "audioUrl": audio_url,
            "exampleSentence": example_obj
        }

        ALL_VOCABULARY.append(word_entry)

        CSV_ROWS.append({
            "STT": global_word_index,
            "Bài học": f"Bài {les_num}",
            "Chữ Hán": hanzi,
            "Phiên âm Pinyin": pinyin_val,
            "Từ loại": pos_val,
            "Âm Hán Việt": hanviet_val,
            "Nghĩa tiếng Việt": meaning_val,
            "Ví dụ tiếng Trung": example_obj["chinese"],
            "Phiên âm ví dụ": example_obj["pinyin"],
            "Dịch ví dụ": example_obj["vietnamese"],
            "Audio URL": audio_url
        })

print(f"Processed {len(LESSONS_META)} lessons, {len(ALL_VOCABULARY)} words.")

# 1. Write src/data/boya2Data.ts
ts_content = f"""// src/data/boya2Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 2 (25 bài học, 5 đơn vị)
// Thu thập chuẩn xác từ Thư viện Boya Chinese (XieHanzi) - Tổng cộng {len(ALL_VOCABULARY)} từ vựng kèm Audio, Ví dụ & Âm Hán Việt.

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

export const BOYA2_UNITS: BoyaUnit[] = {json.dumps(UNITS, ensure_ascii=False, indent=2)};

export const BOYA2_LESSONS: BoyaLesson[] = {json.dumps(LESSONS_META, ensure_ascii=False, indent=2)};

export const BOYA2_VOCABULARY: BoyaVocabularyWord[] = {json.dumps(ALL_VOCABULARY, ensure_ascii=False, indent=2)};

/**
 * Lấy danh sách từ vựng theo số thứ tự bài học (1-25)
 */
export function getBoya2WordsByLesson(lessonNum: number): BoyaVocabularyWord[] {{
  return BOYA2_VOCABULARY.filter(w => w.lesson === lessonNum);
}}

/**
 * Lấy danh sách từ vựng theo Đơn vị (1-5)
 */
export function getBoya2WordsByUnit(unitNum: number): BoyaVocabularyWord[] {{
  return BOYA2_VOCABULARY.filter(w => w.unit === unitNum);
}}

/**
 * Thống kê từ vựng Boya 2
 */
export const BOYA2_STATS = {{
  totalWords: {len(ALL_VOCABULARY)},
  totalLessons: {len(LESSONS_META)},
  totalUnits: {len(UNITS)}
}};
"""

with open('src/data/boya2Data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)
print("Generated src/data/boya2Data.ts successfully!")

# 2. Write data/boya2_vocab.csv
csv_path = 'data/boya2_vocab.csv'
fieldnames = ["STT", "Bài học", "Chữ Hán", "Phiên âm Pinyin", "Từ loại", "Âm Hán Việt", "Nghĩa tiếng Việt", "Ví dụ tiếng Trung", "Phiên âm ví dụ", "Dịch ví dụ", "Audio URL"]
with open(csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(CSV_ROWS)
print(f"Generated {csv_path} successfully!")
