# -*- coding: utf-8 -*-
"""Apply reviewed repairs to Boya example sentences.

The scraped source occasionally contains machine-made placeholders such as
``这个热闹很好``.  Keep the editorial fixes in one place and apply them to both
the CSV source files and the TypeScript data consumed by the application.
"""

from __future__ import annotations

import csv
import json
import re
from pathlib import Path

from pypinyin import Style, lazy_pinyin, load_phrases_dict


ROOT = Path(__file__).resolve().parents[1]


# pypinyin keeps the citation tone for a few very common neutral-tone words.
# These phrase readings match the pronunciation taught in the Boya books.
load_phrases_dict(
    {
        "东西": [["dōng"], ["xi"]],
        "孩子": [["hái"], ["zi"]],
        "妈妈": [["mā"], ["ma"]],
        "妹妹": [["mèi"], ["mei"]],
        "朋友": [["péng"], ["you"]],
        "热闹": [["rè"], ["nao"]],
        "时候": [["shí"], ["hou"]],
        "尾巴": [["wěi"], ["ba"]],
        "衣服": [["yī"], ["fu"]],
        "相处得": [["xiāng"], ["chǔ"], ["de"]],
    }
)


# The keys are stable CSV sequence numbers.  Each replacement was reviewed for
# natural Mandarin, inclusion of the headword, and an accurate Vietnamese
# translation.  Pinyin is regenerated from the reviewed Chinese sentence.
REPAIRS: dict[str, dict[int, tuple[str, str]]] = {
    "boya1": {
        12: ("您好", "Xin chào ông/bà/anh/chị."),
        43: ("她在大学学的是日语翻译。", "Ở đại học, cô ấy học chuyên ngành biên dịch tiếng Nhật."),
        74: ("我妹妹是研究生。", "Em gái tôi là học viên sau đại học."),
        125: ("房间里有人。", "Trong phòng có người."),
        143: ("我每天走路去学校。", "Tôi đi bộ đến trường mỗi ngày."),
        152: ("我就去", "Tôi đi ngay."),
        159: ("我住在三〇二室。", "Tôi ở phòng 302."),
        167: ("这位售货员的态度很好。", "Thái độ của nhân viên bán hàng này rất tốt."),
        177: ("这位小姐姓王。", "Cô gái này họ Vương."),
        180: ("我明天要去医院。", "Ngày mai tôi phải đến bệnh viện."),
        213: ("这把椅子坐着很舒服。", "Ngồi trên chiếc ghế này rất thoải mái."),
        215: ("我最喜欢春天这个季节。", "Tôi thích nhất mùa xuân."),
        238: ("我们周末去酒吧听音乐。", "Cuối tuần chúng tôi đến quán bar nghe nhạc."),
        254: ("我下午去商店买东西。", "Buổi chiều tôi đi cửa hàng mua đồ."),
        261: ("我们住在市中心。", "Chúng tôi sống ở trung tâm thành phố."),
        272: ("这件毛衣是白色的。", "Chiếc áo len này màu trắng."),
        279: ("你喜欢什么颜色？", "Bạn thích màu gì?"),
        294: ("墙壁被刷成了浅灰色。", "Bức tường đã được sơn màu xám nhạt."),
        330: ("这两本书的内容不同。", "Nội dung của hai quyển sách này khác nhau."),
        335: ("我喜欢跳舞，特别是交际舞。", "Tôi thích khiêu vũ, đặc biệt là khiêu vũ giao tiếp."),
        354: ("你明天来也行。", "Ngày mai bạn đến cũng được."),
        361: ("我每天坐地铁上班。", "Mỗi ngày tôi đi làm bằng tàu điện ngầm."),
        380: ("今天来上课的人很少。", "Hôm nay có rất ít người đến lớp."),
        381: ("我得去上课了。", "Tôi phải đi học rồi."),
        384: ("如果你不去的话，我也不去。", "Nếu bạn không đi thì tôi cũng không đi."),
        389: ("夜市晚上很热闹。", "Chợ đêm rất nhộn nhịp vào buổi tối."),
        409: ("请帮我改一下这个句子。", "Hãy giúp tôi sửa câu này."),
        411: ("现在大概是下午三点。", "Bây giờ khoảng ba giờ chiều."),
        420: ("我昨晚做梦了。", "Tối qua tôi đã nằm mơ."),
        442: ("他的脸色不太好。", "Sắc mặt anh ấy không được tốt."),
        443: ("他为了赶作业熬夜到凌晨", "Anh ấy thức đến tận rạng sáng để làm bài tập cho kịp."),
        444: ("一斤苹果", "Nửa kilôgam táo (một cân Trung Quốc)."),
        455: ("杯子倒了", "Cái cốc đã bị đổ"),
        487: ("今天是星期日。", "Hôm nay là Chủ nhật."),
        506: ("练习口语很重要。", "Luyện khẩu ngữ rất quan trọng."),
        507: ("我每天学汉语。", "Tôi học tiếng Trung mỗi ngày."),
        508: ("我在初中学习了三年。", "Tôi đã học ở cấp hai ba năm."),
        512: ("这个学期我选了四门课。", "Học kỳ này tôi đăng ký bốn môn học."),
        514: ("我周末常跟朋友打篮球。", "Cuối tuần tôi thường chơi bóng rổ với bạn bè."),
        516: ("我们中午在食堂吃饭。", "Buổi trưa chúng tôi ăn cơm ở căng tin."),
        517: ("我们周末有一个同学聚会。", "Cuối tuần chúng tôi có một buổi họp mặt bạn học."),
        522: ("那位女生是我的同学。", "Nữ sinh kia là bạn học của tôi."),
        529: ("我在门口等你。", "Tôi đợi bạn ở cửa."),
        535: ("我们坐下来好好聊天儿吧。", "Chúng ta ngồi xuống trò chuyện một lát cho thoải mái nhé."),
        539: ("这部电视剧非常受欢迎。", "Bộ phim truyền hình này rất được yêu thích."),
        550: ("我每天早上都跑步。", "Sáng nào tôi cũng chạy bộ."),
        552: ("打完球后他出了一身汗。", "Chơi bóng xong, cậu ấy toát mồ hôi khắp người."),
        554: ("你的汉语说得很棒。", "Bạn nói tiếng Trung rất giỏi."),
        556: ("他干活很有劲儿。", "Anh ấy làm việc rất hăng hái."),
        567: ("假期我们打算去旅行。", "Trong kỳ nghỉ, chúng tôi dự định đi du lịch."),
        583: ("请在信封上贴一张邮票。", "Hãy dán một con tem lên phong bì."),
        589: ("这里的风景很美。", "Phong cảnh ở đây rất đẹp."),
        592: ("我正在为考试复习。", "Tôi đang ôn thi."),
        613: ("我已经做完作业了。", "Tôi đã làm xong bài tập rồi."),
        616: ("你考得怎么样？", "Bạn thi thế nào?"),
        628: ("路很滑，你慢慢走。", "Đường trơn lắm, bạn đi chậm thôi."),
        639: ("我已经把作业全部做完了。", "Tôi đã làm xong toàn bộ bài tập."),
        646: ("我们明天坐火车去北京。", "Ngày mai chúng tôi đi Bắc Kinh bằng tàu hỏa."),
        664: ("我最喜欢这首歌。", "Tôi thích nhất bài hát này."),
        674: ("我用电脑听光盘里的录音。", "Tôi dùng máy tính nghe bản ghi âm trong đĩa CD."),
    },
    "boya2": {
        2: ("我送你一本书。", "Tôi tặng bạn một quyển sách."),
        3: ("我去机场接你。", "Tôi đến sân bay đón bạn."),
        6: ("我们坐飞机去北京。", "Chúng tôi đi Bắc Kinh bằng máy bay."),
        13: ("今天天气晴朗。", "Hôm nay trời quang đãng."),
        15: ("今天是阴天。", "Hôm nay trời âm u."),
        21: ("我昨天在路上遇到老师。", "Hôm qua tôi gặp giáo viên trên đường."),
        25: ("老师对我们很好。", "Thầy cô đối xử rất tốt với chúng tôi."),
        37: ("我每天练习汉语", "Tôi luyện tiếng Trung mỗi ngày."),
        40: ("这件衣服很合适", "Chiếc áo này rất vừa vặn."),
        50: ("一套家具", "Một bộ đồ nội thất."),
        51: ("他们租了一套公寓。", "Họ đã thuê một căn hộ."),
        54: ("请帮我把礼物包好。", "Hãy giúp tôi gói món quà cho cẩn thận."),
        55: ("先生，请问您贵姓？", "Thưa ông, xin hỏi ông họ gì?"),
        57: ("孩子长高了。", "Đứa trẻ đã cao lên rồi."),
        63: ("孩子已经会自己穿衣服了。", "Đứa trẻ đã biết tự mặc quần áo."),
        64: ("他看着书", "Anh ấy đang đọc sách"),
        67: ("他背着书包。", "Anh ấy mang cặp sách trên lưng."),
        68: ("他二十岁左右。", "Anh ấy khoảng hai mươi tuổi."),
        71: ("他住在中国南方。", "Anh ấy sống ở miền Nam Trung Quốc."),
        76: ("我买了一本新本子。", "Tôi đã mua một cuốn vở mới."),
        91: ("中国人口众多。", "Trung Quốc có dân số đông."),
        95: ("我每天八点上班", "Mỗi ngày tôi bắt đầu làm việc lúc tám giờ."),
        99: ("我六点下班", "Tôi tan làm lúc sáu giờ."),
        103: ("书店里有很多种类的书。", "Trong hiệu sách có nhiều loại sách."),
        108: ("中国是亚洲国家。", "Trung Quốc là một quốc gia châu Á."),
        116: ("我每天早上六点起床", "Mỗi sáng tôi thức dậy lúc sáu giờ."),
        119: ("那位女士是我们的新老师。", "Người phụ nữ kia là giáo viên mới của chúng tôi."),
        130: ("我告诉你一个秘密", "Tôi nói cho bạn biết một bí mật."),
        134: ("婚宴上的酒水费用很高。", "Chi phí đồ uống trong tiệc cưới rất cao."),
        142: ("这家商店收费公道，顾客很多。", "Cửa hàng này tính giá hợp lý, có rất đông khách."),
        150: ("请看广告栏里的最新招聘信息。", "Xin hãy xem thông tin tuyển dụng mới nhất trên bảng quảng cáo."),
        173: ("我看了一部中国电影。", "Tôi đã xem một bộ phim Trung Quốc."),
        176: ("这只猫的毛很软。", "Lông của con mèo này rất mềm."),
        195: ("他身上没有钱。", "Anh ấy không mang tiền trên người."),
        199: ("我买了一副新的手套。", "Tôi đã mua một đôi găng tay mới."),
        206: ("这棵大树的树干非常粗。", "Thân cây đại thụ này rất to."),
        207: ("这些柱子支撑着屋顶。", "Những chiếc cột này đỡ mái nhà."),
        222: ("请从这扇门进去。", "Hãy đi vào qua cánh cửa này."),
        236: ("房间里一点儿热气也没有。", "Trong phòng không có chút hơi ấm nào."),
        248: ("他看着书", "Anh ấy đang đọc sách"),
        249: ("我的腿很酸", "Chân tôi rất nhức mỏi."),
        250: ("他一拐一拐地走进了房间。", "Anh ấy đi khập khiễng vào phòng."),
        257: ("一直往东走就到了。", "Cứ đi thẳng về phía đông là tới."),
        274: ("叶子从树上落下来了。", "Lá đã rơi từ trên cây xuống."),
        286: ("我来自农村。", "Tôi đến từ nông thôn."),
        287: ("这所大学很有名。", "Trường đại học này rất nổi tiếng."),
        289: ("孩子们在院子里做游戏。", "Bọn trẻ đang chơi trò chơi trong sân."),
        304: ("请帮我们拍一张相片。", "Hãy giúp chúng tôi chụp một tấm ảnh."),
        318: ("你明天来也行。", "Ngày mai bạn đến cũng được."),
        328: ("他的中指上戴着一枚戒指。", "Anh ấy đeo một chiếc nhẫn ở ngón giữa."),
        340: ("炒菜的时候要放一点儿油。", "Khi xào rau cần cho một chút dầu."),
        343: ("我是最后一个到的。", "Tôi là người đến cuối cùng."),
        350: ("这个面包重五百克。", "Chiếc bánh mì này nặng năm trăm gam."),
        360: ("妈妈让我去商店买酱油。", "Mẹ bảo tôi đến cửa hàng mua nước tương."),
        361: ("这道菜不用放味精。", "Món này không cần cho bột ngọt."),
        366: ("这张纸宽二十厘米。", "Tờ giấy này rộng hai mươi xentimét."),
        377: ("请不要在这里抽烟。", "Xin đừng hút thuốc ở đây."),
        379: ("别弄坏了我的电脑。", "Đừng làm hỏng máy tính của tôi."),
        383: ("这个箱子很重。", "Chiếc va-li này rất nặng."),
        386: ("请把你的地址写在这里。", "Hãy viết địa chỉ của bạn vào đây."),
        399: ("我去药店买感冒药。", "Tôi đến hiệu thuốc mua thuốc cảm."),
        401: ("我们应该做好环境保洁工作。", "Chúng ta nên làm tốt công tác vệ sinh môi trường."),
        403: ("请问您贵姓？", "Xin hỏi ông/bà họ gì?"),
        417: ("他喜欢跟外国人交朋友。", "Anh ấy thích kết bạn với người nước ngoài."),
        424: ("三分之一比二分之一小。", "Một phần ba nhỏ hơn một phần hai."),
        434: ("我想了解中国文化。", "Tôi muốn tìm hiểu văn hóa Trung Quốc."),
        443: ("他画得很好。", "Anh ấy vẽ rất đẹp."),
        456: ("老师进来后，大家停止了说话。", "Sau khi giáo viên bước vào, mọi người ngừng nói chuyện."),
        458: ("他上个月辞职了，打算自己创业。", "Tháng trước anh ấy đã từ chức, dự định tự mình khởi nghiệp."),
        464: ("这项决定产生了很大影响。", "Quyết định này đã tạo ra ảnh hưởng lớn."),
        480: ("请给我一块蛋糕。", "Xin cho tôi một miếng bánh ngọt."),
        486: ("这家店的牌子很大。", "Tấm biển của cửa hàng này rất lớn."),
        489: ("这种水果既实惠又好吃", "Loại trái cây này vừa có giá phải chăng vừa ngon."),
        495: ("他站在路边等车。", "Anh ấy đứng bên đường đợi xe."),
        515: ("我喜欢吃三分熟的牛排。", "Tôi thích ăn bít tết tái."),
        519: ("祝你节日快乐！", "Chúc bạn có một ngày lễ vui vẻ!"),
        526: ("他总是很努力地工作。", "Anh ấy luôn làm việc rất chăm chỉ."),
        527: ("这只狗的尾巴很长。", "Đuôi của con chó này rất dài."),
        529: ("这根线很细。", "Sợi chỉ này rất mảnh."),
        531: ("老师的话给了我很大启发。", "Lời của giáo viên đã gợi cho tôi nhiều điều."),
        536: ("爷爷已经活到九十岁了，身体依然硬朗。", "Ông nội đã sống đến chín mươi tuổi, sức khỏe vẫn rất dẻo dai."),
        537: ("这个城市有一万多人。", "Thành phố này có hơn mười nghìn người."),
        539: ("既然你不想去，那就算了吧。", "Nếu bạn đã không muốn đi thì thôi vậy."),
        548: ("请把行李装进箱子里。", "Hãy xếp hành lý vào va-li."),
        550: ("他是我真正的朋友。", "Anh ấy là người bạn thực sự của tôi."),
        557: ("周末我们聚在一起吃饭。", "Cuối tuần chúng tôi tụ tập ăn cơm cùng nhau."),
        563: ("这是我们要共同实现的目标。", "Đây là mục tiêu chúng ta cần cùng nhau thực hiện."),
        576: ("我们去照相吧", "Chúng ta đi chụp ảnh nhé."),
        584: ("骑自行车上下坡的时候要特别小心。", "Khi đi xe đạp lên xuống dốc phải đặc biệt cẩn thận."),
        585: ("我们要分别对待这些问题。", "Chúng ta cần xử lý riêng từng vấn đề này."),
        587: ("我很怀念小时候的生活。", "Tôi rất nhớ cuộc sống thuở nhỏ."),
        603: ("我每天都看新闻", "Tôi xem tin tức mỗi ngày."),
        609: ("他在大学学习政治。", "Anh ấy học chính trị ở đại học."),
        630: ("他每天都认真刷牙齿", "Ngày nào anh ấy cũng đánh răng cẩn thận."),
        647: ("你什么时候能抽空来我家玩？", "Khi nào bạn có thể tranh thủ thời gian đến nhà tôi chơi?"),
        658: ("我想把这两张桌子拼在一起。", "Tôi muốn ghép hai chiếc bàn này lại với nhau."),
        671: ("服务员给我们端上来了一盘热菜。", "Người phục vụ bưng lên cho chúng tôi một đĩa đồ ăn nóng."),
        677: ("我妹妹打算去欧洲留学。", "Em gái tôi dự định sang châu Âu du học."),
        687: ("春节我们回老家过年。", "Tết đến, chúng tôi về quê ăn Tết."),
        689: ("除了汉语以外，我还学英语。", "Ngoài tiếng Trung, tôi còn học tiếng Anh."),
        692: ("这篇文章我读了两遍。", "Tôi đã đọc bài văn này hai lần."),
        694: ("政府正在解决这个问题。", "Chính phủ đang giải quyết vấn đề này."),
        701: ("妈妈把洗好的衣服晒在阳台上。", "Mẹ phơi quần áo đã giặt ngoài ban công."),
        708: ("他认识很多外国朋友。", "Anh ấy quen nhiều người bạn nước ngoài."),
        711: ("我被这个故事感动了。", "Tôi đã xúc động trước câu chuyện này."),
        734: ("考试及格了。", "Tôi đã thi đạt yêu cầu rồi."),
        737: ("这种药对退烧很有作用。", "Loại thuốc này có tác dụng hạ sốt."),
        743: ("别开玩笑，我是认真的。", "Đừng đùa, tôi nghiêm túc đấy."),
        765: ("吃完饭，我们接着看电视。", "Ăn cơm xong, chúng tôi xem tiếp tivi."),
        780: ("出国前需要办理护照。", "Trước khi ra nước ngoài cần làm hộ chiếu."),
        785: ("请把桌子擦干净。", "Hãy lau bàn cho sạch."),
        786: ("妈妈抱着孩子回家了。", "Người mẹ bế con về nhà."),
        788: ("他挨打了", "Anh ta bị đánh"),
        792: ("他怎么能狠心抛弃自己生病的小狗？", "Sao anh ta có thể nhẫn tâm bỏ rơi chú chó con bị bệnh của mình chứ?"),
        794: ("请不要用手摸展品。", "Xin đừng dùng tay chạm vào hiện vật."),
        798: ("请把这些苹果分成两份。", "Hãy chia số táo này thành hai phần."),
        800: ("我们要分别对待这些问题。", "Chúng ta cần xử lý riêng từng vấn đề này."),
        801: ("他迷了路，不知道怎么回家。", "Anh ấy bị lạc đường, không biết về nhà thế nào."),
        813: ("这是一个很难的选择。", "Đây là một lựa chọn rất khó khăn."),
        815: ("他经历了很多困难。", "Anh ấy đã trải qua nhiều khó khăn."),
        818: ("我几乎每天都去图书馆。", "Hầu như ngày nào tôi cũng đến thư viện."),
        824: ("每个人都有追求幸福的权利。", "Ai cũng có quyền theo đuổi hạnh phúc."),
        831: ("他竟然忘了今天的考试。", "Không ngờ anh ấy quên mất kỳ thi hôm nay."),
        836: ("他是我真正的朋友。", "Anh ấy là người bạn thực sự của tôi."),
        840: ("下午茶时间，我们吃了一些精致的点心。", "Vào giờ trà chiều, chúng tôi đã ăn một ít bánh điểm tâm được làm tinh tế."),
        843: ("他的生意做得很好。", "Công việc kinh doanh của anh ấy rất thuận lợi."),
        846: ("天渐渐黑了。", "Trời dần tối."),
        848: ("我们和邻居相处得很好。", "Chúng tôi sống rất hòa thuận với hàng xóm."),
        849: ("他们是关系亲密的朋友。", "Họ là những người bạn thân thiết."),
        859: ("我想和你说句话", "Tôi muốn nói với bạn một câu."),
        862: ("我陪你去", "Tôi đi cùng bạn."),
    },
}


# Reviewed per-sequence readings for repaired Boya 1 examples.  Polyphonic
# characters and neutral tones are written out explicitly so regeneration stays
# stable (for example 得 děi / de, 倒 dǎo, 舒服 shūfu, and 〇 líng).
PINYIN_OVERRIDES: dict[str, dict[int, str]] = {
    "boya1": {
        12: "Nín hǎo",
        43: "Tā zài dàxué xué de shì Rìyǔ fānyì.",
        74: "Wǒ mèimei shì yánjiūshēng.",
        125: "Fángjiān lǐ yǒu rén.",
        152: "Wǒ jiù qù",
        159: "Wǒ zhù zài sān líng èr shì.",
        213: "Zhè bǎ yǐzi zuòzhe hěn shūfu.",
        272: "Zhè jiàn máoyī shì báisè de.",
        294: "Qiángbì bèi shuā chéng le qiǎn huīsè.",
        335: "Wǒ xǐhuan tiàowǔ, tèbié shì jiāojìwǔ.",
        381: "Wǒ děi qù shàngkè le.",
        384: "Rúguǒ nǐ bù qù dehuà, wǒ yě bù qù.",
        411: "Xiànzài dàgài shì xiàwǔ sān diǎn.",
        442: "Tā de liǎnsè bù tài hǎo.",
        443: "Tā wèile gǎn zuòyè áoyè dào língchén",
        444: "Yī jīn píngguǒ",
        455: "Bēizi dǎo le.",
        506: "Liànxí kǒuyǔ hěn zhòngyào.",
        507: "Wǒ měitiān xué Hànyǔ.",
        508: "Wǒ zài chūzhōng xuéxí le sān nián.",
        535: "Wǒmen zuò xiàlái hǎohǎo liáo tiānr ba.",
        552: "Dǎ wán qiú hòu tā chū le yì shēn hàn.",
        554: "Nǐ de Hànyǔ shuō de hěn bàng.",
        583: "Qǐng zài xìn fēng shàng tiē yī zhāng yóu piào.",
        592: "Wǒ zhèngzài wèi kǎoshì fùxí.",
        616: "Nǐ kǎo de zěnmeyàng?",
    },
    "boya2": {
        2: "Wǒ sòng nǐ yì běn shū.",
        3: "Wǒ qù jīchǎng jiē nǐ.",
        13: "Jīntiān tiānqì qínglǎng.",
        15: "Jīntiān shì yīntiān.",
        25: "Lǎoshī duì wǒmen hěn hǎo.",
        37: "Wǒ měi tiān liàn xí hàn yǔ",
        40: "Zhè jiàn yī fú hěn hé shì",
        50: "Yī tào jiā jù",
        54: "Qǐng bāng wǒ bǎ lǐwù bāo hǎo.",
        55: "Xiānsheng, qǐngwèn nín guìxìng?",
        57: "Háizi zhǎng gāo le.",
        64: "Tā kànzhe shū",
        67: "Tā bēizhe shūbāo.",
        68: "Tā èrshí suì zuǒyòu.",
        76: "Wǒ mǎi le yì běn xīn běnzi.",
        91: "Zhōngguó rénkǒu zhòngduō.",
        95: "Wǒ měitiān bā diǎn shàngbān",
        99: "Wǒ liù diǎn xiàbān",
        116: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng",
        130: "Wǒ gàosu nǐ yī gè mìmì",
        134: "Hūnyàn shàng de jiǔshuǐ fèiyòng hěn gāo.",
        142: "zhè jiā shāng diàn shōu fèi gōng dao, gù kè hěn duō.",
        150: "Qǐng kàn guǎnggàolán lǐ de zuìxīn zhāopìn xìnxī.",
        173: "Wǒ kàn le yí bù Zhōngguó diànyǐng.",
        176: "Zhè zhī māo de máo hěn ruǎn.",
        195: "Tā shēnshang méiyǒu qián.",
        199: "Wǒ mǎi le yí fù xīn de shǒutào.",
        206: "Zhè kē dàshù de shùgàn fēicháng cū.",
        248: "Tā kànzhe shū",
        249: "Wǒ de tuǐ hěn suān",
        250: "Tā yì guǎi yì guǎi de zǒu jìn le fángjiān.",
        286: "Wǒ láizì nóngcūn.",
        289: "Háizimen zài yuànzi lǐ zuò yóuxì.",
        328: "Tā de zhōngzhǐ shàng dàizhe yì méi jièzhi.",
        343: "Wǒ shì zuìhòu yí gè dào de.",
        401: "Wǒmen yīnggāi zuò hǎo huánjìng bǎojié gōngzuò.",
        403: "Qǐngwèn nín guìxìng?",
        443: "Tā huà de hěn hǎo.",
        458: "Tā shàng ge yuè cízhí le, dǎsuàn zìjǐ chuàngyè.",
        464: "Zhè xiàng jué dìng chǎn shēng le hěn dà yǐng xiǎng.",
        480: "Qǐng gěi wǒ yí kuài dàngāo.",
        486: "Zhè jiā diàn de pái zi hěn dà.",
        489: "zhè zhǒng shuǐ guǒ jì shí huì yòu hǎo chī",
        515: "Wǒ xǐhuān chī sānfēnshú de niúpái.",
        519: "Zhù nǐ jiérì kuàilè!",
        526: "Tā zǒngshì hěn nǔlì de gōngzuò.",
        529: "Zhè gēn xiàn hěn xì.",
        536: "Yéye yǐjīng huó dào jiǔshí suì le, shēntǐ yīrán yìnglang.",
        539: "jì rán nǐ bù xiǎng qù, nà jiù suàn le ba.",
        548: "Qǐng bǎ xíng lǐ zhuāng jìn xiāng zi lǐ.",
        550: "Tā shì wǒ zhēnzhèng de péngyou.",
        563: "Zhè shì wǒmen yào gòngtóng shíxiàn de mùbiāo.",
        576: "Wǒ men qù zhào xiāng ba",
        584: "Qí zìxíngchē shàng xià pō de shíhou yào tèbié xiǎoxīn.",
        585: "Wǒ men yào fēn bié duì dài zhè xiē wèn tí.",
        603: "Wǒ měi tiān dōu kàn xīn wén",
        630: "Tā měitiān dōu rènzhēn shuā yáchǐ",
        647: "Nǐ shénme shíhou néng chōukòng lái wǒ jiā wán?",
        658: "Wǒ xiǎng bǎ zhè liǎng zhāng zhuōzi pīn zài yìqǐ.",
        671: "Fúwùyuán gěi wǒmen duān shang lái le yì pán rè cài.",
        689: "Chúle Hànyǔ yǐwài, wǒ hái xué Yīngyǔ.",
        734: "Kǎoshì jígé le.",
        788: "Tā áidǎle",
        792: "tā zěn me néng hěn xīn pāo qì zì jǐ shēng bìng de xiǎo gǒu?",
        798: "Qǐng bǎ zhèxiē píngguǒ fēn chéng liǎng fèn.",
        800: "Wǒ men yào fēn bié duì dài zhè xiē wèn tí.",
        801: "Tā mí le lù, bù zhīdào zěnme huí jiā.",
        836: "Tā shì wǒ zhēnzhèng de péngyou.",
        840: "xià wǔ chá shí jiān, wǒ men chī le yì xiē jīng zhì de diǎn xīn.",
        843: "Tā de shēngyi zuò de hěn hǎo.",
        859: "Wǒ xiǎng hé nǐ shuō jù huà",
        862: "Wǒ péi nǐ qù",
    },
}


# Headword fields corrected together with an example repair.  The keys match
# the TypeScript field names; CSV_METADATA_COLUMNS maps them to CSV headers.
METADATA_REPAIRS: dict[str, dict[int, dict[str, str]]] = {
    "boya1": {
        616: {"meaning": "trợ từ dẫn bổ ngữ", "partOfSpeech": "Trợ từ"},
    },
    "boya2": {
        64: {"meaning": "trợ từ chỉ sự tiếp diễn của động tác hoặc trạng thái", "partOfSpeech": "Trợ từ"},
        173: {"meaning": "lượng từ cho tác phẩm, phim", "partOfSpeech": "Lượng từ"},
        195: {"meaning": "trên người"},
        199: {"meaning": "lượng từ chỉ đôi, cặp hoặc bộ", "partOfSpeech": "Lượng từ"},
        248: {"meaning": "trợ từ chỉ sự tiếp diễn của động tác hoặc trạng thái", "partOfSpeech": "Trợ từ"},
        443: {"meaning": "trợ từ dẫn bổ ngữ", "partOfSpeech": "Trợ từ"},
        458: {"meaning": "từ chức; từ bỏ chức vụ", "partOfSpeech": "Động từ"},
        464: {"meaning": "sinh ra; tạo ra; phát sinh"},
        489: {"meaning": "giá hợp lý; đáng tiền; thiết thực"},
        548: {"meaning": "xếp vào; chất vào; đựng", "partOfSpeech": "Động từ"},
        585: {"meaning": "riêng biệt; lần lượt; phân biệt", "partOfSpeech": "Phó từ / Động từ"},
        671: {"meaning": "bưng; bê; mang bằng hai tay", "partOfSpeech": "Động từ"},
        788: {"pinyin": "áidǎ"},
        792: {"meaning": "nhẫn tâm; tàn nhẫn"},
        798: {"meaning": "chia; phân chia; phân biệt"},
        800: {"meaning": "riêng biệt; lần lượt; phân biệt", "partOfSpeech": "Phó từ / Động từ"},
    },
}

CSV_METADATA_COLUMNS = {
    "pinyin": "Phiên âm Pinyin",
    "meaning": "Nghĩa tiếng Việt",
    "partOfSpeech": "Từ loại",
}


def side_tables(
    book: str, repairs: dict[int, tuple[str, str]]
) -> tuple[dict[int, str], dict[int, dict[str, str]]]:
    overrides = PINYIN_OVERRIDES.get(book, {})
    metadata = METADATA_REPAIRS.get(book, {})
    unregistered = (set(overrides) | set(metadata)) - set(repairs)
    if unregistered:
        raise ValueError(
            f"{book} overrides reference unregistered sequences: {sorted(unregistered)}"
        )
    return overrides, metadata


def sentence_pinyin(sentence: str) -> str:
    """Return readable tone-marked pinyin while preserving punctuation."""
    raw_tokens = lazy_pinyin(
        sentence,
        style=Style.TONE,
        neutral_tone_with_five=False,
        errors=lambda value: list(value),
    )
    tokens: list[str] = []
    punctuation = {
        "，": ",",
        "。": ".",
        "！": "!",
        "？": "?",
        "；": ";",
        "：": ":",
        "、": ",",
    }
    closing = set("，。！？；：、,.!?;:")
    opening = set("“‘（(")
    for token in raw_tokens:
        if token in closing and tokens:
            tokens[-1] += punctuation.get(token, token)
        elif token in opening:
            tokens.append(token)
        else:
            tokens.append(token)
    result = " ".join(tokens)
    result = re.sub(r"([“‘（(])\s+", r"\1", result)
    for index, char in enumerate(result):
        if char.isalpha():
            result = result[:index] + char.upper() + result[index + 1 :]
            break
    return result


def update_csv(book: str, repairs: dict[int, tuple[str, str]]) -> None:
    path = ROOT / "data" / f"{book}_vocab.csv"
    overrides, metadata = side_tables(book, repairs)
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))
        fieldnames = list(rows[0].keys())

    seen: set[int] = set()
    for row in rows:
        sequence = int(row["STT"])
        if sequence not in repairs:
            continue
        chinese, vietnamese = repairs[sequence]
        if row["Chữ Hán"] not in chinese:
            raise ValueError(
                f"{book} row {sequence}: repaired sentence does not contain {row['Chữ Hán']}"
            )
        row["Ví dụ tiếng Trung"] = chinese
        row["Phiên âm ví dụ"] = overrides.get(sequence) or sentence_pinyin(chinese)
        row["Dịch ví dụ"] = vietnamese
        for field, value in metadata.get(sequence, {}).items():
            row[CSV_METADATA_COLUMNS[field]] = value
        seen.add(sequence)

    missing = set(repairs) - seen
    if missing:
        raise ValueError(f"Missing {book} CSV rows: {sorted(missing)}")

    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def update_typescript(book: str, repairs: dict[int, tuple[str, str]]) -> None:
    path = ROOT / "src" / "data" / f"{book}Data.ts"
    overrides, metadata = side_tables(book, repairs)
    source = path.read_text(encoding="utf-8")

    array_name = f"{book.upper()}_VOCABULARY"
    match = re.search(
        rf"(export const {array_name}: BoyaVocabularyWord\[\] = )(\[.*?\]);\n\n/\*\*",
        source,
        re.DOTALL,
    )
    if not match:
        raise ValueError(f"Could not find {array_name} in {path}")

    vocabulary = json.loads(match.group(2))
    by_sequence = {index: word for index, word in enumerate(vocabulary, start=1)}
    for sequence, (chinese, vietnamese) in repairs.items():
        word = by_sequence.get(sequence)
        if word is None:
            raise ValueError(f"Missing {book} TypeScript row {sequence}")
        if word["hanzi"] not in chinese:
            raise ValueError(
                f"{book} row {sequence}: repaired sentence does not contain {word['hanzi']}"
            )
        word["exampleSentence"] = {
            "chinese": chinese,
            "pinyin": overrides.get(sequence) or sentence_pinyin(chinese),
            "vietnamese": vietnamese,
        }
        for field, value in metadata.get(sequence, {}).items():
            word[field] = value

    rendered = json.dumps(vocabulary, ensure_ascii=False, indent=2)
    updated = source[: match.start(2)] + rendered + source[match.end(2) :]
    path.write_text(updated, encoding="utf-8", newline="\n")


def main() -> None:
    repaired = 0
    for book, repairs in REPAIRS.items():
        update_csv(book, repairs)
        update_typescript(book, repairs)
        repaired += len(repairs)
        print(f"{book}: repaired {len(repairs)} example sentences")
    print(f"Total repaired examples: {repaired}")


if __name__ == "__main__":
    main()
