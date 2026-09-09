import { mkdir, readFile, writeFile } from "node:fs/promises";
import { LEVELS } from "./hsk-core.mjs";

const OUTPUT = "data/hsk-example-generation-batches.jsonl";
const instruction = `Bạn là biên tập viên giáo trình HSK cho người Việt. Với mỗi mục từ, hãy viết đúng một câu tiếng Trung tự nhiên thể hiện đúng nghĩa của từ trong ngữ cảnh đời sống hoặc công việc. Không giải thích từ, không đặt từ trong ngoặc kép, không dùng khung kiểu “这个词的意思是”. Câu HSK 1–3 phải ngắn và dùng từ dễ; HSK 4–6 vừa phải; HSK 7–9 có thể dùng ngữ cảnh học thuật/chuyên môn. Mỗi câu trong cùng lô phải có tình huống và cấu trúc khác nhau. Trả về JSON array, mỗi phần tử chỉ có id, chinese, vietnamese. chinese phải chứa nguyên văn hanzi; vietnamese phải dịch đúng toàn câu.`;

async function main() {
  await mkdir("data", { recursive: true });
  const lines = [];
  let total = 0;
  for (const code of LEVELS) {
    const data = JSON.parse(
      await readFile(`public/data/hsk/${code}.json`, "utf8"),
    );
    const annotations = JSON.parse(
      await readFile(`public/data/hsk-annotations/${code}.json`, "utf8"),
    ).annotations;
    const byId = new Map(data.words.map((word) => [word.id, word]));
    for (const lesson of data.lessons) {
      const words = lesson.wordIds.map((id) => {
        const word = byId.get(id);
        return {
          id,
          hanzi: word.hanzi,
          pinyin: word.pinyin,
          partOfSpeech: word.partOfSpeech || "",
          meaning: annotations[id]?.meaning || "",
        };
      });
      lines.push(
        JSON.stringify({
          batchId: lesson.id,
          code,
          unit: lesson.number,
          instruction,
          words,
          outputSchema: [
            { id: "hsk30-1", chinese: "…", vietnamese: "…" },
          ],
        }),
      );
      total += words.length;
    }
  }
  await writeFile(OUTPUT, `${lines.join("\n")}\n`);
  console.error(
    `Prepared ${lines.length} lesson batches covering ${total.toLocaleString("en-US")} words at ${OUTPUT}.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
