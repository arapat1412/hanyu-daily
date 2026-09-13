import { useState, useMemo } from "react";
import { CheckCircle2, Volume2 } from "lucide-react";
import { recordAnswer, recordSkillPractice, speakChinese } from "../lib/hsk";
import {
  buildQuestions,
  matchesPinyin,
  isMeaningEligible,
  isClozeEligible,
  isSentenceScrambleEligible,
  maskVietnameseHint,
  type PracticeMode,
} from "../lib/practice.mjs";
import type { VocabularyWord } from "../types";
import { EmptyState } from "./HskLearning";
import { SentenceScramblePractice } from "./SentenceScramblePractice";
import { WordMatchGame } from "./WordMatchGame";

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
    if (autoStart && words.length > 0 && !["scramble", "matching"].includes(initialMode)) {
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
    () => autoStart && (["scramble", "matching"].includes(initialMode) || initialQuestions.length > 0),
  );
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(() =>
    autoStart && words.length > 0 && initialQuestions.length === 0 && !["scramble", "matching"].includes(initialMode)
      ? "Chưa đủ dữ liệu cho chế độ này. Hãy chọn luyện pinyin hoặc gõ pinyin."
      : "",
  );
  const [retryWrong, setRetryWrong] = useState(false);
  function start(onlyWrong = false) {
    if (mode === "scramble") {
      if (!words.some(isSentenceScrambleEligible)) {
        setError("Chưa đủ câu ví dụ để luyện chế độ sắp xếp câu.");
        return;
      }
      setStarted(true);
      setFinished(false);
      setError("");
      return;
    }
    if (mode === "matching") {
      if (words.filter((w) => !!w.hanzi && !!w.meaning).length < 5) {
        setError("Cần ít nhất 5 từ vựng có nghĩa để kích hoạt nối từ 30s.");
        return;
      }
      setStarted(true);
      setFinished(false);
      setError("");
      return;
    }

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
              [
                "cloze",
                "填",
                "Điền câu ví dụ",
                `${words.filter(isClozeEligible).length}/${words.length} từ có câu ngữ cảnh`,
              ],
              [
                "scramble",
                "序",
                "Sắp xếp câu",
                `${words.filter(isSentenceScrambleEligible).length}/${words.length} từ có câu ví dụ`,
              ],
              [
                "matching",
                "连",
                "Nối từ 30s Blitz",
                `${words.filter((w) => !!w.hanzi && !!w.meaning).length} từ sẵn sàng thử thách phản xạ`,
              ],
            ] as const
          ).map(([key, icon, label, detail]) => (
            <button
              key={key}
              aria-pressed={mode === key}
              disabled={
                (key === "meaning" && !words.some(isMeaningEligible)) ||
                (key === "cloze" && !words.some(isClozeEligible)) ||
                (key === "scramble" && !words.some(isSentenceScrambleEligible)) ||
                (key === "matching" && words.filter((w) => !!w.hanzi && !!w.meaning).length < 5)
              }
              onClick={() => setMode(key)}
              className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition disabled:opacity-40 cursor-pointer ${
                mode === key ? "border-brand bg-tint" : "border-line hover:border-brand/40"
              } ${key === "matching" ? "sm:col-span-2" : ""}`}
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
          nghĩa. Điền câu và sắp xếp câu yêu cầu từ có câu ngữ cảnh mẫu. Nối từ 30s
          rèn luyện phản xạ nhanh với đồng hồ đếm ngược. Sắp xếp câu và nối từ là
          chế độ luyện, không thay đổi điểm bài học. Các chế độ kiểm tra còn lại chỉ
          hoàn thành bài khi kiểm tra toàn bộ từ và đạt ít nhất 80%.
        </p>
        {error && (
          <p role="alert" className="mb-3 text-sm text-red-700">
            {error}
          </p>
        )}
        <button
          onClick={() => start()}
          className="w-full rounded-2xl bg-brand px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-dark cursor-pointer"
        >
          Bắt đầu luyện tập →
        </button>
      </div>
    );

  if (started && mode === "scramble") {
    return (
      <SentenceScramblePractice
        words={words}
        onExit={() => {
          setStarted(false);
          setFinished(false);
        }}
      />
    );
  }

  if (started && mode === "matching") {
    return (
      <WordMatchGame
        words={words}
        onExit={() => {
          setStarted(false);
          setFinished(false);
        }}
      />
    );
  }

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
              className="mt-2 rounded-xl bg-page p-3 text-sm text-left"
            >
              <div className="flex items-center justify-between">
                <span>
                  <span className="font-hanzi font-bold">{q.word.hanzi}</span> —{" "}
                  {q.word.pinyin}
                  {q.word.meaning && ` · ${q.word.meaning}`}
                </span>
                {mode === "cloze" && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Đúng: {q.answer}
                  </span>
                )}
              </div>
              {mode === "cloze" && q.word.exampleSentence && (
                <p className="mt-1 text-xs text-muted font-hanzi">
                  {q.word.exampleSentence.chinese} ({q.word.exampleSentence.vietnamese})
                </p>
              )}
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
      const finalScore = Math.round(
        (results.filter(Boolean).length / questions.length) * 100,
      );
      recordSkillPractice(mode, finalScore);
      if (!retryWrong && questions.length === words.length)
        onComplete?.(finalScore);
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
              : mode === "cloze"
                ? "Đọc câu ví dụ và chọn từ thích hợp điền vào chỗ trống"
                : "Chọn pinyin đúng"}
      </h2>
      <div className="my-8 text-center">
        {mode === "listening" ? (
          <button
            onClick={() => speakChinese(question.word.hanzi, setError)}
            className="mx-auto flex items-center gap-3 rounded-2xl bg-tint px-6 py-4 font-semibold text-brand transition hover:bg-brand/10 active:scale-[0.99]"
          >
            <Volume2 size={30} /> Nghe phát âm
          </button>
        ) : mode === "cloze" ? (
          (() => {
            const sentence = question.word.exampleSentence?.chinese || "";
            const target = question.word.hanzi;
            const segments = target ? sentence.split(target) : [sentence];
            const rawVietnamese = question.word.exampleSentence?.vietnamese || "";
            const hintText = checked
              ? rawVietnamese
              : maskVietnameseHint(rawVietnamese, target, question.word.pinyin);

            return (
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-hanzi leading-relaxed text-ink text-center flex flex-wrap items-center justify-center gap-y-2">
                  {segments.map((seg, i) => (
                    <span key={i} className="contents">
                      <span>{seg}</span>
                      {i < segments.length - 1 && (
                        <span
                          className={`mx-1.5 inline-flex items-center justify-center min-w-[76px] px-3 py-1 rounded-xl border-2 font-bold font-hanzi text-xl sm:text-2xl transition-all ${
                            checked
                              ? correct
                                ? "bg-emerald-100 text-emerald-800 border-emerald-500 shadow-xs"
                                : "bg-red-100 text-red-800 border-red-500 shadow-xs"
                              : answer
                                ? "bg-brand/10 text-brand border-brand font-semibold"
                                : "bg-track/60 border-dashed border-muted/60 text-muted font-normal"
                          }`}
                        >
                          {checked
                            ? (correct ? question.answer : answer || "_____")
                            : answer || "_____"}
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {hintText && (
                  <p className="mt-3 text-sm sm:text-base text-ink/80 italic text-center font-medium bg-page/80 px-4 py-2 rounded-xl border border-line/60 inline-block max-w-lg">
                    “{hintText}”
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => speakChinese(sentence, setError)}
                  className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand/15 active:scale-95 cursor-pointer touch-manipulation"
                  title="Nghe phát âm cả câu ví dụ"
                >
                  <Volume2 size={16} /> Nghe câu ví dụ
                </button>
              </div>
            );
          })()
        ) : (
          <div className="break-all font-hanzi text-5xl text-ink">
            {question.word.hanzi}
          </div>
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
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-colors active:scale-[0.99] touch-manipulation cursor-pointer min-h-[52px] ${
                checked && option === question.answer
                  ? "border-emerald-500 bg-emerald-50"
                  : checked && option === answer
                    ? "border-red-400 bg-red-50"
                    : answer === option
                      ? "border-brand bg-tint"
                      : "border-line hover:bg-page/50"
              }`}
            >
              <span className="text-xs text-muted">
                {String.fromCharCode(65 + i)}
              </span>
              <span
                className={`break-words ${
                  mode === "cloze" ? "font-hanzi text-xl font-bold text-ink" : ""
                }`}
              >
                {option}
              </span>
            </button>
          ))}
        </div>
      )}
      {checked && (
        <div
          role="status"
          className={`mt-5 rounded-2xl p-4.5 text-sm ${
            correct ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <strong className="text-base">{correct ? "Chính xác!" : "Chưa đúng."}</strong>
            {mode === "cloze" && !correct && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-red-200/70 text-red-900">
                Đáp án đúng: <span className="font-hanzi font-bold text-sm">{question.answer}</span>
              </span>
            )}
          </div>
          <p className="mt-1.5">
            <span className="font-hanzi font-bold">{question.word.hanzi}</span> · {question.word.pinyin}
            {question.word.meaning && ` · ${question.word.meaning}`}
          </p>
          {mode !== "cloze" && <p>Đáp án: {question.answer}</p>}
          {mode === "cloze" && question.word.exampleSentence && (
            <div className="mt-2.5 pt-2.5 border-t border-current/15">
              <p className="font-hanzi text-base font-semibold">
                {question.word.exampleSentence.chinese}
              </p>
              {question.word.exampleSentence.pinyin && (
                <p className="font-sans text-xs opacity-75 mt-0.5">
                  {question.word.exampleSentence.pinyin}
                </p>
              )}
              <p className="text-xs opacity-85 mt-0.5">
                {question.word.exampleSentence.vietnamese}
              </p>
            </div>
          )}
          {question.word.meaningStatus === "dictionary" && (
            <p className="mt-2 text-xs opacity-75">
              Nghĩa tham khảo từ CVDICT (Phong Phan / CC-CEDICT), CC BY-SA 4.0.
            </p>
          )}
          {question.word.meaningStatus === "reviewed" && (
            <p className="mt-2 text-xs opacity-75">
              Nghĩa Việt đã rà soát trong dữ liệu Hanyu Daily.
            </p>
          )}
        </div>
      )}
      <button
        disabled={!answer.trim()}
        onClick={checked ? next : check}
        className="mt-6 w-full min-h-[48px] rounded-2xl bg-brand py-3.5 font-bold text-white shadow-sm transition hover:bg-brand-dark active:scale-[0.99] touch-manipulation disabled:opacity-40 flex items-center justify-center"
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
