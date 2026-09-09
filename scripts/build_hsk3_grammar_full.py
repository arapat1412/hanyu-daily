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
    s_temp = s_temp.replace('一块儿', '§YIKUAIR§').replace('快点儿', '§KUAIDIANR§').replace('多点儿', '§DUODIANR§').replace('早点儿', '§ZAODIANR§')

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
        elif char in '0123456789':
            res.append(char)
        elif char.strip():
            res.append(char)

    joined = ' '.join(res)
    joined = joined.replace('§NAR§', 'nǎr').replace('§ZHER§', 'zhèr').replace('§NAR2§', 'nàr')
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§WANR§', 'wánr').replace('§NVHAIR§', 'nǚháir')
    joined = joined.replace('§YIKUAIR§', 'yíkuàir').replace('§KUAIDIANR§', 'kuàidiǎnr').replace('§DUODIANR§', 'duōdiǎnr').replace('§ZAODIANR§', 'zǎodiǎnr')

    joined = re.sub(r'\s+([,.\?!:、"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

# Categories for HSK 3
HSK3_CATEGORIES = [
    { "id": "all", "name": "Tất cả", "icon": "📚" },
    { "id": "ba_bei_sentences", "name": "Câu chữ 把 & Câu bị động 被", "icon": "⭐" },
    { "id": "complements_advanced", "name": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "icon": "🎯" },
    { "id": "compound_sentences", "name": "Câu phức & Liên từ nối", "icon": "🔗" },
    { "id": "comparisons_advanced", "name": "Câu so sánh nâng cao (跟...一样, 越...越)", "icon": "⚖️" },
    { "id": "special_patterns", "name": "Cấu trúc đặc biệt & Câu tồn hiện", "icon": "🌟" },
    { "id": "modal_verbs_separable", "name": "Động từ năng nguyện & Ly hợp", "icon": "⚡" },
    { "id": "adverbs_modalities", "name": "Phó từ các loại", "icon": "🔥" },
    { "id": "prepositions", "name": "Giới từ phương hướng & đối tượng", "icon": "🛡️" },
    { "id": "pronouns_measures", "name": "Đại từ, Lượng từ & Số từ", "icon": "🔢" },
    { "id": "word_building", "name": "Cấu tạo từ & Thành phần câu", "icon": "🏗️" }
]

# Complete dictionary of translations for HSK 3 sentences (302 sentences)
TRANSLATIONS = {
    # 01 老—
    "这家饭店的经理老李是我的朋友。": "Giám đốc Lão Lý của nhà hàng này là bạn tôi.",

    # 02 —家、—子、—员
    "你听说过这个画家吗？": "Bạn đã từng nghe nói về họa sĩ này chưa?",
    "屋子有点儿小，可是很干净。": "Căn phòng hơi nhỏ một chút, nhưng rất sạch sẽ.",
    "她以前是一名羽毛球运动员。": "Cô ấy trước đây từng là một vận động viên cầu lông.",

    # 03 东、南、西、北、北方、东方、南方、西方、中间
    "我听说北方的冬天很冷。": "Tôi nghe nói mùa đông ở miền bắc rất lạnh.",
    "中国的北方和南方我都去过。": "Cả miền bắc lẫn miền nam Trung Quốc tôi đều từng đi qua rồi.",
    "你们两个人中间的那个人是谁？": "Người đứng ở giữa hai bạn là ai vậy?",
    "东方人和西方人的生活习惯不太一样。": "Thói quen sinh hoạt của người phương Đông và người phương Tây không giống nhau lắm.",

    # 04 需要、该、应该、愿意、得
    "从这儿过去，大概需要多长时间？": "Từ đây đi sang đó, đại khái mất khoảng bao lâu thời gian?",
    "医生说我感冒了，需要吃药。": "Bác sĩ nói tôi bị cảm rồi, cần phải uống thuốc.",
    "已经十一点了，你该睡觉了。": "Đã 11 giờ rồi, bạn nên đi ngủ thôi.",
    "你学了一天了，该休息休息了。": "Bạn học cả ngày rồi, nên nghỉ ngơi một chút đi.",
    "我们应该多练习说中文。": "Chúng ta nên luyện nói tiếng Trung nhiều hơn.",
    "我要去动物园，应该怎么坐车呢？": "Tôi muốn đi sở thú, nên bắt xe như thế nào nhỉ?",
    "你愿意帮我学习汉语吗？": "Bạn có sẵn lòng giúp tôi học tiếng Hán không?",
    "我很愿意参加这次汉语比赛。": "Tôi rất sẵn lòng tham gia cuộc thi tiếng Hán lần này.",
    "要上课了，咱们得快点儿走。": "Sắp vào lớp rồi, chúng ta phải đi nhanh hơn một chút.",
    "我明天有考试，今天得认真复习。": "Ngày mai tôi có bài thi, hôm nay phải ôn tập thật nghiêm túc.",

    # 05 动宾式离合词
    "我放了假就准备去旅游。": "Tôi vừa được nghỉ lễ là chuẩn bị đi du lịch ngay.",
    "我们已经很长时间没见过面了。": "Chúng tôi đã rất lâu rồi chưa gặp mặt nhau.",
    "结了婚以后，你还打算工作吗？": "Sau khi kết hôn rồi, bạn còn định đi làm nữa không?",
    "你先去洗个澡，休息一会儿。": "Bạn đi tắm một cái trước đi, rồi nghỉ ngơi một lát.",

    # 06 动补式离合词
    "我打不开这瓶水，你能帮帮我吗？": "Tôi không mở được nắp chai nước này, bạn có thể giúp tôi được không?",
    "黑板上的字你看得见吗？": "Chữ trên bảng đen bạn có nhìn thấy rõ không?",
    "他已经离不开这个地方了。": "Anh ấy đã không thể rời xa nơi này được nữa rồi.",
    "今天的作业我可能完不成了。": "Bài tập hôm nay có lẽ tôi không thể hoàn thành nổi rồi.",
    "我的中文越来越好，跟老师的帮助是分不开的。": "Tiếng Trung của tôi ngày càng giỏi hơn, gắn liền không thể tách rời với sự giúp đỡ của thầy cô.",

    # 07 怎样
    "怎样才能学好中文呢？": "Làm thế nào mới có thể học giỏi tiếng Trung đây?",
    "他是怎样一个人？": "Anh ấy là một người như thế nào?",

    # 08 疑问代词的非疑问用法：任指用法
    "这次旅行谁都可以参加。": "Chuyến du lịch lần này bất kỳ ai cũng đều có thể tham gia.",
    "我最近感冒了，哪儿都没去。": "Dạo này tôi bị cảm, chẳng đi đâu cả.",
    "谁感兴趣谁就去参加。": "Ai có hứng thú thì người đó đi tham gia.",
    "你想吃什么就点什么吧。": "Bạn muốn ăn cái gì thì cứ gọi món đó đi nhé.",

    # 09 疑问代词的非疑问用法：不定指用法
    "我好像在哪儿见过她。": "Hình như tôi đã từng gặp cô ấy ở đâu đó rồi.",
    "你先吃点儿什么再走吧。": "Bạn ăn chút gì đó đi rồi hãy đi.",
    "我下周搬家，想请谁来帮帮忙。": "Tuần sau tôi chuyển nhà, muốn nhờ ai đó đến giúp một tay.",
    "咱们哪天一起去踢足球吧。": "Hôm nào đó chúng mình cùng nhau đi đá bóng nhé.",

    # 10 别人、咱们
    "我不太清楚，你问问别人吧。": "Tôi không rõ lắm, bạn hỏi thử người khác xem sao.",
    "别人能学好，我也一定能学好。": "Người khác học giỏi được thì tôi nhất định cũng sẽ học giỏi được.",
    "咱们明天一起去动物园，怎么样？": "Ngày mai chúng mình cùng đi sở thú nhé, thấy thế nào?",
    "要迟到了，咱们快走吧。": "Sắp muộn giờ rồi, chúng mình mau đi thôi.",

    # 11 别的、其他
    "除了北京，你还去过别的城市吗？": "Ngoài Bắc Kinh ra, bạn còn từng đi thành phố nào khác không?",
    "我喜欢学习别的国家的语言和文化。": "Tôi thích tìm hiểu ngôn ngữ và văn hóa của các quốc gia khác.",
    "其他同学都回国了，只有我还在中国。": "Các bạn học khác đều đã về nước cả rồi, chỉ có tôi vẫn còn ở lại Trung Quốc.",
    "除了看足球比赛，你还有其他爱好吗？": "Ngoài xem bóng đá ra, bạn còn có sở thích nào khác không?",

    # 12 专用名量词
    "下雨了，记得带一把伞。": "Trời mưa rồi, nhớ mang theo một chiếc ô.",
    "我在网上买了两双鞋。": "Tôi đã mua hai đôi giày trên mạng.",
    "桌子上放着几张照片。": "Trên bàn đang để mấy tấm ảnh.",
    "这里有多少种水果？": "Ở đây có bao nhiêu loại hoa quả?",
    "我们的教室在四层。": "Lớp học của chúng tôi ở tầng bốn.",
    "我想给我的爸爸妈妈写一封信。": "Tôi muốn viết một lá thư gửi cho bố mẹ tôi.",
    "请大家打开书，第五页。": "Mời mọi người mở sách ra, trang số 5.",
    "那辆黑色的自行车是我的。": "Chiếc xe đạp màu đen đằng kia là của tôi.",
    "我每周都有一节中文课。": "Mỗi tuần tôi đều có một tiết học tiếng Trung.",
    "这个城市一共有三所大学。": "Thành phố này có tổng cộng 3 trường đại học.",
    "咱们坐下一班地铁走吧。": "Chúng mình đón chuyến tàu điện ngầm kế tiếp để đi nhé.",
    "请大家用这些词写一段话。": "Mời mọi người dùng các từ này để viết thành một đoạn văn.",
    "爷爷家里养了十几头牛。": "Nhà ông nội nuôi mười mấy con bò.",
    "这句话是什么意思？": "Câu nói này có nghĩa là gì?",
    "苹果多少钱一斤/公斤？": "Táo bao nhiêu tiền một cân (nửa ký / 1 ký)?",
    "这些一共八块五角（毛）钱。": "Số này tổng cộng 8 tệ 5 hào (8.5 tệ).",
    "现在八点一刻。": "Bây giờ là 8 giờ 15 phút (8 giờ 1 khắc).",
    "我哥哥身高一米八五。": "Anh trai tôi cao 1 mét 85.",

    # 13 借用名量词：碗、盘
    "我要一碗面条和一碗米饭。": "Cho tôi một bát mì và một bát cơm trắng.",
    "中午我在食堂吃了一盘饺子。": "Buổi trưa tôi đã ăn một đĩa sủi cảo ở nhà ăn.",

    # 14 动量词：口、回、遍、声
    "他喝了一口茶，然后开始工作。": "Anh ấy uống một ngụm trà, sau đó bắt đầu làm việc.",
    "我已经说过好几回了，但他还是不记得。": "Tôi đã nói mấy bận rồi, nhưng anh ấy vẫn không nhớ.",
    "对不起，我没听懂，请再说一遍。": "Xin lỗi, tôi nghe chưa hiểu, xin hãy nói lại một lần nữa.",
    "她跟我说了一声“谢谢”就走了。": "Cô ấy nói với tôi một tiếng 'cảm ơn' rồi rời đi.",

    # 15 量词重叠
    "这些苹果个个都很大。": "Những quả táo này quả nào quả nấy đều rất to.",
    "他画的画，张张都很漂亮。": "Những bức tranh anh ấy vẽ, bức nào bức nấy đều rất đẹp.",

    # 16 程度副词
    "这本书的内容比较简单，我读得很快。": "Nội dung cuốn sách này tương đối đơn giản, tôi đọc rất nhanh.",
    "外面太热了，屋子里还凉快一些。": "Bên ngoài nóng quá, trong phòng còn mát mẻ hơn một chút.",
    "搬家以后，我们的生活更方便了。": "Sau khi chuyển nhà, cuộc sống của chúng tôi càng thuận tiện hơn.",
    "我弟弟特别喜欢看足球比赛。": "Em trai tôi đặc biệt thích xem các trận thi đấu bóng đá.",
    "多穿点儿衣服，外面挺冷的。": "Mặc thêm chút áo ấm đi, bên ngoài khá là lạnh đấy.",
    "孩子这么晚还没回来，妈妈心里有些着急。": "Con cái muộn thế này chưa về, trong lòng người mẹ có phần lo lắng.",
    "冬天快要到了，天气越来越冷了。": "Mùa đông sắp đến rồi, thời tiết ngày càng lạnh hơn.",
    "我对中国历史极有兴趣。": "Tôi cực kỳ có hứng thú với lịch sử Trung Quốc.",
    "他工作特别忙，周末极少休息。": "Anh ấy công việc đặc biệt bận rộn, cuối tuần cực kỳ hiếm khi nghỉ ngơi.",

    # 17 范围副词
    "我就要两斤苹果，不要别的。": "Tôi chỉ lấy hai cân táo thôi, không lấy gì khác nữa.",
    "办公室里就张老师一个人。": "Trong văn phòng chỉ có duy nhất một mình thầy Trương.",
    "你跟我一块儿去图书馆，好吗？": "Bạn cùng đi thư viện với tôi nhé, được không?",
    "我们经常一块儿踢足球。": "Chúng tôi thường xuyên cùng nhau đi đá bóng.",
    "你们班一共有多少留学生？": "Lớp các bạn có tổng cộng bao nhiêu lưu học sinh?",
    "这些水果一共多少钱？": "Số hoa quả này tổng cộng bao nhiêu tiền?",
    "我只有一个哥哥，没有弟弟妹妹。": "Tôi chỉ có một người anh trai, không có em trai hay em gái.",
    "她只说了自己的名字，没说别的。": "Cô ấy chỉ nói tên của mình, không nói thêm gì khác.",
    "公园里到处都是锻炼身体的老人。": "Trong công viên khắp nơi đều là người già đang tập luyện thể dục.",
    "她只是笑了笑，一句话也没说。": "Cô ấy chỉ cười mỉm một cái, một câu cũng không nói.",

    # 18 时间副词
    "他才到家，还没有吃饭呢。": "Anh ấy vừa mới về tới nhà, vẫn còn chưa kịp ăn cơm.",
    "我才搬来北京，还不太习惯这里的生活": "Tôi mới chuyển đến Bắc Kinh, vẫn chưa quen lắm với cuộc sống ở đây.",
    "请等一下，我马上来。": "Xin đợi một lát, tôi sẽ tới ngay lập tức.",
    "接了电话，她马上就跑出去了。": "Vừa nhận điện thoại xong, cô ấy liền chạy vụt ra ngoài ngay.",
    "你先走吧，我还有工作要做。": "Bạn đi trước đi, tôi vẫn còn việc phải làm.",
    "我想先洗个澡，然后再写作业。": "Tôi muốn đi tắm trước, sau đó mới làm bài tập về nhà.",
    "最近天气变化很快，一会儿阴，一会儿晴。": "Dạo này thời tiết thay đổi rất nhanh, lúc thì râm lúc thì hửng nắng.",
    "他刚开始学汉语，说得还不太好。": "Cậu ấy vừa mới bắt đầu học tiếng Hán, nói vẫn chưa được tốt lắm.",
    "报纸是早上刚送来的。": "Tờ báo là vừa mới được giao tới vào sáng nay.",
    "刚刚还是晴天，怎么突然下雨了？": "Vừa nãy trời vẫn còn nắng ráo, sao đột nhiên lại đổ mưa rồi?",
    "他不在，刚刚出去。": "Anh ấy không có ở đây, vừa mới đi ra ngoài.",
    "我一直都住在北京。": "Tôi xưa nay vẫn luôn sinh sống tại Bắc Kinh.",
    "别出去了，外面一直在下雨。": "Đừng ra ngoài nữa, bên ngoài trời vẫn đang mưa suốt đấy.",

    # 19 频率副词
    "一到冬天，孩子就总生病。": "Cứ hễ đến mùa đông là đứa trẻ lại luôn bị ốm.",
    "上学的时候，我总是让爸爸开车送我。": "Hồi còn đi học, tôi luôn nhờ bố lái xe đưa đón tôi.",
    "那个电影太有意思了，我昨天又看了一遍。": "Bộ phim đó quá hay, hôm qua tôi lại xem lại thêm một lần nữa.",
    "下课以后，我常常去体育馆打篮球。": "Sau giờ học, tôi thường hay đến nhà thi đấu chơi bóng rổ.",

    # 20 关联副词
    "孩子们高兴地一边唱歌一边跳舞。": "Lũ trẻ vui vẻ vừa hát vừa khiêu vũ.",
    "我想找一个工作，一边工作一边学习。": "Tôi muốn tìm một công việc để vừa làm vừa học.",

    # 21 情态副词
    "他大概已经回家了。": "Có lẽ anh ấy đã về nhà rồi.",
    "你们学校大概有多少留学生？": "Trường của các bạn đại khái có khoảng bao nhiêu lưu học sinh?",
    "我必须做完才能下班。": "Tôi bắt buộc phải làm cho xong thì mới được tan làm.",
    "老师要求我们必须每天复习。": "Thầy giáo yêu cầu chúng tôi bắt buộc phải ôn bài mỗi ngày.",
    "我学习中文差不多三年了。": "Tôi học tiếng Trung xấp xỉ gần 3 năm rồi.",
    "我跟哥哥差不多高。": "Tôi cao xấp xỉ gần bằng anh trai tôi.",
    "放心，我一定不会迟到。": "Yên tâm đi, tôi nhất định sẽ không đến muộn đâu.",
    "我明天不一定有时间。": "Ngày mai chưa chắc tôi đã có thời gian.",
    "她好像没有明白我的意思。": "Hình như cô ấy vẫn chưa hiểu được ý của tôi.",
    "我好像在哪里见过她。": "Tôi dường như đã từng gặp cô ấy ở đâu đó rồi.",
    "他几乎每天都去图书馆学习。": "Anh ấy hầu như ngày nào cũng đến thư viện học tập.",
    "他太忙了，几乎没有时间休息。": "Anh ấy bận rộn quá, hầu như không có chút thời gian nào để nghỉ ngơi.",

    # 22 语气副词
    "我当然愿意帮助你。": "Tôi đương nhiên là sẵn lòng giúp đỡ bạn rồi.",
    "当然没问题，欢迎你参加。": "Đương nhiên không thành vấn đề, rất hoan nghênh bạn tham gia.",
    "这个问题其实不难。": "Vấn đề này thực ra không hề khó.",
    "我以为他回国了，其实他一直在中国。": "Tôi ngỡ anh ấy đã về nước rồi, thực ra anh ấy vẫn luôn ở Trung Quốc.",
    "经过一年多的努力，工作终于完成了。": "Trải qua hơn một năm nỗ lực, công việc cuối cùng cũng đã hoàn thành.",
    "考试终于都结束了，我太开心了。": "Kỳ thi rốt cuộc cũng kết thúc hết rồi, tôi vui sướng quá.",
    "课文有点儿难，我读了三遍才2明白。": "Bài khóa hơi khó, tôi đọc đến ba lần mới hiểu ra.",
    "这些旧书才3卖了二十多块钱。": "Chỗ sách cũ này mà chỉ bán được có hơn hai mươi tệ thôi.",
    "她今天六点半就起床了。": "Hôm nay mới sáu rưỡi sáng cô ấy đã dậy rồi.",
    "这个句子不难，我听一遍就懂了。": "Câu này không khó, tôi nghe qua một lần là hiểu ngay.",

    # 23 否定副词
    "你可以用手机买票，不必去车站，非常方便。": "Bạn có thể dùng điện thoại để mua vé, không cần phải ra bến xe, cực kỳ thuận tiện.",
    "不用担心，我们帮你一起准备。": "Không cần lo lắng đâu, chúng mình sẽ giúp bạn cùng chuẩn bị.",

    # 24 为1、向1、关于
    "生日快乐，这是我为你做的蛋糕。": "Sinh nhật vui vẻ, đây là chiếc bánh kem tôi tự tay làm riêng cho bạn.",
    "大家为这次比赛做了很多准备。": "Mọi người đã làm rất nhiều sự chuẩn bị cho cuộc thi lần này.",
    "如果你不能去上课，应该向老师请假。": "Nếu bạn không thể đến lớp học, bạn nên xin phép thầy giáo.",
    "老师让我们向她学习。": "Thầy giáo bảo chúng tôi hãy noi gương học tập cô ấy.",
    "关于这个问题，我们还需要认真讨论。": "Về vấn đề này, chúng ta vẫn cần phải thảo luận kỹ càng.",
    "关于比赛的时间，我明天一定告诉大家。": "Về thời gian diễn ra cuộc thi, ngày mai tôi nhất định sẽ thông báo cho mọi người.",

    # 25 向2
    "他向门口走去，好像准备离开。": "Anh ấy bước về phía cửa ra vào, hình như chuẩn bị rời đi.",
    "老师让大家看向前边。": "Thầy giáo bảo mọi người hãy nhìn hướng về phía trước.",

    # 26 为了、为2
    "为了身体健康，我们应该坚持锻炼。": "Để có được sức khỏe tốt, chúng ta nên kiên trì rèn luyện thân thể.",
    "妈妈经常为了工作睡得很晚。": "Mẹ thường xuyên vì công việc bận rộn mà ngủ rất muộn.",
    "大家都为我的好成绩感到高兴。": "Mọi người đều cảm thấy vui mừng trước thành tích học tập tốt của tôi.",
    "同学们都在为下个星期的考试做准备。": "Các bạn học sinh đều đang tích cực chuẩn bị cho kỳ thi tuần sau.",

    # 27 把、被
    "你把箱子放在这儿吧。": "Bạn đem chiếc vali đặt ở chỗ này đi.",
    "我的自行车被朋友借走了。": "Chiếc xe đạp của tôi đã bị bạn mượn mang đi mất rồi.",

    # 28 根据
    "大家可以根据兴趣选择自己喜欢的运动。": "Mọi người có thể căn cứ theo sở thích để lựa chọn môn thể thao mình yêu thích.",
    "根据要求，我们必须参加明天的会议。": "Căn cứ theo yêu cầu, chúng ta bắt buộc phải tham gia cuộc họp ngày mai.",

    # 29 或、或者
    "我喝茶或/或者咖啡都可以。": "Tôi uống trà hoặc cà phê đều được cả.",
    "我们可以打车或/或者坐地铁去。": "Chúng ta có thể bắt taxi hoặc đi tàu điện ngầm đến đó.",

    # 30 只有、只要、不但、而且、如果、可1、可是、然后
    "只有大家一起想办法，才能解决这个问题。": "Chỉ có khi mọi người cùng nhau nghĩ cách thì mới có thể giải quyết được vấn đề này.",
    "只要你想学，就一定能学好。": "Chỉ cần bạn có lòng muốn học, thì nhất định sẽ học giỏi được.",
    "我不但学习了中文，而且认识了很多新朋友。": "Tôi không những đã học được tiếng Trung, mà còn làm quen được với rất nhiều bạn mới.",
    "如果你有时间，我想请你参加我的生日晚会。": "Nếu bạn có thời gian, tôi muốn mời bạn đến dự buổi tiệc sinh nhật của tôi.",
    "她特别想来中国看看，可一直没有合适的机会。": "Cô ấy đặc biệt muốn đến Trung Quốc một chuyến, nhưng cứ mãi chưa có cơ hội thích hợp.",
    "我很早就到了机场，可是没想到飞机晚点了。": "Tôi đã đến sân bay từ rất sớm, thế nhưng không ngờ máy bay lại bị hoãn chuyến.",
    "你先去那边买票，然后过来找我。": "Bạn qua đằng kia mua vé trước đi, sau đó hãy quay lại đây tìm tôi.",

    # 31 的话
    "你喜欢的话，就送给你吧。": "Nếu bạn thích thì tặng luôn cho bạn đấy.",
    "如果明天下雨的话，我们就不去爬山了。": "Nếu ngày mai mà trời mưa thì chúng mình sẽ không đi leo núi nữa.",

    # 32 同位短语
    "首都北京、她一个人、我们学生": "Thủ đô Bắc Kinh, một mình cô ấy, học sinh chúng tôi.",

    # 33 动补短语2
    "漂亮极了、累坏了、看不懂、写得完": "Đẹp cực kỳ, mệt đứt hơi, nhìn không hiểu, viết cho xong hết.",

    # 34 数量重叠
    "工作要一步一步地做。": "Công việc cần phải làm từng bước từng bước một cách cẩn thận.",
    "老师一句一句地教我们读课文。": "Thầy giáo dạy chúng tôi đọc bài khóa từng câu từng câu một.",

    # 35 不A 不 B
    "这件衣服不大不小，特别合适。": "Bộ quần áo này không to cũng không nhỏ, vừa vặn vô cùng.",
    "最近天气不冷不热，很舒服。": "Thời tiết dạo này không lạnh cũng không nóng, rất dễ chịu.",

    # 36 不一会儿
    "不一会儿，张校长就来了。": "Chẳng mấy chốc sau, hiệu trưởng Trương đã bước tới.",
    "时间不一会儿就过去了。": "Thời gian thoắt một cái đã trôi qua mất rồi.",

    # 37 看来
    "电梯坏了，看来咱们只能走楼梯了。": "Thang máy hỏng rồi, xem ra chúng mình chỉ có thể đi cầu thang bộ thôi.",
    "这么晚了，看来他今天不会来了。": "Muộn thế này rồi, xem chừng hôm nay anh ấy sẽ không đến đâu.",

    # 38 在……看来
    "在同事们看来，她对工作非常认真。": "Dưới con mắt của các đồng nghiệp, cô ấy đối với công việc vô cùng tận tâm.",
    "在我看来，坚持读书是一种很好的习惯。": "Theo quan điểm của tôi, kiên trì đọc sách là một thói quen rất tốt.",

    # 39 越来越
    "听说学习中文的年轻人越来越多。": "Nghe nói số người trẻ học tiếng Trung ngày càng nhiều hơn.",
    "我越来越习惯这里的生活了。": "Tôi ngày càng quen dần với nếp sống ở nơi đây.",

    # 40 看起来
    "这些菜看起来都很好吃。": "Mấy món ăn này trông có vẻ đều rất ngon miệng.",
    "那个新来的老师看起来很年轻。": "Thầy giáo mới chuyển đến trông có vẻ còn rất trẻ.",

    # 41 看上去
    "这道题看上去很难，其实很简单。": "Đề bài này nhìn lướt qua thì tưởng khó, thực ra lại rất đơn giản.",
    "她看上去不像五十多岁的人。": "Cô ấy nhìn bề ngoài trông chẳng giống người ngoài năm mươi tuổi chút nào.",

    # 42 一般来说
    "一般来说，早上锻炼身体比较好。": "Nói chung thông thường, tập thể dục vào buổi sáng là tốt hơn cả.",
    "一般来说，学习外语需要多练习。": "Thông thường mà nói, học ngoại ngữ đòi hỏi phải luyện tập thật nhiều.",

    # 43 不怎么样
    "我觉得这些照片照得不怎么样。": "Tôi thấy những tấm ảnh này chụp chẳng ra làm sao cả.",
    "虽然考试前我复习了很长时间，但是成绩不怎么样。": "Tuy trước kỳ thi tôi đã ôn tập rất lâu, nhưng kết quả thi chẳng được như ý.",

    # 44 除了……（以外），……还/也/都……
    "除了看新闻（以外），人们还/也可以在网上看电影、买东西。": "Ngoài việc đọc tin tức ra, mọi người còn có thể xem phim, mua sắm trên mạng.",
    "除了北京（以外），别的城市我都没去过。": "Ngoại trừ Bắc Kinh ra, các thành phố khác tôi đều chưa từng đặt chân tới.",

    # 45 从……起
    "从那天起，我们就变成了好朋友。": "Kể từ ngày hôm đó trở đi, chúng tôi đã trở thành bạn tốt của nhau.",
    "从现在起，我一定要努力学习。": "Kể từ lúc này trở đi, tôi nhất định sẽ nỗ lực học tập thật chăm chỉ.",

    # 46 对……来说
    "对他来说，这个机会非常重要。": "Đối với anh ấy, cơ hội lần này có ý nghĩa vô cùng quan trọng.",
    "对我来说，学习汉语很有意思。": "Đối với cá nhân tôi, việc học tiếng Hán là rất thú vị.",

    # 47 一……也/都+不/没……
    "来中国以前，我一句汉语也不会说。": "Trước khi đến Trung Quốc, tôi một câu tiếng Hán cũng không biết nói.",
    "你说的这些地方我一个都没去过。": "Những địa danh bạn vừa kể, tôi chưa từng đi qua một nơi nào cả.",

    # 48 一点儿也不
    "快要考试了，你怎么一点儿也不着急？": "Sắp thi đến nơi rồi, sao bạn lại chẳng có vẻ sốt ruột chút nào thế?",
    "今天天气很好，一点儿也不冷。": "Hôm nay thời tiết rất đẹp, một chút cũng chẳng lạnh.",

    # 49 越……越……
    "我想认识中国朋友，越多越好。": "Tôi muốn làm quen với các bạn Trung Quốc, càng đông thì càng tốt.",
    "医生让我多休息，休息得越多，好得越快。": "Bác sĩ khuyên tôi nên nghỉ ngơi nhiều, nghỉ càng nhiều thì bệnh khỏi càng mau.",

    # 50 （在）……以前/以后/前/后
    "考试以前，你一定要认真复习。": "Trước khi thi cử, bạn nhất định phải ôn tập thật kỹ lưỡng.",
    "来到中国以后，我慢慢习惯了这里的生活。": "Sau khi đặt chân tới Trung Quốc, tôi dần dần thích nghi với cuộc sống nơi đây.",
    "睡觉前别忘记吃药。": "Trước khi đi ngủ chớ quên uống thuốc nhé.",
    "放学后，我要参加留学生篮球比赛。": "Sau khi tan học, tôi sẽ tham gia giải đấu bóng rổ của lưu học sinh.",
    "在离开中国以前，我一定要去长城看看。": "Trước khi rời khỏi Trung Quốc, tôi nhất định phải đến Vạn Lý Trường Thành tham quan một chuyến.",

    # 51 X什么(啊)
    "难过什么啊，你的成绩不是挺好的吗？": "Buồn bã nỗi gì chứ, thành tích của bạn chẳng phải khá tốt rồi sao?",
    "方便什么啊，附近一个超市都没有。": "Tiện lợi nỗi gì chứ, xung quanh đây đến một cái siêu thị cũng chẳng có.",

    # 52 该……了
    "八点了，该上课了。": "Tám giờ rồi, đến giờ phải vào lớp rồi.",
    "下周要考试，我该复习了。": "Tuần sau sắp thi rồi, tôi phải bắt tay vào ôn bài thôi.",

    # 53 在……上/下/中
    "在学习上，老师和同学给了我许多帮助。": "Về mặt học tập, thầy cô và bạn bè đã giúp đỡ tôi rất nhiều.",
    "在父母的影响下，我从小就对中文很感兴趣。": "Dưới sự ảnh hưởng của cha mẹ, từ nhỏ tôi đã rất có hứng thú với tiếng Trung.",
    "在这次比赛中，我认识了一些新朋友。": "Trong cuộc thi lần này, tôi đã quen biết thêm được một số người bạn mới.",

    # 54 动词或动词性短语、形容词或形容词性短语作主语
    "哭没有用。": "Khóc lóc chẳng có ích lợi gì đâu.",
    "多穿一点儿比较好。": "Mặc ấm thêm một chút thì tốt hơn.",
    "太胖了不好，太瘦了也不好。": "Béo quá thì không tốt, mà gầy quá cũng chẳng tốt.",

    # 55 主谓短语作主语
    "你来也可以。": "Bạn đến đây cũng được thôi.",
    "身体健康最重要。": "Thân thể khỏe mạnh là điều quan trọng nhất.",

    # 56 多项定语
    "我昨天新买的那条黑色的裤子你放在哪儿了？": "Chiếc quần màu đen mới mua hôm qua của tôi bạn đã để ở đâu rồi?",
    "前面那个穿着蓝衬衫的短头发高个子的老人就是我的中文老师。": "Cụ già vóc dáng cao ráo, tóc ngắn đang mặc chiếc áo sơ mi xanh phía trước chính là thầy giáo tiếng Trung của tôi.",

    # 57 动词+到/住/走/上
    "火车票你买到了没有？": "Vé tàu hỏa bạn đã mua được chưa?",
    "老师说的话我都记住了。": "Những lời thầy giáo căn dặn tôi đều đã ghi nhớ kỹ trong lòng.",
    "我的自行车让朋友骑走了。": "Chiếc xe đạp của tôi bị người bạn đạp đi mất rồi.",
    "下班的时候，别忘了关上电脑。": "Lúc tan sở ra về, đừng quên tắt máy vi tính nhé.",

    # 58 趋向补语的引申用法：表示结果意义
    "我们终于想出了一个好办法。": "Cuối cùng chúng tôi cũng đã nghĩ ra được một cách hay.",
    "你想起她的名字了没有？": "Bạn đã nhớ lại được tên của cô ấy hay chưa?",
    "请在这儿写下您的电话。": "Xin hãy viết lại số điện thoại của quý khách vào đây.",

    # 59 趋向补语的引申用法：表示动作行为的开始
    "饿了一天，我们终于吃上饭了。": "Đói lả cả ngày, cuối cùng chúng tôi cũng được ăn bữa cơm rồi.",
    "儿子刚到家就玩上了电脑游戏。": "Con trai vừa về đến nhà là bắt đầu cắm cúi chơi trò chơi điện tử ngay.",
    "他们一见面就聊起来了。": "Họ vừa mới gặp nhau là đã trò chuyện rôm rả ngay tức thì.",
    "妈妈一出门，孩子就哭起来了。": "Mẹ vừa bước chân ra khỏi cửa là đứa bé liền òa khóc lên.",

    # 60 趋向补语的引申用法：表示动作行为的持续
    "虽然学习汉语不容易，但是我一定会坚持下去。": "Tuy học tiếng Hán không hề dễ dàng, nhưng tôi nhất định sẽ kiên trì đến cùng.",
    "在老师的帮助下，我一定可以学下去。": "Dưới sự giúp đỡ tận tình của thầy cô, tôi nhất định có thể tiếp tục học tập tốt.",
    "在过去的一年里，我把每天练习汉字的习惯坚持下来了。": "Trong suốt một năm qua, tôi đã duy trì giữ vững được thói quen luyện viết chữ Hán mỗi ngày.",
    "这三天玩下来太累了，我得好好休息休息。": "Trải qua 3 ngày đi chơi vừa rồi mệt quá chừng, tôi phải nghỉ ngơi cho thật đã.",

    # 61 可能补语1
    "老师说的话你听得懂吗？": "Lời giảng của thầy giáo bạn có nghe hiểu được không?",
    "黑板上的字太小，我看不清楚。": "Chữ viết trên bảng bé quá, tôi nhìn không rõ được.",

    # 62 形容词+得很
    "这里的环境好得很。": "Môi trường sống ở nơi đây tốt lắm luôn.",
    "这儿从早到晚都有风，凉快得很。": "Ở chỗ này từ sáng tới tối lúc nào cũng có gió, mát mẻ vô cùng.",

    # 63 形容词/动词+极了/坏了
    "看见考试成绩的时候，我高兴极了。": "Khi nhìn thấy bảng điểm bài thi, tôi sung sướng vô cùng.",
    "爬山回来，大家都累坏了。": "Leo núi trở về, mọi người ai nấy đều mệt đứt cả hơi.",

    # 64 表示动作结束到某个时间点的间隔时间
    "开学已经两个星期了。": "Năm học mới đã khai giảng được 2 tuần nay rồi.",
    "这件事已经过去五年了。": "Chuyện đó đến nay đã trôi qua được 5 năm trời rồi.",

    # 65 “怎样+动词”的特指问句
    "怎样才能学好汉语呢？": "Làm thế nào mới có thể học giỏi tiếng Hán đây?",
    "中国人是怎样过新年的？": "Người Trung Quốc đón mừng Tết năm mới như thế nào?",

    # 66 用反问句表示强调：不是……吗？
    "你不是写完作业了吗？": "Chẳng phải bạn đã làm xong bài tập về nhà rồi sao?",
    "考试不是下个星期一吗？": "Kỳ thi chẳng phải là vào thứ Hai tuần sau đó sao?",

    # 67 “把”字句1：在/到+处所
    "你把箱子放在这儿吧。": "Bạn đem chiếc rương đặt ở đây đi.",
    "我们把桌子搬到教室外边了。": "Chúng tôi đã khiêng chiếc bàn chuyển ra bên ngoài phòng học rồi.",

    # 68 “把”字句1：给+宾语
    "我们把礼物送给老师了。": "Chúng tôi đã trao tặng món quà cho thầy giáo rồi.",
    "他把那本书借给我了。": "Anh ấy đã cho tôi mượn cuốn sách đó rồi.",

    # 69 “把”字句1：补语
    "我已经把晚饭准备好了。": "Tôi đã chuẩn bị xong xuôi bữa cơm tối rồi.",
    "咱们把这些桌子搬进去吧。": "Chúng mình hãy khiêng mớ bàn này dời vào bên trong đi.",
    "妈妈把衣服洗得干干净净。": "Mẹ đã giặt giũ đống quần áo sạch bong tinh tươm.",

    # 70 被动句1：被+宾语
    "我的词典被朋友借走了。": "Cuốn từ điển của tôi đã bị người bạn mượn mất rồi.",
    "冰箱里的水果被谁吃了？": "Số hoa quả để trong tủ lạnh đã bị ai ăn mất rồi?",

    # 71 被动句1：被+动词
    "桌子上的作业被拿走了。": "Tập bài tập trên bàn đã bị cầm đi mất rồi.",
    "病人已经被送到医院了。": "Bệnh nhân đã được đưa chuyển tới bệnh viện kịp thời rồi.",

    # 72 “着”表示动作的伴随
    "老师总是笑着回答大家的问题。": "Thầy giáo lúc nào cũng mỉm cười tươi tắn giải đáp các câu hỏi của mọi người.",
    "我喜欢听着音乐做运动。": "Tôi thích vừa lắng nghe âm nhạc vừa rèn luyện thể thao.",

    # 73 A比B+更/还+形容词
    "她的汉语比我更好。": "Tiếng Hán của cô ấy thậm chí còn giỏi hơn cả tôi.",
    "今天比昨天还冷。": "Hôm nay trời còn buốt lạnh hơn cả ngày hôm qua.",

    # 74 A跟B一样
    "我的爱好跟他一样。": "Sở thích của tôi hoàn toàn giống như anh ấy.",
    "他买的新手机跟我的一样。": "Chiếc điện thoại mới anh ấy mua giống y hệt như của tôi.",

    # 75 A跟B一样+形容词
    "坐地铁跟坐公交车一样方便。": "Đi tàu điện ngầm cũng thuận tiện y như đi xe buýt vậy.",
    "这个房间跟那个房间一样大。": "Căn phòng này cũng rộng rãi y chang như căn phòng đằng kia.",

    # 76 A不比B+形容词
    "这张画不比那张好看。": "Bức tranh này cũng chẳng đẹp hơn bức tranh kia đâu.",
    "我的汉语水平不比他高。": "Trình độ tiếng Hán của tôi cũng chẳng cao hơn anh ấy là bao.",

    # 77 A比B+多/少/早/晚+动词+数量短语
    "我比他早到十分钟。": "Tôi đến sớm hơn anh ấy mười phút.",
    "哥哥比弟弟多吃了三个饺子。": "Anh trai đã ăn nhiều hơn em trai ba cái sủi cảo.",

    # 78 存现句3：表示出现
    "前边开过来一辆出租车。": "Phía trước đang có một chiếc xe taxi chạy tới.",
    "楼上搬来了一家人。": "Ở tầng trên vừa mới dọn đến một hộ gia đình.",
    "校门外走进来几个学生。": "Từ ngoài cổng trường vừa có mấy bạn học sinh bước vào.",

    # 79 存现句3：表示消失
    "树上飞走了三只小鸟。": "Trên cành cây đã bay vút đi mất ba chú chim non.",
    "他家里跑丢了一只羊。": "Nhà anh ấy bị chạy lạc mất một con cừu.",

    # 80 “是……的”句2：看法态度
    "这个问题其实是很简单的。": "Vấn đề này trên thực tế là hết sức đơn giản.",
    "多写多练对学习汉字是很有帮助的。": "Viết nhiều luyện nhiều là việc mang lại sự trợ giúp rất lớn cho việc học chữ Hán.",

    # 81 重动句
    "我们昨天打篮球打了一个下午。": "Hôm qua chúng tôi đã chơi bóng rổ suốt cả một buổi chiều.",
    "你今天上课上得怎么样？": "Hôm nay bạn học tiết học trên lớp thấy thế nào?",

    # 82 先……，再/然后……
    "你先去买门票，再来这里找我。": "Bạn đi mua vé vào cửa trước đi, rồi hãy quay lại đây tìm tôi.",
    "我想先吃饭，然后回房间休息。": "Tôi muốn ăn cơm trước, rồi sau đó trở về phòng nghỉ ngơi.",

    # 83 或者……，或者……
    "每周末，我们或者踢足球，或者打篮球。": "Mỗi dịp cuối tuần, chúng tôi hoặc là đi đá bóng, hoặc là đi chơi bóng rổ.",
    "春节的时候，人们或者回家过节，或者出门旅游。": "Vào dịp Tết, người ta hoặc là về quê ăn Tết, hoặc là ra ngoài đi du lịch.",

    # 84 一会儿……，一会儿……
    "他一会儿进来，一会儿出去，忙得很。": "Anh ấy khi thì bước vào, lúc lại chạy ra, bận túi bụi cả lên.",
    "最近的天气一会儿冷，一会儿热。": "Thời tiết dạo này lúc thì rét run, lúc lại nóng nực thất thường.",

    # 85 又……，又……
    "这件衣服又便宜又好看。": "Bộ đồ này vừa rẻ tiền lại vừa đẹp mắt.",
    "那个又高又漂亮的女孩儿是谁？": "Cô gái vừa cao ráo lại vừa xinh xắn đằng kia là ai vậy?",

    # 86 一边……，一边……
    "他一边工作，一边学习中文。": "Anh ấy vừa làm việc lại vừa chăm chỉ học tiếng Trung.",
    "我喜欢一边跑步，一边听音乐。": "Tôi thích vừa chạy bộ vừa thưởng thức âm nhạc.",

    # 87 不但……，而且……
    "不但我学习中文，而且我的弟弟也学习中文。": "Không những bản thân tôi học tiếng Trung, mà ngay cả em trai tôi cũng học tiếng Trung.",
    "我哥哥不但会打篮球，而且打得很好。": "Anh trai tôi không những biết chơi bóng rổ, mà còn chơi rất điêu luyện.",

    # 88 虽然……，可是……
    "房间虽然不大，可是很干净。": "Căn phòng tuy không lớn, nhưng lại rất sạch sẽ ngăn nắp.",
    "虽然天气很冷，可是他还是坚持每天锻炼。": "Mặc dù thời tiết rất giá buốt, thế nhưng anh ấy vẫn kiên trì rèn luyện thân thể mỗi ngày.",

    # 89 如果……，就……
    "如果明天不下雨，我们就去爬山。": "Nếu ngày mai trời không mưa, chúng mình sẽ rủ nhau đi leo núi.",
    "如果你需要帮忙，就给我打电话。": "Nếu bạn cần sự giúp đỡ, hãy cứ gọi điện thoại cho tôi nhé.",

    # 90 ……的话，就……
    "你有时间的话，就一起去吧。": "Nếu bạn có thời gian rảnh rỗi thì cùng đi chung cho vui nhé.",
    "你觉得满意的话，咱们就买。": "Nếu bạn cảm thấy ưng ý vừa lòng thì chúng mình mua luôn.",

    # 91 只有……，才……
    "只有努力学习，才能得到好成绩。": "Chỉ có nỗ lực học hành chăm chỉ thì mới có thể đạt được thành tích tốt.",
    "只有多听、多说、多看，你的中文水平才能提高。": "Chỉ có nghe nhiều, nói nhiều và đọc nhiều thì trình độ tiếng Trung của bạn mới có thể tiến bộ.",

    # 92 只要……，就……
    "只要你坚持学习，就一定能学好。": "Chỉ cần bạn kiên trì theo đuổi việc học, nhất định bạn sẽ học rất giỏi.",
    "只要你同意，我们就这么决定了。": "Chỉ cần bạn gật đầu đồng ý là chúng ta cứ quyết định như vậy nhé.",

    # 93 为了……，……
    "为了考上大学，她每天努力学习。": "Để thi đỗ vào trường đại học, ngày nào cô ấy cũng ra sức dùi mài kinh sử.",
    "为了早点儿到家，我打算坐飞机。": "Để có thể về tới nhà sớm hơn một chút, tôi dự định đi bằng máy bay.",

    # 94 ……了……（就）……
    "他吃了药就好多了。": "Anh ấy uống thuốc xong là cảm thấy đỡ hơn rất nhiều rồi.",
    "我打算下了课就去图书馆。": "Tôi định tan học xong một cái là đến thư viện ngay.",

    # 95 概数表达法2：用“大概”表示概数
    "你大概多长时间能到？": "Bạn đại khái khoảng bao lâu nữa thì có thể đến nơi?",
    "这些水果大概五十块钱。": "Chỗ hoa quả này đại khái khoảng chừng năm mươi tệ.",

    # 96 概数表达法2：相邻数词连用表示概数
    "教室里来了七八个学生。": "Trong phòng học đã có khoảng bảy tám bạn học sinh bước tới.",
    "从我家到学校，走路需要十五六分钟。": "Từ nhà tôi đến trường học, đi bộ mất khoảng mười lăm mười sáu phút."
}

# 96 Items Metadata Definition for HSK 3
HSK3_META = [
    # 01
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Tiền tố thân mật / thâm niên: 老- (Lǎo-)",
        "structure": "老 + Họ (xưng hô thân mật) | 老 + Đại từ / Số từ",
        "explanationVi": "Tiền tố '老-' đứng trước họ của người quen thân, đồng nghiệp có tuổi tác hoặc thâm niên lớn hơn để gọi một cách gần gũi, tôn trọng (như 老李 - Lão Lý, 老王 - Lão Vương, 老张 - Lão Trương).",
        "tips": "Khác với '小-' (dành cho người ít tuổi hơn), '老-' dùng cho người ngang tuổi hoặc nhiều tuổi hơn."
    },
    # 02
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Hậu tố danh từ hoá: -家, -子, -员",
        "structure": "Gốc từ + 家 (chuyên gia/nghệ sĩ) / 子 (sự vật) / 员 (thành viên/nhân viên)",
        "explanationVi": "Các hậu tố cấu tạo danh từ rất phổ biến:\n• -家: Chỉ người có chuyên môn sâu, nghệ sĩ (画家 - họa sĩ, 科学家 - nhà khoa học).\n• -子: Hậu tố tạo danh từ cụ thể (屋子 - căn phòng, 椅子 - cái ghế, 儿子 - con trai).\n• -员: Chỉ thành viên trong tổ chức, người làm nghề (运动员 - vận động viên, 服务员 - nhân viên phục vụ).",
        "tips": "Chữ '子' khi làm hậu tố luôn đọc thanh nhẹ (zi)."
    },
    # 03
    {
        "category": "prepositions", "categoryName": "Giới từ & Phương vị", "categoryIcon": "🛡️",
        "titleVi": "Phương vị từ Bốn phương: Đông, Tây, Nam, Bắc (东, 西, 南, 北)",
        "structure": "东 (Đông), 南 (Nam), 西 (Tây), 北 (Bắc) | + 方 (vùng/miền) | 中间 (ở giữa)",
        "explanationVi": "Hệ thống từ chỉ phương hướng địa lý: 东方 (phương Đông), 西方 (phương Tây), 南方 (miền Nam), 北方 (miền Bắc) và vị trí ở giữa: 中间 (zhōngjiān).",
        "tips": "Người Trung Quốc thường gọi thứ tự là 'Đông Nam Tây Bắc' (东南西北)."
    },
    # 04
    {
        "category": "modal_verbs_separable", "categoryName": "Động từ năng nguyện & Ly hợp", "categoryIcon": "⚡",
        "titleVi": "Động từ năng nguyện nâng cao: 需要, 该, 应该, 愿意, 得",
        "structure": "Chủ ngữ + 需要 / 应该 / 该 / 愿意 / 得 (děi) + Động từ",
        "explanationVi": "• 需要 (xūyào): Cần, có nhu cầu cần làm.\n• 应该 (yīnggāi) / 该: Nên, cần phải (bổn phận, trách nhiệm lý lẽ).\n• 愿意 (yuànyì): Sẵn lòng, bằng lòng, tình nguyện.\n• 得 (děi): Phải (bắt buộc do tình thế, hoàn cảnh).",
        "tips": "Chú ý phát âm: Chữ '得' khi mang nghĩa 'phải' đọc là 'děi', không đọc là 'de'."
    },
    # 05
    {
        "category": "modal_verbs_separable", "categoryName": "Động từ năng nguyện & Ly hợp", "categoryIcon": "⚡",
        "titleVi": "Từ ly hợp động tân: 放假, 见面, 结婚, 洗澡",
        "structure": "Động từ + Thành phần xen giữa (trợ từ 了/过, số lượng, thời lượng) + Danh từ",
        "explanationVi": "Là các từ có cấu trúc Động từ + Tân ngữ. Khi thêm các thành phần phụ, bắt buộc phải chèn vào giữa:\n• 放假 -> 放了假\n• 见面 -> 见了面 / 见个面\n• 结婚 -> 结了婚\n• 洗澡 -> 洗个澡 / 洗了一次澡",
        "tips": "Tuyệt đối không nói '见面他', mà phải nói '跟他见面'."
    },
    # 06
    {
        "category": "modal_verbs_separable", "categoryName": "Động từ năng nguyện & Ly hợp", "categoryIcon": "⚡",
        "titleVi": "Từ ly hợp động bổ: 打开, 看见, 离开, 完成, 分开",
        "structure": "Động từ + 得 / 不 + Bổ ngữ (Khả năng)",
        "explanationVi": "Các từ gồm động từ kết hợp với bổ ngữ. Khi biểu đạt khả năng có thể hoặc không thể thực hiện, chèn '得' hoặc '不' vào giữa:\n• 打开 -> 打得开 / 打不开 (mở được / không mở được)\n• 看见 -> 看得见 / 看不见 (nhìn thấy / không nhìn thấy)\n• 离开 -> 离得开 / 离不开 (rời xa được / không dứt ra được)\n• 完成 -> 完得成 / 完不成 (hoàn thành được / không xong được)\n• 分开 -> 分得开 / 分不开 (tách rời được / không tách rời được)",
        "tips": "Đây là dạng thức biểu đạt khả năng cực kỳ phổ biến trong đời sống."
    },
    # 07
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ & Đại từ", "categoryIcon": "🔥",
        "titleVi": "Đại từ nghi vấn cách thức & tính chất: 怎样 (Zěnyàng - Như thế nào / Ra sao)",
        "structure": "怎样 + Động từ (Làm thế nào?) | Chủ ngữ + 是怎样一个人 / 事情? (Là người/việc ra sao?)",
        "explanationVi": "• 怎样 + Động từ: Hỏi về phương thức, cách thức tiến hành hành vi (tương đương với 怎么 + Động từ nhưng mang sắc thái trang trọng hơn).\n• Hỏi về tính chất, phẩm chất của người hoặc sự vật ('như thế nào', 'ra làm sao').",
        "tips": "'怎样' có văn phong viết và lịch thiệp hơn so với '怎么样'."
    },
    # 08
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Đại từ phi nghi vấn - Cách dùng bất kỳ (任指: Bất cứ ai / ở đâu / cái gì cũng...)",
        "structure": "Đại từ nghi vấn (谁 / 哪儿 / 什么) + 都 / 也 + Động từ | 谁...谁就... / 想吃什么就吃什么",
        "explanationVi": "Dùng đại từ nghi vấn nhưng không để hỏi, mà để chỉ tất cả mọi đối tượng không loại trừ ai:\n1. 任指 với 都/也: 谁都可以 (ai cũng được); 哪儿都没去 (chẳng đi đâu cả).\n2. Điệp đại từ nghi vấn: 谁感兴趣谁就去 (ai thích thì người đó đi); 想吃什么就吃什么 (muốn ăn gì thì ăn nấy).",
        "tips": "Cấu trúc 'Ai... thì người đó...' thể hiện sự tự do, tùy ý lựa chọn của đối tượng."
    },
    # 09
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Đại từ phi nghi vấn - Cách dùng không xác định (不定指: Nào đó / Gì đó)",
        "structure": "Động từ + (点儿) 什么 (cái gì đó) | 哪儿 (nơi nào đó) | 谁 (ai đó) | 哪天 (hôm nào đó)",
        "explanationVi": "Dùng đại từ nghi vấn để chỉ một người, sự vật, thời gian hay địa điểm chưa rõ ràng hoặc không muốn/không cần nói cụ thể ra (như 吃点儿什么 - ăn chút gì đó; 哪天一起去 - hôm nào đó cùng đi; 见过谁 - gặp ai đó).",
        "tips": "Tương đương với 'something, someone, somewhere' trong tiếng Anh."
    },
    # 10
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Đại từ nhân xưng: 别人 (Người khác) & 咱们 (Chúng mình / Chúng ta)",
        "structure": "别人 (người khác) | 咱们 (bao gồm cả người nghe)",
        "explanationVi": "• 别人 (biéren): Chỉ người khác ngoài bản thân và người đối thoại.\n• 咱们 (zánmen): 'Chúng mình', 'chúng ta' — bao hàm CẢ người nói VÀ người nghe (khác với 我们 đôi khi chỉ nhóm người nói không bao gồm người nghe).",
        "tips": "Dùng '咱们' tạo cảm giác vô cùng thân thiết, kéo gần khoảng cách."
    },
    # 11
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Đại từ chỉ thị phân biệt: 别的 & 其他 (Cái khác, người khác)",
        "structure": "别的 / 其他 + Danh từ | 别的 (đứng một mình làm đại từ)",
        "explanationVi": "Dùng để chỉ đối tượng khác ngoài phạm vi đã nhắc đến (như 别的城市 - thành phố khác; 别的国家 - quốc gia khác; 其他同学 - các bạn học khác; 其他爱好 - sở thích khác).",
        "tips": "'其他' trang trọng hơn '别的' và có thể dùng cho cả người lẫn sự vật."
    },
    # 12
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Hệ thống Lượng từ danh từ HSK 3: 把, 双, 张, 种, 层, 辆, 节, 所, 班, 段...",
        "structure": "Số từ + Lượng từ + Danh từ",
        "explanationVi": "Bảng lượng từ phong phú của HSK 3:\n• 把 (cái ô, dao, ghế có tay vịn)\n• 双 (đôi giày, đũa)\n• 张 (tờ giấy, bức ảnh, cái bàn)\n• 种 (loại, chủng loại hoa quả, người)\n• 层 (tầng lầu)\n• 封 (lá thư)\n• 页 (trang sách)\n• 辆 (chiếc xe)\n• 节 (tiết học)\n• 所 (ngôi trường, bệnh viện)\n• 班 (chuyến xe, ca làm)\n• 段 (đoạn văn, đoạn đường)\n• 头 (con bò, con lợn)\n• 句 (câu nói)\n• 斤/公斤 (cân/ký)\n• 角/毛 (hào), 刻 (15 phút), 米 (mét).",
        "tips": "Việc dùng đúng lượng từ chuyên dụng là thước đo độ chuẩn xác của tiếng Trung trung cấp."
    },
    # 13
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Lượng từ mượn từ đồ đựng: 碗 (Bát) & 盘 (Đĩa)",
        "structure": "Số từ + 碗 / 盘 + Món ăn",
        "explanationVi": "Mượn danh từ chỉ đồ đựng trong ăn uống để làm lượng từ đong đếm (như 一碗面条 - một bát mì; 一碗米饭 - một bát cơm; 一盘饺子 - một đĩa sủi cảo).",
        "tips": "Tương tự như 一杯水 (một ly nước), 一瓶可乐 (một chai coca)."
    },
    # 14
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Động lượng từ biểu thị số lần / lượt: 口, 回, 遍, 声",
        "structure": "Động từ + Số từ + 口 / 回 / 遍 / 声",
        "explanationVi": "• 口 (kǒu): Hớp, ngụm, miếng (喝了一口茶 - uống một ngụm trà).\n• 回 (huí): Hồi, bận, lần (好几回 - mấy bận rồi).\n• 遍 (biàn): Lượt, lần (nhấn mạnh quá trình từ đầu đến cuối: 读一遍 - đọc hết một lượt).\n• 声 (shēng): Tiếng (说了一声 - cất một tiếng cảm ơn).",
        "tips": "Phân biệt: '次' là số lần thông thường; '遍' là làm trọn vẹn từ đầu đến cuối (như đọc sách, xem phim)."
    },
    # 15
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Trùng điệp lượng từ biểu thị 'Mỗi một / Từng cái một': 个个, 张张",
        "structure": "Lượng từ lặp lại (个个 / 张张 / 件件) + 都 + Tính từ",
        "explanationVi": "Lặp lại lượng từ mang ý nghĩa 'mỗi một', 'tất cả không sót cái nào' và phía sau bắt buộc đi kèm với phó từ '都' (như 苹果个个都很大 - quả táo nào quả nấy đều to; 张张都很漂亮 - bức nào cũng đều đẹp).",
        "tips": "Nhấn mạnh tính toàn thể và chất lượng đồng đều."
    },
    # 16
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ mức độ phong phú: 比较, 更, 特别, 挺, 有些, 越, 极",
        "structure": "比较 / 更 / 特别 / 挺 / 极 + Tính từ (+ 极了 / 得很)",
        "explanationVi": "• 比较 (bǐjiào): Tương đối, khá là.\n• 更 (gèng): Càng, hơn nữa (so sánh tăng tiến).\n• 特别 (tèbié): Đặc biệt, vô cùng.\n• 挺 (tǐng): Khá là (挺...的).\n• 有些 (yǒuxiē): Hơi hơi, có phần (thường mang cảm xúc tiêu cực).\n• 越 (yuè): Càng (越来越).\n• 极 (jí): Cực kỳ (极有兴趣, 极少).",
        "tips": "'有些' thường đi với từ mang nghĩa không mong muốn (như 有些着急, 有些累)."
    },
    # 17
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ phạm vi: 就, 一块儿, 一共, 只, 到处, 只是",
        "structure": "Phó từ phạm vi + Động từ / Số từ",
        "explanationVi": "• 就 / 只: Chỉ, duy nhất (我就要两斤; 只有一个).\n• 一块儿: Cùng nhau (bằng với 一起).\n• 一共: Tổng cộng (一共多少钱).\n• 到处: Khắp nơi, nơi nơi (到处都是).\n• 只是: Chỉ là, chẳng qua là (只是笑了笑).",
        "tips": "'到处都是 + Danh từ' là cách nói thông dụng miêu tả sự xuất hiện tràn ngập ở mọi nơi."
    },
    # 18
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ thời gian & Trình tự: 才, 马上, 先, 一会儿, 刚, 刚刚, 一直",
        "structure": "Chủ ngữ + Phó từ thời gian + Động từ",
        "explanationVi": "• 才: Vừa mới (thời gian ngắn: 他才到家).\n• 马上: Ngay lập tức (马上来).\n• 先: Trước hết (先...然后再...).\n• 一会儿: Một lát, lúc thì... (一会儿阴，一会儿晴).\n• 刚 / 刚刚: Vừa mới xảy ra cách đây chốc lát.\n• 一直: Suốt, liên tục không ngừng (一直住在北京; 一直在下雨).",
        "tips": "Phân biệt '刚' (phó từ, đứng sau chủ ngữ) với '刚才' (danh từ thời gian, có thể đứng trước chủ ngữ)."
    },
    # 19
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ tần suất: 总, 总是, 又, 常常",
        "structure": "Chủ ngữ + 总是 / 又 / 常常 + Động từ",
        "explanationVi": "• 总是 / 总: Luôn luôn, lúc nào cũng vậy (thói quen bất biến).\n• 又: Lại (hành động đã lặp lại trong quá khứ: 又看了一遍).\n• 常常: Thường hay (tần suất đều đặn).",
        "tips": "Nhớ kỹ: '又' dùng cho hành động ĐÃ lặp lại, còn '再' dùng cho hành động CHƯA lặp lại."
    },
    # 20
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Cấu trúc song hành hai hành động: 一边……一边…… (Vừa... vừa...)",
        "structure": "Chủ ngữ + 一边 + Hành động 1, + 一边 + Hành động 2",
        "explanationVi": "Biểu thị hai hành động cùng được tiến hành đồng thời song song trong cùng một khoảng thời gian (như 一边工作一边学习 - vừa làm vừa học; 一边跑步一边听音乐 - vừa chạy vừa nghe nhạc).",
        "tips": "Hai hành động này phải thuộc loại có thể diễn ra đồng thời được."
    },
    # 21
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ phương thái & suy đoán: 大概, 必须, 差不多, 一定, 好像, 几乎",
        "structure": "Chủ ngữ + Phó từ tình thái + Vị ngữ",
        "explanationVi": "• 大概: Đại khái, có lẽ (ước lượng khoảng chừng).\n• 必须: Bắt buộc phải.\n• 差不多: Xấp xỉ, suýt soát (gần như nhau).\n• 一定: Nhất định, chắc chắn.\n• 好像: Dường như, hình như.\n• 几乎: Hầu như, suýt nữa.",
        "tips": "'不一定' nghĩa là chưa chắc, không nhất thiết."
    },
    # 22
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ ngữ khí sâu sắc: 当然, 其实, 终于, 才, 就",
        "structure": "Phó từ ngữ khí + Vị ngữ / Đầu câu",
        "explanationVi": "• 当然: Đương nhiên, tất nhiên.\n• 其实: Thực ra, kỳ thực (sự thật khác với tưởng tượng ban đầu).\n• 终于: Cuối cùng, rốt cuộc (sau nhiều nỗ lực hoặc chờ đợi lâu).\n• 才: Mới (nhấn mạnh trễ, khó khăn, hoặc số lượng ít ỏi).\n• 就: Đã, liền (nhấn mạnh sớm, nhanh chóng, dễ dàng).",
        "tips": "Cặp đôi tương phản '才' (muộn/khó/ít) vs '就' (sớm/nhanh/nhiều) là điểm ngữ pháp vàng của HSK 3."
    },
    # 23
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ các loại", "categoryIcon": "🔥",
        "titleVi": "Phó từ phủ định sự cần thiết: 不必 & 不用 (Không cần phải...)",
        "structure": "不必 / 不用 + Động từ / Cụm động từ",
        "explanationVi": "Biểu thị sự việc là không cần thiết, không cần phải mất công làm (như 不必去车站 - không cần phải ra bến; 不用担心 - không cần lo lắng).",
        "tips": "Khẩu ngữ thường nói '不用', văn viết hay dùng '不必'."
    },
    # 24
    {
        "category": "prepositions", "categoryName": "Giới từ phương hướng & đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ đối tượng: 为 (Vì/Cho), 向 (Đối với/Tới), 关于 (Về vấn đề)",
        "structure": "为 + Ai đó + Làm gì | 向 + Ai đó + Xin phép/Học tập | 关于 + Nội dung, ...",
        "explanationVi": "• 为 (wèi): Cho, vì đối tượng (为你做的蛋糕 - bánh làm cho bạn; 为比赛准备).\n• 向 (xiàng): Hướng tới đối tượng (向老师请假 - xin phép thầy; 向她学习 - noi gương cô ấy).\n• 关于 (guānyú): Về, liên quan đến vấn đề nào đó (đứng đầu câu: 关于这个问题...).",
        "tips": "Cụm '关于...' thường đứng ở đầu câu làm trạng ngữ chỉ phạm vi đề tài."
    },
    # 25
    {
        "category": "prepositions", "categoryName": "Giới từ phương hướng & đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ dẫn hướng dịch chuyển: 向 (Xiàng - Về hướng, về phía)",
        "structure": "向 + Phương hướng / Địa điểm + Động từ di chuyển (走, 看, 跑)",
        "explanationVi": "Biểu thị hướng vận động di chuyển của hành động (như 向门口走去 - bước về phía cửa; 看向前边 - nhìn về phía trước).",
        "tips": "Có thể dùng tương đương với '往', nhưng '向' văn phong trang nhã và phong phú hơn."
    },
    # 26
    {
        "category": "prepositions", "categoryName": "Giới từ phương hướng & đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ mục đích & nguyên nhân: 为了 & 为 (Để / Vì...)",
        "structure": "为了 + Mục đích, Chủ ngữ + Hành động | 为 + Nguyên nhân + Cảm thấy...",
        "explanationVi": "• 为了 (wèile): Dẫn ra mục đích hướng tới (thường đứng ở đầu vế câu: 为了身体健康 - để cho sức khỏe; 为了考上大学).\n• 为 (wèi): Biểu thị nguyên nhân sinh ra cảm xúc hoặc hành động (为好成绩感到高兴; 为考试做准备).",
        "tips": "'为了' nhấn mạnh mục đích hướng đến trong tương lai, '因为' nhấn mạnh nguyên nhân đã có trong quá khứ."
    },
    # 27
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Giới từ dẫn xuất đối tượng: 把 (Tác động) & 被 (Bị / Được tác động)",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ... | Chủ ngữ + 被 + (Tác nhân) + Động từ...",
        "explanationVi": "Hai giới từ đặc trưng hàng đầu của ngữ pháp tiếng Trung:\n• 把: Đưa đối tượng chịu tác động lên trước để xử lý (你把箱子放这儿).\n• 被: Dẫn ra đối tượng gây ra tác động trong câu bị động (自行车被朋友借走了).",
        "tips": "Đây là bước chuyển từ câu đơn sang cấu trúc biến đổi tân ngữ trung cấp."
    },
    # 28
    {
        "category": "prepositions", "categoryName": "Giới từ phương hướng & đối tượng", "categoryIcon": "🛡️",
        "titleVi": "Giới từ căn cứ, bằng chứng: 根据 (Gēnjù - Căn cứ vào, dựa theo)",
        "structure": "根据 + Danh từ (yêu cầu / sở thích / tình hình), Chủ ngữ + Vị ngữ",
        "explanationVi": "Dùng để nêu ra căn cứ, cơ sở hoặc tiền đề làm tiêu chuẩn để đưa ra phán đoán hay hành động (như 根据兴趣 - căn cứ vào sở thích; 根据要求 - căn cứ vào yêu cầu).",
        "tips": "'根据' có thể làm giới từ (căn cứ vào) hoặc danh từ (chứng cứ, căn cứ)."
    },
    # 29
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Liên từ lựa chọn trong câu trần thuật: 或 & 或者 (Huò, Huòzhě - Hoặc, hoặc là)",
        "structure": "Phương án A + 或 / 或者 + Phương án B",
        "explanationVi": "Dùng để liên kết hai hay nhiều phương án lựa chọn trong CÂU TRẦN THUẬT khẳng định (như 喝茶或者咖啡都可以; 打车或者坐地铁去).",
        "tips": "Quy tắc cốt tử: '或者' chỉ dùng trong câu trần thuật; trong câu hỏi lựa chọn bắt buộc dùng '还是'."
    },
    # 30
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Hệ thống Liên từ nối vế câu HSK 3: 只有, 只要, 不但, 而且, 如果, 可是, 然后",
        "structure": "Liên từ 1 + Vế câu 1, + Liên từ 2 + Vế câu 2",
        "explanationVi": "Các cặp liên từ quan trọng bậc nhất:\n• 只有...才...: Chỉ có... mới...\n• 只要...就...: Chỉ cần... thì...\n• 不但...而且...: Không những... mà còn...\n• 如果...就...: Nếu... thì...\n• 可 / 可是: Nhưng, thế nhưng\n• 先...然后...: Trước tiên... sau đó...",
        "tips": "Nắm vững toàn bộ các cặp liên từ này giúp người học tự tin viết và nói các câu phức chuẩn xác."
    },
    # 31
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Trợ từ giả thiết điều kiện: ……的话 (De huà - Nếu như...)",
        "structure": "(如果 / 要是) + Vế điều kiện + 的话，……就……",
        "explanationVi": "Đặt ở cuối vế câu giả định để biểu thị ý 'nếu như...', 'trong trường hợp...' (như 你喜欢的话 - nếu bạn thích; 下雨的话 - nếu trời mưa).",
        "tips": "Có thể đứng một mình ở cuối vế 1 hoặc kết hợp với '如果' ở đầu vế để tạo thành '如果...的话'."
    },
    # 32
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Cụm từ đồng vị (Chỉ cùng một đối tượng)",
        "structure": "Danh từ 1 + Danh từ 2 / Đại từ (cùng chỉ một người / vật)",
        "explanationVi": "Hai từ hoặc cụm từ đứng liền nhau, cùng chỉ chung về một đối tượng nhằm làm rõ hoặc nhấn mạnh thân phận, chức danh (như 首都北京 - thủ đô Bắc Kinh; 她一个人 - một mình cô ấy; 我们学生 - học sinh chúng tôi).",
        "tips": "Giữa hai thành phần đồng vị tuyệt đối không chèn chữ '的'."
    },
    # 33
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Cụm động bổ nâng cao: 极了, 坏了, 看不懂, 写得完",
        "structure": "Động từ / Tính từ + 极了 / 坏了 | Động từ + 得 / 不 + Bổ ngữ",
        "explanationVi": "Bao gồm cả bổ ngữ mức độ cao (漂亮极了 - đẹp cực kỳ; 累坏了 - mệt đứt hơi) và bổ ngữ khả năng (看不懂 - nhìn không hiểu; 写得完 - viết xong được).",
        "tips": "'坏了' sau tính từ mang nghĩa mức độ cực độ (như 累坏了, 饿坏了, 吓坏了)."
    },
    # 34
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Trùng điệp Số lượng từ làm trạng ngữ: 一步一步, 一句一句",
        "structure": "一 + Lượng từ + 一 + Lượng từ + 地 + Động từ",
        "explanationVi": "Lặp lại kết cấu số lượng từ làm trạng ngữ để biểu thị hành động được thực hiện từng bước, từng đơn vị một cách tuần tự, kiên trì, tỉ mỉ (như 一步一步地做 - làm từng bước một; 一句一句地教 - dạy từng câu một).",
        "tips": "Phía sau thường dùng trợ từ trạng ngữ '地' (de)."
    },
    # 35
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Cụm từ bốn chữ đối xứng: 不 A 不 B (Không... cũng chẳng...)",
        "structure": "不 + Tính từ 1 + 不 + Tính từ 2 (trái nghĩa hoặc bổ sung)",
        "explanationVi": "Cụm từ bốn chữ đối xứng biểu thị trạng thái ở mức độ vừa phải, hoàn hảo, trung dung (như 不大不小 - không to không nhỏ, rất vừa; 不冷不热 - không lạnh không nóng, dễ chịu).",
        "tips": "A và B thường là hai tính từ đối lập nhau biểu thị sự cân đối hoàn mỹ."
    },
    # 36
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cụm từ thời gian chớp nhoáng: 不一会儿 (Bù yíhuìr - Chẳng mấy chốc)",
        "structure": "不一会儿，Chủ ngữ + 就 + Vị ngữ",
        "explanationVi": "Dùng ở đầu câu hoặc trước vị ngữ để biểu thị khoảng thời gian trôi qua rất nhanh, chẳng mấy chốc sau sự việc tiếp theo đã xuất hiện (như 不一会儿，张校长就来了 - chẳng mấy chốc hiệu trưởng đã đến).",
        "tips": "Có thể thay bằng '没多久' hoặc '过了一会儿'."
    },
    # 37
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Thành phần chêm xen nhận định: 看来 (Kànlai - Xem ra, xem chừng)",
        "structure": "看来 + Mệnh đề phán đoán, đánh giá",
        "explanationVi": "Đứng ở đầu câu để đưa ra nhận xét, đánh giá hoặc suy đoán dựa trên tình hình thực tế đang diễn ra trước mắt (như 看来咱们只能走楼梯了 - xem ra chúng mình chỉ có thể đi thang bộ thôi; 看来他今天不会来了).",
        "tips": "Mang sắc thái phán đoán khách quan dựa trên chứng cớ cụ thể."
    },
    # 38
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Khung biểu đạt quan điểm cá nhân: 在……看来 (Theo quan điểm của...)",
        "structure": "在 + Đối tượng + 看来，Mệnh đề nhận định",
        "explanationVi": "Dùng để nêu rõ lập trường, cách nhìn nhận, quan điểm của một cá nhân hay tập thể nào đó (như 在我看来 - theo tôi thấy; 在同事们看来 - dưới con mắt của đồng nghiệp).",
        "tips": "Cách biểu đạt rất trang trọng, đắt giá khi viết luận hoặc tranh biện."
    },
    # 39
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "Cụm tăng tiến theo thời gian: 越来越…… (Ngày càng...)",
        "structure": "Chủ ngữ + 越来越 + Tính từ / Động từ tâm lý",
        "explanationVi": "Biểu thị mức độ của sự vật hoặc tâm lý biến đổi tăng dần theo bước chuyển của thời gian (như 越来越冷 - ngày càng lạnh; 越来越多 - ngày càng nhiều; 越来越习惯 - ngày càng quen dần).",
        "tips": "Sau '越来越' KHÔNG ĐƯỢC dùng thêm các phó từ mức độ như 很, 非常, 太."
    },
    # 40
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Đánh giá qua ấn tượng thị giác: 看起来 (Kàn qǐlái - Trông có vẻ...)",
        "structure": "Chủ ngữ + 看起来 + Tính từ / Cụm tính từ",
        "explanationVi": "Đưa ra đánh giá, nhận xét sơ bộ dựa trên diện mạo bên ngoài nhìn thấy bằng mắt (như 看起来很好吃 - trông có vẻ ngon; 看起来很年轻 - trông có vẻ còn rất trẻ).",
        "tips": "Tương đương với 'looks like / seems' trong tiếng Anh."
    },
    # 41
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Đánh giá qua diện mạo bên ngoài: 看上去 (Kàn shangqu - Nhìn bề ngoài...)",
        "structure": "Chủ ngữ + 看上去 + Tính từ / Mệnh đề",
        "explanationVi": "Gần nghĩa với '看起来', dùng để nhận định về vẻ ngoài hoặc cảm giác ban đầu khi tiếp xúc (như 看上去很难，其实很简单 - nhìn bề ngoài tưởng khó mà thực ra rất dễ; 看上去不像五十岁 - nhìn không giống 50 tuổi).",
        "tips": "Thường hay dùng phối hợp với vế sau chuyển ngoặt (其实...)."
    },
    # 42
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cụm từ chuyển ý phổ quát: 一般来说 (Yìbān lái shuō - Thông thường mà nói)",
        "structure": "一般来说，Chủ ngữ + Vị ngữ",
        "explanationVi": "Đặt ở đầu câu để phát biểu một quy luật chung, một sự thật phổ biến áp dụng cho phần lớn các trường hợp thông thường (như 一般来说，早上锻炼身体比较好; 学习外语需要多练习).",
        "tips": "Dùng mở đầu khi trình bày quan điểm mang tính quy luật khoa học."
    },
    # 43
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cụm từ khẩu ngữ đánh giá thấp: 不怎么样 (Chẳng ra làm sao / Không hay lắm)",
        "structure": "Chủ ngữ / Vị ngữ + 不怎么样",
        "explanationVi": "Dùng trong khẩu ngữ để chê hoặc nhận xét một người, sự việc hay thành tích nào đó ở mức tầm thường, không đạt yêu cầu, chẳng ra làm sao (như 照得不怎么样 - chụp không đẹp lắm; 成绩不怎么样 - thành tích chẳng ra sao).",
        "tips": "Một cách từ chối hoặc đánh giá khéo léo mang tính phê bình nhẹ nhàng."
    },
    # 44
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Cấu trúc loại trừ & bổ sung: 除了……（以外），……还/也/都……",
        "structure": "除了 A (以外)，……还 / 也 B (Bổ sung thêm) | 除了 A (以外)，……都 B (Loại trừ duy nhất)",
        "explanationVi": "• Mang nghĩa bổ sung (Ngoài A ra còn có B): 除了看新闻，还可以在网上买东西.\n• Mang nghĩa loại trừ (Trừ A ra, tất cả đều...): 除了北京，别的城市都没去过.",
        "tips": "Xem phó từ ở vế sau để xác định nghĩa: có '还/也' là bổ sung; có '都/全' là loại trừ."
    },
    # 45
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Mốc thời gian khởi điểm liên tục: 从……起 (Kể từ... trở đi)",
        "structure": "从 + Mốc thời gian + 起，Chủ ngữ + Vị ngữ",
        "explanationVi": "Biểu thị sự việc, trạng thái bắt đầu hình thành và tiếp tục duy trì kể từ một thời điểm nhất định trong quá khứ hoặc hiện tại (như 从那天起 - kể từ ngày ấy; 从现在起 - kể từ lúc này trở đi).",
        "tips": "Tương đương với '从...开始'."
    },
    # 46
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Khung quy chiếu đối tượng: 对……来说 (Đối với... mà nói)",
        "structure": "对 + Đối tượng (người/vật) + 来说，Mệnh đề nhận định",
        "explanationVi": "Dùng để giới thiệu góc nhìn, mức độ ảnh hưởng hoặc ý nghĩa của một vấn đề đối với một đối tượng cụ thể (như 对他来说 - đối với anh ấy; 对我来说 - đối với tôi).",
        "tips": "Cấu trúc thông dụng nhất khi bắt đầu diễn đạt cảm nhận cá nhân."
    },
    # 47
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc phủ định hoàn toàn: 一……也 / 都不 / 没…… (Một chút cũng không)",
        "structure": "Chủ ngữ + 一 + Lượng từ + Danh từ + 也 / 都 + 不 / 没 + Động từ",
        "explanationVi": "Dùng để nhấn mạnh sự phủ định tuyệt đối 100%, không hề có lấy một ngoại lệ nhỏ nhất (như 一句汉语也不会说 - một câu tiếng Hán cũng không biết nói; 一个都没去过 - một nơi cũng chưa từng đi).",
        "tips": "Nếu tân ngữ không đếm được, dùng '一点儿' (ví dụ: 一点儿钱也没有)."
    },
    # 48
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc phủ định tính chất tuyệt đối: 一点儿也不 / 没……",
        "structure": "Chủ ngữ + 一点儿也 + 不 / 没 + Tính từ / Động từ tâm lý",
        "explanationVi": "Nhấn mạnh mức độ của tính chất hoặc cảm xúc hoàn toàn bằng 0, không hề có chút nào (như 一点儿也不着急 - chẳng sốt ruột chút nào; 一点儿也不冷 - một chút cũng không lạnh).",
        "tips": "Có thể thay '也' bằng '都' (一点儿都不冷)."
    },
    # 49
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "Cấu trúc tương quan tăng tiến: 越……越…… (Càng... càng...)",
        "structure": "越 + Điều kiện A + 越 + Kết quả B (hoặc: 越 A 越好: càng A càng tốt)",
        "explanationVi": "Biểu thị mức độ của vế sau biến đổi tỷ lệ thuận tương ứng với sự biến đổi mức độ của vế trước (như 越多越好 - càng nhiều càng tốt; 休息得越多，好得越快 - nghỉ càng nhiều khỏi càng mau).",
        "tips": "Đây là mẫu câu so sánh tỷ lệ thuận kinh điển trong tiếng Trung."
    },
    # 50
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Biểu thị thời điểm trước & sau sự việc: （在）……以前 / 以后 / 前 / 后",
        "structure": "(在) + Hành động / Mốc thời gian + 以前 / 以后 / 前 / 后",
        "explanationVi": "Xác định thời điểm trước hoặc sau khi một sự việc nào đó xảy ra:\n• 以前 / 前: Trước khi (考试以前, 睡觉前).\n• 以后 / 后: Sau khi (来到中国以后, 放学后).",
        "tips": "Chú ý trật tự từ: Tiếng Việt nói 'Trước khi thi', tiếng Trung bắt buộc đảo: '考试 + 以前'."
    },
    # 51
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc phản bác, gạt đi: X 什么（啊） (Gì mà... cơ chứ!)",
        "structure": "Tính từ / Động từ + 什么（啊）！",
        "explanationVi": "Dùng trong khẩu ngữ để phản bác lại nhận định của đối phương, biểu thị ý không đồng tình, coi nhẹ hoặc gạt đi (như 难过什么啊 - buồn bã nỗi gì chứ!; 方便什么啊 - tiện lợi gì đâu cơ chứ!).",
        "tips": "Mang sắc thái cảm xúc thân mật, cởi mở giữa bạn bè."
    },
    # 52
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Cấu trúc đến lúc phải làm việc gì: 该……了 (Đến lúc... rồi)",
        "structure": "该 + Động từ / Hành động + 了",
        "explanationVi": "Nhắc nhở hoặc tự nhận thức rằng đã đến thời điểm thích hợp hoặc cần thiết phải tiến hành hành động (như 该上课了 - đến giờ vào lớp rồi; 该复习了 - phải ôn tập thôi).",
        "tips": "Có thể thêm '应该' hoặc '该...了' đều được."
    },
    # 53
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Khung định vị phạm vi & điều kiện: 在……上 / 下 / 中",
        "structure": "在 + Lĩnh vực + 上 | 在 + Sự giúp đỡ/tác động + 下 | 在 + Quá trình/sự kiện + 中",
        "explanationVi": "• 在...上: Về phương diện, lĩnh vực (在学习上 - về mặt học tập).\n• 在...下: Dưới sự tác động, ảnh hưởng (在父母的影响下 - dưới sự ảnh hưởng của cha mẹ).\n• 在...中: Trong quá trình, trong sự kiện (在这次比赛中 - trong cuộc thi này).",
        "tips": "Cụm khung giới từ này tạo nên văn phong hành văn rất học thuật và chuẩn mực."
    },
    # 54
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Chủ ngữ là Động từ hoặc Tính từ (Hành vi/Trạng thái làm chủ thể)",
        "structure": "Cụm Động từ / Cụm Tính từ + Vị ngữ đánh giá",
        "explanationVi": "Đưa trực tiếp một hành vi hoặc một tính chất lên làm chủ ngữ của câu để đưa ra nhận xét, đánh giá về hành vi đó (như 哭没有用 - khóc lóc chẳng có ích gì; 多穿一点儿比较好 - mặc ấm thêm chút thì tốt hơn; 太胖了不好 - béo quá không tốt).",
        "tips": "Không cần thêm từ nối nào, vị ngữ phía sau thường là các cụm nhận xét."
    },
    # 55
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Chủ ngữ là Cụm chủ vị (Một mệnh đề làm chủ thể)",
        "structure": "[Chủ ngữ nhỏ + Vị ngữ nhỏ] + Vị ngữ lớn của cả câu",
        "explanationVi": "Cả một cụm chủ - vị hoàn chỉnh đóng vai trò làm chủ ngữ cho câu lớn (như 你来也可以 - việc bạn đến cũng được; 身体健康最重要 - thân thể khỏe mạnh là điều quan trọng nhất).",
        "tips": "Cấu trúc giúp cô đọng toàn bộ một sự việc thành một chủ thể luận bàn."
    },
    # 56
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Định ngữ nhiều tầng phức hợp (多项定语)",
        "structure": "Sở hữu/Thời gian + Chỉ định/Số lượng + Cụm Động từ + Tính từ + Danh từ trung tâm",
        "explanationVi": "Một danh từ được bổ nghĩa bởi nhiều tầng định ngữ cùng lúc (như 我昨天新买的那条黑色的裤子 - chiếc quần màu đen tôi mới mua hôm qua; 穿着蓝衬衫的短头发高个子的老人).",
        "tips": "Thứ tự sắp xếp chuẩn: Từ sở hữu/thời gian -> Cụm chỉ thị/số lượng -> Cụm động từ/mô tả -> Tính từ -> Danh từ."
    },
    # 57
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ kết quả nâng cao: 动词 + 到, 住, 走, 上",
        "structure": "Động từ + 到 (đạt được/đến) / 住 (chặt, chắc) / 走 (rời đi) / 上 (khép lại, dính)",
        "explanationVi": "Biểu thị kết quả đạt được sau hành động:\n• 买到: mua được\n• 记住: ghi nhớ chắc\n• 骑走: đạp xe đi mất\n• 关上: đóng, tắt khép lại (关上电脑 - tắt máy tính).",
        "tips": "Mỗi bổ ngữ kết quả đều mang một nét nghĩa đặc trưng về sự biến đổi trạng thái của vật."
    },
    # 58
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Kết quả (出, 起, 下)",
        "structure": "Động từ + 出 (nghĩ ra, nhận ra) / 起 (nhớ ra) / 下 (ghi lại, lưu lại)",
        "explanationVi": "Bổ ngữ xu hướng không chỉ chỉ phương hướng mà còn chỉ kết quả trừu tượng:\n• 想出: nghĩ ra (ý tưởng)\n• 想起: nhớ lại, sực nhớ ra (kỷ niệm, tên)\n• 写下: ghi lại, chép lại xuống giấy.",
        "tips": "Phân biệt: '想出' là sáng tạo ra cái mới; '想起' là nhớ lại cái trong quá khứ."
    },
    # 59
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Bắt đầu (上, 起来)",
        "structure": "Động từ + 上 (bắt đầu tham gia / đạt được việc) | Động từ + 起来 (bắt đầu và tiếp diễn)",
        "explanationVi": "• 吃上饭 / 玩上游戏: Đã bắt đầu được hưởng, được làm việc gì đó sau thời gian chờ đợi.\n• 聊起来 / 哭起来: Bắt đầu bộc phát hành động và có xu hướng tiếp diễn liên tục.",
        "tips": "'动词 + 起来' tương đương với 'bắt đầu... lên'."
    },
    # 60
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Duy trì (下去 & 下来)",
        "structure": "Động từ + 下去 (tiếp tục trong tương lai) | Động từ + 下来 (duy trì từ quá khứ đến nay)",
        "explanationVi": "• 坚持下去 / 学下去: Tiếp tục hành động hướng về tương lai ('làm tiếp tục đi').\n• 坚持下来 / 记录下来: Hành động đã duy trì thành công từ trước tới hiện tại ('đã giữ vững được').",
        "tips": "'下去' hướng tới tương lai; '下来' hướng về hiện tại từ quá khứ."
    },
    # 61
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ khả năng cơ bản: 动词 + 得 / 不 + Bổ ngữ",
        "structure": "Khẳng định: Động từ + 得 + Bổ ngữ | Phủ định: Động từ + 不 + Bổ ngữ | Nghi vấn: ...得...吗 / ...得...不...?",
        "explanationVi": "Biểu thị năng lực hoặc điều kiện chủ quan/khách quan có cho phép thực hiện được kết quả đó hay không:\n• 听得懂 / 听不懂 (nghe có hiểu được không)\n• 看得清楚 / 看不清楚 (nhìn rõ / không rõ).",
        "tips": "Dạng phủ định của bổ ngữ khả năng (V + 不 + C) dùng cực kỳ nhiều trong giao tiếp hàng ngày."
    },
    # 62
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ mức độ: Tính từ + 得很 (Rất... lắm / Hết sức...)",
        "structure": "Tính từ + 得很",
        "explanationVi": "Đứng sau tính từ để biểu thị mức độ cực kỳ cao mang tính khẩu ngữ sinh động (như 好得很 - tốt lắm; 凉快得很 - mát mẻ vô cùng).",
        "tips": "Tương đương với '非常 + Tính từ' nhưng đặt sau tính từ."
    },
    # 63
    {
        "category": "complements_advanced", "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)", "categoryIcon": "🎯",
        "titleVi": "Bổ ngữ mức độ tột cùng: 极了 & 坏了 (Cực độ)",
        "structure": "Tính từ / Động từ tâm lý + 极了 (cực kỳ tốt/vui) | Tính từ tiêu cực + 坏了 (đến mức hỏng cả người)",
        "explanationVi": "• 极了: Đạt đến đỉnh cao tột độ (高兴极了 - vui sướng tột cùng).\n• 坏了: Mức độ xấu hoặc mệt mỏi đạt tới đỉnh điểm (累坏了 - mệt lử; 饿坏了 - đói rã rời).",
        "tips": "Bổ ngữ '坏了' thường dùng cho các trạng thái kiệt sức hoặc khó chịu."
    },
    # 64
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Khoảng thời gian cách biệt kể từ khi sự việc kết thúc",
        "structure": "Sự việc / Mốc kết thúc + 已经 + Khoảng thời gian + 了",
        "explanationVi": "Biểu thị khoảng cách thời gian từ lúc một sự việc bắt đầu hoặc kết thúc cho tới thời điểm hiện tại (như 开学已经两个星期了 - khai giảng đã được 2 tuần rồi; 过去五年了 - đã trôi qua 5 năm rồi).",
        "tips": "Chữ '了' ở cuối câu mang ý nhấn mạnh thời gian đã tích lũy đến nay."
    },
    # 65
    {
        "category": "adverbs_modalities", "categoryName": "Phó từ & Đại từ", "categoryIcon": "🔥",
        "titleVi": "Câu hỏi đặc biệt: “怎样 + Động từ” (Hỏi phương thức làm thế nào)",
        "structure": "怎样 + 才能 + Động từ? | Chủ ngữ + 是怎样 + Động từ + 的?",
        "explanationVi": "Dùng để hỏi về cách thức, phương pháp tiến hành một công việc nào đó (như 怎样才能学好汉语 - làm thế nào mới học giỏi tiếng Hán; 是怎样过新年的 - đón Tết như thế nào).",
        "tips": "Mang tính tìm tòi giải pháp, phương hướng hành động cụ thể."
    },
    # 66
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phản vấn nhấn mạnh sự thật hiển nhiên: 不是……吗？",
        "structure": "Chủ ngữ + 不是 + Vị ngữ / Sự thật + 吗？",
        "explanationVi": "Dùng hình thức câu hỏi ngược lại để khẳng định chắc nịch một sự thật mà người nghe vốn dĩ đã biết hoặc đáng lẽ phải biết (như 你不是写完作业了吗？ - chẳng phải bạn đã làm xong rồi sao?; 考试不是下周吗？).",
        "tips": "Người nói không cần câu trả lời mà nhằm nhắc nhở hoặc ngạc nhiên."
    },
    # 67
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” đưa đối tượng vào vị trí / nơi chốn: 在 / 到 + Chỗ",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + 在 / 到 + Nơi chốn",
        "explanationVi": "Biểu thị việc xử lý, tác động lên tân ngữ khiến cho tân ngữ di chuyển đến hoặc lưu lại ở một địa điểm nào đó (như 把箱子放在这儿 - đặt vali ở đây; 把桌子搬到外边 - khiêng bàn ra ngoài).",
        "tips": "Động từ theo sau thường là 放, 搬, 送, 带, 寄."
    },
    # 68
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” chuyển giao đồ vật cho đối tượng: 动词（+给）+ Người",
        "structure": "Chủ ngữ + 把 + Vật (Tân ngữ 1) + Động từ (+ 给) + Người nhận (Tân ngữ 2)",
        "explanationVi": "Biểu thị tác động làm chuyển giao quyền sở hữu hoặc vị trí của đồ vật cho một người khác (như 把礼物送给老师 - đem quà tặng thầy giáo; 把书借给我 - đem sách cho tôi mượn).",
        "tips": "Động từ thường dùng: 送, 借, 还, 交, 卖."
    },
    # 69
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Câu chữ “把” kèm các loại Bổ ngữ (Kết quả, Xu hướng, Trạng thái)",
        "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ (好 / 完 / 进去 / 得干干净净)",
        "explanationVi": "Tác động lên sự vật khiến cho sự vật đạt tới một kết quả cụ thể, thay đổi xu hướng hoặc đạt đến một trạng thái nhất định (như 把晚饭准备好 - chuẩn bị xong cơm tối; 把桌子搬进去 - khiêng bàn vào trong; 洗得干干净净 - giặt sạch tinh tươm).",
        "tips": "Trong câu chữ 把, động từ không bao giờ đứng đơn độc trơ trọi một mình mà luôn phải có thành phần phụ phía sau."
    },
    # 70
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Câu bị động có nêu tác nhân gây ra: 主语 + 被 + Kẻ gây ra + Động từ",
        "structure": "Chủ ngữ (vật bị tác động) + 被 + Tác nhân (người gây ra) + Động từ + Thành phần khác",
        "explanationVi": "Biểu thị chủ ngữ chịu sự tác động hoặc ảnh hưởng (thường là không mong muốn) từ một tác nhân cụ thể (như 词典被朋友借走了 - từ điển bị bạn mượn mất; 水果被谁吃了 - hoa quả bị ai ăn mất).",
        "tips": "Trong khẩu ngữ, '被' có thể được thay thế bằng '叫' hoặc '让'."
    },
    # 71
    {
        "category": "ba_bei_sentences", "categoryName": "Câu chữ 把 & Câu bị động 被", "categoryIcon": "⭐",
        "titleVi": "Câu bị động ẩn tác nhân: 主语 + 被 + Động từ + Thành phần khác",
        "structure": "Chủ ngữ + 被 + Động từ + Thành phần khác (Bổ ngữ / 了)",
        "explanationVi": "Dùng khi không biết tác nhân gây ra là ai, hoặc không cần thiết/không muốn nhắc đến kẻ gây ra hành vi (như 作业被拿走了 - bài tập bị lấy đi mất rồi; 病人被送到医院了 - bệnh nhân đã được đưa vào viện).",
        "tips": "Tập trung hoàn toàn sự chú ý vào kết quả xử lý của chủ ngữ."
    },
    # 72
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Phương thức kèm theo của hành động: 动词 1 + 着 + 动词 2",
        "structure": "Chủ ngữ + Động từ 1 + 着 + Động từ 2 (+ Tân ngữ)",
        "explanationVi": "Động tác thứ nhất (mang '着') đóng vai trò làm trạng thái, tư thế hoặc phương thức đệm để thực hiện động tác thứ hai (như 笑着回答 - mỉm cười trả lời; 听着音乐做运动 - vừa nghe nhạc vừa tập thể thao).",
        "tips": "Động tác 1 là trạng thái kèm theo, động tác 2 là động tác chính."
    },
    # 73
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "So sánh tăng bậc hơn nữa: A 比 B + 更 / 还 + Tính từ",
        "structure": "A + 比 + B + 更 / 还 + Tính từ",
        "explanationVi": "Dùng khi bản thân B vốn dĩ đã có tính chất đó ở mức độ cao rồi, nhưng A thậm chí còn vượt trội hơn B một bậc nữa (như 比我更好 - thậm chí còn giỏi hơn cả tôi; 今天比昨天还冷 - hôm nay còn rét hơn cả hôm qua).",
        "tips": "Tuyệt đối không dùng '很' hay '非常' trong câu so sánh này."
    },
    # 74
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "Câu so sánh bằng: A 跟 B 一样 (A giống như B)",
        "structure": "A + 跟 / 和 + B + 一样 | Phủ định: A 跟 / 和 + B + 不一样",
        "explanationVi": "So sánh khẳng định hai đối tượng hoàn toàn tương đồng, giống hệt nhau về bản chất hoặc chủng loại (như 爱好跟他一样 - sở thích giống anh ấy; 买的新手机跟我的一样 - điện thoại mua giống hệt tôi).",
        "tips": "Dạng phủ định chỉ cần thêm '不' trước '一样' (A 跟 B 不一样)."
    },
    # 75
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "So sánh bằng về một tính chất cụ thể: A 跟 B 一样 + Tính từ",
        "structure": "A + 跟 / 和 + B + 一样 + Tính từ",
        "explanationVi": "So sánh hai đối tượng ngang bằng nhau về một đặc điểm, tính chất cụ thể nào đó (như 跟坐公交车一样方便 - tiện lợi y như đi xe buýt; 跟那个房间一样大 - rộng rãi y chang phòng kia).",
        "tips": "Nếu phủ định thường chuyển sang dùng 'A 没有 B (那么) + Tính từ'."
    },
    # 76
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "So sánh phủ định không vượt trội: A 不比 B + Tính từ",
        "structure": "A + 不比 + B + Tính từ",
        "explanationVi": "Dùng để phản bác lại nhận định rằng A vượt trội hơn B, khẳng định A chỉ ngang bằng hoặc thậm chí kém hơn B ('A chẳng... hơn B là bao') (như 不比那张好看 - chẳng đẹp hơn bức kia đâu; 不比他高 - không cao hơn anh ấy).",
        "tips": "Mang sắc thái tranh biện, phản bác ý kiến trước đó."
    },
    # 77
    {
        "category": "comparisons_advanced", "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)", "categoryIcon": "⚖️",
        "titleVi": "So sánh chênh lệch thời gian & số lượng hành vi",
        "structure": "A + 比 + B + 多 / 少 / 早 / 晚 + Động từ + Cụm số lượng",
        "explanationVi": "Biểu thị sự chênh lệch cụ thể về thời gian sớm/muộn hoặc số lượng nhiều/ít trong việc thực hiện một hành động (như 早到十分钟 - đến sớm hơn 10 phút; 多吃了三个饺子 - ăn nhiều hơn 3 cái sủi cảo).",
        "tips": "Trật tự từ bắt buộc: 多/少/早/晚 đứng TRƯỚC động từ, cụm số lượng đứng SAU động từ."
    },
    # 78
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Câu tồn hiện chỉ sự xuất hiện: 处所 + 动词 + 趋向/结果 + 了 + Người/Vật",
        "structure": "Từ chỉ nơi chốn + Động từ + Bổ ngữ (来 / 进 / 过) + 了 + Số lượng + Người / Vật xuất hiện",
        "explanationVi": "Miêu tả tại một không gian địa điểm bất ngờ xuất hiện thêm một người hay sự vật mới (như 开过来一辆出租车 - chạy tới một chiếc taxi; 搬来了一家人 - dọn đến một gia đình; 走进来几个学生 - bước vào mấy học sinh).",
        "tips": "Người hoặc vật xuất hiện luôn là danh từ không xác định (có số từ như 一辆, 一家, 几个)."
    },
    # 79
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Câu tồn hiện chỉ sự biến mất: 处所 + 动词 + 结果 + 了 + Người/Vật",
        "structure": "Từ chỉ nơi chốn + Động từ + 走 / 丢 / 掉 + 了 + Số lượng + Người / Vật biến mất",
        "explanationVi": "Miêu tả sự vật hoặc động vật rời khỏi hoặc biến mất khỏi một địa điểm nhất định (như 树上飞走了三只小鸟 - trên cây bay đi mất 3 chú chim; 跑丢了一只羊 - chạy lạc mất một con cừu).",
        "tips": "Tương tự như câu chỉ xuất hiện, nhưng biểu thị sự mất mát, giảm đi."
    },
    # 80
    {
        "category": "special_patterns", "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện", "categoryIcon": "🌟",
        "titleVi": "Câu chữ “是……的” khẳng định quan điểm, thái độ đánh giá",
        "structure": "Chủ ngữ + 是 + [Cụm tính từ / Đánh giá nhận định] + 的",
        "explanationVi": "Dùng cấu trúc '是...的' để nhấn mạnh sự khẳng định chắc nịch về quan điểm, nhận định hoặc thái độ của người nói đối với một việc (như 其实是很简单的 - thực ra là rất đơn giản; 是很有帮助的 - là rất có ích).",
        "tips": "Làm tăng tính thuyết phục và khẳng định cho lời nói."
    },
    # 81
    {
        "category": "word_building", "categoryName": "Cấu tạo từ & Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Câu trùng động (Lặp lại động từ khi có tân ngữ & bổ ngữ)",
        "structure": "Chủ ngữ + Động từ + Tân ngữ + Động từ + 得 / 了 + Bổ ngữ",
        "explanationVi": "Khi động từ vừa có tân ngữ vừa phải mang bổ ngữ thời lượng hoặc bổ ngữ trạng thái, bắt buộc phải lặp lại động từ một lần nữa trước bổ ngữ (như 打篮球打了一个下午 - chơi bóng rổ chơi suốt buổi chiều; 上课上得怎么样 - học học thấy thế nào).",
        "tips": "Quy tắc: Động từ lặp lại lần 2 mới là động từ gắn kết với Bổ ngữ."
    },
    # 82
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức tiếp nối trình tự: 先……，再 / 然后…… (Trước hết... rồi...)",
        "structure": "Chủ ngữ + 先 + Hành động 1, + 再 / 然后 + Hành động 2",
        "explanationVi": "Sắp xếp hai hay nhiều hành động theo đúng trình tự thời gian trước sau (như 先买门票，再来找我 - mua vé trước rồi quay lại tìm tôi; 先吃饭，然后休息 - ăn cơm trước rồi sau đó nghỉ).",
        "tips": "'再' nhấn mạnh làm xong 1 mới làm 2; '然后' chỉ việc kế tiếp theo sau."
    },
    # 83
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức liệt kê lựa chọn: 或者……，或者…… (Hoặc là... hoặc là...)",
        "structure": "Chủ ngữ + 或者 + Phương án 1, + 或者 + Phương án 2",
        "explanationVi": "Dùng trong câu khẳng định trần thuật để biểu thị hai khả năng hoặc hai hành động có thể luân phiên xảy ra (như 或者踢足球，或者打篮球; 或者回家过节，或者出门旅游).",
        "tips": "Chỉ dùng trong câu trần thuật biểu thị thói quen hoặc kế hoạch."
    },
    # 84
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức luân phiên thay đổi trạng thái: 一会儿……，一会儿……",
        "structure": "Chủ ngữ + 一会儿 + Trạng thái 1, + 一会儿 + Trạng thái 2",
        "explanationVi": "Biểu thị hai hành động hoặc hai trạng thái thay đổi luân phiên nhau rất nhanh chóng, thất thường (như 一会儿进来，一会儿出去 - lúc thì vào lúc lại ra; 一会儿冷，一会儿热 - lúc thì lạnh lúc lại nóng).",
        "tips": "Diễn tả sự bận rộn, không ổn định hoặc thất thường của thời tiết/tính khí."
    },
    # 85
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức song hành hai phẩm chất: 又……，又…… (Vừa... lại vừa...)",
        "structure": "Chủ ngữ + 又 + Tính từ / Động từ 1, + 又 + Tính từ / Động từ 2",
        "explanationVi": "Cùng lúc mang hai đặc điểm, tính chất tồn tại song song (như 又便宜又好看 - vừa rẻ lại vừa đẹp; 又高又漂亮 - vừa cao ráo lại vừa xinh đẹp).",
        "tips": "Hai tính từ được nối phải cùng mang sắc thái tích cực hoặc cùng tiêu cực."
    },
    # 86
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức đồng thời hai hành vi: 一边……，一边…… (Vừa làm A vừa làm B)",
        "structure": "Chủ ngữ + 一边 + Động từ 1, + 一边 + Động từ 2",
        "explanationVi": "Hai hành động độc lập được chủ thể thực hiện cùng một lúc trong sự phối hợp nhịp nhàng (như 一边工作一边学中文; 一边跑步一边听音乐).",
        "tips": "Thường áp dụng cho một hành động chính kết hợp một hành động thư giãn/thói quen."
    },
    # 87
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức tăng tiến: 不但……，而且…… (Không những... mà còn...)",
        "structure": "不但 + Vế 1, + 而且 + (也/还) + Vế 2",
        "explanationVi": "Vế sau tăng thêm một bậc về mức độ, phạm vi hoặc ý nghĩa so với vế trước (như 不但我学，而且弟弟也学; 不但会打，而且打得很好).",
        "tips": "Nếu hai vế cùng một chủ ngữ, chủ ngữ đứng trước '不但'; nếu hai vế khác chủ ngữ, '不但' đứng trước chủ ngữ 1."
    },
    # 88
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức chuyển ngoặt: 虽然……，可是…… (Tuy... thế nhưng...)",
        "structure": "虽然 + Vế nhượng bộ, + 可是 / 但是 + Vế chuyển ngoặt",
        "explanationVi": "Thừa nhận sự thật ở vế đầu nhưng chuyển sang một ý nghĩa đối lập, tích cực ở vế sau (như 虽然不大，可是很干净 - tuy không lớn nhưng rất sạch sẽ; 虽然很冷，可是坚持锻炼).",
        "tips": "'可是' khẩu ngữ và nhẹ nhàng hơn so với '但是'."
    },
    # 89
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức giả thiết điều kiện: 如果……，就…… (Nếu... thì...)",
        "structure": "如果 + Vế giả định, + (Chủ ngữ) + 就 + Vế kết quả",
        "explanationVi": "Nêu ra một điều kiện giả định ở vế đầu, nếu điều kiện đó xảy ra thì sẽ dẫn tới hành động hoặc kết quả ở vế sau (như 如果不下雨，我们就去爬山; 如果需要帮忙，就打电话).",
        "tips": "'如果' có thể đứng trước hoặc đứng sau chủ ngữ của vế đầu."
    },
    # 90
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức điều kiện khẩu ngữ: ……的话，就…… (Nếu mà... thì...)",
        "structure": "Vế điều kiện + 的话，(Chủ ngữ) + 就 + Vế kết quả",
        "explanationVi": "Rất phổ biến trong khẩu ngữ hàng ngày để nêu điều kiện giả định một cách tự nhiên, ngắn gọn (như 有时间的话，就一起去吧; 满意的话，咱们就买).",
        "tips": "Thường lược bỏ chữ '如果' mà chỉ cần giữ lại '...的话'."
    },
    # 91
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức điều kiện duy nhất: 只有……，才…… (Chỉ có... mới...)",
        "structure": "只有 + Điều kiện duy nhất, + (Chủ ngữ) + 才 + Đạt kết quả",
        "explanationVi": "Khẳng định điều kiện ở vế trước là điều kiện DUY NHẤT VÀ BẮT BUỘC để có thể đạt được kết quả ở vế sau (như 只有努力，才能得到好成绩; 只有多听多说，水平才能提高).",
        "tips": "Nhớ công thức: '只有' luôn đi đôi với '才'."
    },
    # 92
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức điều kiện đầy đủ: 只要……，就…… (Chỉ cần... là...)",
        "structure": "只要 + Điều kiện cần có, + (Chủ ngữ) + 就 + ắt có kết quả",
        "explanationVi": "Khẳng định chỉ cần đáp ứng được điều kiện ở vế trước là đủ để dẫn đến kết quả ở vế sau một cách dễ dàng, chắc chắn (như 只要坚持，就一定能学好; 只要你同意，就这么决定).",
        "tips": "Phân biệt: '只要...就...' (chỉ cần là đủ); '只有...才...' (chỉ có điều kiện duy nhất này mới được)."
    },
    # 93
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu phức chỉ mục đích: 为了……，…… (Để... nên...)",
        "structure": "为了 + Mục đích lớn lao, + Chủ ngữ + Thực hiện hành động",
        "explanationVi": "Đặt mục đích cần hướng tới lên đầu câu, vế sau nêu rõ những nỗ lực hoặc phương tiện hành động để hiện thực hóa mục đích đó (như 为了考上大学，每天努力学习; 为了早点到家，打算坐飞机).",
        "tips": "Mục đích luôn đứng ở đầu câu, trước chủ ngữ chính."
    },
    # 94
    {
        "category": "compound_sentences", "categoryName": "Câu phức & Liên từ nối", "categoryIcon": "🔗",
        "titleVi": "Câu rút gọn liên kết nhanh: ……了……（就）…… (Xong là... liền)",
        "structure": "Chủ ngữ + Động từ 1 + 了 + (Tân ngữ 1) + (就) + Động từ 2",
        "explanationVi": "Rút ngắn cấu trúc câu để biểu thị hành động thứ hai nối tiếp ngay sau khi hoàn tất hành động thứ nhất (như 吃了药就好多了 - uống thuốc xong là đỡ ngay; 下了课就去图书馆 - tan học là đến thư viện).",
        "tips": "Tương tự như '先...再...' nhưng súc tích và dứt khoát hơn."
    },
    # 95
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Ước lượng bằng phó từ “大概”: Đại khái, khoảng chừng",
        "structure": "大概 + Khoảng thời gian / Số lượng tiền bạc / Số người",
        "explanationVi": "Dùng '大概' để ước tính con số hoặc thời gian một cách phỏng đoán, không cần số liệu chính xác tuyệt đối (như 大概多长时间 - khoảng bao lâu; 大概五十块 - khoảng chừng 50 tệ).",
        "tips": "Có thể đứng trước hoặc sau chủ ngữ."
    },
    # 96
    {
        "category": "pronouns_measures", "categoryName": "Đại từ, Lượng từ & Số từ", "categoryIcon": "🔢",
        "titleVi": "Ước lượng bằng hai số liền kề: 七八, 十五六 (Khoảng 7-8, 15-16)",
        "structure": "Số từ A + Số từ B (liền kề tăng dần) + Lượng từ + Danh từ",
        "explanationVi": "Đặt hai số tự nhiên liền kề nhau để biểu thị một khoảng số lượng ước chừng (như 七八个学生 - khoảng 7 đến 8 học sinh; 十五六分钟 - khoảng 15 đến 16 phút; 三四天 - khoảng 3-4 ngày).",
        "tips": "Hai số ghép lại phải là số liền kề theo thứ tự nhỏ đến lớn (như 二三, 七八, 八九; không được nhảy số như 三五)."
    }
]

def main():
    with open('scripts/hsk3_raw_grammar.json', 'r', encoding='utf-8') as f:
        raw_items = json.load(f)

    enriched_list = []
    missing_translations = []

    for idx, raw in enumerate(raw_items):
        meta = HSK3_META[idx]
        item_id = f"hsk3-g-{idx+1:02d}"
        
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
        print(f"WARNING: {len(missing_translations)} missing translations in HSK 3:")
        for m in missing_translations:
            print(" -", m)
    else:
        print("PERFECT: 100% of sentences translated for HSK 3!")

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

export const HSK3_GRAMMAR_CATEGORIES: GrammarCategory[] = """ + json.dumps(HSK3_CATEGORIES, ensure_ascii=False, indent=2) + """;

export const HSK3_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = """ + json.dumps(enriched_list, ensure_ascii=False, indent=2) + """;
"""

    with open('src/data/hsk3GrammarData.ts', 'w', encoding='utf-8') as f:
        f.write(out_ts)

    print("Successfully created src/data/hsk3GrammarData.ts with", len(enriched_list), "points!")

if __name__ == '__main__':
    main()
