# -*- coding: utf-8 -*-
"""Apply reviewed repairs to Boya example sentences.

The scraped source occasionally contains machine-made placeholders such as
``这个热闹很好``.  Keep the editorial fixes in one place and apply them to both
the CSV source files and the TypeScript data consumed by the application.
"""

from __future__ import annotations

import csv
import json
import re
from pathlib import Path

from pypinyin import Style, lazy_pinyin, load_phrases_dict


ROOT = Path(__file__).resolve().parents[1]


# pypinyin keeps the citation tone for a few very common neutral-tone words.
# These phrase readings match the pronunciation taught in the Boya books.
load_phrases_dict(
    {
        "东西": [["dōng"], ["xi"]],
        "孩子": [["hái"], ["zi"]],
        "妈妈": [["mā"], ["ma"]],
        "妹妹": [["mèi"], ["mei"]],
        "朋友": [["péng"], ["you"]],
        "热闹": [["rè"], ["nao"]],
        "时候": [["shí"], ["hou"]],
        "尾巴": [["wěi"], ["ba"]],
        "衣服": [["yī"], ["fu"]],
        "相处得": [["xiāng"], ["chǔ"], ["de"]],
    }
)


# The keys are stable CSV sequence numbers.  Each replacement was reviewed for
# natural Mandarin, inclusion of the headword, and an accurate Vietnamese
# translation.  Pinyin is regenerated from the reviewed Chinese sentence.
REPAIRS: dict[str, dict[int, tuple[str, str]]] = {
    "boya1": {
        143: ("我每天走路去学校。", "Tôi đi bộ đến trường mỗi ngày."),
        167: ("这位售货员的态度很好。", "Thái độ của nhân viên bán hàng này rất tốt."),
        177: ("这位小姐姓王。", "Cô gái này họ Vương."),
        180: ("我明天要去医院。", "Ngày mai tôi phải đến bệnh viện."),
        215: ("我最喜欢春天这个季节。", "Tôi thích nhất mùa xuân."),
        238: ("我们周末去酒吧听音乐。", "Cuối tuần chúng tôi đến quán bar nghe nhạc."),
        254: ("我下午去商店买东西。", "Buổi chiều tôi đi cửa hàng mua đồ."),
        261: ("我们住在市中心。", "Chúng tôi sống ở trung tâm thành phố."),
        279: ("你喜欢什么颜色？", "Bạn thích màu gì?"),
        330: ("这两本书的内容不同。", "Nội dung của hai quyển sách này khác nhau."),
        354: ("你明天来也行。", "Ngày mai bạn đến cũng được."),
        361: ("我每天坐地铁上班。", "Mỗi ngày tôi đi làm bằng tàu điện ngầm."),
        380: ("今天来上课的人很少。", "Hôm nay có rất ít người đến lớp."),
        389: ("夜市晚上很热闹。", "Chợ đêm rất nhộn nhịp vào buổi tối."),
        409: ("请帮我改一下这个句子。", "Hãy giúp tôi sửa câu này."),
        420: ("我昨晚做梦了。", "Tối qua tôi đã nằm mơ."),
        487: ("今天是星期日。", "Hôm nay là Chủ nhật."),
        512: ("这个学期我选了四门课。", "Học kỳ này tôi đăng ký bốn môn học."),
        514: ("我周末常跟朋友打篮球。", "Cuối tuần tôi thường chơi bóng rổ với bạn bè."),
        516: ("我们中午在食堂吃饭。", "Buổi trưa chúng tôi ăn cơm ở căng tin."),
        517: ("我们周末有一个同学聚会。", "Cuối tuần chúng tôi có một buổi họp mặt bạn học."),
        522: ("那位女生是我的同学。", "Nữ sinh kia là bạn học của tôi."),
        529: ("我在门口等你。", "Tôi đợi bạn ở cửa."),
        539: ("这部电视剧非常受欢迎。", "Bộ phim truyền hình này rất được yêu thích."),
        550: ("我每天早上都跑步。", "Sáng nào tôi cũng chạy bộ."),
        556: ("他干活很有劲儿。", "Anh ấy làm việc rất hăng hái."),
        567: ("假期我们打算去旅行。", "Trong kỳ nghỉ, chúng tôi dự định đi du lịch."),
        589: ("这里的风景很美。", "Phong cảnh ở đây rất đẹp."),
        613: ("我已经做完作业了。", "Tôi đã làm xong bài tập rồi."),
        628: ("路很滑，你慢慢走。", "Đường trơn lắm, bạn đi chậm thôi."),
        639: ("我已经把作业全部做完了。", "Tôi đã làm xong toàn bộ bài tập."),
        646: ("我们明天坐火车去北京。", "Ngày mai chúng tôi đi Bắc Kinh bằng tàu hỏa."),
        664: ("我最喜欢这首歌。", "Tôi thích nhất bài hát này."),
        674: ("我用电脑听光盘里的录音。", "Tôi dùng máy tính nghe bản ghi âm trong đĩa CD."),
    },
    "boya2": {
        6: ("我们坐飞机去北京。", "Chúng tôi đi Bắc Kinh bằng máy bay."),
        21: ("我昨天在路上遇到老师。", "Hôm qua tôi gặp giáo viên trên đường."),
        51: ("他们租了一套公寓。", "Họ đã thuê một căn hộ."),
        63: ("孩子已经会自己穿衣服了。", "Đứa trẻ đã biết tự mặc quần áo."),
        71: ("他住在中国南方。", "Anh ấy sống ở miền Nam Trung Quốc."),
        103: ("书店里有很多种类的书。", "Trong hiệu sách có nhiều loại sách."),
        108: ("中国是亚洲国家。", "Trung Quốc là một quốc gia châu Á."),
        119: ("那位女士是我们的新老师。", "Người phụ nữ kia là giáo viên mới của chúng tôi."),
        207: ("这些柱子支撑着屋顶。", "Những chiếc cột này đỡ mái nhà."),
        222: ("请从这扇门进去。", "Hãy đi vào qua cánh cửa này."),
        236: ("房间里一点儿热气也没有。", "Trong phòng không có chút hơi ấm nào."),
        257: ("一直往东走就到了。", "Cứ đi thẳng về phía đông là tới."),
        274: ("叶子从树上落下来了。", "Lá đã rơi từ trên cây xuống."),
        287: ("这所大学很有名。", "Trường đại học này rất nổi tiếng."),
        304: ("请帮我们拍一张相片。", "Hãy giúp chúng tôi chụp một tấm ảnh."),
        318: ("你明天来也行。", "Ngày mai bạn đến cũng được."),
        340: ("炒菜的时候要放一点儿油。", "Khi xào rau cần cho một chút dầu."),
        350: ("这个面包重五百克。", "Chiếc bánh mì này nặng năm trăm gam."),
        360: ("妈妈让我去商店买酱油。", "Mẹ bảo tôi đến cửa hàng mua nước tương."),
        361: ("这道菜不用放味精。", "Món này không cần cho bột ngọt."),
        366: ("这张纸宽二十厘米。", "Tờ giấy này rộng hai mươi xentimét."),
        377: ("请不要在这里抽烟。", "Xin đừng hút thuốc ở đây."),
        379: ("别弄坏了我的电脑。", "Đừng làm hỏng máy tính của tôi."),
        383: ("这个箱子很重。", "Chiếc va-li này rất nặng."),
        386: ("请把你的地址写在这里。", "Hãy viết địa chỉ của bạn vào đây."),
        399: ("我去药店买感冒药。", "Tôi đến hiệu thuốc mua thuốc cảm."),
        417: ("他喜欢跟外国人交朋友。", "Anh ấy thích kết bạn với người nước ngoài."),
        424: ("三分之一比二分之一小。", "Một phần ba nhỏ hơn một phần hai."),
        434: ("我想了解中国文化。", "Tôi muốn tìm hiểu văn hóa Trung Quốc."),
        456: ("老师进来后，大家停止了说话。", "Sau khi giáo viên bước vào, mọi người ngừng nói chuyện."),
        495: ("他站在路边等车。", "Anh ấy đứng bên đường đợi xe."),
        527: ("这只狗的尾巴很长。", "Đuôi của con chó này rất dài."),
        531: ("老师的话给了我很大启发。", "Lời của giáo viên đã gợi cho tôi nhiều điều."),
        537: ("这个城市有一万多人。", "Thành phố này có hơn mười nghìn người."),
        548: ("请把行李装进箱子里。", "Hãy xếp hành lý vào va-li."),
        557: ("周末我们聚在一起吃饭。", "Cuối tuần chúng tôi tụ tập ăn cơm cùng nhau."),
        587: ("我很怀念小时候的生活。", "Tôi rất nhớ cuộc sống thuở nhỏ."),
        609: ("他在大学学习政治。", "Anh ấy học chính trị ở đại học."),
        677: ("我妹妹打算去欧洲留学。", "Em gái tôi dự định sang châu Âu du học."),
        687: ("春节我们回老家过年。", "Tết đến, chúng tôi về quê ăn Tết."),
        692: ("这篇文章我读了两遍。", "Tôi đã đọc bài văn này hai lần."),
        694: ("政府正在解决这个问题。", "Chính phủ đang giải quyết vấn đề này."),
        701: ("妈妈把洗好的衣服晒在阳台上。", "Mẹ phơi quần áo đã giặt ngoài ban công."),
        708: ("他认识很多外国朋友。", "Anh ấy quen nhiều người bạn nước ngoài."),
        711: ("我被这个故事感动了。", "Tôi đã xúc động trước câu chuyện này."),
        737: ("这种药对退烧很有作用。", "Loại thuốc này có tác dụng hạ sốt."),
        743: ("别开玩笑，我是认真的。", "Đừng đùa, tôi nghiêm túc đấy."),
        765: ("吃完饭，我们接着看电视。", "Ăn cơm xong, chúng tôi xem tiếp tivi."),
        780: ("出国前需要办理护照。", "Trước khi ra nước ngoài cần làm hộ chiếu."),
        785: ("请把桌子擦干净。", "Hãy lau bàn cho sạch."),
        786: ("妈妈抱着孩子回家了。", "Người mẹ bế con về nhà."),
        794: ("请不要用手摸展品。", "Xin đừng dùng tay chạm vào hiện vật."),
        813: ("这是一个很难的选择。", "Đây là một lựa chọn rất khó khăn."),
        815: ("他经历了很多困难。", "Anh ấy đã trải qua nhiều khó khăn."),
        818: ("我几乎每天都去图书馆。", "Hầu như ngày nào tôi cũng đến thư viện."),
        824: ("每个人都有追求幸福的权利。", "Ai cũng có quyền theo đuổi hạnh phúc."),
        831: ("他竟然忘了今天的考试。", "Không ngờ anh ấy quên mất kỳ thi hôm nay."),
        846: ("天渐渐黑了。", "Trời dần tối."),
        848: ("我们和邻居相处得很好。", "Chúng tôi sống rất hòa thuận với hàng xóm."),
        849: ("他们是关系亲密的朋友。", "Họ là những người bạn thân thiết."),
    },
}


def sentence_pinyin(sentence: str) -> str:
    """Return readable tone-marked pinyin while preserving punctuation."""
    raw_tokens = lazy_pinyin(
        sentence,
        style=Style.TONE,
        neutral_tone_with_five=False,
        errors=lambda value: list(value),
    )
    tokens: list[str] = []
    punctuation = {
        "，": ",",
        "。": ".",
        "！": "!",
        "？": "?",
        "；": ";",
        "：": ":",
        "、": ",",
    }
    closing = set("，。！？；：、,.!?;:")
    opening = set("“‘（(")
    for token in raw_tokens:
        if token in closing and tokens:
            tokens[-1] += punctuation.get(token, token)
        elif token in opening:
            tokens.append(token)
        else:
            tokens.append(token)
    result = " ".join(tokens)
    result = re.sub(r"([“‘（(])\s+", r"\1", result)
    for index, char in enumerate(result):
        if char.isalpha():
            result = result[:index] + char.upper() + result[index + 1 :]
            break
    return result


def update_csv(book: str, repairs: dict[int, tuple[str, str]]) -> None:
    path = ROOT / "data" / f"{book}_vocab.csv"
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))
        fieldnames = list(rows[0].keys())

    seen: set[int] = set()
    for row in rows:
        sequence = int(row["STT"])
        if sequence not in repairs:
            continue
        chinese, vietnamese = repairs[sequence]
        if row["Chữ Hán"] not in chinese:
            raise ValueError(
                f"{book} row {sequence}: repaired sentence does not contain {row['Chữ Hán']}"
            )
        row["Ví dụ tiếng Trung"] = chinese
        row["Phiên âm ví dụ"] = sentence_pinyin(chinese)
        row["Dịch ví dụ"] = vietnamese
        seen.add(sequence)

    missing = set(repairs) - seen
    if missing:
        raise ValueError(f"Missing {book} CSV rows: {sorted(missing)}")

    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def update_typescript(book: str, repairs: dict[int, tuple[str, str]]) -> None:
    path = ROOT / "src" / "data" / f"{book}Data.ts"
    source = path.read_text(encoding="utf-8")

    array_name = f"{book.upper()}_VOCABULARY"
    match = re.search(
        rf"(export const {array_name}: BoyaVocabularyWord\[\] = )(\[.*?\]);\n\n/\*\*",
        source,
        re.DOTALL,
    )
    if not match:
        raise ValueError(f"Could not find {array_name} in {path}")

    vocabulary = json.loads(match.group(2))
    by_sequence = {index: word for index, word in enumerate(vocabulary, start=1)}
    for sequence, (chinese, vietnamese) in repairs.items():
        word = by_sequence.get(sequence)
        if word is None:
            raise ValueError(f"Missing {book} TypeScript row {sequence}")
        if word["hanzi"] not in chinese:
            raise ValueError(
                f"{book} row {sequence}: repaired sentence does not contain {word['hanzi']}"
            )
        word["exampleSentence"] = {
            "chinese": chinese,
            "pinyin": sentence_pinyin(chinese),
            "vietnamese": vietnamese,
        }

    rendered = json.dumps(vocabulary, ensure_ascii=False, indent=2)
    updated = source[: match.start(2)] + rendered + source[match.end(2) :]
    path.write_text(updated, encoding="utf-8", newline="\n")


def main() -> None:
    repaired = 0
    for book, repairs in REPAIRS.items():
        update_csv(book, repairs)
        update_typescript(book, repairs)
        repaired += len(repairs)
        print(f"{book}: repaired {len(repairs)} example sentences")
    print(f"Total repaired examples: {repaired}")


if __name__ == "__main__":
    main()
