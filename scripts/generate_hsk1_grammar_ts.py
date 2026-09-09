# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
import json
import re

# We will read scripts/all_hsk1_grammar_raw.json and combine with our rich metadata
with open('scripts/all_hsk1_grammar_raw.json', 'r', encoding='utf-8') as f:
    raw_records = json.load(f)

# Load translations
from build_hsk1_grammar_full import TRANSLATIONS, clean_sentence_pinyin

# Complete pedagogical metadata for 70 points
METADATA = [
    # 01
    {
        "category": "words", "categoryName": "Tiền tố & Hậu tố", "categoryIcon": "🧩",
        "titleVi": "Tiền tố: 小- (Xiǎo-) & 第- (Dì-)",
        "structure": "小 + Họ/Tên (thân mật) | 第 + Số từ (thứ tự)",
        "explanationVi": "Tiền tố đứng trước một từ để tạo thành từ mới mang sắc thái riêng:\n• '小-' (tiểu): Đặt trước họ hoặc tên của người ít tuổi hơn để gọi thân mật, gần gũi (như 小高 - Tiểu Cao, 小王 - Tiểu Vương).\n• '第-' (đệ): Đặt trước số đếm để tạo thành số thứ tự (như 第一课 - bài thứ nhất, 第二 - thứ hai).",
        "tips": "'第' chỉ dùng khi nói về thứ hạng hoặc số thứ tự, không dùng để đếm số lượng."
    },
    # 02
    {
        "category": "words", "categoryName": "Tiền tố & Hậu tố", "categoryIcon": "🧩",
        "titleVi": "Hậu tố: -们 (-men) & -边 (-bian)",
        "structure": "Đại từ / Danh từ chỉ người + 们 | Danh từ phương vị + 边",
        "explanationVi": "Hậu tố đứng sau từ gốc để bổ sung ý nghĩa:\n• '-们': Đứng sau danh từ hoặc đại từ chỉ người để biểu thị số nhiều (như 同学们 - các bạn học sinh, 你们 - các bạn, 我们 - chúng tôi).\n• '-边': Đứng sau các từ chỉ phương hướng để tạo thành danh từ chỉ vị trí (như 里边 - bên trong, 外边 - bên ngoài, 后边 - phía sau).",
        "tips": "Khi danh từ đã có số từ đi kèm (ví dụ: 三个学生), tuyệt đối KHÔNG thêm 们."
    },
    # 03
    {
        "category": "words", "categoryName": "Danh từ & Phương vị", "categoryIcon": "📍",
        "titleVi": "Danh từ chỉ phương vị (Trên, Dưới, Trong, Ngoài, Trước, Sau)",
        "structure": "Danh từ nơi chốn/vật thể + 上 / 下 / 里 / 外 / 前 / 后",
        "explanationVi": "Các từ chỉ phương hướng, vị trí cơ bản trong tiếng Trung:\n• 上 (shàng): Trên\n• 下 (xià): Dưới\n• 里 (lǐ): Trong\n• 外 (wài): Ngoài\n• 前 (qián): Trước\n• 后 (hòu): Sau\nThường đứng ngay sau danh từ để tạo thành cụm từ chỉ vị trí nơi chốn cụ thể.",
        "tips": "Tên quốc gia hoặc địa danh riêng (như Trung Quốc, Bắc Kinh) khi làm nơi chốn thì không cần thêm 里 (nói 在中国, không nói 在中国里)."
    },
    # 04
    {
        "category": "verbs", "categoryName": "Động từ năng nguyện", "categoryIcon": "⚡",
        "titleVi": "Động từ năng nguyện: 会 (huì) & 能 (néng) - Biểu thị khả năng",
        "structure": "Chủ ngữ + 会 / 能 + Động từ + (Tân ngữ)",
        "explanationVi": "• '会' (huì): Biết làm việc gì đó thông qua học tập, rèn luyện (như 会说中文 - biết nói tiếng Trung, 会开车 - biết lái xe).\n• '能' (néng): Có khả năng làm việc gì đó do điều kiện sức khỏe, hoàn cảnh hoặc năng lực cho phép (như 能来上课 - có thể đến lớp).",
        "tips": "Phủ định dùng '不会' (không biết làm) hoặc '不能' (không thể làm được do hoàn cảnh hoặc bị cấm)."
    },
    # 05
    {
        "category": "verbs", "categoryName": "Động từ năng nguyện", "categoryIcon": "⚡",
        "titleVi": "Động từ năng nguyện: 想 (xiǎng) & 要 (yào) - Mong muốn & Ý định",
        "structure": "Chủ ngữ + 想 / 要 + Động từ + (Tân ngữ)",
        "explanationVi": "• '想' (xiǎng): Biểu thị mong muốn, nguyện vọng trong suy nghĩ mang tính nhẹ nhàng ('muốn / thích').\n• '要' (yào): Biểu thị ý định dứt khoát, quyết tâm sẽ thực hiện hoặc chuẩn bị làm ('muốn / cần / chuẩn bị').",
        "tips": "Phủ định của cả hai trường hợp biểu thị không muốn đều dùng '不想' (không dùng 不要 vì 不要 thường mang nghĩa là 'đừng')."
    },
    # 06
    {
        "category": "verbs", "categoryName": "Động từ năng nguyện", "categoryIcon": "⚡",
        "titleVi": "Động từ năng nguyện: 可以 (kěyǐ) - Sự cho phép & Có thể",
        "structure": "Chủ ngữ + 可以 + Động từ + (Tân ngữ)",
        "explanationVi": "Dùng để biểu thị sự cho phép, đồng ý hoặc hỏi xin phép người khác thực hiện một hành động nào đó ('được phép / có thể').",
        "tips": "Thể phủ định '不可以' mang ý nghĩa nghiêm cấm, không được phép làm (như 这儿不可以吃东西 - Ở đây không được phép ăn đồ)."
    },
    # 07
    {
        "category": "verbs", "categoryName": "Từ loại & Động từ", "categoryIcon": "✂️",
        "titleVi": "Động từ ly hợp (Động từ tách rời thường gặp)",
        "structure": "V + Thành phần xen giữa + O (hoặc V + 了 + O)",
        "explanationVi": "Động từ ly hợp là các từ gồm 2 âm tiết có kết cấu Động từ + Tân ngữ (như 看病, 睡觉, 说话, 上课, 下课, 上班, 下班, 生病).\nĐặc điểm: Có thể tách rời ra để chèn các thành phần phụ như '了' hoặc từ chỉ số lượng vào giữa (như 睡了一觉, 上了中文课).",
        "tips": "Không được mang tân ngữ trực tiếp phía sau động từ ly hợp (không nói: 见面你, mà phải nói 跟你见面)."
    },
    # 08
    {
        "category": "pronouns", "categoryName": "Đại từ nghi vấn", "categoryIcon": "❓",
        "titleVi": "Các đại từ nghi vấn cơ bản (谁, 什么, 哪, 哪儿, 几...)",
        "structure": "Đặt đại từ nghi vấn vào đúng vị trí của thông tin cần hỏi",
        "explanationVi": "Trong tiếng Trung, câu hỏi dùng đại từ nghi vấn giữ nguyên trật tự từ của câu khẳng định:\n• 什么 (shénme): Cái gì\n• 谁 (shéi/shuí): Ai\n• 哪 (nǎ): Nào | 哪儿 / 哪里 (nǎr/nǎlǐ): Ở đâu\n• 几 (jǐ) / 多少 (duōshao): Mấy / Bao nhiêu\n• 怎么 (zěnme): Làm sao, thế nào (hỏi cách thức)\n• 怎么样 (zěnmeyàng): Thế nào (hỏi tính chất, tình hình, ý kiến)",
        "tips": "Câu đã có đại từ nghi vấn thì tuyệt đối KHÔNG thêm trợ từ 吗 ở cuối câu nữa."
    },
    # 09
    {
        "category": "pronouns", "categoryName": "Đại từ nhân xưng", "categoryIcon": "👤",
        "titleVi": "Đại từ nhân xưng (我, 你, 您, 他, 她, 它, 我们...)",
        "structure": "Đại từ số ít + 们 = Đại từ số nhiều",
        "explanationVi": "Hệ thống đại từ xưng hô trong tiếng Trung:\n• Ngôi thứ 1: 我 (tôi) → 我们 (chúng tôi)\n• Ngôi thứ 2: 你 (bạn) / 您 (ngài - kính trọng) → 你们 (các bạn)\n• Ngôi thứ 3: 他 (anh ấy) / 她 (cô ấy) / 它 (nó - đồ vật/động vật) → 他们/她们/它们 (họ, chúng nó)\n• Mở rộng: 大家 (dàjiā - mọi người).",
        "tips": "'您' là cách gọi tôn kính người lớn tuổi hoặc bề trên, bản thân '您' không kết hợp với '们'."
    },
    # 10
    {
        "category": "pronouns", "categoryName": "Đại từ chỉ thị", "categoryIcon": "👉",
        "titleVi": "Đại từ chỉ thị (这, 那, 这儿, 那儿, 这个, 那个...)",
        "structure": "这 / 那 + Lượng từ + Danh từ | 这儿 / 那儿 (nơi chốn)",
        "explanationVi": "Dùng để chỉ định người, vật hoặc nơi chốn:\n• '这' (zhè) / '这里' / '这儿' (zhèr): Đây, ở đây (ở gần người nói).\n• '那' (nà) / '那里' / '那儿' (nàr): Đó, đằng kia, ở kia (ở xa người nói).\n• Số nhiều: 这些 (những cái này), 那些 (những cái kia).\n• Phân loại: 有的 (có người/vật), 有些 (một số).",
        "tips": "Trước danh từ số ít, '这' và '那' thường đi kèm lượng từ 个 (这个, 那个)."
    },
    # 11
    {
        "category": "numbers_measures", "categoryName": "Số từ & Lượng từ", "categoryIcon": "🔢",
        "titleVi": "Số từ cơ bản (0 - 10, Hàng trăm 百, Hàng nghìn 千, Nửa 半)",
        "structure": "Số đếm tiếng Trung: 一, 二/两, 三, 四, 五... 十, 百, 千",
        "explanationVi": "Cách đếm số và đọc số hàng chục, hàng trăm, hàng nghìn trong tiếng Trung:\n• Số lẻ ở giữa dùng '零' (như 一百零六: 106).\n• Số lượng '2' đứng trước lượng từ dùng '两' (liǎng) thay vì '二' (èr) (như 两个人: 2 người, 两百: 200).\n• '半' (bàn): Một nửa (như 九点半: 9 giờ rưỡi; 半个小时: nửa tiếng).",
        "tips": "Nhớ dùng '两' khi chỉ số lượng trước lượng từ, chỉ dùng '二' khi đếm số thứ tự hoặc số điện thoại."
    },
    # 12
    {
        "category": "numbers_measures", "categoryName": "Số từ & Lượng từ", "categoryIcon": "📦",
        "titleVi": "Danh lượng từ chuyên dụng (本, 个, 家, 口, 块, 件, 只, 元)",
        "structure": "Số từ + Lượng từ + Danh từ",
        "explanationVi": "Trong tiếng Trung, giữa số từ và danh từ bắt buộc phải có lượng từ tương ứng:\n• 个 (gè): Lượng từ chung phổ biến nhất (cái, người).\n• 本 (běn): Dùng cho sách vở, tạp chí.\n• 家 (jiā): Dùng cho quán xá, công ty, cửa hàng.\n• 口 (kǒu): Dùng cho số nhân khẩu trong gia đình.\n• 块 (kuài) / 元 (yuán): Lượng từ tiền tệ (đồng/tệ).\n• 件 (jiàn): Dùng cho quần áo, sự việc.\n• 只 (zhī): Dùng cho con vật nhỏ (chó, mèo...).",
        "tips": "Không được nói '一书', bắt buộc phải nói '一本书'."
    },
    # 13
    {
        "category": "numbers_measures", "categoryName": "Số từ & Lượng từ", "categoryIcon": "☕",
        "titleVi": "Lượng từ mượn dùng: 杯 (bēi - cốc, ly, tách)",
        "structure": "Số từ + 杯 + Danh từ chất lỏng (trà, nước, cà phê...)",
        "explanationVi": "Danh từ chỉ đồ chứa '杯' (cốc/tách) được mượn làm lượng từ để đong đếm chất lỏng (như 一杯茶: một tách trà; 一杯水: một cốc nước).",
        "tips": "Thường dùng trong các câu giao tiếp mời nước, mời trà lịch sự (喝杯茶吧)."
    },
    # 14
    {
        "category": "numbers_measures", "categoryName": "Thời gian & Tuổi tác", "categoryIcon": "🕒",
        "titleVi": "Lượng từ thời gian & tuổi tác (日, 号, 岁, 点, 分, 年, 天)",
        "structure": "Số từ + 年 / 天 / 岁 / 点 / 分",
        "explanationVi": "Các từ đong đếm thời gian và lứa tuổi:\n• 日 (rì) / 号 (hào): Ngày trong tháng (như 九月十五号).\n• 岁 (suì): Tuổi (như 二十岁: 20 tuổi).\n• 点 (diǎn): Giờ | 分 (fēn): Phút (như 三点十分: 3 giờ 10 phút).\n• 年 (nián): Năm | 天 (tiān): Ngày (như 三天: 3 ngày; 一年: 1 năm).",
        "tips": "年 và 天 bản thân đã là lượng từ, nên đứng ngay sau số từ mà không cần thêm 个 (nói 三天, không nói 三个天)."
    },
    # 15
    {
        "category": "adverbs", "categoryName": "Phó từ chỉ mức độ", "categoryIcon": "🔥",
        "titleVi": "Phó từ mức độ: 非常, 很, 太, 真, 有点儿",
        "structure": "Phó từ mức độ + Tính từ (hoặc Động từ tâm lý)",
        "explanationVi": "Dùng để bổ nghĩa mức độ cho tính từ hoặc động từ tâm lý:\n• 很 (hěn): Rất (thường đi kèm tính từ để tạo câu hoàn chỉnh).\n• 非常 (fēicháng): Vô cùng, hết sức.\n• 太……了 (tài...le): Quá... rồi (thường dùng trong câu cảm thán).\n• 真 (zhēn): Thật là, quả là.\n• 有点儿 (yǒudiǎnr): Hơi, có chút (thường mang sắc thái tiêu cực, không hài lòng).",
        "tips": "Phân biệt: '有点儿 + Tính từ' (hơi rộng - tiêu cực), còn 'Tính từ + 一点儿' (rộng hơn một chút - so sánh)."
    },
    # 16
    {
        "category": "adverbs", "categoryName": "Phó từ chỉ phạm vi", "categoryIcon": "🌐",
        "titleVi": "Phó từ phạm vi: 都 (dōu - Đều, tất cả)",
        "structure": "Chủ ngữ (số nhiều) + 都 + Động từ / Tính từ",
        "explanationVi": "Phó từ '都' đứng trước động từ/tính từ để tổng kết toàn bộ các đối tượng được nhắc đến ở chủ ngữ mang tính chất hoặc hành động đó ('đều').",
        "tips": "Khi phủ định: '都不' = Đều không (hoàn toàn không); '不都' = Không đều (phủ định một phần)."
    },
    # 17
    {
        "category": "adverbs", "categoryName": "Phó từ thời gian", "categoryIcon": "⏳",
        "titleVi": "Phó từ thời gian: 在 / 正在 (zhèngzài - Đang)",
        "structure": "Chủ ngữ + 在 / 正在 + Động từ + (Tân ngữ)",
        "explanationVi": "Dùng trước động từ để biểu thị hành động đang diễn ra tại thời điểm nói ('đang làm gì'). Có thể dùng 在, 正 hoặc 正在.",
        "tips": "Phủ định của hành động đang tiếp diễn dùng '没 (在)' chứ không dùng '不'."
    },
    # 18
    {
        "category": "adverbs", "categoryName": "Phó từ tần suất", "categoryIcon": "🔁",
        "titleVi": "Phó từ tần suất: 再 (zài - Lại, nữa)",
        "structure": "再 + Động từ",
        "explanationVi": "Biểu thị một hành động sẽ lặp lại hoặc tiếp tục trong tương lai (hoặc chưa xảy ra) ('lại, nữa, thêm'). Ví dụ: 再见 (hẹn gặp lại), 再买一本 (mua thêm một quyển).",
        "tips": "Phân biệt '再' (hành động lặp lại chưa xảy ra) với '又' (hành động lặp lại đã xảy ra rồi)."
    },
    # 19
    {
        "category": "adverbs", "categoryName": "Phó từ liên kết", "categoryIcon": "🔗",
        "titleVi": "Phó từ liên kết: 也 (yě - cũng) & 还 (hái - còn, lại còn)",
        "structure": "Chủ ngữ + 也 / 还 + V / Adj",
        "explanationVi": "• 也 (yě): Biểu thị sự tương đồng ('cũng'), đứng trước động từ/tính từ.\n• 还 (hái): Biểu thị sự bổ sung, tăng tiến ('còn, thêm vào đó, vẫn còn').",
        "tips": "Trong câu có cả '也' và '都' thì '也' luôn đứng trước '都' (nói 也都, không nói 都不)."
    },
    # 20
    {
        "category": "adverbs", "categoryName": "Phó từ phủ định", "categoryIcon": "🚫",
        "titleVi": "Phó từ phủ định: 不 (bù), 没/没有 (méi), 不要 (bú yào)",
        "structure": "不 / 没(有) / 不要 + Động từ / Tính từ",
        "explanationVi": "• 不 (bù): Phủ định hiện tại, tương lai, thói quen hoặc tính chất ('không').\n• 没 / 没有 (méi): Phủ định hành động đã xảy ra hoặc phủ định sự sở hữu ('chưa / không có').\n• 不要 (bú yào): Khuyên can, yêu cầu người khác không làm gì ('đừng').",
        "tips": "Tuyệt đối không dùng '不' trước 有 (không có '不有', chỉ có '没有')."
    },
    # 21
    {
        "category": "prep_conj", "categoryName": "Giới từ", "categoryIcon": "📍",
        "titleVi": "Giới từ chỉ nơi chốn / thời gian: 在 (zài - Ở, tại)",
        "structure": "Chủ ngữ + 在 + Nơi chốn + Động từ",
        "explanationVi": "Giới từ '在' kết hợp với từ chỉ nơi chốn đứng trước động từ để chỉ ra địa điểm nơi hành động diễn ra ('làm gì ở đâu').",
        "tips": "Trật tự tiếng Trung ngược với tiếng Việt: Tiếng Trung là [Ở đâu rồi mới Làm gì] (在中国工作, chứ không nói 工作在中国)."
    },
    # 22
    {
        "category": "prep_conj", "categoryName": "Giới từ", "categoryIcon": "🤝",
        "titleVi": "Giới từ chỉ đối tượng: 和 (hàn/hé - cùng với) & 对 (duì - đối với)",
        "structure": "Chủ ngữ + 和 + Ai đó + Động từ | Chủ ngữ + 对 + Đối tượng + Động từ",
        "explanationVi": "• '和' làm giới từ: Dẫn ra đối tượng cùng tham gia hành động ('cùng với ai làm gì').\n• '对' làm giới từ: Dẫn ra đối tượng mà hành động hoặc thái độ hướng đến ('đối với ai nói gì / cư xử thế nào').",
        "tips": "Cụm giới tân luôn đứng TRƯỚC động từ chính trong câu."
    },
    # 23
    {
        "category": "prep_conj", "categoryName": "Liên từ", "categoryIcon": "🔗",
        "titleVi": "Liên từ kết nối: 和 (hé - Và, cùng)",
        "structure": "Từ/Cụm từ 1 + 和 + Từ/Cụm từ 2",
        "explanationVi": "Liên từ '和' dùng để nối hai từ hoặc cụm từ có mối quan hệ đẳng lập ngang hàng với nhau (danh từ với danh từ, đại từ với đại từ).",
        "tips": "'和' KHÔNG dùng để nối hai mệnh đề hoặc hai câu độc lập với nhau (tiếng Trung dùng dấu phẩy hoặc liên từ khác)."
    },
    # 24
    {
        "category": "particles_aspects", "categoryName": "Trợ từ kết cấu", "categoryIcon": "🎯",
        "titleVi": "Trợ từ kết cấu: 的 (de - Của / Định ngữ)",
        "structure": "Định ngữ (Người/Tính chất) + 的 + Trung tâm ngữ (Danh từ)",
        "explanationVi": "Trợ từ kết cấu '的' liên kết thành phần bổ nghĩa đứng trước với danh từ đứng sau:\n• Biểu thị sở hữu: 'của' (như 我的手机 - điện thoại của tôi).\n• Biểu thị tính chất, đặc điểm miêu tả (như 我的好朋友 - người bạn tốt của tôi).",
        "tips": "Khi biểu thị quan hệ thân thuộc trong gia đình (như bố, mẹ) hoặc cơ quan, trường học, có thể lược bỏ '的' (như 我爸爸, 我学校)."
    },
    # 25
    {
        "category": "particles_aspects", "categoryName": "Trợ từ động thái", "categoryIcon": "🏁",
        "titleVi": "Trợ từ động thái: 了1 (le - Biểu thị hành động đã hoàn thành)",
        "structure": "Động từ + 了 + (Số lượng) + Tân ngữ",
        "explanationVi": "Đứng ngay sau động từ để biểu thị hành động đó đã được thực hiện, hoàn tất ('đã làm xong'). Thường đi kèm với số lượng từ chỉ rõ kết quả.",
        "tips": "Phủ định của hành động hoàn thành dùng '没 + Động từ' và bỏ '了' đi."
    },
    # 26
    {
        "category": "particles_aspects", "categoryName": "Trợ từ ngữ khí", "categoryIcon": "💬",
        "titleVi": "Trợ từ ngữ khí cuối câu: 吗, 吧, 呢, 了",
        "structure": "Câu trần thuật + 吗 / 吧 / 呢 / 了",
        "explanationVi": "Đứng ở cuối câu để biểu thị thái độ, ngữ khí của người nói:\n• 吗 (ma): Hỏi đúng sai (như 你喜欢喝茶吗?)\n• 吧 (ba): Đề nghị, rủ rê, khuyên nhủ ('nhé, đi, thôi' - như 我们走吧)\n• 呢 (ne): Hỏi tỉnh lược ('còn... thì sao?'), hoặc nhấn mạnh hành động đang diễn ra\n• 了 (le): Biểu thị trạng thái mới xuất hiện, sự thay đổi tình huống ('rồi').",
        "tips": "Trợ từ ngữ khí luôn đứng ở vị trí cuối cùng của toàn bộ câu."
    },
    # 27
    {
        "category": "words", "categoryName": "Thán từ", "categoryIcon": "📞",
        "titleVi": "Thán từ: 喂 (wèi / wéi - A-lô, này)",
        "structure": "喂，……",
        "explanationVi": "Dùng độc lập ở đầu câu để gọi người khác hoặc nghe điện thoại:\n• Khi nghe điện thoại thường phát âm thanh 2 (wéi): 'A-lô?'.\n• Khi dùng để gọi ai đó thường phát âm thanh 4 (wèi): 'Này!'.",
        "tips": "Đây là thán từ giao tiếp hàng ngày cực kỳ phổ biến trong đời sống Trung Quốc."
    },
    # 28
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🧩",
        "titleVi": "Cụm từ liên hợp (Đẳng lập ngang hàng)",
        "structure": "A + B (hoặc A + 和 + B)",
        "explanationVi": "Cụm từ gồm hai hoặc nhiều thành phần có cùng từ loại và địa vị ngữ pháp bình đẳng ghép lại với nhau (như 哥哥姐姐: anh chị; 今天和明天: hôm nay và ngày mai; 有没有: có hay không).",
        "tips": "Các thành phần có thể đi liền nhau hoặc nối bằng liên từ 和."
    },
    # 29
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🧩",
        "titleVi": "Cụm từ chính phụ (Bổ nghĩa + Thành phần chính)",
        "structure": "Thành phần phụ (bổ nghĩa) + Thành phần chính",
        "explanationVi": "Gồm thành phần bổ nghĩa đứng trước làm rõ nghĩa cho từ chính đứng sau:\n• Định ngữ + Trung tâm ngữ: 好朋友 (bạn tốt), 我的书包 (cặp của tôi).\n• Trạng ngữ + Trung tâm ngữ: 很喜欢 (rất thích).",
        "tips": "Quy tắc bất di bất dịch của tiếng Trung: Thành phần tu sức, bổ nghĩa luôn đứng TRƯỚC từ được bổ nghĩa."
    },
    # 30
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🧩",
        "titleVi": "Cụm từ động tân (Động từ + Tân ngữ)",
        "structure": "Động từ + Danh từ tân ngữ",
        "explanationVi": "Kết cấu phổ biến nhất diễn tả hành động tác động lên đối tượng cụ thể: 买东西 (mua đồ), 回学校 (về trường học), 去公司 (đến công ty).",
        "tips": "Rất nhiều động từ 2 âm tiết trong tiếng Trung thực chất là một cụm động tân (như 吃饭, 唱歌, 睡觉)."
    },
    # 31
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🧩",
        "titleVi": "Cụm từ chủ vị (Chủ ngữ + Vị ngữ)",
        "structure": "Chủ thể + Hành động / Trạng thái",
        "explanationVi": "Cụm từ có cấu trúc như một câu nhỏ gồm Chủ ngữ và Vị ngữ (như 我们学习: chúng tôi học tập; 孩子高兴: đứa trẻ vui vẻ; 房间很大: phòng rất rộng). Có thể làm thành phần trong câu lớn hơn.",
        "tips": "Cụm chủ vị có thể đứng làm chủ ngữ, tân ngữ hoặc vị ngữ của một câu lớn."
    },
    # 32
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🔢",
        "titleVi": "Cụm từ số lượng (Số từ + Lượng từ)",
        "structure": "Số từ + Lượng từ",
        "explanationVi": "Sự kết hợp giữa số từ và lượng từ để định lượng sự vật (như 一杯: một ly; 两个: hai cái). Cụm này thường đứng trước danh từ làm định ngữ.",
        "tips": "Khi số từ là '1', trong một số ngữ cảnh khẩu ngữ có thể lược bỏ số 1 (như 喝杯茶 = 喝一杯茶)."
    },
    # 33
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "📍",
        "titleVi": "Cụm giới tân (Giới từ + Tân ngữ)",
        "structure": "Giới từ (在, 对, 和...) + Danh từ",
        "explanationVi": "Giới từ kết hợp với danh từ phía sau tạo thành cụm giới tân (như 在学校: ở trường; 对老师: với thầy giáo; 和朋友: cùng bạn bè). Cụm này chủ yếu làm trạng ngữ trong câu.",
        "tips": "Cụm giới tân thường đứng trước động từ để bổ nghĩa cho hành động."
    },
    # 34
    {
        "category": "phrases_elements", "categoryName": "Cấu trúc cụm từ", "categoryIcon": "🗺️",
        "titleVi": "Cụm từ phương vị (Danh từ + Từ chỉ phương vị)",
        "structure": "Danh từ + 上 / 下 / 里 / 外 / 前 / 后 / 边",
        "explanationVi": "Kết hợp một danh từ với từ chỉ phương vị để xác định không gian cụ thể (như 桌子上: trên bàn; 饭店里: trong nhà hàng; 椅子下边: dưới ghế).",
        "tips": "Cụm từ phương vị hoạt động ngữ pháp như một danh từ chỉ địa điểm nơi chốn."
    },
    # 35
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Chủ ngữ trong câu tiếng Trung (Danh từ, Đại từ, Cụm từ)",
        "structure": "Chủ ngữ (Người/Sự vật được nói tới) + Vị ngữ",
        "explanationVi": "Chủ ngữ là thành phần đứng đầu câu chỉ người, sự vật hoặc hiện tượng được miêu tả, trần thuật:\n• Danh từ làm chủ ngữ: 电影很好看 (Phim rất hay).\n• Đại từ làm chủ ngữ: 她是老师 (Cô ấy là giáo viên).\n• Cụm từ làm chủ ngữ: 学习汉语很有意思 (Học tiếng Trung rất thú vị).",
        "tips": "Trong tiếng Trung, chủ ngữ thường là thông tin đã biết (xác định)."
    },
    # 36
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Vị ngữ là danh từ, số từ, thời gian (Không dùng 是)",
        "structure": "Chủ ngữ + Thời gian / Ngày tháng / Tuổi tác / Giá cả",
        "explanationVi": "Trong câu diễn tả ngày tháng, thứ, thời gian, tuổi tác hoặc giá cả, vị ngữ có thể trực tiếp là một danh từ hoặc cụm số lượng mà KHÔNG cần dùng động từ '是':\n• 明天星期三 (Ngày mai thứ Tư).\n• 我今年二十岁 (Năm nay tôi 20 tuổi).\n• 苹果五块钱一斤 (Táo 5 đồng một cân).",
        "tips": "Khi phủ định thì bắt buộc phải thêm '不是' (như 明天不是星期三)."
    },
    # 37
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Vị ngữ là động từ hoặc tính từ",
        "structure": "Chủ ngữ + Động từ (vị ngữ động từ) | Chủ ngữ + Phó từ + Tính từ (vị ngữ tính từ)",
        "explanationVi": "Thành phần cốt lõi diễn đạt hành động hoặc trạng thái của chủ ngữ:\n• Vị ngữ động từ: 老师来了 (Thầy giáo đến rồi).\n• Vị ngữ tính từ: 今天很冷 (Hôm nay rất lạnh).",
        "tips": "Trong câu vị ngữ tính từ, tuyệt đối không dùng động từ '是' trước tính từ (không nói 今天是冷, mà nói 今天很冷)."
    },
    # 38
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Tân ngữ trong câu (Đối tượng tiếp nhận hành động)",
        "structure": "Chủ ngữ + Động từ + Tân ngữ",
        "explanationVi": "Tân ngữ đứng sau động từ để biểu thị đối tượng chịu sự tác động của hành vi, động tác (như 我喝茶: tôi uống trà; 明天我去找你: ngày mai tôi tìm bạn).",
        "tips": "Tân ngữ có thể là danh từ, đại từ, hoặc cả một cụm động tân/cụm chủ vị."
    },
    # 39
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Định ngữ trong câu (Thành phần bổ nghĩa cho Danh từ)",
        "structure": "Định ngữ + (的) + Danh từ trung tâm",
        "explanationVi": "Định ngữ đứng trước danh từ để hạn định hoặc miêu tả tính chất cho danh từ đó. Có thể là danh từ, tính từ, đại từ hoặc cụm từ (như 中文歌: bài hát tiếng Trung; 我的中文老师: thầy giáo tiếng Trung của tôi; 新买的衣服: quần áo mới mua).",
        "tips": "Nếu định ngữ là cụm động từ hoặc tính từ phức tạp, bắt buộc phải có trợ từ '的'."
    },
    # 40
    {
        "category": "phrases_elements", "categoryName": "Thành phần câu", "categoryIcon": "🏗️",
        "titleVi": "Trạng ngữ trong câu (Thời gian, Nơi chốn, Phương thức, Mức độ)",
        "structure": "Chủ ngữ + Trạng ngữ (Thời gian/Nơi chốn/Phó từ) + Vị ngữ",
        "explanationVi": "Trạng ngữ đứng trước vị ngữ để nói rõ thời gian, địa điểm, cách thức hoặc mức độ diễn ra của hành động (như 我们明天去北京 - Chúng tôi ngày mai đi Bắc Kinh; 他在家看书 - Cậu ấy ở nhà đọc sách).",
        "tips": "Trạng ngữ chỉ thời gian có thể đứng trước hoặc ngay sau chủ ngữ, nhưng trạng ngữ chỉ nơi chốn luôn đứng sau chủ ngữ."
    },
    # 41
    {
        "category": "phrases_elements", "categoryName": "Bổ ngữ", "categoryIcon": "⏱️",
        "titleVi": "Bổ ngữ số lượng: Động từ + 一下 (yíxià - một lát, một chút)",
        "structure": "Động từ + 一下(儿)",
        "explanationVi": "Đứng ngay sau động từ để biểu thị hành động diễn ra trong thời gian rất ngắn, làm thử việc gì, hoặc làm cho ngữ khí câu trở nên nhẹ nhàng, lịch sự hơn (như 休息一下: nghỉ một lát; 请问一下: xin hỏi một chút).",
        "tips": "Mang sắc thái tương tự như hình thức lặp lại của động từ (休息一下 = 休息休息)."
    },
    # 42
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "📐",
        "titleVi": "Câu vị ngữ động từ (Chủ ngữ + Động từ + Tân ngữ)",
        "structure": "S + V + O | Phủ định: S + 不/没 + V + O",
        "explanationVi": "Kiểu câu đơn phổ biến nhất trong tiếng Trung, dùng để diễn đạt hành vi, động tác của chủ thể (như 我买了一个面包: Tôi đã mua một chiếc bánh mì; 他今天不休息: Hôm nay anh ấy không nghỉ ngơi).",
        "tips": "Trật tự câu cơ bản giống tiếng Việt: Chủ ngữ - Động từ - Tân ngữ."
    },
    # 43
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "📐",
        "titleVi": "Câu vị ngữ tính từ (Chủ ngữ + Phó từ mức độ + Tính từ)",
        "structure": "Chủ ngữ + 很 / 非常 / 真 + Tính từ",
        "explanationVi": "Câu dùng tính từ làm vị ngữ để miêu tả hình dáng, tính chất, trạng thái của người hoặc vật. Giữa chủ ngữ và tính từ thường đi kèm phó từ mức độ như '很' để câu được cân đối, tự nhiên.",
        "tips": "Từ '很' trong câu vị ngữ tính từ đôi khi chỉ mang tính đệm ngữ pháp, không nhất thiết dịch là 'rất'."
    },
    # 44
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "📐",
        "titleVi": "Câu vị ngữ danh từ (Ngày tháng, Thứ, Giờ giấc)",
        "structure": "Chủ ngữ + Danh từ / Cụm từ chỉ thời gian",
        "explanationVi": "Kiểu câu ngắn gọn trực tiếp dùng danh từ chỉ thời gian làm vị ngữ (như 今天星期一 - Hôm nay thứ Hai; 现在十二点半 - Bây giờ 12 giờ rưỡi).",
        "tips": "Không cần động từ '是' ở câu khẳng định, nhưng câu phủ định bắt buộc phải dùng '不是'."
    },
    # 45
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "📐",
        "titleVi": "Câu không có chủ ngữ (Hiện tượng tự nhiên, Câu xã giao)",
        "structure": "Động từ / Cụm từ độc lập (Không có chủ ngữ)",
        "explanationVi": "Câu không cần chủ ngữ để diễn tả hiện tượng tự nhiên hoặc các câu giao tiếp cố định (như 下雨了: Mưa rồi; 对不起: Xin lỗi; 刮风了: Gió nổi rồi).",
        "tips": "Rất phổ biến trong đời sống khi chủ ngữ đã quá rõ ràng hoặc là hiện tượng tự nhiên khách quan."
    },
    # 46
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "📐",
        "titleVi": "Câu trần thuật (Câu khẳng định & Câu phủ định)",
        "structure": "Khẳng định: S + V/Adj + O | Phủ định: S + 不/没 + V/Adj + O",
        "explanationVi": "Dùng để kể lại, trình bày một sự việc hoặc quan điểm khách quan. Dạng khẳng định dùng cấu trúc thông thường, dạng phủ định dùng phó từ '不' hoặc '没'.",
        "tips": "Cuối câu trần thuật luôn dùng dấu chấm câu chữ Hán (。)."
    },
    # 47
    {
        "category": "questions", "categoryName": "Các loại câu hỏi", "categoryIcon": "❓",
        "titleVi": "Câu hỏi đúng sai với trợ từ nghi vấn 吗 (ma)",
        "structure": "Câu trần thuật + 吗？",
        "explanationVi": "Cách đặt câu hỏi Có/Không (Yes/No Question) cơ bản nhất: Chỉ cần lấy một câu khẳng định hoặc phủ định hoàn chỉnh rồi thêm trợ từ '吗' vào cuối câu (như 他是中国人吗? - Anh ấy có phải là người Trung Quốc không?).",
        "tips": "Trả lời: Khẳng định dùng '是/对' hoặc lặp lại động từ; Phủ định dùng '不是' hoặc '没/不 + Động từ'."
    },
    # 48
    {
        "category": "questions", "categoryName": "Các loại câu hỏi", "categoryIcon": "❓",
        "titleVi": "Câu hỏi đặc biệt dùng đại từ nghi vấn (谁, 什么, 哪国人...)",
        "structure": "Thay đại từ nghi vấn vào đúng vị trí của thông tin cần hỏi",
        "explanationVi": "Dùng để hỏi thông tin cụ thể (ai, cái gì, ở đâu, người nước nào...). Vị trí từ trong câu hỏi giống hệt câu trả lời (như 他是哪国人? → 他是中国人).",
        "tips": "Tuyệt đối không được thêm trợ từ 吗 vào cuối câu hỏi đã có đại từ nghi vấn."
    },
    # 49
    {
        "category": "questions", "categoryName": "Các loại câu hỏi", "categoryIcon": "❓",
        "titleVi": "Câu hỏi chính phản (V + 不 + V / A + 不 + A)",
        "structure": "Động từ + 不/没 + Động từ | Tính từ + 不 + Tính từ",
        "explanationVi": "Hình thức ghép dạng khẳng định và phủ định của vị ngữ lại với nhau để tạo thành câu hỏi lựa chọn 'có... hay không' (như 你想不想学中文? - Bạn có muốn học tiếng Trung không?; 这件衣服贵不贵? - Áo này đắt không?).",
        "tips": "Câu hỏi chính phản đã có sẵn ý nghi vấn nên KHÔNG dùng thêm 吗 ở cuối câu."
    },
    # 50
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "🙏",
        "titleVi": "Câu cầu khiến (Nhờ vả, khuyên bảo với 请, 吧, 不要)",
        "structure": "请 + S + V | V + 吧 | 不要 + V",
        "explanationVi": "Dùng để yêu cầu, khuyên bảo, mời mọc hoặc ra lệnh:\n• Lịch sự: Thêm '请' (như 您请坐: Mời ngài ngồi).\n• Rủ rê, đề nghị thân mật: Thêm '吧' (như 走吧: Đi thôi!).\n• Ngăn cấm, khuyên can: Dùng '不要' (như 请不要说话: Xin đừng nói chuyện).",
        "tips": "Dùng '请' ở đầu câu giúp câu nói trở nên vô cùng lịch thiệp và tôn trọng người nghe."
    },
    # 51
    {
        "category": "sentence_types", "categoryName": "Các kiểu câu đơn", "categoryIcon": "❗",
        "titleVi": "Câu cảm thán: 太……了 (Quá...) & 真……啊 (Thật là...)",
        "structure": "太 + Tính từ + 了！ | 真 + Tính từ + (啊)！",
        "explanationVi": "Dùng để bộc lộ cảm xúc khen ngợi, ngạc nhiên, thán phục hoặc than phiền:\n• 太……了: Biểu thị mức độ cực cao (như 太贵了: Đắt quá đi mất!).\n• 真……啊: Biểu thị cảm xúc chân thành (như 今天真冷啊: Hôm nay trời thật là lạnh!).",
        "tips": "Cuối câu cảm thán thường dùng dấu chấm than (!)."
    },
    # 52
    {
        "category": "special_patterns", "categoryName": "Cấu trúc câu chữ", "categoryIcon": "⭐",
        "titleVi": "Câu chữ 是: Phán đoán, định danh (A 是 B)",
        "structure": "Chủ ngữ + 是 + Tân ngữ | Phủ định: 主语 + 不是 + 宾语",
        "explanationVi": "Động từ hệ từ '是' dùng để biểu thị sự phán đoán, phân loại hoặc tương đương ('A là B') (như 我哥哥是大学生: Anh trai tôi là sinh viên; 她是不是老师?: Cô ấy có phải là giáo viên không?).",
        "tips": "Không dùng '是' trước tính từ đơn thuần (không nói 我是好, phải nói 我很好)."
    },
    # 53
    {
        "category": "special_patterns", "categoryName": "Cấu trúc câu chữ", "categoryIcon": "⭐",
        "titleVi": "Câu chữ 有: Biểu thị sự sở hữu (Có / Không có)",
        "structure": "Chủ ngữ + 有 + Tân ngữ | Phủ định: 主语 + 没有 + 宾语",
        "explanationVi": "Động từ '有' dùng để biểu thị mối quan hệ sở hữu ('ai có cái gì') (như 我有哥哥，没有姐姐: Tôi có anh trai, không có chị gái).",
        "tips": "Phủ định của '有' chỉ có thể là '没有' (không bao giờ có 不有)."
    },
    # 54
    {
        "category": "special_patterns", "categoryName": "Câu tồn hiện", "categoryIcon": "🏢",
        "titleVi": "Câu tồn hiện với 是 (Nơi chốn + 是 + Sự vật xác định)",
        "structure": "Từ chỉ nơi chốn + 是 + Danh từ",
        "explanationVi": "Dùng để nói rõ tại một địa điểm nào đó chính là sự vật gì (khẳng định địa điểm duy nhất hoặc xác định) (như 前边是电影院: Phía trước là rạp chiếu phim; 超市后边是一家饭店: Sau siêu thị là một nhà hàng).",
        "tips": "Chủ ngữ của câu tồn hiện bắt buộc phải là một từ/cụm từ chỉ địa điểm, nơi chốn."
    },
    # 55
    {
        "category": "special_patterns", "categoryName": "Câu tồn hiện", "categoryIcon": "🏡",
        "titleVi": "Câu tồn hiện với 有 (Nơi chốn + 有 + Số lượng + Sự vật)",
        "structure": "Từ chỉ nơi chốn + 有 + (Số từ + Lượng từ) + Danh từ",
        "explanationVi": "Dùng để miêu tả sự tồn tại của người hoặc sự vật tại một địa điểm nhất định ('Ở đâu có cái gì') (như 学校外边有一家书店: Bên ngoài trường có một hiệu sách; 桌子上有一本中文书: Trên bàn có một quyển sách tiếng Trung).",
        "tips": "Khác với câu chữ 有 sở hữu (ai có cái gì), câu tồn hiện nhấn mạnh sự tồn tại ở một không gian địa điểm."
    },
    # 56
    {
        "category": "special_patterns", "categoryName": "Câu liên động", "categoryIcon": "🎯",
        "titleVi": "Câu liên động 1: Hành động mục đích (Đi đâu để làm gì)",
        "structure": "Chủ ngữ + 去/来 + Địa điểm + Động từ 2 (Mục đích)",
        "explanationVi": "Câu có hai hành động liên tiếp diễn ra, trong đó hành động thứ hai là mục đích của hành động thứ nhất (như 我来中国学汉语: Tôi đến Trung Quốc để học tiếng Hán; 晚上我们去电影院看电影: Tối nay chúng tôi đến rạp để xem phim).",
        "tips": "Động từ đầu tiên thường là 来 (đến), 去 (đi), 到 (đến)."
    },
    # 57
    {
        "category": "special_patterns", "categoryName": "Câu liên động", "categoryIcon": "🚗",
        "titleVi": "Câu liên động 2: Hành động phương thức (Làm gì bằng cách nào)",
        "structure": "Chủ ngữ + 坐/开/骑... (Phương thức) + Động từ 2",
        "explanationVi": "Hành động thứ nhất diễn tả phương tiện hoặc phương thức để thực hiện hành động thứ hai (như 我坐飞机去上海: Tôi đi Thượng Hải bằng máy bay; 爸爸每天开车上班: Bố lái xe đi làm mỗi ngày).",
        "tips": "Phương tiện di chuyển luôn được nói trước hành động đích đến (ngược lại với tiếng Việt: đi Thượng Hải bằng máy bay)."
    },
    # 58
    {
        "category": "special_patterns", "categoryName": "Câu đặc biệt", "categoryIcon": "🎁",
        "titleVi": "Câu hai tân ngữ (Chủ ngữ + Động từ + Tân ngữ gián tiếp + Tân ngữ trực tiếp)",
        "structure": "Chủ ngữ + 给 / 问 / 教... + Người (O1) + Vật/Việc (O2)",
        "explanationVi": "Một số động từ có thể mang liền hai tân ngữ: Tân ngữ 1 chỉ người nhận (gián tiếp), Tân ngữ 2 chỉ sự vật được chuyển giao (trực tiếp) (như 老师给我一本书: Thầy giáo cho tôi một quyển sách; 我问你一个问题: Tôi hỏi bạn một câu hỏi).",
        "tips": "Người nhận luôn đứng trước vật được cho/tặng/hỏi."
    },
    # 59
    {
        "category": "sentence_types", "categoryName": "Câu phức", "categoryIcon": "🔗",
        "titleVi": "Câu phức không dùng từ nối (Hai phân câu liên hệ ý nghĩa)",
        "structure": "Phân câu 1，Phân câu 2",
        "explanationVi": "Hai phân câu đặt cạnh nhau, ngăn cách bằng dấu phẩy mà không cần dùng liên từ nối, người nghe vẫn hiểu được mối quan hệ logic qua ngữ cảnh (như 这是我哥哥，他学习中文; 外面冷，多穿衣服: Bên ngoài lạnh, mặc thêm nhiều áo vào).",
        "tips": "Cách diễn đạt này rất phổ biến trong khẩu ngữ tiếng Trung hàng ngày."
    },
    # 60
    {
        "category": "sentence_types", "categoryName": "Câu phức", "categoryIcon": "🔗",
        "titleVi": "Câu phức đẳng lập với 也 (……，也……)",
        "structure": "Mệnh đề 1，Mệnh đề 2 + 也 + V/Adj",
        "explanationVi": "Dùng để biểu thị hai sự việc hoặc hai đối tượng có cùng chung một tính chất, hành động tương đồng ('cũng') (như 我喜欢唱歌，我弟弟也喜欢唱歌: Tôi thích hát, em trai tôi cũng thích hát; 饺子很好吃，也很便宜: Sủi cảo rất ngon, cũng rất rẻ).",
        "tips": "Phó từ '也' đứng ngay sau chủ ngữ của phân câu thứ hai và trước động từ/tính từ."
    },
    # 61
    {
        "category": "sentence_types", "categoryName": "Câu phức", "categoryIcon": "🔗",
        "titleVi": "Câu phức tăng tiến với 还 (……，还……)",
        "structure": "Mệnh đề 1，(Mệnh đề 2) + 还 + V/Adj",
        "explanationVi": "Biểu thị mức độ tăng tiến hoặc bổ sung thêm thông tin ('lại còn, thêm vào đó') (như 这个房间很大，还很漂亮: Căn phòng này rất rộng, lại còn rất đẹp nữa; 我会说英语，还会说汉语: Tôi biết nói tiếng Anh, lại còn biết nói cả tiếng Hán).",
        "tips": "'还' nhấn mạnh thông tin được thêm vào ngoài những gì đã nêu ở phân câu trước."
    },
    # 62
    {
        "category": "particles_aspects", "categoryName": "Thời thể của động tác", "categoryIcon": "🏁",
        "titleVi": "Thể hoàn thành với trợ từ động thái 了1 (V + 了)",
        "structure": "Động từ + 了 + Số lượng + Danh từ",
        "explanationVi": "Dùng '了1' đặt ngay sau động từ để biểu thị hành động đã hoàn tất trong thực tế, thường có tân ngữ mang số lượng cụ thể (như 你学了多少个汉字?: Bạn đã học bao nhiêu chữ Hán rồi?; 我买了一些苹果: Tôi đã mua một ít táo).",
        "tips": "Khi không có tân ngữ hoặc tân ngữ đơn giản, thường đi kèm với 了2 ở cuối câu."
    },
    # 63
    {
        "category": "particles_aspects", "categoryName": "Thời thể của động tác", "categoryIcon": "🔄",
        "titleVi": "Thể biến đổi trạng thái với trợ từ ngữ khí 了2 (Cuối câu)",
        "structure": "Câu / Tình huống mới + 了",
        "explanationVi": "Đặt ở cuối câu để biểu thị một tình huống mới đã xuất hiện, có sự thay đổi so với trước đây ('đã... rồi') (như 八点了，起床吧: Tám giờ rồi, dậy thôi; 她病了: Cô ấy bị ốm rồi).",
        "tips": "Khác với 了1 (chỉ hành động đã làm xong), 了2 biểu thị tình hình đã đổi khác (như 天气冷了: Trời đã trở lạnh rồi)."
    },
    # 64
    {
        "category": "particles_aspects", "categoryName": "Thời thể của động tác", "categoryIcon": "⏳",
        "titleVi": "Thể đang tiếp diễn: 在 / 正在 + Động từ",
        "structure": "Chủ ngữ + 在 / 正在 + Động từ + (Tân ngữ)",
        "explanationVi": "Dùng phó từ '在' hoặc '正在' trước động từ để biểu thị hành động đang diễn ra tại một thời điểm nhất định ('đang làm gì') (như 同学们正在上课: Các bạn học sinh đang trong giờ học).",
        "tips": "'正在' nhấn mạnh thời điểm chính xác hành động đang xảy ra, '在' nhấn mạnh trạng thái tiếp diễn."
    },
    # 65
    {
        "category": "particles_aspects", "categoryName": "Thời thể của động tác", "categoryIcon": "⏳",
        "titleVi": "Thể đang tiếp diễn kết hợp: 在/正在 + Động từ + 呢",
        "structure": "Chủ ngữ + 在 / 正在 + Động từ + 呢",
        "explanationVi": "Sự kết hợp giữa phó từ '在/正在' ở trước và trợ từ ngữ khí '呢' ở cuối câu giúp câu mang ngữ khí đàm thoại sinh động, biểu thị hành động đang diễn ra một cách mạnh mẽ (như 王老师正在打电话呢: Thầy Vương đang gọi điện thoại đấy).",
        "tips": "Có thể dùng cả cặp '正在……呢' hoặc chỉ dùng một trong hai từ."
    },
    # 66
    {
        "category": "particles_aspects", "categoryName": "Thời thể của động tác", "categoryIcon": "⏳",
        "titleVi": "Thể đang tiếp diễn rút gọn: Động từ + 呢 (ở cuối câu)",
        "structure": "Chủ ngữ + Động từ + (Tân ngữ) + 呢",
        "explanationVi": "Chỉ cần dùng trợ từ ngữ khí '呢' ở cuối câu để báo hiệu hành động đang diễn ra, thường dùng trong câu đáp lại câu hỏi hoặc câu giải thích (như 我没看电视，学习呢: Tôi không xem tivi đâu, đang học bài đấy chứ).",
        "tips": "Cách nói khẩu ngữ rất tự nhiên, ngắn gọn và thân mật của người bản xứ."
    },
    # 67
    {
        "category": "practical_expressions", "categoryName": "Cách nói thực tế", "categoryIcon": "💰",
        "titleVi": "Cách biểu đạt số tiền và giá cả (块, 元, 毛, 角, 分)",
        "structure": "Số từ + 块 / 元 (đồng) + Số từ + 毛 / 角 (hào)",
        "explanationVi": "Cách nói tiền tệ trong tiếng Trung:\n• Khẩu ngữ dùng: 块 (kuài - đồng), 毛 (máo - hào), 分 (fēn - xu).\n• Văn viết dùng: 元 (yuán), 角 (jiǎo), 分 (fēn).\nVí dụ: 这本书二十四块 (Quyển sách này 24 đồng/tệ); 包子三块一个 (Bánh bao 3 đồng một cái).",
        "tips": "Khi số tiền là số chẵn, cuối câu có thể thêm từ '钱' (như 二十四块钱)."
    },
    # 68
    {
        "category": "practical_expressions", "categoryName": "Cách nói thực tế", "categoryIcon": "🥇",
        "titleVi": "Cách biểu đạt số thứ tự (第 + Số từ: 第一, 第二...)",
        "structure": "第 + Số từ + (Lượng từ) + Danh từ",
        "explanationVi": "Để biến số đếm thành số thứ tự, chỉ cần thêm chữ '第' (dì) vào phía trước:\n• 第一 (dì-yī): Thứ nhất, đầu tiên\n• 第二 (dì-èr): Thứ hai\n• 第一课 (dì-yī kè): Bài số 1\n• 第一本书 (dì-yī běn shū): Quyển sách đầu tiên.",
        "tips": "Phân biệt: '两个' (2 cái - số lượng) khác hoàn toàn với '第二个' (cái thứ 2 - thứ tự)."
    },
    # 69
    {
        "category": "practical_expressions", "categoryName": "Cách nói thực tế", "categoryIcon": "📅",
        "titleVi": "Cách nói ngày, tháng, năm và thứ trong tuần",
        "structure": "Năm + 月 (Tháng) + 日/号 (Ngày) + 星期 (Thứ)",
        "explanationVi": "Quy tắc thời gian tiếng Trung luôn đi từ LỚN ĐẾN NHỎ (Năm → Tháng → Ngày → Thứ):\n• Năm: Đọc từng con số một + 年 (như 2022年 đọc là èr líng èr èr nián).\n• Tháng: Số 1 đến 12 + 月 (như 九月: tháng 9).\n• Ngày: Khẩu ngữ dùng 号, văn viết dùng 日 (như 十五号: ngày 15).\n• Thứ: 星期 + 1 đến 6 (Thứ 2 là 星期一... Chủ nhật là 星期天/星期日).",
        "tips": "Lưu ý: Tiếng Trung '星期一' là Thứ Hai trong tiếng Việt (số lệch 1 đơn vị)."
    },
    # 70
    {
        "category": "practical_expressions", "categoryName": "Cách nói thực tế", "categoryIcon": "⏰",
        "titleVi": "Cách biểu đạt giờ giấc (Giờ, Phút, Rưỡi: 点, 分, 半)",
        "structure": "Số giờ + 点 (Giờ) + (Số phút + 分) | Số giờ + 点半 (Giờ rưỡi)",
        "explanationVi": "Cách nói giờ phút trong tiếng Trung:\n• Giờ đúng: Số + 点 (như 两点: 2 giờ đúng - chú ý dùng 两点 không dùng 二点).\n• Giờ phút: Giờ + 点 + Phút + 分 (như 九点二十: 9 giờ 20 phút).\n• Giờ rưỡi: Giờ + 点半 (như 十点半: 10 giờ rưỡi).\n• Số phút lẻ nhỏ hơn 10 thì chèn thêm '零' (như 七点零五: 7 giờ 05 phút).",
        "tips": "Nhớ dùng '两点' cho 2 giờ, tuyệt đối không nói '二点'."
    }
]

# Now let's combine raw_records and METADATA
ALL_ENRICHED_GRAMMAR = []

for idx, raw in enumerate(raw_records):
    meta = METADATA[idx]
    cases_raw = raw['cases']
    examples = []

    for c in cases_raw:
        py = clean_sentence_pinyin(c)
        vi = TRANSLATIONS.get(c, "")
        if not vi:
            # Fallback search substring or normalize
            for k, v in TRANSLATIONS.items():
                if c.startswith(k) or k.startswith(c):
                    vi = v
                    break
        if not vi:
            print(f"WARNING: missing translation for case '{c}' in item {idx+1}")
            vi = c
        examples.append({
            "chinese": c,
            "pinyin": py,
            "vietnamese": vi
        })

    item_obj = {
        "id": raw["id"],
        "order": idx + 1,
        "category": meta["category"],
        "categoryName": meta["categoryName"],
        "categoryIcon": meta["categoryIcon"],
        "titleVi": meta["titleVi"],
        "titleZh": raw["content"] or raw["grammarDetail"],
        "grammarType": raw["grammarType"],
        "categoryType": raw["categoryType"],
        "grammarDetail": raw["grammarDetail"],
        "structure": meta["structure"],
        "explanationVi": meta["explanationVi"],
        "tips": meta["tips"],
        "examples": examples
    }
    ALL_ENRICHED_GRAMMAR.append(item_obj)

print(f"Generated {len(ALL_ENRICHED_GRAMMAR)} enriched grammar points.")

# Write to src/data/hsk1GrammarData.ts
ts_code = f"""// src/data/hsk1GrammarData.ts
// Dữ liệu giải thích ngữ pháp HSK 1 chuẩn New HSK 3.0 (70 điểm ngữ pháp)
// Đầy đủ tiêu đề tiếng Việt, công thức cấu trúc, phân loại, giải thích chi tiết, mẹo ghi nhớ và câu ví dụ có Pinyin + Dịch nghĩa.

export interface GrammarExample {{
  chinese: string;
  pinyin: string;
  vietnamese: string;
}}

export interface EnrichedGrammarPoint {{
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
}}

export const HSK1_GRAMMAR_CATEGORIES = [
  {{ id: 'all', name: 'Tất cả ngữ pháp', icon: '🌟' }},
  {{ id: 'verbs', name: 'Động từ & Năng nguyện', icon: '⚡' }},
  {{ id: 'special_patterns', name: 'Cấu trúc câu đặc biệt', icon: '⭐' }},
  {{ id: 'questions', name: 'Các loại câu hỏi', icon: '❓' }},
  {{ id: 'particles_aspects', name: 'Trợ từ & Thời thể', icon: '🎯' }},
  {{ id: 'adverbs', name: 'Phó từ các loại', icon: '🔥' }},
  {{ id: 'pronouns', name: 'Đại từ xưng hô & Chỉ thị', icon: '👤' }},
  {{ id: 'numbers_measures', name: 'Số từ & Lượng từ', icon: '🔢' }},
  {{ id: 'prep_conj', name: 'Giới từ & Liên từ', icon: '🔗' }},
  {{ id: 'sentence_types', name: 'Các kiểu câu cơ bản', icon: '📐' }},
  {{ id: 'phrases_elements', name: 'Cụm từ & Bổ ngữ', icon: '🧩' }},
  {{ id: 'practical_expressions', name: 'Cách nói thực tế', icon: '🕒' }},
  {{ id: 'words', name: 'Tiền tố, Hậu tố & Phương vị', icon: '📍' }}
];

export const HSK1_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = {json.dumps(ALL_ENRICHED_GRAMMAR, ensure_ascii=False, indent=2)};
"""

with open('src/data/hsk1GrammarData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("Saved successfully to src/data/hsk1GrammarData.ts!")
