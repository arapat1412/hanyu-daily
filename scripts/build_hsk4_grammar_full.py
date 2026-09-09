# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def clean_sentence_pinyin(sentence):
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('玩儿', '§WANR§').replace('女孩儿', '§NVHAIR§')
    s_temp = s_temp.replace('一块儿', '§YIKUAIR§').replace('快点儿', '§KUAIDIANR§').replace('多点儿', '§DUODIANR§')
    s_temp = s_temp.replace('画儿', '§HUAR§').replace('差一点儿', '§CHAYIDIANR§').replace('差点儿', '§CHADIANR§')
    s_temp = s_temp.replace('玩意儿', '§WANYIR§')

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
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§NVHAIR§', 'nǚháir')
    joined = joined.replace('§YIKUAIR§', 'yíkuàir').replace('§KUAIDIANR§', 'kuàidiǎnr').replace('§DUODIANR§', 'duōdiǎnr')
    joined = joined.replace('§HUAR§', 'huàr').replace('§CHAYIDIANR§', 'chàyìdiǎnr').replace('§CHADIANR§', 'chàdiǎnr')
    joined = joined.replace('§WANYIR§', 'wányìr')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

HSK4_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "ba_bei_sentences", "name": "Câu chữ 把 & Bị động (叫/让/被)", "icon": "⭐" },
    { "id": "compound_sentences", "name": "Hệ thống câu phức liên từ", "icon": "🔗" },
    { "id": "comparisons", "name": "Câu so sánh (不如, 相比)", "icon": "⚖️" },
    { "id": "complements", "name": "Bổ ngữ khả năng & Mức độ (死了, 不了)", "icon": "🎯" },
    { "id": "special_patterns", "name": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "icon": "🌟" },
    { "id": "rhetorical_pivotal", "name": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "icon": "❓" },
    { "id": "adverbs", "name": "Phó từ thời gian, mức độ, ngữ khí", "icon": "🔥" },
    { "id": "prepositions", "name": "Giới từ căn cứ, thời gian, đối tượng", "icon": "🛡️" },
    { "id": "pronouns_measures", "name": "Đại từ, Lượng từ & Số từ", "icon": "🔢" },
    { "id": "phrases_idioms", "name": "Cụm 4 chữ & Cấu trúc số lượng", "icon": "🏗️" }
]

# Load raw items
with open('scripts/hsk4_raw_grammar.json', 'r', encoding='utf-8') as f:
    RAW_ITEMS = json.load(f)

# Complete translations for all 365 sentences in HSK 4
TRANSLATIONS = {
    # 01 敢
    "我刚学会开车，不敢开得很快。": "Tôi vừa mới học lái xe, không dám lái quá nhanh.",
    "你敢不敢跟我比一比，谁的力气大？": "Bạn có dám thi đấu với tôi xem sức ai lớn hơn không?",

    # 02 各、各位、各种、任何、此
    "对于这个问题，同学们各有各的看法。": "Đối với vấn đề này, các bạn học sinh mỗi người đều có quan điểm riêng.",
    "节日期间，各地举行了丰富的庆祝活动。": "Trong dịp lễ, khắp các nơi đều tổ chức các hoạt động chào mừng phong phú.",
    "各位同学，请大家安静一下。": "Thưa các bạn học sinh, xin mọi người hãy giữ trật tự một chút.",
    "欢迎各位报名参加这次运动会。": "Hoan nghênh các vị đăng ký tham gia đại hội thể thao lần này.",
    "南方各种花都开了，可是北方还比较冷。": "Ở miền nam các loài hoa đều đã nở rộ, thế nhưng ở miền bắc vẫn còn khá lạnh.",
    "商场、超市总是通过各种方式吸引顾客。": "Trung tâm thương mại và siêu thị luôn thu hút khách hàng thông qua nhiều phương thức khác nhau.",
    "你遇到任何困难都可以联系我。": "Bạn gặp bất kỳ khó khăn nào cũng đều có thể liên hệ với tôi.",
    "在中国，几乎任何一家商店都可以使用手机支付。": "Ở Trung Quốc, hầu như bất kỳ cửa hàng nào cũng đều có thể thanh toán bằng điện thoại.",
    "由北京开往上海的这趟列车将于十分钟后到达，请旅客们做好准备，在此候车。": "Chuyến tàu từ Bắc Kinh đi Thượng Hải sẽ đến sau 10 phút, xin hành khách chuẩn bị sẵn sàng và đợi tàu tại đây.",
    "他从小在这里长大，对此处的一草一木都十分熟悉。": "Anh ấy từ nhỏ lớn lên ở đây, đối với từng nhành cây ngọn cỏ nơi này đều vô cùng quen thuộc.",

    # 03 专用名量词：打、袋、棵、台、幅
    "请给我拿一打鸡蛋。": "Xin lấy cho tôi một tá trứng gà.",
    "妈妈买了一打毛巾，准备送给亲戚。": "Mẹ mua một tá khăn mặt, chuẩn bị đem tặng cho người thân.",
    "我买了一袋大米和两袋牛奶。": "Tôi mua một bao gạo và hai túi sữa tươi.",
    "垃圾桶旁边放着几袋垃圾。": "Bên cạnh thùng rác có để mấy túi rác.",
    "我们学校门前种着两棵大树。": "Trước cổng trường chúng tôi trồng hai cây cổ thụ to.",
    "这棵树已经活了一百多年了。": "Cái cây này đã sống được hơn một trăm năm rồi.",
    "爸爸给我买了一台新电脑。": "Bố mua cho tôi một chiếc máy tính mới.",
    "这个工厂刚引进了几台先进的机器。": "Nhà máy này vừa nhập về mấy cỗ máy móc tiên tiến.",
    "客厅的墙上挂着一幅中国画。": "Trên tường phòng khách có treo một bức tranh Trung Quốc.",
    "这幅画是他花了一个月时间画完的。": "Bức tranh này là do anh ấy mất một tháng trời mới vẽ xong.",

    # 04 借用名量词：脸、手、盒、屋子、桌子
    "孩子跑得满脸汗，衣服也湿透了。": "Đứa bé chạy mồ hôi nhễ nhại đầy mặt, quần áo cũng ướt đẫm.",
    "听到这个好消息，他高兴得笑成了一脸花。": "Nghe được tin vui này, anh ấy mừng đến nỗi nét mặt tươi như hoa.",
    "他写了一手好字，大家都非常羡慕。": "Anh ấy viết được một nét chữ rất đẹp, mọi người đều vô cùng ngưỡng mộ.",
    "他做了一手好菜，常常请朋友来家里吃饭。": "Anh ấy nấu ăn rất giỏi, thường xuyên mời bạn bè đến nhà dùng bữa.",
    "请帮我买一盒铅笔。": "Xin hãy giúp tôi mua một hộp bút chì.",
    "桌子上放着两盒新鲜的草莓。": "Trên bàn đang để hai hộp dâu tây tươi ngon.",
    "他一开门，就看见满屋子的书。": "Anh ấy vừa mở cửa ra là nhìn thấy sách chất đầy cả gian phòng.",
    "这么大一屋子人，竟然没人说话。": "Cả một căn phòng đông người thế này, vậy mà chẳng có ai lên tiếng.",
    "妈妈准备了一桌子丰盛的菜。": "Mẹ đã chuẩn bị một bàn đầy ắp những món ăn thịnh soạn.",
    "他们俩聊得很开心，桌子上的菜几乎没动。": "Hai người bọn họ trò chuyện rất vui vẻ, thức ăn trên bàn hầu như chưa hề đụng tới.",

    # 05 动量词：场、顿、趟
    "昨天晚上下了一场大雨，今天空气很清新。": "Đêm qua có một trận mưa to, hôm nay không khí rất trong lành.",
    "我们去看了一场精彩的足球比赛。": "Chúng tôi đã đi xem một trận thi đấu bóng đá tuyệt vời.",
    "因为迟到，他被老师批评了一顿。": "Vì đến muộn, cậu ấy bị thầy giáo phê bình cho một trận.",
    "妈妈做了一顿丰盛的晚餐。": "Mẹ đã nấu một bữa cơm tối thịnh soạn.",
    "为了办签证，他往大使馆跑了好几趟。": "Để làm visa, anh ấy đã phải chạy qua lại đại sứ quán mấy chuyến liền.",
    "我今天得去一趟超市买点儿东西。": "Hôm nay tôi phải đi một chuyến đến siêu thị mua ít đồ.",

    # 06 程度副词
    "听到这个消息，大家都十分高兴。": "Nghe được tin này, mọi người đều hết sức vui mừng.",
    "他的汉语水平提高得十分快。": "Trình độ tiếng Trung của anh ấy tiến bộ vô cùng nhanh chóng.",
    "经过努力，他的成绩变得更加优秀了。": "Qua nỗ lực, thành tích của cậu ấy ngày càng trở nên xuất sắc hơn.",
    "雨不但没停，反而下得更加大了起来。": "Mưa chẳng những không tạnh, mà ngược lại còn trút xuống dữ dội hơn.",
    "这件衣服稍微有点儿大，有小一点儿的吗？": "Chiếc áo này hơi rộng một chút, có cái nào nhỏ hơn không?",
    "你稍微等一下，我马上就好。": "Bạn đợi một chút xíu nhé, tôi xong ngay đây.",
    "他喜欢各项运动，尤其是踢足球。": "Anh ấy thích các môn thể thao, đặc biệt là đá bóng.",
    "这里的风景很美，尤其是秋天的时候。": "Phong cảnh nơi đây rất đẹp, nhất là vào mùa thu.",
    "看到孩子们快乐地玩耍，他心里感到多么幸福啊！": "Nhìn các con vui vẻ chơi đùa, trong lòng anh ấy cảm thấy hạnh phúc biết bao!",
    "这个公园建得多漂亮啊！": "Công viên này được xây dựng đẹp đẽ biết bao!",
    "请你稍等片刻，经理马上就来。": "Xin quý khách đợi trong giây lát, giám đốc sẽ đến ngay.",
    "这个问题稍微复杂一些，需要详细讨论。": "Vấn đề này hơi phức tạp một chút, cần phải thảo luận chi tiết.",

    # 07 范围副词
    "我们班共三十个人，留学生占了一半。": "Lớp chúng tôi tổng cộng có 30 người, du học sinh chiếm một nửa.",
    "这次活动全校师生都参加了。": "Hoạt động lần này toàn thể thầy cô và học sinh trong trường đều tham gia.",
    "你别光顾着玩儿，还要抓紧时间复习。": "Bạn đừng chỉ mải chơi, còn phải tranh thủ thời gian ôn tập nữa.",
    "屋里仅有一张桌子和一把椅子。": "Trong phòng chỉ vỏn vẹn có một cái bàn và một chiếc ghế.",
    "他仅仅用了一年时间就掌握了这门语言。": "Anh ấy chỉ mất vẻn vẹn một năm đã thành thạo được ngôn ngữ này.",
    "完成这项工作至少需要两个星期。": "Hoàn thành công việc này ít nhất cần có hai tuần.",
    "我们一共买了十本书。": "Chúng tôi tổng cộng đã mua 10 cuốn sách.",
    "他们全家都去旅行了。": "Cả gia đình họ đều đã đi du lịch rồi.",
    "他光吃米饭，不吃菜。": "Cậu ấy chỉ ăn mỗi cơm trắng, chẳng chịu ăn thức ăn.",
    "仅靠这些钱是不够的。": "Chỉ dựa vào bấy nhiêu tiền này là không đủ đâu.",
    "仅仅通过考试是不够的，还要会应用。": "Chỉ đơn thuần vượt qua kỳ thi là chưa đủ, mà còn phải biết ứng dụng thực tế.",
    "每天至少要喝八杯水。": "Mỗi ngày ít nhất phải uống 8 ly nước.",

    # 08 时间副词
    "请大家按时交作业。": "Xin mọi người nộp bài tập đúng giờ.",
    "他从来不迟到，今天怎么还没来？": "Anh ấy xưa nay chưa từng đến muộn, sao hôm nay vẫn chưa tới nhỉ?",
    "听到电话铃响，他赶紧跑去接。": "Nghe tiếng chuông điện thoại reo, cậu ấy vội vàng chạy lại nhấc máy.",
    "时间不早了，赶快收拾东西走吧。": "Thời gian không còn sớm nữa, mau mau thu dọn đồ đạc rồi đi thôi.",
    "他们已完成了全部计划。": "Họ đã hoàn thành toàn bộ kế hoạch.",
    "天忽然下起大雨来了。": "Trời đột nhiên đổ cơn mưa rào.",
    "代表团将于明天上午到达。": "Đoàn đại biểu sẽ đến vào sáng ngày mai.",
    "新学期将要开始了。": "Học kỳ mới sắp sửa bắt đầu rồi.",
    "他从不向困难低头。": "Anh ấy chưa bao giờ chịu khuất phục trước khó khăn.",
    "我本来打算今天去买书，后来因为有事没去成。": "Tôi vốn dĩ dự định hôm nay đi mua sách, sau vì bận việc nên không đi được.",
    "无论遇到什么困难，他从来不放弃。": "Dù gặp khó khăn gì, anh ấy từ trước tới nay không bao giờ bỏ cuộc.",
    "快走吧，电影马上要开始了。": "Mau đi thôi, phim sắp bắt đầu chiếu rồi.",
    "已是深夜，他房间的灯还亮着。": "Đã là đêm khuya, đèn phòng anh ấy vẫn còn sáng.",
    "忽然一阵风吹过，把树叶吹落了一地。": "Đột nhiên một cơn gió thoảng qua, thổi lá rụng đầy mặt đất.",
    "会议将由校长亲自主持。": "Cuộc họp sẽ do đích thân thầy hiệu trưởng chủ trì.",
    "新科技将要改变人们的生活。": "Công nghệ mới sắp sửa làm thay đổi cuộc sống con người.",
    "这家店本来生意很好，后来搬迁了。": "Cửa hàng này vốn dĩ buôn bán rất phát đạt, sau này đã chuyển địa điểm.",
    "你赶紧去医院看看吧。": "Bạn hãy mau chóng đến bệnh viện khám xem sao đi.",
    "时间紧迫，我们赶快行动。": "Thời gian gấp gáp, chúng ta mau chóng hành động thôi.",
    "按时完成任务是每个员工的职责。": "Hoàn thành nhiệm vụ đúng hạn là trách nhiệm của mỗi nhân viên.",

    # 09 频率副词
    "我们把这个方案重新讨论了一遍。": "Chúng tôi đã thảo luận lại phương án này thêm một lần nữa.",
    "遇到不懂的问题，他往往会查阅很多资料。": "Gặp phải vấn đề không hiểu, anh ấy thường hay tra cứu rất nhiều tài liệu.",
    "工作虽然很忙，但他偶尔也会去健身房锻炼。": "Công việc tuy rất bận, nhưng thỉnh thoảng anh ấy cũng đến phòng gym rèn luyện.",
    "他再次向大家表达了谢意。": "Anh ấy một lần nữa bày tỏ lời cảm ơn tới mọi người.",
    "他老是忘带钥匙。": "Cậu ấy cứ luôn quên mang theo chìa khóa.",
    "文章写得不好，得重新写。": "Bài viết chưa tốt, cần phải viết lại từ đầu.",
    "人在生病时往往比较脆弱。": "Con người khi ốm đau thường hay trở nên yếu đuối hơn.",
    "他平时吃素，偶尔也吃点肉。": "Bình thường anh ấy ăn chay, thỉnh thoảng cũng ăn một chút thịt.",
    "欢迎你再次来到我们学校。": "Rất hoan nghênh bạn lại một lần nữa ghé thăm trường chúng tôi.",
    "你怎么老不听我的劝告？": "Sao bạn cứ luôn không chịu nghe lời khuyên của tôi thế?",

    # 10 方式副词
    "他故意把声音放得很低，不想让别人听见。": "Anh ấy cố tình hạ giọng rất trầm, không muốn để người khác nghe thấy.",
    "大家应该互相帮助，共同进步。": "Mọi người nên giúp đỡ lẫn nhau để cùng nhau tiến bộ.",
    "这两件事相互影响，密不可分。": "Hai việc này tác động qua lại lẫn nhau, không thể tách rời.",
    "他不是故意迟到的，是路上堵车了。": "Cậu ấy không phải cố ý đến muộn đâu, do trên đường bị tắc xe đấy.",
    "我们互相留了联系方式。": "Chúng tôi đã để lại phương thức liên lạc cho nhau.",
    "人与自然应当相互尊重、和谐共处。": "Con người và tự nhiên cần tôn trọng lẫn nhau và chung sống hòa thuận.",

    # 11 关联副词：却
    "虽然他准备得很充分，面试时却非常紧张。": "Tuy anh ấy chuẩn bị rất kỹ lưỡng, nhưng lúc phỏng vấn lại vô cùng căng thẳng.",
    "很多简单的道理，真正做到却不容易。": "Nhiều đạo lý rất giản đơn, nhưng thực sự làm được lại chẳng hề dễ dàng.",

    # 12 情态副词：也许、恐怕
    "他今天没来，也许是身体不舒服。": "Hôm nay anh ấy không đến, có lẽ là do cơ thể không khỏe.",
    "天阴得厉害，恐怕要下大雨了。": "Trời râm u ám dữ dội, e rằng sắp sửa đổ mưa to rồi.",
    "也许明天会是个好天气。": "Có lẽ ngày mai sẽ là một ngày thời tiết đẹp trời.",
    "这么艰巨的任务，我恐怕难以胜任。": "Nhiệm vụ gian khổ thế này, e rằng tôi khó lòng đảm đương nổi.",

    # 13 语气副词
    "听到解释后，我才明白事情的真相。": "Sau khi nghe giải thích, tôi mới thấu tỏ chân tướng của sự việc.",
    "我刚躺下，电话就响了。": "Tôi vừa mới nằm xuống thì chuông điện thoại đã reo vang.",
    "他并不是故意不理你，而是刚才在想事情。": "Anh ấy thực ra không phải cố tình phớt lờ bạn đâu, mà lúc nãy đang bận suy nghĩ.",
    "没想到你还记得我的生日。": "Thật không ngờ bạn vẫn còn nhớ ngày sinh nhật của tôi.",
    "他平时成绩一般，这次竟然考了第一名。": "Bình thường thành tích của cậu ấy rất vừa phải, lần này thế mà lại đỗ hạng nhất.",
    "你究竟想去哪儿？快做决定吧。": "Rốt cuộc bạn muốn đi đâu đây? Mau đưa ra quyết định đi.",
    "我正打算找你，正好在这儿碰上了。": "Tôi đang định tìm bạn thì vừa khéo lại đụng mặt ngay ở đây.",
    "这件事到底该怎么办，大家都拿不定主意。": "Chuyện này rốt cuộc nên làm thế nào, mọi người đều chưa thể quyết định.",
    "难道你不知道明天是星期天吗？": "Chẳng lẽ bạn không biết ngày mai là Chủ nhật hay sao?",
    "出门前千万要关好门窗。": "Trước khi ra khỏi nhà, tuyệt đối nhất thiết phải đóng chặt cửa nẻo.",
    "这里的景色确实名不虚传。": "Cảnh sắc nơi đây quả thực đúng là danh bất hư truyền.",
    "车坏在半路上了，我们只好走着回去。": "Xe bị hỏng giữa đường, chúng tôi đành phải đi bộ quay về.",
    "我差一点儿就迟到了。": "Tôi suýt chút nữa là bị trễ giờ rồi.",
    "只要努力，就一定能成功。": "Chỉ cần nỗ lực thì nhất định sẽ thành công.",
    "这项任务并不容易完成。": "Nhiệm vụ này kỳ thực không hề dễ dàng hoàn thành chút nào.",
    "他竟然做出了这种决定。": "Anh ấy ngờ đâu lại đưa ra một quyết định như thế này.",
    "你究竟明白不明白我的意思？": "Rốt cuộc bạn có hiểu ý tôi nói hay là không?",
    "这件衣服我穿着正好。": "Chiếc áo này tôi mặc vừa vặn xinh xắn.",
    "到底是谁把花瓶打碎了？": "Rốt cuộc là ai đã làm vỡ chiếc bình hoa này?",
    "难道这件事就这么算了吗？": "Chẳng lẽ chuyện này cứ thế mà cho qua hay sao?",
    "千万别把这件事告诉别人。": "Vạn lần tuyệt đối đừng đem chuyện này nói cho người khác biết nhé.",
    "他的汉语水平确实很高。": "Trình độ tiếng Trung của anh ấy quả thật rất cừ khôi.",
    "没有别的办法，只好如此。": "Không còn cách nào khác, đành phải làm như vậy thôi.",
    "地上太滑，他差点儿摔倒。": "Mặt đất trơn quá, anh ấy suýt nữa thì ngã nhào.",
    "等了半天，车才来。": "Chờ đợi nửa ngày trời, xe mới chịu đến.",
    "我还有很多事情没做完呢。": "Tôi vẫn còn rất nhiều việc chưa làm xong xuôi đâu đấy.",

    # 14 引出时间、处所：自、当、由、随着、等
    "自去年毕业后，我们已经一年多没见了。": "Kể từ sau khi tốt nghiệp năm ngoái, chúng tôi đã hơn một năm chưa gặp lại.",
    "当阳光照进房间时，新的一天开始了。": "Vào lúc ánh nắng chiếu rọi vào phòng, một ngày mới bắt đầu.",
    "由北京出发的高铁运行得非常平稳。": "Tàu cao tốc khởi hành từ Bắc Kinh chạy vô cùng êm ái.",
    "随着经济的发展，人们的生活水平不断提高。": "Cùng với sự phát triển của kinh tế, mức sống của người dân không ngừng được nâng cao.",
    "等他到了，我们再开会。": "Đợi đến khi anh ấy đến nơi, chúng ta hãy mở cuộc họp.",
    "自古以来，人们就向往和平。": "Kể từ thời cổ đại đến nay, con người luôn luôn hướng tới hòa bình.",
    "当遇到危险时，一定要保持冷静。": "Khi gặp phải nguy hiểm, nhất định phải giữ bình tĩnh.",
    "航线由上海直飞巴黎。": "Đường bay do Thượng Hải cất cánh bay thẳng đến Paris.",
    "随着年龄的增长，他的阅历越来越丰富。": "Cùng với sự tăng lên của tuổi tác, vốn trải nghiệm của anh ấy ngày càng phong phú.",
    "等我吃完饭就去接你。": "Đợi tôi ăn cơm xong là sẽ đi đón bạn ngay.",

    # 15 引出施事、受事：将、由、叫、让
    "学校将举办一场汉语演讲比赛。": "Nhà trường sẽ tổ chức một cuộc thi hùng biện tiếng Hán.",
    "这次活动由学生会负责组织。": "Hoạt động lần này do hội học sinh chịu trách nhiệm tổ chức.",
    "他的钱包在公交车上叫小偷偷走了。": "Ví tiền của anh ấy trên xe buýt đã bị kẻ trộm móc mất rồi.",
    "我的自行车让他给弄坏了。": "Chiếc xe đạp của tôi đã bị anh ta làm cho hỏng mất rồi.",
    "我们要把理论将其实践化。": "Chúng ta phải đem lý luận biến thành thực tiễn.",
    "这个项目由张教授亲自指导。": "Dự án này do đích thân giáo sư Trương chỉ đạo.",

    # 16 引出原因：由于1
    "由于天气原因，今天的航班取消了。": "Do nguyên nhân thời tiết, chuyến bay hôm nay đã bị hủy.",
    "由于长期的坚持，他的身体越来越健康。": "Nhờ có sự kiên trì lâu dài, cơ thể anh ấy ngày càng khỏe mạnh tráng kiện.",

    # 17 引出对象：对于、与1
    "对于初学者来说，掌握拼音非常重要。": "Đối với người mới bắt đầu học, nắm vững pinyin là vô cùng quan trọng.",
    "他对于中国传统文化非常感兴趣。": "Anh ấy đối với văn hóa truyền thống Trung Quốc rất có hứng thú.",
    "与去年相比，今年公司的业绩大幅提升。": "So sánh cùng với năm ngoái, thành tích của công ty năm nay tăng vọt rõ rệt.",
    "我们要加强与各国朋友的友好往来。": "Chúng ta cần tăng cường giao lưu hữu nghị cùng với bạn bè các nước.",

    # 18 引出凭借、依据：作为、按、按照
    "作为一名学生，首要任务是好好学习。": "Với tư cách là một học sinh, nhiệm vụ hàng đầu là học tập thật tốt.",
    "作为朋友，我非常理解他的感受。": "Với tư cách là bạn bè, tôi rất thấu hiểu cảm xúc của anh ấy.",
    "我们应该按时完成领导交代的任务。": "Chúng ta nên hoàn thành nhiệm vụ cấp trên giao phó đúng giờ.",
    "这些商品按重量计费。": "Các mặt hàng này được tính tiền theo trọng lượng.",
    "按照规定，图书馆内禁止大声喧哗。": "Căn cứ theo quy định, bên trong thư viện nghiêm cấm làm ồn lớn tiếng.",
    "请按照说明书的要求正确安装机器。": "Xin vui lòng căn cứ theo đúng yêu cầu sách hướng dẫn để lắp đặt máy móc.",

    # 19 连接词或词组：并2、而1、与2
    "我们讨论并批准了这一提案。": "Chúng tôi đã thảo luận và phê chuẩn đề án này.",
    "这不仅是一个机会，并且是一次挑战。": "Đây không chỉ là một cơ hội, đồng thời còn là một thách thức.",
    "这种水果便宜而美味。": "Loại hoa quả này vừa rẻ tiền mà lại thơm ngon.",
    "他虽然年轻而富有经验。": "Anh ấy tuy còn trẻ tuổi mà lại rất giàu dặn kinh nghiệm.",
    "老师与学生建立了深厚的友谊。": "Thầy cô và học trò đã thiết lập nên tình cảm gắn bó sâu sắc.",
    "理论与实践相结合才能取得好成果。": "Lý luận và thực tiễn kết hợp cùng nhau mới có thể gặt hái kết quả tốt.",

    # 20 连接分句或句子：此外、而2、既然、甚至、不过、并且
    "这个手机外观漂亮，此外，拍照功能也十分强大。": "Chiếc điện thoại này bề ngoài đẹp đẽ, ngoài ra, chức năng chụp ảnh cũng rất mạnh mẽ.",
    "我们要保护环境，此外还要节约资源。": "Chúng ta phải bảo vệ môi trường, ngoài ra còn phải tiết kiệm tài nguyên.",
    "他不仅没生气，反而微笑着安慰大家。": "Anh ấy chẳng những không giận dữ, mà ngược lại còn mỉm cười an ủi mọi người.",
    "有人喜欢热闹，而有人偏爱安静。": "Có người thích náo nhiệt, mà lại có người ưa chuộng sự yên tĩnh.",
    "既然大家都同意，那我们就这么决定了。": "Đã là mọi người đều đồng ý rồi, vậy chúng ta cứ quyết định thế nhé.",
    "既然生病了，就该在家里好好休养。": "Đã bị ốm rồi thì nên ở nhà nghỉ dưỡng cho thật tốt.",
    "屋里静得连一根针掉在地上甚至都能听见。": "Trong phòng yên tĩnh đến mức ngay cả một cây kim rơi xuống đất thậm chí cũng có thể nghe thấy.",
    "他学习非常刻苦，甚至连吃饭的时间都在看书。": "Anh ấy học hành vô cùng gian khổ, thậm chí đến cả giờ ăn cơm cũng đang đọc sách.",
    "这本书写得很好，不过价格稍微贵了点儿。": "Quyển sách này viết rất hay, có điều giá cả hơi đắt một chút.",
    "我想去旅行，不过最近实在抽不出时间。": "Tôi rất muốn đi du lịch, có điều dạo này thực sự không dứt ra được thời gian.",
    "他准时到达了目的地，并且带回了所有资料。": "Anh ấy đã đến đích đúng giờ, hơn nữa còn mang về đầy đủ tất cả tài liệu.",
    "这项技术安全可靠，并且成本低廉。": "Kỹ thuật này an toàn đáng tin cậy, hơn nữa giá thành lại rẻ.",

    # 21 连接分句或句子：不光、不仅、另外、要是、因此、由于2、加上
    "不光他会说中文，他妹妹说得也不错。": "Không chỉ anh ấy biết nói tiếng Trung, mà em gái anh ấy nói cũng rất cừ.",
    "不仅老师表扬了他，同学们也向他表示祝贺。": "Không những thầy giáo khen ngợi cậu ấy, mà các bạn cũng gửi lời chúc mừng.",
    "这间卧室采光很好，另外，卫生间也很宽敞。": "Phòng ngủ này ánh sáng rất tốt, ngoài ra phòng vệ sinh cũng rất rộng rãi.",
    "今天去超市买菜，另外还得买些日用品。": "Hôm nay đi siêu thị mua thức ăn, ngoài ra còn phải mua thêm ít đồ dùng hàng ngày.",
    "要是明天下雨，运动会就延期举行。": "Nếu như ngày mai trời mưa, đại hội thể thao sẽ hoãn lại.",
    "要是有什么不懂的地方，随时可以问我。": "Nếu như có chỗ nào không hiểu, bạn có thể hỏi tôi bất cứ lúc nào.",
    "他平时学习非常刻苦，因此取得了优异的成绩。": "Bình thường anh ấy học rất chăm chỉ, vì thế đã đạt được thành tích xuất sắc.",
    "由于连续加班，加上天气寒冷，他终于病倒了。": "Do liên tục tăng ca, cộng thêm thời tiết giá lạnh, anh ấy rốt cuộc đã đổ bệnh.",
    "屋子小，加上东西多，显得十分拥挤。": "Căn phòng nhỏ, cộng thêm đồ đạc nhiều, trông vô cùng chật chội.",
    "不光大人喜欢看这部电影，小孩子也很喜欢。": "Không chỉ người lớn thích xem bộ phim này, mà trẻ con cũng rất mê.",
    "他不仅工作认真，另外为人也很热情。": "Anh ấy không chỉ làm việc nghiêm túc, ngoài ra đối đãi với mọi người cũng rất nhiệt tình.",
    "要是我早知道这个消息就好了。": "Giá như tôi biết được tin này sớm hơn thì tốt biết mấy.",
    "城市交通十分拥堵，因此很多人选择坐地铁。": "Giao thông thành phố vô cùng ùn tắc, vì vậy rất nhiều người lựa chọn đi tàu điện ngầm.",
    "由于缺乏经验，这项计划最终失败了。": "Do thiếu hụt kinh nghiệm, kế hoạch này cuối cùng đã thất bại.",

    # 22 其他助词：等2、者、之、就是
    "桌上放着苹果、香蕉、橘子等水果。": "Trên bàn có để táo, chuối, quýt vân vân các loại hoa quả.",
    "出席会议的有专家、学者、记者等各界人士。": "Tham dự cuộc họp có các chuyên gia, học giả, nhà báo cùng các giới nhân sĩ.",
    "有志者事竟成。": "Người có chí thì nên (người có chí ắt làm nên việc lớn).",
    "胜利属于勇敢者。": "Chiến thắng thuộc về những con người quả cảm.",
    "他是我的三分之一的朋友。": "Một phần ba số bạn bè của tôi đều là du học sinh.",
    "这是解决问题的重中之重。": "Đây chính là trọng tâm của trọng tâm trong việc giải quyết vấn đề.",
    "我的愿望就是考上理想的大学。": "Nguyện vọng của tôi chính là thi đỗ vào trường đại học mơ ước.",
    "他每天的生活就是读书、写作。": "Cuộc sống mỗi ngày của ông ấy chính là đọc sách và viết văn.",

    # 23 啊、嗯
    "啊，这里的空气真新鲜！": "A, không khí ở nơi đây trong lành thật đấy!",
    "啊！太好了，我们终于成功了！": "A! Tuyệt vời quá, cuối cùng chúng ta cũng thành công rồi!",
    "嗯，我知道了，你先忙吧。": "Ừ, tôi biết rồi, bạn cứ làm việc trước đi.",
    "“你看这样行吗？”“嗯，挺好的。”": "“Bạn thấy thế này có được không?” “Ừ, tốt lắm đấy.”",

    # 24 数词+形容词+量词
    "他提着一大包行李，走得很慢。": "Anh ấy xách một bọc hành lý to tướng, bước đi rất chậm chạp.",
    "妈妈买了一小盒精致的巧克力。": "Mẹ mua một hộp sô-cô-la nhỏ nhắn tinh tế.",

    # 25 一A一B
    "这件事情我已经调查得一清二楚了。": "Sự việc này tôi đã điều tra rõ ràng rành mạch từ đầu đến đuôi rồi.",
    "这两件衣服款式和颜色一模一样。": "Hai bộ quần áo này kiểu dáng và màu sắc giống nhau y như đúc.",

    # 26 无A无B
    "孩子们在草地上无忧无虑地玩耍。": "Lũ trẻ đang vui đùa vô tư lự, không chút âu lo trên bãi cỏ.",
    "大自然的美景给人们带来无穷无尽的快乐。": "Cảnh đẹp của thiên nhiên mang lại cho con người niềm vui bất tận, vô cùng vô tận.",

    # 27 有A有B
    "他把那个传奇故事讲得有声有色。": "Ông ấy kể lại câu chuyện truyền kỳ đó một cách vô cùng sinh động, hấp dẫn.",
    "网络发展对青少年的成长有利有弊。": "Sự phát triển của internet đối với sự trưởng thành của thanh thiếu niên có cả điểm lợi lẫn điểm hại.",

    # 28 来得及/来不及
    "现在才七点半，去机场完全来得及。": "Bây giờ mới 7 giờ rưỡi, đến sân bay hoàn toàn kịp giờ.",
    "抓紧时间，还能来得及赶上末班车。": "Mau khẩn trương lên, vẫn còn kịp để đón chuyến xe buýt cuối cùng đấy.",
    "突然接到通知，准备得有些来不及。": "Đột nhiên nhận được thông báo, chuẩn bị có phần không kịp tay.",
    "快跑，不然要来不及了！": "Chạy mau lên, nếu không thì không kịp mất!",

    # 29 有的是
    "别着急，我们有的是时间慢慢讨论。": "Đừng nóng vội, chúng mình có thừa thời gian để thong thả bàn bạc.",
    "商场里各种款式的衣服有的是，多挑挑吧。": "Trong trung tâm thương mại quần áo đủ kiểu dáng thiếu gì, cứ tha hồ chọn lựa đi.",

    # 30 说不定
    "天气预报说今天阴天，说不定待会儿就会下雨。": "Dự báo thời tiết nói hôm nay trời râm, chưa biết chừng lát nữa là đổ mưa đấy.",
    "你再仔细找找，说不定钥匙就在抽屉里。": "Bạn tìm kỹ lại lần nữa xem, khéo chìa khóa lại đang ở trong ngăn kéo cũng nên.",

    # 31 不怎么
    "我最近身体不怎么舒服，不想出门。": "Dạo này người tôi không được khỏe cho lắm, chẳng muốn ra ngoài.",
    "这道菜的味道不怎么地道。": "Hương vị của món ăn này không được chuẩn vị cho lắm.",

    # 32 就是说/这就是说
    "他没来上课，就是说他可能生病了。": "Cậu ấy không đến lớp, điều đó có nghĩa là cậu ấy có thể bị ốm rồi.",
    "比赛推迟到了下周，这就是说我们还有时间准备。": "Cuộc thi hoãn tới tuần sau, nói cách khác là chúng ta vẫn còn thời gian để chuẩn bị.",

    # 33 一+量词+比+一+量词
    "随着生活水平的提高，人们的生活一年比一年好。": "Cùng với mức sống được nâng cao, cuộc sống người dân mỗi năm một tốt hơn.",
    "在老师的指导下，他的字写得一天比一天工整。": "Dưới sự hướng dẫn của thầy, chữ cậu ấy viết mỗi ngày một nắn nót hơn.",

    # 34 在……方面
    "他在计算机编程方面很有天赋。": "Cậu ấy về mặt lập trình máy tính rất có thiên phú.",
    "两国在文化、教育方面开展了广泛的合作。": "Hai nước đã triển khai hợp tác sâu rộng trên các phương diện văn hóa và giáo dục.",

    # 35 够……的
    "爬了两个小时的山，可真够累的。": "Leo núi suốt hai tiếng đồng hồ, quả thật là đủ mệt đứt hơi rồi đấy.",
    "大冬天的在外面站了半天，够受的。": "Giữa mùa đông đứng ngoài trời nửa ngày, đến là khổ sở đủ đường.",

    # 36 拿……来说
    "学外语需要坚持，拿背单词来说，每天都不能中断。": "Học ngoại ngữ cần phải kiên trì, lấy việc học từ vựng làm ví dụ, ngày nào cũng không thể gián đoạn.",
    "中国的很多城市发展很快，拿深圳来说，几十年前还是个小渔村。": "Nhiều thành phố ở Trung Quốc phát triển rất nhanh, lấy Thâm Quyến làm ví dụ, mấy chục năm trước vẫn còn là một làng chài nhỏ.",

    # 37 再也不/没……
    "经历了那次教训，他再也不敢粗心大意了。": "Trải qua bài học nhớ đời đó, anh ấy không bao giờ dám bất cẩn sơ ý nữa.",
    "离开家乡后，我再也没见过那位老教师。": "Sau khi rời quê hương, tôi chưa từng gặp lại người thầy giáo già năm ấy nữa.",

    # 38 怎么都/也+不/没……
    "这个密码我怎么想也想不起来了。": "Mật khẩu này tôi làm cách nào cũng không thể nhớ ra được nữa.",
    "大家都劝他，可他怎么都不肯答应。": "Mọi người đều khuyên nhủ, nhưng anh ấy làm sao cũng không chịu gật đầu.",

    # 39 为了……而……
    "无数科学家为了追求真理而奉献了毕生精力。": "Vô số nhà khoa học vì mưu cầu chân lý mà đã cống hiến trọn vẹn cả cuộc đời.",
    "我们不能为了眼前的利益而牺牲长远的发展。": "Chúng ta không thể vì lợi ích trước mắt mà hy sinh sự phát triển lâu dài.",

    # 40 动词+一X是一X
    "现在生活虽然富裕了，但能省一分是一分，节约总是好的。": "Bây giờ cuộc sống tuy sung túc rồi, nhưng tiết kiệm được đồng nào hay đồng nấy, tiết kiệm luôn là điều tốt.",
    "时间宝贵，能多学一点是一点。": "Thời gian quý báu, học thêm được chút nào hay chút nấy.",

    # 41 （没）有什么（好）X的
    "这都是我应该做的事，没什么好感谢的。": "Đây đều là việc tôi nên làm, chẳng có gì đáng để cảm ơn đâu.",
    "失败是常有的事，没有什么大惊小怪的。": "Thất bại là chuyện thường tình, chẳng có gì phải làm ầm ĩ kinh ngạc cả.",

    # 42 X是X，Y是Y
    "工作是工作，生活是生活，下班后就该好好放松。": "Công việc là công việc, cuộc sống là cuộc sống, tan làm rồi thì nên nghỉ ngơi cho thoải mái.",
    "公是公，私是私，不能混为一谈。": "Công ra công, tư ra tư, không thể lẫn lộn làm một được.",

    # 43 X也得X，不X也得X
    "明天的考试非常重要，你愿意去也得去，不愿意去也得去。": "Kỳ thi ngày mai rất quan trọng, bạn muốn đi cũng phải đi, không muốn đi cũng bắt buộc phải đi.",
    "这项制度大家必须遵守，接受也得接受，不接受也得接受。": "Quy chế này mọi người bắt buộc phải tuân thủ, chấp nhận cũng phải theo, không chấp nhận cũng phải chấp nhận.",

    # 44 X就是了
    "有什么困难你尽管跟我说就是了，不用客气。": "Có khó khăn gì bạn cứ thoải mái nói với tôi là được rồi, không cần khách sáo.",
    "按照说明书上的步骤操作就是了，非常简单。": "Cứ làm theo từng bước trong sách hướng dẫn là xong thôi, đơn giản lắm.",

    # 45 还X呢
    "这么简单的问题都不会，还大学生呢！": "Câu hỏi đơn giản thế này cũng không biết làm, thế mà còn tự xưng sinh viên đại học cơ đấy!",
    "嘴上说要减肥，还大鱼大肉地吃呢！": "Mồm thì luôn miệng bảo giảm cân, thế mà còn ăn uống thịt cá đẫy đà!",

    # 46 你X你的吧
    "你做你的吧，别管我，我自己坐会儿就好。": "Bạn cứ làm việc của bạn đi, mặc kệ tôi, tôi ngồi nghỉ một lát là được rồi.",
    "大家各忙各的，你复习你的吧。": "Mọi người ai lo việc nấy, bạn cứ ôn bài của bạn đi.",

    # 47 让/叫你X你就X
    "让你拿着你就拿着，跟我客气什么！": "Bảo bạn cầm lấy thì bạn cứ cầm lấy đi, còn khách khí với tôi làm gì!",
    "叫你好好休息你就老实歇着，别总想着工作。": "Bảo bạn nghỉ ngơi cho tốt thì cứ ngoan ngoãn nằm nghỉ đi, đừng lúc nào cũng nghĩ tới công việc.",

    # 48 说什么/怎么（着）也得X
    "老朋友好不容易来一次，说什么也得吃完晚饭再走。": "Bạn cũ hiếm hoi lắm mới đến một lần, nói thế nào đi nữa cũng phải ăn cơm tối xong rồi hãy đi.",
    "明天是妈妈的生日，怎么着也得买束鲜花表达心意。": "Ngày mai là sinh nhật mẹ, nói sao đi nữa cũng phải mua một bó hoa tươi để tỏ lòng hiếu kính.",
    "无论多忙，每天怎么也得抽出半小时读读书。": "Dù bận thế nào, mỗi ngày nói sao cũng phải dành ra nửa tiếng để đọc sách.",

    # 49 X就X（点儿）吧
    "贵就贵点儿吧，只要质量好就值得买。": "Đắt thì đắt một chút cũng được, miễn sao chất lượng tốt thì rất đáng đồng tiền.",
    "麻烦就麻烦点儿吧，能办成事就行。": "Phiền phức thì chịu phiền một chút vậy, làm được việc là tốt rồi.",

    # 50 X是X
    "这辆自行车旧是旧，可骑起来还是挺轻快的。": "Chiếc xe đạp này cũ thì có cũ thật, nhưng đạp lên vẫn còn rất êm ái.",
    "远是远了点儿，不过那里的风景确实很迷人。": "Xa thì quả có xa một chút, có điều cảnh sắc nơi đó thực sự rất quyến rũ.",

    # 51 形容词/心理动词+死了/厉害
    "今天走了一整天路，脚疼死了。": "Hôm nay đi bộ suốt cả một ngày, chân đau chết đi được.",
    "听说获得了特等奖，他心里乐死了。": "Nghe tin giành được giải đặc biệt, trong lòng anh ấy sướng phát điên lên.",
    "昨晚肚子疼得厉害，一宿没睡好。": "Đêm qua bụng đau dữ dội, cả đêm không chợp mắt được.",
    "这几天天气热得厉害，大家都躲在空调房里。": "Mấy ngày nay trời nóng kinh khủng, ai nấy đều trốn biệt trong phòng điều hòa.",

    # 52 动词+得/不+了
    "这么多饭菜，我一个人可吃不了。": "Nhiều thức ăn thế này, một mình tôi làm sao mà ăn cho hết nổi.",
    "明天上午我有课，去不了机场送你了。": "Sáng mai tôi có tiết học, không thể đến sân bay tiễn bạn được rồi.",
    "他身体很好，干得了重活儿。": "Sức khỏe anh ấy rất tốt, gánh vác nổi việc nặng.",
    "受不了这么大的委屈，他哭了起来。": "Không chịu đựng nổi nỗi ấm ức lớn thế này, cậu ấy đã òa khóc lên.",

    # 53 难道……吗？
    "难道你真的打算放弃这么好的工作机会吗？": "Chẳng lẽ bạn thực sự định từ bỏ cơ hội việc làm tốt thế này sao?",
    "事情都过去这么久了，难道你还记恨在心吗？": "Chuyện đã trôi qua lâu như vậy rồi, chẳng lẽ bạn vẫn còn ghi hận trong lòng sao?",

    # 54 由疑问代词构成的反问句
    "这么重大的事情，谁能不重视呢？": "Chuyện hệ trọng nhường này, ai mà lại không coi trọng cho được?",
    "你整天关在屋里，哪里知道外面的变化？": "Bạn suốt ngày đóng chặt cửa trong phòng, biết làm sao được những đổi thay ngoài kia?",
    "事实摆在眼前，还有什么好争论的？": "Sự thật rành rành ngay trước mắt, còn có cái gì để mà tranh cãi nữa chứ?",

    # 55 “把”字句2：动词（+一/了）+动词
    "天热了，快把窗户开一开透透气。": "Trời nóng rồi, mau mở hé cửa sổ ra một chút cho thoáng khí.",
    "请把这些生词读一读，加深记忆。": "Xin hãy đọc qua các từ mới này một lượt để ghi nhớ sâu hơn.",
    "他把手里的苹果擦了擦就吃了。": "Cậu ấy lau chùi quả táo trên tay một chút rồi ăn luôn.",

    # 56 “把”字句2：动词+了
    "我已经把昨天的作业交了。": "Tôi đã nộp bài tập ngày hôm qua rồi.",
    "他把刚买的西瓜切了，分给大家吃。": "Anh ấy đã bổ quả dưa hấu vừa mua ra, chia cho mọi người cùng ăn.",

    # 57 “把”字句2：动词+动量/时量补语
    "这篇文章很有深度，我打算把它认真看两遍。": "Bài viết này rất có chiều sâu, tôi dự định sẽ đọc kỹ lại nó hai lượt.",
    "老师把那个语法点耐心地讲了半个小时。": "Thầy giáo đã kiên nhẫn giảng giải điểm ngữ pháp đó suốt nửa tiếng đồng hồ.",
    "请把刚才的话重复一遍。": "Xin hãy nhắc lại lời vừa nói thêm một lần nữa.",

    # 58 “把”字句2：状语+动词
    "我们要把这个重要问题认真讨论一下。": "Chúng ta cần thảo luận thật nghiêm túc về vấn đề trọng đại này.",
    "他把房间彻底打扫了一遍。": "Anh ấy đã quét dọn phòng ốc một cách triệt để từ đầu đến đuôi.",

    # 59 被动句2：主语+叫/让+宾语+动词+其他成分
    "放在桌子上的蛋糕叫弟弟给吃了。": "Chiếc bánh kem để trên bàn đã bị em trai chén sạch mất rồi.",
    "那封信让他不小心撕碎了。": "Bức thư đó đã bị anh ấy lơ đễnh xé rách vụn mất rồi.",

    # 60 兼语句2：表爱憎义
    "校长在全体大会上表扬了他拾金不昧的高尚品质。": "Thầy hiệu trưởng tại đại hội toàn trường đã biểu dương phẩm chất nhặt được của rơi trả người đánh mất của cậu ấy.",
    "老师批评他经常旷课、不认真完成作业。": "Thầy giáo phê bình cậu ấy thường xuyên trốn học, không làm bài tập nghiêm túc.",
    "大家都很佩服他克服困难的顽强毅力。": "Mọi người đều vô cùng khâm phục nghị lực kiên cường vượt qua khó khăn của anh ấy.",
    "父母总夸奖妹妹懂事听话。": "Bố mẹ luôn tấm tắc khen ngợi em gái ngoan ngoãn hiểu chuyện.",

    # 61 兼语句2：表称谓或认定义
    "全班同学一致推选他当班长。": "Cả lớp nhất trí bầu chọn cậu ấy làm lớp trưởng.",
    "老教授决定收这位勤奋的学生做助手。": "Vị giáo sư già quyết định nhận bạn sinh viên cần cù này làm trợ lý.",
    "大家公认这部小说为近年来最优秀的作品之一。": "Mọi người đều công nhận cuốn tiểu thuyết này là một trong những tác phẩm xuất sắc nhất những năm gần đây.",

    # 62 兼语句2：表致使
    "这场突如其来的大雨使整个城市的交通陷入瘫痪。": "Trận mưa rào ập đến bất ngờ này đã khiến toàn bộ giao thông thành phố rơi vào tê liệt.",
    "老朋友的热情招待让我感到无比温暖。": "Sự đón tiếp nồng hậu của người bạn cũ làm cho tôi cảm thấy ấm áp vô cùng.",

    # 63 比较句3：A不如B（+形容词）
    "在早高峰时期，坐公交车不如骑自行车快。": "Vào giờ cao điểm buổi sáng, đi xe buýt không nhanh bằng đạp xe đạp.",
    "他的口语表达能力不如听力那么突出。": "Năng lực biểu đạt khẩu ngữ của cậu ấy không nổi trội bằng kỹ năng nghe hiểu.",

    # 64 比较句3：跟……相比
    "跟过去相比，现在的农村生活发生了翻天覆地的变化。": "So sánh với trước đây, cuộc sống nông thôn bây giờ đã có sự biến đổi nghiêng trời lệch đất.",
    "跟同龄人相比，他显得更加成熟稳重。": "So với những người cùng trang lứa, anh ấy tỏ ra chín chắn và điềm đạm hơn nhiều.",

    # 65 双重否定句
    "面对事实真相，他不得不承认自己的错误。": "Đối diện với chân tướng sự thật, anh ấy buộc lòng phải thừa nhận sai lầm của mình.",
    "在中国，几乎没有人不知道长城的雄伟。": "Ở Trung Quốc, hầu như không có ai là không biết đến sự hùng vĩ của Vạn Lý Trường Thành.",

    # 66 并列复句：不是……，而是……
    "他这次失败不是因为能力不够，而是因为太轻敌了。": "Thất bại lần này của anh ấy không phải vì năng lực không đủ, mà là do quá xem nhẹ đối thủ.",
    "我们追求的不是表面的名利，而是内心的充实。": "Cái chúng tôi mưu cầu không phải là danh lợi bề ngoài, mà là sự đủ đầy trong tâm hồn.",

    # 67 并列复句：既……，又/也……
    "这种新型材料既坚固又轻便。": "Loại vật liệu kiểu mới này vừa vững chắc lại vừa gọn nhẹ.",
    "他既喜欢古典文学，也对现代科技充满热情。": "Anh ấy vừa say mê văn học cổ điển, cũng vừa tràn trề nhiệt huyết với công nghệ hiện đại.",

    # 68 并列复句：一方面……，另一方面……
    "发展旅游业，一方面可以增加收入，另一方面能促进文化交流。": "Phát triển ngành du lịch, một mặt có thể tăng thêm thu nhập, mặt khác lại thúc đẩy giao lưu văn hóa.",
    "我们一方面要抓紧时间学习，另一方面要注重身心健康。": "Chúng ta một mặt phải tranh thủ thời gian học hành, mặt khác cần chú trọng sức khỏe thể chất và tinh thần.",

    # 69 承接复句：首先……，其次……
    "解决这个问题，首先要查明原因，其次要制定有效方案。": "Để giải quyết vấn đề này, trước hết cần điều tra rõ nguyên nhân, kế tiếp là xây dựng phương án hữu hiệu.",
    "应聘这份工作，首先需要专业对口，其次要求具备流利的英语能力。": "Ứng tuyển công việc này, trước tiên đòi hỏi phải đúng chuyên ngành, tiếp đến yêu cầu có năng lực tiếng Anh lưu loát.",

    # 70 承接复句：首先……，然后……
    "做实验时，首先要准备好仪器，然后再按步骤进行操作。": "Khi làm thí nghiệm, trước hết phải chuẩn bị đầy đủ dụng cụ, rồi sau đó mới thao tác theo từng bước.",
    "旅行前，我们首先确定了路线，然后订好了沿途的酒店。": "Trước chuyến đi, chúng tôi trước tiên chốt xong lộ trình, rồi sau đó mới đặt phòng khách sạn dọc đường.",

    # 71 承接复句：……，于是……
    "听了专家的建议，大家都觉得很有道理，于是纷纷改变了原来的计划。": "Nghe lời khuyên của chuyên gia, ai nấy đều thấy rất có lý, thế là đua nhau thay đổi kế hoạch ban đầu.",
    "天渐渐黑了下来，暴风雨就要来临，于是我们决定提前收工。": "Trời dần sầm tối, dông bão sắp sửa ập đến, thế là chúng tôi quyết định thu dọn đồ nghỉ làm sớm.",

    # 72 递进复句：……,甚至……
    "他平时极少与人交流，甚至连同宿舍的室友都很少说话。": "Bình thường anh ấy rất hiếm khi giao tiếp với người khác, thậm chí đến bạn cùng phòng ký túc xá cũng ít khi trò chuyện.",
    "由于工作太忙，他甚至忘记了今天是自己的生日。": "Vì công việc quá bận rộn, anh ấy thậm chí quên khuấy mất hôm nay chính là ngày sinh nhật của mình.",

    # 73 递进复句：不仅/不光……，还/而且……
    "他不仅精通两门外语，而且在计算机领域也颇有建树。": "Anh ấy không những tinh thông hai ngoại ngữ, mà trong lĩnh vực máy tính cũng gặt hái không ít thành tựu.",
    "这次培训不仅开阔了大家的视野，还增进了团队协作精神。": "Đợt tập huấn lần này chẳng những mở rộng tầm mắt cho mọi người, mà còn gia tăng tinh thần gắn kết đồng đội.",

    # 74 递进复句：……，并且……
    "他们按时完成了施工任务，并且工程质量完全达标。": "Họ đã hoàn thành nhiệm vụ thi công đúng hạn, hơn nữa chất lượng công trình hoàn toàn đạt chuẩn.",
    "这项改革方案得到了大家的赞同，并且很快在全校推广开来。": "Phương án cải cách này nhận được sự đồng thuận của mọi người, hơn nữa rất nhanh chóng được phổ biến ra toàn trường.",

    # 75 递进复句：连……也/都……，……更……
    "连经验丰富的专家都没把握，普通人就更难解决了。": "Đến cả các chuyên gia giàu dặn kinh nghiệm còn chưa dám chắc, thì người bình thường càng khó lòng giải quyết nổi.",
    "在这个偏僻的小村庄，连手机信号都很弱，上网就更别提了。": "Ở ngôi làng hẻo lánh này, ngay cả sóng điện thoại còn rất yếu, huống chi là việc lên mạng thì càng khỏi phải bàn.",

    # 76 选择复句：不是……，就是……
    "他周末的生活很单一，不是在图书馆看书，就是在宿舍睡觉。": "Cuộc sống cuối tuần của cậu ấy rất đơn điệu, không phải ở thư viện đọc sách thì cũng là nằm ngủ trong ký túc xá.",
    "遇到不顺心的事，他不是叹气就是抱怨，从不主动想办法解决。": "Gặp phải chuyện không vừa ý, anh ấy không thở dài thì lại than vãn, chẳng bao giờ chủ động tìm cách khắc phục.",

    # 77 转折复句：尽管……，但是/可是……
    "尽管任务非常艰巨，但是队员们依然充满了必胜的信心。": "Mặc dù nhiệm vụ hết sức gian khổ, thế nhưng các thành viên trong đội vẫn tràn trề niềm tin tất thắng.",
    "尽管外面下着大雪，可是教室里依然坐满了求知的学生。": "Mặc dù bên ngoài tuyết rơi dày đặc, thế nhưng trong phòng học vẫn ngồi chật kín những học sinh khát khao tri thức.",

    # 78 转折复句：……，然而……
    "大家都以为计划万无一失，然而意外还是发生了。": "Mọi người đều ngỡ rằng kế hoạch vạn vô nhất thất, tuy nhiên điều bất ngờ ngoài ý muốn vẫn cứ xảy ra.",
    "他付出了巨大的努力，然而结果却不尽如人意。": "Anh ấy đã bỏ ra nỗ lực vô cùng to lớn, thế nhưng kết quả lại chẳng được như ý muốn.",

    # 79 转折复句：……，不过……
    "这个办法听起来不错，不过实施起来可能会遇到不少阻力。": "Cách này nghe qua thì khá hay, có điều khi triển khai thực tế có thể sẽ vấp phải không ít lực cản.",
    "这部电影的情节很感人，不过结局有点儿悲伤。": "Tình tiết bộ phim này rất xúc động, có điều cái kết hơi đượm buồn một chút.",

    # 80 转折复句：……X是X，就是/不过……
    "这件羊毛衫暖和是暖和，不过洗起来挺麻烦的。": "Chiếc áo len này ấm thì có ấm thật đấy, có điều khi giặt giũ thì khá là phiền toái.",
    "那家饭店菜做得好是好，就是服务态度差了点儿。": "Nhà hàng đó nấu ăn ngon thì ngon thật, chỉ có điều thái độ phục vụ hơi kém một chút.",

    # 81 假设复句：……，否则……
    "我们必须马上出发，否则赶不上早班飞机了。": "Chúng ta bắt buộc phải xuất phát ngay, nếu không thì chẳng kịp chuyến bay sáng đâu.",
    "请务必保管好发票，否则无法办理退换货。": "Xin vui lòng giữ gìn hóa đơn cẩn thận, nếu không sẽ không thể giải quyết đổi trả hàng.",

    # 82 假设复句：要是……，就……
    "要是你明天有空，我们就一起去逛街吧。": "Nếu ngày mai bạn rảnh rỗi, chúng mình cùng nhau đi dạo phố nhé.",
    "要是遇到生词，就可以查阅手机词典。": "Nếu gặp phải từ mới, bạn có thể tra cứu từ điển điện thoại.",

    # 83 假设复句：要是……，（就）……，否则……
    "要是大家齐心协力，就能按时完工，否则工程进度肯定会受影响。": "Nếu mọi người đồng lòng hiệp lực thì có thể xong việc đúng hạn, bằng không tiến độ công trình ắt sẽ bị ảnh hưởng.",
    "要是现在报名还可以享受优惠，否则过几天就恢复原价了。": "Nếu đăng ký ngay bây giờ thì vẫn còn được hưởng ưu đãi, bằng không qua vài ngày nữa sẽ về giá gốc.",

    # 84 条件复句：不管……，都/也……
    "不管风吹雨打，边防战士们都日夜守卫着祖国的边境。": "Bất kể gió giật mưa sa, các chiến sĩ biên phòng vẫn ngày đêm canh giữ biên cương tổ quốc.",
    "不管前方的道路多么曲折，我也绝不放弃自己的梦想。": "Bất kể con đường phía trước có gập ghềnh khúc khuỷu đến đâu, tôi cũng tuyệt đối không từ bỏ giấc mơ của mình.",

    # 85 条件复句：无论……，都/也……
    "无论遇到什么风浪，我们都要坚定不移地走下去。": "Dù cho gặp sóng to gió lớn nhường nào, chúng ta đều phải kiên định vững bước tiến lên.",
    "无论身在何方，他都时刻思念着家乡的亲人。": "Dù ở bất kỳ phương trời nào, anh ấy đều luôn đau đáu nhớ về người thân nơi quê nhà.",

    # 86 因果复句：既然……，就……
    "既然大家都推选你，你就大胆挑起这个重担吧。": "Đã là mọi người đều tín nhiệm bầu bạn, bạn hãy mạnh dạn gánh vác trọng trách này đi.",
    "既然做出了承诺，就一定要守信用。": "Một khi đã đưa ra lời hứa hẹn, thì nhất định phải biết giữ chữ tín.",

    # 87 因果复句：（由于）……，因此……
    "由于前期准备充分，因此整个谈判过程十分顺利。": "Do giai đoạn đầu chuẩn bị chu đáo, vì thế toàn bộ quá trình đàm phán diễn ra vô cùng thuận lợi.",
    "由于平时缺乏体育锻炼，因此他稍微跑几步就气喘吁吁。": "Do bình thường lười rèn luyện thân thể, vì vậy cậu ấy chỉ chạy vài bước là đã thở hồng hộc.",

    # 88 目的复句：……，好……
    "请把你的详细地址留给我，好方便我给你寄材料。": "Xin hãy để lại địa chỉ chi tiết cho tôi, để tiện bề cho tôi gửi tài liệu đến cho bạn.",
    "我们早点儿去排队，好买到前排的门票。": "Chúng ta đi xếp hàng sớm một chút, để có thể mua được vé ở hàng ghế phía trước.",

    # 89 让步复句：即使……，也……
    "即使遇到天大的困难，我们也要保持乐观的心态。": "Cho dù gặp phải khó khăn to tát cỡ nào, chúng ta cũng phải giữ vững tâm thế lạc quan.",
    "即使工作再忙，他每天也要抽出时间陪陪孩子。": "Cho dù công việc có bận rộn đến đâu, mỗi ngày anh ấy cũng phải bớt chút thời giờ ở bên con cái.",

    # 90 让步复句：就是……，也……
    "就是下大雨，明天的球赛也照常举行。": "Dù trời có đổ mưa to, trận đấu bóng ngày mai vẫn diễn ra bình thường.",
    "就是天塌下来，也有高个子顶着，别害怕。": "Dù cho trời có sập xuống thì cũng có người cao gánh đỡ, đừng sợ hãi.",

    # 91 紧缩复句：无标记
    "你想吃什么就买什么。": "Bạn muốn ăn cái gì thì cứ mua cái đó.",
    "不问不知道，一问吓一跳。": "Không hỏi thì chẳng biết, vừa hỏi ra một cái là giật nảy cả mình.",
    "有话直说，别拐弯抹角。": "Có lời gì thì cứ nói thẳng ra, đừng nói vòng vo tam quốc.",

    # 92 紧缩复句：不……也……
    "你不说我也猜得到是谁干的。": "Bạn không cần nói tôi cũng đoán ra được là ai đã làm chuyện đó.",
    "这件事不上报也瞒不住了。": "Chuyện này không báo cáo lên cấp trên thì cũng chẳng giấu giếm nổi nữa rồi.",

    # 93 概数表示法3：数词+来+量词
    "老王看起来有五十来岁。": "Bác Vương nhìn bề ngoài có vẻ tròm trèm ngoài 50 tuổi.",
    "操场上聚集了百来个学生。": "Trên sân tập trung khoảng chừng một trăm học sinh.",
    "这根木头大概有十来米长。": "Khúc gỗ này đại khái dài khoảng mười mét tròm trèm.",

    # 94 用“大约、左右、前后”表示概数
    "从这里坐高铁到北京大约需要四个小时。": "Từ đây đi tàu cao tốc đến Bắc Kinh xấp xỉ mất khoảng 4 tiếng đồng hồ.",
    "参加今天晚会的观众有五百人左右。": "Khán giả tham dự đêm tiệc hôm nay có khoảng chừng 500 người.",
    "学校通常在九月一日前后正式开学。": "Nhà trường thông thường khai giảng chính thức vào khoảng ngày 1 tháng 9.",

    # 95 小数、分数、百分数、倍数的表示法
    "今天的体温是三十六点五度，一切正常。": "Nhiệt độ cơ thể hôm nay là 36.5 độ, tất cả đều bình thường.",
    "这个班有三分之二的学生通过了高级考试。": "Lớp học này có hai phần ba số học sinh đã đỗ kỳ thi cấp cao.",
    "经过技术改造，产品的合格率达到了百分之九十八。": "Qua cải tiến kỹ thuật, tỷ lệ đạt chuẩn của sản phẩm đã đạt đến 98%.",
    "今年公司的营业额比去年增长了一倍。": "Doanh thu năm nay của công ty so với năm ngoái đã tăng gấp đôi.",
    "地球表面大约有百分之七十一的面积被海洋覆盖。": "Bề mặt Trái Đất có khoảng 71% diện tích được bao phủ bởi đại dương."
}

# 95 Items Metadata Definition for HSK 4
HSK4_META = [
    # 01
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Động từ năng nguyện: 敢 (Gǎn - Dám làm gì)",
        "structure": "Chủ ngữ + (不) 敢 + Động từ | 敢不敢...?",
        "explanationVi": "Biểu thị sự dũng cảm, có đủ can đảm hoặc gan dạ để tiến hành một hành vi nào đó (tương đương với từ 'dám' trong tiếng Việt). Dạng câu hỏi chính phản dùng '敢不敢'.",
        "tips": "Phủ định là '不敢' (không dám). Chú ý phân biệt với '能' (có thể/có khả năng) và '会' (biết làm qua học tập)."
    },
    # 02
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Đại từ chỉ thị & Phân phối: 各, 各位, 各种, 任何, 此",
        "structure": "各 + Lượng từ / Danh từ (từng/mỗi) | 任何 + Danh từ (bất kỳ) | 此 + Danh từ (này/đây)",
        "explanationVi": "• 各 / 各位 / 各种: Biểu thị từng cá thể riêng biệt trong một tổng thể (các vị, các loại, mỗi nơi).\n• 任何 (rènhé): Bất kỳ người hoặc sự vật nào, mang tính phổ quát không giới hạn.\n• 此 (cǐ): Văn viết chỉ 'này', 'đây' (tương đương với 这, ví dụ: 此处, 此时, 由此).",
        "tips": "'此' là từ mang đậm sắc thái văn viết (thư diện ngữ)."
    },
    # 03
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Lượng từ danh từ chuyên dụng: 打, 袋, 棵, 台, 幅",
        "structure": "Số từ + 打 / 袋 / 棵 / 台 / 幅 + Danh từ",
        "explanationVi": "• 打 (dá): Tá (12 cái: trứng gà, khăn mặt).\n• 袋 (dài): Túi, bao (gạo, sữa tươi, rác).\n• 棵 (kē): Cây cối thực vật (cây to, cây cỏ).\n• 台 (tái): Máy móc, thiết bị điện tử (máy tính, máy móc, ti vi).\n• 幅 (fú): Bức tranh, cuộn vải nghệ thuật (tranh thủy mặc, tác phẩm vẽ).",
        "tips": "Phân biệt '棵' (cây cối thực vật) với '颗' (vật tròn nhỏ như ngôi sao, hạt ngọc, răng, tim)."
    },
    # 04
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Lượng từ mượn từ danh từ: 脸, 手, 盒, 屋子, 桌子",
        "structure": "满 / 一 + 脸 / 手 / 盒 / 屋子 / 桌子 (+ Danh từ)",
        "explanationVi": "Mượn các danh từ chỉ bộ phận cơ thể hoặc không gian để làm lượng từ gợi hình sống động:\n• 满脸 (đầy mặt mồ hôi, nét mặt tươi rói)\n• 一手 (một tay chữ đẹp, tay nghề nấu ăn)\n• 一盒 (một hộp bút chì, dâu tây)\n• 满屋子 (đầy cả gian phòng)\n• 一桌子 (đầy một bàn tiệc thịnh soạn).",
        "tips": "Tăng cường tính biểu cảm và miêu tả cụ thể cho câu văn."
    },
    # 05
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Động lượng từ biểu thị tính chất: 场, 顿, 趟",
        "structure": "Động từ + 一 + 场 / 顿 / 趟",
        "explanationVi": "• 场 (cháng/chǎng): Trận, cơn (mưa, bóng đá, ốm, kịch nghệ).\n• 顿 (dùn): Bữa, chập, trận (bữa ăn, trận phê bình, mắng mỏ).\n• 趟 (tàng): Chuyến, lượt đi và về (chạy một chuyến đến siêu thị/đại sứ quán).",
        "tips": "'趟' nhấn mạnh hành trình đi đến một nơi nào đó rồi quay về."
    },
    # 06
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ mức độ phong phú: 十分, 更加, 稍微, 尤其, 多么",
        "structure": "十分 / 更加 / 稍微 / 尤其 + Tính từ / Động từ tâm lý | 多么 + Tính từ + 啊！",
        "explanationVi": "• 十分 (shífēn): Vô cùng, hết sức (mức độ 10/10, trang trọng hơn 很).\n• 更加 (gèngjiā): Càng thêm, ngày một hơn (so sánh tăng tiến mạnh).\n• 稍微 (shāowēi): Hơi hơi, một chút xíu.\n• 尤其 (yóuqí): Đặc biệt là, nhất là (nổi bật trong các đối tượng).\n• 多么 (duōme): Biết bao, dường nào (trong câu cảm thán).",
        "tips": "'稍微' thường đi kèm với '一点儿' hoặc '一些' ở phía sau tính từ."
    },
    # 07
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ phạm vi: 共, 全, 光, 仅, 仅仅, 至少",
        "structure": "共 / 全 / 光 / 仅 / 至少 + Số lượng / Động từ",
        "explanationVi": "• 共: Tổng cộng (viết tắt của 一共).\n• 全: Toàn thể, toàn bộ (全校, 全家).\n• 光: Chỉ, mỗi (khẩu ngữ mang sắc thái phàn nàn: 光顾着玩儿).\n• 仅 / 仅仅: Vẻn vẹn, chỉ có (trang trọng hơn 只).\n• 至少: Ít nhất, tối thiểu.",
        "tips": "'光' trong khẩu ngữ tương đương với '只'."
    },
    # 08
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ thời gian trung cấp: 按时, 从来, 赶紧, 赶快, 已, 忽然, 将, 本来",
        "structure": "Chủ ngữ + Phó từ thời gian + Động từ",
        "explanationVi": "• 按时: Đúng giờ, đúng hẹn.\n• 从来: Từ trước tới nay (thường đi với phủ định: 从来不 / 从来没).\n• 赶紧 / 赶快: Mau chóng, khẩn trương.\n• 已: Đã (viết tắt trang trọng của 已经).\n• 忽然: Đột nhiên, bất thình lình.\n• 将 / 将要: Sẽ, sắp sửa (văn viết).\n• 本来: Vốn dĩ, ban đầu.",
        "tips": "Phân biệt '本来' (vốn dĩ lúc đầu là vậy) với '原来' (hóa ra là vậy sau khi vỡ lẽ)."
    },
    # 09
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ tần suất: 重新, 往往, 偶尔, 再次, 老",
        "structure": "Chủ ngữ + 重新 / 往往 / 偶尔 / 再次 / 老 + Động từ",
        "explanationVi": "• 重新 (chóngxīn): Làm lại từ đầu một việc gì đó.\n• 往往 (wǎngwǎng): Thường hay (quy luật thường xảy ra trong điều kiện nhất định).\n• 偶尔 (ǒu'ěr): Thỉnh thoảng, hiếm khi (tần suất thấp).\n• 再次: Một lần nữa (trang trọng).\n• 老: Cứ luôn, hoài (khẩu ngữ, sắc thái không bằng lòng: 老是忘带钥匙).",
        "tips": "Phân biệt '往往' (chỉ quy luật trong quá khứ/hiện tại) với '经常' (có thể dùng cho tương lai và câu phủ định)."
    },
    # 10
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ phương thức: 故意, 互相, 相互 (Cố tình & Lẫn nhau)",
        "structure": "故意 + Động từ (cố tình làm gì) | 互相 / 相互 + Động từ (làm gì lẫn nhau)",
        "explanationVi": "• 故意 (gùyì): Cố ý, cố tình (có chủ đích từ trước).\n• 互相 / 相互: Qua lại lẫn nhau giữa hai hay nhiều đối tượng (như 互相帮助 - giúp đỡ lẫn nhau; 相互影响 - tác động lẫn nhau).",
        "tips": "'互相' thường bổ nghĩa cho động từ song âm tiết."
    },
    # 11
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ liên kết chuyển ngoặt: 却 (Què - Lại, thế mà lại)",
        "structure": "Chủ ngữ + 却 + Vị ngữ (Đứng SAU chủ ngữ, TRƯỚC động từ)",
        "explanationVi": "Biểu thị sự chuyển biến đối lập, trái ngược với điều bình thường hoặc mong đợi ('thế mà lại', 'lại'). Thường đi sau các liên từ 虽然, 尽管.",
        "tips": "Vị trí chuẩn xác: '却' là phó từ nên BẮT BUỘC đứng sau chủ ngữ (không thể đứng đầu câu như 但是)."
    },
    # 12
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ tình thái suy đoán: 也许 & 恐怕 (Có lẽ & E rằng)",
        "structure": "也许 / 恐怕 + Mệnh đề phán đoán",
        "explanationVi": "• 也许 (yěxǔ): Có lẽ, có thể (suy đoán khách quan, trung tính).\n• 恐怕 (kǒngpà): E rằng, sợ rằng (suy đoán về một kết quả không mong muốn hoặc từ chối khéo léo).",
        "tips": "'恐怕' luôn mang sắc thái lo ngại hoặc ái ngại."
    },
    # 13
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian, mức độ, ngữ khí", "categoryIcon": "🔥",
        "titleVi": "Phó từ ngữ khí phong phú: 并, 竟然, 究竟, 到底, 难道, 千万, 确实, 只好, 差点儿",
        "structure": "Chủ ngữ + Phó từ ngữ khí + Vị ngữ",
        "explanationVi": "Hệ thống phó từ sắc thái biểu cảm cao cấp:\n• 并不/没: Thực ra không hề (nhấn mạnh phủ định)\n• 竟然: Ngờ đâu, lại có thể (bất ngờ ngoài dự tính)\n• 究竟 / 到底: Rốt cuộc là (dò hỏi đến cùng)\n• 难道: Chẳng lẽ (trong câu phản vấn)\n• 千万: Tuyệt đối, nhất thiết (dặn dò tha thiết)\n• 确实: Quả thực, đúng là\n• 只好: Đành phải\n• 差点儿: Suýt chút nữa.",
        "tips": "Sử dụng thành thạo các phó từ ngữ khí này là bước nhảy vọt về khẩu ngữ tự nhiên."
    },
    # 14
    {
        "category": "prepositions", "categoryName": "Giới từ căn cứ, thời gian, đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ thời gian, không gian: 自, 当, 由, 随着, 等",
        "structure": "自 (từ) | 当 (vào lúc) | 由 (khởi hành từ) | 随着 (cùng với sự...) | 等 (đợi đến khi)",
        "explanationVi": "• 自: Từ (văn viết: 自去年毕业 - kể từ khi tốt nghiệp).\n• 当: Khi, vào lúc (当遇到危险时 - khi gặp nguy hiểm).\n• 由: Khởi điểm hành trình (由北京出发 - xuất phát từ Bắc Kinh).\n• 随着: Đi đôi với, cùng với sự biến đổi (随着经济的发展).\n• 等: Đợi đến khi (等他到了 - đợi anh ấy đến).",
        "tips": "'随着...' là cấu trúc mở đầu cực kỳ đắt giá trong văn nghị luận."
    },
    # 15
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Giới từ dẫn xuất tân ngữ & tác nhân: 将, 由, 叫, 让",
        "structure": "Chủ ngữ + 将 + Tân ngữ + Động từ (như 把) | 由 + Người chịu trách nhiệm | 叫/让 (bị/được)",
        "explanationVi": "• 将 (jiāng): Trong văn viết thay thế cho chữ '把' (学校将举办比赛).\n• 由 (yóu): Chỉ người phụ trách thực hiện (由学生会负责).\n• 叫 / 让: Dùng trong câu bị động khẩu ngữ thay cho chữ '被' (叫小偷偷走了).",
        "tips": "Nhớ rằng '将' vừa là phó từ thời gian (sẽ) vừa là giới từ xử lý (bằng với 把)."
    },
    # 16
    {
        "category": "prepositions", "categoryName": "Giới từ căn cứ, thời gian, đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ chỉ nguyên nhân: 由于 (Yóuyú - Do, bởi vì)",
        "structure": "由于 + Nguyên nhân (thường là danh từ hoặc mệnh đề), Vế kết quả",
        "explanationVi": "Dẫn ra nguyên nhân hoặc lý do khách quan dẫn tới một tình huống (như 由于天气原因 - do thời tiết; 由于长期坚持 - nhờ kiên trì lâu dài).",
        "tips": "Trang trọng hơn '因为' và hay dùng trong văn bản, thông báo."
    },
    # 17
    {
        "category": "prepositions", "categoryName": "Giới từ căn cứ, thời gian, đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ chỉ đối tượng liên quan: 对于 & 与 (Đối với & Cùng với)",
        "structure": "对于 + Đối tượng, Chủ ngữ + Nhận định | 与 + Đối tượng + So sánh/Quan hệ",
        "explanationVi": "• 对于: Đối với vấn đề, người hoặc sự việc (thường đứng ở đầu câu: 对于初学者来说).\n• 与: Văn viết của '和', '跟' (与去年相比 - so với năm ngoái; 与各国朋友 - cùng bạn bè các nước).",
        "tips": "Tăng độ học thuật và chuẩn mực cho văn phong."
    },
    # 18
    {
        "category": "prepositions", "categoryName": "Giới từ căn cứ, thời gian, đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ vai trò & căn cứ: 作为, 按, 按照",
        "structure": "作为 + Thân phận/Tư cách | 按 / 按照 + Quy định/Yêu cầu + Động từ",
        "explanationVi": "• 作为: Với tư cách là, đóng vai trò là (作为一名学生).\n• 按: Theo, dựa vào (按时, 按重量).\n• 按照: Căn cứ theo, chiểu theo (按照规定, 按照说明书).",
        "tips": "'按照' nhấn mạnh việc tuân thủ triệt để theo tiêu chuẩn, quy chế đã có."
    },
    # 19
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Liên từ nối đẳng lập văn viết: 并, 而, 与",
        "structure": "Từ 1 + 并 / 而 / 与 + Từ 2",
        "explanationVi": "• 并: Và, đồng thời (thường nối hai động từ cùng hướng: 讨论并批准 - thảo luận và phê chuẩn).\n• 而: Nối hai tính từ bổ sung hoặc đối lập (便宜而美味 - rẻ mà ngon; 坚固而轻便).\n• 与: Và (văn viết nối hai danh từ: 老师与学生).",
        "tips": "Giúp tránh lặp lại từ '和' quá nhiều trong câu văn trang trọng."
    },
    # 20
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Liên từ nối phân câu HSK 4 (Phần 1): 此外, 而, 既然, 甚至, 不过, 并且",
        "structure": "Vế 1, + 此外 / 而 / 既然 / 甚至 / 不过 / 并且 + Vế 2",
        "explanationVi": "• 此外: Ngoài ra, bên cạnh đó.\n• 而: Mà lại, ngược lại (chỉ sự đối chiếu đối lập).\n• 既然...就...: Đã... thì...\n• 甚至: Thậm chí, ngay cả (mức độ tăng tiến tột cùng).\n• 不过: Có điều là, chỉ có điều (chuyển ngoặt nhẹ nhàng).\n• 并且: Hơn nữa, đồng thời còn.",
        "tips": "Nắm chắc các liên từ này giúp bạn liên kết đoạn văn mạch lạc, chặt chẽ."
    },
    # 21
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Liên từ nối phân câu HSK 4 (Phần 2): 不光, 不仅, 另外, 要是, 因此, 加上",
        "structure": "Vế 1, + Liên từ nối + Vế 2",
        "explanationVi": "• 不光 / 不仅: Không chỉ, chẳng những (không chỉ A mà còn B).\n• 另外: Ngoài ra, thêm vào đó.\n• 要是: Nếu như (khẩu ngữ của 如果).\n• 因此: Vì thế, do đó (kết quả tất yếu).\n• 加上: Cộng thêm vào đó, kết hợp thêm lý do.",
        "tips": "'加上' thường dùng để bổ sung thêm một yếu tố làm tăng thêm mức độ của kết quả."
    },
    # 22
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Trợ từ ngữ pháp đặc biệt: 等, 者, 之, 就是",
        "structure": "Danh từ + 等 (vân vân) | Động từ/Tính từ + 者 (người mà...) | A 之 B (của) | ...就是...",
        "explanationVi": "• 等: Vân vân, các loại (sau liệt kê).\n• 者 (zhě): Đại từ hóa chỉ người thực hiện (胜利者 - người chiến thắng; 有志者).\n• 之 (zhī): Tương đương '的' trong văn ngôn (三分之一 - một phần ba; 重中之重).\n• 就是: Chính là, biểu thị định nghĩa hoặc nhấn mạnh.",
        "tips": "'之' xuất hiện rất nhiều trong thành ngữ, phân số và các cụm từ trang trọng."
    },
    # 23
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Thán từ cảm thán & Đồng thuận: 啊 (À/Ôi) & 嗯 (Ừ/Vâng)",
        "structure": "Đứng ở đầu câu giao tiếp",
        "explanationVi": "• 啊 (à/ā): Biểu thị bừng hiểu, ngạc nhiên, cảm thán hoặc khen ngợi (啊，真新鲜！).\n• 嗯 (èn/ńg): Biểu thị sự đồng ý, tiếp nhận thông tin hoặc gật đầu ưng thuận.",
        "tips": "Thán từ phản ánh tự nhiên ngữ điệu sống động của người bản xứ."
    },
    # 24
    {
        "category": "phrases_idioms", "categoryName": "Cụm 4 chữ & Cấu trúc số lượng", "categoryIcon": "🏗️",
        "titleVi": "Cấu trúc mở rộng số lượng: Số từ + Tính từ + Lượng từ",
        "structure": "一 + 大 / 小 + Lượng từ + Danh từ",
        "explanationVi": "Chèn tính từ (thường là 大 hoặc 小) vào giữa số từ và lượng từ để tăng cường tính miêu tả kích thước, quy mô của sự vật (như 一大包 - một bọc to tướng; 一小盒 - một chiếc hộp bé xíu).",
        "tips": "Cách nói này sinh động hơn nhiều so với việc chỉ dùng lượng từ đơn thuần."
    },
    # 25
    {
        "category": "phrases_idioms", "categoryName": "Cụm 4 chữ & Cấu trúc số lượng", "categoryIcon": "🏗️",
        "titleVi": "Cụm bốn chữ khuôn mẫu: 一 A 一 B (一清二楚, 一模一样)",
        "structure": "一 + Từ A + 一/二 + Từ B",
        "explanationVi": "Thành ngữ và cụm 4 chữ cố định mang tính cô đọng cao:\n• 一清二楚: Rõ ràng rành mạch, rành rẽ từ đầu đến cuối.\n• 一模一样: Giống nhau y như đúc, không sai một ly.",
        "tips": "Dùng thành ngữ này giúp câu nói trở nên sang trọng và ấn tượng."
    },
    # 26
    {
        "category": "phrases_idioms", "categoryName": "Cụm 4 chữ & Cấu trúc số lượng", "categoryIcon": "🏗️",
        "titleVi": "Cụm bốn chữ phủ định kép: 无 A 无 B (无忧无虑, 无穷无尽)",
        "structure": "无 + Yếu tố A + 无 + Yếu tố B",
        "explanationVi": "Biểu thị trạng thái hoàn toàn không có, thoát khỏi sự ràng buộc:\n• 无忧无虑: Vô tư lự, không chút lo nghĩ muộn phiền.\n• 无穷无尽: Vô cùng vô tận, bất tận không bao giờ dứt.",
        "tips": "'无' mang nghĩa là không có (tương đương với 没有)."
    },
    # 27
    {
        "category": "phrases_idioms", "categoryName": "Cụm 4 chữ & Cấu trúc số lượng", "categoryIcon": "🏗️",
        "titleVi": "Cụm bốn chữ khẳng định sóng đôi: 有 A 有 B (有声有色, 有利有弊)",
        "structure": "有 + Yếu tố A + 有 + Yếu tố B",
        "explanationVi": "Biểu thị sự đầy đủ, phong phú về hai khía cạnh cùng tồn tại:\n• 有声有色: Sinh động, hấp dẫn, rôm rả đầy màu sắc.\n• 有利有弊: Có lợi mà cũng có hại (mặt tích cực và tiêu cực song hành).",
        "tips": "Cách dùng rất phổ biến khi phân tích vấn đề hai mặt trong bài thi viết."
    },
    # 28
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cụm thời gian kịp hay không kịp: 来得及 & 来不及",
        "structure": "Chủ ngữ + (还) 来得及 / 来不及 (+ Động từ)",
        "explanationVi": "• 来得及: Vẫn còn kịp thời gian để làm việc gì đó.\n• 来不及: Không kịp nữa rồi, thời gian quá gấp gáp.",
        "tips": "Hai cụm này có cấu trúc tương tự bổ ngữ khả năng nhưng đã trở thành cụm từ cố định."
    },
    # 29
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cụm khẩu ngữ nhiều vô kể: 有的是 (Thiếu gì / Đầy ra đấy)",
        "structure": "Chủ ngữ + 有的是 + Danh từ / Thời gian",
        "explanationVi": "Biểu thị số lượng vô cùng phong phú, dồi dào, không hề thiếu thốn (như 有的是时间 - thừa thời gian; 衣服有的是 - quần áo đầy ra đấy).",
        "tips": "Mang khẩu khí thoải mái, tự tin, khuyên người nghe không cần lo lắng."
    },
    # 30
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cụm khẩu ngữ suy đoán không chừng: 说不定 (Chưa biết chừng / Có khi)",
        "structure": "说不定 + Mệnh đề phán đoán khả năng",
        "explanationVi": "Biểu thị sự việc rất có khả năng sẽ xảy ra dù chưa ai dám khẳng định tuyệt đối (như 说不定待会儿下雨 - chưa biết chừng lát nữa mưa; 说不定就在抽屉里 - khéo ở trong ngăn kéo).",
        "tips": "Tương đương với '也许' nhưng mang phong vị khẩu ngữ tự nhiên hơn."
    },
    # 31
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cụm khẩu ngữ không... cho lắm: 不怎么",
        "structure": "Chủ ngữ + 不怎么 + Tính từ / Động từ tâm lý",
        "explanationVi": "Dùng để biểu thị mức độ không cao lắm, nói giảm nói tránh để giữ phép lịch sự (như 不怎么舒服 - không được khỏe cho lắm; 不怎么地道 - không chuẩn vị lắm).",
        "tips": "Nhẹ nhàng hơn so với cách nói phủ định thẳng thừng '不太'."
    },
    # 32
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cụm từ giải thích nghĩa rõ hơn: 就是说 / 这就是说 (Nói cách khác là)",
        "structure": "Mệnh đề 1，这就是说 / 就是说 + Mệnh đề giải thích hệ quả",
        "explanationVi": "Dùng để diễn giải lại nội dung vừa nêu bằng một cách hiểu khác dễ hiểu hơn hoặc rút ra kết luận logic từ vế trước.",
        "tips": "Rất hữu ích khi cần tóm lược ý hoặc kết luận luận điểm."
    },
    # 33
    {
        "category": "comparisons", "categoryName": "Câu so sánh (不如, 相比)", "categoryIcon": "⚖️",
        "titleVi": "Cấu trúc tăng tiến từng bước: 一 + Lượng từ + 比 + 一 + Lượng từ",
        "structure": "一 + Lượng từ + 比 + 一 + Lượng từ + Tính từ (一年比一年好, 一天比一天快)",
        "explanationVi": "Biểu thị sự biến đổi tăng dần về mức độ qua từng chu kỳ thời gian hoặc từng đơn vị sự vật ('cái sau hơn cái trước', 'ngày một... hơn').",
        "tips": "Thường dùng: 一年比一年, 一天比一天, 一代比一代."
    },
    # 34
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Khung phạm vi lĩnh vực: 在……方面 (Về phương diện...)",
        "structure": "在 + Lĩnh vực / Đề tài + 方面，Chủ ngữ + Vị ngữ",
        "explanationVi": "Xác định rõ ràng phạm vi, khía cạnh mà chủ ngữ phát huy tài năng hoặc sự việc diễn ra (như 在编程方面 - về mặt lập trình; 在文化教育方面).",
        "tips": "Cách diễn đạt vô cùng phổ biến trong văn phong công sở và học thuật."
    },
    # 35
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc mức độ khẩu ngữ: 够……的 (Đủ... rồi đấy / Khá là...)",
        "structure": "(可) 真够 + Tính từ + 的！",
        "explanationVi": "Dùng trong khẩu ngữ để nhấn mạnh mức độ đã đạt tới mức đáng kể, thường kèm theo sự cảm thán (như 够累的 - đủ mệt đứt hơi; 够受的 - đủ khổ sở).",
        "tips": "Thường dùng cho các cảm giác mệt mỏi, vất vả, khó chịu."
    },
    # 36
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc nêu ví dụ điển hình: 拿……来说 (Lấy... làm ví dụ mà nói)",
        "structure": "Luận điểm khái quát，拿 + Ví dụ cụ thể + 来说，Mô tả chi tiết",
        "explanationVi": "Dẫn ra một ví dụ cụ thể, tiêu biểu nhất để chứng minh cho nhận định phổ quát vừa nêu ở vế trước (như 拿深圳来说 - lấy Thâm Quyến làm ví dụ).",
        "tips": "Tương đương với '以...为例' trong văn viết."
    },
    # 37
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc chấm dứt dứt khoát: 再也不 / 没…… (Không bao giờ... nữa)",
        "structure": "Chủ ngữ + 再也不 / 没 + Động từ + 了",
        "explanationVi": "Nhấn mạnh quyết tâm hoặc sự thật rằng một hành vi sẽ không bao giờ còn tái diễn thêm một lần nào nữa trong tương lai (như 再也不敢粗心了; 再也没见过他).",
        "tips": "Dùng '不' cho tương lai và '没' cho thực tế từ quá khứ đến nay."
    },
    # 38
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc bế tắc bất khả: 怎么都 / 也 + 不 / 没…… (Làm cách nào cũng không)",
        "structure": "Chủ ngữ + 怎么也 / 都 + 不 / 没 + Động từ",
        "explanationVi": "Biểu thị dù đã dùng hết mọi cách thức, nỗ lực nhưng vẫn hoàn toàn không thể làm được hoặc không đạt được kết quả (như 怎么想也想不起来; 怎么都不肯答应).",
        "tips": "Nhấn mạnh sự bất lực hoặc sự kiên quyết từ chối của chủ thể."
    },
    # 39
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Cấu trúc mục đích hướng tới: 为了……而…… (Vì... mà...)",
        "structure": "Chủ ngữ + 为了 + Mục đích cao cả + 而 + Hành động nỗ lực",
        "explanationVi": "Liên kết chặt chẽ giữa mục đích lý tưởng và hành động phấn đấu cụ thể (như 为了追求真理而奉献 - vì mưu cầu chân lý mà cống hiến; 为了眼前利益而牺牲).",
        "tips": "Thường dùng trong các phát biểu trang trọng, khẩu hiệu, lý tưởng sống."
    },
    # 40
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc chừng nào hay chừng nấy: 动词 + 一X是一X",
        "structure": "能 + Động từ + 一 + Lượng từ + 是一 + Lượng từ (能省一分是一分, 能学一点是一点)",
        "explanationVi": "Biểu thị thái độ tích cực gom góp, làm được chừng nào quý chừng nấy, dù ít ỏi cũng không bỏ phí.",
        "tips": "Rất phổ biến trong khẩu ngữ thể hiện lối sống cần kiệm, hiếu học."
    },
    # 41
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc coi nhẹ sự việc: （没）有什么（好）X的 (Chẳng có gì đáng...)",
        "structure": "没什么好 + Động từ + 的 (没什么好感谢的, 没有什么大惊小怪的)",
        "explanationVi": "Dùng để an ủi hoặc gạt đi, khẳng định sự việc là bình thường, không có gì to tát đáng phải bận tâm hay lo lắng.",
        "tips": "Cách trả lời lịch sự khi được cảm ơn hoặc khuyên nhủ bạn bè."
    },
    # 42
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc rạch ròi phân minh: X 是 X，Y 是 Y (Việc nào ra việc nấy)",
        "structure": "Khái niệm A + 是 + A，Khái niệm B + 是 + B",
        "explanationVi": "Khẳng định hai phạm trù, hai sự việc là hoàn toàn tách biệt độc lập, không được phép nhập nhằng, lẫn lộn làm một (như 工作是工作，生活是生活; 公是公，私是私).",
        "tips": "Nguyên tắc sống văn minh, chuyên nghiệp."
    },
    # 43
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc bắt buộc bất kể ý muốn: X 也得 X，不 X 也得 X",
        "structure": "Chủ ngữ + Muốn/Thích + 也得 + Động từ，Không muốn + 也得 + Động từ",
        "explanationVi": "Nhấn mạnh tính cưỡng chế, bắt buộc phải thi hành của quy định hoặc hoàn cảnh, không có chỗ cho việc lựa chọn theo ý thích cá nhân.",
        "tips": "Mang ngữ khí kiên quyết, dứt khoát."
    },
    # 44
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc đơn giản hóa giải pháp: X 就是了 (Cứ... là được rồi)",
        "structure": "Động từ / Cụm động từ + 就是了",
        "explanationVi": "Khuyên bảo đối phương cứ yên tâm làm theo đúng cách đó là ổn thỏa, không cần phải đắn đo suy nghĩ phức tạp thêm (như 听他的就是了; 按照步骤操作就是了).",
        "tips": "Làm cho giải pháp trở nên đơn giản, giải tỏa căng thẳng."
    },
    # 45
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc mỉa mai, phê phán: 还 X 呢 (Thế mà cũng đòi...)",
        "structure": "Mệnh đề chê trách + 还 + Danh từ / Động từ + 呢！",
        "explanationVi": "Dùng trong khẩu ngữ để châm biếm, phê phán sự bất nhất giữa lời nói và việc làm hoặc giữa thân phận và năng lực thực tế (như 还大学生呢！; 还减肥呢！).",
        "tips": "Mang sắc thái mỉa mai, trêu đùa hoặc phàn nàn rõ rệt."
    },
    # 46
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc việc ai nấy làm: 你 X 你的吧 (Bạn cứ làm việc của bạn đi)",
        "structure": "Đại từ + Động từ + Đại từ 的吧 (你做你的吧, 你复习你的吧)",
        "explanationVi": "Bảo người đối thoại cứ tiếp tục chuyên tâm làm việc của riêng họ, không cần bận tâm hay phân tâm vì người khác.",
        "tips": "Thể hiện sự tôn trọng không gian làm việc của nhau."
    },
    # 47
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc tuân lệnh răm rắp: 让/叫你 X 你就 X",
        "structure": "让 / 叫你 + Động từ + 你就 + Động từ (+ 吧)！",
        "explanationVi": "Khuyên nhủ hoặc yêu cầu người nghe cứ ngoan ngoãn chấp nhận hoặc làm theo lời dặn, đừng từ chối hay suy nghĩ nhiều (như 让你拿着你就拿着).",
        "tips": "Rất phổ biến khi người thân, bạn bè ép nhận quà hoặc khuyên nghỉ ngơi."
    },
    # 48
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc nỗ lực bằng mọi giá: 说什么 / 怎么（着）也得 X",
        "structure": "说什么 / 怎么着 + 也得 + Động từ",
        "explanationVi": "Biểu thị quyết tâm dù có khó khăn hay bận rộn đến mức độ nào đi nữa thì tối thiểu cũng phải thực hiện cho bằng được hành động đó.",
        "tips": "Thể hiện lòng thành ý hoặc trách nhiệm bắt buộc phải chu toàn."
    },
    # 49
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc nhượng bộ chấp nhận nhược điểm: X 就 X（点儿）吧",
        "structure": "Tính từ + 就 + Tính từ + (点儿) 吧，只要 / 能……就行",
        "explanationVi": "Thừa nhận và chấp nhận một khuyết điểm nhỏ nào đó (như đắt một chút, phiền một chút) để đổi lấy ưu điểm lớn hơn đáng giá hơn (như 贵就贵点儿吧).",
        "tips": "Vế sau luôn đi kèm điều kiện chấp nhận được (只要...就好)."
    },
    # 50
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc công nhận sự thật trước khi chuyển ý: X 是 X",
        "structure": "Tính từ + 是 + Tính từ，不过 / 但是 + Vế sau",
        "explanationVi": "Công nhận tính chất đó là có thật (như cũ thì cũ thật, xa thì xa thật), nhưng phía sau sẽ chuyển ngoặt sang mặt tích cực khác (như 旧是旧，可骑起来挺快).",
        "tips": "Cách hành văn khách quan, đa chiều."
    },
    # 51
    {
        "category": "complements", "categoryName": "Bổ ngữ khả năng & Mức độ (死了, 不了)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ mức độ cực độ: 死了 & 厉害 (Đến chết đi được & Dữ dội)",
        "structure": "Tính từ / Động từ tâm lý + 死了 | Tính từ / Động từ + 得厉害",
        "explanationVi": "• 死了: Khẩu ngữ biểu thị mức độ đạt đến cực hạn không chịu nổi (脚疼死了, 乐死了).\n• 得厉害: Biểu thị mức độ nghiêm trọng, dữ dội của trạng thái (疼得厉害, 热得厉害).",
        "tips": "'死了' không chỉ dùng cho cảm xúc tiêu cực mà còn dùng cho cả niềm vui (乐死了, 高兴死了)."
    },
    # 52
    {
        "category": "complements", "categoryName": "Bổ ngữ khả năng & Mức độ (死了, 不了)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ khả năng hoàn tất & chịu đựng: 动词 + 得 / 不 + 了(liǎo)",
        "structure": "Động từ + 得了 (có thể kham nổi) | Động từ + 不了 (không thể kham nổi)",
        "explanationVi": "Biểu thị hành động có khả năng diễn ra, hoàn tất, chứa đựng hết hoặc chịu đựng nổi hay không:\n• 吃不了: không ăn hết nổi\n• 去不了: không đi được\n• 受不了: không chịu đựng nổi.",
        "tips": "Chữ '了' ở đây là động từ cổ, bắt buộc phát âm là 'liǎo', tuyệt đối không đọc là 'le'."
    },
    # 53
    {
        "category": "rhetorical_pivotal", "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "categoryIcon": "❓",
        "titleVi": "Câu phản vấn tăng cường ngữ khí chất vấn: 难道……吗？",
        "structure": "难道 + Chủ ngữ + Vị ngữ + 吗 / 呢？",
        "explanationVi": "Đặt '难道' ở đầu câu hoặc sau chủ ngữ để tạo câu hỏi ngược lại đầy tính chất vấn, khẳng định sự việc là phi lý hoặc không thể chấp nhận được (như 难道你打算放弃吗？).",
        "tips": "Giúp ngữ khí phản bác trở nên vô cùng sắc bén và thuyết phục."
    },
    # 54
    {
        "category": "rhetorical_pivotal", "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "categoryIcon": "❓",
        "titleVi": "Câu phản vấn dùng đại từ nghi vấn (谁, 哪里, 什么)",
        "structure": "谁能不... (ai mà chẳng...) | 哪里知道... (biết làm sao được) | 还有什么好... (còn gì mà...)",
        "explanationVi": "Dùng đại từ nghi vấn nhưng không để hỏi, mà để khẳng định ngược lại một chân lý rành rành (như 谁能不重视呢？ - ai mà chẳng coi trọng; 还有什么好争论的 - còn gì để tranh cãi nữa).",
        "tips": "Hình thức nghi vấn nhưng mang giá trị khẳng định tuyệt đối."
    },
    # 55
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” với động từ trùng điệp: 把 + Tân ngữ + 动词（+一/了）+动词",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + (一/了) + Động từ",
        "explanationVi": "Tác động xử lý lên tân ngữ trong một khoảng thời gian ngắn hoặc làm thử nghiệm nhẹ nhàng (như 把窗户开一开 - mở hé cửa sổ một chút; 把生词读一读 - đọc qua từ mới; 把苹果擦了擦 - lau quả táo).",
        "tips": "Làm cho ngữ khí mệnh lệnh trở nên mềm mỏng, tự nhiên."
    },
    # 56
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” kết hợp trợ từ động thái “了”: Hoàn tất xử lý",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + 了",
        "explanationVi": "Nhấn mạnh hành vi xử lý tác động lên tân ngữ đã được tiến hành xong xuôi trọn vẹn (như 把作业交了 - đã nộp bài tập rồi; 把西瓜切了 - đã bổ dưa hấu rồi).",
        "tips": "Động từ đi kèm phải là động từ đơn âm tiết có tác động cụ thể."
    },
    # 57
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” kèm bổ ngữ động lượng & thời lượng",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ (两遍 / 半个小时)",
        "explanationVi": "Nói rõ số lần tác động hoặc khoảng thời gian mà hành động xử lý tân ngữ đó đã diễn ra (như 把文章看两遍 - đọc bài viết hai lượt; 把语法讲了半个小时 - giảng ngữ pháp suốt nửa tiếng).",
        "tips": "Tân ngữ luôn đặt trước động từ, bổ ngữ số lượng luôn đặt sau động từ."
    },
    # 58
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” có trạng ngữ phương thức đứng trước động từ",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Trạng ngữ (认真 / 彻底 / 仔细) + Động từ",
        "explanationVi": "Chèn trạng ngữ miêu tả thái độ, cách thức hoặc mức độ kỹ càng ngay trước động từ chính (như 把问题认真讨论一下; 把房间彻底打扫一遍).",
        "tips": "Giúp câu chữ 把 miêu tả quá trình thực hiện một cách tỉ mỉ, chi tiết."
    },
    # 59
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Bị động (叫/让/被)", "categoryIcon": "⭐",
        "titleVi": "Câu bị động khẩu ngữ dùng “叫” & “让”",
        "structure": "Chủ ngữ + 叫 / 让 + Người gây ra + (给) + Động từ + Thành phần khác",
        "explanationVi": "Trong giao tiếp khẩu ngữ thân mật hàng ngày, người Trung Quốc rất hay dùng '叫' hoặc '让' để thay thế cho '被' trong câu bị động (như 蛋糕叫弟弟吃了; 那封信让他给弄坏了).",
        "tips": "Khác với '被', sau '叫' hoặc '让' BẮT BUỘC phải có tác nhân cụ thể, không được để trống."
    },
    # 60
    {
        "category": "rhetorical_pivotal", "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "categoryIcon": "❓",
        "titleVi": "Câu kiêm ngữ biểu thị thái độ khen chê: 表扬 & 批评",
        "structure": "Chủ ngữ + 表扬 / 批评 / 佩服 / 夸奖 + Tân ngữ 1 (Kiêm ngữ) + Hành vi",
        "explanationVi": "Động từ thứ nhất là động từ biểu lộ cảm xúc khen ngợi hoặc khiển trách, vế sau nói rõ lý do hoặc hành vi cụ thể (như 表扬他拾金不昧; 批评他经常旷课; 佩服他坚强).",
        "tips": "Một cấu trúc câu kiêm ngữ giàu tính giáo dục và nhận xét đạo đức."
    },
    # 61
    {
        "category": "rhetorical_pivotal", "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "categoryIcon": "❓",
        "titleVi": "Câu kiêm ngữ tôn xưng & bầu chọn: 选 / 认 / 公认",
        "structure": "Chủ ngữ + 选 / 收 / 公认 + Tân ngữ 1 + 做 / 当 / 为 + Chức vụ / Danh hiệu",
        "explanationVi": "Biểu thị sự bầu chọn, công nhận hoặc tiếp nhận ai đó giữ một vai trò, thân phận hay danh hiệu mới (như 选他当班长 - bầu cậu ấy làm lớp trưởng; 收他做助手 - nhận làm trợ lý; 公认为最优秀).",
        "tips": "Thường dùng trong môi trường đoàn thể, tổ chức, nhà trường."
    },
    # 62
    {
        "category": "rhetorical_pivotal", "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)", "categoryIcon": "❓",
        "titleVi": "Câu kiêm ngữ biểu thị quan hệ nguyên nhân - kết quả: 使 & 让",
        "structure": "Sự việc / Hoàn cảnh (Chủ ngữ) + 使 / 让 + Con người + Cảm thấy / Hành động",
        "explanationVi": "Chủ ngữ thường là một sự việc, tình huống khách quan tác động làm biến đổi tâm lý, tình cảm hoặc gây ra kết quả đối với con người (như 大雨使交通瘫痪 - mưa to khiến giao thông tê liệt; 热情让我感到温暖).",
        "tips": "'使' trang trọng hơn '让' và thường xuất hiện trong các bài văn nghị luận."
    },
    # 63
    {
        "category": "comparisons", "categoryName": "Câu so sánh (不如, 相比)", "categoryIcon": "⚖️",
        "titleVi": "Câu so sánh không bằng: A 不如 B（+ Tính từ）",
        "structure": "A + 不如 + B (+ Tính từ / Cụm động từ)",
        "explanationVi": "Biểu thị đối tượng A thua kém, không bằng đối tượng B về một mặt nào đó (như 坐车不如走路快 - đi xe không nhanh bằng đi bộ; 口语不如听力突出).",
        "tips": "Có thể dùng độc lập: 'A 不如 B' (A không tốt/hay bằng B)."
    },
    # 64
    {
        "category": "comparisons", "categoryName": "Câu so sánh (不如, 相比)", "categoryIcon": "⚖️",
        "titleVi": "Cấu trúc đối chiếu so sánh: 跟……相比 (So với... thì...)",
        "structure": "跟 / 与 + Đối tượng so sánh + 相比，Chủ ngữ + Vị ngữ nhận xét",
        "explanationVi": "Đặt ở đầu câu để tạo sự đối chiếu rõ nét giữa hiện tại với quá khứ hoặc giữa hai chủ thể (như 跟过去相比 - so với trước đây; 跟同龄人相比).",
        "tips": "Cấu trúc kinh điển trong các bài văn phân tích số liệu và biến đổi xã hội."
    },
    # 65
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Câu phủ định kép nhấn mạnh: 不得不 & 没有人不知",
        "structure": "Chủ ngữ + 不得不 + Động từ (buộc phải) | 没有人 + 不 + Động từ (ai ai cũng)",
        "explanationVi": "Sử dụng hai từ phủ định đi liền nhau để tạo ra ý nghĩa khẳng định mạnh mẽ, trang trọng và dứt khoát hơn nhiều so với câu khẳng định bình thường (như 不得不承认 - buộc phải thừa nhận; 没有人不知道 - không ai là không biết).",
        "tips": "Khẳng định bằng hai lần phủ định tạo sức nặng ghê gớm cho luận điểm."
    },
    # 66
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức bác bỏ - khẳng định: 不是……，而是…… (Không phải... mà là...)",
        "structure": "Chủ ngữ + 不是 + Khái niệm sai lệch, + 而是 + Bản chất đúng đắn",
        "explanationVi": "Bác bỏ một cách dứt khoát phỏng đoán hoặc quan niệm sai lầm ở vế đầu, đồng thời khẳng định bản chất sự thật chính xác ở vế sau (như 不是能力不够，而是太轻敌; 不是追求名利，而是充实).",
        "tips": "Dùng rất đắc địa khi giải thích sự hiểu lầm hoặc làm rõ nguyên nhân."
    },
    # 67
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức song hành phẩm chất: 既……，又/也…… (Vừa... lại vừa...)",
        "structure": "Chủ ngữ + 既 + Tính từ / Động từ 1, + 又 / 也 + Tính từ / Động từ 2",
        "explanationVi": "Khẳng định chủ thể đồng thời sở hữu hai phẩm chất, năng lực hoặc đặc tính tốt đẹp cùng một lúc (như 既坚固又轻便 - vừa vững chắc vừa nhẹ; 既喜欢文学，也热爱科技).",
        "tips": "'既...又...' mang văn phong trang nhã và chuẩn mực hơn '又...又...'."
    },
    # 68
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức phân tích hai mặt: 一方面……，另一方面……",
        "structure": "一方面 + Khía cạnh 1, + 另一方面 + Khía cạnh 2",
        "explanationVi": "Dùng để phân tích một vấn đề dưới hai góc nhìn bổ trợ nhau một cách toàn diện, khách quan (như 一方面增加收入，另一方面促进交流).",
        "tips": "Cấu trúc chuẩn mực hàng đầu trong các bài luận văn, thuyết trình."
    },
    # 69
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức trình tự thứ bậc: 首先……，其次…… (Trước hết... kế đến...)",
        "structure": "首先 + Luận điểm / Việc 1, + 其次 + Luận điểm / Việc 2",
        "explanationVi": "Sắp xếp các lý lẽ hoặc các bước tiến hành theo thứ tự ưu tiên quan trọng (như 首先查明原因，其次制定方案; 首先专业对口，其次英语流利).",
        "tips": "Nhấn mạnh tính thứ bậc ưu tiên hơn là trình tự thời gian thuần túy."
    },
    # 70
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức trình tự thời gian thao tác: 首先……，然后……",
        "structure": "首先 + Bước 1, + 然后 + Bước 2",
        "explanationVi": "Miêu tả các bước tiến hành một quy trình hoặc một kế hoạch hành động theo dòng thời gian trước sau (như 首先准备好仪器，然后操作; 首先确定路线，然后订酒店).",
        "tips": "Áp dụng khi hướng dẫn nấu ăn, làm thí nghiệm, vận hành máy móc."
    },
    # 71
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức hệ quả logic tất yếu: ……，于是…… (Thế là, do đó liền...)",
        "structure": "Tình huống ở vế 1, + 于是 + Hành động phản ứng ở vế 2",
        "explanationVi": "Biểu thị hành động ở vế sau phát sinh một cách nhanh chóng, tự nhiên như một phản ứng tất yếu trước tình huống nảy sinh ở vế trước (như 觉得很有道理，于是改变计划; 天黑了，于是决定收工).",
        "tips": "Khác với '所以' (thuần túy suy luận), '于是' nhấn mạnh hành động tiếp nối theo sau."
    },
    # 72
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức tăng tiến tột cùng: ……, 甚至…… (...thậm chí...)",
        "structure": "Vế thông thường, + 甚至 (连) + Chi tiết cực đoan + 也 / 都 + Vị ngữ",
        "explanationVi": "Đưa ra một ví dụ hoặc một chi tiết ở mức độ cực đoan vượt xa mức bình thường để làm nổi bật mức độ sâu sắc của vế trước (như 连室友都很少说话，甚至连吃饭都在看书).",
        "tips": "Làm tăng tính thuyết phục và hình tượng cho lời kể."
    },
    # 73
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức tăng tiến toàn diện: 不仅 / 不光……，还 / 而且……",
        "structure": "不仅 / 不光 + Vế 1, + 还 / 而且 + Vế 2",
        "explanationVi": "Không những có được điều kiện 1, mà còn đạt thêm được cả điều kiện 2 cao hơn (như 不仅精通外语，而且在计算机领域颇有建树; 不仅开阔视野，还增进团队精神).",
        "tips": "'不仅' mang sắc thái văn viết trang nhã hơn '不光'."
    },
    # 74
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức bổ sung thông tin: ……，并且…… (...hơn nữa còn...)",
        "structure": "Vế hành động 1, + 并且 + Vế hành động / kết quả 2",
        "explanationVi": "Liên kết hai hành động hoặc hai kết quả tích cực song hành nhằm tăng thêm thông tin khẳng định (như 按时完成，并且质量达标; 得到赞同，并且全校推广).",
        "tips": "'并且' nối tiếp hành động có quan hệ bổ sung tương hỗ."
    },
    # 75
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức so sánh đòn bẩy: 连……也/都……，……更……",
        "structure": "连 + Đối tượng tiêu biểu/mạnh mẽ + 也/都 + Vị ngữ，(Chủ thể yếu hơn) + 就更……了",
        "explanationVi": "Lấy đối tượng có ưu thế vượt trội ra làm đòn bẩy; nếu đối tượng đó còn không làm nổi thì đối tượng yếu kém hơn hiển nhiên càng không thể làm nổi (như 连专家都没把握，普通人就更难了).",
        "tips": "Cách lập luận tương phản cực kỳ đanh thép."
    },
    # 76
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức lựa chọn loại trừ duy nhất: 不是……，就是……",
        "structure": "Chủ ngữ + 不是 + Phương án A, + 就是 + Phương án B",
        "explanationVi": "Khẳng định tình huống chỉ có thể rơi vào MỘT TRONG HAI khả năng A hoặc B, không có khả năng thứ ba nào khác (như 不是在看书，就是在睡觉; 不是叹气就是抱怨).",
        "tips": "Thường dùng để miêu tả các thói quen bất biến, đơn điệu lặp đi lặp lại."
    },
    # 77
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức nhượng bộ đối lập mạnh: 尽管……，但是 / 可是……",
        "structure": "尽管 + Hoàn cảnh khó khăn thực tế, + 但是 / 可是 + Tinh thần / Kết quả",
        "explanationVi": "Thừa nhận hoàn cảnh khách quan đầy chông gai trở ngại ở vế đầu, nhưng khẳng định ý chí kiên định hoặc kết quả tích cực ở vế sau (như 尽管任务艰巨，但是依然充满信心; 尽管下大雪，依然坐满学生).",
        "tips": "'尽管' mang sắc thái nhượng bộ mạnh mẽ hơn '虽然'."
    },
    # 78
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức chuyển ngoặt trang trọng: ……，然而…… (Tuy nhiên, thế nhưng)",
        "structure": "Vế nhận định ban đầu, + 然而 + Vế thực tế chuyển biến",
        "explanationVi": "Từ nối chuyển ngoặt mang văn phong học thuật, trang trọng đỉnh cao (tương đương với 'however / yet' trong tiếng Anh), biểu thị sự thật xảy ra trái ngược với dự đoán (như 以为万无一失，然而意外还是发生了).",
        "tips": "Chỉ dùng trong văn viết hoặc diễn thuyết trang trọng."
    },
    # 79
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức chuyển ngoặt nhẹ nhàng: ……，不过…… (Có điều là, chỉ là)",
        "structure": "Vế khen ngợi / đồng tình, + 不过 + Chi tiết hạn chế nhỏ",
        "explanationVi": "Chuyển ý một cách mềm mại, khéo léo sau khi đã ghi nhận các mặt tốt ở vế trước (như 办法不错，不过实施起来有阻力; 电影很感人，不过结局有点悲伤).",
        "tips": "Giúp việc đưa ra lời nhận xét phản biện không bị gay gắt."
    },
    # 80
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Nhượng bộ rồi chuyển ý: ……X 是 X，就是 / 不过……",
        "structure": "Tính từ + 是 + Tính từ，就是 / 不过 + Điểm yếu",
        "explanationVi": "Thừa nhận mặt tốt của đối tượng trước rồi mới nhẹ nhàng chỉ ra điểm hạn chế nhỏ còn tồn tại (như 暖和是暖和，不过洗起来麻烦; 好是好，就是服务态度差).",
        "tips": "Khẩu ngữ giao tiếp hết sức lịch thiệp và tinh tế."
    },
    # 81
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức cảnh báo hậu quả: ……，否则…… (Nếu không thì...)",
        "structure": "Yêu cầu / Hành động bắt buộc, + 否则 + Hậu quả xấu phát sinh",
        "explanationVi": "Nêu rõ mệnh lệnh hoặc việc cần làm ngay ở vế trước, và cảnh báo hậu quả bất lợi sẽ xảy ra nếu không thực hiện ở vế sau (như 马上出发，否则赶不上; 保管好发票，否则无法退换).",
        "tips": "Tương đương với '不然' nhưng trang trọng hơn."
    },
    # 82
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức giả thiết điều kiện khẩu ngữ: 要是……，就……",
        "structure": "要是 + Vế giả định, + (Chủ ngữ) + 就 + Vế kết quả",
        "explanationVi": "Dùng trong khẩu ngữ hàng ngày để đặt ra tình huống giả định (như 要是你有空，我们就逛街; 要是遇到生词，就可以查词典).",
        "tips": "Mang giọng điệu thân mật hơn hẳn so với '如果'."
    },
    # 83
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức giả thiết ba vế hoàn chỉnh: 要是……，（就）……，否则……",
        "structure": "要是 + Điều kiện tốt, + 就 + Đạt kết quả, + 否则 + Hậu quả xấu",
        "explanationVi": "Cấu trúc câu phức ba vế hoàn chỉnh: vừa nêu điều kiện thuận lợi, vừa chỉ ra lợi ích đạt được, vừa cảnh báo hệ quả nếu không đáp ứng điều kiện đó.",
        "tips": "Cấu trúc lập luận rất chặt chẽ, thuyết phục."
    },
    # 84
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức vô điều kiện: 不管……，都 / 也…… (Bất kể... đều...)",
        "structure": "不管 + Điều kiện phức tạp / Dù thế nào, + (Chủ ngữ) + 都 / 也 + Kiên định kết quả",
        "explanationVi": "Khẳng định kết quả hoặc ý chí hành động hoàn toàn không bị lay chuyển bởi bất kỳ hoàn cảnh khó khăn nào (như 不管风吹雨打，都日夜守卫; 不管多曲折，也绝不放弃).",
        "tips": "Sau '不管' thường là từ nghi vấn hoặc cụm từ đối lập."
    },
    # 85
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức vô điều kiện trang trọng: 无论……，都 / 也……",
        "structure": "无论 + Tình huống biến đổi, + 都 / 也 + Vị ngữ",
        "explanationVi": "Phiên bản văn viết trang nhã, hùng hồn của '不管' (như 无论遇到什么风浪，都要走下去; 无论身在何方，都思念亲人).",
        "tips": "Thường dùng trong các tác phẩm văn học, bài phát biểu quan trọng."
    },
    # 86
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức nhân quả tiền đề: 既然……，就…… (Đã... thì...)",
        "structure": "既然 + Sự thật / Tiền đề đã xảy ra, + 就 + Quyết định hành động",
        "explanationVi": "Dựa trên một sự thật hiển nhiên hoặc một cam kết đã có từ trước để đưa ra hành động hoặc quyết định tất yếu tiếp theo (như 既然大家推选你，你就挑起重担; 既然承诺，就守信用).",
        "tips": "Nhấn mạnh tinh thần trách nhiệm trước một việc đã an bài."
    },
    # 87
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức nhân quả văn bản: （由于）……，因此…… (Do... vì vậy...)",
        "structure": "(由于) + Nguyên nhân khách quan, + 因此 + Kết quả phát sinh",
        "explanationVi": "Cặp liên từ chỉ quan hệ nhân quả trang trọng bậc nhất trong văn nghị luận, báo chí (như 由于前期准备充分，因此谈判顺利; 缺乏锻炼，因此跑几步就喘).",
        "tips": "Thay thế xuất sắc cho cặp '因为...所以...' trong các bài thi viết HSK."
    },
    # 88
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức chỉ mục đích tiện bề: ……，好…… (...để có thể...)",
        "structure": "Hành động chuẩn bị ở vế 1, + 好 + Tiện bề thực hiện mục đích ở vế 2",
        "explanationVi": "Từ '好' đứng đầu vế thứ hai để chỉ mục đích tạo điều kiện thuận lợi, dễ dàng cho việc thực hiện hành động theo sau (như 留详细地址，好方便寄材料; 早点去排队，好买到前排票).",
        "tips": "Tương đương với 'để tiện cho việc...' trong tiếng Việt."
    },
    # 89
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức nhượng bộ giả định: 即使……，也…… (Cho dù... cũng...)",
        "structure": "即使 + Giả định khó khăn tột cùng, + 也 + Vẫn kiên định làm",
        "explanationVi": "Giả thiết một tình huống ở mức độ xấu nhất, ngặt nghèo nhất, nhưng khẳng định kết quả hoặc thái độ vẫn tuyệt đối không thay đổi (như 即使遇到天大困难，也要保持乐观; 即使工作忙，也要陪孩子).",
        "tips": "'即使' đặt ra tình huống giả định chưa chắc xảy ra (khác với 虽然 nói về sự thật)."
    },
    # 90
    {
        "category": "compound_sentences", "categoryName": "Hệ thống câu phức liên từ", "categoryIcon": "🔗",
        "titleVi": "Câu phức nhượng bộ khẩu ngữ: 就是……，也…… (Dù là... cũng...)",
        "structure": "就是 + Tình huống khắc nghiệt, + 也 + Vẫn thực hiện",
        "explanationVi": "Là dạng khẩu ngữ thân thuộc tương đương với '即使...也...' (như 就是下大雨，也照常举行; 就是天塌下来，也有高个子顶着).",
        "tips": "Mang ngữ khí hào sảng, trấn an người đối thoại."
    },
    # 91
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Câu rút gọn không từ nối (紧缩复句 - Ngắn gọn dứt khoát)",
        "structure": "Hai vế câu ngắn ghép trực tiếp không cần liên từ rườm rà",
        "explanationVi": "Các cấu trúc câu ghép cực ngắn nhưng biểu đạt trọn vẹn mối quan hệ nhân quả hoặc điều kiện một cách súc tích (như 想吃什么就买什么; 不问不知道，一问吓一跳; 有话直说).",
        "tips": "Đỉnh cao của khẩu ngữ tự nhiên, nói gãy gọn như người bản xứ."
    },
    # 92
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định", "categoryIcon": "🌟",
        "titleVi": "Câu rút gọn phủ định - khẳng định: 不……也…… (Không... cũng...)",
        "structure": "不 + Động từ 1 + 也 + Động từ 2 / Hiểu rõ",
        "explanationVi": "Biểu thị sự việc đã quá rõ ràng hiển nhiên đến mức dù không cần làm hành động 1 thì kết quả 2 vẫn xảy ra (như 你不说我也猜得到; 不上报也瞒不住了).",
        "tips": "Nhấn mạnh tính tất yếu không thể che giấu."
    },
    # 93
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Ước lượng số lượng xấp xỉ bằng “来”: 数词 + 来 + 量词",
        "structure": "Số từ tròn (hoặc chục) + 来 + Lượng từ + Danh từ",
        "explanationVi": "Đặt '来' sau số từ (thường là 10, 20, 50, 100...) để biểu thị số lượng xấp xỉ tròm trèm trên dưới con số đó (như 五十来岁 - tròm trèm 50 tuổi; 百来个学生 - khoảng trăm học sinh; 十来米 - khoảng chừng 10 mét).",
        "tips": "Khác với '多' (chỉ lớn hơn), '来' chỉ khoảng chừng xấp xỉ cận kề (có thể hơn hoặc kém một chút)."
    },
    # 94
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Ước lượng số lượng bằng: 大约, 左右, 前后 (Khoảng chừng, xấp xỉ)",
        "structure": "大约 + Số từ | Số từ + 左右 (trên dưới) | Mốc thời gian + 前后 (khoảng ngày đó)",
        "explanationVi": "• 大约: Khoảng chừng (đứng trước số từ: 大约四个小时).\n• 左右: Trên dưới, khoảng (đứng sau cụm số lượng: 五百人左右).\n• 前后: Khoảng, xấp xỉ (đứng sau mốc ngày tháng: 九月一日前后).",
        "tips": "Cách dùng cực kỳ phổ biến trong đời sống và văn bản thống kê."
    },
    # 95
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Biểu đạt toán học: Số thập phân, Phân số, Phần trăm, Số lần gấp",
        "structure": "Số thập phân: A 点 B | Phân số: B 分之 A | Phần trăm: 百分之 X | Gấp bội: X 倍",
        "explanationVi": "• Số thập phân: 三十六点五 (36.5).\n• Phân số: Ba phần hai nói là '三分之二' (2/3) — mẫu số đọc trước '分之', tử số đọc sau.\n• Phần trăm: 百分之九十八 (98%), 百分之七十一 (71%).\n• Tăng gấp bội: 增长了一倍 (tăng gấp đôi).",
        "tips": "Quy tắc vàng phân số: Đọc MẪU SỐ trước, rồi đến '分之', rồi mới đọc TỬ SỐ."
    }
]

def main():
    enriched_list = []
    missing_translations = []

    for idx, raw in enumerate(RAW_ITEMS):
        meta = HSK4_META[idx]
        item_id = f"hsk4-g-{idx+1:02d}"

        examples = []
        for case in raw['cases']:
            case_clean = case.strip()
            if not case_clean:
                continue

            vn = TRANSLATIONS.get(case_clean)
            if not vn:
                missing_translations.append(case_clean)
                vn = case_clean

            py = clean_sentence_pinyin(case_clean)
            examples.append({
                "chinese": case_clean,
                "pinyin": py,
                "vietnamese": vn
            })

        enriched_item = {
            "id": item_id,
            "order": idx + 1,
            "category": meta["category"],
            "categoryName": meta["categoryName"],
            "categoryIcon": meta["categoryIcon"],
            "titleVi": meta["titleVi"],
            "titleZh": raw["content"] or raw["grammarDetail"],
            "grammarType": raw["grammarType"],
            "categoryType": raw["grammarDetail"],
            "grammarDetail": raw["grammarDetail"],
            "structure": meta["structure"],
            "explanationVi": meta["explanationVi"],
            "tips": meta["tips"],
            "examples": examples
        }
        enriched_list.append(enriched_item)

    if missing_translations:
        print(f"WARNING: {len(missing_translations)} missing translations in HSK 4:")
        for m in missing_translations:
            print(" -", m)
    else:
        print("PERFECT: 100% of sentences translated for HSK 4!")

    out_ts = """export interface GrammarExample {
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

export const HSK4_GRAMMAR_CATEGORIES: GrammarCategory[] = """ + json.dumps(HSK4_CATEGORIES, ensure_ascii=False, indent=2) + """;

export const HSK4_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = """ + json.dumps(enriched_list, ensure_ascii=False, indent=2) + """;
"""

    with open('src/data/hsk4GrammarData.ts', 'w', encoding='utf-8') as f:
        f.write(out_ts)

    print("Successfully created src/data/hsk4GrammarData.ts with", len(enriched_list), "points!")

if __name__ == '__main__':
    main()
