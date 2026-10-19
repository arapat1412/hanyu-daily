# Rà soát và sửa ví dụ Boya sơ cấp 2 — 20/10/2026

## Phạm vi và kết quả

- Đã đọc toàn bộ 864 mục ví dụ của 25 bài trong dữ liệu website; trước khi sửa có 844 chuỗi ví dụ tiếng Trung khác nhau.
- Đã sửa 72 mục: 25 mục câu/cách dùng, 9 mục diễn đạt tự nhiên hơn, 27 mục bản dịch, 1 mục phiên âm câu và 10 mục nghĩa/từ loại/âm đầu mục. Đây không phải 72 lỗi ngữ pháp: một số câu cũ đúng nhưng dùng nghĩa khác với đầu mục hoặc cần diễn đạt rõ hơn.
- Tổng cộng 35 mục thay đổi nội dung câu tiếng Trung (kể cả dấu câu); 16 mục có chỉnh âm, nghĩa hoặc từ loại đầu mục. Các số này chồng lấp với phân loại ở trên.
- Đồng bộ CSV và TypeScript, giữ nguyên 864 ID, thứ tự, bài học, âm thanh và các trường không liên quan. Dữ liệu và các sửa đổi Boya sơ cấp 1 được giữ nguyên.
- Các thay đổi được lưu trong registry sửa dữ liệu và pinyin ghi đè theo từng mục, để tái tạo dữ liệu không làm mất sửa đổi.
- Báo cáo ghi lại dữ liệu trước/sau của lần sửa này. Đây là rà soát dữ liệu đang dùng trên website, không phải đối chiếu với bản in gốc của giáo trình.

## Tiêu chí

- Chỉnh câu chưa hoàn chỉnh, kết hợp từ, thứ tự từ, ví dụ sai nghĩa đang dạy, bản dịch không khớp và các âm đọc rõ ràng bị lẫn.
- Không coi mọi câu rút gọn hay thiếu 了 là sai. Những cụm từ độc lập vẫn có thể hợp lệ khi minh họa kết hợp từ.
- Các thay đổi như lượng từ 本 thay cho 个, 人口众多 hoặc 的 trong 真正的朋友 được ghi là chuẩn hóa diễn đạt cho người học, không khẳng định mọi cách nói cũ đều sai tuyệt đối.
- Từ đa nghĩa được xét theo nghĩa và âm đầu mục đang hiển thị; không suy đoán rằng dữ liệu đã trùng khít nghĩa được chọn trong bản in sách.

## Đối chiếu các trường hợp dễ lẫn

- 长 trong nghĩa dài đọc cháng, trong nghĩa lớn lên đọc zhǎng: [MOE — 长](https://stroke-order.learningweb.moe.edu.tw/dictMean.jsp?ID=38263), [MOE — 生长](https://dict.revised.moe.edu.tw/dictView.jsp?ID=132454&la=1&powerMode=0).
- 端 trong 端菜 là động từ bưng, không phải danh từ đầu mút: [MOE — 端](https://dict.revised.moe.edu.tw/dictView.jsp?ID=2370&la=0&powerMode=0).
- 挨打 được chuẩn hóa thành áidǎ theo cách đọc phổ thông Trung Quốc đại lục đang dùng trong giáo trình; không áp dụng cách đọc Đài Loan vào đây. [Tài liệu giảng dạy của trường học tại Yên Đài](https://www.yantai.gov.cn/module/download/downfile.jsp?classid=0&filename=00074a86b3344c8aacbaefcfedf37c4e.pdf&showname=%25E7%2583%259F%25E5%258F%25B0%25E5%25B8%2582%25E8%258E%25B1%25E5%25B1%25B1%25E5%258C%25BA%25E7%25AC%25AC%25E4%25B8%2589%25E5%25AE%259E%25E9%25AA%258C%25E5%25B0%258F%25E5%25AD%25A62022-2023%25E5%25AD%25A6%25E5%25B9%25B4%25E6%2595%2599%25E5%25AD%25A6%25E7%25A0%2594%25E7%25A9%25B6%25E6%25B4%25BB%25E5%258A%25A8%25E5%258F%258A%25E6%2588%2590%25E6%259E%259C.pdf).

## Câu / cách dùng (25 mục)

### Bài 1 · 送 · `boya2-1-2` (STT 2)

- Câu trước: 我送你
- Câu sau: 我送你一本书。
- Pinyin sau: Wǒ sòng nǐ yì běn shū.
- Dịch trước: Tôi đưa tiễn bạn
- Dịch sau: Tôi tặng bạn một quyển sách.
- Pinyin trước: Wǒ sòng nǐ
- Lý do: Minh họa 送 nghĩa tặng, thay vì tiễn người.
### Bài 1 · 接 · `boya2-1-3` (STT 3)

- Câu trước: 请接电话
- Câu sau: 我去机场接你。
- Pinyin sau: Wǒ qù jīchǎng jiē nǐ.
- Dịch trước: Làm ơn nghe điện thoại
- Dịch sau: Tôi đến sân bay đón bạn.
- Pinyin trước: Qǐng jiē diànhuà
- Lý do: Minh họa 接 nghĩa đón, thay vì nghe điện thoại.
### Bài 1 · 晴 · `boya2-1-13` (STT 13)

- Câu trước: 今天很晴
- Câu sau: 今天天气晴朗。
- Pinyin sau: Jīntiān tiānqì qínglǎng.
- Dịch trước: Hôm nay trời tạnh nắng
- Dịch sau: Hôm nay trời quang đãng.
- Pinyin trước: Jīn tiān hěn qíng
- Lý do: Dùng 晴朗 trong câu miêu tả thời tiết cho tự nhiên hơn 今天很晴.
### Bài 1 · 阴 · `boya2-1-15` (STT 15)

- Câu trước: 今天天阴
- Câu sau: 今天是阴天。
- Pinyin sau: Jīntiān shì yīntiān.
- Dịch trước: Hôm nay trời âm u
- Dịch sau: Hôm nay trời âm u.
- Pinyin trước: Jīn tiān tiān yīn
- Lý do: Chuẩn hóa cách diễn đạt thời tiết; câu cũ dạng rút gọn vẫn hiểu được.
### Bài 2 · 对 · `boya2-2-1` (STT 25)

- Câu trước: 你说得对
- Câu sau: 老师对我们很好。
- Pinyin sau: Lǎoshī duì wǒmen hěn hǎo.
- Dịch trước: Bạn nói đúng
- Dịch sau: Thầy cô đối xử rất tốt với chúng tôi.
- Pinyin trước: Nǐ shuō de duì
- Lý do: Minh họa giới từ 对: đối với; câu cũ dùng tính từ đúng.
### Bài 3 · 包 · `boya2-3-1` (STT 54)

- Câu trước: 给我一个包
- Câu sau: 请帮我把礼物包好。
- Pinyin sau: Qǐng bāng wǒ bǎ lǐwù bāo hǎo.
- Dịch trước: Cho tôi một cái bao
- Dịch sau: Hãy giúp tôi gói món quà cho cẩn thận.
- Pinyin trước: Gěi wǒ yī gè bāo
- Lý do: Minh họa 包 làm động từ gói thay vì danh từ cái túi.
### Bài 3 · 先生 · `boya2-3-2` (STT 55)

- Câu trước: 这位先生贵姓
- Câu sau: 先生，请问您贵姓？
- Pinyin sau: Xiānsheng, qǐngwèn nín guìxìng?
- Dịch trước: Ông này tên gì
- Dịch sau: Thưa ông, xin hỏi ông họ gì?
- Pinyin trước: Zhè wèi xiānsheng guì xìng
- Lý do: Hỏi họ lịch sự bằng 您贵姓; bản dịch cũ hỏi tên không khớp.
### Bài 3 · 长 · `boya2-3-4` (STT 57)

- Câu trước: 他的头发很长
- Câu sau: 孩子长高了。
- Pinyin sau: Háizi zhǎng gāo le.
- Dịch trước: Tóc anh ấy rất dài
- Dịch sau: Đứa trẻ đã cao lên rồi.
- Pinyin trước: Tā de tóu fā hěn zhǎng
- Lý do: Khớp 长 / zhǎng = lớn lên; câu cũ nghĩa dài phải đọc cháng.
### Bài 3 · 左右 · `boya2-3-15` (STT 68)

- Câu trước: 我的左右手都受伤了。
- Câu sau: 他二十岁左右。
- Pinyin sau: Tā èrshí suì zuǒyòu.
- Dịch trước: Cả tay trái và tay phải của tôi đều bị thương.
- Dịch sau: Anh ấy khoảng hai mươi tuổi.
- Pinyin trước: Wǒde zuǒyòu shǒu dōu shòushāng le.
- Lý do: Minh họa 左右 nghĩa khoảng, thay vì trái và phải.
### Bài 6 · 部 · `boya2-6-29` (STT 173)

- Câu trước: 教育部发布了新的政策。
- Câu sau: 我看了一部中国电影。
- Pinyin sau: Wǒ kàn le yí bù Zhōngguó diànyǐng.
- Dịch trước: Bộ Giáo dục đã ban hành chính sách mới.
- Dịch sau: Tôi đã xem một bộ phim Trung Quốc.
- Pinyin trước: Jiàoyùbù fābù le xīn de zhèngcè.
- Đầu mục `meaning`: quyển → lượng từ cho tác phẩm, phim
- Đầu mục `partOfSpeech`: Danh từ / Lượng từ → Lượng từ
- Lý do: Minh họa 部 làm lượng từ cho tác phẩm thay vì bộ trong 教育部.
### Bài 7 · 毛 · `boya2-7-1` (STT 176)

- Câu trước: 一毛钱
- Câu sau: 这只猫的毛很软。
- Pinyin sau: Zhè zhī māo de máo hěn ruǎn.
- Dịch trước: Một mao (10 phân)
- Dịch sau: Lông của con mèo này rất mềm.
- Pinyin trước: Yī máo qián
- Lý do: Minh họa 毛 nghĩa lông, thay vì đơn vị tiền.
### Bài 9 · 拐 · `boya2-9-3` (STT 250)

- Câu trước: 走到十字路口请向右拐。
- Câu sau: 他一拐一拐地走进了房间。
- Pinyin sau: Tā yì guǎi yì guǎi de zǒu jìn le fángjiān.
- Dịch trước: Đi đến ngã tư xin hãy rẽ phải.
- Dịch sau: Anh ấy đi khập khiễng vào phòng.
- Pinyin trước: Zǒu dào shízì lùkǒu qǐng xiàng yòu guǎi.
- Lý do: Minh họa 拐 nghĩa khập khiễng theo đầu mục, thay vì rẽ.
### Bài 12 · 保洁 · `boya2-12-29` (STT 401)

- Câu trước: 我们应该共同维护环境保洁。
- Câu sau: 我们应该做好环境保洁工作。
- Pinyin sau: Wǒmen yīnggāi zuò hǎo huánjìng bǎojié gōngzuò.
- Dịch trước: Chúng ta nên cùng nhau giữ gìn vệ sinh môi trường.
- Dịch sau: Chúng ta nên làm tốt công tác vệ sinh môi trường.
- Pinyin trước: Wǒmen yīnggāi gòngtóng wéihù huánjìng bǎojié.
- Lý do: Sửa kết hợp từ 维护环境保洁 thành 做好……保洁工作.
### Bài 14 · 得 · `boya2-14-5` (STT 443)

- Câu trước: 我得到了好消息
- Câu sau: 他画得很好。
- Pinyin sau: Tā huà de hěn hǎo.
- Dịch trước: Tôi đã nhận được tin tốt
- Dịch sau: Anh ấy vẽ rất đẹp.
- Pinyin trước: Wǒ dé dào le hǎo xiāo xī
- Đầu mục `meaning`: được → trợ từ dẫn bổ ngữ
- Đầu mục `partOfSpeech`: Động từ / Trợ từ / Trợ động từ → Trợ từ
- Lý do: Dùng 得 / de dẫn bổ ngữ mức độ, thay cho 得到 / dédào.
### Bài 15 · 块 · `boya2-15-1` (STT 480)

- Câu trước: 一块钱
- Câu sau: 请给我一块蛋糕。
- Pinyin sau: Qǐng gěi wǒ yí kuài dàngāo.
- Dịch trước: một đồng (tiền)
- Dịch sau: Xin cho tôi một miếng bánh ngọt.
- Pinyin trước: yí kuài qián
- Lý do: Minh họa 块 nghĩa miếng thay vì đơn vị tiền.
### Bài 16 · 节 · `boya2-16-1` (STT 519)

- Câu trước: 这节课很有意思
- Câu sau: 祝你节日快乐！
- Pinyin sau: Zhù nǐ jiérì kuàilè!
- Dịch trước: Tiết học này rất hay
- Dịch sau: Chúc bạn có một ngày lễ vui vẻ!
- Pinyin trước: Zhè jié kè hěn yǒu yì sī
- Lý do: Đầu mục 节 / jié nghĩa ngày lễ; câu 这节课 dùng lượng từ đọc jié nhưng không minh họa nghĩa này.
### Bài 16 · 总是 · `boya2-16-8` (STT 526)

- Câu trước: 他总是很努力工作。
- Câu sau: 他总是很努力地工作。
- Pinyin sau: Tā zǒngshì hěn nǔlì de gōngzuò.
- Dịch trước: Anh ấy luôn luôn làm việc chăm chỉ.
- Dịch sau: Anh ấy luôn làm việc rất chăm chỉ.
- Pinyin trước: Tā zǒngshì hěn nǔlì gōngzuò.
- Lý do: Thêm 地 để cụm 很努力 làm trạng ngữ rõ ràng trước 工作.
### Bài 16 · 细 · `boya2-16-11` (STT 529)

- Câu trước: 她做事情非常细心。
- Câu sau: 这根线很细。
- Pinyin sau: Zhè gēn xiàn hěn xì.
- Dịch trước: Cô ấy làm việc vô cùng cẩn thận và tỉ mỉ.
- Dịch sau: Sợi chỉ này rất mảnh.
- Pinyin trước: Tā zuò shìqing fēicháng xìxīn.
- Lý do: Minh họa 细 nghĩa mảnh, thay vì nghĩa tỉ mỉ trong từ ghép 细心.
### Bài 16 · 活 · `boya2-16-18` (STT 536)

- Câu trước: 爷爷已经活了九十岁，身体依然硬朗。
- Câu sau: 爷爷已经活到九十岁了，身体依然硬朗。
- Pinyin sau: Yéye yǐjīng huó dào jiǔshí suì le, shēntǐ yīrán yìnglang.
- Dịch trước: Ông nội đã sống đến 90 tuổi, sức khỏe vẫn rất dẻo dai.
- Dịch sau: Ông nội đã sống đến chín mươi tuổi, sức khỏe vẫn rất dẻo dai.
- Pinyin trước: Yéye yǐjīng huó le jiǔshí suì, shēntǐ yīrán yìnglang.
- Lý do: Tuổi đạt tới đi với 活到……岁; không dùng 活了九十岁 như khoảng thời gian.
### Bài 17 · 坡 · `boya2-17-33` (STT 584)

- Câu trước: 自行车骑上下坡的时候要特别小心。
- Câu sau: 骑自行车上下坡的时候要特别小心。
- Pinyin sau: Qí zìxíngchē shàng xià pō de shíhou yào tèbié xiǎoxīn.
- Dịch trước: Khi đi xe đạp lên xuống dốc phải đặc biệt cẩn thận.
- Dịch sau: Khi đi xe đạp lên xuống dốc phải đặc biệt cẩn thận.
- Pinyin trước: Zìxíngchē qí shàng xià pō de shíhou yào tèbié xiǎoxīn.
- Lý do: Đổi trật tự thành 骑自行车, tránh đặt xe đạp ở vị trí người thực hiện hành động.
### Bài 19 · 抽空 · `boya2-19-32` (STT 647)

- Câu trước: 你什么时候有空抽空来我家玩？
- Câu sau: 你什么时候能抽空来我家玩？
- Pinyin sau: Nǐ shénme shíhou néng chōukòng lái wǒ jiā wán?
- Dịch trước: Khi nào bạn có thời gian rảnh thì ghé nhà tôi chơi nhé?
- Dịch sau: Khi nào bạn có thể tranh thủ thời gian đến nhà tôi chơi?
- Pinyin trước: Nǐ shénme shíhou yǒu kòng chōukòng lái wǒ jiā wán?
- Lý do: Bỏ sự lặp ý 有空抽空.
### Bài 20 · 拼 · `boya2-20-8` (STT 658)

- Câu trước: 大家一起拼搏，终于赢得了比赛。
- Câu sau: 我想把这两张桌子拼在一起。
- Pinyin sau: Wǒ xiǎng bǎ zhè liǎng zhāng zhuōzi pīn zài yìqǐ.
- Dịch trước: Mọi người cùng nhau nỗ lực hết mình, cuối cùng đã thắng trận đấu.
- Dịch sau: Tôi muốn ghép hai chiếc bàn này lại với nhau.
- Pinyin trước: Dàjiā yìqǐ pīnbó, zhōngyú yíngdé le bǐsài.
- Lý do: Minh họa 拼 nghĩa ghép, thay vì dốc sức trong từ 拼搏.
### Bài 21 · 以外 · `boya2-21-3` (STT 689)

- Câu trước: 这周以外
- Câu sau: 除了汉语以外，我还学英语。
- Pinyin sau: Chúle Hànyǔ yǐwài, wǒ hái xué Yīngyǔ.
- Dịch trước: Ngoài tuần này
- Dịch sau: Ngoài tiếng Trung, tôi còn học tiếng Anh.
- Pinyin trước: Zhè zhōu yǐ wài
- Lý do: Thay cụm rời 这周以外 bằng câu hoàn chỉnh với 除了……以外. Không coi mọi cụm ngắn là sai ngữ pháp.
### Bài 24 · 分 · `boya2-24-1` (STT 798)

- Câu trước: 现在三点十分
- Câu sau: 请把这些苹果分成两份。
- Pinyin sau: Qǐng bǎ zhèxiē píngguǒ fēn chéng liǎng fèn.
- Dịch trước: Bây giờ là 3 giờ 10 phút
- Dịch sau: Hãy chia số táo này thành hai phần.
- Pinyin trước: Xiànzài sān diǎn shí fēn
- Đầu mục `meaning`: sự khác biệt; phân biệt → chia; phân chia; phân biệt
- Lý do: Dùng 分 làm động từ chia, thay cho đơn vị phút.
### Bài 24 · 迷 · `boya2-24-4` (STT 801)

- Câu trước: 他是一个地道的足球迷。
- Câu sau: 他迷了路，不知道怎么回家。
- Pinyin sau: Tā mí le lù, bù zhīdào zěnme huí jiā.
- Dịch trước: Anh ấy là một người hâm mộ bóng đá đích thực.
- Dịch sau: Anh ấy bị lạc đường, không biết về nhà thế nào.
- Pinyin trước: tā shì yí gè dì dào de zú qiú mí.
- Lý do: Minh họa 迷 nghĩa mất phương hướng, thay vì danh từ người hâm mộ trong 足球迷.

## Diễn đạt tự nhiên hơn (9 mục)

### Bài 3 · 本子 · `boya2-3-23` (STT 76)

- Câu trước: 我买了一个本子。
- Câu sau: 我买了一本新本子。
- Pinyin sau: Wǒ mǎi le yì běn xīn běnzi.
- Dịch trước: Tôi mua một cuốn vở.
- Dịch sau: Tôi đã mua một cuốn vở mới.
- Pinyin trước: Wǒ mǎile yí gè běnzi.
- Lý do: Dùng lượng từ 本 để làm mẫu chuẩn; 个 vẫn có cách dùng khái quát trong khẩu ngữ.
### Bài 4 · 人口 · `boya2-4-7` (STT 91)

- Câu trước: 中国人口很多
- Câu sau: 中国人口众多。
- Pinyin sau: Zhōngguó rénkǒu zhòngduō.
- Dịch trước: Dân số Trung Quốc rất nhiều
- Dịch sau: Trung Quốc có dân số đông.
- Pinyin trước: Zhōng guó rén kǒu hěn duō
- Lý do: Dùng 人口众多 tự nhiên hơn trong câu văn mẫu; không coi 人口很多 là lỗi tuyệt đối.
### Bài 5 · 酒水 · `boya2-5-20` (STT 134)

- Câu trước: 婚宴上的酒水费用很贵
- Câu sau: 婚宴上的酒水费用很高。
- Pinyin sau: Hūnyàn shàng de jiǔshuǐ fèiyòng hěn gāo.
- Dịch trước: Chi phí đồ uống trong tiệc cưới rất đắt
- Dịch sau: Chi phí đồ uống trong tiệc cưới rất cao.
- Pinyin trước: Hūnyàn shàng de jiǔshuǐ fèiyòng hěn guì
- Lý do: Chi phí đi với 高 thay cho 贵 trong mẫu câu này.
### Bài 10 · 农村 · `boya2-10-4` (STT 286)

- Câu trước: 我来自一个农村。
- Câu sau: 我来自农村。
- Pinyin sau: Wǒ láizì nóngcūn.
- Dịch trước: Tôi đến từ một vùng nông thôn.
- Dịch sau: Tôi đến từ nông thôn.
- Pinyin trước: Wǒ láizì yī gè nóngcūn.
- Lý do: Bỏ lượng từ 一个 để nói nguồn gốc nông thôn tự nhiên hơn.
### Bài 10 · 中指 · `boya2-10-46` (STT 328)

- Câu trước: 他的中指戴着一枚戒指。
- Câu sau: 他的中指上戴着一枚戒指。
- Pinyin sau: Tā de zhōngzhǐ shàng dàizhe yì méi jièzhi.
- Dịch trước: Ngón giữa của anh ấy đeo một chiếc nhẫn.
- Dịch sau: Anh ấy đeo một chiếc nhẫn ở ngón giữa.
- Pinyin trước: Tā de zhōngzhǐ dài zhe yī méi jièzhǐ.
- Lý do: Thêm 上 để ngón tay làm địa điểm đeo nhẫn.
### Bài 11 · 最后 · `boya2-11-14` (STT 343)

- Câu trước: 我最后到了
- Câu sau: 我是最后一个到的。
- Pinyin sau: Wǒ shì zuìhòu yí gè dào de.
- Dịch trước: Tôi đến cuối cùng
- Dịch sau: Tôi là người đến cuối cùng.
- Pinyin trước: Wǒ zuìhòu dào le
- Lý do: Làm rõ nghĩa đến sau mọi người, tránh mơ hồ với cuối cùng cũng đến.
### Bài 16 · 真正 · `boya2-16-32` (STT 550)

- Câu trước: 他是我的真正朋友
- Câu sau: 他是我真正的朋友。
- Pinyin sau: Tā shì wǒ zhēnzhèng de péngyou.
- Dịch trước: Anh ấy là bạn thực sự của tôi
- Dịch sau: Anh ấy là người bạn thực sự của tôi.
- Pinyin trước: Tā shì wǒ de zhēn zhèng péng yǒu
- Lý do: Đặt 的 sau định ngữ 真正 để tạo cách diễn đạt tự nhiên hơn.
### Bài 17 · 共同 · `boya2-17-12` (STT 563)

- Câu trước: 这是我们要共同完成的目标。
- Câu sau: 这是我们要共同实现的目标。
- Pinyin sau: Zhè shì wǒmen yào gòngtóng shíxiàn de mùbiāo.
- Dịch trước: Đây là mục tiêu chúng ta cần cùng nhau hoàn thành.
- Dịch sau: Đây là mục tiêu chúng ta cần cùng nhau thực hiện.
- Pinyin trước: Zhè shì wǒmen yào gòngtóng wánchéng de mùbiāo.
- Lý do: Dùng 实现目标 thay cho 完成目标 trong câu mẫu.
### Bài 25 · 真正 · `boya2-25-1` (STT 836)

- Câu trước: 他是我的真正朋友
- Câu sau: 他是我真正的朋友。
- Pinyin sau: Tā shì wǒ zhēnzhèng de péngyou.
- Dịch trước: Anh ấy là bạn thực sự của tôi
- Dịch sau: Anh ấy là người bạn thực sự của tôi.
- Pinyin trước: Tā shì wǒ de zhēn zhèng péng yǒu
- Lý do: Đồng bộ câu lặp lại ở bài 25 với mục 真正 ở bài 16.

## Dịch tiếng Việt (27 mục)

### Bài 2 · 练习 · `boya2-2-13` (STT 37)

- Câu trước: 我每天练习汉语
- Câu sau: 我每天练习汉语
- Pinyin sau: Wǒ měi tiān liàn xí hàn yǔ
- Dịch trước: Tôi mỗi ngày luyện tập tiếng Trung
- Dịch sau: Tôi luyện tiếng Trung mỗi ngày.
- Lý do: Chỉnh trật tự từ trong bản dịch tiếng Việt.
### Bài 2 · 合适 · `boya2-2-16` (STT 40)

- Câu trước: 这件衣服很合适
- Câu sau: 这件衣服很合适
- Pinyin sau: Zhè jiàn yī fú hěn hé shì
- Dịch trước: Cái quần áo này rất vừa
- Dịch sau: Chiếc áo này rất vừa vặn.
- Lý do: Sửa cụm Cái quần áo không tự nhiên.
### Bài 2 · 套 · `boya2-2-26` (STT 50)

- Câu trước: 一套家具
- Câu sau: 一套家具
- Pinyin sau: Yī tào jiā jù
- Dịch trước: Một bộ đồ gia dụng
- Dịch sau: Một bộ đồ nội thất.
- Lý do: 家具 là đồ nội thất, không phải đồ gia dụng nói chung.
### Bài 4 · 上班 · `boya2-4-11` (STT 95)

- Câu trước: 我每天八点上班
- Câu sau: 我每天八点上班
- Pinyin sau: Wǒ měitiān bā diǎn shàngbān
- Dịch trước: Tôi mỗi ngày tám giờ đi làm
- Dịch sau: Mỗi ngày tôi bắt đầu làm việc lúc tám giờ.
- Lý do: Chỉnh trật tự trạng ngữ thời gian trong tiếng Việt.
### Bài 4 · 下班 · `boya2-4-15` (STT 99)

- Câu trước: 我六点下班
- Câu sau: 我六点下班
- Pinyin sau: Wǒ liù diǎn xiàbān
- Dịch trước: Tôi sáu giờ tan làm
- Dịch sau: Tôi tan làm lúc sáu giờ.
- Lý do: Chỉnh trật tự trạng ngữ thời gian trong tiếng Việt.
### Bài 5 · 早 · `boya2-5-2` (STT 116)

- Câu trước: 我每天早上六点起床
- Câu sau: 我每天早上六点起床
- Pinyin sau: Wǒ měitiān zǎoshang liù diǎn qǐchuáng
- Dịch trước: Tôi mỗi ngày sáng sáu giờ thức dậy
- Dịch sau: Mỗi sáng tôi thức dậy lúc sáu giờ.
- Lý do: Chỉnh bản dịch bám trật tự tiếng Trung.
### Bài 5 · 告诉 · `boya2-5-16` (STT 130)

- Câu trước: 我告诉你一个秘密
- Câu sau: 我告诉你一个秘密
- Pinyin sau: Wǒ gàosu nǐ yī gè mìmì
- Dịch trước: Tôi báo cho bạn một bí mật
- Dịch sau: Tôi nói cho bạn biết một bí mật.
- Lý do: 告诉 trong câu này là nói cho biết, không dùng báo một bí mật.
### Bài 5 · 公道 · `boya2-5-28` (STT 142)

- Câu trước: 这家商店收费公道，顾客很多。
- Câu sau: 这家商店收费公道，顾客很多。
- Pinyin sau: zhè jiā shāng diàn shōu fèi gōng dao, gù kè hěn duō.
- Dịch trước: Cửa hàng này thu phí công bằng, khách hàng rất đông.
- Dịch sau: Cửa hàng này tính giá hợp lý, có rất đông khách.
- Lý do: 收费公道 là tính giá hợp lý, không phải thu phí công bằng.
### Bài 6 · 栏 · `boya2-6-6` (STT 150)

- Câu trước: 请看广告栏里的最新招聘信息。
- Câu sau: 请看广告栏里的最新招聘信息。
- Pinyin sau: Qǐng kàn guǎnggàolán lǐ de zuìxīn zhāopìn xìnxī.
- Dịch trước: Xin hãy xem thông tin tuyển dụng mới nhất trong cột quảng cáo.
- Dịch sau: Xin hãy xem thông tin tuyển dụng mới nhất trên bảng quảng cáo.
- Lý do: 广告栏 ở đây là bảng quảng cáo/thông báo, không phải cột văn bản.
### Bài 7 · 粗 · `boya2-7-31` (STT 206)

- Câu trước: 这棵大树的树干非常粗。
- Câu sau: 这棵大树的树干非常粗。
- Pinyin sau: Zhè kē dàshù de shùgàn fēicháng cū.
- Dịch trước: Thân cây to này rất to và thô.
- Dịch sau: Thân cây đại thụ này rất to.
- Lý do: 粗 trong câu nói về độ to của thân cây, không hàm ý thô ráp.
### Bài 9 · 腿 · `boya2-9-2` (STT 249)

- Câu trước: 我的腿很酸
- Câu sau: 我的腿很酸
- Pinyin sau: Wǒ de tuǐ hěn suān
- Dịch trước: Chân tôi rất đau
- Dịch sau: Chân tôi rất nhức mỏi.
- Lý do: 酸 diễn tả nhức mỏi, cần phân biệt với đau 疼.
### Bài 10 · 游戏 · `boya2-10-7` (STT 289)

- Câu trước: 孩子们在院子里做游戏。
- Câu sau: 孩子们在院子里做游戏。
- Pinyin sau: Háizimen zài yuànzi lǐ zuò yóuxì.
- Dịch trước: Đứa trẻ đang chơi trò chơi trong sân.
- Dịch sau: Bọn trẻ đang chơi trò chơi trong sân.
- Lý do: 孩子们 là số nhiều, không dịch là một đứa trẻ.
### Bài 12 · 贵姓 · `boya2-12-31` (STT 403)

- Câu trước: 请问您贵姓？
- Câu sau: 请问您贵姓？
- Pinyin sau: Qǐngwèn nín guìxìng?
- Dịch trước: Xin hỏi quý danh của ngài là gì?
- Dịch sau: Xin hỏi ông/bà họ gì?
- Lý do: 贵姓 hỏi họ, không hỏi toàn bộ quý danh.
### Bài 15 · 牌子 · `boya2-15-7` (STT 486)

- Câu trước: 这家店的牌子很大。
- Câu sau: 这家店的牌子很大。
- Pinyin sau: Zhè jiā diàn de pái zi hěn dà.
- Dịch trước: Cửa hàng này có thương hiệu lớn.
- Dịch sau: Tấm biển của cửa hàng này rất lớn.
- Lý do: 牌子 trong câu đang tả tấm biển, không phải thương hiệu lớn.
### Bài 15 · 实惠 · `boya2-15-10` (STT 489)

- Câu trước: 这种水果既实惠又好吃
- Câu sau: 这种水果既实惠又好吃
- Pinyin sau: zhè zhǒng shuǐ guǒ jì shí huì yòu hǎo chī
- Dịch trước: Loại trái cây này vừa hữu ích vừa ngon
- Dịch sau: Loại trái cây này vừa có giá phải chăng vừa ngon.
- Đầu mục `meaning`: hữu ích → giá hợp lý; đáng tiền; thiết thực
- Lý do: 实惠 trong ngữ cảnh mua hàng là đáng tiền/hợp túi tiền, không phải hữu ích.
### Bài 15 · 牛排 · `boya2-15-36` (STT 515)

- Câu trước: 我喜欢吃三分熟的牛排。
- Câu sau: 我喜欢吃三分熟的牛排。
- Pinyin sau: Wǒ xǐhuān chī sānfēnshú de niúpái.
- Dịch trước: Tôi thích ăn bít tết tái vừa.
- Dịch sau: Tôi thích ăn bít tết tái.
- Lý do: 三分熟 là mức tái; tránh gán sang tái vừa.
### Bài 16 · 算了 · `boya2-16-21` (STT 539)

- Câu trước: 既然你不想去，那就算了吧。
- Câu sau: 既然你不想去，那就算了吧。
- Pinyin sau: jì rán nǐ bù xiǎng qù, nà jiù suàn le ba.
- Dịch trước: Đã là cậu không muốn đi, vậy thì bỏ qua đi.
- Dịch sau: Nếu bạn đã không muốn đi thì thôi vậy.
- Lý do: Sửa bản dịch Đã là cậu không tự nhiên.
### Bài 17 · 照相 · `boya2-17-25` (STT 576)

- Câu trước: 我们去照相吧
- Câu sau: 我们去照相吧
- Pinyin sau: Wǒ men qù zhào xiāng ba
- Dịch trước: Chúng tôi đi chụp ảnh nhé
- Dịch sau: Chúng ta đi chụp ảnh nhé.
- Lý do: 我们……吧 là lời rủ có người nghe, dùng chúng ta.
### Bài 17 · 分别 · `boya2-17-34` (STT 585)

- Câu trước: 我们要分别对待这些问题。
- Câu sau: 我们要分别对待这些问题。
- Pinyin sau: Wǒ men yào fēn bié duì dài zhè xiē wèn tí.
- Dịch trước: Chúng ta cần phân biệt xử dụng các vấn đề này.
- Dịch sau: Chúng ta cần xử lý riêng từng vấn đề này.
- Đầu mục `meaning`: sự khác biệt → riêng biệt; lần lượt; phân biệt
- Đầu mục `partOfSpeech`: Động từ / Danh từ → Phó từ / Động từ
- Lý do: 分别对待 là xử lý từng vấn đề riêng biệt; bản dịch cũ vừa sai nghĩa vừa sai chính tả xử dụng.
### Bài 18 · 新闻 · `boya2-18-14` (STT 603)

- Câu trước: 我每天都看新闻
- Câu sau: 我每天都看新闻
- Pinyin sau: Wǒ měi tiān dōu kàn xīn wén
- Dịch trước: Tôi mỗi ngày đều xem tin tức
- Dịch sau: Tôi xem tin tức mỗi ngày.
- Lý do: Chỉnh trật tự từ trong tiếng Việt.
### Bài 19 · 牙齿 · `boya2-19-15` (STT 630)

- Câu trước: 他每天都认真刷牙齿
- Câu sau: 他每天都认真刷牙齿
- Pinyin sau: Tā měitiān dōu rènzhēn shuā yáchǐ
- Dịch trước: Anh ấy mỗi ngày đều đánh răng cẩn thận
- Dịch sau: Ngày nào anh ấy cũng đánh răng cẩn thận.
- Lý do: Chỉnh trật tự từ trong tiếng Việt.
### Bài 22 · 及格 · `boya2-22-13` (STT 734)

- Câu trước: 考试及格了。
- Câu sau: 考试及格了。
- Pinyin sau: Kǎoshì jígé le.
- Dịch trước: Kỳ thi đã qua môn.
- Dịch sau: Tôi đã thi đạt yêu cầu rồi.
- Lý do: Câu tiếng Trung lược chủ ngữ người dự thi; không dịch Kỳ thi đã qua môn.
### Bài 24 · 分别 · `boya2-24-3` (STT 800)

- Câu trước: 我们要分别对待这些问题。
- Câu sau: 我们要分别对待这些问题。
- Pinyin sau: Wǒ men yào fēn bié duì dài zhè xiē wèn tí.
- Dịch trước: Chúng ta cần phân biệt xử dụng các vấn đề này.
- Dịch sau: Chúng ta cần xử lý riêng từng vấn đề này.
- Đầu mục `meaning`: sự khác biệt → riêng biệt; lần lượt; phân biệt
- Đầu mục `partOfSpeech`: Động từ / Danh từ → Phó từ / Động từ
- Lý do: 分别对待 là xử lý từng vấn đề riêng biệt; bản dịch cũ vừa sai nghĩa vừa sai chính tả xử dụng.
### Bài 25 · 点心 · `boya2-25-5` (STT 840)

- Câu trước: 下午茶时间，我们吃了一些精致的点心。
- Câu sau: 下午茶时间，我们吃了一些精致的点心。
- Pinyin sau: xià wǔ chá shí jiān, wǒ men chī le yì xiē jīng zhì de diǎn xīn.
- Dịch trước: Vào giờ trà chiều, chúng tôi đã ăn một số món tráng miệng tinh tế.
- Dịch sau: Vào giờ trà chiều, chúng tôi đã ăn một ít bánh điểm tâm được làm tinh tế.
- Lý do: 点心 ở giờ trà là bánh/món ăn nhẹ, không nhất thiết là món tráng miệng.
### Bài 25 · 生意 · `boya2-25-8` (STT 843)

- Câu trước: 他的生意做得很好。
- Câu sau: 他的生意做得很好。
- Pinyin sau: Tā de shēngyi zuò de hěn hǎo.
- Dịch trước: Việc kinh doanh của anh ấy làm rất tốt.
- Dịch sau: Công việc kinh doanh của anh ấy rất thuận lợi.
- Lý do: Sửa bản dịch Việc kinh doanh của anh ấy làm rất tốt không tự nhiên.
### Bài 25 · 话 · `boya2-25-24` (STT 859)

- Câu trước: 我想和你说句话
- Câu sau: 我想和你说句话
- Pinyin sau: Wǒ xiǎng hé nǐ shuō jù huà
- Dịch trước: Tôi muốn nói với bạn vài câu
- Dịch sau: Tôi muốn nói với bạn một câu.
- Lý do: 说句话 tương ứng một lời/một câu, không tự đổi thành vài câu.
### Bài 25 · 陪 · `boya2-25-27` (STT 862)

- Câu trước: 我陪你去
- Câu sau: 我陪你去
- Pinyin sau: Wǒ péi nǐ qù
- Dịch trước: Tôi đi cùng bạn/anh đi nhé
- Dịch sau: Tôi đi cùng bạn.
- Lý do: Bỏ phần /anh đi nhé không có trong câu nguồn.

## Phiên âm (1 mục)

### Bài 3 · 背 · `boya2-3-14` (STT 67)

- Câu trước: 他背着书包
- Câu sau: 他背着书包。
- Pinyin sau: Tā bēizhe shūbāo.
- Dịch trước: Anh ấy mang ba lô trên lưng
- Dịch sau: Anh ấy mang cặp sách trên lưng.
- Pinyin trước: Tā bèi zhe shū bāo
- Lý do: 背 động từ mang trên lưng đọc bēi, không phải bèi.

## Nghĩa / từ loại / âm đầu mục (10 mục)

### Bài 3 · 着 · `boya2-3-11` (STT 64)

- Câu trước: 他看着书
- Câu sau: 他看着书
- Pinyin sau: Tā kànzhe shū
- Dịch trước: Anh ấy đang đọc sách
- Dịch sau: Anh ấy đang đọc sách
- Đầu mục `meaning`: động từ tiếp diễn → trợ từ chỉ sự tiếp diễn của động tác hoặc trạng thái
- Đầu mục `partOfSpeech`: Trợ từ / Động từ → Trợ từ
- Lý do: 着 là trợ từ biểu thị sự duy trì của động tác hoặc trạng thái, không phải động từ tiếp diễn.
### Bài 7 · 身上 · `boya2-7-20` (STT 195)

- Câu trước: 他身上没有钱。
- Câu sau: 他身上没有钱。
- Pinyin sau: Tā shēnshang méiyǒu qián.
- Dịch trước: Anh ấy không mang tiền trên người.
- Dịch sau: Anh ấy không mang tiền trên người.
- Đầu mục `meaning`: trên tay → trên người
- Lý do: 身上 nghĩa trên người, không phải trên tay.
### Bài 7 · 副 · `boya2-7-24` (STT 199)

- Câu trước: 我买了一副新的手套。
- Câu sau: 我买了一副新的手套。
- Pinyin sau: Wǒ mǎi le yí fù xīn de shǒutào.
- Dịch trước: Tôi đã mua một đôi găng tay mới.
- Dịch sau: Tôi đã mua một đôi găng tay mới.
- Đầu mục `meaning`: phó → lượng từ chỉ đôi, cặp hoặc bộ
- Đầu mục `partOfSpeech`: Tính từ / Lượng từ / Danh từ → Lượng từ
- Lý do: 副 trong 一副手套 là lượng từ chỉ đôi/bộ, không phải phó.
### Bài 9 · 着 · `boya2-9-1` (STT 248)

- Câu trước: 他看着书
- Câu sau: 他看着书
- Pinyin sau: Tā kànzhe shū
- Dịch trước: Anh ấy đang đọc sách
- Dịch sau: Anh ấy đang đọc sách
- Đầu mục `meaning`: động từ tiếp diễn → trợ từ chỉ sự tiếp diễn của động tác hoặc trạng thái
- Đầu mục `partOfSpeech`: Trợ từ / Động từ → Trợ từ
- Lý do: 着 là trợ từ biểu thị sự duy trì của động tác hoặc trạng thái, không phải động từ tiếp diễn.
### Bài 14 · 辞 · `boya2-14-20` (STT 458)

- Câu trước: 他上个月辞职了，打算自己创业。
- Câu sau: 他上个月辞职了，打算自己创业。
- Pinyin sau: Tā shàng ge yuè cízhí le, dǎsuàn zìjǐ chuàngyè.
- Dịch trước: Tháng trước anh ấy đã từ chức, dự định tự mình khởi nghiệp.
- Dịch sau: Tháng trước anh ấy đã từ chức, dự định tự mình khởi nghiệp.
- Đầu mục `meaning`: sa thải → từ chức; từ bỏ chức vụ
- Đầu mục `partOfSpeech`: Động từ / Danh từ → Động từ
- Lý do: 辞 trong 辞职 là từ chức, không phải bị sa thải.
### Bài 14 · 产生 · `boya2-14-26` (STT 464)

- Câu trước: 这项决定产生了很大影响。
- Câu sau: 这项决定产生了很大影响。
- Pinyin sau: Zhè xiàng jué dìng chǎn shēng le hěn dà yǐng xiǎng.
- Dịch trước: Quyết định này đã tạo ra ảnh hưởng lớn.
- Dịch sau: Quyết định này đã tạo ra ảnh hưởng lớn.
- Đầu mục `meaning`: sản xuất → sinh ra; tạo ra; phát sinh
- Lý do: 产生 là sinh ra/tạo ra/phát sinh, không phải sản xuất hàng hóa.
### Bài 16 · 装 · `boya2-16-30` (STT 548)

- Câu trước: 请把行李装进箱子里。
- Câu sau: 请把行李装进箱子里。
- Pinyin sau: Qǐng bǎ xíng lǐ zhuāng jìn xiāng zi lǐ.
- Dịch trước: Hãy xếp hành lý vào va-li.
- Dịch sau: Hãy xếp hành lý vào va-li.
- Đầu mục `meaning`: trang điểm → xếp vào; chất vào; đựng
- Đầu mục `partOfSpeech`: Động từ / Danh từ → Động từ
- Lý do: 装 trong 装进行李/装进箱子 là xếp, chứa; không phải trang điểm.
### Bài 20 · 端 · `boya2-20-21` (STT 671)

- Câu trước: 服务员给我们端上来了一盘热菜。
- Câu sau: 服务员给我们端上来了一盘热菜。
- Pinyin sau: Fúwùyuán gěi wǒmen duān shang lái le yì pán rè cài.
- Dịch trước: Người phục vụ bưng lên cho chúng tôi một đĩa đồ ăn nóng.
- Dịch sau: Người phục vụ bưng lên cho chúng tôi một đĩa đồ ăn nóng.
- Đầu mục `meaning`: đầu cuối → bưng; bê; mang bằng hai tay
- Đầu mục `partOfSpeech`: Danh từ / Động từ / Tính từ → Động từ
- Lý do: 端 trong câu là bưng/mang món ăn, không phải đầu cuối.
### Bài 23 · 挨打 · `boya2-23-32` (STT 788)

- Câu trước: 他挨打了
- Câu sau: 他挨打了
- Pinyin sau: Tā áidǎle
- Dịch trước: Anh ta bị đánh
- Dịch sau: Anh ta bị đánh
- Đầu mục `pinyin`: āidǎ → áidǎ
- Lý do: 挨 trong 挨打 đọc ái, khác 挨 / āi nghĩa ở sát bên.
### Bài 23 · 狠心 · `boya2-23-36` (STT 792)

- Câu trước: 他怎么能狠心抛弃自己生病的小狗？
- Câu sau: 他怎么能狠心抛弃自己生病的小狗？
- Pinyin sau: tā zěn me néng hěn xīn pāo qì zì jǐ shēng bìng de xiǎo gǒu?
- Dịch trước: Sao anh ta có thể nhẫn tâm bỏ rơi chú chó con bị bệnh của mình chứ?
- Dịch sau: Sao anh ta có thể nhẫn tâm bỏ rơi chú chó con bị bệnh của mình chứ?
- Đầu mục `meaning`: quyết tâm → nhẫn tâm; tàn nhẫn
- Lý do: 狠心 là nhẫn tâm, không phải quyết tâm; bản dịch ví dụ đã dùng đúng.

## Độ bao phủ theo bài

| Bài | Mục đã rà | Mục đã sửa (STT) |
| --- | ---: | --- |
| 1 | 24 | 2, 3, 13, 15 |
| 2 | 29 | 25, 37, 40, 50 |
| 3 | 31 | 54, 55, 57, 64, 67, 68, 76 |
| 4 | 30 | 91, 95, 99 |
| 5 | 30 | 116, 130, 134, 142 |
| 6 | 31 | 150, 173 |
| 7 | 37 | 176, 195, 199, 206 |
| 8 | 35 | Không thấy vấn đề rõ trong lượt rà |
| 9 | 35 | 248, 249, 250 |
| 10 | 47 | 286, 289, 328 |
| 11 | 43 | 343 |
| 12 | 33 | 401, 403 |
| 13 | 33 | Không thấy vấn đề rõ trong lượt rà |
| 14 | 41 | 443, 458, 464 |
| 15 | 39 | 480, 486, 489, 515 |
| 16 | 33 | 519, 526, 529, 536, 539, 548, 550 |
| 17 | 38 | 563, 576, 584, 585 |
| 18 | 26 | 603 |
| 19 | 35 | 630, 647 |
| 20 | 36 | 658, 671 |
| 21 | 35 | 689 |
| 22 | 35 | 734 |
| 23 | 41 | 788, 792 |
| 24 | 38 | 798, 800, 801 |
| 25 | 29 | 836, 840, 843, 859, 862 |

## Xác minh

- `node --test scripts/boya-examples.test.mjs`: 6/6 đạt; bao gồm giữ các trường hợp đã sửa của Boya 1 và kiểm tra đồng bộ 864 mục Boya 2, cùng các trường hợp 长/背/得/挨打/分 và câu 活/坡.
- Đã đối chiếu với dữ liệu trước sửa: chỉ đúng 72 mục đã duyệt thay đổi, các trường thay đổi khớp với bản biên tập; ID, thứ tự và phân bài giữ nguyên.
- Dữ liệu CSV, TypeScript và phần registry của Boya 1 không thay đổi.
- Chạy lại script sửa dữ liệu: không phát sinh thay đổi (idempotent).
- Build và kiểm tra diff được hoàn tất trước commit. Các bài kiểm tra kỹ thuật không thay thế việc rà ngữ pháp thủ công.
