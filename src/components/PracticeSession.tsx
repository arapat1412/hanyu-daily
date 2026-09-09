import { useState, useMemo } from "react";
import { CheckCircle2, Volume2 } from "lucide-react";
import { recordAnswer, speakChinese } from "../lib/hsk";
import {
  buildQuestions,
  matchesPinyin,
  isMeaningEligible,
  type PracticeMode,
} from "../lib/practice.mjs";
import type { VocabularyWord } from "../types";
import { EmptyState } from "./HskLearning";

export function PracticeSession({
  words,
  pool = words,
  initialMode = "pinyin",
  autoStart = false,
  onComplete,
}: {
  words: VocabularyWord[];
  pool?: VocabularyWord[];
  initialMode?: PracticeMode;
  autoStart?: boolean;
  onComplete?: (score: number) => void;
}) {
  const [mode, setMode] = useState<PracticeMode>(initialMode);
  const initialQuestions = useMemo(() => {
    if (autoStart && words.length > 0) {
      return buildQuestions(words, pool, initialMode);
    }
    return [];
  }, [autoStart, words, pool, initialMode]);

  const [questions, setQuestions] = useState<ReturnType<typeof buildQuestions>>(
    initialQuestions,
  );
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [started, setStarted] = useState(
    () => autoStart && initialQuestions.length > 0,
  );
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(() =>
    autoStart && words.length > 0 && initialQuestions.length === 0
      ? "Chưa đủ dữ liệu cho chế độ này. Hãy chọn luyện pinyin hoặc gõ pinyin."
      : "",
  );
  const [retryWrong, setRetryWrong] = useState(false);
  function start(onlyWrong = false) {
    const selected = onlyWrong
      ? questions.filter((_, i) => !results[i]).map((q) => q.word)
      : words;
    const next = buildQuestions(selected, pool, mode);
    if (!next.length) {
      setError(
        "Chưa đủ dữ liệu cho chế độ này. Hãy chọn luyện pinyin hoặc gõ pinyin.",
      );
      return;
    }
    setQuestions(next);
    setIndex(0);
    setAnswer("");
    setChecked(false);
    setResults([]);
    setStarted(true);
    setFinished(false);
    setError("");
    setRetryWrong(onlyWrong);
  }
  if (words.length === 0)
    return (
      <EmptyState title="Chưa có từ để luyện tập">
        Lưu từ hoặc chọn một bài học trước.
      </EmptyState>
    );
  if (!started)
    return (
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">
          Luyện tập chủ động
        </span>
        <h2 className="mt-2 text-2xl font-bold">Bạn muốn ôn thế nào?</h2>
        <p className="mt-2 text-sm text-muted">
          {words.length} từ trong lượt ôn. Xem đáp án và ôn lại câu sai.
        </p>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {(
            [
              ["pinyin", "拼", "Chọn pinyin", "Nhận diện phiên âm của chữ Hán"],
              [
                "meaning",
                "义",
                "Chọn nghĩa Việt",
                `${words.filter(isMeaningEligible).length}/${words.length} từ đủ dữ liệu luyện nghĩa`,
              ],
              [
                "listening",
                "听",
                "Nghe & chọn chữ",
                "Giọng đọc tiếng Trung của thiết bị",
              ],
              [
                "typing",
                "写",
                "Gõ pinyin",
                "Nhập pinyin có dấu hoặc số thanh điệu",
              ],
            ] as const
          ).map(([key, icon, label, detail]) => (
            <button
              key={key}
              aria-pressed={mode === key}
              disabled={key === "meaning" && !words.some(isMeaningEligible)}
              onClick={() => setMode(key)}
              className={`flex items-center gap-4 rounded-2xl border p-4 text-left disabled:opacity-40 ${mode === key ? "border-brand bg-tint" : "border-line"}`}
            >
              <span className="font-hanzi text-3xl text-brand">{icon}</span>
              <span>
                <strong className="block text-sm">{label}</strong>
                <span className="text-xs text-muted">{detail}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="mb-5 text-xs leading-relaxed text-muted">
          Chọn nghĩa chỉ sử dụng mục đủ dữ liệu; loại các mục đồng tự chưa tách
          nghĩa. Nghĩa CVDICT có hỗ trợ dịch máy, dùng để tham khảo. Nghe yêu
          cầu thiết bị có giọng tiếng Trung. Bài được hoàn thành khi kiểm tra
          toàn bộ từ và đạt ít nhất 80%.
        </p>
        {error && (
          <p role="alert" className="mb-3 text-sm text-red-700">
            {error}
          </p>
        )}
        <button
          onClick={() => start()}
          className="w-full rounded-2xl bg-brand px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-dark"
        >
          Bắt đầu luyện tập →
        </button>
      </div>
    );
  if (finished) {
    const score = Math.round(
      (results.filter(Boolean).length / questions.length) * 100,
    );
    const wrong = results.filter((result) => !result).length;
    return (
      <div className="rounded-3xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
        <h2 className="text-2xl font-bold">Hoàn thành lượt luyện tập</h2>
        <p className="my-4 text-5xl font-bold text-brand">{score}%</p>
        <p className="text-sm text-muted">
          {results.filter(Boolean).length}/{questions.length} câu đúng · {wrong}{" "}
          câu cần ôn lại
        </p>
        {onComplete && (
          <p className="mt-2 text-xs text-muted">
            {retryWrong || questions.length < words.length
              ? "Lượt ôn một phần không thay thế điểm bài đầy đủ."
              : score >= 80
                ? "Đã ghi nhận hoàn thành bài."
                : "Cần đạt ít nhất 80% để hoàn thành bài qua kiểm tra."}
          </p>
        )}
        <div className="my-5 flex flex-wrap justify-center gap-3">
          {wrong > 0 && (
            <button
              onClick={() => start(true)}
              className="rounded-2xl bg-amber-100 px-5 py-3 text-sm font-bold text-amber-900 shadow-2xs transition hover:bg-amber-200"
            >
              Ôn {wrong} câu sai
            </button>
          )}
          <button
            onClick={() => {
              setStarted(false);
              setFinished(false);
            }}
            className="rounded-2xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-2xs transition hover:bg-brand-dark"
          >
            Luyện lại / đổi chế độ
          </button>
        </div>
        {questions
          .filter((_, i) => !results[i])
          .map((q) => (
            <div
              key={q.word.id}
              className="mt-2 rounded-xl bg-page p-3 text-sm"
            >
              <span className="font-hanzi">{q.word.hanzi}</span> —{" "}
              {q.word.pinyin}
              {q.word.meaning && ` · ${q.word.meaning}`}
            </div>
          ))}
      </div>
    );
  }
  const question = questions[index];
  const correct =
    mode === "typing"
      ? matchesPinyin(answer, question.answer)
      : answer === question.answer;
  function check() {
    if (!answer.trim() || checked) return;
    setChecked(true);
    setResults((previous) => [...previous, correct]);
    recordAnswer(question.word.id, correct);
  }
  function next() {
    if (index === questions.length - 1) {
      setFinished(true);
      if (!retryWrong && questions.length === words.length)
        onComplete?.(
          Math.round((results.filter(Boolean).length / questions.length) * 100),
        );
    } else {
      setIndex((i) => i + 1);
      setAnswer("");
      setChecked(false);
      setError("");
    }
  }
  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-line bg-white p-5 sm:p-8">
      <div className="flex justify-between text-xs text-muted">
        <span>
          Câu {index + 1} / {questions.length}
        </span>
        <span>{results.filter(Boolean).length} câu đúng</span>
      </div>
      <div className="my-4 h-1.5 rounded-full bg-track">
        <div
          className="h-full rounded-full bg-gold"
          style={{ width: `${(results.length / questions.length) * 100}%` }}
        />
      </div>
      <h2 className="mb-6 text-center text-sm font-semibold">
        {mode === "listening"
          ? "Nghe và chọn chữ Hán tương ứng"
          : mode === "meaning"
            ? "Chọn nghĩa Việt phù hợp"
            : mode === "typing"
              ? "Nhập pinyin có dấu hoặc số thanh điệu của từ sau"
              : "Chọn pinyin đúng"}
      </h2>
      <div className="my-8 text-center">
        {mode !== "listening" ? (
          <div className="break-all font-hanzi text-5xl text-ink">
            {question.word.hanzi}
          </div>
        ) : (
          <button
            onClick={() => speakChinese(question.word.hanzi, setError)}
            className="mx-auto flex items-center gap-3 rounded-2xl bg-tint px-6 py-4 font-semibold text-brand"
          >
            <Volume2 size={30} /> Nghe phát âm
          </button>
        )}
      </div>
      {error && (
        <p role="alert" className="mb-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {mode === "typing" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (checked) next();
            else check();
          }}
        >
          <input
            autoFocus
            aria-label="Nhập pinyin"
            placeholder="Ví dụ: xuéxí hoặc xue2xi2"
            value={answer}
            disabled={checked}
            onChange={(event) => setAnswer(event.target.value)}
            className="w-full rounded-2xl border border-line p-4 text-center text-xl focus:border-brand focus:outline-none"
          />
          <p className="mt-2 text-center text-xs text-muted">
            Chấp nhận dấu thanh hoặc số thanh điệu, viết liền hay cách âm tiết;
            ví dụ: xuéxí, xue2xi2 hoặc xue2 xi2.
          </p>
        </form>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {question.options.map((option, i) => (
            <button
              key={option}
              disabled={checked}
              onClick={() => setAnswer(option)}
              aria-pressed={answer === option}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-colors ${checked && option === question.answer ? "border-emerald-500 bg-emerald-50" : checked && option === answer ? "border-red-400 bg-red-50" : answer === option ? "border-brand bg-tint" : "border-line hover:bg-page/50"}`}
            >
              <span className="text-xs text-muted">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="break-words">{option}</span>
            </button>
          ))}
        </div>
      )}
      {checked && (
        <div
          role="status"
          className={`mt-5 rounded-2xl p-4.5 text-sm ${correct ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}
        >
          <strong>{correct ? "Chính xác!" : "Chưa đúng."}</strong>
          <p className="mt-1">
            {question.word.hanzi} · {question.word.pinyin}
            {question.word.meaning && ` · ${question.word.meaning}`}
          </p>
          <p>Đáp án: {question.answer}</p>
          {question.word.meaningStatus === "dictionary" && (
            <p className="mt-2 text-xs">
              Nghĩa tham khảo từ CVDICT (Phong Phan / CC-CEDICT), CC BY-SA 4.0.
            </p>
          )}
          {question.word.meaningStatus === "reviewed" && (
            <p className="mt-2 text-xs">
              Nghĩa Việt đã rà soát trong dữ liệu Hanyu Daily.
            </p>
          )}
        </div>
      )}
      <button
        disabled={!answer.trim()}
        onClick={checked ? next : check}
        className="mt-6 w-full rounded-2xl bg-brand py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-40"
      >
        {checked
          ? index === questions.length - 1
            ? "Xem kết quả"
            : "Câu tiếp theo →"
          : "Kiểm tra"}
      </button>
      <button
        onClick={() => setStarted(false)}
        className="mx-auto mt-4 block text-xs text-muted"
      >
        Kết thúc lượt, đổi chế độ
      </button>
    </section>
  );
}
