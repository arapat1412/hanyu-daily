# -*- coding: utf-8 -*-
"""
HSK 7-9 Grammar - Part 4: Items 097 - 134 (78 sentences)
Items 097 - 127: cau-phuc-da-tang ("Câu so sánh & Câu phức đa tầng")
Items 128 - 134: mach-lac-van-ban ("Đoạn văn & Quần câu (句群)")
"""

METADATA_4 = [
    {
        "order": 97,
        "titleVi": "Cấu trúc so sánh hơn văn ngôn/khẩu ngữ: A+形容词+于/过+B (A hơn B)",
        "structure": "A + Tính từ + 于 / 过 + B (优于, 胜于, 高于, 强过, 大过)",
        "category": "cau-phuc-da-tang",
        "explanation": "1) 'Tính từ + 于 + B' là kết cấu so sánh hơn trong văn ngôn học thuật và chính luận: 'tốt hơn/vượt trội hơn' (优于), 'thắng thế/quan trọng hơn' (胜于), 'cao hơn' (高于); 2) 'Tính từ + 过 + B' là dạng so sánh hơn sinh động trong khẩu ngữ: 'giỏi hơn' (强过), 'cao hơn' (高过).",
        "tips": "Giúp bài viết đạt sắc thái trang nhã, tránh lặp lại đơn điệu từ '比'."
    },
    {
        "order": 98,
        "titleVi": "Cấu trúc liên kết liệt kê đa nguyên nhân: 一来……，二来……，三来……",
        "structure": "Phân câu kết luận ， 一来 + Lý do 1 ， 二来 + Lý do 2 ， 三来 + Lý do 3",
        "category": "cau-phuc-da-tang",
        "explanation": "Dùng để phân tích rành mạch các nguyên nhân hoặc động cơ dẫn đến một hành vi hay quyết định: 'thứ nhất là..., thứ hai là..., thứ ba là...'. Thường xuất hiện trong lời giải thích, phân bua hoặc cân nhắc tâm lý.",
        "tips": "Có thể dùng hai vế (一来...，二来...) hoặc ba vế tăng dần tính thuyết phục."
    },
    {
        "order": 99,
        "titleVi": "Cấu trúc liệt kê văn bản chính luận: 一则……，二则……，三则……",
        "structure": "Luận điểm 。 一则 + Khía cạnh 1 ， 二则 + Khía cạnh 2 ， 三则 + Khía cạnh 3",
        "category": "cau-phuc-da-tang",
        "explanation": "Cấu trúc liệt kê mang sắc thái văn viết trang trọng, hàn lâm hơn '一来...二来...': 'một là..., hai là..., ba là...'. Chuyên dùng trong các bài báo cáo, phân tích ưu nhược điểm của chính sách hoặc phương án thực thi.",
        "tips": "Thường thấy trong phân tích khoa học, kinh tế học và xã luận."
    },
    {
        "order": 100,
        "titleVi": "Cấu trúc định nghĩa & tường giải thuật ngữ: 所谓……，就是……",
        "structure": "所谓 + Thuật ngữ / Khái niệm ， 就是 + Nội dung định nghĩa / bản chất",
        "category": "cau-phuc-da-tang",
        "explanation": "Khuôn mẫu kinh điển mở đầu phần giải thích, định nghĩa một khái niệm mới hoặc đưa ra cách hiểu chuyên sâu về một thuật ngữ trừu tượng: 'cái gọi là..., chính là...'.",
        "tips": "Cấu trúc vàng để viết câu mở đoạn trong phần thi nghị luận giải thích thuật ngữ."
    },
    {
        "order": 101,
        "titleVi": "Cấu trúc liên từ lựa chọn song song: 或……，或…… (hoặc là..., hoặc là...)",
        "structure": "或（是） + Khả năng 1 ， 或（是） + Khả năng 2",
        "category": "cau-phuc-da-tang",
        "explanation": "Dùng để liên kết các khả năng, tình huống giả định hoặc con đường lựa chọn khác nhau mà chủ thể có thể gặp phải: 'hoặc là chìm nổi gian truân, hoặc là thuận buồm xuôi gió'; 'hoặc là bị ốm, hoặc là nhà có việc'.",
        "tips": "Tương đương với '或者...或者...', nhưng súc tích và giàu nhạc điệu hơn."
    },
    {
        "order": 102,
        "titleVi": "Cấu trúc lựa chọn kiên quyết: 宁可/宁愿……，也不…… (thà rằng..., chứ không chịu...)",
        "structure": "宁可 / 宁愿 + Lựa chọn chấp nhận thiệt thòi ， 也不 + Điều dứt khoát cự tuyệt",
        "category": "cau-phuc-da-tang",
        "explanation": "Biểu thị sự lựa chọn có ý thức và dũng cảm: thà chấp nhận hy sinh, vất vả hoặc thiệt thòi ở vế 1, chứ kiên quyết không làm điều trái với lương tâm, nguyên tắc hoặc mục tiêu cao cả ở vế 2: 'thà lợi nhuận ít chứ không quên tôn chỉ', 'thà sống kham khổ chứ không bỏ đam mê'.",
        "tips": "Thể hiện nhân cách cao đẹp, lập trường kiên định và ý chí sắt đá."
    },
    {
        "order": 103,
        "titleVi": "Cấu trúc lựa chọn bài trừ: 与其……，宁愿/宁可…… (thay vì..., thà rằng...)",
        "structure": "与其 + Phương án từ bỏ ， 宁愿 / 宁可 + Phương án chủ động chọn",
        "category": "cau-phuc-da-tang",
        "explanation": "So sánh hai phương án để dứt khoát bài trừ phương án tiêu cực, bị động ở vế '与其', chủ động chọn giải pháp tích cực hơn ở vế '宁愿/宁可': 'thay vì ngồi đây đoán già đoán non, thà tôi đến hỏi trực tiếp cho xong'.",
        "tips": "Ngữ khí dứt khoát, chủ động và mang tính giải quyết vấn đề."
    },
    {
        "order": 104,
        "titleVi": "Cấu trúc nhượng bộ ngầm: X（倒）是X（了），…… (X thì đúng là X thật, nhưng...)",
        "structure": "Tính từ / Động từ + （倒）是 + Tính từ / Động từ + （了） ， Nhưng / Tuy nhiên...",
        "category": "cau-phuc-da-tang",
        "explanation": "Lặp lại từ ngữ với phó từ ngữ khí '倒/是' để thừa nhận một phần sự thật ở vế trước, nhưng vế sau lập tức đưa ra sự chuyển hướng, hạn chế hoặc khó khăn đi kèm: 'ngon thì đúng là ngon thật, cơ mà cay quá', 'đi thì cũng đã đi rồi, cơ mà...'.",
        "tips": "Tạo sự chuyển ý tự nhiên, khách quan và sâu sắc trong nhận xét."
    },
    {
        "order": 105,
        "titleVi": "Cấu trúc cảnh báo trông mặt mà bắt hình dong: 别看……，…… (đừng thấy... mà coi thường)",
        "structure": "别看 + Hiện tượng bề ngoài / Điểm yếu ， Phân câu thực lực / Bản chất đáng nể",
        "category": "cau-phuc-da-tang",
        "explanation": "Khẩu ngữ dùng để nhắc nhở người khác chớ nên đánh giá thấp đối tượng chỉ dựa trên vẻ bề ngoài hoặc tuổi tác: 'đừng thấy tuổi nhỏ, chí lớn lắm đấy', 'đừng thấy ngoài mặt bất cần, trong lòng để ý lắm'.",
        "tips": "Tương đương với '虽然...但是...', nhưng mang tính khẩu ngữ đàm thoại tự nhiên hơn."
    },
    {
        "order": 106,
        "titleVi": "Cấu trúc nhượng bộ chuyển ngoặt mềm: 虽说……，但/可…… (dẫu nói là..., nhưng mà...)",
        "structure": "虽说 + Hiện tượng thừa nhận ， 但 / 可 / 仍然 + Thực tế đối lập",
        "category": "cau-phuc-da-tang",
        "explanation": "Dạng nhượng bộ khẩu ngữ của '虽然...但是...': 'dẫu nói là sức khỏe không tốt, nhưng không từ bỏ lý tưởng', 'dẫu nói kiếm tiền triệu mỗi tranh, nhưng cũng không gánh nổi con tiêu xài'.",
        "tips": "Dùng nhiều trong văn tự sự và văn phong đàm luận đời thường."
    },
    {
        "order": 107,
        "titleVi": "Cấu trúc điều kiện toàn thể: 无论……与否，都…… (bất luận... hay không, đều...)",
        "structure": "无论 + Hành động / Tính chất + 与否 ， 都 + Kết quả bất biến",
        "category": "cau-phuc-da-tang",
        "explanation": "'与否' (yǔ fǒu) là hình thức chính phản văn ngôn ('có hay không'). Cấu trúc biểu thị kết quả ở vế sau hoàn toàn không phụ thuộc vào việc điều kiện ở vế trước xảy ra hay không: 'bất luận bạn đồng ý hay không, anh ấy vẫn làm'.",
        "tips": "Mang sắc thái trang trọng, chuẩn mực pháp lý và chính luận."
    },
    {
        "order": 108,
        "titleVi": "Cấu trúc quy phạm điều lệ: 凡……（者），均（可）…… (phàm là... đều có thể...)",
        "structure": "凡 + Đối tượng / Điều kiện + （者） ， 均（可） + Quyền lợi / Quy định",
        "category": "cau-phuc-da-tang",
        "explanation": "Mẫu câu quy phạm cổ điển trong thông báo, điều lệ và hợp đồng: '凡' nghĩa là phàm, tất cả; '均' nghĩa là đều. 'Phàm những ai đạt giải đều được cấp giấy chứng nhận', 'Phàm đơn vị hợp tác đều có thể...'.",
        "tips": "Ngôn ngữ văn bản thông báo công quyền và quy chế thi đấu."
    },
    {
        "order": 109,
        "titleVi": "Cấu trúc giả thiết văn ngôn: 假若/假使……，…… (giả dụ / ví phỏng như...)",
        "structure": "假若 / 假使 + Tình huống giả định ， Kết quả tương ứng",
        "category": "cau-phuc-da-tang",
        "explanation": "Dạng văn ngôn trang nhã của liên từ giả thiết '如果/要是': đưa ra tình huống giả định chưa xảy ra hoặc giả định ngược lại với quá khứ: 'ví phỏng bạn không muốn ở nhà', 'giả sử mọi sự bắt đầu lại từ đầu'.",
        "tips": "Tăng thêm vẻ đẹp văn chương cổ điển và tính triết lý sâu sắc."
    },
    {
        "order": 110,
        "titleVi": "Cấu trúc may mắn thoát hiểm: 幸亏/幸好……，不然/否则…… (may mà..., nếu không thì...)",
        "structure": "幸亏 / 幸好 + Yếu tố may mắn giải cứu ， 不然 / 否则 + Hậu quả xấu đã xảy ra",
        "category": "cau-phuc-da-tang",
        "explanation": "Diễn tả sự may mắn khi nhờ có sự xuất hiện kịp thời của người hoặc điều kiện ở vế 1 mà đã ngăn chặn được một hậu quả hết sức tồi tệ nêu ở vế 2: 'may mà trưa nay bạn lấy cơm giúp, nếu không thì đói meo', 'may mà bác Trương cho số điện thoại'.",
        "tips": "Thể hiện lòng cảm kích và sự thở phào nhẹ nhõm."
    },
    {
        "order": 111,
        "titleVi": "Cấu trúc nhượng bộ tột cùng: 纵然/纵使……，也…… (cho dẫu / dù rằng... cũng...)",
        "structure": "纵然 / 纵使 + Tình huống cực đoan / Bất lợi ， 也 + Kết quả bất biến",
        "category": "cau-phuc-da-tang",
        "explanation": "Cặp liên từ nhượng bộ cao cấp bậc nhất (tương đương '即使...也...'): giả định tình huống bất lợi đã đẩy lên mức cùng cực nhất, nhưng hành động hoặc kết quả vẫn diễn ra kiên định: 'cho dẫu không ai cổ vũ, anh vẫn đoạt cúp', 'dù rằng xuất phát từ bụng tốt, cũng phải chú ý cách nói'.",
        "tips": "Mang âm hưởng hào sảng, bi tráng và tính nghệ thuật văn chương cao."
    },
    {
        "order": 112,
        "titleVi": "Cấu trúc nhân quả văn ngôn cô đọng: （因）……，故…… (bởi vì..., cho nên...)",
        "structure": "（因） + Căn nguyên lý do ， 故 + Hệ quả / Hành vi tất yếu",
        "category": "cau-phuc-da-tang",
        "explanation": "Kết cấu nhân quả cổ điển: '故' tương đương với '所以/因此' trong khẩu ngữ. Thường dùng trong các danh ngôn triết lý hoặc văn bản y khoa, khoa học để nêu lên quy luật tất yếu: 'nhìn thấu sự đời nên không màng tranh giành' (故不争), 'chẩn đoán khó khăn' (故明确诊断较难).",
        "tips": "Ngắn gọn, đanh thép và mang đậm phong vị cổ văn."
    },
    {
        "order": 113,
        "titleVi": "Cấu trúc hệ quả thái quá: ……，以至（于）…… (..., đến nỗi / dẫn tới mức...)",
        "structure": "Nguyên nhân / Hành động mức độ cao ， 以至（于） + Hậu quả sâu rộng / thái quá",
        "category": "cau-phuc-da-tang",
        "explanation": "Chỉ ra mức độ của sự việc ở vế trước phát triển đến đỉnh điểm, dẫn tới kết quả hoặc hậu quả nghiêm trọng, ngoài dự tính ở vế sau: 'giá bị đẩy lên đến mức hơn triệu tệ', 'đến nỗi tăng thêm gánh nặng cho học sinh'.",
        "tips": "Khác với '以致' (chỉ hậu quả xấu), '以至于' có thể dùng cho cả mức độ phạm vi sâu rộng chung."
    },
    {
        "order": 114,
        "titleVi": "Cấu trúc so sánh bậc thang phủ định: 别说……，都/也…… (đừng nói là..., ngay cả... cũng...)",
        "structure": "别说 + Đối tượng cấp cao / Giá trị lớn ， 就是 / 连 + Đối tượng cơ bản + 都 / 也 + Phủ định",
        "category": "cau-phuc-da-tang",
        "explanation": "Dùng để nhấn mạnh sự bất khả: ngay cả đối tượng dễ dàng/nhỏ bé hơn còn không làm nổi hoặc đối tượng trình độ cao hơn còn chào thua, huống chi là trường hợp thông thường: 'đừng nói sinh viên, nghiên cứu sinh đọc còn thấy vất vả', 'đừng nói 10 vạn, một vạn giờ cũng không có'.",
        "tips": "Tăng cường tối đa ngữ khí phủ định tuyệt đối."
    },
    {
        "order": 115,
        "titleVi": "Cấu trúc phàn nàn chồng chất: ……不说，还…… (chưa kể..., lại còn...)",
        "structure": "Điều tiêu cực 1 + 不说 ， 还 + Điều tiêu cực 2 nặng nề hơn",
        "category": "cau-phuc-da-tang",
        "explanation": "Diễn tả sự bức xúc trước những tác hại hoặc phiền phức dồn dập kéo tới: 'điều thứ nhất đã đủ bực mình rồi, điều thứ hai lại càng quá quắt hơn': 'ăn nhờ ở đậu nhà tôi chưa kể, lại còn phá phách', 'mất tiền chưa kể, lại còn rước bực vào người'.",
        "tips": "Đậm đà khẩu ngữ phê bình, tố cáo và phàn nàn đời sống."
    },
    {
        "order": 116,
        "titleVi": "Cấu trúc so sánh tăng tiến cực đoan: 连……都……，更不用说……了",
        "structure": "连 + Đối tượng có ưu thế + 都 + Bất lực ， 更不用说 + Đối tượng bình thường + 了",
        "category": "cau-phuc-da-tang",
        "explanation": "Đưa đối tượng có năng lực cao nhất ra làm chuẩn đối sánh để chứng minh đối tượng thấp hơn hoàn toàn không có khả năng thực hiện: 'ngay cả thầy giáo còn nghĩ nửa ngày, huống chi học sinh', 'đến lời xin lỗi còn không chịu nói, huống chi bồi thường'.",
        "tips": "Lập luận logic chặt chẽ, không thể chối cãi."
    },
    {
        "order": 117,
        "titleVi": "Cấu trúc phản vấn tăng tiến văn ngôn: ……尚且……，（更）何况……",
        "structure": "A + 尚且 + Trạng thái / Khó khăn ， （更）何况 + B + 呢 / ？",
        "category": "cau-phuc-da-tang",
        "explanation": "'尚且' (còn... thay) là liên từ văn ngôn đưa ra sự thật khó chấp nhận ở đối tượng có ưu thế, từ đó suy ra đối tượng yếu thế hơn càng không thể: 'người lớn xem còn chưa thích hợp thay, huống chi là trẻ em', 'cỏ dại mọc còn khó khăn, huống chi phát triển nông nghiệp'.",
        "tips": "Một trong những mẫu câu phản vấn đắt giá nhất trong bài thi viết HSK cấp cao."
    },
    {
        "order": 118,
        "titleVi": "Cấu trúc bổ sung hiển nhiên: ……，更不用说……了 (..., càng không cần nói tới...)",
        "structure": "Phân câu tiền đề ， 更不用说 / 更何谈 + Đối tượng mức cao hơn + 了",
        "category": "cau-phuc-da-tang",
        "explanation": "Dùng ở cuối câu để khẳng định tính chất hiển nhiên của một sự việc ở bậc cao hơn sau khi đã chứng minh điều kiện ở bậc thấp hơn: 'người lớn nghe to còn hỏng tai, càng không cần nói đến trẻ sơ sinh', 'chợp mắt còn khó khăn, huống hồ nói tới ngủ say'.",
        "tips": "Thường đi kèm các dẫn chứng thực tế xác thực."
    },
    {
        "order": 119,
        "titleVi": "Cấu trúc mục đích phòng ngừa: 为（了）……起见，…… (để cho..., để đảm bảo...)",
        "structure": "为（了） + An toàn / Tiện lợi / Thận trọng + 起见 ， Biện pháp thực thi",
        "category": "cau-phuc-da-tang",
        "explanation": "Thành ngữ ngữ pháp chỉ mục đích phòng ngừa rủi ro hoặc bảo đảm tiêu chuẩn: 'để đảm bảo an toàn' (为安全起见), 'để chắc ăn/bảo hiểm' (为了保险起见), 'để tiện cho việc tra cứu' (为便于查找起见).",
        "tips": "Chuẩn mực hành chính, y tế và kỹ thuật quy chuẩn."
    },
    {
        "order": 120,
        "titleVi": "Cấu trúc mục đích chính sách/hành động: ……，以…… (..., nhằm để / để mà...)",
        "structure": "Biện pháp / Quyết sách ， 以 + Mục tiêu vĩ mô hướng tới",
        "category": "cau-phuc-da-tang",
        "explanation": "Liên từ mục đích trang trọng cổ điển nối mệnh đề hành động với mục tiêu chiến lược: 'nhằm đạt được', 'để thực hiện': 'triển khai kế hoạch tăng tốc băng thông rộng nhằm bắt kịp chuẩn quốc tế', 'bảo đảm kinh phí dồi dào nhằm giúp đỡ các nước đang phát triển'.",
        "tips": "Từ khóa bắt buộc trong các văn kiện chính sách nhà nước và nghị quyết quốc tế."
    },
    {
        "order": 121,
        "titleVi": "Cấu trúc điều kiện bắt buộc bướng bỉnh: 非得……才…… (nhất định phải... mới chịu)",
        "structure": "非得 + Điều kiện cực đoan / Hậu quả ， 才 + Chấp nhận / Dừng lại",
        "category": "cau-phuc-da-tang",
        "explanation": "Diễn tả tính bướng bỉnh, ngoan cố của chủ thể hoặc tình thế bức bách: nhất quyết phải chạm tới giới hạn tột cùng mới chịu thức tỉnh hoặc dừng hành vi: 'nhất định phải gây ra đại họa mới chịu ăn năn', 'nhất định phải đòi bằng được đồ chơi mới nín'.",
        "tips": "Mang sắc thái trách móc nghiêm khắc hoặc chê cười thói nhõng nhẽo."
    },
    {
        "order": 122,
        "titleVi": "Cấu trúc điều kiện vô điều kiện bất khả: 任……也…… (bất kể... cũng không thể...)",
        "structure": "任 + Ai / Điều gì + 也 + Không thể xoay chuyển",
        "category": "cau-phuc-da-tang",
        "explanation": "'任' biểu thị sự bất lực trước hoàn cảnh tuyệt đối: bất luận là ai tới can thiệp hay bất kỳ điều gì tác động cũng đều hoàn toàn vô hiệu: 'con bé mà khóc thì bất kể ai dỗ cũng không nín', 'bất kể chuyện vui gì cũng không làm anh vui lên được'.",
        "tips": "Nhấn mạnh tâm trạng bế tắc cực độ hoặc tính cách quật cường."
    },
    {
        "order": 123,
        "titleVi": "Câu phức đẳng lập đa tầng (多重并列复句)",
        "structure": "Phân câu 1 ； Phân câu 2 ； Phân câu 3 （Song song bình đẳng）",
        "category": "cau-phuc-da-tang",
        "explanation": "Câu phức chứa nhiều tầng phân câu có quan hệ bình đẳng song song, liên kết với nhau bằng dấu chấm phẩy ';' hoặc các cấu trúc sóng đôi, không phân biệt chính phụ: ví dụ trình bày các giai đoạn học tập âm nhạc song hành, hoặc ba khía cạnh giáo dục con cái tự do.",
        "tips": "Thường có cấu trúc đối ngẫu nhịp nhàng, tạo âm điệu uyển chuyển hào sảng cho bài văn."
    },
    {
        "order": 124,
        "titleVi": "Câu phức chuyển ngoặt đa tầng (多重转折复句)",
        "structure": "Vế thuận 1 + Nhưng vế 2 + Cơ mà vế 3 （Chuyển hướng liên tiếp）",
        "category": "cau-phuc-da-tang",
        "explanation": "Câu phức lồng ghép nhiều tầng chuyển ý đối lập nhau: một mặt thừa nhận khó khăn ban đầu, mặt khác khẳng định thành quả, đồng thời bổ sung thêm một khía cạnh chuyển ngoặt khác về mặt nhận thức tâm lý.",
        "tips": "Giúp biểu đạt những tư duy phức tạp, những uẩn khúc nội tâm nhiều tầng nấc."
    },
    {
        "order": 125,
        "titleVi": "Câu phức giả thiết đa tầng (多重假设复句)",
        "structure": "Nếu (Điều kiện 1 + Điều kiện 2 + Điều kiện 3) thì Kết quả",
        "category": "cau-phuc-da-tang",
        "explanation": "Câu phức lồng ghép nhiều điều kiện giả định bổ trợ cho nhau (vừa nỗ lực, vừa có tài năng, lại thêm may mắn) trước khi dẫn ra kết luận tất yếu: 'thì nhất định sẽ thành công'.",
        "tips": "Yêu cầu sự phối hợp chặt chẽ giữa các liên từ '如果... 而且... 再加上... 就...'"
    },
    {
        "order": 126,
        "titleVi": "Câu phức nhân quả đa tầng (多重因果复句)",
        "structure": "Bởi vì A nên B ； Do B nên dẫn tới C （Nhân quả liên hoàn）",
        "category": "cau-phuc-da-tang",
        "explanation": "Câu phức liên kết chuỗi nhân quả mắt xích: nguyên nhân A tạo ra hệ quả B, và hệ quả B trở thành tiền đề nguyên nhân sản sinh ra kết cục C; hoặc giải thích nguyên nhân bằng một kết cấu tăng tiến bên trong.",
        "tips": "Cốt lõi trong các bài luận giải thích cơ chế kinh tế và phân tích hiện tượng lịch sử."
    },
    {
        "order": 127,
        "titleVi": "Câu phức tăng tiến đa tầng (多重递进复句)",
        "structure": "Không những A mà còn B ， Thậm chí còn C",
        "category": "cau-phuc-da-tang",
        "explanation": "Câu phức đẩy mức độ của phẩm chất hoặc lợi ích lên theo từng bậc thang liên tiếp: 'không những... mà còn... thậm chí còn...': biết thổi sáo -> thổi hay -> tự làm được sáo; thử thách nhân viên -> chiều lòng chủ tịch -> không làm mất lòng sếp.",
        "tips": "Tạo sức lôi cuốn mạnh mẽ và sự thuyết phục toàn diện cho luận điểm."
    },
    {
        "order": 128,
        "titleVi": "Quần câu theo trật tự thời gian (时间顺序句群)",
        "structure": "Giai đoạn 1 -> Giai đoạn 2 -> Giai đoạn 3 -> Kết quả",
        "category": "mach-lac-van-ban",
        "explanation": "Nhóm câu (句群 - Cú quần) liên kết chặt chẽ với nhau theo dòng chảy tuyến tính của thời gian: quy trình từng bước nấu ăn, các bước thực thi đề án cải cách doanh nghiệp từ điều tra, tái cơ cấu cho đến ngày thu quả ngọt có lãi.",
        "tips": "Sử dụng các từ nối thời gian: '首先... 接着... 经过... 最终...' để mạch văn thông suốt."
    },
    {
        "order": 129,
        "titleVi": "Quần câu theo trật tự không gian (空间顺序句群)",
        "structure": "Trung tâm -> Bên trái -> Bên phải -> Phía sau",
        "category": "mach-lac-van-ban",
        "explanation": "Nhóm câu sắp xếp theo điểm nhìn thị giác và phương vị địa lý: miêu tả cảnh quan sông nước đập Tam Hiệp (bên trái, bên phải) hoặc bố cục khu triển lãm (trục chính, bắc, nam, phía sau lưng).",
        "tips": "Các từ chỉ phương vị '左边... 右边... 背后... 东侧...' đóng vai trò cột mốc định vị không gian."
    },
    {
        "order": 130,
        "titleVi": "Quần câu theo trật tự logic biện chứng (逻辑顺序句群)",
        "structure": "Luận điểm tổng quát -> Khía cạnh A -> Khía cạnh B -> Ưu/Nhược",
        "category": "mach-lac-van-ban",
        "explanation": "Nhóm câu triển khai theo quy luật logic tư duy: từ hiện tượng tổng quát đến phân tích nguyên nhân hai mặt (một mặt thiên nhiên, một mặt con người), hoặc đối chiếu toàn diện giữa ưu điểm và nhược điểm của cơ chế.",
        "tips": "Dùng cặp liên từ logic: '一方面... 另一方面...', '优点是... 缺点是...'."
    },
    {
        "order": 131,
        "titleVi": "Quần câu triển khai chủ đề liên hoàn (话题延伸句群)",
        "structure": "Chủ đề A -> Mở rộng khía cạnh địa lý -> Mở rộng đặc tính sinh thái",
        "category": "mach-lac-van-ban",
        "explanation": "Kỹ thuật kết nối văn bản bậc cao: giữ nguyên chủ đề trung tâm xuyên suốt nhiều câu (dùng ký hiệu đồng sở chỉ Øi để chỉ chủ ngữ đã được duy trì) và lần lượt mở rộng ra các phân nhánh thông tin mới về phân bố, sinh thái hoặc định nghĩa khoa học.",
        "tips": "Tạo nên tính gắn kết ngữ nghĩa sâu sắc (semantic coherence) cho đoạn văn học thuật."
    },
    {
        "order": 132,
        "titleVi": "Quần câu chuyển đổi chủ đề mượt mà (话题转换句群)",
        "structure": "Bàn về chủ đề A 。 至于 / 谈到 主 đề B ， Phân câu",
        "category": "mach-lac-van-ban",
        "explanation": "Kỹ thuật chuyển mạch thảo luận sang một khía cạnh mới bằng các từ đánh dấu chủ đề như '至于...' (còn về...): từ việc sáng tác nghệ thuật chuyển sang vị trí treo tranh; từ tốc độ ghi đĩa chuyển sang giá thành.",
        "tips": "Giúp việc chuyển ý giữa các đoạn không bị gãy vụn mà tự nhiên, uyển chuyển."
    },
    {
        "order": 133,
        "titleVi": "Quần câu lược bỏ chủ ngữ thừa kế phía trước (承前省略句群)",
        "structure": "Chủ ngữ A + Hành động 1 ， 【Ø】 + Hành động 2 ， 【Ø】 + Hành động 3",
        "category": "mach-lac-van-ban",
        "explanation": "Hiện tượng văn phạm đặc thù của tiếng Hán: một khi chủ ngữ đã được xác lập ở câu đầu, các câu sau liên tiếp lược bỏ chủ ngữ mà người đọc vẫn hiểu rõ ràng mạch lạc hành động do ai thực hiện (bà nội lấy sổ tiết kiệm, bế tôi, ra ngân hàng; chính phủ cung cấp hàng cứu trợ, cử đội cứu nạn).",
        "tips": "Làm cho nhịp điệu văn bản trở nên dồn dập, liền mạch, tránh lặp từ thô kệch."
    },
    {
        "order": 134,
        "titleVi": "Quần câu lược bỏ chủ ngữ dự báo theo vế sau (蒙后省略句群)",
        "structure": "Mặc dù 【Ø】... ， Nhưng 【Chủ ngữ A】... （Chủ ngữ xuất hiện ở vế sau）",
        "category": "mach-lac-van-ban",
        "explanation": "Kỹ thuật cú pháp cao cấp: chủ ngữ của toàn đoạn được tạm giấu đi ở vế phụ nhượng bộ/điều kiện mở đầu, và chỉ chính thức xuất hiện ở vế chính phía sau nhằm tạo điểm nhấn và sức lôi cuốn cho câu văn: 'Mặc dù [Uông Xương Tự] chưa từng có cơ hội... nhưng Uông Xương Tự luôn sẵn sàng'.",
        "tips": "Đỉnh cao của sự tinh tế trong cú pháp và nghệ thuật hành văn tiếng Trung HSK 7-9."
    }
]

TRANSLATIONS_4 = {
    # 097 A+形容词+于/过+B
    "新型钛合金门窗不仅美观大方，而且在使用寿命方面也远远优于铁窗和铝合金门窗。": "Cửa sổ và cửa đi bằng hợp kim titan kiểu mới chẳng những trang nhã đẹp mắt, mà về tuổi thọ sử dụng cũng vượt trội xa so với cửa sắt và cửa nhôm thông thường.",
    "对她这种锦衣玉食的富家小姐而言，面子往往胜于一切。": "Đối với một tiểu thư khuê các sống trong nhung lụa ngọc ngà như cô ấy, thể diện sĩ diện thường thắng thế hơn mọi thứ trên đời.",
    "我可不相信这世界上还有厨艺高过您的人。": "Con không tin trên cõi đời này còn có ai tay nghề nấu nướng cao hơn bác đâu.",
    "你争气点，强过你的两个哥哥，不要让那些没安好心的人笑话了。": "Con ráng mà có chí tiến thủ, giỏi giang hơn hai người anh trai của con, đừng để mấy kẻ có bụng dạ xấu xa kia cười vào mũi.",
    # 098 一来……，二来……，三来……
    "他虽然在犹豫，但现在还不会和她说分手，一来于心不忍，二来谈了这么多年多少也习惯了，三来怕别人议论。": "Anh ấy tuy đang đắn đo do dự, nhưng lúc này chưa nói lời chia tay với cô, thứ nhất là lòng không nỡ, thứ hai là yêu nhau bao năm qua phần nào cũng thành thói quen, thứ ba là ngại miệng lưỡi thế gian bàn tán.",
    "他对王经理有相当的敬意，一来因为是自己的顶头上司，二来因为经理对于相关业务确实是烂熟于心，三来因为经理虽沉默寡言但又善于处理人际关系。": "Anh ấy dành sự kính trọng đáng kể đối với Giám đốc Vương, thứ nhất vì đây là sếp trực tiếp của mình, thứ hai vì Giám đốc thực sự nắm nghiệp vụ chuyên môn vững như lòng bàn tay, thứ ba vì dẫu kiệm lời nhưng Giám đốc lại rất khéo léo trong đối nhân xử thế.",
    # 099 一则……，二则……，三则……
    "这种药品一则价格高昂，二则产量较少，三则副作用明显，因此难以推广。": "Loại dược phẩm này một là giá thành đắt đỏ, hai là sản lượng khan hiếm, ba là tác dụng phụ rõ rệt, do đó rất khó nhân rộng phổ biến.",
    "排练时需要的演员比实际演出的时候要多一些，一则考察演员的表现，不合适的话就换掉；二则可以相互提出意见，完善表演；三则不上场的演员也可以做一些剧务工作。": "Khi tập dượt số lượng diễn viên cần nhiều hơn so với lúc diễn thực tế, một là để sát hạch phong độ của diễn viên, nếu không hợp vai thì thay người; hai là để đôi bên cùng góp ý hoàn thiện lối diễn xuất; ba là những diễn viên chưa lên sàn cũng có thể phụ trách khâu hậu cần sân khấu.",
    # 100 所谓……，就是……
    "所谓绒面涂料，就是视觉效果一流，又不会引发眩晕，触感柔软而有弹性的新型装饰材料。": "Cái gọi là sơn phủ mặt nhung, chính là loại vật liệu trang trí kiểu mới có hiệu ứng thị giác đỉnh cao, không gây hoa mắt chóng mặt, sờ vào lại mềm mại và đàn hồi êm ái.",
    "企业管理者要为企业的发展提供催化剂。所谓催化剂，就是能为企业发展提供助力的一切行为，包括设立清晰目标、调动员工自主性和创造性，以及提供充分的资源等。": "Nhà quản trị doanh nghiệp cần cung cấp chất xúc tác cho sự phát triển của công ty. Cái gọi là chất xúc tác, chính là toàn bộ các hành vi tiếp sức cho đà tăng trưởng của doanh nghiệp, bao gồm việc vạch ra mục tiêu rõ ràng, khơi dậy tính tự chủ và sức sáng tạo của nhân viên, cũng như cung ứng nguồn lực đầy đủ.",
    # 101 或……，或……
    "这一辈子，或饱经挫折，或一帆风顺。受挫折的，心性会得到磨炼，总是处于顺境的，往往思想单纯。": "Cả đời người này, hoặc là nếm trải đủ đường gian truân trắc trở, hoặc là thuận buồm xuôi gió êm đềm. Người trải qua sóng gió trắc trở thì tâm tính được tôi luyện sắt đá, còn kẻ luôn sống trong nhung lụa bình an thì suy nghĩ thường đơn thuần ngây thơ.",
    "那个工人，或是生病了，或是家里头有事，反正今天来不了了。": "Người công nhân kia, hoặc là ốm đau ngã bệnh, hoặc là trong nhà có việc bận, tóm lại hôm nay không thể đến được rồi.",
    # 102 宁可/宁愿……，也不……
    "今年上半年，门店营业额有二百五十万元之多，但利润仅一万多元，公司经理说：“我们宁可利润少一些，也不能忘掉服务消费者的宗旨。”": "Nửa đầu năm nay, doanh thu chuỗi cửa hàng lên tới 2,5 triệu tệ, thế nhưng lợi nhuận ròng chỉ vỏn vẹn hơn một vạn tệ, giám đốc công ty chia sẻ: 'Chúng tôi thà chấp nhận lợi nhuận mỏng một chút, chứ tuyệt đối không bao giờ được lãng quên tôn chỉ phục vụ người tiêu dùng.'",
    "这批有志于交响乐艺术的音乐家始终以发展中国高水平的交响乐为己任。他们宁愿生活艰苦些，也不愿放弃自己热爱的事业。": "Nhóm nhạc sĩ tâm huyết với nghệ thuật giao hưởng này luôn coi việc phát triển nền nhạc giao hưởng đỉnh cao của Trung Quốc là sứ mệnh thiêng liêng của đời mình. Họ thà chịu cảnh sinh hoạt đạm bạc kham khổ chứ dứt khoát không cam lòng từ bỏ sự nghiệp mà mình hằng tha thiết nâng niu.",
    # 103 与其……，宁愿/宁可……
    "与其在这里胡思乱想，我宁愿当面去问个清楚。": "Thay vì ngồi đây suy diễn lung tung vẩn vơ, tôi thà đích thân đến gặp mặt hỏi cho ra ngô ra khoai còn hơn.",
    "与其跟这些毫无责任心的人一组，我宁可一个人做这个小组作业。": "Thay vì phải chung nhóm với những kẻ vô trách nhiệm này, tôi thà tự mình gánh trọn bài tập nhóm một mình còn hơn.",
    # 104 X（倒）是X（了），……
    "重庆火锅好吃是好吃，不过对于吃不惯麻辣味的人来说，恐怕会难以入口。": "Lẩu Trùng Khánh ngon thì đúng là ngon thật đấy, thế nhưng đối với những ai chưa quen ăn cay tê thì e rằng rất khó nuốt trôi.",
    "上周的大型相亲会，他迫于父母的压力，去倒是去了，但若是让他在相亲会上勇敢地表达自己，追求心上人，确实是难为他了。": "Buổi gặp mặt hẹn hò mai mối quy mô lớn tuần trước, dưới sức ép của bố mẹ thì anh ấy đi thì cũng đã đi rồi đấy, cơ mà nếu bắt anh phải dũng cảm bộc bạch bản thân để theo đuổi người trong mộng tại sự kiện thì quả thực là làm khó anh quá.",
    # 105 别看……，……
    "别看年龄小，他的志向可很大呢！": "Đừng thấy tuổi tác còn nhỏ mà coi thường, chí hướng của cậu bé lớn lao lắm đấy nhé!",
    "别看小王一天到晚看上去什么都不在乎的样子，其实他是个特别在意别人看法的人。": "Đừng thấy Tiểu Vương suốt ngày làm ra vẻ bất cần đời cái gì cũng không màng, kỳ thực cậu ấy là người cực kỳ để tâm đến ánh nhìn và đánh giá của thiên hạ.",
    # 106 虽说……，但/可……
    "虽说我的身体不好，但我并不会放弃一直以来的理想。": "Dẫu nói là thể trạng sức khỏe của tôi không được tốt, thế nhưng tôi tuyệt nhiên không bao giờ từ bỏ lý tưởng bấy lâu nay của mình.",
    "虽说这位著名画家的一幅画就可赚上百万，可仍然架不住儿子这样挥霍。": "Dẫu nói là mỗi bức họa của danh họa này có thể kiếm về tiền triệu tệ, cơ mà cũng không thể nào gánh nổi thói tiêu pha phá của vô độ của cậu quý tử.",
    # 107 无论……与否，都……
    "无论你同意与否，他都会按自己的计划去处理这件事的。": "Bất luận bạn có tán đồng hay không, anh ấy vẫn sẽ xử lý sự việc này theo đúng kế hoạch của riêng mình.",
    "所有的工作人员，无论工作成绩优异与否，都是能领到高额奖金的。": "Toàn thể nhân viên làm việc, bất luận thành tích công tác xuất sắc hay bình thường, thảy đều có thể nhận được khoản tiền thưởng hậu hĩnh.",
    # 108 凡……（者），均（可）……
    "此次比赛设有一、二、三等奖及优秀奖。凡获奖者均颁发荣誉证书。": "Cuộc thi lần này có các giải nhất, nhì, ba và giải khuyến khích. Phàm là thí sinh đạt giải thảy đều được trao giấy khen danh dự.",
    "凡来我市进行技术合作的单位，均可根据自身的资金、设备、专长等条件，进行多领域、多层次的合作。": "Phàm là các cơ quan đơn vị tới thành phố chúng tôi tiến hành hợp tác kỹ thuật thì đều có thể căn cứ vào năng lực tài chính, máy móc thiết bị, chuyên môn sở trường để triển khai hợp tác đa lĩnh vực, đa tầng nấc.",
    # 109 假若/假使……，……
    "假若你不愿待在家里，你可以到湖边散散步，或在公园喝喝茶、下下棋。": "Ví phỏng bạn không muốn ru rú trong nhà, bạn có thể ra ven hồ tản bộ, hoặc vào công viên thưởng trà, đánh cờ.",
    "我从来都不会后悔之前的决定，假使一切再从头来，结果也还是一样的。": "Tôi trước giờ chưa bao giờ hối hận về những quyết định đã qua, giả dụ mọi sự có quay ngược lại từ đầu thì kết cục cũng vẫn sẽ như thế mà thôi.",
    # 110 幸亏/幸好……，不然/否则……
    "幸好你今天中午替我打了饭，不然我就只有挨饿的份了。": "May sao trưa nay cậu lấy cơm giúp tôi, nếu không thì tôi chỉ có nước ôm bụng chịu đói meo.",
    "幸亏老张告诉了我哥哥的电话号码，否则我就真没法跟哥哥联系了。": "May nhờ bác Trương cho tôi số điện thoại của anh trai, nếu không thì tôi quả thực chẳng có cách nào liên lạc nổi với anh.",
    # 111 纵然/纵使……，也……
    "纵然无人为他加油喝彩，他最终也还是夺取了本站比赛的冠军。": "Cho dẫu chẳng một ai hò reo cổ vũ cho anh, rốt cuộc anh vẫn xuất sắc giành ngôi vị quán quân tại chặng thi đấu này.",
    "纵使出于好心，你也要注意沟通的方式，说话不要那么直接。": "Dù rằng xuất phát từ bụng dạ tốt, cậu cũng cần phải chú ý phương pháp giao tiếp, ăn nói chớ nên quá bộc trực sốc nổi.",
    # 112 （因）……，故……
    "富有智慧者看得透，故不争；胸襟豁达者想得开，故不斗。": "Bậc giàu trí tuệ nhìn thấu tỏ sự đời, cho nên không màng tranh giành; người mang lòng dạ bao dung thông thoáng, do đó chẳng thiết đấu đá.",
    "肺肉瘤样癌是一种罕见的肺癌，因其症状、体征缺乏特异性，常需术后活检才能确诊，故明确诊断较难。": "Ung thư dạng sarcoma phổi là một dạng ung thư phổi hiếm gặp, do các triệu chứng và dấu hiệu lâm sàng thiếu tính đặc thù, thường phải sinh thiết sau phẫu thuật mới chẩn đoán xác định được, cho nên việc chẩn đoán dứt khoát là tương đối khó khăn.",
    # 113 ……，以至（于）……
    "自从这种靶向药物问世之后，它的治疗癌症的功能被推崇到了极点，以至它在黑市上的价格被炒到了百万以上。": "Kể từ sau khi loại thuốc nhắm trúng đích này ra đời, công năng trị liệu ung thư của nó được tôn sùng lên tận mây xanh, đến nỗi giá bán của nó trên thị trường chợ đen bị thổi phồng lên tới hơn một triệu tệ.",
    "当下的素质教育实践呈现出明显的形式化特征，以至于一些学校将活动课的数量作为衡量素质教育实施的指标，反而加重了学生负担。": "Thực tiễn giáo dục toàn diện hiện nay đang bộc lộ xu hướng hình thức hóa rõ rệt, dẫn tới mức một số trường học lấy số lượng tiết ngoại khóa làm thước đo triển khai giáo dục tố chất, vô hình trung lại càng làm nặng thêm gánh nặng cho học sinh.",
    # 114 别说……，都/也……
    "这本书别说本科生了，研究生读起来都费劲。": "Quyển sách này đừng nói là sinh viên đại học, ngay cả học viên cao học đọc vào cũng thấy trầy da tróc vảy.",
    "他现在没有收入来源，别说10万，就是一万块现在也拿不出。": "Hiện giờ anh ta chẳng có nguồn thu nhập nào, đừng nói là 10 vạn, đến cả một vạn tệ lúc này anh ta cũng không móc đâu ra.",
    # 115 ……不说，还……
    "你们在我家住着白吃白喝不说，还给我添乱。": "Các người ăn nhờ ở đậu nhà tôi ăn uống chùa chùi mép chưa tính, lại còn bày trò quấy nhiễu gây thêm phiền phức cho tôi nữa.",
    "消费者最怕的就是上当受骗，买到假冒伪劣商品，钱花了不说，还弄了一肚子气。": "Người tiêu dùng sợ nhất là bị sập bẫy lừa đảo, rước phải hàng giả hàng nhái kém chất lượng, tiền mất tật mang chưa kể, lại còn ôm trọn một bụng tức tối bực mình.",
    # 116 连……都……，更不用说……了
    "这道题的解法连老师都得想半天，更不用说学生了。": "Cách giải bài toán hóc búa này ngay cả thầy giáo cũng phải vò đầu bứt tai suy nghĩ nửa ngày trời, huống chi nói gì đến học trò.",
    "他连简单的道歉都不肯，更不用说做出什么补偿了。": "Hắn ta ngay cả một lời xin lỗi đơn giản còn chẳng chịu mở mồm, huống chi bàn đến chuyện bồi thường thiệt hại.",
    # 117 ……尚且……，（更）何况……
    "这样的影视作品，成人尚且不宜观看，何况是涉世未深的孩子。": "Tác phẩm phim ảnh thế này người lớn xem còn chưa phù hợp thay, huống chi là những đứa trẻ còn non nớt chưa va vấp trường đời.",
    "高海拔地区土壤贫瘠、气候恶劣，野草生长尚且困难，更何况发展大规模农业？": "Vùng đất cao nguyên thổ nhưỡng bạc màu, khí hậu khắc nghiệt, cỏ dại mọc lên còn gian nan trầy trật thay, huống chi nói đến chuyện phát triển nền nông nghiệp quy mô lớn?",
    # 118 ……，更不用说……了
    "听音乐如果音量过大，对成人的听力都会造成损伤，更不用说对婴幼儿了。所以，让婴幼儿听音乐时，音量要控制适当。": "Nghe nhạc nếu mở âm lượng quá lớn sẽ gây tổn hại thính lực ngay cả đối với người lớn, càng không cần phải nói đến trẻ sơ sinh và trẻ nhỏ. Vì vậy, khi cho trẻ nhỏ nghe nhạc cần kiểm soát âm lượng ở mức vừa phải hợp lý.",
    "虽说“豪华型”大客车带有卧铺，但路况不好，一路颠簸。坐在这种车上，想打个盹常常都不容易，更不用说睡个安稳觉了。": "Dẫu nói là xe khách 'hạng sang' có giường nằm, thế nhưng đường sá gập ghềnh hiểm trở xóc nảy cả chuyến đi. Ngồi trên xe ấy muốn chợp mắt một lát đã là chuyện chẳng dễ dàng gì, huống hồ nói tới chuyện đánh một giấc ngủ say êm ái.",
    # 119 为（了）……起见，……
    "超强台风将在浦东登陆，为安全起见，长三角地区部分列车会临时停运。": "Siêu bão sắp đổ bộ vào Phố Đông, để đảm bảo an toàn tuyệt đối, một số chuyến tàu hỏa khu vực đồng bằng Trường Giang sẽ tạm thời ngừng chạy.",
    "医生说他手术恢复得很好，但为了保险起见，还是需要留院观察一段时间。": "Bác sĩ cho biết ca mổ của anh bình phục rất khả quan, nhưng để nắm chắc ăn an toàn thì vẫn cần phải ở lại bệnh viện theo dõi thêm một thời gian.",
    # 120 ……，以……
    "在广泛听取各方意见之后，工信部决定实施宽带提速计划，以实现上网速度与国际平均水平接轨。": "Sau khi lắng nghe rộng rãi ý kiến đóng góp từ các bên, Bộ Công nghiệp và Công nghệ thông tin quyết định triển khai đề án tăng tốc băng thông rộng, nhằm đưa tốc độ truy cập internet trong nước tiệm cận với mặt bằng chung quốc tế.",
    "世界卫生组织呼吁成员国加强合作，完善监督机制，保证有充裕的资金，以帮助广大发展中国家。": "Tổ chức Y tế Thế giới kêu gọi các quốc gia thành viên siết chặt hợp tác, hoàn thiện cơ chế giám sát và bảo đảm nguồn ngân sách dồi dào, nhằm tiếp sức tương trợ cho đông đảo các nước đang phát triển.",
    # 121 非得……才……
    "为什么我事先对你百般劝说都没有用，非得酿成大错你才肯反思？": "Tại sao từ trước tôi đã hết lời khuyên can trăm đường mà cậu chẳng chịu nghe, nhất định phải để gây ra họa lớn tày đình cậu mới chịu ăn năn hối lỗi sao?",
    "若是家长不给买玩具，“小皇帝”便会大哭大闹，非得把玩具弄到手才罢休。": "Hễ cha mẹ mà không chịu mua đồ chơi cho là 'ông trời con' lập tức giãy nảy khóc lóc ăn vạ, nhất quyết phải đòi bằng được món đồ chơi cầm trên tay mới chịu thôi.",
    # 122 任……也……
    "他的小女儿要是哭起来，任谁也哄不好。": "Cô con gái út của anh ấy mà một khi đã cất tiếng khóc hờn thì bất kể ai dỗ dành cũng chịu thua không nín.",
    "他的心情低落到了极点，似乎任什么事也不能让他开心一点。": "Tâm trạng anh ấy chùng xuống buồn bã đến tột cùng, dường như bất kể chuyện vui vẻ nào trên đời cũng chẳng thể khiến anh hé môi mỉm cười được đôi chút.",
    # 123 多重并列复句
    "我8岁开始学拉二胡，现已达到第七级了；11岁开始学弹钢琴，现已通过第八级的考试。": "Tôi 8 tuổi bắt đầu học kéo đàn nhị, nay đã đạt tới cấp độ 7; 11 tuổi bắt đầu học đánh dương cầm, hiện tại đã thi đỗ chứng chỉ cấp độ 8.",
    "我在孩子的成长过程中，给予他充分的自由。我不逼他学奥数，除非他自己愿意学；不逼他音乐考级，只求培养些许乐感；不逼他学外语，只为他提供开口讲外语的机会。": "Trong suốt quá trình khôn lớn của con, tôi trao cho con sự tự do trọn vẹn. Tôi không ép con học toán nâng cao trừ phi chính con muốn học; không ép con thi lấy chứng chỉ âm nhạc mà chỉ cốt bồi dưỡng chút cảm thụ âm nhạc; không ép con cày cuốc ngoại ngữ mà chỉ tạo môi trường cho con có cơ hội tự tin mở lời giao tiếp.",
    # 124 多重转折复句
    "今年虽然因为气温低，西瓜上市的时间推迟了，但总产量同比增长了近二成。": "Năm nay tuy do nền nhiệt độ thấp khiến mùa dưa hấu tung ra thị trường bị chậm lại, thế nhưng tổng sản lượng thu hoạch vẫn tăng trưởng gần 20% so với cùng kỳ năm trước.",
    "我清楚地记得那天她戴的是一枚钻戒，虽然她后来坚决否认，说她戴的只不过是枚普通金戒指，而且她发给我的照片也证实了这一点，可我还是不愿意承认我记错了。": "Tôi nhớ như in hôm đó cô ấy đeo chiếc nhẫn kim cương lấp lánh, dẫu về sau cô ấy khăng khăng phủ nhận rằng chiếc nhẫn cô đeo chỉ là nhẫn vàng bình thường và bức ảnh cô gửi sang cũng xác thực điều đó, cơ mà tôi vẫn không cam lòng thừa nhận là trí nhớ mình bị nhầm lẫn.",
    # 125 多重假设复句
    "如果你足够努力，而且有一定的天赋，再加上一点点好运气，就一定能通过这次考试。": "Nếu như bạn đủ chăm chỉ nỗ lực, lại sở hữu một chút năng khiếu thiên bẩm, cộng thêm một chút may mắn mỉm cười, thì chắc chắn sẽ vượt qua kỳ thi sát hạch lần này.",
    "要是房子没有其他问题，只是因为租金高而迟迟租不出去，你就要考虑降一部分租金试试了。": "Nếu căn nhà chẳng vướng mắc vấn đề gì khác mà chỉ vì giá thuê quá cao dẫn tới mãi vẫn chưa tìm được người thuê, thì bạn nên cân nhắc giảm bớt một phần tiền thuê xem sao.",
    # 126 多重因果复句
    "由于奥运会足球比赛一开始只面向准业余选手，所以它的水平不能与世界杯相比。于是在1930年乌拉圭举办第一届世界杯后，奥运会足球比赛就退居到次要位置。": "Do giải bóng đá Thế vận hội Olympic ban đầu chỉ dành cho các cầu thủ bán chuyên nghiệp, vì thế trình độ chuyên môn không thể sánh ngang với World Cup. Cho nên sau khi Uruguay đăng cai kỳ World Cup đầu tiên vào năm 1930, bóng đá Olympic đã lui dần về vị trí thứ yếu.",
    "他非常热衷于人体研究，因为在研究中不但可以获得新知识，而且还能对自己的身体状况有更深入的了解。": "Ông ấy vô cùng say mê công trình nghiên cứu cơ thể người, bởi lẽ trong quá trình nghiên cứu chẳng những có thể tiếp thu thêm nhiều tri thức mới, mà còn thấu hiểu sâu sắc và toàn diện hơn về chính tình trạng sức khỏe của bản thân.",
    # 127 多重递进复句
    "他不但会吹笛子，而且吹得还挺好，甚至还会做笛子呢！": "Cậu ấy chẳng những biết thổi sáo trúc, mà thổi lại còn rất điêu luyện, thậm chí còn biết tự tay chế tác ra những cây sáo trúc nữa cơ đấy!",
    "这个项目不如交给小张负责，这样既能考验小张的能力，又能满足董事长的要求，而且还可以不得罪总经理。": "Dự án này chi bằng giao cho Tiểu Trương đảm nhiệm, làm như vậy vừa có thể khảo nghiệm năng lực của Tiểu Trương, lại vừa đáp ứng trọn vẹn yêu cầu của Chủ tịch, mà hơn hết còn không làm phật lòng Tổng giám đốc.",
    # 128 时间顺序
    "豆腐皮包肉的制作程序如下：取豆腐皮一袋用温水泡软，切成两个饺子皮大小的方块备用。将肉末用姜末、葱花、盐、味精、鸡蛋和好，再将几只冬菇泡软、切碎，放入肉末中拌匀。": "Quy trình chế biến món váng đậu cuộn thịt như sau: Lấy một túi váng đậu ngâm nước ấm cho mềm ra, cắt thành từng miếng vuông cỡ bằng hai vỏ bánh chẻo để sẵn. Đem thịt băm ướp đều với gừng băm, hành hoa, muối, mì chính và trứng gà, kế đó lấy vài tai nấm hương ngâm nở, băm nhỏ rồi trút vào tô thịt băm trộn đều tay.",
    "在广泛调研的基础上，有关部门合并了一些高度类似的企业，停办一些消耗高、污染重、利润低的企业。经过调整以后，不少厂很快扭亏为盈。": "Trên nền tảng khảo sát sâu rộng, các cơ quan hữu quan đã tiến hành sáp nhập các doanh nghiệp có tính chất tương đồng cao, đồng thời cho dừng hoạt động các cơ sở tiêu hao nhiều năng lượng, gây ô nhiễm nặng và lợi nhuận thấp. Trải qua đợt tái cơ cấu này, không ít nhà máy đã nhanh chóng chuyển từ thua lỗ sang kinh doanh có lãi.",
    # 129 空间顺序
    "20年前的长江中堡岛已不复存在。现在，在它的左边，大坝已矗立在波涛之中，左岸厂房坝、电厂、泄洪坝等已相继建成。在它的右边，三期工程的主体项目——右岸电厂正夜以继日地工作着。": "Đảo Trung Bảo trên sông Trường Giang của 20 năm về trước nay đã không còn nữa. Giờ đây, ở phía bên trái của đảo, con đập khổng lồ sừng sững uy nghiêm giữa làn sóng nước cuồn cuộn, tổ hợp nhà máy bờ trái, trạm phát điện và đập xả lũ đã lần lượt hoàn thành. Còn ở phía bên phải, hạng mục trọng điểm của công trình giai đoạn ba — nhà máy điện bờ phải — đang ngày đêm vận hành không ngơi nghỉ.",
    "站在广场的中心位置，向东望去，1号展馆坐落于馆区主轴线上。其南北分别为2、3号展馆。三个展馆从远处看排成一条线，十分整齐。绕过三馆，背后是4、5号展馆，分别位于2、3号馆的东侧，两馆皆为东西走向，共同构成环湖之势。": "Đứng từ vị trí trung tâm của quảng trường phóng tầm mắt về hướng đông, nhà triển lãm số 1 tọa lạc ngay trên trục chính của khuôn viên. Phía bắc và phía nam của nó lần lượt là nhà triển lãm số 2 và số 3. Ba tòa triển lãm nhìn từ xa xếp thành một hàng thẳng tắp vô cùng ngay ngắn. Đi vòng qua ba tòa nhà này, phía sau lưng là nhà triển lãm số 4 và số 5, lần lượt nằm ở bờ đông của nhà số 2 và số 3, cả hai đều trải dài theo hướng đông tây, cùng tạo nên thế uốn lượn ôm trọn lấy lòng hồ.",
    # 130 逻辑顺序
    "全球变暖是自然因素和人为因素共同作用的结果。一方面，近年来超强的厄尔尼诺现象显著升高了海水温度，使得大洋上空温度偏高。另一方面，人类活动，如大规模的工业排放和森林采伐，是更主要的原因。": "Hiện tượng nóng lên toàn cầu là hệ quả từ sự tác động cộng hưởng của cả yếu tố tự nhiên lẫn con người. Một mặt, hiện tượng El Nino cực đoan trong những năm gần đây đã làm nhiệt độ nước biển tăng mạnh rõ rệt, khiến bầu khí quyển phía trên đại dương luôn ở mức nhiệt cao. Mặt khác, các hoạt động của con người như phát thải công nghiệp quy mô lớn và nạn chặt phá rừng bừa bãi mới là nguyên nhân then chốt hơn cả.",
    "该体制的优点是灾害响应速度快，处理突发情况效率高；缺点是不利于整合地方力量，也不利于平日村民自救意识的提高。": "Ưu điểm của cơ chế này là tốc độ phản ứng trước thảm họa thiên tai rất mau lẹ, hiệu suất xử lý các tình huống khẩn cấp bất ngờ rất cao; song nhược điểm là không có lợi cho việc quy tụ sức mạnh cơ sở địa phương, cũng như chưa thúc đẩy được ý thức tự cứu hộ phòng ngừa hàng ngày của người dân trong thôn.",
    # 131 话题延伸
    "甘草i于亚欧大陆的中国北部、蒙古、俄罗斯西伯利亚地区、哈萨克斯坦、巴基斯坦等地都有分布，Øi在中国具体分布于东北、华北、西北等地。甘草i喜光照充足、干燥少雨、冬夏分明以及昼夜温差大的环境，甘草i具有喜光、耐旱、耐热、耐寒及耐盐碱等特性。": "Cây cam thảo phân bố rộng khắp đại lục Á - Âu tại miền bắc Trung Quốc, Mông Cổ, vùng Siberia của Nga, Kazakhstan, Pakistan; riêng tại Trung Quốc phân bố chủ yếu ở vùng Đông Bắc, Hoa Bắc và Tây Bắc. Cam thảo ưa thích môi trường ngập tràn ánh nắng, khô ráo ít mưa, bốn mùa đông hè rõ rệt và biên độ nhiệt ngày đêm chênh lệch lớn; loài cây này sở hữu các đặc tính quý như ưa sáng, chịu hạn, chịu nhiệt, chịu rét và kháng đất phèn mặn cực tốt.",
    "人工智能i是新一轮科技革命和产业变革的重要驱动力量，Øi是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。": "Trí tuệ nhân tạo (AI) là động lực then chốt thúc đẩy làn sóng cách mạng khoa học công nghệ và đổi mới công nghiệp thế hệ mới; đây là một môn khoa học kỹ thuật hiện đại chuyên nghiên cứu, phát triển các lý thuyết, phương pháp, kỹ thuật và hệ thống ứng dụng nhằm mô phỏng, mở rộng và phát triển trí thông minh của con người.",
    # 132 话题转换
    "我在创作这幅作品时，是希望能够依靠背影去反映出人物的情绪和精神状态。至于这件作品的展出位置，在规划展厅布局时，就做了特别的安排。": "Khi sáng tác tác phẩm này, tôi mang theo kỳ vọng có thể dựa vào bóng lưng để khắc họa tâm trạng và thế giới tinh thần của nhân vật. Còn về vị trí trưng bày của tác phẩm, ngay khi lên phương án bố cục phòng triển lãm, chúng tôi đã có sự sắp đặt vô cùng đặc biệt.",
    "我刻录光盘的速度都是软件默认的，如果自己去调高速度的话光盘容易报废。（至于）价钱嘛，买的比较多的话就一元一张盘。": "Tốc độ ghi đĩa của tôi hoàn toàn để theo mặc định của phần mềm, nếu tự ý chỉnh tốc độ cao quá thì đĩa rất dễ bị hỏng hóc biến thành phế liệu. Còn về giá cả, nếu mua số lượng nhiều thì chỉ một tệ một chiếc đĩa.",
    # 133 承前省略
    "我奶奶虽然没有文化，【】做事却十分干脆，【】听了这话便找出存折，【】抱着我便径直走出家门去银行取钱。": "Bà nội tôi dẫu không biết chữ, [bà] làm việc lại vô cùng dứt khoát quyết đoán, [bà] nghe thấy lời đó liền tìm ngay cuốn sổ tiết kiệm, [bà] bế xốc tôi vào lòng rồi đi thẳng một mạch ra khỏi nhà tới ngân hàng rút tiền.",
    "中国政府秉承“以人为本”的精神，【】根据被援助国要求和国际社会的呼吁，【】及时提供了救灾物资、救援队和医疗队，【】尽力提供现汇资金援助，【】积极参与了国际合作的重大紧急救援任务。": "Chính phủ Trung Quốc phát huy tinh thần 'lấy con người làm gốc', [chính phủ] căn cứ theo yêu cầu của nước thụ viện và lời kêu gọi từ cộng đồng quốc tế, [chính phủ] đã kịp thời cung ứng hàng cứu trợ, cử đội cứu nạn và y tế tới hiện trường, [chính phủ] dốc sức viện trợ tài chính bằng tiền mặt, [chính phủ] tích cực tham gia vào các sứ mệnh cứu hộ khẩn cấp trọng đại của hợp tác quốc tế.",
    # 134 蒙后省略
    "虽然【】没有得到为国家献身的机会，但也一直做好了准备；如果到了那一天，汪昌绪绝对丝毫不会犹豫。": "Mặc dù [Uông Xương Tự] chưa từng có cơ hội xả thân vì tổ quốc, nhưng ông cũng luôn chuẩn bị sẵn tâm thế sẵn sàng; nếu ngày đó thực sự xảy đến, Uông Xương Tự tuyệt đối sẽ không một mảy may do dự.",
    "无论【】平时工作多忙，【】回家多晚，王和平都会非常认真地检查孩子的作业。": "Bất luận [Vương Hòa Bình] ngày thường công việc bận rộn đến đâu, [Vương Hòa Bình] về nhà muộn thế nào, Vương Hòa Bình cũng đều vô cùng nghiêm túc kiểm tra tỉ mỉ bài tập về nhà của con."
}
