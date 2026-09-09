# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re
from pypinyin import pinyin, Style

def clean_sentence_pinyin(sentence):
    # Special overrides for common HSK1 words with 儿化
    s_temp = sentence.replace('哪儿', '§NAR§').replace('这儿', '§ZHER§').replace('那儿', '§NAR2§')
    s_temp = s_temp.replace('一点儿', '§YIDIANR§').replace('面条儿', '§MIANTIAOR§').replace('好玩儿', '§HAOWANR§')
    s_temp = s_temp.replace('一下（儿）', '§YIXIAR§')

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
        elif char in '——':
            res.append('—')
        elif char in '0123456789':
            res.append(char)
        elif char.strip():
            res.append(char)

    joined = ' '.join(res)
    # Put back rhotic tokens
    joined = joined.replace('§NAR§', 'nǎr').replace('§ZHER§', 'zhèr').replace('§NAR2§', 'nàr')
    joined = joined.replace('§YIDIANR§', 'yìdiǎnr').replace('§MIANTIAOR§', 'miàntiáor').replace('§HAOWANR§', 'hǎowánr')
    joined = joined.replace('§YIXIAR§', 'yíxià(r)')

    # Spacing cleanup
    joined = re.sub(r'\s+([,.\?!:"])', r'\1', joined)
    joined = re.sub(r'([("])\s+', r'\1', joined)
    joined = re.sub(r'\s+', ' ', joined).strip()
    
    # Capitalize first letter
    if joined:
        joined = joined[0].upper() + joined[1:]
    return joined

# Complete translation dictionary for all 204 sentences in HSK 1
TRANSLATIONS = {
    # 01
    "小高去哪儿了？": "Tiểu Cao đi đâu rồi?",
    "今天我们学习第一课。": "Hôm nay chúng ta học bài thứ nhất (Bài 1).",
    
    # 02
    "同学们，你们好！": "Chào các bạn học sinh!",
    "学校里边有超市。": "Bên trong trường học có siêu thị.",
    "外边正在下雨呢。": "Bên ngoài trời đang mưa đấy.",
    "电影院在医院的后边。": "Rạp chiếu phim ở phía sau bệnh viện.",

    # 03
    "桌子上有几本书？": "Trên bàn có mấy quyển sách?",
    "书店里的人很多。": "Người ở trong hiệu sách rất đông.",
    "他们都在国外。": "Họ đều đang ở nước ngoài.",

    # 04
    "我会说中文。": "Tôi biết nói tiếng Trung.",
    "他不会开车。": "Anh ấy không biết lái xe ô tô.",
    "你明天能不能去？": "Ngày mai bạn có thể đi được không?",
    "她生病了，不能来上课。": "Cô ấy bị ốm rồi, không thể đến lớp học.",

    # 05
    "我想买一些水果。": "Tôi muốn mua một ít hoa quả.",
    "你想喝茶吗？": "Bạn có muốn uống trà không?",
    "他们要去书店。": "Họ muốn / chuẩn bị đi hiệu sách.",
    "我要学习汉语。": "Tôi muốn học tiếng Hán.",

    # 06
    "这儿不可以吃东西。": "Ở đây không được phép ăn đồ ăn.",
    "我可以问一个问题吗？": "Tôi có thể hỏi một câu hỏi được không?",

    # 07
    "他去医院看病了。": "Anh ấy đến bệnh viện khám bệnh rồi.",
    "我想睡一觉，休息一下（儿）。": "Tôi muốn ngủ một giấc, nghỉ ngơi một chút.",
    "上课不要说话。": "Trong giờ học đừng nói chuyện riêng.",
    "今天我上中文课。": "Hôm nay tôi có tiết học tiếng Trung.",
    "我下了课要去食堂。": "Tôi tan học xong sẽ đến nhà ăn.",
    "下了班你做什么？": "Tan làm xong bạn làm gì?",
    "她昨天生病了。": "Hôm qua cô ấy bị ốm.",

    # 08
    "你弟弟多大？": "Em trai của bạn bao nhiêu tuổi?",
    "这件衣服多少钱？": "Bộ quần áo này bao nhiêu tiền?",
    "现在几点？": "Bây giờ là mấy giờ?",
    "她是哪国人？": "Cô ấy là người nước nào?",
    "你去哪儿？": "Bạn đi đâu đấy?",
    "你住在哪里？": "Bạn sống ở đâu?",
    "哪些是汉语书？": "Những quyển nào là sách tiếng Trung?",
    "那是什么？": "Đó là cái gì?",
    "那个人是谁？": "Người kia là ai?",
    "你怎么去学校？": "Bạn đi đến trường bằng phương tiện gì?",
    "明天天气怎么样？": "Thời tiết ngày mai thế nào?",

    # 09
    "我是学生。": "Tôi là học sinh.",
    "你是哪国人？": "Bạn là người nước nào?",
    "老师，您好！": "Em chào thầy/cô ạ!",
    "他会开车吗？": "Anh ấy có biết lái xe không?",
    "她是不是老师？": "Cô ấy có phải là giáo viên không?",
    "我们都是大学生。": "Chúng tôi đều là sinh viên đại học.",
    "你们是学生吗？": "Các bạn có phải là học sinh không?",
    "他们去哪儿了？": "Họ đã đi đâu rồi?",
    "她们都是我的朋友。": "Họ đều là bạn bè của tôi.",
    "你看，它正在吃饭呢。": "Bạn nhìn kìa, nó đang ăn cơm đấy.",
    "这些小狗真漂亮，它们叫什么名字？": "Những chú cún này thật đẹp, chúng tên là gì vậy?",
    "大家都喜欢学习汉语。": "Mọi người đều thích học tiếng Trung.",

    # 10
    "这是谁的书？": "Đây là sách của ai?",
    "那个手机多少钱？": "Chiếc điện thoại kia bao nhiêu tiền?",
    "我在这儿学习中文。": "Tôi học tiếng Trung ở đây.",
    "那儿有一家书店。": "Đằng kia có một hiệu sách.",
    "这里是我的家。": "Đây là nhà của tôi.",
    "那里有一家饭店。": "Đằng kia có một nhà hàng.",
    "这些是老师的书。": "Những thứ này là sách của thầy giáo.",
    "我不认识那些人。": "Tôi không quen biết những người kia.",
    "到了饭店，大家有的想吃米饭，有的想吃面条。": "Đến nhà hàng, mọi người có người muốn ăn cơm, có người lại muốn ăn mì.",
    "这个杯子多少钱？": "Chiếc cốc này bao nhiêu tiền?",
    "她在那个房间。": "Cô ấy ở trong căn phòng kia.",
    "有些学生不在学校住。": "Có một số học sinh không ở trong trường.",

    # 11
    "一个、两百、五十八、一百零六、两千三百五十、九点半、半个小时": "1 cái, 200, 58, 106, 2350, 9 giờ rưỡi, nửa tiếng đồng hồ",

    # 12
    "这本书是中文书。": "Quyển sách này là sách tiếng Trung.",
    "我吃了两个包子。": "Tôi đã ăn hai chiếc bánh bao.",
    "前边有一家书店。": "Phía trước có một hiệu sách.",
    "你家有几口人？": "Nhà bạn có mấy người?",
    "我有十块钱。": "Tôi có mười đồng.",
    "这只小猫真漂亮。": "Chú mèo con này thật xinh đẹp.",
    "这件衣服三百元。": "Bộ quần áo này giá ba trăm tệ.",

    # 13
    "喝杯茶吧。": "Uống một tách trà nhé.",

    # 14
    "今天几月几日（号）？": "Hôm nay là ngày mấy tháng mấy?",
    "她今年几岁？": "Năm nay cô ấy mấy tuổi?",
    "现在三点十分。": "Bây giờ là 3 giờ 10 phút.",
    "他学了一年汉语。": "Anh ấy đã học tiếng Trung được một năm.",
    "我们休息了三天。": "Chúng tôi đã nghỉ ngơi ba ngày.",

    # 15
    "我非常喜欢学中文。": "Tôi vô cùng thích học tiếng Trung.",
    "这里的水果很便宜。": "Hoa quả ở đây rất rẻ.",
    "太贵了！": "Đắt quá đi mất!",
    "今天天气真好！": "Thời tiết hôm nay thật là đẹp!",
    "这件衣服有一点儿大。": "Chiếc áo này hơi rộng một chút.",

    # 16
    "我们都学习汉语。": "Chúng tôi đều học tiếng Trung.",
    "他们都是中国学生。": "Họ đều là du học sinh Trung Quốc.",

    # 17
    "他们在做什么？": "Họ đang làm gì thế?",
    "学生们正在上课。": "Các bạn học sinh đang trong giờ học.",

    # 18
    "我想再买一本。": "Tôi muốn mua thêm một quyển nữa.",
    "我再问一个问题，可以吗？": "Tôi hỏi thêm một câu nữa có được không?",

    # 19
    "我想吃面条儿，还想吃包子。": "Tôi muốn ăn mì, còn muốn ăn cả bánh bao nữa.",
    "我有两个姐姐，还有一个哥哥。": "Tôi có hai người chị gái, và còn có một người anh trai.",
    "我也喜欢学习中文。": "Tôi cũng thích học tiếng Trung.",
    "弟弟也是大学生。": "Em trai tôi cũng là sinh viên đại học.",

    # 20
    "她不是老师。": "Cô ấy không phải là giáo viên.",
    "我没看电视。": "Tôi chưa / không xem tivi.",
    "我没有电脑。": "Tôi không có máy tính.",
    "不要说话。": "Đừng nói chuyện.",

    # 21
    "我想在中国工作。": "Tôi muốn làm việc tại Trung Quốc.",
    "你在哪儿学习中文？": "Bạn học tiếng Trung ở đâu?",

    # 22
    "我没和她一起去超市。": "Tôi không đi siêu thị cùng với cô ấy.",
    "我对老师说“谢谢”。": "Tôi nói 'cảm ơn' với thầy giáo.",

    # 23
    "我和姐姐都喜欢唱歌。": "Tôi và chị gái đều thích ca hát.",
    "今天和明天都下雨。": "Hôm nay và ngày mai trời đều mưa.",

    # 24
    "这是你的手机吗？": "Đây có phải là điện thoại của bạn không?",
    "她是我的好朋友。": "Cô ấy là bạn tốt của tôi.",

    # 25
    "今天我们学了十个汉字。": "Hôm nay chúng tôi đã học mười chữ Hán.",
    "我买了一些苹果。": "Tôi đã mua một ít táo.",

    # 26
    "我们走吧。": "Chúng ta đi thôi nào.",
    "八点了，起床吧。": "Tám giờ rồi, dậy thôi nào.",
    "春天了，天气暖和了。": "Mùa xuân đến rồi, thời tiết đã ấm lên rồi.",
    "我不去商店了。": "Tôi không đi cửa hàng nữa đâu.",
    "你喜欢喝茶吗？": "Bạn có thích uống trà không?",
    "你呢？": "Còn bạn thì sao?",
    "我的手机呢？": "Điện thoại của tôi đâu rồi nhỉ?",
    "外面下着雨呢。": "Bên ngoài trời đang mưa đấy.",
    "她正在看书呢。": "Cô ấy đang đọc sách đấy.",

    # 27
    "喂，请问，李老师在吗？": "A lô, xin hỏi thầy Lý có ở đó không ạ?",
    "喂，你去哪儿？": "Này, bạn đi đâu đấy?",

    # 28
    "哥哥姐姐、今天和明天、有没有": "Anh trai và chị gái; hôm nay và ngày mai; có hay không có",

    # 29
    "好朋友、我的书包、很喜欢": "Bạn tốt; cặp sách của tôi; rất thích",

    # 30
    "买东西、回学校、去公司": "Mua đồ; về trường học; đến công ty",

    # 31
    "我们学习、孩子高兴、房间很大": "Chúng tôi học tập; đứa trẻ vui vẻ; căn phòng rất lớn",

    # 32
    "一杯、两个": "Một ly (cốc); hai cái",

    # 33
    "在学校（学习）、对老师（说）、和朋友（说汉语）": "Học tập ở trường; nói với thầy giáo; nói tiếng Trung cùng bạn bè",

    # 34
    "桌子上、饭店里、椅子下边": "Trên bàn; trong nhà hàng; phía dưới ghế",

    # 35
    "电影很好看。": "Bộ phim rất hay.",
    "她是老师。": "Cô ấy là giáo viên.",
    "学习汉语很有意思。": "Học tiếng Hán rất thú vị.",

    # 36
    "明天星期三。": "Ngày mai là thứ Tư.",
    "那个饭店怎么样？": "Nhà hàng đó như thế nào?",
    "我今年二十岁。": "Năm nay tôi hai mươi tuổi.",
    "苹果五块钱一斤。": "Táo năm đồng một cân.",

    # 37
    "老师来了。": "Thầy giáo đã đến rồi.",
    "哥哥去学校了。": "Anh trai đã đến trường rồi.",
    "今天很冷。": "Hôm nay rất lạnh.",
    "这只小狗非常可爱。": "Chú cún con này vô cùng đáng yêu.",

    # 38
    "我喝茶。": "Tôi uống trà.",
    "明天我去找你。": "Ngày mai tôi sẽ đến tìm bạn.",
    "我想吃面条儿。": "Tôi muốn ăn mì.",

    # 39
    "她不会唱中文歌。": "Cô ấy không biết hát bài hát tiếng Trung.",
    "我的中文老师是中国人。": "Thầy giáo dạy tiếng Trung của tôi là người Trung Quốc.",
    "我有两本汉语书。": "Tôi có hai quyển sách tiếng Trung.",
    "新买的衣服很漂亮。": "Bộ quần áo mới mua rất đẹp.",

    # 40
    "他们都是中国学生。": "Họ đều là học sinh Trung Quốc.",
    "你多吃一点儿。": "Bạn ăn nhiều thêm một chút nhé.",
    "我们明天去北京。": "Ngày mai chúng tôi đi Bắc Kinh.",
    "他在家看书。": "Cậu ấy đọc sách ở nhà.",

    # 41
    "休息一下吧。": "Nghỉ ngơi một lát đi nào.",
    "请问一下，医院在哪儿？": "Cho tôi hỏi một chút, bệnh viện ở đâu ạ?",
    "你听一下。": "Bạn lắng nghe một chút xem.",
    "我想看一眼。": "Tôi muốn nhìn một cái xem sao.",

    # 42
    "我买了一个面包。": "Tôi đã mua một chiếc bánh mì.",
    "他今天不休息。": "Hôm nay anh ấy không nghỉ ngơi.",

    # 43
    "今天天气很热。": "Hôm nay thời tiết rất nóng.",
    "你女儿真漂亮！": "Con gái của bạn thật là xinh đẹp!",

    # 44
    "今天星期一。": "Hôm nay là thứ Hai.",
    "现在十二点半。": "Bây giờ là mười hai giờ rưỡi.",

    # 45
    "对不起！": "Xin lỗi!",
    "下雨了。": "Trời mưa rồi.",

    # 46
    "她是我的朋友。": "Cô ấy là bạn của tôi.",
    "我不想吃面条儿。": "Tôi không muốn ăn mì sợi.",

    # 47
    "他是中国人吗？": "Anh ấy có phải là người Trung Quốc không?",

    # 48
    "他是哪国人？": "Anh ấy là người nước nào?",

    # 49
    "你想不想学中文？": "Bạn có muốn học tiếng Trung hay không?",
    "你吃没吃晚饭？": "Bạn đã ăn bữa tối hay chưa?",
    "这件衣服贵不贵？": "Bộ quần áo này có đắt không?",
    "明天你去不去？": "Ngày mai bạn có đi không?",

    # 50
    "您请坐。": "Mời ngài ngồi ạ.",
    "走吧！": "Đi thôi nào!",
    "请不要说话。": "Xin vui lòng đừng nói chuyện.",

    # 51
    "今天真冷啊！": "Hôm nay trời thật là lạnh quá!",
    "太贵了！": "Đắt quá đi mất!",

    # 52
    "我哥哥是大学生。": "Anh trai tôi là sinh viên đại học.",

    # 53
    "我有哥哥，没有姐姐。": "Tôi có anh trai, không có chị gái.",

    # 54
    "前边是不是电影院？": "Phía trước có phải là rạp chiếu phim không?",
    "超市后边是一家饭店。": "Phía sau siêu thị là một nhà hàng.",

    # 55
    "学校外边有一家书店。": "Bên ngoài trường học có một hiệu sách.",
    "桌子上有一本中文书。": "Trên bàn có một quyển sách tiếng Trung.",

    # 56
    "我来中国学汉语。": "Tôi đến Trung Quốc để học tiếng Hán.",
    "晚上我们去电影院看电影。": "Tối nay chúng tôi đến rạp chiếu phim để xem phim.",

    # 57
    "我坐飞机去上海。": "Tôi đi Thượng Hải bằng máy bay.",
    "爸爸每天开车上班。": "Bố lái xe ô tô đi làm mỗi ngày.",

    # 58
    "老师给我一本书。": "Thầy giáo cho tôi một quyển sách.",
    "我问你一个问题。": "Tôi hỏi bạn một câu hỏi.",

    # 59
    "这是我哥哥，他学习中文。": "Đây là anh trai tôi, anh ấy học tiếng Trung.",
    "我有一个姐姐，没有妹妹。": "Tôi có một người chị gái, không có em gái.",
    "外面冷，多穿衣服。": "Bên ngoài lạnh, mặc thêm nhiều áo vào.",
    "他不来，我也不去。": "Cậu ấy không đến, tôi cũng không đi.",

    # 60
    "我喜欢唱歌，我弟弟也喜欢唱歌。": "Tôi thích ca hát, em trai tôi cũng thích ca hát.",
    "这家饭店的饺子很好吃，也很便宜。": "Sủi cảo của nhà hàng này rất ngon, cũng rất rẻ.",

    # 61
    "这个房间很大，还很漂亮。": "Căn phòng này rất rộng, lại còn rất đẹp nữa.",
    "我会说英语，还会说汉语。": "Tôi biết nói tiếng Anh, lại còn biết nói cả tiếng Hán nữa.",

    # 62
    "你学了多少个汉字？": "Bạn đã học được bao nhiêu chữ Hán rồi?",
    "我买了一些苹果。": "Tôi đã mua một ít táo.",

    # 63
    "八点了，起床吧。": "Tám giờ rồi, dậy thôi nào.",
    "她病了，在家休息呢。": "Cô ấy bị ốm rồi, đang nghỉ ngơi ở nhà.",

    # 64
    "同学们在/正在上课。": "Các bạn học sinh đang trong giờ học.",

    # 65
    "王老师在/正在打电话呢。": "Thầy Vương đang gọi điện thoại đấy.",

    # 66
    "我没看电视，学习呢。": "Tôi không xem tivi đâu, đang học bài đấy chứ.",

    # 67
    "这本书二十四块（钱）。": "Quyển sách này giá 24 đồng (tệ).",
    "包子三块（钱）一个。": "Bánh bao 3 đồng một chiếc.",

    # 68
    "今天我们学习第六课。": "Hôm nay chúng ta học bài thứ sáu (Bài 6).",
    "第一本是我的书，第二本是她的书。": "Quyển thứ nhất là sách của tôi, quyển thứ hai là sách của cô ấy.",

    # 69
    "2022年2月4日": "Ngày 4 tháng 2 năm 2022",
    "九月十五号、五月一日": "Ngày 15 tháng 9; ngày 1 tháng 5",
    "今天星期三。": "Hôm nay là thứ Tư.",

    # 70
    "两点、七点零五、九点二十（分）、十点半": "2 giờ đúng; 7 giờ 5 phút; 9 giờ 20 phút; 10 giờ rưỡi"
}

print(f"Total translations registered: {len(TRANSLATIONS)}")
