# Rà soát ví dụ Boya sơ cấp 1 — 19/10/2026

## Phạm vi và kết quả

- Đã đọc toàn bộ 678 mục ví dụ thuộc 30 bài trong `src/data/boya1Data.ts`; có 653 chuỗi ví dụ tiếng Trung khác nhau.
- Ghi nhận 27 nhận xét tại 26 mục: 4 vấn đề câu/kết hợp từ; 5 ví dụ lệch nghĩa hoặc chức năng của đầu mục; 6 gợi ý diễn đạt; 10 điểm dịch; 2 điểm phiên âm. Mục 舒服 được nhắc ở cả diễn đạt và phiên âm.
- Đây là rà soát dữ liệu đang dùng trên website, không phải đối chiếu với bản in nguyên tác. Các ví dụ thu thập/bổ sung trong dữ liệu không mặc nhiên là câu nguyên văn của sách Boya.
- Đã áp dụng toàn bộ 26 mục vào CSV và dữ liệu TypeScript, lưu các sửa đổi cùng phiên âm đã duyệt trong script sửa dữ liệu. Các câu và số liệu ở phần rà soát bên dưới mô tả dữ liệu trước khi chỉnh sửa.
- Những mục không bị đánh dấu: chưa thấy vấn đề rõ về ngữ pháp trong lượt rà này; không đồng nghĩa đã chứng nhận toàn bộ phát âm, dịch nghĩa và mức độ khớp với nguyên tác.

## Nguyên tắc đánh giá

- Câu khẩu ngữ có thể tỉnh lược chủ ngữ, tân ngữ hoặc một số thành phần khi đã có ngữ cảnh. Không coi mọi trường hợp tỉnh lược là lỗi.
- Cụm từ như 一本书, 九点钟 hoặc 楼房 có thể đúng như ví dụ kết hợp từ nhưng chưa phải câu đầy đủ. Đây là vấn đề lựa chọn định dạng học liệu, không tự động là lỗi ngữ pháp.
- Không thêm 了 máy móc vào mọi câu có 昨天. 了 biểu thị trạng thái/thể của hành động, không phải dấu quá khứ bắt buộc. [Tài liệu giảng dạy của EDB Hồng Kông](https://www.edb.gov.hk/attachment/tc/student-parents/ncs-students/support-to-teacher/ncs%20teaching%20kit_2_edb.pdf).
- Các sửa đổi ngữ pháp bên dưới là nhận định biên tập dựa trên câu cụ thể; nguồn từ điển được dùng để đối chiếu nghĩa, âm và chức năng từ.

## A. Câu và kết hợp từ cần sửa

### Bài 7 · 里 · `boya1-7-12` (STT 125)

- Hiện tại: **房间里有人在**
- Pinyin hiện tại: Fángjiān lǐ yǒu rén zài
- Dịch hiện tại: Trong phòng có người
- Đề xuất: **房间里有人。**
- Dịch đề xuất: Trong phòng có người.
- Nhận xét: Trong câu độc lập này, 在 cuối câu không có phần tiếp theo và không khớp bản dịch. Nếu muốn giữ 在 để diễn tả hành động, phải bổ sung, chẳng hạn 房间里有人在看书。
### Bài 14 · 灰 · `boya1-14-24` (STT 294)

- Hiện tại: **墙壁被刷成了浅灰色的。**
- Pinyin hiện tại: qiáng bì bèi shuā chéng le qiǎn huī sè de.
- Dịch hiện tại: Bức tường đã được sơn thành màu xám nhạt.
- Đề xuất: **墙壁被刷成了浅灰色。**
- Dịch đề xuất: Bức tường đã được sơn màu xám nhạt.
- Nhận xét: Bỏ 的 cuối câu để biểu đạt trực tiếp kết quả 刷成 + màu sắc. Không áp dụng quy tắc thêm 的 của kết cấu 是……的 vào câu này.
### Bài 18 · 的话 · `boya1-18-18` (STT 384)

- Hiện tại: **如果不去的话**
- Pinyin hiện tại: Rú guǒ bù qù de huà
- Dịch hiện tại: Nếu không đi
- Đề xuất: **如果你不去的话，我也不去。**
- Dịch đề xuất: Nếu bạn không đi thì tôi cũng không đi.
- Nhận xét: 如果不去的话 chỉ là một vế điều kiện. Có thể dùng như mảnh câu trong hội thoại, nhưng mục đang ghi là câu ví dụ độc lập nên cần thêm mệnh đề chính.
### Bài 27 · 复习 · `boya1-27-7` (STT 592)

- Hiện tại: **我正在复习考试**
- Pinyin hiện tại: Wǒ zhèng zài fù xí kǎo shì
- Dịch hiện tại: Tôi đang ôn thi
- Đề xuất: **我正在为考试复习。**
- Dịch đề xuất: Tôi đang ôn thi.
- Nhận xét: 复习 đi với kiến thức, bài học, nội dung cần ôn. Để diễn đạt ôn thi, dùng 为考试复习; không ghép trực tiếp 复习考试 theo bản dịch tiếng Việt. [Đối chiếu nghĩa 复习/複習](https://dict.revised.moe.edu.tw/dictView.jsp?ID=39084&la=1&powerMode=0).

## B. Câu đúng ngữ pháp nhưng chưa minh họa đúng từ đang học

### Bài 14 · 白 · `boya1-14-2` (STT 272)

- Hiện tại: **白天**
- Pinyin hiện tại: Bái tiān
- Dịch hiện tại: Ban ngày
- Đề xuất: **这件毛衣是白色的。**
- Dịch đề xuất: Chiếc áo len này màu trắng.
- Nhận xét: Từ 白 đang được giải nghĩa là trắng, nhưng 白天 có nghĩa ban ngày. Nên dùng 白色 để minh họa nghĩa màu sắc.
### Bài 18 · 得 · `boya1-18-15` (STT 381)

- Hiện tại: **我得到了好消息**
- Pinyin hiện tại: Wǒ dé dào le hǎo xiāo xī
- Dịch hiện tại: Tôi đã nhận được tin tốt
- Đề xuất: **我得去上课了。**
- Dịch đề xuất: Tôi phải đi học rồi.
- Nhận xét: Từ đầu mục là 得 / děi / phải, cần, trong khi 得到 ở câu cũ đọc dé và có nghĩa nhận được. Câu cũ không sai ngữ pháp nhưng không đúng chức năng của mục này. Pinyin gợi ý: Wǒ děi qù shàngkè le.
### Bài 23 · 学 · `boya1-23-19` (STT 507)

- Hiện tại: **学生**
- Pinyin hiện tại: Xué shēng
- Dịch hiện tại: Học sinh
- Đề xuất: **我每天学汉语。**
- Dịch đề xuất: Tôi học tiếng Trung mỗi ngày.
- Nhận xét: 学生 là danh từ học sinh, không thể hiện trực tiếp cách dùng 学 làm động từ học. Nên thay từ ghép đơn lẻ bằng câu có động từ 学.
### Bài 25 · 棒 · `boya1-25-18` (STT 554)

- Hiện tại: **那个小男孩手里拿着一根棍棒。**
- Pinyin hiện tại: nà ge xiǎo nán hái shǒu lǐ ná zhe yī gēn gùn bàng.
- Dịch hiện tại: Cậu bé kia đang cầm một cây gậy trong tay.
- Đề xuất: **你的汉语说得很棒。**
- Dịch đề xuất: Bạn nói tiếng Trung rất giỏi.
- Nhận xét: Đầu mục đang dạy 棒 = tuyệt vời, nhưng 棍棒 trong câu cũ nghĩa là gậy. Cần ví dụ dùng tính từ 棒. [Từ điển MOE phân biệt hai nghĩa này](https://dict.mini.moe.edu.tw/SearchIndex/word_detail?breadcrumbs=Search_%E6%A3%92_one&dictSearchField=%E6%A3%92&wordID=D0000337).
### Bài 28 · 得 · `boya1-28-6` (STT 616)

- Hiện tại: **我得到了好消息**
- Pinyin hiện tại: Wǒ dé dào le hǎo xiāo xī
- Dịch hiện tại: Tôi đã nhận được tin tốt
- Đề xuất: **你考得怎么样？**
- Dịch đề xuất: Bạn thi thế nào?
- Nhận xét: Đầu mục ghi 得 / de và bài 28 mang tên 考得怎么样. Câu cũ dùng 得到 / dédào nên lệch âm đọc và chức năng. Dùng trợ từ nối động từ với bổ ngữ; nên đồng thời sửa nghĩa đầu mục thành trợ từ dẫn bổ ngữ. Pinyin: Nǐ kǎo de zěnmeyàng?

## C. Gợi ý biên tập để tự nhiên hoặc rõ nghĩa hơn

### Bài 3 · 日语 · `boya1-3-8` (STT 43)

- Hiện tại: **她大学专业是日语翻译。**
- Pinyin hiện tại: Tā dàxué zhuānyè shì Rìyǔ fānyì.
- Dịch hiện tại: Chuyên ngành đại học của cô ấy là dịch thuật tiếng Nhật.
- Đề xuất: **她在大学学的是日语翻译。**
- Dịch đề xuất: Ở đại học, cô ấy học chuyên ngành biên dịch tiếng Nhật.
- Nhận xét: 她大学专业 là cách tỉnh lược có thể hiểu trong khẩu ngữ. Bản đề xuất làm quan hệ giữa người học, trường đại học và chuyên ngành rõ hơn; không xếp câu cũ vào lỗi ngữ pháp chắc chắn.
### Bài 8 · 室 · `boya1-8-21` (STT 159)

- Hiện tại: **我的宿舍在302室。**
- Pinyin hiện tại: Wǒ de sùshè zài 302 shì.
- Dịch hiện tại: Phòng ký túc xá của tôi ở phòng 302.
- Đề xuất: **我住在三〇二室。**
- Dịch đề xuất: Tôi ở phòng 302.
- Nhận xét: Câu cũ diễn đạt phòng ký túc xá nằm ở phòng 302, hơi vòng và lặp. Đổi chủ ngữ thành người ở cho rõ. Cũng có thể dùng 我的宿舍是三〇二室。
### Bài 11 · 舒服 · `boya1-11-12` (STT 213)

- Hiện tại: **这个椅子很舒服**
- Pinyin hiện tại: Zhè gè yǐ zi hěn shū fú
- Dịch hiện tại: Cái ghế này rất thoải mái
- Đề xuất: **这把椅子坐着很舒服。**
- Dịch đề xuất: Ngồi trên chiếc ghế này rất thoải mái.
- Nhận xét: Dùng lượng từ 把 với 椅子 và làm rõ cảm giác khi ngồi. 个 vẫn xuất hiện như lượng từ khái quát trong khẩu ngữ; đây là đề xuất chuẩn hóa cho người mới học, không phải kết luận rằng mọi cách dùng 个 đều sai.
### Bài 19 · 大概 · `boya1-19-18` (STT 411)

- Hiện tại: **现在是大概下午三点左右。**
- Pinyin hiện tại: Xiànzài shì dàgài xiàwǔ sān diǎn zuǒyòu.
- Dịch hiện tại: Bây giờ là khoảng ba giờ chiều.
- Đề xuất: **现在大概是下午三点。**
- Dịch đề xuất: Bây giờ khoảng ba giờ chiều.
- Nhận xét: Đưa 大概 trước 是; bỏ 左右 để tránh hai dấu hiệu ước lượng trùng nhau trong một ví dụ ngắn. Câu cũ vẫn có thể hiểu được.
### Bài 23 · 初中 · `boya1-23-20` (STT 508)

- Hiện tại: **我在初中学习三年。**
- Pinyin hiện tại: Wǒ zài chū zhōng xué xí sān nián.
- Dịch hiện tại: Tôi học ở cấp 2 ba năm.
- Đề xuất: **我在初中学习了三年。**
- Dịch đề xuất: Tôi đã học ở cấp hai ba năm.
- Nhận xét: Nếu ý định là kể một giai đoạn đã học xong, thêm 了 và làm rõ nghĩa quá khứ trong bản dịch. Nếu nói kế hoạch tương lai thì có thể dùng 我打算在初中学习三年。 Không kết luận thiếu 了 luôn là sai.
### Bài 26 · 邮票 · `boya1-26-27` (STT 583)

- Hiện tại: **请贴一张邮票在信封上。**
- Pinyin hiện tại: Qǐng tiē yī zhāng yóu piào zài xìn fēng shàng.
- Dịch hiện tại: Hãy dán một con tem lên phong bì.
- Đề xuất: **请在信封上贴一张邮票。**
- Dịch đề xuất: Hãy dán một con tem lên phong bì.
- Nhận xét: Đưa cụm địa điểm trước động từ để tạo mẫu câu rõ, dễ học. Có thể dùng 请把这张邮票贴在信封上。 Câu cũ có cách nói tương tự trong khẩu ngữ; đây là gợi ý biên tập.

## D. Bản dịch tiếng Việt cần sửa hoặc làm rõ

### Bài 1 · 您 · `boya1-1-12` (STT 12)

- Hiện tại: **您好**
- Pinyin hiện tại: Nín hǎo
- Dịch hiện tại: Ngài/Ông/Bà khỏe (xưng hô lịch sự)
- Đề xuất: **您好**
- Dịch đề xuất: Xin chào ông/bà/anh/chị.
- Nhận xét: 您好 là lời chào lịch sự; bản dịch Ngài/Ông/Bà khỏe không tự nhiên và dễ bị hiểu thành hỏi thăm sức khỏe.
### Bài 5 · 研究生 · `boya1-5-6` (STT 74)

- Hiện tại: **我妹妹是研究生。**
- Pinyin hiện tại: Wǒ mèimei shì yánjiūshēng.
- Dịch hiện tại: Em gái tôi là nghiên cứu sinh.
- Đề xuất: **我妹妹是研究生。**
- Dịch đề xuất: Em gái tôi là học viên sau đại học.
- Nhận xét: 研究生 có thể chỉ người học thạc sĩ hoặc tiến sĩ; dịch nghiên cứu sinh có thể làm người đọc Việt hiểu hẹp thành người làm tiến sĩ. Nếu biết rõ bậc thạc sĩ, dùng học viên cao học.
### Bài 8 · 就 · `boya1-8-14` (STT 152)

- Hiện tại: **我就去**
- Pinyin hiện tại: Wǒ jiù qù
- Dịch hiện tại: Tôi đi ngay/đâu phải đi
- Đề xuất: **我就去**
- Dịch đề xuất: Tôi đi ngay.
- Nhận xét: Bỏ phần /đâu phải đi; câu không có phủ định hay ý phản bác tương ứng.
### Bài 16 · 跳舞 · `boya1-16-19` (STT 335)

- Hiện tại: **我喜欢跳舞,特别是交际舞。**
- Pinyin hiện tại: Wǒ xǐhuan tiàowǔ, tèbié shì jiāojìwǔ.
- Dịch hiện tại: Tôi thích khiêu vũ, đặc biệt là nhảy giao tiếp.
- Đề xuất: **我喜欢跳舞，特别是交际舞。**
- Dịch đề xuất: Tôi thích khiêu vũ, đặc biệt là khiêu vũ giao tiếp.
- Nhận xét: Nhảy giao tiếp là cách dịch không tự nhiên. Giữ nội dung Hoa ngữ; chuẩn hóa dấu phẩy nếu cập nhật dữ liệu.
### Bài 21 · 脸色 · `boya1-21-3` (STT 442)

- Hiện tại: **他的脸色不太好。**
- Pinyin hiện tại: Tā de liǎnsè bù tài hǎo.
- Dịch hiện tại: Mặt anh ấy không được khỏe.
- Đề xuất: **他的脸色不太好。**
- Dịch đề xuất: Sắc mặt anh ấy không được tốt.
- Nhận xét: Mặt anh ấy không được khỏe lệch cách diễn đạt tiếng Việt. 脸色 nói về sắc mặt.
### Bài 21 · 熬夜 · `boya1-21-4` (STT 443)

- Hiện tại: **他为了赶作业熬夜到凌晨**
- Pinyin hiện tại: Tā wèile gǎn zuòyè áoyè dào língchén
- Dịch hiện tại: Anh ấy thức khuya đến tận nửa đêm để kịp bài tập
- Đề xuất: **他为了赶作业熬夜到凌晨**
- Dịch đề xuất: Anh ấy thức đến tận rạng sáng để làm bài tập cho kịp.
- Nhận xét: 凌晨 chỉ khoảng sau nửa đêm đến trước sáng, không đồng nhất với nửa đêm. Câu tiếng Trung không cần đổi.
### Bài 21 · 斤 · `boya1-21-5` (STT 444)

- Hiện tại: **一斤苹果**
- Pinyin hiện tại: Yī jīn píng guǒ
- Dịch hiện tại: một cân táo
- Đề xuất: **一斤苹果**
- Dịch đề xuất: Nửa kilôgam táo (một cân Trung Quốc).
- Nhận xét: Trong ngữ cảnh Trung Quốc đại lục của giáo trình, một 市斤 là 500 g. Dịch một cân táo không chú thích dễ bị người Việt hiểu là 1 kg. [Đối chiếu đơn vị 斤](https://ctext.org/dictionary.pl?char=%E6%96%A4&if=en&remap=gb).
### Bài 23 · 口语 · `boya1-23-18` (STT 506)

- Hiện tại: **练习口语很重要。**
- Pinyin hiện tại: Liànxí kǒuyǔ hěn zhòngyào.
- Dịch hiện tại: Luyện tập tiếng nói rất quan trọng.
- Đề xuất: **练习口语很重要。**
- Dịch đề xuất: Luyện khẩu ngữ rất quan trọng.
- Nhận xét: Luyện tập tiếng nói không tự nhiên và không rõ nghĩa kỹ năng nói.
### Bài 24 · 聊天儿 · `boya1-24-23` (STT 535)

- Hiện tại: **我们坐下来好好聊天儿吧。**
- Pinyin hiện tại: Wǒmen zuò xiàlái hǎohǎo liáo tiānr ba.
- Dịch hiện tại: Chúng ta ngồi xuống trò chuyện tử tế đi.
- Đề xuất: **我们坐下来好好聊天儿吧。**
- Dịch đề xuất: Chúng ta ngồi xuống trò chuyện một lát cho thoải mái nhé.
- Nhận xét: Trò chuyện tử tế dễ mang sắc thái phê bình cách cư xử; 好好 ở đây mời dành thời gian trò chuyện cho thỏa thích.
### Bài 25 · 汗 · `boya1-25-16` (STT 552)

- Hiện tại: **打完球后他出了一身汗。**
- Pinyin hiện tại: Dǎ wán qiú hòu tā chū le yì shēn hàn.
- Dịch hiện tại: Chơi bóng xong cậu ấy ra một thân mồ hôi.
- Đề xuất: **打完球后他出了一身汗。**
- Dịch đề xuất: Chơi bóng xong, cậu ấy toát mồ hôi khắp người.
- Nhận xét: Ra một thân mồ hôi là dịch bám từng chữ, không tự nhiên trong tiếng Việt.

## E. Lỗi phiên âm phát hiện trong lúc rà câu

### Bài 11 · 舒服 · `boya1-11-12` (STT 213)

- Hiện tại: **这个椅子很舒服**
- Pinyin hiện tại: Zhè gè yǐ zi hěn shū fú
- Dịch hiện tại: Cái ghế này rất thoải mái
- Đề xuất: **这把椅子坐着很舒服。**
- Pinyin đề xuất: Zhè bǎ yǐzi zuòzhe hěn shūfu.
- Nhận xét: Câu hiện tại ghi shū fú. Với cách phát âm phổ thông dùng trong giáo trình này, 舒服 thường ghi shūfu; 子 trong 椅子 cũng đọc nhẹ. Khi sửa câu theo mục C, cập nhật toàn bộ pinyin như bản đề xuất.
### Bài 21 · 倒 · `boya1-21-16` (STT 455)

- Hiện tại: **杯子倒了**
- Pinyin hiện tại: Bēi zi dào le
- Dịch hiện tại: Cái cốc đã bị đổ
- Đề xuất: **杯子倒了**
- Pinyin đề xuất: Bēizi dǎo le.
- Nhận xét: 倒 nghĩa ngã/đổ ở câu này đọc dǎo. Pinyin câu hiện tại ghi dào, mâu thuẫn với cả nghĩa câu lẫn âm đầu mục. [MOE phân biệt dǎo và dào](https://stroke-order.learningweb.moe.edu.tw/dictMean.jsp?ID=20498&la=0).

## Các mẫu câu ngắn không nên tự động sửa sai

Ví dụ 我也是, 我送你, 我才来, 我找书 hoặc 我昨天去商店 có thể hợp lệ khi đặt trong ngữ cảnh. 我吃过饭了 cũng không cần tự động xóa 过. Nếu mục tiêu là mỗi thẻ phải có câu hoàn chỉnh, rõ nghĩa khi đứng riêng, nên biên tập một lượt riêng theo tiêu chí đó.

Các mục chỉ có từ/cụm từ như 楼房 (bài 4), 国际机场 (bài 5), 白天 (bài 14), 学生 (bài 23), 考试 (bài 27) cần phân biệt: không sai ngữ pháp với tư cách từ/cụm từ; riêng 白天 và 学生 chưa minh họa đúng cách dùng đầu mục nên đã đưa vào nhóm B.

## Độ bao phủ theo bài

| Bài | Mục đã rà | Mục có nhận xét A–E |
| --- | ---: | --- |
| 1 | 16 | 您 (#12, D) |
| 2 | 19 | Chưa thấy vấn đề rõ trong lượt rà này |
| 3 | 14 | 日语 (#43, C) |
| 4 | 19 | Chưa thấy vấn đề rõ trong lượt rà này |
| 5 | 20 | 研究生 (#74, D) |
| 6 | 25 | Chưa thấy vấn đề rõ trong lượt rà này |
| 7 | 25 | 里 (#125, A) |
| 8 | 25 | 就 (#152, D); 室 (#159, C) |
| 9 | 20 | Chưa thấy vấn đề rõ trong lượt rà này |
| 10 | 18 | Chưa thấy vấn đề rõ trong lượt rà này |
| 11 | 25 | 舒服 (#213, C/E) |
| 12 | 22 | Chưa thấy vấn đề rõ trong lượt rà này |
| 13 | 22 | Chưa thấy vấn đề rõ trong lượt rà này |
| 14 | 25 | 白 (#272, B); 灰 (#294, A) |
| 15 | 21 | Chưa thấy vấn đề rõ trong lượt rà này |
| 16 | 24 | 跳舞 (#335, D) |
| 17 | 26 | Chưa thấy vấn đề rõ trong lượt rà này |
| 18 | 27 | 得 (#381, B); 的话 (#384, A) |
| 19 | 22 | 大概 (#411, C) |
| 20 | 24 | Chưa thấy vấn đề rõ trong lượt rà này |
| 21 | 25 | 脸色 (#442, D); 熬夜 (#443, D); 斤 (#444, D); 倒 (#455, E) |
| 22 | 24 | Chưa thấy vấn đề rõ trong lượt rà này |
| 23 | 24 | 口语 (#506, D); 学 (#507, B); 初中 (#508, C) |
| 24 | 24 | 聊天儿 (#535, D) |
| 25 | 20 | 汗 (#552, D); 棒 (#554, B) |
| 26 | 29 | 邮票 (#583, C) |
| 27 | 25 | 复习 (#592, A) |
| 28 | 28 | 得 (#616, B) |
| 29 | 19 | Chưa thấy vấn đề rõ trong lượt rà này |
| 30 | 21 | Chưa thấy vấn đề rõ trong lượt rà này |

## Kiểm tra kỹ thuật

Sau khi sửa, đã chạy `node --test scripts/boya-examples.test.mjs`: 4/4 kiểm tra đạt. Hai kiểm tra gốc xác nhận có đủ ví dụ song ngữ, chứa từ đầu mục và không còn mẫu placeholder bị cấm. Hai kiểm tra bổ sung đối chiếu toàn bộ 678 ví dụ giữa CSV và TypeScript, đồng thời giữ các trường hợp đã duyệt về nghĩa từ, chức năng từ và phiên âm nhiều cách đọc. Đây không phải bộ máy đánh giá ngữ pháp tự động; các câu sửa được rà soát về nội dung trước khi cập nhật.

Đã đồng bộ `data/boya1_vocab.csv` và `src/data/boya1Data.ts`, lưu sửa đổi trong `scripts/repair_boya_examples.py` và cập nhật pinyin/bản dịch tương ứng. Mục `boya1-28-6` đồng thời được sửa nghĩa và từ loại thành trợ từ dẫn bổ ngữ. Đã xác nhận chỉ 26 mục đã duyệt thay đổi; giữ nguyên toàn bộ ID, thứ tự và phân bài. Dữ liệu Boya 2 không thay đổi.

Chạy lại script sửa dữ liệu cho kết quả không đổi (idempotent). `npm run build` và `git diff --check` đều đạt.
