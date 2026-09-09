# -*- coding: utf-8 -*-
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ADDITIONAL_1A = {
    # 011
    "经过数百次的舞台历练，他的演技越发纯熟。": "Trải qua hàng trăm lần trui rèn trên sân khấu, diễn xuất của anh ấy ngày càng điêu luyện chín muồi.",
    "缠绵的雨丝，飘洒在青石小巷，越发让人觉得诗意。": "Những sợi mưa giăng giăng vương vấn buông rơi xuống con ngõ nhỏ lát đá xanh, càng khiến lòng người ngập tràn chất thơ.",
    # 012
    "他的身体已经大体恢复了，我觉得可以进行一些基础性训练了。": "Sức khỏe của anh ấy đại thể đã bình phục rồi, tôi thấy có thể bắt đầu tập một số bài rèn luyện cơ bản.",
    "同类企业中，设备或许大体相似，但是生产效能可能相差悬殊。": "Giữa các doanh nghiệp cùng ngành, trang thiết bị máy móc có thể đại khái tương tự nhau, nhưng hiệu suất sản xuất có thể chênh lệch một trời một vực.",
    "游客因擅自参加高危活动所造成的人身和财产损失，本旅行社概不负责。": "Những thiệt hại về người và của do du khách tự ý tham gia các hoạt động mạo hiểm nguy hiểm gây ra, công ty du lịch chúng tôi hoàn toàn không chịu trách nhiệm.",
    "凡成大事者，必定有坚韧不拔的意志。古今中外，概莫能外。": "Phàm những bậc làm nên việc lớn nhất định phải có ý chí kiên định sắt đá. Từ xưa chí kim, từ đông sang tây, không một ai là ngoại lệ cả.",
    "这部剧除男女主角之外，其他演员皆一人分饰数角，但每个人物特点鲜明，并不会让观众混淆。": "Vở kịch này ngoại trừ cặp đôi nam nữ chính ra, các diễn viên khác đều một người đóng nhiều vai, nhưng mỗi nhân vật đều mang cá tính rõ rệt, không hề khiến khán giả bị nhầm lẫn.",
    "中国瓷器之所以享誉世界，皆因其实用与审美并存。": "Gốm sứ Trung Hoa sở dĩ nức tiếng khắp thế giới, thảy đều nhờ vào sự song hành hài hòa giữa công năng thực dụng và vẻ đẹp thẩm mỹ.",
    "荆门为荆楚文化发祥地之一，文化底蕴深厚，历史古迹遍地皆是。": "Kinh Môn là một trong những cái nôi phát tích của văn hóa Kinh Sở, bề dày văn hóa sâu rộng, di tích lịch sử đâu đâu cũng có.",
    "从广州塔顶楼俯瞰，羊城璀璨的夜景尽收眼底。": "Từ tầng cao nhất của tháp Quảng Châu phóng tầm mắt ngắm nhìn, cảnh đêm rực rỡ hoa lệ của thành Dương Thành thu trọn vào đáy mắt.",
    "村落被青山绿水环绕，尽是些古朴的瓦房和雅致的石桥，没有丝毫现代化的气息，却添了几分宁静与幽然。": "Ngôi làng được non xanh nước biếc ôm ấp bao bọc, toàn là những mái nhà ngói cổ kính và cây cầu đá thanh tao, không chút hơi thở hiện đại, nhưng lại tăng thêm vài phần tĩnh lặng thanh nhã.",
    "在有关部门的大力监管下，存在环境安全隐患的酒店、餐厅等均已完成整改。": "Dưới sự kiểm tra giám sát gắt gao của các cơ quan chức năng, những khách sạn, nhà hàng tiềm ẩn nguy cơ mất an toàn môi trường đều đã hoàn thành việc chấn chỉnh sửa đổi.",
    "市场上某些特殊商品不宜标价的，均须经当地价格主管部门核准。": "Một số mặt hàng đặc thù trên thị trường không tiện niêm yết giá công khai thì thảy đều phải qua cơ quan quản lý giá cả địa phương thẩm định phê duyệt.",
    "那一大堆坏了的电器，他只用了一个晚上的时间，就通通修理好了。": "Cả một đống đồ điện hỏng hóc kia, anh ấy chỉ dùng vỏn vẹn một buổi tối là đã sửa xong tuốt tuồn tuột.",
    "这些事情你通通不要管，你只负责技术革新。": "Mấy chuyện linh tinh này cậu tuốt tuồn tuột đừng bận tâm, cậu chỉ cần tập trung phụ trách đổi mới kỹ thuật thôi.",
    "她对年轻后辈毫无保留，将自己多年来的经验教训统统分享给了大家。": "Cô ấy đối với thế hệ đàn em đi sau không hề giấu giếm chút ngón nghề nào, đem toàn bộ những kinh nghiệm xương máu đúc kết bao năm sẻ chia hết cho mọi người.",
    "他现在是一切为了孩子，什么升职发财换大房子，他统统不去想了。": "Bây giờ anh ấy một lòng một dạ chỉ vì con cái, ba cái chuyện thăng quan phát tài đổi nhà to anh ấy gạt sạch ra khỏi đầu không thèm nghĩ tới.",
    "现在很多孩子都有“唯我为大”的思维方式，这跟父母的过分溺爱有密切的关系。": "Ngày nay rất nhiều đứa trẻ mang tư duy 'ta là rốn của vũ trụ', điều này có mối liên hệ mật thiết với sự nuông chiều quá mức của cha mẹ.",
    "修身之道不唯阅读，品茶、闲谈、对弈、抚琴、练武、游历山水均可养性。": "Đạo tu thân không chỉ có mỗi đọc sách, việc thưởng trà, đàm đạo, chơi cờ, gảy đàn, luyện võ, du ngoạn non nước thảy đều có thể dưỡng tâm bồi tính.",
    "那么多同他一起备考的考生都放弃了，唯独他一个人坚持了下来。": "Bao nhiêu thí sinh cùng ôn thi với anh ấy đều đã bỏ cuộc giữa chừng, duy chỉ có mình anh là kiên trì trụ lại tới cùng.",
    "人的眼睛，能洞察他人，观测周遭的事物，唯独无法窥见自己的真容。": "Đôi mắt con người có thể nhìn thấu thiên hạ, quan sát vạn vật xung quanh, duy chỉ có chân dung đích thực của chính mình là không thể tự soi thấy.",
    "我们村上了岁数的老人几乎都不会用智能手机，唯有老村长是个例外。": "Các cụ cao niên trong làng chúng tôi hầu như chẳng ai biết xài điện thoại thông minh, duy chỉ có cụ trưởng thôn là một ngoại lệ hiếm hoi.",
    "在全球化的激烈竞争中，唯有持续创新才能立于不败之地。": "Trong cuộc cạnh tranh khốc liệt của toàn cầu hóa, chỉ có con đường không ngừng đổi mới sáng tạo mới có thể đứng vững bất bại.",
    "综合来看，外语学习的动机无非两种：融合型动机和工具型动机。": "Nhìn nhận một cách tổng thể, động lực học ngoại ngữ chẳng qua cũng chỉ có hai loại: động lực hòa nhập văn hóa và động lực công cụ thực dụng.",
    "邻居跟我偶然碰见时会闲聊几句，说的无非是些家长里短的事情。": "Hàng xóm khi tình cờ chạm mặt tôi cũng trò chuyện dăm ba câu, nói qua nói lại chẳng qua cũng chỉ quanh quẩn mấy chuyện vụn vặt gia đình.",
    "国务院明确规定，我国的“驰名商标”工作一概由国家商标局负责。": "Quốc vụ viện quy định rõ ràng rằng, công tác quản lý 'Nhãn hiệu nổi tiếng' của nước ta hoàn toàn do Cục Nhãn hiệu Quốc gia thống nhất phụ trách.",
    "小夫妻俩决定婚礼一切从简，只摆几桌酒席，婚车和接亲环节一概取消。": "Đôi vợ chồng trẻ quyết định hôn lễ mọi thứ làm giản tiện, chỉ bày biện vài mâm cỗ ấm cúng, còn xe hoa rước dâu và các thủ tục rườm rà thì hủy bỏ toàn bộ.",
    # 013
    "出于保护当事人的考虑，我们隐去了其真实姓名，姑且以“张某”代称。": "Xuất phát từ việc bảo vệ đương sự, chúng tôi đã giấu kín danh tính thật, tạm thời gọi bằng cái tên 'Trương mỗ'.",
    "我给您简单分析一下吧，您姑且一听，要是不对，权当我没说。": "Để tôi phân tích sơ qua giúp bác nhé, bác tạm lắng tai nghe thử, nếu không đúng thì coi như tôi chưa từng nói gì.",
    "“蜜月游”愈发流行，不少年轻人办完酒席即启程旅行。": "Trào lưu 'Du lịch trăng mật' ngày càng thịnh hành, không ít bạn trẻ tiệc cưới vừa tàn là lập tức xách ba lô lên đường du ngoạn.",
    "在4G峰值速度下，下载一部1GB大小的高清电影需要1分钟左右，而在5G条件下只需几秒即可。": "Ở tốc độ đỉnh của mạng 4G, tải một bộ phim độ nét cao dung lượng 1GB mất khoảng 1 phút, thế nhưng sang mạng 5G chỉ cần vài giây là xong ngay.",
    "气象局在暴雨来临前，通过网络、电视、广播等多种媒介，即时发布有关暴雨的预警信号。": "Cục khí tượng trước khi mưa bão ập tới đã thông qua mạng internet, truyền hình, phát thanh để lập tức phát đi các tín hiệu cảnh báo giông bão theo thời gian thực.",
    "本协议在履行过程中，如若发生未曾约定的情况，届时由双方共同友好商定。": "Trong quá trình thực hiện bản thỏa thuận này, nếu phát sinh tình huống chưa được quy định trước, đến lúc đó đôi bên sẽ cùng hữu nghị bàn thảo định đoạt.",
    "大会将于9月10日至18日在北京举行，届时将会有近800名国外代表与会。": "Đại hội sẽ được tổ chức từ ngày 10 đến 18 tháng 9 tại Bắc Kinh, đến thời điểm đó sẽ có gần 800 đại biểu nước ngoài tới tham dự.",
    "家长应尽早让孩子参与家务劳动，培养他们的责任感和自理能力。": "Các bậc phụ huynh nên sớm để con cái tham gia vào công việc nhà, bồi dưỡng cho trẻ tinh thần trách nhiệm và năng lực tự lập.",
    "外出旅行应提前确定行程并尽早预约购票，以防票量不足或票价上涨。": "Đi du lịch xa nên chốt lịch trình từ trước và đặt mua vé càng sớm càng tốt để phòng trường hợp cháy vé hoặc giá vé tăng cao.",
    "相聚的时光总是短暂的，丰盛的晚餐过后大家就此告别。": "Khoảnh khắc hội ngộ sum vầy lúc nào cũng ngắn ngủi, sau bữa tối thịnh soạn mọi người nhân đây nói lời chia tay tạm biệt.",
    "虽然油气勘探工作屡遭失败，但是地质学家们并未就此止步，反倒越挫越勇。": "Tuy công tác thăm dò dầu khí liên tục thất bại, nhưng các nhà địa chất học không hề dừng bước tại đây, trái lại càng vấp ngã càng thêm kiên cường.",
    "“绿肥红瘦”四字是李清照《如梦令》一词的点睛之笔，历来为世人所称道。": "Bốn chữ 'lục phì hồng sấu' (lá xanh đẫy đà hoa hồng tàn tạ) là nét chấm phá đắt giá trong bài từ 'Như Mộng Lệnh' của Lý Thanh Chiếu, xưa nay luôn được người đời hết lời ca tụng.",
    "苏州历来是经济富饶的鱼米之乡，与杭州齐名，并称“苏杭”。": "Tô Châu từ xưa đến nay vốn là vùng đất trù phú màu mỡ ngập tràn cá tôm lúa gạo, sánh ngang với Hàng Châu và được gọi chung là 'Tô - Hàng'.",
    "当时我年纪尚幼，许多事情已然模糊不清，但故乡染满绿的庭院，是记忆深处永远的乡愁。": "Hồi đó tôi tuổi còn thơ dại, nhiều chuyện xưa nay đã phai nhòa mông lung, nhưng khu vườn ngập tràn sắc xanh nơi quê nhà mãi là nỗi nhớ cố hương da diết sâu thẳm trong ký ức.",
    "截至目前，搜救工作尚未发现幸存人员，事故原因尚待调查。": "Tính đến thời điểm hiện tại, công tác tìm kiếm cứu nạn vẫn chưa phát hiện người sống sót, nguyên nhân tai nạn vẫn còn đang chờ điều tra làm rõ.",
    "她犹豫了一下，随即拿起了电话，把这件事报告给总经理。": "Cô ấy ngập ngừng đôi chút, ngay sau đó nhấc điện thoại lên báo cáo sự việc cho tổng giám đốc.",
    "我听闻临近扬州的泰州，早茶亦颇有特色，随即驱车从扬州前往泰州。": "Tôi nghe nói thành phố Thái Châu nằm sát nách Dương Châu cũng có món trà sớm rất độc đáo, liền ngay lập tức lái xe từ Dương Châu sang Thái Châu thưởng thức.",
    "孙老板向来一言九鼎，因此在商界信誉很高。": "Ông chủ Tôn từ xưa đến nay nói một là một nói hai là hai, lời nói nặng tựa cửu đỉnh, vì thế trên thương trường uy tín vô cùng cao trọng.",
    "他深居简出，向来不喜与外界交往。": "Ông ấy sống ẩn dật khép kín, từ trước tới giờ vốn không thích giao thiệp với thế giới bên ngoài.",
    "绿色农场种植出的果蔬天然无公害，一经上市便供不应求。": "Rau củ quả do nông trường xanh canh tác hoàn toàn tự nhiên không độc hại, vừa mới tung ra thị trường một cái là đã cháy hàng cung không đủ cầu.",
    "《红楼梦》这部经典名著又要翻拍的消息一经发布，即引起社会热议。": "Tin tức bộ danh tác kinh điển 'Hồng Lâu Mộng' sắp sửa được bấm máy làm lại vừa mới phát đi một cái là lập tức làm xôn xao dư luận xã hội.",
    "鉴于此问题情况复杂、涉及面广，本文限于篇幅，暂且不做讨论。": "Xét thấy vấn đề này tình hình phức tạp lại dính líu đến diện rộng, bài viết này do khuôn khổ dung lượng có hạn nên tạm thời không đi sâu bàn luận.",
    "任务推进遇到瓶颈时，不妨暂且搁置细节问题，集中精力解决主要问题。": "Khi tiến độ công việc gặp phải nút thắt cổ chai, chi bằng hãy tạm gác các chi tiết vụn vặt sang một bên để dồn toàn lực tháo gỡ vấn đề mấu chốt nhất.",
    "我们期待她的新作早日问世，并且预祝她在文学创作上取得更大的成功。": "Chúng tôi vô cùng mong đợi tác phẩm mới của cô ấy sớm ngày ra mắt công chúng, đồng thời chúc cô gặt hái được những thành tựu rực rỡ hơn nữa trên văn đàn.",
    "孩子们自发来到病房里看望老师，感谢老师的辛勤付出并祝愿老师早日康复。": "Lũ trẻ đã tự rủ nhau đến tận phòng bệnh thăm cô giáo, bày tỏ lòng biết ơn trước sự tận tụy của cô và chúc cô sớm ngày bình phục khỏe mạnh.",
    # 014
    "这家店的饭菜不但量大实惠，而且色香味俱全，每一个来吃的人都连连称赞。": "Cơm canh quán này chẳng những đĩa đầy ụ giá cả phải chăng, mà sắc hương vị đều trọn vẹn, bất cứ ai từng tới ăn cũng đều tấm tắc khen ngợi không ngớt.",
    "杂技艺术节上，各地顶尖的杂技演员各显身手，引得现场惊呼不断、掌声连连。": "Tại lễ hội nghệ thuật xiếc, các nghệ sĩ xiếc đỉnh cao khắp nơi đua nhau trổ tài xuất chúng, khiến cả hội trường ồ lên kinh ngạc không ngớt và vỗ tay rào rào liên hồi.",
    "嘉宾因说话屡次被主持人打断，已面露愠色。": "Vị khách mời do lời nói năm lần bảy lượt bị MC cắt ngang nên trên gương mặt đã thoáng lộ rõ vẻ tức giận bực bội.",
    "他的电影作品受到海内外市场的欢迎，屡次获得国际影展奖项。": "Các tác phẩm điện ảnh của ông được thị trường trong và ngoài nước đón nhận nồng nhiệt, liên tục ẵm các giải thưởng lớn tại các liên hoan phim quốc tế.",
    "凭借着高超的技艺和精巧的构思，民间艺术家的作品在国内外赛事中屡屡获奖。": "Nhờ kỹ nghệ siêu phàm và ý tưởng bài trí tài hoa, tác phẩm của nghệ nhân dân gian này liên tiếp rinh về giải thưởng tại các cuộc thi trong và ngoài nước.",
    "这一服装品牌将非遗元素融入现代设计，屡屡在时装周上惊艳亮相。": "Thương hiệu thời trang này đã khéo léo lồng ghép các yếu tố di sản phi vật thể vào thiết kế đương đại, liên tục tạo nên những màn xuất hiện mãn nhãn tại các tuần lễ thời trang.",
    "近年来，我院师生在各类学科竞赛中屡获佳绩，捷报频传。": "Những năm gần đây, thầy trò học viện chúng tôi liên tục gặt hái thành tích vang dội tại các kỳ thi học thuật, tin báo thắng trận bay về dồn dập.",
    "这里以前是沙尘暴频发的地区，通过植树造林、补绿复绿，现已成为国家级生态文明示范区。": "Nơi đây trước kia vốn là điểm nóng thường xuyên bùng phát bão cát, nhờ nỗ lực trồng cây gây rừng phủ xanh đất trống, nay đã vươn mình trở thành khu văn minh sinh thái kiểu mẫu cấp quốc gia.",
    "天空布满阴云，时而落下几滴雨，未带来一丝凉爽，却闷得让人喘不过气来。": "Bầu trời giăng kín mây xám xịt, chốc chốc lại lất phất rơi vài hạt mưa, chẳng đem lại chút mát mẻ nào mà lại oi nồng đến mức khiến người ta nghẹt thở.",
    "他凝神望着前方连绵的青山，时而眉头微蹙，时而喜上眉梢，不知思绪飘到了何方。": "Anh ấy chăm chú ngắm nhìn rặng núi xanh biếc trập trùng phía trước, lúc thì khẽ chau mày đăm chiêu, lúc lại rạng rỡ niềm vui nơi khóe mắt, chẳng rõ dòng suy nghĩ đã trôi dạt tới phương trời nào.",
    "对这些好心人的善举，受帮助者时时感念于心，希望有朝一日能回报恩人。": "Trước nghĩa cử cao đẹp của những tấm lòng vàng, người được cưu mang luôn luôn khắc cốt ghi tâm, mong sao có một ngày được đền đáp ơn sâu nghĩa nặng.",
    "工作中他是严师，教学一丝不苟；生活中他又像个老父亲，时时关心我们的身心健康。": "Trong công việc thầy là một người thầy nghiêm khắc dạy dỗ đâu ra đấy; còn ngoài đời thường thầy lại như người cha già, luôn luôn ân cần hỏi han sức khỏe thể chất lẫn tinh thần của chúng tôi.",
    "如果员工相继辞职，老板必须予以重视，找寻员工流失的真正原因。": "Nếu nhân viên cứ lần lượt nối gót nhau nộp đơn xin thôi việc, ông chủ nhất định phải hết sức lưu tâm, tìm cho ra cội nguồn thực sự của việc chảy máu chất xám.",
    "金秋九月，北京戏剧舞台异彩纷呈，相继展演了精品剧目114部。": "Mùa thu tháng Chín, sân khấu kịch Bắc Kinh rực rỡ sắc màu, đã lần lượt công diễn 114 vở kịch kinh điển xuất sắc.",
    "大嫂在旁边一个劲使眼色，示意哥哥不要再说下去了。": "Chị dâu đứng bên cạnh cứ liên tục nháy mắt ra hiệu, bảo anh trai đừng có bốc đồng nói thêm lời nào nữa.",
    "孩子不能一个劲儿地闷头苦学，适当的休闲和锻炼都是很有必要的。": "Trẻ con không thể cứ cắm đầu cắm cổ học vùi học dập suốt ngày, việc thư giãn hợp lý và rèn luyện thể chất là hết sức cần thiết.",
    "为了尽快研制出特效药，他常常在实验室里一连奋战十几个小时。": "Để mau chóng điều chế thành công loại thuốc đặc trị, anh ấy thường xuyên ở lì trong phòng thí nghiệm quần quật chiến đấu liền mười mấy tiếng đồng hồ.",
    "大水靠在沙发上，一连打了好几个哈欠，困得睁不开眼。": "Đại Thủy ngả lưng vào ghế sofa, ngáp liền một hơi mấy cái dài, buồn ngủ díu cả hai mắt lại.",
    "时隔12年，中国队再度捧起冠军奖杯。": "Cách biệt tròn 12 năm đằng đẵng, đội tuyển Trung Quốc lại một lần nữa giơ cao chiếc cúp vô địch danh giá.",
    "由于身体抱恙，她一度放弃歌唱事业。后来在家人的支持下，她再度鼓起勇气，站上舞台。": "Do sức khỏe giảm sút vì bạo bệnh, cô ấy từng có lúc phải từ bỏ sự nghiệp ca hát. Về sau nhờ sự tiếp sức của gia đình, cô đã lại một lần nữa lấy hết dũng khí bước lên ánh đèn sân khấu."
}

import json

with open('scripts/hsk79_part1a.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Append to TRANSLATIONS_1A
insert_marker = 'TRANSLATIONS_1A = {'
idx = code.find(insert_marker)
if idx != -1:
    pos = idx + len(insert_marker)
    lines_to_add = ""
    for k, v in ADDITIONAL_1A.items():
        lines_to_add += f'\n    "{k}": "{v}",'
    new_code = code[:pos] + lines_to_add + code[pos:]
    with open('scripts/hsk79_part1a.py', 'w', encoding='utf-8') as f:
        f.write(new_code)
    print("Merged additional translations into scripts/hsk79_part1a.py")
