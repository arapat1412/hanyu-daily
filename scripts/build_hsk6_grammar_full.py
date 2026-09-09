# -*- coding: utf-8 -*-
"""
Script to generate src/data/hsk6GrammarData.ts with all 50 grammar points and 147 example sentences.
Fully localized with Vietnamese titles, formulas, explanations, tips, and translations.
"""
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def clean_sentence_pinyin(sentence):
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('玩儿', '§WANR§').replace('早点儿', '§ZAODIANR§')

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
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§ZAODIANR§', 'zǎodiǎnr')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

HSK6_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "cau-tu", "name": "Tiền tố & Hậu tố cấu từ (语素)", "icon": "🔬" },
    { "id": "tu-loai", "name": "Từ loại (Phó từ, Giới từ, Trợ từ...)", "icon": "🔤" },
    { "id": "khau-ngu", "name": "Khẩu ngữ & Cụm cố định", "icon": "💬" },
    { "id": "cau-phuc", "name": "Mẫu câu đặc biệt & Câu phức cao cấp", "icon": "🔗" },
]

# Complete translations for all 147 sentences in HSK6
TRANSLATIONS_HSK6 = {
    # 01
    "没想到他竟然超水平发挥，最终赢得了这场比赛。": "Không ngờ cậu ấy lại phát huy vượt bậc phong độ, cuối cùng đã giành chiến thắng trong trận đấu này.",
    "这位演员的表演总能展现出多层次的人物心理。": "Diễn xuất của diễn viên này luôn có thể lột tả được tâm lý nhân vật đa tầng lớp.",
    "父母过分关注孩子的一举一动，会对孩子的成长起到反作用。": "Cha mẹ quá mức để ý từng cử chỉ hành động của con cái sẽ gây tác dụng ngược đối với sự trưởng thành của trẻ.",
    "公司所有电脑系统都经过了严格的安全检查，确保无病毒运行。": "Toàn bộ hệ thống máy tính của công ty đều đã qua kiểm tra an ninh nghiêm ngặt, đảm bảo vận hành không có virus.",
    "新开发的商业区已经成为了城市亚中心，发展潜力巨大。": "Khu thương mại mới phát triển đã trở thành trung tâm phụ của thành phố, tiềm năng phát triển vô cùng to lớn.",
    "小张和女朋友小李已经订婚了，小李现在是张家的准媳妇。": "Tiểu Trương và bạn gái Tiểu Lý đã đính hôn rồi, Tiểu Lý giờ đây là nàng dâu tương lai của nhà họ Trương.",
    # 02
    "随着科技的发展，人们迎来了数字化时代。": "Cùng với sự phát triển của công nghệ, con người đã đón chào thời đại số hóa.",
    "本课程采用专题式的教学方法，每课介绍一个专题。": "Khóa học này áp dụng phương pháp giảng dạy theo dạng chuyên đề, mỗi bài giới thiệu một chuyên đề.",
    "这种鱼是观赏型的，很多人把它们当做宠物。": "Loài cá này thuộc kiểu hình làm cảnh, rất nhiều người nuôi chúng như thú cưng.",
    "这款产品具备很好的便捷性，使用十分方便。": "Dòng sản phẩm này sở hữu tính tiện lợi rất cao, sử dụng vô cùng dễ dàng.",
    # 03
    "这是人家的东西，咱们不能随便拿。": "Đây là đồ đạc của người ta, chúng mình không được tùy tiện lấy đâu.",
    "今天多亏了老张来帮忙，我们得好好感谢人家。": "Hôm nay may nhờ có bác Trương tới giúp, chúng ta phải cảm ơn người ta cho đàng hoàng.",
    # 04
    "这串项链是丈夫送给我的订婚礼物。": "Chuỗi dây chuyền này là món quà đính hôn chồng tặng cho tôi.",
    "你试试往碗里加几滴醋，说不定味道会更好。": "Bạn thử nhỏ vài giọt giấm vào bát xem, biết đâu vị lại ngon hơn đấy.",
    "下班回家的路上，妈妈买了几枝玫瑰花。": "Trên đường tan làm về nhà, mẹ đã mua vài cành hoa hồng.",
    "听了他的话，我心里就像打开了一扇窗，突然亮了。": "Nghe lời anh ấy nói, trong lòng tôi như vừa mở ra một cánh cửa sổ, bỗng chốc bừng sáng.",
    "你把桌子上那卷胶带递给我一下。": "Cậu đưa giúp tôi cuộn băng dính trên bàn với.",
    "这套书分为上、中、下三卷。": "Bộ sách này được chia thành ba tập: thượng, trung và hạ.",
    # 05
    "经过一番激烈的争论，我们最终达成了一致。": "Trải qua một hồi tranh luận gay gắt, chúng tôi cuối cùng cũng đã đạt được sự thống nhất.",
    # 06
    "听说我获得了奖学金，同学们都特羡慕。": "Nghe tin tôi nhận được học bổng, các bạn học đều cực kỳ ngưỡng mộ.",
    "相声是一种幽默的艺术，特有意思。": "Tấu nói là một môn nghệ thuật hài hước, đặc biệt thú vị.",
    "改进后的仪器操作异常便捷。": "Thiết bị sau khi cải tiến thao tác hết sức tiện lợi.",
    "今年夏天异常炎热。": "Mùa hè năm nay nóng nực khác thường.",
    "这本小说较为客观地反映了当时的社会现实。": "Cuốn tiểu thuyết này đã phản ánh khá khách quan hiện thực xã hội thời bấy giờ.",
    "专家们一致认为这项研究的设计较为合理。": "Các chuyên gia nhất trí cho rằng thiết kế của công trình nghiên cứu này tương đối hợp lý.",
    # 07
    "我们净忙着说话，甚至忘了给客人倒茶。": "Chúng tôi mải miết mải nói chuyện suốt, đến nỗi quên cả rót trà cho khách.",
    "那位老师的书房里净是外文书。": "Trong phòng sách của thầy giáo kia toàn là sách tiếng nước ngoài.",
    "我明天在大厅等你，咱们一同出发。": "Ngày mai tôi đợi bạn ở sảnh, chúng mình cùng nhau xuất phát.",
    "人们聚集在广场上，一同迎接新年的到来。": "Mọi người tụ tập trên quảng trường, cùng nhau đón chào năm mới đến.",
    "公园里散步的老年人大都是附近的居民。": "Các cụ già đi dạo trong công viên phần lớn đều là cư dân sống gần đó.",
    "假期时，这里的人们大都选择去海边度假。": "Vào kỳ nghỉ, người dân nơi đây hầu hết đều chọn đi biển nghỉ dưỡng.",
    # 08
    "他一时紧张，忘记要说什么了。": "Anh ấy nhất thời căng thẳng, quên khuấy mất định nói điều gì.",
    "面对眼前的比赛结果，人们一时难以接受。": "Đối diện với kết quả trận đấu trước mắt, mọi người trong chốc lát khó lòng chấp nhận nổi.",
    "她不时看看手机，等待着朋友的消息。": "Cô ấy thỉnh thoảng lại nhìn vào điện thoại, thấp thỏm chờ tin nhắn của bạn bè.",
    "隔壁房间不时传来一阵笑声。": "Phòng bên cạnh chốc chốc lại truyền tới một tràng cười.",
    "实验失败了，但他们没有放弃，仍旧坚持干下去。": "Thí nghiệm thất bại rồi, nhưng họ không hề bỏ cuộc mà vẫn tiếp tục kiên trì làm tiếp.",
    "他很努力地练习发音，但仍旧说得不太标准。": "Cậu ấy rất nỗ lực luyện phát âm, nhưng nói ra vẫn chưa được chuẩn cho lắm.",
    "他们带着孩子又跑了几家医院，但依旧没有得到明确的诊断。": "Họ dẫn con chạy thêm mấy bệnh viện nữa, nhưng vẫn như cũ chưa nhận được chẩn đoán rõ ràng.",
    "二十多年过去了，她依旧那么美丽动人。": "Hơn hai mươi năm trôi qua rồi, cô ấy vẫn cứ kiều diễm say đắm lòng người như xưa.",
    "作为老师，她一向严格要求自己的学生。": "Với tư cách là giáo viên, cô ấy từ trước đến nay luôn yêu cầu nghiêm khắc đối với học trò của mình.",
    "他一向喜欢跟朋友开玩笑。": "Anh ấy trước giờ luôn thích trêu đùa với bạn bè.",
    # 09
    "出发前老师一再提醒大家带上护照，可我还是忘了。": "Trước khi xuất phát thầy giáo năm lần bảy lượt dặn mọi người mang theo hộ chiếu, vậy mà tôi vẫn quên mất.",
    "王经理一再强调这个项目对于公司至关重要。": "Giám đốc Vương liên tục nhấn mạnh dự án này có ý nghĩa sống còn đối với công ty.",
    "他再三考虑要不要放弃工作的机会。": "Anh ấy suy tính đắn đo mãi xem có nên từ bỏ cơ hội việc làm hay không.",
    "小张再三向领导解释他上班迟到的原因。": "Tiểu Trương hết lần này đến lần khác giải thích với lãnh đạo nguyên do mình đi làm trễ.",
    # 10
    "听到这可怕的消息，我的心不禁凉了。": "Nghe thấy hung tin đáng sợ này, lòng tôi bất giác nguội ngắt.",
    "听完她的演讲，大家不禁鼓起掌来。": "Nghe xong bài diễn thuyết của cô ấy, mọi người không kìm được đồng loạt vỗ tay.",
    "上课铃一响，学生们就赶忙跑回了教室。": "Chuông vào lớp vừa reo, học sinh liền lật đật chạy ùa về phòng học.",
    "听到有人求助，他赶忙过去帮忙。": "Nghe thấy có người cầu cứu, anh ấy vội vàng chạy qua giúp đỡ ngay.",
    "回国当天，朋友特地开车把我送到了机场。": "Hôm tôi về nước, bạn bè đã cất công lái xe đưa tôi ra tận sân bay.",
    "为了掌握实际情况，政府特地组织专家团队到当地开展调查。": "Để nắm bắt tình hình thực tế, chính quyền đã đặc biệt thành lập đoàn chuyên gia đến địa phương điều tra.",
    "这些书是我特意请朋友从国外买回来的。": "Những cuốn sách này là do tôi cố ý nhờ bạn mua từ nước ngoài mang về đấy.",
    "我特意为您准备了一份礼物，请您一定收下。": "Tôi đã đặc biệt chuẩn bị một món quà dành riêng cho ngài, xin ngài nhất định nhận cho.",
    "小女孩偷偷把糖装进了口袋。": "Bé gái lén lút nhét chiếc kẹo vào túi áo.",
    "他偷偷把那件事告诉了老师。": "Cậu ấy lén mách chuyện đó cho thầy giáo biết.",
    # 11
    "她最近工作很忙，未必有时间回老家。": "Dạo này cô ấy công việc bận rộn, chưa chắc đã có thời gian về quê.",
    "有钱就一定会幸福吗？那也未必。": "Có tiền thì nhất định sẽ hạnh phúc sao? Điều đó cũng chưa hẳn đâu.",
    # 12
    "婚礼那天恰好是新娘的生日。": "Ngày cưới hôm đó vừa đúng vào ngày sinh nhật của cô dâu.",
    "下周六我恰好有时间，咱们可以一起去爬山。": "Thứ Bảy tuần tới tôi vừa khéo có thời gian rảnh, chúng mình có thể cùng nhau đi leo núi.",
    "你计划得倒是很好，可是你能做到吗？": "Kế hoạch của cậu nghe chừng thì hay đấy, nhưng cậu có thực hiện nổi không?",
    "这部漫画的内容一般，绘画风格倒是生动有趣。": "Nội dung cuốn truyện tranh này bình thường thôi, nhưng phong cách vẽ thì quả thật sinh động thú vị.",
    "既然双方不愿意合作，干脆就不要浪费时间再谈了。": "Một khi hai bên đã không muốn hợp tác thì dứt khoát khỏi cần tốn thời gian đàm phán thêm nữa.",
    "你今天这么累，干脆早点休息，明天再工作吧！": "Hôm nay bạn mệt mỏi như thế, dứt khoát chi bằng nghỉ ngơi sớm đi, mai hãy làm tiếp!",
    "你明明不胖，为什么总嫌自己胖呢？": "Cậu rõ ràng không hề béo, sao cứ luôn miệng chê mình mập thế?",
    "明明是他做错了事，凭什么让我向他道歉？": "Rõ ràng là anh ta làm sai chuyện, dựa vào đâu mà bắt tôi phải xin lỗi anh ta chứ?",
    "我们在路边等了很久，总算有位好心的司机让我们搭车回到了学校。": "Chúng tôi chờ bên vệ đường rất lâu, rốt cuộc cũng có một bác tài tốt bụng cho quá giang về trường.",
    "连着下了一周小雨，今天总算迎来了一个晴天。": "Mưa phùn rả rích suốt cả tuần liền, hôm nay cuối cùng cũng đón được một ngày nắng ráo.",
    # 13
    "这所学校成立于1950年。": "Ngôi trường này được thành lập vào năm 1950.",
    "他已于上月离京。": "Anh ấy đã rời Bắc Kinh vào tháng trước.",
    # 14
    "刚来中国时，我既听不懂也说不清楚，至于写作和阅读，就更不行了。": "Hồi mới sang Trung Quốc, tôi vừa nghe không hiểu vừa nói chẳng rõ, còn như viết lách và đọc hiểu thì lại càng tệ hơn.",
    "新产品已经开始生产了，至于销售时间和价格，现在还不能确定。": "Sản phẩm mới đã bắt đầu đưa vào sản xuất, còn về thời điểm mở bán và giá cả thì hiện vẫn chưa thể ấn định.",
    # 15
    "因天气原因，运动会延期至周六举行。": "Do nguyên nhân thời tiết, đại hội thể thao hoãn lại đến thứ Bảy tổ chức.",
    "他因迟到而错过了这次面试。": "Anh ấy vì đến muộn mà đã bỏ lỡ buổi phỏng vấn lần này.",
    # 16
    "除特殊情况外，不得随意离开工作岗位。": "Trừ trường hợp đặc biệt ra, không được tùy tiện rời bỏ vị trí công tác.",
    "除申请表以外，申请人还应提交一份个人简历。": "Ngoài đơn đăng ký ra, người nộp đơn còn cần phải nộp kèm một bản sơ yếu lý lịch cá nhân.",
    # 17
    "我本来打算在房间看书，不料突然停电了，我只好去图书馆。": "Tôi vốn định ở trong phòng đọc sách, chẳng ngờ bỗng dưng cúp điện, tôi đành phải sang thư viện.",
    "我以为两个孩子能一起好好玩儿，不料他俩刚一见面就吵起来了。": "Tôi cứ ngỡ hai đứa trẻ có thể chơi ngoan cùng nhau, nào ngờ chúng vừa chạm mặt là đã cãi nhau ỏm tỏi.",
    # 18
    "这部电影是根据人们所熟悉的故事改编的。": "Bộ phim này được cải biên dựa trên câu chuyện mà mọi người đều vốn rất quen thuộc.",
    "你所了解的情况只是一小部分。": "Những tình hình mà bạn nắm bắt được chỉ là một phần nhỏ mà thôi.",
    # 19
    "我昨天就已经把作业交给老师啦！": "Hôm qua tớ đã nộp bài tập cho thầy giáo rồi mà nhe!",
    "这些文件对于公司至关重要，你可千万别弄丢啦！": "Các tài liệu này cực kỳ quan trọng đối với công ty, cậu tuyệt đối đừng làm mất đấy nhé!",
    "我只是开个玩笑，你不要太认真嘛。": "Tôi chỉ đùa tí thôi, bạn đừng quá nghiêm trọng hóa vấn đề thế chứ.",
    "要是觉得累了，就走慢一点儿嘛。": "Nếu thấy mệt thì cứ đi chậm lại một chút đi nào.",
    # 20
    "孩子们假期不回来也好，我可以好好休息休息了。": "Con cái nghỉ lễ không về cũng tốt, tôi có thể tranh thủ nghỉ ngơi dưỡng sức một chút.",
    "手机也好，电脑也好，长时间使用都会造成眼睛疲劳。": "Bất kể là điện thoại hay máy tính, sử dụng trong thời gian dài đều sẽ gây mỏi mắt.",
    # 21
    "小孩子总是喜欢拉着父母问这问那。": "Trẻ con lúc nào cũng thích túm lấy bố mẹ hỏi này hỏi nọ.",
    "既然决定了就大胆去做吧，不要总是想这想那。": "Một khi đã quyết định thì hãy mạnh dạn làm đi, đừng có tối ngày nghĩ đông nghĩ tây mãi thế.",
    # 22
    "天还没亮，他就醒了，躺在床上左思右想，怎么也睡不着。": "Trời còn chưa sáng anh ấy đã thức giấc, nằm trên giường trằn trọc nghĩ tới nghĩ lui, làm sao cũng chẳng ngủ lại được.",
    "她在商场里左挑右选，始终没买到一件满意的衣服。": "Cô ấy ở trong trung tâm thương mại lựa lên chọn xuống, rốt cuộc vẫn chưa mua được bộ quần áo ưng ý.",
    # 23
    "我好不容易才获得这次面试机会，一定不会轻易放弃。": "Tôi khó khăn lắm mới giành được cơ hội phỏng vấn lần này, nhất định sẽ không dễ dàng từ bỏ.",
    "假期好不容易可以休息一下，你怎么还要去公司加班？": "Kỳ nghỉ vất vả lắm mới được nghỉ ngơi một chút, sao cậu lại còn đến công ty tăng ca?",
    # 24
    "假如去那家公司工作能为你提供更多的发展空间，那倒也是个不错的选择。": "Nếu như sang làm việc ở công ty đó có thể mở ra thêm nhiều không gian phát triển cho bạn, thì đó âu cũng là một sự lựa chọn không tồi.",
    "要是你能从失败中吸取教训，那倒也是件值得高兴的事。": "Nếu cậu có thể rút ra bài học từ thất bại, thì âu đó cũng là một điều đáng mừng.",
    # 25
    "这些旧衣服扔掉算了，反正也不会再穿了。": "Đống quần áo cũ này vứt phéng đi cho xong, đằng nào cũng chẳng mặc lại nữa.",
    "雪下得这么大，估计不会有客人来了，干脆早点儿关门算了。": "Tuyết rơi dày thế này ước chừng chẳng có khách tới đâu, chi bằng dẹp tiệm đóng cửa sớm cho rảnh nợ.",
    # 26
    "得了，别再想了，结果不可能改变了。": "Thôi đi, đừng nghĩ ngợi vẩn vơ nữa, kết quả không thể thay đổi được đâu.",
    "你这么喜欢这本书，干脆送给你得了。": "Cậu thích cuốn sách này như vậy, chi bằng tặng luôn cho cậu cho rồi.",
    # 27
    "我们左一句、右一句地安慰，她才终于不哭了。": "Chúng tôi đứa một câu người một câu ra sức an ủi, cô ấy mới rốt cuộc ngừng khóc.",
    "大家你一言，我一语，很快就商量出了解决的办法。": "Mọi người anh một câu tôi một lời, rất nhanh đã bàn bạc ra được cách giải quyết.",
    # 28
    "房间里的衣服东一件，西一件，扔得哪儿都是。": "Quần áo trong phòng chiếc thì vứt góc này cái thì quăng góc nọ, quăng bừa bãi khắp mọi nơi.",
    "最近他东一本，西一本地看了不少书。": "Dạo này anh ấy vớ được quyển nào đọc quyển nấy, đọc qua không ít sách.",
    # 29
    "到目前为止，双方已经达成了初步的合作。": "Tính đến thời điểm hiện tại, hai bên đã đạt được thỏa thuận hợp tác bước đầu.",
    "他把产品设计改了很多遍，一直到客户满意为止。": "Anh ấy sửa đổi thiết kế sản phẩm rất nhiều lần, mãi cho đến khi khách hàng hài lòng mới thôi.",
    # 30
    "我把你当作好朋友，没想到你竟然骗到我头上来了。": "Tôi coi cậu là bạn tốt, không ngờ cậu dám lừa gạt đến tận đầu tôi!",
    "问题不是我造成的，怎么怪到我头上来了？": "Rắc rối đâu phải do tôi gây ra, sao lại đổ vấy trách nhiệm lên đầu tôi thế chứ?",
    # 31
    "不学不知道，一学才知道汉字如此有魅力。": "Không học thì không biết, vừa học mới hay chữ Hán lại có sức quyến rũ đến như thế.",
    "这茶不尝不知道，一尝就喜欢上了。": "Chén trà này không nếm thử thì không biết, vừa nhấp một ngụm là đã mê ngay.",
    # 32
    "好你个老张，原来是你在背后说我坏话！": "Hay cho lão Trương nhà anh nhé, hóa ra là anh nói xấu sau lưng tôi!",
    "好你个骗子，赶紧把钱还给我，否则我就报警。": "Hay cho tên lừa đảo nhà ngươi, mau trả tiền lại cho ta, bằng không ta sẽ báo cảnh sát.",
    # 33
    "早不来，晚不来，我正要出门你来了。": "Sớm không đến, muộn chẳng đến, đúng lúc tôi đang sửa soạn ra ngoài thì cậu lại mò tới.",
    "早也不下雨，晚也不下雨，比赛刚一开始就下起来了。": "Sớm không mưa, muộn chẳng mưa, trận đấu vừa mới bắt đầu thì trời lại đổ mưa rào.",
    # 34
    "瞧把他兴奋得，简直像个孩子一样。": "Xem kìa, trông anh ấy phấn khích đến mức quả thật chẳng khác gì một đứa con nít.",
    "看把你笑得，腰都直不起来了。": "Xem cậu cười kìa, cười đến mức không gập nổi cả lưng lại rồi.",
    # 35
    "你为什么放着自己的车不开，跑去借别人的车？": "Tại sao anh lại bỏ mặc xe của mình không lái, chạy đi mượn xe của người khác?",
    "他放着孩子不管，整天跑出去玩儿。": "Anh ta bỏ mặc con cái không ngó ngàng, suốt ngày chỉ biết chạy ra ngoài đàn đúm chơi bời.",
    # 36
    "他已经是大人了，走了就走了，有什么好担心的？": "Nó đã là người lớn rồi, đi thì đi thôi, có gì đáng phải lo lắng đâu chứ?",
    "东西丢了就丢了，没有什么好可惜的。": "Đồ vật mất thì cũng mất rồi, chẳng có gì phải tiếc nuối cả.",
    # 37
    "这也不好吃，那也不好吃，你干脆饿着吧。": "Cái này cũng chê dở, cái kia cũng chê không ngon, vậy cậu dứt khoát nhịn đói luôn đi.",
    "那也不喜欢，这也不满意，你到底想找什么样的工作？": "Cái đó cũng không ưng, việc này cũng bất mãn, rốt cuộc cậu muốn tìm công việc như thế nào?",
    # 38
    "打归打，骂归骂，父母永远是最疼你的人。": "Đánh thì đánh, mắng thì mắng, cha mẹ vĩnh viễn vẫn là những người thương yêu con nhất.",
    "计划归计划，行动归行动，二者并不完全一样。": "Kế hoạch là chuyện kế hoạch, hành động là việc hành động, hai điều đó không hoàn toàn đồng nhất.",
    # 39
    "我跟你开玩笑呢！看你吓的！": "Tôi đang đùa với bạn thôi mà! Xem bạn bị dọa sợ kìa!",
    "不就是得了奖学金吗？瞧他得意的！": "Chẳng qua chỉ là giành được chút học bổng thôi mà? Xem bộ dạng đắc ý của hắn kìa!",
    # 40
    "我恨透了那些不诚信的商家。": "Tôi căm ghét đến tận xương tủy những phường thương lái gian dối làm ăn phi pháp.",
    "大雨把他身上的衣服全都淋透了。": "Cơn mưa to dầm ướt sũng toàn bộ quần áo trên người anh ấy.",
    # 41
    "阳光把大地染成了红色。": "Ánh nắng nhuộm đỏ rực cả mặt đất bao la.",
    "音乐声把游客都吸引过去了。": "Tiếng nhạc du dương đã thu hút tất cả du khách đổ dồn về phía đó.",
    # 42
    "孩子把妈妈气得睡不着觉。": "Đứa con làm cho mẹ tức giận đến mức mất ăn mất ngủ.",
    "她讲述的故事把大家感动哭了。": "Câu chuyện do cô ấy kể lại đã khiến cho mọi người xúc động rơi nước mắt.",
    # 43
    "最近产品价格不太稳定，一时上升一时下降。": "Dạo này giá cả sản phẩm không được ổn định, lúc thì tăng lúc thì lại giảm.",
    "这段时间天气变化快，一时冷一时热。": "Khoảng thời gian này thời tiết thay đổi chóng mặt, lúc thì rét lúc lại oi nồng.",
    # 44
    "我平常要么点外卖，要么自己做，很少去食堂吃。": "Ngày thường tôi hoặc là gọi đồ ăn ngoài, hoặc là tự nấu nướng, rất ít khi ra căng tin ăn.",
    "那家饭馆的菜要么太咸，要么太辣，我都不爱吃。": "Món ăn ở quán cơm đó hoặc là quá mặn, hoặc là quá cay, tôi đều chẳng thích ăn chút nào.",
    # 45
    "比赛虽未取得胜利，但我们收获了宝贵的经验。": "Cuộc thi tuy chưa giành được thắng lợi, nhưng chúng tôi đã gặt hái được những kinh nghiệm vô giá.",
    "这道题虽有难度，可做出来的同学不在少数。": "Bài toán này tuy có độ khó nhất định, song số học sinh giải ra được lại không hề ít.",
    "文章虽短，读后却使人充满力量。": "Bài văn tuy ngắn ngủi, nhưng đọc xong lại khiến người ta tràn trề sức mạnh.",
    "她心里虽不喜欢，也坚持来上班了。": "Trong lòng cô ấy tuy chẳng mấy thích thú, nhưng vẫn kiên trì đi làm.",
    # 46
    "凡是有机会，他都会积极争取。": "Hễ phàm có cơ hội là anh ấy đều sẽ tích cực tranh thủ.",
    "凡是错误的行为，我们都应该纠正。": "Hễ phàm là hành vi sai trái, chúng ta đều phải kiên quyết uốn nắn sửa đổi.",
    # 47
    "除非你亲自邀请，他才有可能同意参加。": "Trừ phi đích thân bạn mở lời mời, anh ấy mới có khả năng đồng ý tham dự.",
    "除非是紧急情况，我才会向他求助。": "Chỉ trừ khi rơi vào tình thế khẩn cấp, tôi mới tìm đến anh ấy nhờ giúp đỡ.",
    # 48
    "除非他承认错误并向我道歉，否则我不会原谅他。": "Trừ phi anh ta nhận lỗi và xin lỗi tôi, bằng không tôi sẽ không tha thứ cho anh ta đâu.",
    "除非你说清楚是什么事情，不然我不可能同意帮忙。": "Trừ phi bạn nói rõ rốt cuộc là có chuyện gì, nếu không tôi không thể nhận lời giúp.",
    # 49
    "就算再累，我也要坚持完成任务。": "Cho dù có mệt mỏi đến đâu đi nữa, tôi cũng phải kiên quyết hoàn thành nhiệm vụ.",
    "就算他做错了，你也要注意教育方法。": "Dẫu cho cậu ấy có làm sai, bạn cũng cần phải chú ý đến phương pháp dạy bảo.",
    # 50
    "请留下您的联系方式，以便日后联系。": "Xin vui lòng để lại phương thức liên lạc của quý khách để tiện việc liên hệ về sau.",
    "当地政府计划调整地铁的发车时间，以便更多的乘客能够乘坐公共交通。": "Chính quyền sở tại dự kiến điều chỉnh lịch xuất bến của tàu điện ngầm nhằm để nhiều hành khách hơn có thể tiếp cận phương tiện giao thông công cộng.",
}

METADATA_HSK6 = [
    {
        "order": 1,
        "vietnameseTitle": "Các tiền tố cấu từ cao cấp: 超—, 多—, 反—, 无—, 亚—, 准—",
        "structure": "Tiền tố + Từ căn (Danh từ / Tính từ / Động từ)",
        "category": "cau-tu",
        "explanation": "Hệ thống tiền tố tạo từ phái sinh hiện đại trong HSK 6: 1) '超—': siêu, vượt quá (超水平 - vượt phong độ, 超音速 - siêu âm thanh); 2) '多—': đa, nhiều khía cạnh (多层次 - đa tầng lớp, 多媒体 - đa phương tiện); 3) '反—': phản, ngược lại, chống (反作用 - phản tác dụng, 反方向); 4) '无—': vô, không có (无病毒 - không có virus, 无条件 - vô điều kiện); 5) '亚—': á, thứ cận, thứ cấp (亚中心 - trung tâm phụ/á trung tâm, 亚健康 - bán khỏe mạnh/tiền bệnh lý); 6) '准—': chuẩn bị thành, tương lai (准媳妇 - con dâu tương lai, 准妈妈 - người sắp làm mẹ).",
        "tip": "Nắm vững các tiền tố này giúp bạn đoán nghĩa của hàng trăm từ mới chuyên ngành xuất hiện trong phần Đọc hiểu HSK 6."
    },
    {
        "order": 2,
        "vietnameseTitle": "Các hậu tố cấu từ cao cấp: —化, —式, —型, —性",
        "structure": "Từ căn + —化 / —式 / —型 / —性",
        "category": "cau-tu",
        "explanation": "Bốn hậu tố biến đổi từ loại và tạo thuật ngữ khoa học: 1) '—化': ...hóa, quá trình biến đổi (数字化 - số hóa, 现代化 - hiện đại hóa); 2) '—式': kiểu, dạng, phong cách (专题式 - theo chuyên đề, 开放式 - dạng mở); 3) '—型': mẫu mã, mô hình, chủng loại (观赏型 - hệ cảnh quan, 经济型 - loại tiết kiệm); 4) '—性': tính, thuộc tính trừu tượng (便捷性 - tính tiện lợi, 可能性 - tính khả thi, 创造性 - tính sáng tạo).",
        "tip": "Từ gắn hậu tố '—化' thường trở thành động từ hoặc danh từ chỉ quá trình; '—性' cấu tạo nên danh từ trừu tượng."
    },
    {
        "order": 3,
        "vietnameseTitle": "Đại từ nhân xưng phiếm chỉ và ngôi thứ ba: 人家 (rénjia)",
        "structure": "人家 (Đại từ chỉ người khác / người ta / bản thân người nói)",
        "category": "tu-loai",
        "explanation": "'人家' có 3 sắc thái sử dụng: 1) Chỉ người khác nói chung đối lập với bản thân (这是人家的东西 - đồ của người khác); 2) Chỉ người cụ thể vừa được nhắc tới với sự tôn trọng (老张来帮忙，感谢人家); 3) Khẩu ngữ thân mật phụ nữ tự xưng bản thân mình ('Người ta/Em': 人家想去嘛).",
        "tip": "Cần căn cứ vào ngữ cảnh giao tiếp để xác định '人家' đang nói về người thứ ba hay đang hờn dỗi tự xưng."
    },
    {
        "order": 4,
        "vietnameseTitle": "Chùm lượng từ chuyên dụng cao cấp: 串, 滴, 枝, 扇, 卷",
        "structure": "Số từ + 串 / 滴 / 枝 / 扇 / 卷 + Danh từ",
        "category": "tu-loai",
        "explanation": "Lượng từ miêu tả hình tượng tinh tế: '串' (chuỗi, chùm: 项链, 葡萄); '滴' (giọt chất lỏng: 水, 醋, 汗); '枝' (cành, nhánh có thân dài: 玫瑰花, 笔); '扇' (cánh cửa, cửa sổ: 一扇窗, 一扇门); '卷' (juǎn: cuộn băng dính, cuộn len) hoặc '卷' (juàn: quyển/tập trong bộ sách đồ sộ: 上卷, 第一卷).",
        "tip": "Chú ý chữ '卷' có 2 âm đọc và ý nghĩa khác nhau: juǎn (cuộn vật liệu uốn cong) và juàn (tập sách danh tác)."
    },
    {
        "order": 5,
        "vietnameseTitle": "Động lượng từ biểu thị quá trình nỗ lực: 番 (fān)",
        "structure": "Động từ / 经过 + 一番 + Danh từ trừu tượng / Hành động",
        "category": "tu-loai",
        "explanation": "'番' biểu thị một lượt quá trình hành động tiêu tốn nhiều thời gian, công sức, tranh luận hoặc suy ngẫm sâu sắc (经过一番争论 - qua một hồi tranh luận gay gắt; 下了一番功夫 - bỏ ra một phen công sức).",
        "tip": "Thường đi trong cụm '一番' kết hợp với các danh từ chỉ sự nỗ lực, đắn đo hoặc đấu tranh tư tưởng."
    },
    {
        "order": 6,
        "vietnameseTitle": "Phó từ mức độ HSK 6: 特, 异常, 较为",
        "structure": "特 / 异常 / 较为 + Tính từ / Động từ tâm lý",
        "category": "tu-loai",
        "explanation": "'特' là khẩu ngữ rút gọn của 特别 mang nghĩa 'cực kỳ, rất' (特羡慕, 特有意思); '异常' biểu thị mức độ cao bất thường vượt xa quy luật thông thường (异常便捷, 异常炎热); '较为' là biến thể văn viết trang nhã của 比较 (khá là, tương đối: 较为客观, 较为合理).",
        "tip": "Trong đề thi HSK 6, '较为' và '异常' xuất hiện rất nhiều trong bài báo khoa học và phóng sự văn xuôi."
    },
    {
        "order": 7,
        "vietnameseTitle": "Phó từ phạm vi bao quát: 净, 一同, 大都",
        "structure": "净 / 一同 / 大都 + Vị ngữ",
        "category": "tu-loai",
        "explanation": "'净' (jìng) mang nghĩa khẩu ngữ 'toàn là, chỉ mải mê làm một việc duy nhất' (净忙着说话, 净是外文书); '一同' mang sắc thái văn viết thay cho 一起 (cùng nhau); '大都' biểu thị phần lớn, tuyệt đại đa số (đại bộ phận: 大都是居民, 大都选择).",
        "tip": "'净' khi đứng trước động từ chỉ sự miệt mài quá đà bỏ quên việc khác; đứng trước danh từ chỉ toàn bộ không gian chứa đầy đồ vật đó."
    },
    {
        "order": 8,
        "vietnameseTitle": "Phó từ thời gian HSK 6: 一时, 不时, 仍旧, 依旧, 一向",
        "structure": "Phó từ thời gian + Động từ / Tính từ",
        "category": "tu-loai",
        "explanation": "Nhóm phó từ thời gian tinh tế: '一时' (trong chốc lát, nhất thời bối rối); '不时' (chốc chốc lại, thỉnh thoảng); '仍旧' (vẫn cứ, vẫn như cũ dù có trở ngại); '依旧' (trước sau y nguyên không hề thay đổi vẻ ngoài/bản chất); '一向' (từ xưa đến nay luôn giữ thói quen/tính cách bền vững).",
        "tip": "Phân biệt '依旧' (vẫn vẹn nguyên diện mạo/tình cảm như xưa) và '仍旧' (vẫn tiếp tục tiến hành dù gặp khó khăn)."
    },
    {
        "order": 9,
        "vietnameseTitle": "Phó từ tần suất nhấn mạnh: 一再 (năm lần bảy lượt), 再三 (đắn đo suy tính mãi)",
        "structure": "一再 / 再三 + Động từ",
        "category": "tu-loai",
        "explanation": "'一再' biểu thị hành vi hoặc lời nhắc nhở diễn ra nhiều lần không ngừng (一再强调 - liên tục nhấn mạnh, 一再提醒); '再三' nhấn mạnh sự cân nhắc, đắn đo kỹ lưỡng nhiều lượt trước khi quyết định (再三考虑, 再三解释).",
        "tip": "'再三' chỉ đi với các động từ suy nghĩ hoặc diễn giải giải thích (考虑, 斟酌, 解释), không đi với các động từ biến đổi tự nhiên."
    },
    {
        "order": 10,
        "vietnameseTitle": "Phó từ phương thức tinh tế: 不禁, 赶忙, 特地, 特意, 偷偷",
        "structure": "Phó từ phương thức + Động từ",
        "category": "tu-loai",
        "explanation": "'不禁' (bất giác, không kìm nén được cảm xúc nảy sinh tự nhiên); '赶忙' (lật đật, vội vã hành động ngay); '特地' và '特意' (đặc biệt dành riêng tâm huyết/công sức để làm việc gì cho ai đó); '偷偷' (lén lút, vụng trộm làm mà không để người khác hay biết).",
        "tip": "'不禁' luôn đi với các phản ứng cảm xúc hoặc động tác cơ thể vô thức (不禁鼓掌, 不禁流泪, 不禁凉了)."
    },
    {
        "order": 11,
        "vietnameseTitle": "Phó từ phủ định dự đoán: 未必 (Chưa hẳn, chưa chắc đã)",
        "structure": "未必 + Động từ / Tính từ",
        "category": "tu-loai",
        "explanation": "'未必' (wèibì) là phó từ phủ định mang nghĩa 'không nhất thiết, chưa chắc đã' (bằng 不一定). Thường dùng để phản bác ý kiến phiến diện hoặc biểu thị sự khiêm tốn, hoài nghi khoa học.",
        "tip": "Câu khẩu ngữ cửa miệng: '那也未必' (Điều đó cũng chưa hẳn thế đâu!)."
    },
    {
        "order": 12,
        "vietnameseTitle": "Phó từ ngữ khí HSK 6: 恰好, 倒是, 干脆, 明明, 总算",
        "structure": "Phó từ ngữ khí + Vị ngữ",
        "category": "tu-loai",
        "explanation": "'恰好' (vừa khéo, trùng hợp ngẫu nhiên đúng lúc); '倒是' (ngược lại thì... / kể ra thì... - biểu thị chuyển ngoặt nhượng bộ hoặc ngạc nhiên); '干脆' (dứt khoát, thẳng thắn làm ngay cho xong); '明明' (rõ rành rành, sự thật hiển nhiên mà còn ngụy biện); '总算' (cuối cùng rốt cuộc cũng... sau bao đợi chờ vất vả).",
        "tip": "'明明' luôn mang ngữ khí bất bình, chất vấn hoặc phản bác sự dối trá."
    },
    {
        "order": 13,
        "vietnameseTitle": "Giới từ văn ngôn: 于 (Vào lúc, ở tại)",
        "structure": "Động từ + 于 + Thời gian / Địa điểm  HOẶC  于 + Thời gian + Động từ",
        "category": "tu-loai",
        "explanation": "'于' (yú) là giới từ gốc Hán cổ cực kỳ quan trọng trong văn bản chính luận HSK 6, tương đương với '在' chỉ thời gian hoặc nơi chốn phát sinh (成立于1950年 - thành lập vào năm 1950, 于上月离京 - rời kinh đô vào tháng trước).",
        "tip": "Có thể đứng trước động từ hoặc đứng sau động từ làm bổ ngữ kết quả (毕业于, 发生于, 位于)."
    },
    {
        "order": 14,
        "vietnameseTitle": "Giới từ chuyển đổi chủ đề: 至于 (Còn về, còn như...)",
        "structure": "Phân câu 1，至于 + Đối tượng mới / Chủ đề phụ，...",
        "category": "tu-loai",
        "explanation": "'至于' đứng đầu phân câu sau để chuyển mạch câu chuyện sang một đối tượng hoặc chủ đề khác có liên quan nhưng cần tách riêng để làm rõ thêm.",
        "tip": "Tránh nhầm với cấu trúc phủ định '不至于' (không đến mức...)."
    },
    {
        "order": 15,
        "vietnameseTitle": "Giới từ nguyên nhân văn viết: 因 (Do, vì...)",
        "structure": "因 + Nguyên nhân + 而 + Kết quả",
        "category": "tu-loai",
        "explanation": "'因' là thể rút gọn văn ngôn của 因为, thường dùng trong thông báo ngắn gọn, công văn hoặc văn phong tin tức (因天气原因 - do lý do thời tiết; 因迟到而错过 - vì trễ mà bỏ lỡ).",
        "tip": "Thường đi kèm kết cấu '因...而...' để nối nguyên nhân và kết quả cô đọng."
    },
    {
        "order": 16,
        "vietnameseTitle": "Giới từ ngoại trừ: 除……（以外/外） (Ngoài... ra)",
        "structure": "除 + Thành phần ngoại trừ + （以外 / 外），...",
        "category": "tu-loai",
        "explanation": "'除' là thể rút gọn của 除了, đứng trước danh từ để biểu thị sự loại trừ hoặc ngoại lệ trong quy tắc quản lý (除特殊情况外 - trừ trường hợp đặc biệt ra; 除申请表以外 - ngoài đơn đăng ký ra).",
        "tip": "Rất phổ biến trong các bảng nội quy, thông cáo hành chính và hợp đồng kinh tế."
    },
    {
        "order": 17,
        "vietnameseTitle": "Liên từ chuyển ngoặt bất ngờ: 不料 (Chẳng ngờ, nào ngờ)",
        "structure": "Ý định ban đầu，不料 + Biến cố đột ngột xảy ra",
        "category": "tu-loai",
        "explanation": "'不料' (búliào) biểu thị một sự việc đột ngột phát sinh hoàn toàn nằm ngoài dự liệu ban đầu, khiến kế hoạch bị đảo lộn (tương đương 没想到, 谁知).",
        "tip": "Chỉ dùng cho các biến cố bất ngờ xảy ra trong quá khứ, không dùng cho sự việc chắc chắn."
    },
    {
        "order": 18,
        "vietnameseTitle": "Trợ từ kết cấu cao cấp: 所 (Được, mà)",
        "structure": "所 + Động từ + 的 + Danh từ",
        "category": "tu-loai",
        "explanation": "'所' (suǒ) đứng trước động từ cập vật để nhấn mạnh đối tượng tiếp nhận hành động, biến cụm động từ thành định ngữ bổ nghĩa cho danh từ sau '的' (所熟悉的故事 - câu chuyện mà mọi người quen thuộc; 所了解的情况 - tình hình mà bạn nắm bắt).",
        "tip": "Động từ sau '所' bắt buộc phải là động từ cập vật (có tân ngữ)."
    },
    {
        "order": 19,
        "vietnameseTitle": "Trợ từ ngữ khí: 啦 (nhe, nhé), 嘛 (chứ, mà)",
        "structure": "Cuối câu + 啦 / 嘛",
        "category": "tu-loai",
        "explanation": "'啦' (la) là sự hợp âm của '了' và '啊', biểu thị sự vui mừng, hoàn thành dứt khoát hoặc nhắc nhở thân thiện; '嘛' (ma) dùng khi nêu lên chân lý hiển nhiên ai cũng phải hiểu, hoặc dùng để khuyên nhủ, làm dịu không khí căng thẳng (开玩笑嘛).",
        "tip": "'嘛' thanh nhẹ đọc nhẹ nhàng, biểu lộ thái độ phân trần lý lẽ một cách tự nhiên."
    },
    {
        "order": 20,
        "vietnameseTitle": "Trợ từ liệt kê chấp nhận: 也好 (Cũng được / Dù là... hay...)",
        "structure": "Sự việc + 也好 / A 也好，B 也好，...",
        "category": "tu-loai",
        "explanation": "Có hai nghĩa: 1) Đứng sau một sự việc biểu thị thái độ bằng lòng, chấp nhận tình huống đó là điều tốt (不回来也好 - không về cũng tốt); 2) Đi cặp 'A也好，B也好' biểu thị bao quát toàn bộ, bất kể là A hay B thì kết luận vẫn đúng.",
        "tip": "Thường dùng để thể hiện tâm thái cởi mở, không thành kiến trước các phương án."
    },
    {
        "order": 21,
        "vietnameseTitle": "Cụm 4 chữ phiếm chỉ linh tinh: A这A那 (Làm việc nọ việc kia không dứt)",
        "structure": "A 这 A 那 (A là động từ)",
        "category": "khau-ngu",
        "explanation": "Biểu thị hành vi lặp lại liên tục nhắm vào nhiều đối tượng vụn vặt khác nhau: '问这问那' (hỏi này hỏi nọ), '想这想那' (nghĩ ngợi lung tung, lo bò trắng răng), '挑这挑那' (kén cá chọn canh).",
        "tip": "Thường mang hàm ý nói về sự tò mò của trẻ nhỏ hoặc tâm lý do dự không quyết đoán."
    },
    {
        "order": 22,
        "vietnameseTitle": "Cụm 4 chữ cân nhắc kỹ lưỡng: 左A右B (Cân nhắc đắn đo tứ bề)",
        "structure": "左 A 右 B",
        "category": "khau-ngu",
        "explanation": "Thành ngữ 4 chữ miêu tả việc suy xét hoặc lựa chọn từ nhiều góc độ phức tạp: '左思右想' (nghĩ tới nghĩ lui, đắn đo trằn trọc), '左挑右选' (chọn lên chọn xuống rất kỹ).",
        "tip": "Là các thành ngữ cố định kinh điển miêu tả tâm lý phân vân, đắn đo."
    },
    {
        "order": 23,
        "vietnameseTitle": "Cụm khẩu ngữ vất vả mới đạt được: 好（不）容易 (Khó khăn lắm mới...)",
        "structure": "好不容易 / 好容易 + 才 + Động từ",
        "category": "khau-ngu",
        "explanation": "Cả hai hình thức '好容易' và '好不容易' đều mang cùng một ý nghĩa: 'rất khó khăn, tốn bao nhiêu công sức trắc trở mãi mới hoàn thành được'.",
        "tip": "Đây là hiện tượng ngữ pháp đặc biệt của tiếng Hán: dạng khẳng định và phủ định đều mang cùng nghĩa tích cực là 'vất vả lắm mới làm được'."
    },
    {
        "order": 24,
        "vietnameseTitle": "Khẩu ngữ đồng tình nhượng bộ: 那倒（也）是 (Kể ra thì cũng đúng)",
        "structure": "那倒（也）是",
        "category": "khau-ngu",
        "explanation": "Dùng để thừa nhận lý lẽ hoặc góc nhìn hợp lý trong lời nói của người đối thoại, dù ban đầu mình có thể có suy nghĩ khác (Kể ra thì cũng phải, âu đó cũng là điều hay).",
        "tip": "Giúp cuộc giao tiếp trở nên uyển chuyển, thể hiện sự lắng nghe và thấu hiểu quan điểm của người khác."
    },
    {
        "order": 25,
        "vietnameseTitle": "Khẩu ngữ bỏ qua, gạt đi: 算了 (Thôi vậy, bỏ đi cho rồi)",
        "structure": "算了 / Động từ + 算了",
        "category": "khau-ngu",
        "explanation": "Biểu thị sự nhượng bộ, không truy cứu thêm nữa, hoặc quyết định từ bỏ một việc vì cảm thấy không còn giá trị hay cơ hội (扔掉算了 - vứt đi cho rồi; 算了，别再想了 - thôi bỏ đi đừng nghĩ nữa).",
        "tip": "Mang sắc thái buông bỏ dứt khoát hoặc bất đắc dĩ chấp nhận thực tại."
    },
    {
        "order": 26,
        "vietnameseTitle": "Khẩu ngữ kết thúc, chốt hạ: 得了 (Thôi đi / Cho xong chuyện)",
        "structure": "得了，... / Động từ + 得了",
        "category": "khau-ngu",
        "explanation": "Có hai cách dùng khẩu ngữ: 1) Đứng đầu câu để cắt ngang lời phàn nàn 'Thôi đi, đừng nói nữa!' (得了，别再想了); 2) Đứng cuối câu sau động từ để chốt giải pháp nhanh gọn '...cho xong chuyện' (送给你得了 - tặng luôn cho cậu cho rồi).",
        "tip": "'得了' phát âm là déliǎo khi dùng với nghĩa này, mang phong cách khẩu ngữ miền Bắc Trung Quốc rất đặc trưng."
    },
    {
        "order": 27,
        "vietnameseTitle": "Cấu trúc hành động đồng loạt chen chúc: A一+量词，B一+量词",
        "structure": "A 一 [Lượng từ]，B 一 [Lượng từ]地 + Động từ",
        "category": "khau-ngu",
        "explanation": "Miêu tả cảnh tượng nhiều đối tượng cùng tham gia phát biểu hoặc hành động liên tục xen kẽ nhau: '左一句、右一句' (người một câu kẻ một câu dồn dập); '你一言，我一语' (anh một câu tôi một lời rôm rả).",
        "tip": "Thường làm trạng ngữ miêu tả không khí thảo luận bàn tán sôi nổi."
    },
    {
        "order": 28,
        "vietnameseTitle": "Cấu trúc bừa bãi lộn xộn: 东一A，西一A (Góc này một tí, chỗ kia một cái)",
        "structure": "东 一 [Lượng từ/Động từ]，西 一 [Lượng từ/Động từ]",
        "category": "khau-ngu",
        "explanation": "Miêu tả đồ đạc vứt bừa bãi khắp nơi không có trật tự (东一件，西一件), hoặc hành động ngẫu hứng tản mạn không theo hệ thống bài bản (东一本，西一本).",
        "tip": "Dùng hình ảnh 'đông-tây' để biểu thị sự phân tán, mất phương hướng và thiếu ngăn nắp."
    },
    {
        "order": 29,
        "vietnameseTitle": "Cấu trúc giới hạn mốc: 到……为止 (Cho đến... mới thôi / Tính đến nay)",
        "structure": "到 + Thời gian / Tình trạng + 为止",
        "category": "khau-ngu",
        "explanation": "Xác định điểm dừng hoặc ranh giới cuối cùng của một quá trình: '到目前为止' (tính đến thời điểm hiện tại); '一直到客户满意为止' (mãi cho đến khi khách hàng hài lòng mới thôi).",
        "tip": "'到目前为止' là cụm liên kết cực kỳ phổ biến trong các báo cáo tiến độ công việc."
    },
    {
        "order": 30,
        "vietnameseTitle": "Khẩu ngữ bức xúc bị liên lụy: X到Y头上来了 (Làm càn đến tận đầu ai)",
        "structure": "Động từ xấu (骗 / 赖 / 怪 / 欺负) + 到 + Ai + 头上来了",
        "category": "khau-ngu",
        "explanation": "Khẩu ngữ biểu thị sự phẫn nộ cùng cực khi bị kẻ xấu ức hiếp, lừa đảo, hoặc bị người khác đổ vấy oan uổng trách nhiệm lên đầu mình (骗到我头上来了 - lừa gạt đến tận đầu tôi; 怪到我头上来了 - đổ vấy tội lên đầu tôi).",
        "tip": "Động từ luôn là hành vi tiêu cực, thể hiện thái độ không chịu để người khác bắt nạt."
    },
    {
        "order": 31,
        "vietnameseTitle": "Cấu trúc so sánh trải nghiệm: 不X不……，一X…… (Chưa thử thì chưa hay, vừa thử mới biết)",
        "structure": "不 [Động từ] 不 [Trạng thái]，一 [Động từ] (才) [Phát hiện mới]",
        "category": "khau-ngu",
        "explanation": "Cấu trúc khẩu ngữ nêu bật sự tương phản giữa lúc chưa trải nghiệm và khi vừa mới bắt tay vào làm, giúp nhận ra chân lý hoặc sự thú vị bất ngờ (不学不知道，一学才知道; 不尝不知道，一尝就喜欢上了).",
        "tip": "Cách diễn đạt rất dí dỏm, kích thích tính tò mò khám phá của người nghe."
    },
    {
        "order": 32,
        "vietnameseTitle": "Khẩu ngữ trách mắng gay gắt: 好你个X (Hay cho cái đồ... nhà ngươi!)",
        "structure": "好你个 + Tên / Danh xưng trách cứ",
        "category": "khau-ngu",
        "explanation": "Thán từ vạch mặt hoặc mắng mỏ khi phát hiện ra đối phương làm điều sai trái, nói xấu sau lưng hoặc lừa dối mình (好你个老张 - hay cho lão Trương nhà anh nhé; 好你个骗子 - hay cho tên lừa đảo nhà ngươi).",
        "tip": "Mang ngữ khí nửa giận dữ nửa bất ngờ khi phát hiện sự thật."
    },
    {
        "order": 33,
        "vietnameseTitle": "Khẩu ngữ than phiền trớ trêu: 早（也）不X，晚（也）不X (Sớm chẳng làm, muộn không làm, đúng lúc này mới...)",
        "structure": "早 (也) 不 X，晚 (也) 不 X，偏偏...",
        "category": "khau-ngu",
        "explanation": "Phàn nàn về sự xuất hiện không đúng lúc, trớ trêu của một hành động hay thời tiết khiến kế hoạch của người nói bị xáo trộn (早不来，晚不来，正要出门你来了; 早也不下雨，晚也不下雨，刚一开始就下).",
        "tip": "Thường đi kèm cảm giác dở khóc dở cười trước sự trùng hợp oái oăm."
    },
    {
        "order": 34,
        "vietnameseTitle": "Khẩu ngữ nhận xét trạng thái ai đó: 看/瞧+把+宾语+X得 (Trông người ta... kìa!)",
        "structure": "看 / 瞧 + 把 + Ai + Tính từ / Động từ + 得 + Bổ ngữ",
        "category": "khau-ngu",
        "explanation": "Hướng sự chú ý của người nghe vào trạng thái cảm xúc tột cùng hoặc hình ảnh buồn cười/xúc động của đối tượng (瞧把他兴奋得 - xem kìa trông anh ấy hào hứng chưa; 看把你笑得 - xem cậu cười kìa).",
        "tip": "Cấu trúc kết hợp giữa chữ 把 và bổ ngữ trạng thái 得, rất giàu tính khẩu ngữ đời sống."
    },
    {
        "order": 35,
        "vietnameseTitle": "Cấu trúc lãng phí trớ trêu: 放着X不Y (Bỏ mặc điều tốt lại đi làm điều dở)",
        "structure": "放着 + Lợi thế / Trách nhiệm + 不 + Tận dụng / Gánh vác",
        "category": "khau-ngu",
        "explanation": "Chỉ trích hoặc khó hiểu trước hành vi bỏ phí nguồn lực sẵn có để chạy đi làm việc khác vô lý (放着自己的车不开 - xe mình không lái đi mượn xe người khác; 放着孩子不管 - bỏ mặc con cái không trông nom).",
        "tip": "Biểu thị sự trách móc việc không biết quý trọng những gì mình đang có."
    },
    {
        "order": 36,
        "vietnameseTitle": "Khẩu ngữ khuyên can buông bỏ: X了就X了，（没）有…… (Đã qua rồi thì thôi, có gì đâu mà...)",
        "structure": "X 了就 X 了，(没) 有什么好 [Buồn / Tiếc / Lo] 的",
        "category": "khau-ngu",
        "explanation": "Dùng để an ủi người khác gác lại chuyện đã rồi, đừng tiếc nuối hay lo lắng vô ích (走了就走了 - đi thì cũng đi rồi; 丢了就丢了 - mất thì cũng mất rồi).",
        "tip": "X là động từ diễn tả sự việc đã thành dĩ vãng không thể cứu vãn."
    },
    {
        "order": 37,
        "vietnameseTitle": "Khẩu ngữ kén chọn quá mức: 这/那也不X，那/这也不Y (Cái này cũng chê, cái kia cũng không ưng)",
        "structure": "这 / 那 也不 X，那 / 这 也不 Y",
        "category": "khau-ngu",
        "explanation": "Phê bình thái độ khó tính, kén cá chọn canh, cho phương án nào cũng lắc đầu từ chối (这也不好吃，那也不好吃; 那也不喜欢，这也不满意).",
        "tip": "Thường dùng khi bực mình vì người khác không chịu hợp tác hoặc quá đòi hỏi."
    },
    {
        "order": 38,
        "vietnameseTitle": "Cấu trúc tách bạch rạch ròi: X归X，Y归Y (Chuyện nào ra chuyện đó / Dù gì thì gì)",
        "structure": "X 归 X，Y 归 Y",
        "category": "khau-ngu",
        "explanation": "Có 2 nghĩa: 1) Tách bạch hai việc riêng biệt không được đánh đồng (计划归计划，行动归行动 - kế hoạch ra kế hoạch, hành động ra hành động); 2) Dù có hành động răn đe thì bản chất tình cảm vẫn không đổi (打归打，骂归骂，父母永远最疼你).",
        "tip": "Giúp luận điểm rành mạch, không bị cảm xúc chi phối khi phân tích vấn đề."
    },
    {
        "order": 39,
        "vietnameseTitle": "Khẩu ngữ trêu chọc trạng thái: 看你X的/瞧他X的 (Xem cái vẻ... kìa!)",
        "structure": "看你 X 的 / 瞧他 X 的",
        "category": "khau-ngu",
        "explanation": "Khẩu ngữ trêu đùa hoặc châm biếm nhẹ nhàng trạng thái cảm xúc lộ rõ ra ngoài mặt của ai đó (看你吓的 - xem cậu bị dọa sợ kìa; 瞧他得意的 - xem bộ dạng đắc chí của hắn kìa).",
        "tip": "X thường là tính từ chỉ cảm xúc (吓, 得意, 乐, 慌, 愁...)."
    },
    {
        "order": 40,
        "vietnameseTitle": "Bổ ngữ mức độ thấu triệt: 动词/形容词+透+了",
        "structure": "Động từ tâm lý / Tính từ + 透 + 了",
        "category": "cau-phuc",
        "explanation": "'透' (tòu) làm bổ ngữ biểu thị mức độ cực sâu sắc, ngấm sâu vào bản chất hoặc thấu suốt (恨透了 - căm ghét tận xương tủy; 淋透了 - ướt sũng thấu vào tận trong da thịt; 摸透了 - nắm bắt thấu đáo).",
        "tip": "Khác với '极了', '透' mang hàm nghĩa mức độ thấu qua bề mặt vào sâu bên trong nội tâm hoặc vật thể."
    },
    {
        "order": 41,
        "vietnameseTitle": "Câu chữ 把 có chủ ngữ phi sinh vật: 主语（非生物体）+把+宾语+动词",
        "structure": "Chủ ngữ (Hiện tượng tự nhiên / Âm thanh) + 把 + Đối tượng chịu tác động + Động từ + Bổ ngữ",
        "category": "cau-phuc",
        "explanation": "Trong văn miêu tả cao cấp HSK 6, chủ ngữ của câu chữ 把 không nhất thiết phải là con người có ý chí mà có thể là ánh nắng, âm thanh, cơn gió làm biến đổi cảnh vật (阳光把大地染成了红色; 音乐声把游客都吸引过去了).",
        "tip": "Mẫu câu văn học nhân cách hóa thiên nhiên rất nghệ thuật và giàu cảm xúc."
    },
    {
        "order": 42,
        "vietnameseTitle": "Câu chữ 把 có tân ngữ là tác nhân chịu khổ: 主语+把+宾语（施事）+动词",
        "structure": "Chủ ngữ (Nguyên nhân / Người gây chuyện) + 把 + Người chịu cảm xúc + Động từ tâm lý + Bổ ngữ",
        "category": "cau-phuc",
        "explanation": "Chủ ngữ gây ra tác động khiến người ở vị trí tân ngữ phải rơi vào trạng thái tâm lý mãnh liệt (孩子把妈妈气得睡不着觉 - con làm mẹ tức không ngủ được; 故事把大家感动哭了 - câu chuyện làm mọi người xúc động phát khóc).",
        "tip": "Tân ngữ là người gánh chịu trạng thái tâm lý do chủ ngữ tạo nên."
    },
    {
        "order": 43,
        "vietnameseTitle": "Câu phức lặp lại trạng thái luân phiên: 一时……一时…… (Lúc thì... lúc thì...)",
        "structure": "一时 + Trạng thái A，一时 + Trạng thái B",
        "category": "cau-phuc",
        "explanation": "Diễn tả sự thay đổi chớp nhoáng, biến chuyển liên tục qua lại giữa hai trạng thái trái ngược nhau trong khoảng thời gian ngắn (一时上升一时下降; 一时冷一时热).",
        "tip": "Tương đương với '一会儿...一会儿...' nhưng mang màu sắc văn phong viết trang nhã hơn."
    },
    {
        "order": 44,
        "vietnameseTitle": "Câu phức lựa chọn loại trừ dứt khoát: 要么……，要么…… (Hoặc là... hoặc là...)",
        "structure": "要么 + Lựa chọn A，要么 + Lựa chọn B",
        "category": "cau-phuc",
        "explanation": "Biểu thị sự lựa chọn loại trừ lẫn nhau giữa hai phương án khả dĩ, bắt buộc phải chọn một trong hai chứ không thể cùng tồn tại (要么点外卖，要么自己做; 要么太咸，要么太辣).",
        "tip": "'要么' mang tính dứt khoát hơn '或者', thường dùng khi chỉ có đúng 2 lối thoát duy nhất."
    },
    {
        "order": 45,
        "vietnameseTitle": "Câu phức chuyển ngoặt cô đọng: 虽……，但/可/却/也…… (Tuy... nhưng...)",
        "structure": "虽 + Nhượng bộ，但 / 可 / 却 / 也 + Chuyển ngoặt",
        "category": "cau-phuc",
        "explanation": "'虽' là thể rút gọn văn ngôn của 虽然, giúp câu văn gọn gàng, súc tích và uyển chuyển (虽未取得胜利，但收获了经验; 这道题虽有难度，可做出来的同学不少; 文章虽短，读后却充满力量).",
        "tip": "Rất được ưa chuộng trong các bài bình luận xã hội, giúp câu văn cô đọng mang phong vị cổ điển."
    },
    {
        "order": 46,
        "vietnameseTitle": "Câu phức điều kiện toàn thể: 凡是……，都…… (Hễ phàm là... thì đều...)",
        "structure": "凡是 + Đối tượng bao quát，都 + Quy tắc áp dụng",
        "category": "cau-phuc",
        "explanation": "'凡是' (fánshì) mang nghĩa bao hàm tuyệt đối tất cả mọi trường hợp nằm trong phạm vi được nêu ra, không có bất kỳ ngoại lệ nào (凡是有机会都争取; 凡是错误的行为都应该纠正).",
        "tip": "Vế sau bắt buộc phải có phó từ '都' hoặc '总' để đáp lại tính toàn thể của '凡是'."
    },
    {
        "order": 47,
        "vietnameseTitle": "Câu phức điều kiện duy nhất: 除非……，才…… (Chỉ trừ phi... mới...)",
        "structure": "除非 + Điều kiện duy nhất bắt buộc，才 + Kết quả mong muốn",
        "category": "cau-phuc",
        "explanation": "'除非' nêu ra điều kiện duy nhất để sự việc có thể xảy ra, ngoài điều kiện đó ra thì không có cách nào khác đạt được mục tiêu.",
        "tip": "Đi cùng với '才', nhấn mạnh tính tất yếu duy nhất của điều kiện."
    },
    {
        "order": 48,
        "vietnameseTitle": "Câu phức điều kiện loại trừ cảnh báo: 除非……，否则/不然…… (Trừ phi... bằng không thì...)",
        "structure": "除非 + Điều kiện cần sửa đổi，否则 / 不然 + Hậu quả dứt khoát",
        "category": "cau-phuc",
        "explanation": "Nêu điều kiện bắt buộc đối phương phải thực hiện, nếu không tuân thủ thì hậu quả ở vế sau là chắc chắn sẽ xảy ra (除非他道歉，否则我不会原谅).",
        "tip": "Mang ngữ khí kiên quyết không nhượng bộ trong đàm phán hoặc nguyên tắc cá nhân."
    },
    {
        "order": 49,
        "vietnameseTitle": "Câu phức nhượng bộ văn viết: 就算……，也…… (Dẫu cho, cho dù... thì cũng...)",
        "structure": "就算 + Giả định khó khăn nhất，也 + Quyết tâm không đổi",
        "category": "cau-phuc",
        "explanation": "'就算' (jiùsuàn) tương đương với '哪怕, 即使', giả thiết một tình huống cực đoan hoặc điều kiện bất lợi nhất nhưng khẳng định lập trường hoặc nguyên tắc xử sự ở vế sau vẫn vững vàng.",
        "tip": "Rất thông dụng cả trong đời sống lẫn văn xuôi biểu cảm."
    },
    {
        "order": 50,
        "vietnameseTitle": "Câu phức mục đích trang trọng: ……，以便…… (Để, nhằm để... tiện bề...)",
        "structure": "Biện pháp hành động，以便 + Mục đích / Sự thuận tiện tiếp theo",
        "category": "cau-phuc",
        "explanation": "'以便' (yǐbiàn) là liên từ mục đích cao cấp trong văn bản hành chính, pháp luật hoặc thư từ thương mại, dẫn xuất mục đích tạo điều kiện thuận lợi cho các bước tiếp theo (留联系方式以便日后联系; 调整时间以便乘客乘坐).",
        "tip": "Là từ nối không thể thiếu trong thư tín thương mại và các thông cáo công cộng chuẩn mực HSK 6."
    }
]

CAT_MAP_HSK6 = {
    "cau-tu": {"name": "Tiền tố & Hậu tố cấu từ (语素)", "icon": "🔬"},
    "tu-loai": {"name": "Từ loại (Phó từ, Giới từ, Trợ từ...)", "icon": "🔤"},
    "khau-ngu": {"name": "Khẩu ngữ & Cụm cố định", "icon": "💬"},
    "cau-phuc": {"name": "Mẫu câu đặc biệt & Câu phức cao cấp", "icon": "🔗"},
}

def main():
    with open('scripts/hsk6_raw_grammar.json', 'r', encoding='utf-8') as f:
        hsk6_raw = json.load(f)

    print(f"Loaded {len(hsk6_raw)} HSK6 raw items.")
    print(f"Loaded {len(METADATA_HSK6)} metadata items.")

    enriched_items = []
    total_sentences = 0

    for idx, meta in enumerate(METADATA_HSK6):
        order = meta["order"]
        raw = hsk6_raw[order - 1]
        gid = raw["id"]
        title_zh = raw.get("content") or raw.get("grammarDetail", "")
        cat_info = CAT_MAP_HSK6.get(meta["category"], {"name": "Ngữ pháp", "icon": "📚"})

        examples_list = []
        for case in raw["cases"]:
            case_clean = case.strip()
            py = clean_sentence_pinyin(case_clean)
            vi = TRANSLATIONS_HSK6.get(case_clean, "")
            if not vi:
                print(f"WARNING: Missing translation for [{case_clean}] in item {gid}")
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

export const HSK6_GRAMMAR_CATEGORIES: GrammarCategory[] = """ + json.dumps(HSK6_CATEGORIES, ensure_ascii=False, indent=2) + """;

export const HSK6_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = """ + json.dumps(enriched_items, ensure_ascii=False, indent=2) + ";\n"

    with open('src/data/hsk6GrammarData.ts', 'w', encoding='utf-8') as out:
        out.write(ts_code)

    print("Successfully created src/data/hsk6GrammarData.ts with 50 points and 147 sentences!")

if __name__ == '__main__':
    main()

