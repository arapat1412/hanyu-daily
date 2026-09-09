# -*- coding: utf-8 -*-
"""
Script to generate src/data/hsk5GrammarData.ts with all 70 grammar points and 245 example sentences.
Fully localized with Vietnamese titles, formulas, explanations, tips, and translations.
"""
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def clean_sentence_pinyin(sentence):
    # Preserve erhuas and common expressions
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('玩儿', '§WANR§').replace('空儿', '§KONGR§')
    s_temp = s_temp.replace('面条儿', '§MIANTIAOR§')

    res = []
    for char in s_temp:
        if '\u4e00' <= char <= '\u9fff':
            py = pinyin(char, style=Style.TONE)[0][0]
            res.append(py)
        elif char in '，,':
            res.append(',')
        elif char in '。':
            res.append('.')
        elif char in '？！?!':
            res.append(char)
        elif char in '“”""':
            res.append('"')
        elif char in '（(':
            res.append('(')
        elif char in '）)':
            res.append(')')
        elif char in '：:':
            res.append(':')
        elif char in '、':
            res.append('、')
        elif char in '——':
            res.append('—')
        elif char in '0123456789%./':
            res.append(char)
        elif char.strip():
            res.append(char)

    joined = ' '.join(res)
    joined = joined.replace('§NAR§', 'nǎr').replace('§ZHER§', 'zhèr').replace('§NAR2§', 'nàr')
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§KONGR§', 'kòngr')
    joined = joined.replace('§MIANTIAOR§', 'miàntiáor')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

HSK5_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "tu-loai", "name": "Từ loại & Hình vị (Phó từ, Giới từ...)", "icon": "🔤" },
    { "id": "khau-ngu", "name": "Khẩu ngữ & Cụm cố định", "icon": "💬" },
    { "id": "bo-ngu", "name": "Thành phần câu & Bổ ngữ", "icon": "🧩" },
    { "id": "loai-cau", "name": "Mẫu câu đặc biệt (把, 被, 有, So sánh)", "icon": "🗣️" },
    { "id": "cau-phuc", "name": "Câu phức & Liên từ", "icon": "🔗" },
]

# Complete translations for all 245 sentences in HSK5
TRANSLATIONS = {
    # 01
    "那块石头上刻着一些汉字。": "Trên phiến đá đó có khắc vài chữ Hán.",
    "那本书里头是不是有一封信？": "Bên trong quyển sách đó có phải có một bức thư không?",
    # 02
    "在日常交流中，我们应该尊重彼此。": "Trong giao tiếp thường ngày, chúng ta nên tôn trọng lẫn nhau.",
    "他们已经认识很久了，对彼此的习惯非常了解。": "Họ đã quen biết rất lâu rồi, vô cùng hiểu rõ thói quen của nhau.",
    "这里的夏天异常炎热，年年如此。": "Mùa hè ở đây nóng nực bất thường, năm nào cũng như vậy.",
    "很多人都没有想到乡村的变化如此巨大。": "Rất nhiều người không ngờ rằng sự thay đổi của làng quê lại to lớn đến như thế.",
    "本规定自明日起正式实施。": "Quy định này chính thức có hiệu lực từ ngày mai.",
    "本次列车开往北京西站。": "Chuyến tàu này đi về hướng ga Bắc Kinh Tây.",
    # 03
    "这册历史书讲述了古代中国的发展过程。": "Tập sách lịch sử này kể về quá trình phát triển của Trung Quốc cổ đại.",
    "第一次见面时他送给了我一朵玫瑰花。": "Lần đầu gặp mặt, anh ấy đã tặng tôi một đóa hoa hồng.",
    "这届会议讨论了许多重要的话题。": "Kỳ đại hội này đã thảo luận rất nhiều chủ đề quan trọng.",
    "城市夜晚的天空中几乎看不到几颗星星。": "Trên bầu trời đêm ở thành phố hầu như chẳng nhìn thấy được mấy ngôi sao.",
    "那匹马跑得特别快，赢得了这次比赛。": "Con ngựa đó chạy cực kỳ nhanh, đã thắng giải trong cuộc đua lần này.",
    "她在表格的最后一行写上了自己的名字。": "Cô ấy viết tên mình vào dòng cuối cùng của bảng biểu.",
    "那架飞机在空中飞行了很久，最终安全降落。": "Chiếc máy bay đó bay trên không trung rất lâu, cuối cùng đã hạ cánh an toàn.",
    "一群可爱的孩子正在舞台上表演节目。": "Một nhóm trẻ em đáng yêu đang biểu diễn tiết mục trên sân khấu.",
    "这支队伍非常优秀，连续几年都获得了冠军。": "Đội ngũ này rất xuất sắc, nhiều năm liền đều giành chức vô địch.",
    "他一不小心把一根筷子掉在了地上。": "Anh ấy sơ ý làm rơi một chiếc đũa xuống đất.",
    "王经理正在培训这批新员工。": "Quản lý Vương đang huấn luyện đợt nhân viên mới này.",
    "为了表示对朋友的欢迎，他特意买了一束花。": "Để thể hiện sự hoan nghênh bạn bè, anh ấy đã đặc biệt mua một bó hoa.",
    "选来选去还是这副手套戴着最舒服。": "Chọn đi chọn lại vẫn là đôi găng tay này đeo dễ chịu nhất.",
    "别看书了，打开电视，看两集电视剧吧。": "Đừng đọc sách nữa, bật tivi lên xem hai tập phim truyền hình đi.",
    "地球绕太阳一周需要一年。": "Trái đất quay quanh mặt trời một vòng cần một năm.",
    # 04
    "新娘看了一眼新郎，害羞得低下了头。": "Cô dâu nhìn chú rể một cái, thẹn thùng cúi đầu xuống.",
    # 05
    "他在面试时过于紧张，连话都说不清楚了。": "Anh ấy quá mức căng thẳng lúc phỏng vấn, đến nói cũng nói không rõ ràng.",
    "过于追求完美反而会让人总是对现状不满意。": "Quá theo đuổi sự hoàn hảo ngược lại sẽ khiến con người luôn bất mãn với hiện tại.",
    "这次考试的题目相当难，很多同学都没有及格。": "Đề thi lần này khá khó, rất nhiều bạn học đều không đạt điểm đỗ.",
    "他的中文水平相当不错，可以和中国人流利对话。": "Trình độ tiếng Trung của anh ấy khá tốt, có thể trò chuyện trôi chảy với người Trung Quốc.",
    "如何才能在短期内较快地提高中文水平？": "Làm thế nào mới có thể nâng cao trình độ tiếng Trung tương đối nhanh trong thời gian ngắn?",
    "年轻人学习新事物的能力较强，能够很快适应新的环境。": "Khả năng học hỏi điều mới của người trẻ tương đối mạnh, có thể thích nghi nhanh chóng với môi trường mới.",
    "那家公司今年推出的新产品可受欢迎了。": "Sản phẩm mới của công ty đó ra mắt năm nay được ưa chuộng lắm đấy.",
    "这部电影拍得可精彩了，你千万不能错过！": "Bộ phim này quay xuất sắc lắm đấy, bạn tuyệt đối không được bỏ lỡ!",
    "这家餐厅的服务态度格外热情，常常需要提前预约。": "Thái độ phục vụ của nhà hàng này đặc biệt nhiệt tình, thường phải đặt bàn trước.",
    "国庆假期的景区格外热闹，到处都是外地来的游客。": "Khu danh lam thắng cảnh trong kỳ nghỉ Quốc khánh đặc biệt náo nhiệt, đâu đâu cũng là du khách từ nơi khác tới.",
    "那天的天气极其恶劣，我们不得不取消旅行计划。": "Thời tiết hôm đó cực kỳ khắc nghiệt, chúng tôi đành phải hủy bỏ kế hoạch du lịch.",
    "这次旅行给我留下了极其深刻的印象，尤其是当地的美食和历史。": "Chuyến du lịch lần này để lại ấn tượng cực kỳ sâu sắc cho tôi, đặc biệt là ẩm thực và lịch sử nơi đây.",
    # 06
    "父母要时刻关心孩子的心理健康。": "Cha mẹ cần luôn luôn quan tâm tới sức khỏe tâm lý của con cái.",
    "他提醒我旅行时一定要时刻注意自己的护照和钱包。": "Anh ấy nhắc nhở tôi khi đi du lịch nhất định phải thường trực chú ý đến hộ chiếu và ví tiền của mình.",
    "她曾经当过导游，在设计旅行线路方面很有经验。": "Cô ấy từng làm hướng dẫn viên du lịch, rất có kinh nghiệm trong việc thiết kế lộ trình du lịch.",
    "王校长去年曾经来我们学校访问过。": "Hiệu trưởng Vương năm ngoái đã từng đến thăm trường chúng tôi.",
    "为了迎接客人的到来，他一下班就立刻回家准备晚餐。": "Để nghênh đón khách tới, vừa tan làm anh ấy lập tức về nhà chuẩn bị bữa tối.",
    "张教授刚说完，学生们就立刻认真地写起来。": "Giáo sư Trương vừa nói xong, các sinh viên lập tức chăm chú viết ngay.",
    "妈妈连忙检查摔倒的孩子有没有受伤。": "Người mẹ vội vàng kiểm tra đứa trẻ bị ngã xem có bị thương hay không.",
    "他连忙向交警解释自己并非故意违反交通规则。": "Anh ấy vội vàng giải thích với cảnh sát giao thông rằng mình không hề cố ý vi phạm luật giao thông.",
    "最近一年，这套教材的销量始终保持增长。": "Trong một năm gần đây, lượng tiêu thụ của bộ giáo trình này luôn luôn duy trì mức tăng trưởng.",
    "无论如何，亲朋好友始终是你的依靠。": "Dù thế nào đi nữa, người thân và bạn bè trước sau như một vẫn là chỗ dựa của bạn.",
    "这里的乡村早已实现了现代化，不再是当年的样子。": "Làng quê nơi đây từ lâu đã thực hiện hiện đại hóa, không còn là diện mạo năm xưa nữa.",
    "科学家早已研发出治疗这种疾病的药物。": "Các nhà khoa học từ lâu đã nghiên cứu chế tạo thành công loại thuốc điều trị căn bệnh này.",
    "明天公司即将召开新品发布会，欢迎大家参加！": "Ngày mai công ty sắp sửa tổ chức buổi họp báo ra mắt sản phẩm mới, hoan nghênh mọi người tham gia!",
    "他们的婚礼即将在下个月举行。": "Hôn lễ của họ sắp sửa được tổ chức vào tháng sau.",
    "听到消息后，她急忙收拾行李赶往机场。": "Sau khi nghe tin, cô ấy vội vã thu dọn hành lý chạy gấp ra sân bay.",
    "车祸发生后，他急忙打电话叫救护车。": "Sau khi xảy ra tai nạn giao thông, anh ấy vội vàng gọi điện thoại gọi xe cứu thương.",
    "计算机技术渐渐成为各行各业的关键技术。": "Công nghệ máy tính dần dần trở thành công nghệ then chốt của mọi ngành nghề.",
    "春天一到，气温就开始渐渐上升了。": "Mùa xuân vừa đến, nhiệt độ bắt đầu tăng dần lên.",
    "如果您有任何问题，请尽快联系我。": "Nếu quý khách có bất kỳ thắc mắc nào, xin vui lòng liên hệ với tôi càng sớm càng tốt.",
    "医生建议他尽快接受手术治疗。": "Bác sĩ khuyên anh ấy nên nhanh chóng tiếp nhận phẫu thuật điều trị.",
    "他们再这样一直吵下去，早晚会离婚的。": "Họ mà cứ tiếp tục cãi vã mãi như thế này thì sớm muộn gì cũng ly hôn thôi.",
    "父母应该明白，孩子早晚是要独立生活的。": "Cha mẹ nên hiểu rằng, con cái sớm muộn gì cũng phải sống tự lập.",
    # 07
    "他最近老是熬夜，所以脸色很不好。": "Dạo này anh ấy cứ hay thức khuya suốt, nên sắc mặt rất kém.",
    "你出门老是忘记带钥匙，这个坏习惯一定要改！": "Cậu ra khỏi nhà cứ luôn quên mang chìa khóa, thói xấu này nhất định phải sửa!",
    "旅行社通常在寒暑假生意更好。": "Công ty lữ hành thông thường làm ăn phát đạt hơn vào các kỳ nghỉ đông và hè.",
    "中国的大学通常会为学生提供更换专业的机会。": "Các trường đại học ở Trung Quốc thông thường sẽ tạo cơ hội chuyển ngành cho sinh viên.",
    "他时常下班后去公园散步，顺便放松一下心情。": "Anh ấy thường hay đi dạo ở công viên sau giờ làm, nhân tiện thư giãn tinh thần.",
    "夫妻二人的工作都很忙，所以时常没有人做家务。": "Công việc của hai vợ chồng đều rất bận rộn, cho nên thường xuyên chẳng có ai làm việc nhà.",
    # 08
    "冬天尽量少吃雪糕，容易着凉。": "Mùa đông ráng cố gắng ăn ít kem thôi, rất dễ bị nhiễm lạnh.",
    "请大家尽量在本周五提交论文。": "Xin mọi người cố gắng hết sức nộp luận văn vào thứ Sáu tuần này.",
    "公司老板亲自参与了新产品的设计与开发。": "Sếp công ty đã đích thân tham gia vào khâu thiết kế và phát triển sản phẩm mới.",
    "这些点心是我亲自为你做的。": "Những chiếc bánh điểm tâm này là do chính tay tôi làm riêng cho bạn đấy.",
    # 09
    "会议一结束，我便赶回公司了。": "Cuộc họp vừa kết thúc là tôi liền vội vã quay về công ty.",
    "这个学生很聪明，一教便懂。": "Học sinh này rất thông minh, vừa dạy một cái là hiểu liền.",
    "一旦确定了目标，就不要放弃。": "Một khi đã xác định mục tiêu thì chớ có bỏ cuộc.",
    "这次机会非常难得，一旦错过了，你会后悔的。": "Cơ hội lần này rất hiếm có, một khi đã bỏ lỡ, bạn sẽ hối hận đấy.",
    # 10
    "他似乎在犹豫要不要接受这份新工作。": "Anh ấy dường như đang do dự xem có nên nhận công việc mới này không.",
    "这家便利店似乎两周前就关门了。": "Cửa hàng tiện lợi này dường như đã đóng cửa từ hai tuần trước rồi.",
    "我们仿佛在哪儿见过似的。": "Chúng ta dường như đã từng gặp nhau ở đâu đó rồi thì phải.",
    "他俩见面不打招呼，仿佛谁也不认识谁。": "Hai người họ gặp mặt không chào nhau, cứ như thể chẳng ai quen biết ai.",
    # 11
    "毕竟他刚来公司一个月，还需要时间适应。": "Dẫu sao anh ấy cũng mới đến công ty một tháng, vẫn cần thời gian thích nghi.",
    "他毕竟是个孩子，有些错误可以被原谅。": "Nó rốt cuộc vẫn là một đứa trẻ, một vài lỗi lầm có thể tha thứ được.",
    "昨天我才发现新来的同事居然是我的邻居。": "Hôm qua tôi mới phát hiện đồng nghiệp mới đến thế mà lại là hàng xóm của tôi.",
    "这么冷的天他居然没穿外套。": "Trời lạnh thế này mà anh ấy lại chẳng thèm mặc áo khoác ngoài.",
    "你要去就去吧，反正我肯定不会去。": "Cậu muốn đi thì cứ đi đi, đằng nào thì tôi chắc chắn cũng không đi đâu.",
    "反正我已经辞职了，今晚加班我是不会去的。": "Dù sao thì tôi cũng đã từ chức rồi, tối nay tăng ca tôi sẽ không đi đâu.",
    "你不用再劝他了，他根本不会听。": "Bạn không cần khuyên anh ấy nữa đâu, anh ấy căn bản sẽ chẳng nghe đâu.",
    "我看根本没必要追求完美，世界上不存在完美的人和事。": "Tôi thấy hoàn toàn chẳng có gì phải truy cầu sự hoàn hảo, trên đời không tồn tại người và việc hoàn hảo.",
    "她果然选择了自己最喜欢的文学专业。": "Cô ấy quả nhiên đã chọn chuyên ngành văn học mà mình yêu thích nhất.",
    "他果然没有放弃，坚持完成了比赛。": "Anh ấy quả nhiên không từ bỏ, kiên trì hoàn thành cuộc thi.",
    "这简直是在开玩笑！": "Chuyện này quả thực đúng là trò đùa!",
    "画面里的竹子简直像真的一样。": "Cây trúc trong bức tranh quả thật giống hệt như đồ thật.",
    "高科技绝对会成为各行各业发展的重要因素。": "Công nghệ cao tuyệt đối sẽ trở thành nhân tố quan trọng cho sự phát triển của mọi ngành nghề.",
    "老张这个人绝对可靠。": "Bác Trương người này tuyệt đối đáng tin cậy.",
    "近年来城乡差距的确缩小了不少。": "Những năm gần đây khoảng cách thành thị và nông thôn đích thực đã thu hẹp đi nhiều.",
    "我今天上班的确迟到了，因为路上发生了交通事故。": "Hôm nay tôi đi làm đúng thật là đã đi trễ, vì trên đường xảy ra tai nạn giao thông.",
    "道歉不会损害企业的形象，反而能够赢得消费者的信任。": "Xin lỗi không làm tổn hại hình ảnh doanh nghiệp, trái lại còn giành được niềm tin của người tiêu dùng.",
    "我妈妈退休以后反而更忙了。": "Mẹ tôi sau khi nghỉ hưu ngược lại còn bận rộn hơn trước.",
    "不用白费力气了，结果已经无法改变了。": "Đừng uổng phí công sức nữa, kết quả đã không thể thay đổi được rồi.",
    "妈妈的话白说了，孩子并没有听。": "Lời mẹ nói uổng công vô ích rồi, con trẻ chẳng hề nghe theo.",
    "今天刚好有空儿，咱们去爬山吧。": "Hôm nay vừa khéo có chút thời gian rảnh, chúng mình đi leo núi đi.",
    "我们去找他玩的时候，他刚好做完作业。": "Lúc chúng tôi tìm đến rủ cậu ấy đi chơi, cậu ấy vừa vặn làm xong bài tập.",
    "这么难得的机会，你可不能错过啊！": "Cơ hội hiếm có thế này, bạn nhất định không được bỏ lỡ đâu đấy!",
    "下周就要比赛了，咱们可得抓紧时间训练。": "Tuần tới là thi đấu rồi, chúng ta thật sự phải tranh thủ thời gian rèn luyện thôi.",
    # 12
    "自从和丈夫离了婚，她一个人去了很多地方旅行。": "Kể từ sau khi ly hôn với chồng, cô ấy một mình đi du lịch rất nhiều nơi.",
    "自从进入大学，每次与就业有关的讲座他都会参加。": "Kể từ khi vào đại học, buổi tọa đàm nào liên quan đến việc làm anh ấy cũng đều tham dự.",
    # 13
    "沿着这条路朝东走就是我们今晚要住的酒店。": "Men theo con đường này đi về hướng đông chính là khách sạn tối nay chúng ta ở.",
    "冬天许多鸟都会朝南方温暖的地方飞去。": "Mùa đông rất nhiều loài chim đều bay về hướng phương nam ấm áp.",
    "沿着这条高速公路一直开，就能到达那座城市。": "Cứ lái thẳng theo tuyến đường cao tốc này là có thể đến được thành phố đó.",
    "老人沿着墙边种了很多花。": "Cụ già trồng rất nhiều hoa dọc theo chân tường.",
    "你沿着这个思路进行下去，就能找到解决问题的方法。": "Bạn cứ bám theo hướng suy nghĩ này tiếp tục đi, sẽ tìm ra phương pháp giải quyết vấn đề.",
    # 14
    "希望这次采访能替我们宣传一下公司的新产品。": "Hi vọng buổi phỏng vấn lần này có thể thay chúng tôi quảng bá sản phẩm mới của công ty.",
    "我出差期间，同事替我照顾我的宠物。": "Trong thời gian tôi đi công tác, đồng nghiệp thay tôi chăm sóc thú cưng.",
    "汉语同其他语言一样，有很多独特的表达方式。": "Tiếng Hán cũng giống như các ngôn ngữ khác, có rất nhiều cách diễn đạt độc đáo.",
    "这件事我得同父母谈谈，看看他们同意不同意。": "Chuyện này con phải nói chuyện với bố mẹ, xem bố mẹ có đồng ý hay không.",
    "今年的放假时间较去年稍有变化。": "Thời gian nghỉ lễ năm nay so với năm ngoái có đôi chút thay đổi.",
    "本月产品销量较上月增长百分之十五。": "Sản lượng tiêu thụ sản phẩm tháng này so với tháng trước tăng 15%.",
    # 15
    "她凭这部电影成为了今年的最佳导演。": "Cô ấy nhờ vào bộ phim này mà trở thành đạo diễn xuất sắc nhất năm nay.",
    "凭这张票，你可以免费参观这场展览。": "Dựa vào tấm vé này, bạn có thể tham quan miễn phí buổi triển lãm này.",
    # 16
    "据我们掌握的数据，这个地区的石油资源十分丰富。": "Căn cứ vào số liệu chúng tôi nắm giữ, tài nguyên dầu mỏ của khu vực này vô cùng phong phú.",
    "据我观察，这个问题不难解决。": "Theo như tôi quan sát, vấn đề này không hề khó giải quyết.",
    # 17
    "法律的修改应当依据社会现实。": "Việc sửa đổi pháp luật nên căn cứ theo hiện thực xã hội.",
    "企业要依据消费者的需求研发新产品。": "Doanh nghiệp cần phải dựa theo nhu cầu của người tiêu dùng để nghiên cứu phát triển sản phẩm mới.",
    # 18
    "他负责项目的设计、执行以及最终的总结工作。": "Anh ấy phụ trách công tác thiết kế, triển khai cũng như tổng kết sau cùng của dự án.",
    "我对这本书的内容以及作者还不太了解，你能介绍一下吗？": "Tôi vẫn chưa hiểu rõ lắm về nội dung cũng như tác giả của cuốn sách này, bạn có thể giới thiệu một chút không?",
    "你同新来的同事一起去吧，顺便给他介绍一下公司的情况。": "Cậu cùng đi với đồng nghiệp mới đến đi, tiện thể giới thiệu tình hình công ty cho anh ấy.",
    "这项比赛要求孩子同家长一起参加。": "Cuộc thi này yêu cầu trẻ em cùng tham gia với phụ huynh.",
    # 19
    "学校更新了教学设备，从而为学生提供了更好的学习环境。": "Nhà trường đã nâng cấp trang thiết bị giảng dạy, từ đó mang đến môi trường học tập tốt hơn cho học sinh.",
    "这次合作让我们加深了对彼此的了解，从而建立了深厚的友谊。": "Lần hợp tác này giúp chúng tôi hiểu sâu hơn về nhau, nhờ đó xây dựng nên tình bạn bền chặt.",
    "他每天都工作到很晚，可见他十分热爱这份工作。": "Anh ấy ngày nào cũng làm việc đến rất muộn, có thể thấy anh ấy vô cùng yêu thích công việc này.",
    "他的演讲得到了热烈的掌声，可见大家都很支持他的观点。": "Bài diễn thuyết của anh ấy nhận được tràng pháo tay nhiệt liệt, chứng tỏ mọi người đều rất ủng hộ quan điểm của anh ấy.",
    "假如让我重新选择，我还是会选择医学专业。": "Giả sử cho tôi lựa chọn lại, tôi vẫn sẽ chọn chuyên ngành y học.",
    "假如你有机会出国旅行，你最想去哪个国家？": "Giả sử bạn có cơ hội đi du lịch nước ngoài, bạn muốn đến quốc gia nào nhất?",
    "一个人在国外生活，要自己照顾自己，还要学习当地的语言和文化，总之，挺不容易的。": "Một mình sống ở nước ngoài, phải tự chăm sóc bản thân, lại còn phải học ngôn ngữ và văn hóa bản địa, tóm lại là rất không dễ dàng.",
    "你同意也好，不同意也好，总之，我一定要去北京。": "Cậu đồng ý cũng được, không đồng ý cũng được, tóm lại tôi nhất định phải đi Bắc Kinh.",
    # 20
    "她笑得像个孩子似的。": "Cô ấy cười tít mắt hệt như một đứa trẻ con vậy.",
    "他们讨论得很激烈，像是要吵起来似的。": "Họ tranh luận dữ dội, trông cứ như thể sắp sửa cãi nhau đến nơi vậy.",
    # 21
    "我们争来争去，还是没找到最佳方案。": "Chúng tôi tranh cãi qua lại, rốt cuộc vẫn chưa tìm ra phương án tối ưu.",
    "他工作很忙，经常在国内外飞来飞去。": "Công việc của anh ấy rất bận, thường xuyên bay đi bay lại khắp trong và ngoài nước.",
    "我想来想去，决定先不告诉她这个坏消息。": "Tôi suy đi tính lại, quyết định tạm thời không báo cho cô ấy tin dữ này.",
    # 22
    "我今天太困了，写着写着作业就睡着了。": "Hôm nay tôi buồn ngủ quá, đang viết bài tập dở thì lăn ra ngủ quên mất.",
    "他走着走着，突然发现自己迷路了。": "Anh ấy đang đi bỗng nhiên phát hiện ra mình đã bị lạc đường.",
    # 23
    "你这样没日没夜地工作，身体早晚会出问题的。": "Cậu cứ làm việc không kể ngày đêm như thế, sức khỏe sớm muộn gì cũng sinh chuyện thôi.",
    "这孩子说话没大没小，父母必须要好好教育。": "Đứa bé này ăn nói không biết lớn bé, cha mẹ nhất định phải dạy bảo cho đàng hoàng.",
    # 24
    "越来越多的年轻人选择说走就走的旅行。": "Ngày càng nhiều bạn trẻ chọn những chuyến đi xách ba lô lên và đi ngay.",
    "他总是说干就干，从不浪费时间。": "Anh ấy luôn nói là làm liền, không bao giờ lãng phí thời gian.",
    # 25
    "他最近的表现好得不得了，老师都说他进步很大。": "Biểu hiện dạo này của cậu ấy tốt vô cùng, giáo viên đều khen cậu ấy tiến bộ rất lớn.",
    "不得了了，厨房着火了！": "Nguy to rồi, nhà bếp bị cháy rồi!",
    # 26
    "这点儿小病，用不着去医院。": "Chút bệnh vặt này không cần phải đến bệnh viện đâu.",
    "这件事用不着大家都来帮忙，我自己就能完成。": "Việc này không cần tất cả mọi người cùng đến giúp đâu, một mình tôi cũng có thể hoàn thành.",
    "我们还有时间，你现在用不着着急。": "Chúng ta vẫn còn thời gian, lúc này bạn không cần phải sốt ruột.",
    # 27
    "从这次的考试成绩来看，大家都付出了很多努力。": "Xem xét từ thành tích thi lần này, mọi người đều đã bỏ ra rất nhiều nỗ lực.",
    "从长远来看，掌握一门外语对个人发展很有帮助。": "Nhìn về lâu về dài, nắm vững một ngoại ngữ rất có ích cho sự phát triển của cá nhân.",
    # 28
    "这些汉字写得大的大、小的小，一点儿也不整齐。": "Mấy chữ Hán này viết chữ thì to chữ thì nhỏ, chẳng đều đặn ngay ngắn chút nào.",
    "广场上孩子们跑的跑，跳的跳，热闹极了。": "Trên quảng trường lũ trẻ đứa thì chạy đứa thì nhảy, náo nhiệt vô cùng.",
    # 29
    "自改革开放以来，中国社会发生了巨大的改变。": "Kể từ khi cải cách mở cửa đến nay, xã hội Trung Quốc đã diễn ra những biến đổi to lớn.",
    "外公去世以来，我时常梦到他。": "Kể từ ngày ông ngoại qua đời, tôi thường xuyên mơ thấy ông.",
    # 30
    "本课程由理论学习和实践操作两部分内容组成。": "Khóa học này bao gồm hai phần nội dung: học lý thuyết và thao tác thực hành cấu thành nên.",
    "项目团队由三位工程师组成。": "Đội ngũ dự án do ba kỹ sư hợp thành.",
    # 31
    "马上就要面试了，他紧张得坐也不是，站也不是。": "Sắp phỏng vấn đến nơi rồi, anh ấy căng thẳng đến mức ngồi cũng không xong mà đứng cũng chẳng yên.",
    "公司已经三个月没有发工资了，他走也不是，留也不是，不知道怎么办好。": "Công ty đã ba tháng không trả lương, anh ấy đi cũng dở mà ở lại cũng không xong, chẳng biết phải làm sao.",
    # 32
    "对这个孩子他实在没办法，打也打不得，说也说不得。": "Đối với đứa trẻ này anh ấy thực sự hết cách, đánh cũng không được mà mắng mỏ cũng chẳng xong.",
    "听到消息后，她哭也哭不得，笑也笑不得。": "Sau khi nghe tin tức, cô ấy dở khóc dở cười, khóc không được mà cười cũng không xong.",
    # 33
    "好是它，坏也是它，你没有别的选择。": "Dù tốt hay xấu cũng chỉ có nó thôi, bạn không có sự lựa chọn nào khác đâu.",
    "成功是它，失败也是它，这个决定我绝对不后悔。": "Thành công hay thất bại cũng là vì quyết định này, tôi tuyệt đối không hề hối hận.",
    # 34
    "闲着也是闲着，明天我准备把车库打扫一遍。": "Đằng nào cũng đang rảnh rỗi, ngày mai tôi dự định dọn dẹp gara một lượt.",
    "那辆旧车你很少开，放着也是放着，要不卖了吧。": "Chiếc xe cũ kia bạn ít khi lái, để đấy cũng chỉ thêm chật, hay là bán đi cho rồi.",
    # 35
    "不管怎么说，健康才是最重要的，要注意身体。": "Dù sao đi nữa thì sức khỏe mới là quan trọng nhất, phải chú ý giữ gìn thân thể.",
    "不管怎么说，用打骂的方法教育孩子是不对的。": "Dù nói thế nào đi chăng nữa, dùng đòn roi la mắng để dạy dỗ con cái là sai trái.",
    # 36
    "真有你的，这么难的题目都做对了！": "Khá khen cho bạn thật đấy, đề khó thế này mà cũng giải đúng được!",
    "真有他的，一个人爬上了这么高的山！": "Anh ấy giỏi thật đấy chứ, một mình leo lên ngọn núi cao ngất ngưởng như vậy!",
    "真有她的，在这么吵的地方都能睡着！": "Cô nàng cừ thật đấy, ở nơi ồn ào như thế này mà cũng ngủ say được!",
    # 37
    "吵什么吵，公共场所禁止大声说话！": "Ồn ào cái gì mà ồn ào, nơi công cộng cấm nói to tiếng!",
    "玩什么玩，作业还没写完呢！": "Chơi bời cái nỗi gì, bài tập còn chưa làm xong đâu đấy!",
    # 38
    "什么谢不谢的，我们之间不用这么客气。": "Cảm ơn với chả không cảm ơn cái gì chứ, giữa chúng ta đâu cần khách sáo thế.",
    "什么麻烦不麻烦的，朋友之间互相帮忙是应该的。": "Phiền phức với chả không phiền phức, bạn bè giúp đỡ lẫn nhau là lẽ đương nhiên.",
    # 39
    "音乐会的门票是客户赠送的，咱们不听白不听。": "Vé xem hòa nhạc là khách hàng tặng, chúng mình không đi nghe thì phí của trời.",
    "这件衣服难得打折，不买白不买。": "Chiếc áo này hiếm khi giảm giá, không mua thì uổng phí.",
    # 40
    "听来听去，都是一些差不多的意见。": "Nghe đi nghe lại, toàn là mấy ý kiến na ná như nhau.",
    "大家商量来商量去，就是想不出什么好办法。": "Mọi người bàn tới bàn lui, mãi vẫn không nghĩ ra được cách nào hay.",
    # 41
    "孩子长大了，不像以前，父母说什么就是什么。": "Con cái lớn rồi, không giống như ngày xưa bố mẹ bảo sao thì nghe vậy nữa.",
    "工作要按照公司的规定执行，不能你想什么就是什么。": "Công việc phải thực hiện theo quy định của công ty, không thể nào bạn muốn thế nào là cứ thế được.",
    # 42
    "他为了锻炼身体每天早上在公园里跑步。": "Để rèn luyện sức khỏe, mỗi sáng anh ấy đều chạy bộ trong công viên.",
    "他昨天晚上一个人在图书馆认真地复习了三个小时。": "Tối hôm qua anh ấy đã một mình chăm chỉ ôn bài suốt ba tiếng đồng hồ trong thư viện.",
    # 43
    "伤害人的玩笑可开不得。": "Những trò đùa gây tổn thương người khác tuyệt đối không được đùa đâu nhé.",
    "这院是出得还是出不得，得先问问医生的建议。": "Viện này có xuất viện được hay không được, phải hỏi trước ý kiến của bác sĩ đã.",
    "写论文这件事情急不得，你得多看多想。": "Chuyện viết luận văn không thể nóng vội được, bạn phải đọc nhiều và suy ngẫm nhiều.",
    # 44
    "收到大学的录取通知书，她激动得不得了。": "Nhận được giấy báo trúng tuyển đại học, cô ấy xúc động vô cùng.",
    "听到父亲被送去急诊的消息，她担心得不得了。": "Nghe tin cha bị đưa đi cấp cứu, cô ấy lo lắng khôn xiết.",
    # 45
    "听着窗外的雨声，我的心慢慢地平静下来了。": "Lắng nghe tiếng mưa ngoài cửa sổ, lòng tôi từ từ lắng dịu bình yên trở lại.",
    "不知道是什么原因，他的声音渐渐低了下去。": "Không rõ là vì nguyên nhân gì, giọng nói của anh ấy dần dần trầm nhỏ hẳn đi.",
    "该睡觉了，快把你的玩具收拾起来。": "Đến giờ ngủ rồi, mau thu dọn đồ chơi của con gọn gàng vào đi.",
    "在医生们的努力下，病人终于醒过来了。": "Dưới sự nỗ lực của các bác sĩ, bệnh nhân cuối cùng đã tỉnh táo trở lại.",
    "经过一天的长途旅行，大家都很累，一上车就纷纷睡过去了。": "Sau một ngày du lịch đường dài, ai nấy đều thấm mệt, vừa lên xe là lục tục ngủ thiếp đi.",
    # 46
    "孩子们玩儿得忘了时间，直到天黑才回家。": "Lũ trẻ chơi đùa đến mức quên cả thời gian, mãi tới lúc trời tối mịt mới chịu về nhà.",
    "面对自己喜欢的明星，他紧张得说不出话。": "Đối diện với ngôi sao thần tượng mà mình yêu thích, anh ấy căng thẳng đến nỗi không thốt nên lời.",
    # 47
    "他跑得全身是汗，终于按时到了公司。": "Anh ấy chạy đến mức cả người đầm đìa mồ hôi, cuối cùng cũng tới công ty đúng giờ.",
    "天气热得大家都不想出门。": "Thời tiết oi bức đến độ ai nấy đều chẳng buồn bước chân ra đường.",
    # 48
    "快上课了，他跑得上气不接下气。": "Sắp vào học rồi, cậu ấy chạy đến mức thở không ra hơi.",
    "为了准备年夜饭，她累得满头大汗。": "Để chuẩn bị mâm cơm tất niên, bà ấy mệt đến mức mồ hôi nhễ nhại đầy đầu.",
    # 49
    "尽管是兄弟，但是他们心里有着很深的矛盾。": "Dù là anh em ruột thịt, nhưng trong lòng họ lại tồn tại mâu thuẫn rất sâu sắc.",
    "两国之间有着长期友好的关系。": "Giữa hai quốc gia luôn duy trì mối quan hệ hữu nghị lâu dài.",
    # 50
    "门关着，墙上挂有“暂停营业”的牌子。": "Cửa đóng kín, trên tường có treo tấm biển 'Tạm dừng kinh doanh'.",
    "这本书的第一页写有作者的名字。": "Trang đầu tiên của cuốn sách này có ghi tên tác giả.",
    # 51
    "孩子把书包一扔，坐在地上哭了起来。": "Đứa bé vứt toẹt cặp sách xuống, ngồi phịch trên sàn òa khóc.",
    "经理把任务一说，员工们就开始干活了。": "Quản lý vừa phổ biến xong nhiệm vụ một cái là các nhân viên bắt tay vào làm việc ngay.",
    # 52
    "他把存款都买车了。": "Anh ấy đem toàn bộ tiền tiết kiệm đi mua ô tô mất rồi.",
    "我把父母给的生活费借朋友了。": "Tôi lỡ đem tiền sinh hoạt phí bố mẹ cho cho bạn bè vay mất rồi.",
    # 53
    "她丈夫生病住院了。": "Chồng cô ấy bị ốm phải nhập viện rồi. (Quan hệ nhân quả)",
    "王经理开会忘了带会议资料。": "Giám đốc Vương đi họp mà quên mang tài liệu cuộc họp. (Quan hệ chuyển ngoặt)",
    "面对快速变化的形势，我们应该尽快制定方案应对风险。": "Trước tình hình biến đổi nhanh chóng, chúng ta nên mau chóng xây dựng phương án để ứng phó rủi ro. (Quan hệ điều kiện)",
    # 54
    "他高我一头。": "Cậu ấy cao hơn tôi hẳn một cái đầu.",
    "姐姐重我两公斤。": "Chị gái nặng hơn tôi hai ki-lô-gam.",
    "哥哥早我两年上学。": "Anh trai đi học sớm hơn tôi hai năm.",
    # 55
    "我新买的衣服被他给洗坏了。": "Bộ quần áo tôi mới mua bị anh ấy giặt cho hỏng bét rồi.",
    "她的帽子叫风给吹跑了。": "Chiếc mũ của cô ấy bị gió thổi bay mất rồi.",
    "对不起，这些资料让我给搞乱了。": "Xin lỗi nhé, đống tài liệu này bị tôi làm cho lộn xộn hết cả lên rồi.",
    # 56
    "领导还没讲完，他便提前离开了。": "Lãnh đạo còn chưa phát biểu xong, anh ấy đã vội rời đi trước rồi.",
    "他看我心情不好，便陪我聊了半天。": "Anh ấy thấy tâm trạng tôi không vui, bèn ngồi trò chuyện cùng tôi suốt cả buổi.",
    "我写完作业便和朋友一起出去玩儿了。": "Tôi làm xong bài tập liền cùng bạn bè rủ nhau ra ngoài đi chơi.",
    # 57
    "晚餐我或是吃面条儿，或是喝粥。": "Bữa tối tôi hoặc là ăn mì sợi, hoặc là húp chút cháo.",
    "假期他或是去海边度假，或是去爬山。": "Kỳ nghỉ anh ấy hoặc là đi biển nghỉ dưỡng, hoặc là đi leo núi.",
    # 58
    "一旦养成坏习惯，就很难改变。": "Một khi đã hình thành thói quen xấu thì sẽ rất khó thay đổi.",
    "孩子一旦发烧，就赶快送去医院。": "Đứa bé hễ mà sốt một cái là phải mau chóng đưa đến bệnh viện ngay.",
    # 59
    "假如他们也同意，我们就按照计划开展工作。": "Giả sử họ cũng đồng ý, chúng ta sẽ bắt tay triển khai công việc theo đúng kế hoạch.",
    "假如有一天你当了校长，你会制定什么规则？": "Giả sử một ngày nào đó bạn làm hiệu trưởng, bạn sẽ ban hành những nội quy gì?",
    # 60
    "万一他不配合，我们就要想其他办法。": "Vạn nhất anh ta không chịu phối hợp, chúng ta sẽ phải tính phương án khác.",
    "万一失败了，你考虑过后果吗？": "Lỡ may thất bại, bạn đã từng nghĩ tới hậu quả chưa?",
    # 61
    "公司需要敢想敢干的年轻人，要不然就很难有发展。": "Công ty cần những người trẻ dám nghĩ dám làm, bằng không thì sẽ rất khó có bước phát triển.",
    "还好我反应快，不然孩子就摔倒了。": "Cũng may tôi phản xạ nhanh, nếu không thì đứa nhỏ đã ngã rồi.",
    # 62
    "她上课坚持认真听讲，因而成绩始终非常优秀。": "Cô ấy luôn kiên trì chăm chú nghe giảng trên lớp, do đó thành tích trước sau vẫn vô cùng xuất sắc.",
    "我和他认识很多年了，因而很了解他的性格。": "Tôi và anh ấy quen biết nhau đã bao nhiêu năm, thành thử rất thấu hiểu tính cách của anh ấy.",
    # 63
    "这个项目完成得如此顺利，可见团队的合作非常有效。": "Dự án này hoàn thành thuận lợi đến như vậy, có thể thấy sự hợp tác của toàn đội ngũ vô cùng hiệu quả.",
    "他每天都在图书馆学习，可见他对考试非常重视。": "Ngày nào cậu ấy cũng vùi đầu học ở thư viện, đủ thấy cậu ấy coi trọng kỳ thi đến mức nào.",
    # 64
    "哪怕时间再紧张，也要按时完成任务。": "Cho dù thời gian có gấp gáp đến đâu đi nữa, cũng phải hoàn thành nhiệm vụ đúng hạn.",
    "哪怕租金继续提高，也仍然有很多人愿意住在这里。": "Dẫu cho tiền thuê nhà có tiếp tục tăng cao, vẫn có rất nhiều người sẵn sàng sống ở đây.",
    # 65
    "他不但不改正错误，反而继续犯更大的错误。": "Hắn ta chẳng những không sửa chữa lỗi lầm, ngược lại còn tiếp tục phạm sai lầm nghiêm trọng hơn.",
    "你这样做不但没有解决问题，反而增加了新问题。": "Bạn làm như thế chẳng những không giải quyết được vấn đề, trái lại còn nảy sinh thêm nhiều rắc rối mới.",
    "火不但没有灭，反而越来越大了。": "Ngọn lửa chẳng những không dập tắt được, mà trái lại ngày một bùng cháy lớn hơn.",
    # 66
    "不是光有目标就可以，还要行动起来。": "Không phải chỉ cần có mục tiêu là xong, mà còn phải bắt tay vào hành động thực tế nữa.",
    "这个问题不是我一个人就能解决的，还是需要大家积极配合。": "Vấn đề này không phải một mình tôi là có thể giải quyết xong, mà vẫn cần mọi người tích cực phối hợp cùng.",
    # 67
    "他每天早起锻炼，为的是保持健康。": "Anh ấy ngày nào cũng dậy sớm rèn luyện thể thao, cốt là để giữ gìn sức khỏe.",
    "她每天都练习中文，为的是将来能够来中国留学。": "Cô ấy ngày ngày đều luyện tập tiếng Trung, mục đích là để mai sau có thể sang Trung Quốc du học.",
    # 68
    "没有老师的努力付出就没有我们今天的成绩。": "Không có sự tận tụy cống hiến của các thầy cô thì sẽ không có được thành tích ngày hôm nay của chúng em.",
    "没有汗水就没有收获。": "Không có mồ hôi công sức thì sẽ không có gặt hái thành quả.",
    # 69
    "不尝不知道，这种水果的味道果然很独特。": "Không nếm thử thì không biết, hương vị của loại trái cây này quả nhiên rất độc đáo.",
    "毛病虽然不大，但还是应该修理一下，不修不安全。": "Trục trặc tuy không lớn, nhưng vẫn nên sửa chữa một chút, không sửa thì không an toàn.",
    # 70
    "这首歌再听多少遍也不会烦。": "Bài hát này dẫu nghe đi nghe lại bao nhiêu lần đi chăng nữa cũng chẳng thấy chán.",
    "困难再大也要坚持下去。": "Khó khăn có to lớn đến mấy cũng nhất định phải kiên trì tới cùng.",
}

# Metadata for all 70 HSK5 items
METADATA = [
    {
        "order": 1,
        "vietnameseTitle": "Hậu tố danh từ: —头 (—tou)",
        "structure": "Danh từ / Động từ / Tính từ + 头 (tou)",
        "category": "tu-loai",
        "explanation": "Hậu tố '头' (đọc thanh nhẹ 'tou') ghép sau danh từ, tính từ hoặc động từ để cấu tạo thành danh từ chỉ vật thể (石头 - hòn đá, 木头 - khúc gỗ), phương hướng vị trí (里头 - bên trong, 外头 - bên ngoài, 前头 - phía trước) hoặc tính chất cảm xúc (苦头 - nỗi khổ, 甜头 - vị ngọt/mối lợi).",
        "tip": "Khi làm hậu tố từ loại, '头' thường đọc thanh nhẹ (thanh 0: tou). Không nhầm với danh từ độc lập 'tóu' (cái đầu)."
    },
    {
        "order": 2,
        "vietnameseTitle": "Đại từ chỉ thị cao cấp: 彼此, 如此, 本",
        "structure": "彼此 / 如此 / 本 + Danh từ",
        "category": "tu-loai",
        "explanation": "'彼此' (bǐcǐ) nghĩa là 'lẫn nhau, hai bên'; '如此' (rúcǐ) mang sắc thái văn viết trang trọng thay cho '这样, 这么' (như thế, như vậy); '本' (běn) dùng trước danh từ để chỉ 'này, bản thân chúng ta' (本规定 - quy định này, 本次 - lần này, 本地 - địa phương này, 本人 - bản thân tôi).",
        "tip": "Trong thi viết HSK 5 và văn bản hành chính, dùng '如此' và '本' giúp bài viết mang đậm văn phong chuẩn mực cao cấp."
    },
    {
        "order": 3,
        "vietnameseTitle": "Hệ thống lượng từ danh từ trung-cao cấp (册, 朵, 届, 颗, 匹, 行, 架, 群, 支, 根, 批, 束, 副, 集, 周)",
        "structure": "Số từ + Lượng từ + Danh từ",
        "category": "tu-loai",
        "explanation": "HSK 5 quy định hệ thống lượng từ phong phú: '册' (tập/quyển sách), '朵' (đóa/bông mây, hoa), '届' (khóa/kỳ đại hội, triển lãm), '颗' (hạt/viên sỏi, sao, răng), '匹' (con ngựa, súc vải), '行' (hàng/dòng chữ), '架' (chiếc máy bay, đàn piano), '群' (đàn/bầy người, động vật), '支' (đội ngũ, bài hát, cây bút), '根' (sợi/que đũa, gậy, dây), '批' (lô/đợt hàng, nhân viên), '束' (bó hoa, chùm sáng), '副' (bộ/đôi găng tay, mắt kính), '集' (tập phim truyền hình), '周' (vòng quay, chu kỳ).",
        "tip": "Hãy học lượng từ đi kèm danh từ cố định theo cụm để làm bài tập chọn từ điền chỗ trống phần đọc hiểu HSK 5."
    },
    {
        "order": 4,
        "vietnameseTitle": "Động lượng từ: 眼 (nhìn một cái, liếc một cái)",
        "structure": "Động từ (看 / 瞧 / 瞄) + 一眼",
        "category": "tu-loai",
        "explanation": "'眼' làm động lượng từ lâm thời đi sau các động từ thị giác như '看', '瞅', '瞧', biểu thị hành động liếc nhìn hoặc đảo mắt qua một cái nhanh chóng.",
        "tip": "Thường dùng trong kết cấu '看了一眼' (liếc nhìn một cái). Chú ý không nhầm với danh từ '眼睛' (con mắt)."
    },
    {
        "order": 5,
        "vietnameseTitle": "Phó từ mức độ HSK 5: 过于, 相当, 较, 可, 格外, 极其",
        "structure": "过于 / 相当 / 较 / 可 / 格外 / 极其 + Tính từ / Động từ tâm lý",
        "category": "tu-loai",
        "explanation": "Biểu thị các cấp độ trạng thái: '过于' (quá mức, thái quá - mang hàm ý tiêu cực); '相当' (khá là, tương đối); '较' (tương đối, so với thông thường - văn viết); '可...了' (nhấn mạnh khẩu ngữ: ...lắm đấy); '格外' (đặc biệt, phi thường - vượt trội hoàn cảnh khác); '极其' (cực kỳ, hết sức - văn viết trang trọng).",
        "tip": "'过于' thường dùng khi mức độ vượt quá giới hạn gây hại (过于紧张, 过于追求完美); còn '格外' nhấn mạnh sự nổi bật khác thường."
    },
    {
        "order": 6,
        "vietnameseTitle": "Phó từ thời gian HSK 5: 时刻, 曾经, 立刻, 连忙, 始终, 早已, 即将, 急忙, 渐渐, 尽快, 早晚",
        "structure": "Phó từ thời gian + Động từ / Cụm vị ngữ",
        "category": "tu-loai",
        "explanation": "Chỉ thời điểm và nhịp điệu: '时刻' (luôn luôn, mọi lúc); '曾经' (đã từng); '立刻' (lập tức); '连忙' (vội vàng làm ngay do kích thích bên ngoài); '始终' (trước sau như một, luôn luôn); '早已' (từ lâu đã); '即将' (sắp sửa - văn viết); '急忙' (hối hả, vội vã); '渐渐' (dần dần, từ từ); '尽快' (càng sớm càng tốt); '早晚' (sớm muộn gì cũng).",
        "tip": "Phân biệt '连忙' (phản xạ hành động ngay do tình huống) và '急忙' (tâm trạng nôn nóng, tất bật hối hả)."
    },
    {
        "order": 7,
        "vietnameseTitle": "Phó từ tần suất HSK 5: 老是, 通常, 时常",
        "structure": "Chủ ngữ + 老是 / 通常 / 时常 + Vị ngữ",
        "category": "tu-loai",
        "explanation": "'老是' (cứ luôn, suốt ngày - thường mang ý phàn nàn trong khẩu ngữ); '通常' (thông thường, theo lẽ bình thường); '时常' (thường xuyên, thường hay - tương đương với 经常).",
        "tip": "'老是' mang sắc thái tình cảm không hài lòng, trách móc (老是迟到 - suốt ngày đi trễ), tránh dùng trong ngữ cảnh ngợi khen trang trọng."
    },
    {
        "order": 8,
        "vietnameseTitle": "Phó từ phương thức: 尽量, 亲自",
        "structure": "尽量 / 亲自 + Động từ",
        "category": "tu-loai",
        "explanation": "'尽量' (hết sức cố gắng, ráng hết mức trong khả năng cho phép); '亲自' (đích thân, tự mình làm mà không thông qua người khác nhằm thể hiện sự tôn trọng hoặc trực tiếp).",
        "tip": "'尽量' phát âm chuẩn là jǐnliàng (thanh 3 khi là phó từ), không đọc jìnliàng."
    },
    {
        "order": 9,
        "vietnameseTitle": "Phó từ liên kết: 便 (liền, thì) và 一旦 (một khi)",
        "structure": "一...便... / 一旦...就...",
        "category": "tu-loai",
        "explanation": "'便' (biàn) tương đương với '就' nhưng mang sắc thái văn viết trang nhã hơn; '一旦' (yídàn) biểu thị điều kiện giả định xảy ra trong tương lai hoặc đột ngột: 'một khi đã... thì...'.",
        "tip": "'一旦' thường đi sóng đôi với '就' ở phân câu sau và thường nói về những bước ngoặt hoặc hậu quả hệ trọng."
    },
    {
        "order": 10,
        "vietnameseTitle": "Phó từ tình thái mô phỏng: 似乎, 仿佛",
        "structure": "似乎 / 仿佛 (+ ...似的 / 一般)",
        "category": "tu-loai",
        "explanation": "'似乎' và '仿佛' đều biểu thị dự đoán không chắc chắn, cảm giác dường như, tựa như, có vẻ như. Thường kết hợp với '...似的' hoặc '一般' ở cuối phân câu.",
        "tip": "'仿佛' thường dùng trong văn học miêu tả so sánh ví von hình ảnh; '似乎' phổ biến cả trong lập luận và giao tiếp đời sống."
    },
    {
        "order": 11,
        "vietnameseTitle": "Phó từ ngữ khí cao cấp: 毕竟, 居然, 反正, 根本, 果然, 简直, 绝对, 的确, 反而, 白, 刚好, 可",
        "structure": "Chủ ngữ + Phó từ ngữ khí + Vị ngữ",
        "category": "tu-loai",
        "explanation": "Chùm phó từ biểu cảm tinh tế: '毕竟' (rốt cuộc, dẫu sao thì); '居然' (thế mà, lại - bất ngờ ngoài dự tính); '反正' (đằng nào thì, dù sao thì); '根本' (căn bản, hoàn toàn); '果然' (quả nhiên - đúng như dự đoán); '简直' (quả thật, quả đúng là - cường điệu); '绝对' (tuyệt đối); '的确' (đích thực, đúng thật); '反而' (ngược lại, trái lại); '白' (uổng công, làm vô ích); '刚好' (vừa khéo, vừa vặn); '可' (nhấn mạnh ngữ khí khẳng định hoặc cảnh báo: thật là, nhất định).",
        "tip": "Đây là nhóm phó từ xuất hiện với mật độ dày đặc nhất trong đề thi HSK 5 phần đọc hiểu và sắp xếp câu."
    },
    {
        "order": 12,
        "vietnameseTitle": "Giới từ chỉ mốc khởi điểm thời gian: 自从 (Kể từ khi...)",
        "structure": "自从 + Thời gian / Sự kiện (+ 以来 / 以后)，...",
        "category": "tu-loai",
        "explanation": "'自从' dùng để dẫn xuất thời điểm bắt đầu một sự việc trong quá khứ kéo dài đến hiện tại hoặc đến một thời điểm xác định. Thường đi kèm '以来' hoặc '以后'.",
        "tip": "'自从' chỉ dùng cho mốc thời gian quá khứ, không dùng cho mốc tương lai."
    },
    {
        "order": 13,
        "vietnameseTitle": "Giới từ phương hướng và đường đi: 朝 (về hướng), 沿/沿着 (dọc theo, men theo)",
        "structure": "朝 + Phương hướng + Động từ / 沿着 + Tuyến đường / Con đường + Động từ",
        "category": "tu-loai",
        "explanation": "'朝' (cháo) chỉ hướng mục tiêu của hành động (朝东走 - đi về hướng đông, 朝南飞 - bay về hướng nam); '沿着' (yánzhe) chỉ quỹ đạo chuyển động dọc theo một tuyến đường, bờ tường hoặc hướng tư duy (沿着这个思路).",
        "tip": "Khác với '向', '朝' không đi trước một số động từ trừu tượng như 向...学习 (không nói 朝...学习)."
    },
    {
        "order": 14,
        "vietnameseTitle": "Giới từ dẫn xuất đối tượng: 替 (thay), 同 (cùng/với), 较 (so với)",
        "structure": "替 + Ai + Động từ / 同 + Ai + Động từ / 较 + Đối tượng so sánh",
        "category": "tu-loai",
        "explanation": "'替' biểu thị hành động thay thế ai hoặc vì lợi ích của ai; '同' dẫn xuất đối tượng cùng tham gia (tương đương 跟, 和); '较' dùng trong văn viết so sánh độ chênh lệch (较去年 - so với năm ngoái).",
        "tip": "'较' khi làm giới từ có nghĩa là 'so với' (较去年增长), khác với phó từ '较' mang nghĩa 'tương đối' (较高, 较快)."
    },
    {
        "order": 15,
        "vietnameseTitle": "Giới từ căn cứ, bằng chứng: 凭 (Dựa vào, nhờ vào)",
        "structure": "凭 + Bằng chứng / Năng lực / Giấy tờ + Vị ngữ",
        "category": "tu-loai",
        "explanation": "'凭' (píng) dẫn xuất căn cứ, bằng cấp, vé vào cổng, hoặc năng lực, tư cách để thực hiện một việc nào đó ('凭票入场' - vào cổng bằng vé, '凭这部电影' - nhờ vào bộ phim này).",
        "tip": "'凭什么' là câu khẩu ngữ chất vấn rất phổ biến: 'Dựa vào cái gì chứ?!'."
    },
    {
        "order": 16,
        "vietnameseTitle": "Giới từ dẫn xuất nguồn tin: 据 (Căn cứ vào, theo như...)",
        "structure": "据 + Nguồn tin / Số liệu / Người quan sát，...",
        "category": "tu-loai",
        "explanation": "'据' (jù) thường đứng đầu câu để trích dẫn nguồn số liệu, thông tin hoặc quan sát chủ quan (据报道 - theo báo cáo, 据统计 - theo thống kê, 据我所知 - theo tôi được biết, 据我观察 - theo tôi quan sát).",
        "tip": "'据' mang tính văn viết cao, giúp câu trích dẫn dữ liệu mang tính khách quan khoa học."
    },
    {
        "order": 17,
        "vietnameseTitle": "Giới từ dẫn xuất căn cứ pháp lý, nguyên tắc: 依据 (Dựa theo, căn cứ vào)",
        "structure": "依据 + Tiêu chuẩn / Quy định / Nhu cầu + Động từ",
        "category": "tu-loai",
        "explanation": "'依据' làm giới từ dùng để nêu chuẩn mực, quy tắc, pháp luật hoặc nhu cầu thực tế làm điểm tựa cho hành vi hoặc quyết định.",
        "tip": "'依据' vừa là danh từ (bằng chứng, căn cứ: 毫无依据), vừa là giới từ (căn cứ theo: 依据法律)."
    },
    {
        "order": 18,
        "vietnameseTitle": "Liên từ kết nối từ ngữ: 以及 (cũng như), 同 (và, cùng)",
        "structure": "A、B 以及 C / A 同 B",
        "category": "tu-loai",
        "explanation": "'以及' dùng để nối các danh từ hoặc ngữ danh từ đẳng lập, thường đặt trước thành phần cuối cùng được liệt kê và thành phần sau '以及' thường giữ vai trò thứ yếu hoặc bổ sung; '同' dùng như liên từ nối danh từ tương đương '和, 与'.",
        "tip": "'以及' không dùng để nối hai phân câu độc lập hay động từ chính mang tính độc lập hoàn toàn."
    },
    {
        "order": 19,
        "vietnameseTitle": "Liên từ nối phân câu logic: 从而, 可见, 假如, 总之",
        "structure": "Phân câu 1，从而 / 可见 / 假如 / 总之 + Phân câu 2",
        "category": "cau-phuc",
        "explanation": "'从而' (từ đó, qua đó dẫn đến kết quả tiếp theo); '可见' (có thể thấy, chứng tỏ - rút ra kết luận logic từ tiền đề trước); '假如' (giả sử, nếu như); '总之' (tóm lại, nói tóm lại - khái quát hóa toàn bộ ý trước).",
        "tip": "'从而' chỉ dùng khi vế trước là phương thức/nguyên nhân và vế sau là kết quả tất nhiên của phương thức đó."
    },
    {
        "order": 20,
        "vietnameseTitle": "Trợ từ so sánh ví von: 似的 (Tựa như... vậy)",
        "structure": "像 / 跟...似的",
        "category": "tu-loai",
        "explanation": "'似的' (shìde) là trợ từ đặt ở cuối cụm từ hoặc phân câu sau '像...' hoặc '仿佛...', biểu thị sự so sánh ví von hoặc cảm giác tương tự.",
        "tip": "Lưu ý chữ '似' ở đây đọc là 'shì', không đọc là 'sì'."
    },
    {
        "order": 21,
        "vietnameseTitle": "Cụm 4 chữ lặp lại: A来A去 (Hành động qua lại nhiều lần)",
        "structure": "A 来 A 去 (Động từ A đơn âm tiết)",
        "category": "khau-ngu",
        "explanation": "Cấu trúc 4 chữ dùng động từ đơn âm tiết 'A' để diễn tả hành động lặp đi lặp lại nhiều lần, dây dưa hoặc chuyển động qua lại giữa các địa điểm/suy nghĩ (想来想去 - nghĩ đi nghĩ lại, 走来走去 - đi đi lại lại, 飞来飞去 - bay qua bay lại, 争来争去 - tranh cãi qua lại).",
        "tip": "Động từ A phải là động từ đơn âm tiết (想, 走, 飞, 跑, 挑, 选...)."
    },
    {
        "order": 22,
        "vietnameseTitle": "Cụm 4 chữ trạng thái tiếp diễn: A着A着 (Đang làm dở thì...)",
        "structure": "A 着 A 着 + Kết quả đột ngột / Sự kiện mới",
        "category": "khau-ngu",
        "explanation": "Biểu thị hành động A đang diễn ra liên tục thì đột nhiên có một tình huống hoặc trạng thái mới xuất hiện ngoài ý muốn (走着走着迷路了 - đang đi thì phát hiện lạc đường, 聊着聊着睡着了 - đang nói chuyện thì ngủ quên mất).",
        "tip": "Vế sau luôn diễn tả kết quả hoặc trạng thái phát sinh bất ngờ trong quá trình của A."
    },
    {
        "order": 23,
        "vietnameseTitle": "Cụm 4 chữ phủ định song hành: 没A没B (Không kể, không biết...)",
        "structure": "没 A 没 B",
        "category": "khau-ngu",
        "explanation": "Thành ngữ khẩu ngữ biểu thị tính chất thiếu chừng mực, không có giới hạn hoặc không biết phép tắc: '没日没夜' (ngày đêm không nghỉ, quên ăn quên ngủ), '没大没小' (không biết lớn bé, hỗn xược), '没完没了' (bất tận, không dứt).",
        "tip": "Là các thành ngữ khẩu ngữ rất sinh động, thường dùng để phê bình hoặc cường điệu mức độ."
    },
    {
        "order": 24,
        "vietnameseTitle": "Cụm 4 chữ quyết đoán dứt khoát: 说A就A (Nói là làm ngay)",
        "structure": "说 A 就 A",
        "category": "khau-ngu",
        "explanation": "Biểu thị sự quyết đoán, nhanh chóng, hành động diễn ra tức thì sau lời nói hoặc ý nghĩ mà không hề chần chừ do dự ('说走就走的旅行' - chuyến đi xách ba lô lên và đi ngay, '说干就干' - nói là bắt tay làm ngay).",
        "tip": "'说走就走' là cụm từ thời thượng cực kỳ nổi tiếng trong giới trẻ Trung Quốc khi nói về du lịch tự do."
    },
    {
        "order": 25,
        "vietnameseTitle": "Cụm khẩu ngữ đặc biệt: 不得了 (Vô cùng / Nguy to rồi)",
        "structure": "Tính từ + 得不得了 / 不得了了，...",
        "category": "khau-ngu",
        "explanation": "Có hai cách dùng chính: 1) Làm bổ ngữ mức độ đứng sau tính từ mang nghĩa 'cực kỳ, vô cùng' (好得不得了, 忙得不得了); 2) Đứng đầu câu làm từ cảm thán báo hiệu sự việc nghiêm trọng 'Nguy to rồi!, Hỏng rồi!' (不得了了，着火了!).",
        "tip": "Chú ý ngữ cảnh: khi làm bổ ngữ có thể mang nghĩa khen hoặc chê; khi đứng độc lập đầu câu luôn báo hiệu sự cố."
    },
    {
        "order": 26,
        "vietnameseTitle": "Cụm khẩu ngữ: 用不着 (Không cần thiết, không đáng)",
        "structure": "用不着 + Động từ / Danh từ",
        "category": "khau-ngu",
        "explanation": "Là bổ ngữ khả năng cố định mang nghĩa 'không cần thiết, chẳng việc gì phải...' (tương đương 不用, 没必要). Thường dùng để an ủi, khuyên can hoặc từ chối sự giúp đỡ.",
        "tip": "Dạng khẳng định tương ứng là '用得着' (có cần đến, có ích vào việc gì)."
    },
    {
        "order": 27,
        "vietnameseTitle": "Cấu trúc quan điểm, góc nhìn: 从……来看 (Nhìn từ góc độ... mà xét)",
        "structure": "从 + Góc độ / Tiêu chí / Dữ liệu + 来看，...",
        "category": "khau-ngu",
        "explanation": "Đưa ra căn cứ, tiêu chuẩn hoặc góc độ nhận định nhằm đánh giá một sự việc (从这次考试成绩来看 - nhìn từ điểm thi lần này mà xét, 从长远来看 - nhìn về lâu về dài).",
        "tip": "Là cấu trúc 'vàng' mở đầu phân tích trong bài viết nghị luận HSK 5 và HSK 6."
    },
    {
        "order": 28,
        "vietnameseTitle": "Cấu trúc phân hóa đa dạng: A的A，B的B (Kẻ thì làm A, người thì làm B)",
        "structure": "A 的 A，B 的 B",
        "category": "khau-ngu",
        "explanation": "Dùng để miêu tả cảnh tượng sinh động nơi có nhiều người/vật đang làm các hành động khác nhau hoặc có các tính chất tương phản cùng tồn tại (跑的跑，跳的跳 - đứa thì chạy đứa thì nhảy; 大的大，小的小 - cái thì to cái thì nhỏ).",
        "tip": "A và B có thể là động từ hành động hoặc tính từ tương phản."
    },
    {
        "order": 29,
        "vietnameseTitle": "Cấu trúc khoảng thời gian: （自）……以来 (Kể từ... đến nay)",
        "structure": "（自）+ Mốc sự kiện / Thời gian + 以来，...",
        "category": "khau-ngu",
        "explanation": "Dùng trong văn viết để biểu thị suốt một khoảng thời gian liên tục tính từ một mốc thời điểm hoặc sự kiện trọng đại trong quá khứ cho tới thời điểm nói.",
        "tip": "'自' có thể lược bỏ, chỉ giữ lại '...以来' (ví dụ: 去世以来, 长期以来, 改革开放以来)."
    },
    {
        "order": 30,
        "vietnameseTitle": "Cấu trúc thành phần cấu tạo: 由……组成 (Do... hợp thành / gồm có)",
        "structure": "Chủ ngữ + 由 + Thành phần / Số lượng + 组成",
        "category": "khau-ngu",
        "explanation": "Dùng để giải thích cơ cấu tổ chức, nội dung bài học hoặc các bộ phận hợp thành của một chỉnh thể lớn.",
        "tip": "Tránh nhầm với cấu trúc bị động; '由' ở đây mang nghĩa 'do... cấu thành' chứ không biểu thị bị tác động thiệt hại."
    },
    {
        "order": 31,
        "vietnameseTitle": "Cấu trúc tình thế tiến thoái lưỡng nan: X也不是，Y也不是 (Làm X cũng dở mà làm Y cũng không xong)",
        "structure": "X 也不是，Y 也不是",
        "category": "khau-ngu",
        "explanation": "Miêu tả tình cảnh khó xử, bối rối không biết lựa chọn thế nào cho ổn thỏa, làm cách nào cũng thấy sai hoặc không tiện (坐也不是，站也不是 - ngồi không xong mà đứng cũng chẳng yên; 走也不是，留也不是 - đi không xong mà ở cũng không ổn).",
        "tip": "X và Y thường là cặp hành động đối lập hoặc tương phản nhau trong cùng một bối cảnh."
    },
    {
        "order": 32,
        "vietnameseTitle": "Cấu trúc bất lực: X也X不得，Y也Y不得 (X cũng không được, Y cũng chẳng xong)",
        "structure": "X 也 X 不得，Y 也 Y 不得",
        "category": "khau-ngu",
        "explanation": "Bổ ngữ khả năng '不得' lặp lại hai lần diễn tả trạng thái hoàn toàn bất lực trước một đối tượng hoặc tình huống trớ trêu (打也打不得，说也说不得; 哭也哭不得，笑也笑不得).",
        "tip": "Thường biểu lộ cảm xúc dở khóc dở cười hoặc đau đầu bất lực trước con cái/hoàn cảnh khó xử."
    },
    {
        "order": 33,
        "vietnameseTitle": "Cấu trúc định mệnh chấp nhận: X是它，Y也是它 (Dù X hay Y thì cũng đành chấp nhận nó)",
        "structure": "X 是它，Y 也是它",
        "category": "khau-ngu",
        "explanation": "Biểu thị thái độ kiên định chấp nhận kết quả, bất kể là tốt hay xấu, thành công hay thất bại thì cũng không thể thay đổi đối tượng hoặc quyết định đó.",
        "tip": "Mang sắc thái dứt khoát không hối tiếc (好是它，坏也是它; 成功是它，失败也是它)."
    },
    {
        "order": 34,
        "vietnameseTitle": "Cấu trúc tận dụng trạng thái sẵn có: X着也是X着 (Đằng nào cũng đang... thì cứ...)",
        "structure": "X 着也是 X 着，(不如 / 要不)...",
        "category": "khau-ngu",
        "explanation": "Biểu thị trạng thái X đang diễn ra sẵn mà không làm gì khác thì rất lãng phí, nên nhân tiện làm việc gì đó có ích (闲着也是闲着 - đằng nào cũng đang rảnh rỗi; 放着也是放着 - đằng nào đồ cũng đang để không).",
        "tip": "Động từ X thường là các trạng thái như '闲' (rảnh), '放' (để đó), '坐' (ngồi đó)."
    },
    {
        "order": 35,
        "vietnameseTitle": "Khẩu ngữ chốt lại: 不管怎样说 / 不管怎么说 (Dù sao đi nữa, dù nói thế nào chăng nữa)",
        "structure": "不管怎样说 / 不管怎么说，...",
        "category": "khau-ngu",
        "explanation": "Dùng để gác lại những tranh luận hoặc chi tiết rườm rà trước đó nhằm nhấn mạnh vào một nguyên tắc, chân lý cốt lõi hoặc kết luận quan trọng nhất.",
        "tip": "Tương đương với '无论如何' nhưng mang đậm phong cách khẩu ngữ tự nhiên."
    },
    {
        "order": 36,
        "vietnameseTitle": "Thán từ khen ngợi/kinh ngạc: 真有你/他/她的 (Khá khen cho... thật đấy!)",
        "structure": "真有 + 你 / 他 / 她的",
        "category": "khau-ngu",
        "explanation": "Khẩu ngữ biểu thị sự kinh ngạc, thán phục (hoặc đôi khi châm biếm nhẹ) trước bản lĩnh, sự gan dạ hoặc hành vi phi thường của ai đó.",
        "tip": "Có thể mang nghĩa tán dương nể phục thật lòng hoặc trêu đùa sự 'liều lĩnh/bá đạo' của đối phương."
    },
    {
        "order": 37,
        "vietnameseTitle": "Khẩu ngữ trách móc ngăn chặn: X什么X (X cái gì mà X!)",
        "structure": "Động từ X + 什么 + Động từ X",
        "category": "khau-ngu",
        "explanation": "Khẩu ngữ gay gắt hoặc suồng sã dùng để ngăn cản người khác tiếp tục hành động vô bổ, ồn ào hoặc không đúng lúc (吵什么吵 - ồn ào cái gì mà ồn; 玩什么玩 - chơi cái gì mà chơi; 哭什么哭 - khóc lóc cái gì mà khóc).",
        "tip": "Động từ X phải là cùng một động từ đơn âm tiết, thể hiện sự bức xúc hoặc răn đe."
    },
    {
        "order": 38,
        "vietnameseTitle": "Khẩu ngữ gạt đi sự khách sáo: 什么X不X（的） (...với chả không... cái gì chứ)",
        "structure": "什么 + X + 不 + X (的)，...",
        "category": "khau-ngu",
        "explanation": "Dùng để gạt bỏ sự khách sáo, áy náy hoặc sự phân biệt rạch ròi của đối phương, thể hiện mối quan hệ thân thiết không cần câu nệ (什么谢不谢的 - cảm ơn với chả không cảm ơn gì; 什么麻烦不麻烦的 - phiền phức với chả không phiền phức).",
        "tip": "Rất hữu ích khi đáp lại lời cảm ơn hoặc xin lỗi của bạn bè thân thiết để tạo không khí thoải mái."
    },
    {
        "order": 39,
        "vietnameseTitle": "Khẩu ngữ cơ hội không nên bỏ lỡ: 不X白不X (Không làm X thì uổng phí)",
        "structure": "不 + X + 白 + 不 + X",
        "category": "khau-ngu",
        "explanation": "Hàm ý rằng cơ hội này là miễn phí hoặc quá hời, nếu không làm/không tận dụng thì bản thân sẽ chịu thiệt thòi uổng phí (不吃白不吃 - không ăn thì phí của trời; 不买白不买 - không mua thì thiệt; 不看白不看 - không xem thì uổng).",
        "tip": "'白' ở đây mang nghĩa là làm mà không mất tiền hoặc không tốn phí."
    },
    {
        "order": 40,
        "vietnameseTitle": "Cấu trúc kết cục lặp lại: X来X去，都是/就是…… (Làm X mãi rốt cuộc cũng chỉ là...)",
        "structure": "X 来 X 去，都是 / 就是 + Kết quả",
        "category": "khau-ngu",
        "explanation": "Diễn tả hành động diễn ra nhiều lần, kéo dài suốt một quá trình nhưng kết quả thu lại chẳng có gì mới mẻ hoặc vẫn giậm chân tại chỗ.",
        "tip": "Thường mang sắc thái mệt mỏi, bất lực hoặc ngán ngẩm trước sự bế tắc."
    },
    {
        "order": 41,
        "vietnameseTitle": "Cấu trúc áp đặt ý chí: 动词+什么（就）是什么 (Bảo sao thì nghe vậy / Muốn sao được vậy)",
        "structure": "Động từ + 什么 + (就) + 是什么",
        "category": "khau-ngu",
        "explanation": "Biểu thị sự phục tùng tuyệt đối (người khác bảo sao nghe vậy: 说什么就是什么) hoặc cảnh báo rằng không thể tự tiện muốn làm gì thì làm theo ý thích chủ quan (想什么就是什么).",
        "tip": "Thường dùng trong văn cảnh giáo dục gia đình hoặc tuân thủ kỷ luật cơ quan."
    },
    {
        "order": 42,
        "vietnameseTitle": "Thứ tự sắp xếp nhiều trạng ngữ trong câu (多项状语)",
        "structure": "Chủ ngữ + [Mục đích] + [Thời gian] + [Địa điểm] + [Phương thức/Tình thái] + Động từ",
        "category": "bo-ngu",
        "explanation": "Khi một câu có nhiều trạng ngữ đi kèm động từ, trật tự chuẩn mực thường là: 1) Mục đích (为了...) -> 2) Thời gian (每天早上, 昨天晚上) -> 3) Đối tượng/Địa điểm (在公园里, 在图书馆) -> 4) Phương thức/Tình thái (认真地, 慢慢地) -> Động từ chính.",
        "tip": "Đây là dạng bẫy trật tự từ cực kỳ thường gặp trong bài thi sắp xếp câu HSK 5."
    },
    {
        "order": 43,
        "vietnameseTitle": "Bổ ngữ khả năng cấm đoán/đánh giá: 动词+得/不得",
        "structure": "Động từ + 得 / 不得",
        "category": "bo-ngu",
        "explanation": "'不得' đứng sau động từ biểu thị việc đó tuyệt đối không được phép làm vì hậu quả nghiêm trọng hoặc không thể chấp nhận được (开不得玩笑 - không thể đùa được; 急不得 - không thể nóng vội được). Ngược lại, '得' biểu thị được phép hoặc khả thi.",
        "tip": "'不得' trong ngữ cảnh này mang hàm nghĩa răn đe, cảnh báo luân lý hoặc an toàn sức khỏe."
    },
    {
        "order": 44,
        "vietnameseTitle": "Bổ ngữ mức độ cực điểm: 形容词/心理动词+得+不得了",
        "structure": "Tính từ / Động từ tâm lý + 得不得了",
        "category": "bo-ngu",
        "explanation": "Đứng sau tính từ hoặc động từ tâm lý biểu thị mức độ cực độ, tột cùng, không gì sánh bằng (激动得不得了 - xúc động khôn xiết; 担心得不得了 - lo lắng tột cùng; 高兴得不得了 - vui mừng khôn xiết).",
        "tip": "Tương đương với '...极了' hoặc '非常非常...' nhưng mang màu sắc biểu cảm nói khẩu ngữ mạnh mẽ hơn."
    },
    {
        "order": 45,
        "vietnameseTitle": "Ý nghĩa phái sinh của bổ ngữ xu hướng: 下来, 下去, 起来, 过来, 过去",
        "structure": "Động từ / Tính từ + 下来 / 下去 / 起来 / 过来 / 过去",
        "category": "bo-ngu",
        "explanation": "Chuyển từ nghĩa phương hướng sang nghĩa trạng thái: 1) '下来': chuyển động từ động sang tĩnh, từ nhanh sang chậm (平静下来); 2) '下去': sự tiếp diễn tiếp tục trong tương lai (坚持下去); 3) '起来': bắt đầu và phân tán/thu gom lại (收拾起来, 唱起来); 4) '过来': phục hồi trạng thái tốt bình thường từ trạng thái tiêu cực (醒过来 - tỉnh lại); 5) '过去': mất đi tri giác bình thường sang trạng thái tiêu cực (晕过去 - ngất đi, 睡过去 - ngủ thiếp đi).",
        "tip": "Đặc biệt chú ý cặp đối lập '醒过来' (tỉnh lại - tích cực) và '晕过去' (ngất đi - tiêu cực)."
    },
    {
        "order": 46,
        "vietnameseTitle": "Bổ ngữ trạng thái dạng cụm động từ: 动词/形容词+得+动词短语",
        "structure": "Động từ / Tính từ + 得 + Cụm động từ kết quả",
        "category": "bo-ngu",
        "explanation": "Phần sau chữ '得' là một cụm động từ đóng vai trò miêu tả mức độ hoặc hệ quả dẫn đến của hành động/tính từ trước đó (玩儿得忘了时间 - chơi đến quên cả giờ giấc; 紧张得说不出话 - căng thẳng đến không nói nên lời).",
        "tip": "Luôn dùng trợ từ kết cấu '得' để kết nối giữa động từ/tính từ và cụm miêu tả trạng thái."
    },
    {
        "order": 47,
        "vietnameseTitle": "Bổ ngữ trạng thái dạng cụm chủ vị: 动词/形容词+得+主谓短语",
        "structure": "Động từ / Tính từ + 得 + [Chủ ngữ nhỏ + Vị ngữ nhỏ]",
        "category": "bo-ngu",
        "explanation": "Bổ ngữ đứng sau '得' là một cụm chủ-vị hoàn chỉnh biểu thị mức độ tác động ảnh hưởng tới đối tượng khác (跑得全身是汗 - chạy đến mức toàn thân đầy mồ hôi; 热得大家都不想出门 - nóng đến mức ai nấy đều không muốn ra ngoài).",
        "tip": "Nhận biết cụm chủ vị sau '得': có chủ ngữ nhỏ riêng (全身, 大家) và vị ngữ riêng."
    },
    {
        "order": 48,
        "vietnameseTitle": "Bổ ngữ trạng thái dạng thành ngữ/cụm cố định: 动词/形容词+得+固定短语",
        "structure": "Động từ / Tính từ + 得 + Thành ngữ 4 chữ / Cụm từ cố định",
        "category": "bo-ngu",
        "explanation": "Sử dụng thành ngữ bốn chữ sinh động sau chữ '得' để hình tượng hóa trạng thái cơ thể hoặc cảm xúc (跑得上气不接下气 - chạy thở không ra hơi; 累得满头大汗 - mệt toát mồ hôi đầm đìa).",
        "tip": "Sử dụng thành ngữ làm bổ ngữ trạng thái là tiêu chí chấm điểm rất cao trong phần thi viết luận HSK 5."
    },
    {
        "order": 49,
        "vietnameseTitle": "Câu chữ 有 biểu thị sự tồn tại trừu tượng: 主语+有+着+宾语",
        "structure": "Chủ ngữ + 有着 + Tân ngữ trừu tượng",
        "category": "loai-cau",
        "explanation": "Dùng '有着' để biểu thị chủ ngữ đang sở hữu, dung chứa hoặc duy trì một thuộc tính, quan hệ hoặc tình cảm trừu tượng dài lâu (有着深厚的友谊, 有着很深的矛盾, 有着悠久的历史).",
        "tip": "'有着' chỉ đi với các danh từ trừu tượng (lịch sử, văn hóa, quan hệ, mâu thuẫn), không dùng với đồ vật cụ thể."
    },
    {
        "order": 50,
        "vietnameseTitle": "Câu chữ 有 biểu thị sự bám dính/tồn tại bề mặt: 主语+动词+有+宾语",
        "structure": "Nơi chốn / Bề mặt + Động từ (写 / 挂 / 刻 / 印) + 有 + Tân ngữ",
        "category": "loai-cau",
        "explanation": "Sau các động từ tạo tác hoặc đính gắn như '写', '挂', '刻', '印' thêm '有' để miêu tả trạng thái một vật đang tồn tại bám dính trên bề mặt vật khác (墙上挂有牌子 - trên tường có treo tấm biển; 第一页写有名字 - trang đầu có ghi tên tác giả).",
        "tip": "Ý nghĩa tương tự '挂着', '写着' nhưng mang sắc thái văn viết miêu tả trang trọng hơn."
    },
    {
        "order": 51,
        "vietnameseTitle": "Câu chữ 把 động tác chớp nhoáng: 主语+把+宾语+一+动词",
        "structure": "Chủ ngữ + 把 + Tân ngữ + 一 + Động từ đơn âm tiết",
        "category": "loai-cau",
        "explanation": "Thêm số từ '一' trước động từ trong câu chữ 把 để diễn tả động tác diễn ra cực kỳ nhanh gọn, dứt khoát và thường kéo theo hành động kế tiếp ngay lập tức (把书包一扔 - vứt toẹt cặp xuống; 把任务一说 - vừa phổ biến xong nhiệm vụ).",
        "tip": "Động từ phải là đơn âm tiết (扔, 推, 说, 看, 放...)."
    },
    {
        "order": 52,
        "vietnameseTitle": "Câu chữ 把 có hai tân ngữ (Chuyển đổi tài sản): 把+宾语1+动词+宾语2",
        "structure": "Chủ ngữ + 把 + Tân ngữ 1 (Tài sản/Tiền bạc) + Động từ + Tân ngữ 2 (Mục đích/Người nhận)",
        "category": "loai-cau",
        "explanation": "Dùng câu chữ 把 khi tiêu tốn hoặc chuyển đổi toàn bộ một nguồn lực/tiền của sang vật khác hoặc người khác ('把存款都买车了' - đem hết tiền tiết kiệm mua xe rồi; '把生活费借朋友了' - đem tiền sinh hoạt cho bạn vay mất rồi).",
        "tip": "Động từ biểu thị việc xử lý hoặc chuyển giao quyền sở hữu tài sản."
    },
    {
        "order": 53,
        "vietnameseTitle": "Câu liên động biểu thị quan hệ nhân quả, chuyển ngoặt, điều kiện",
        "structure": "Động từ ngữ 1 + Động từ ngữ 2",
        "category": "loai-cau",
        "explanation": "Hai cụm động từ đi liền nhau không có liên từ nối nhưng giữa chúng hàm chứa quan hệ nội tại: 1) Nhân quả: 生病住院 (vì ốm nên nhập viện); 2) Chuyển ngoặt: 开会忘了带资料 (đi họp mà lại quên mang tài liệu); 3) Điều kiện: 制定方案应对风险 (đặt kế hoạch để đối phó rủi ro).",
        "tip": "Cần phân biệt ý nghĩa logic giữa hai hành động khi dịch và phân tích ngữ pháp."
    },
    {
        "order": 54,
        "vietnameseTitle": "Câu so sánh chênh lệch trực tiếp: A+形容词+B+数量补语",
        "structure": "A + Tính từ (高 / 大 / 重 / 早 / 晚) + B + Bổ ngữ số lượng",
        "category": "loai-cau",
        "explanation": "Mẫu câu so sánh khẩu ngữ không cần dùng chữ '比', đặt trực tiếp tính từ trước đối tượng so sánh B kèm lượng chênh lệch ở sau (他高我一头 - anh ấy cao hơn tôi một cái đầu; 姐姐重我两公斤 - chị nặng hơn tôi 2kg; 哥哥早我两年上学 - anh đi học trước tôi 2 năm).",
        "tip": "Là cấu trúc so sánh khẩu ngữ cực kỳ phổ biến trong đời sống, không được thêm '比' vào giữa."
    },
    {
        "order": 55,
        "vietnameseTitle": "Câu bị động tăng cường ngữ khí: 被/叫/让+宾语+给+动词",
        "structure": "Chủ ngữ + 被 / 叫 / 让 + Tác nhân + 给 + Động từ + Bổ ngữ",
        "category": "loai-cau",
        "explanation": "Thêm trợ từ '给' ngay trước động từ chính trong câu bị động nhằm tăng cường ngữ khí nhấn mạnh việc chủ ngữ phải gánh chịu một kết quả không như mong đợi hoặc tổn thất ngoài ý muốn (被他给洗坏了 - bị anh ta giặt làm cho hỏng bét; 叫风给吹跑了 - bị gió thổi bay mất).",
        "tip": "Chữ '给' ở đây là hư từ tăng cường ngữ khí, không mang nghĩa thực tế là 'cho/tặng'."
    },
    {
        "order": 56,
        "vietnameseTitle": "Câu phức thừa tiếp: ……，便…… (Xong là liền...)",
        "structure": "Phân câu 1，(Chủ ngữ) + 便 + Phân câu 2",
        "category": "cau-phuc",
        "explanation": "Biểu thị sự việc ở phân câu sau diễn ra nối tiếp ngay sau sự việc ở phân câu trước mà không có sự trì hoãn (viết tắt hoặc biến thể văn nhã của 就).",
        "tip": "Thường dùng trong văn kể chuyện hoặc tường thuật diễn biến sự kiện."
    },
    {
        "order": 57,
        "vietnameseTitle": "Câu phức chọn lựa: 或是……，或是…… (Hoặc là... hoặc là...)",
        "structure": "或是 + Lựa chọn A，或是 + Lựa chọn B",
        "category": "cau-phuc",
        "explanation": "Dùng trong văn viết thay cho '或者...或者...', biểu thị sự lựa chọn không bắt buộc giữa hai hay nhiều khả năng được liệt kê.",
        "tip": "Thường dùng trong các câu trần thuật nêu thói quen hoặc phương án khả thi."
    },
    {
        "order": 58,
        "vietnameseTitle": "Câu phức giả thiết điều kiện: 一旦……，就…… (Một khi... thì...)",
        "structure": "一旦 + Điều kiện / Sự việc phát sinh，就 + Kết quả / Hành động tất yếu",
        "category": "cau-phuc",
        "explanation": "Biểu thị giả định nếu một điều kiện nào đó xảy ra (thường là sự kiện có tính bước ngoặt hoặc nghiêm trọng) thì kết quả tương ứng nhất định sẽ xuất hiện.",
        "tip": "Thường dùng để cảnh báo hậu quả của các thói quen xấu hoặc nhắc nhở không bỏ lỡ cơ hội."
    },
    {
        "order": 59,
        "vietnameseTitle": "Câu phức giả thiết văn viết: 假如……，（就）…… (Giả sử... thì...)",
        "structure": "假如 + Giả thuyết，(就) + Hệ quả",
        "category": "cau-phuc",
        "explanation": "'假如' (jiǎrú) là liên từ giả thiết trang trọng tương đương với '如果, 要是', dùng nhiều trong văn viết, nghị luận hoặc đặt câu hỏi suy tưởng.",
        "tip": "Trong thi viết HSK 5, thay '如果' bằng '假如' giúp bài luận có giọng văn trưởng thành hơn."
    },
    {
        "order": 60,
        "vietnameseTitle": "Câu phức giả thiết tình huống bất trắc: 万一……，（就）…… (Vạn nhất, lỡ như... thì...)",
        "structure": "万一 + Tình huống rủi ro ngoài ý muốn，(就) + Biện pháp ứng phó",
        "category": "cau-phuc",
        "explanation": "'万一' nhấn mạnh giả thuyết về một sự việc có xác suất xảy ra cực kỳ nhỏ nhưng hậu quả lại tiêu cực hoặc hệ trọng, đòi hỏi phải dự phòng trước.",
        "tip": "Có thể đứng trước chủ ngữ hoặc sau chủ ngữ của vế điều kiện."
    },
    {
        "order": 61,
        "vietnameseTitle": "Câu phức giả thiết phản đề: ……，要不然/不然…… (Bằng không, nếu không thì...)",
        "structure": "Hành động / Yêu cầu，要不然 / 不然 + Hậu quả xấu xảy ra",
        "category": "cau-phuc",
        "explanation": "Vế trước đưa ra lời khuyên hoặc điều kiện cần thiết, vế sau dùng '要不然' hoặc '不然' dẫn xuất hậu quả tiêu cực sẽ xảy ra nếu không thực hiện điều ở vế trước.",
        "tip": "'不然' tương đương với '否则', mang tính khẩu ngữ thân mật hơn."
    },
    {
        "order": 62,
        "vietnameseTitle": "Câu phức nhân quả văn viết: ……，因而…… (Do đó, vì thế mà...)",
        "structure": "Nguyên nhân / Tiền đề，因而 + Kết quả tất yếu",
        "category": "cau-phuc",
        "explanation": "'因而' là liên từ nhân quả văn viết cao cấp (kết hợp ý nghĩa của 因 - vì thế và 而 - mà thành), đặt ở đầu phân câu sau để biểu thị kết quả nảy sinh tự nhiên từ phân câu trước.",
        "tip": "Khác với '所以', '因而' chỉ đứng ở phân câu chỉ kết quả, không đi chung với '因为' ở vế trước."
    },
    {
        "order": 63,
        "vietnameseTitle": "Câu phức nhân quả suy luận: ……，可见…… (Đủ thấy, có thể thấy...)",
        "structure": "Hiện tượng thực tế / Dữ liệu，可见 + Nhận định suy luận",
        "category": "cau-phuc",
        "explanation": "'可见' đứng ở vế sau dựa trên cơ sở sự thật hiển nhiên ở vế trước để rút ra kết luận, đánh giá hoặc phán đoán logic xác thực.",
        "tip": "Là từ nối suy luận rất hay dùng trong các bài đọc hiểu nghị luận HSK 5."
    },
    {
        "order": 64,
        "vietnameseTitle": "Câu phức nhượng bộ cực hạn: 哪怕……，也…… (Cho dù... đi chăng nữa thì cũng...)",
        "structure": "哪怕 + Tình huống giả định cực đoan nhất，也 + Quyết tâm / Sự thật không đổi",
        "category": "cau-phuc",
        "explanation": "'哪怕' biểu thị nhượng bộ với mức độ giả định cao nhất hoặc khắc nghiệt nhất, nhưng quyết tâm hoặc kết quả ở vế sau vẫn không hề lung lay thay đổi.",
        "tip": "Mạnh hơn '即使'; thường dùng để bộc lộ ý chí kiên định vượt qua thử thách."
    },
    {
        "order": 65,
        "vietnameseTitle": "Câu phức tăng tiến phản tác dụng: 不但不/不但没有……，反而…… (Chẳng những không... trái lại còn...)",
        "structure": "Chủ ngữ + 不但不 / 不但没有 + Kết quả mong muốn，反而 + Kết quả tồi tệ hơn",
        "category": "cau-phuc",
        "explanation": "Diễn tả sự việc chẳng những không đạt được trạng thái mong đợi ban đầu, mà ngược lại còn phát triển theo chiều hướng hoàn toàn trái ngược hoặc tồi tệ hơn.",
        "tip": "Là mẫu câu kết hợp giữa ý tăng tiến và chuyển ngoặt bất ngờ, tần suất xuất hiện rất cao trong HSK 5."
    },
    {
        "order": 66,
        "vietnameseTitle": "Câu phức tăng tiến bổ sung: 不是……，还/还是…… (Không chỉ... mà còn...)",
        "structure": "不是 + Điều kiện đơn lẻ + 就可以，还 / 还是 + Điều kiện bổ sung cần thiết",
        "category": "cau-phuc",
        "explanation": "Nhấn mạnh rằng chỉ có yếu tố thứ nhất thôi là chưa đủ, mà nhất thiết phải bổ sung thêm hành động hoặc điều kiện quan trọng ở phân câu sau.",
        "tip": "Tránh nhầm với '不是...而是...' (phủ định A để khẳng định B)."
    },
    {
        "order": 67,
        "vietnameseTitle": "Câu phức mục đích: ……，为的是…… (...cốt là để / với mục đích...)",
        "structure": "Hành động nỗ lực，为的是 + Mục đích hướng tới",
        "category": "cau-phuc",
        "explanation": "Vế trước nêu hành động, vế sau dùng '为的是' để giải thích rõ ràng mục đích cao đẹp hoặc lý tưởng đằng sau sự nỗ lực đó.",
        "tip": "'为的是' thường đứng ở đầu phân câu thứ hai để nhấn mạnh động cơ hành động."
    },
    {
        "order": 68,
        "vietnameseTitle": "Câu phức rút gọn phủ định kép: 没有……就没有…… (Không có... thì sẽ không có...)",
        "structure": "没有 A 就没有 B",
        "category": "cau-phuc",
        "explanation": "Sử dụng hai lần phủ định '没有' trong câu rút gọn để khẳng định tuyệt đối vai trò quyết định, tiền đề tiên quyết của A đối với sự tồn tại hoặc thành công của B.",
        "tip": "Mẫu câu chân lý đúc kết kinh nghiệm sống rất giàu sức thuyết phục (没有汗水就没有收获)."
    },
    {
        "order": 69,
        "vietnameseTitle": "Câu phức rút gọn quy luật: 不……不…… (Không... thì không...)",
        "structure": "不 + Hành động A + 不 + Kết quả B",
        "category": "cau-phuc",
        "explanation": "Biểu thị quan hệ nhân quả logic tất yếu thông qua cặp từ phủ định: 'không trải nghiệm qua thì không thể biết được' (不尝不知道), hoặc 'không xử lý thì sẽ dẫn đến hậu quả' (不修不安全).",
        "tip": "Câu nói ngắn gọn, đanh thép, mang đậm phong vị tục ngữ khẩu ngữ."
    },
    {
        "order": 70,
        "vietnameseTitle": "Câu phức rút gọn nhượng bộ: 再……也…… (Dù có... đến mấy cũng...)",
        "structure": "再 + Tính từ / Động từ + 也 + Vị ngữ",
        "category": "cau-phuc",
        "explanation": "'再' đặt trước tính từ hoặc động từ biểu thị mức độ cực hạn, phối hợp với '也' ở vế sau để khẳng định tính chất vững vàng, không bao giờ thay đổi.",
        "tip": "Thường dùng trong các câu châm ngôn cổ vũ tinh thần: '困难再大也要坚持下去' (Khó khăn có lớn mấy cũng phải kiên trì)."
    }
]

CAT_MAP_HSK5 = {
    "tu-loai": {"name": "Từ loại & Hình vị (Phó từ, Giới từ...)", "icon": "🔤"},
    "khau-ngu": {"name": "Khẩu ngữ & Cụm cố định", "icon": "💬"},
    "bo-ngu": {"name": "Thành phần câu & Bổ ngữ", "icon": "🧩"},
    "loai-cau": {"name": "Mẫu câu đặc biệt (把, 被, 有, So sánh)", "icon": "🗣️"},
    "cau-phuc": {"name": "Câu phức & Liên từ", "icon": "🔗"},
}

def main():
    with open('scripts/hsk5_raw_grammar.json', 'r', encoding='utf-8') as f:
        hsk5_raw = json.load(f)

    print(f"Loaded {len(hsk5_raw)} HSK5 raw items.")
    print(f"Loaded {len(METADATA)} metadata items.")

    enriched_items = []
    total_sentences = 0

    for idx, meta in enumerate(METADATA):
        order = meta["order"]
        raw = hsk5_raw[order - 1]
        gid = raw["id"]
        title_zh = raw.get("content") or raw.get("grammarDetail", "")
        cat_info = CAT_MAP_HSK5.get(meta["category"], {"name": "Ngữ pháp", "icon": "📚"})

        examples_list = []
        for case in raw["cases"]:
            case_clean = case.strip()
            # Remove any trailing annotation like (因果), (转折), (条件)
            chinese_text = re.sub(r'（[^）]+）$', '', case_clean).strip()
            py = clean_sentence_pinyin(chinese_text)
            vi = TRANSLATIONS.get(case_clean) or TRANSLATIONS.get(chinese_text, "")
            if not vi:
                print(f"WARNING: Missing translation for [{chinese_text}] in item {gid}")
            examples_list.append({
                "chinese": case_clean,
                "pinyin": py,
                "vietnamese": vi
            })
            total_sentences += 1

        enriched_items.append({
            "id": gid,
            "order": order,
            "category": meta["category"],
            "categoryName": cat_info["name"],
            "categoryIcon": cat_info["icon"],
            "titleVi": meta["vietnameseTitle"],
            "titleZh": title_zh,
            "grammarType": raw.get("grammarType", ""),
            "categoryType": raw.get("grammarDetail", ""),
            "grammarDetail": raw.get("grammarDetail", ""),
            "structure": meta["structure"],
            "explanationVi": meta["explanation"],
            "tips": meta.get("tip", ""),
            "examples": examples_list
        })

    print(f"Total processed sentences: {total_sentences}")

    # Generate TypeScript file
    ts_code = """export interface GrammarExample {
  chinese: string;
  pinyin: string;
  vietnamese: string;
}

export interface EnrichedGrammarPoint {
  id: string;
  order: number;
  category: string;
  categoryName: string;
  categoryIcon: string;
  titleVi: string;
  titleZh: string;
  grammarType: string;
  categoryType: string;
  grammarDetail: string;
  structure: string;
  explanationVi: string;
  tips?: string;
  examples: GrammarExample[];
}

export interface GrammarCategory {
  id: string;
  name: string;
  icon: string;
}

export const HSK5_GRAMMAR_CATEGORIES: GrammarCategory[] = """ + json.dumps(HSK5_CATEGORIES, ensure_ascii=False, indent=2) + """;

export const HSK5_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = """ + json.dumps(enriched_items, ensure_ascii=False, indent=2) + ";\n"

    with open('src/data/hsk5GrammarData.ts', 'w', encoding='utf-8') as out:
        out.write(ts_code)

    print("Successfully created src/data/hsk5GrammarData.ts with 70 points and 245 sentences!")

if __name__ == '__main__':
    main()

