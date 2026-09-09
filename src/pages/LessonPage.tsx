import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  completeLesson,
  isLevelCode,
  isVocabularyGroupLevel,
  useExamplesForWords,
  useHskData,
  useProgress,
  type HskData,
  type Lesson,
} from "../lib/hsk";
import {
  EmptyState,
  GrammarList,
  LevelShell,
  WordCard,
} from "../components/HskLearning";
import { FlashcardModal } from "../components/FlashcardModal";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import { PracticeSession } from "../components/PracticeSession";
import type { VocabularyWord } from "../types";

export function LessonPage() {
  const { lessonId = "", mode = "list" } = useParams();
  const match = /^(hsk(?:[1-6]|7-9))-(\d+)$/.exec(lessonId);
  const code = match?.[1] || "";
  const { data, error, retry } = useHskData(code);
  if (!isLevelCode(code))
    return (
      <div className="mx-auto max-w-3xl p-8">
        <EmptyState title="Không tìm thấy bài học">
          <Link to="/hsk">Quay lại HSK</Link>
        </EmptyState>
      </div>
    );
  const lesson = data?.lessons.find((item) => item.id === lessonId);
  return (
    <LevelShell code={code} tab="vocab">
      {error ? (
        <EmptyState title={error}>
          <button onClick={retry}>Thử lại</button>
        </EmptyState>
      ) : !data ? (
        <p role="status">Đang tải bài học…</p>
      ) : !lesson ? (
        <EmptyState title="Bài học không tồn tại">
          <Link to={`/hsk/${code}/vocab`}>Quay lại danh sách bài</Link>
        </EmptyState>
      ) : (
        <LessonContent
          key={`${lessonId}-${mode}`}
          data={data}
          lesson={lesson}
          mode={mode}
        />
      )}
    </LevelShell>
  );
}
function LessonContent({
  data,
  lesson,
  mode,
}: {
  data: HskData;
  lesson: Lesson;
  mode: string;
}) {
  const lessonWordPool = new Map(
    [...data.words, ...(data.lessonWords || [])].map((word) => [word.id, word]),
  );
  const lessonWords = lesson.wordIds
    .map((id) => lessonWordPool.get(id))
    .filter((word): word is VocabularyWord => !!word)
    .map((word) => ({ ...word, unit: lesson.number }));
  const words = useExamplesForWords(
    data.code,
    lessonWords,
    [lesson.number],
  );
  const vocabularyGroup = isVocabularyGroupLevel(data.code);
  const [flashOpen, setFlashOpen] = useState(mode === "journey");
  const [stroke, setStroke] = useState<VocabularyWord | null>(null);
  const progress = useProgress();
  const next = data.lessons[lesson.number];
  const previous = data.lessons[lesson.number - 2];
  const grammar = data.grammar.filter(
    (_, index) => index % data.lessons.length === lesson.number - 1,
  );
  return (
    <>
      <Link
        to={`/hsk/${data.code}/vocab`}
        className="mb-4 inline-block text-xs font-semibold text-brand"
      >
        ← {data.code.toUpperCase()} · Danh sách{" "}
        {vocabularyGroup ? "mục từ vựng" : "bài học"}
      </Link>
      <header className="mb-5 rounded-3xl bg-gradient-to-r from-brand-dark to-brand p-6 text-white">
        <p className="text-xs text-white/70">
          {vocabularyGroup ? "MỤC" : "BÀI"} {lesson.number} /{" "}
          {data.lessons.length} · {words.length} TỪ
        </p>
        <h1 className="mt-2 font-hanzi text-2xl font-bold">{lesson.title}</h1>
        {lesson.titlePinyin && (
          <p className="mt-1 font-mono text-sm text-white/90">
            {lesson.titlePinyin}
          </p>
        )}
        {lesson.titleVi && (
          <p className="mt-1 text-sm font-medium text-white">
            {lesson.titleVi}
          </p>
        )}
        <p className="mt-2 text-xs text-white/80">
          {lesson.subtitle}{" "}
          {progress.lessons[lesson.id]?.completed && " · ✓ Đã hoàn thành"}
          {progress.lessons[lesson.id]?.score !== undefined &&
            ` · Điểm cao nhất ${progress.lessons[lesson.id]?.score}%`}
        </p>
      </header>
      <nav aria-label="Nội dung bài học" className="mb-6 flex flex-wrap gap-2">
        {[
          ["list", "📄 Từ vựng"],
          ["grammar", "📘 Ngữ pháp"],
          ["journey", "🎴 Flashcard"],
          ["test", "✏️ Luyện tập"],
        ].map(([key, label]) => (
          <Link
            key={key}
            to={`/lesson/${lesson.id}/${key}`}
            aria-current={mode === key ? "page" : undefined}
            className={`rounded-xl border px-4 py-2.5 text-xs font-bold ${mode === key ? "border-brand bg-brand text-white" : "border-line bg-white text-brand"}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      {(mode === "list" || mode === "journey") && (
        <>
          <div className="grid gap-3 md:grid-cols-2">
            {words.map((word) => (
              <WordCard key={word.id} word={word} onWrite={setStroke} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setFlashOpen(true)}
              className="flex-1 rounded-2xl bg-brand hover:bg-brand-dark px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:scale-[1.01]"
            >
              Bắt đầu học Flashcard →
            </button>
            <button
              onClick={() => completeLesson(lesson.id)}
              disabled={progress.lessons[lesson.id]?.completed}
              className="rounded-2xl border-2 border-brand bg-white px-5 py-3.5 text-sm font-bold text-brand disabled:opacity-50 hover:bg-brand/5 transition-all shadow-xs"
            >
              {progress.lessons[lesson.id]?.completed
                ? "✓ Đã hoàn thành"
                : `Đánh dấu đã học ${vocabularyGroup ? "mục" : "bài"}`}
            </button>
          </div>
          <p className="mt-2 text-xs text-muted">
            “Đánh dấu đã học {vocabularyGroup ? "mục" : "bài"}” là tự xác
            nhận, không phải kết quả kiểm tra.
          </p>
        </>
      )}
      {mode === "grammar" && (
        <>
          <p className="mb-4 text-xs leading-relaxed text-muted">
            {["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6"].includes(data.code)
              ? "Các mục ngữ pháp trọng tâm theo bài học, kèm tiêu đề tiếng Việt, công thức trực quan, giải thích và ví dụ có phiên âm."
              : "Các mục ngữ pháp nguyên bản được phân bổ luân phiên từ đề cương."}
          </p>
          <GrammarList items={grammar} />
        </>
      )}
      {mode === "test" && (
        <PracticeSession
          words={words}
          pool={[...data.words, ...(data.lessonWords || [])]}
          onComplete={(score) => completeLesson(lesson.id, score)}
        />
      )}
      {!["list", "journey", "grammar", "test"].includes(mode) && (
        <EmptyState title="Chế độ học không tồn tại">
          <Link to={`/lesson/${lesson.id}/list`}>Xem từ vựng</Link>
        </EmptyState>
      )}
      <div className="mt-8 flex justify-between items-center gap-3 text-sm font-semibold text-brand">
        {previous ? (
          <Link
            to={`/lesson/${previous.id}/list`}
            className="rounded-xl border border-line bg-white px-4 py-2.5 shadow-xs hover:border-brand transition-colors"
          >
            ← {vocabularyGroup ? "Mục" : "Bài"} {previous.number}
            {!vocabularyGroup && `: ${previous.title}`}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/lesson/${next.id}/list`}
            className="rounded-xl border border-line bg-white px-4 py-2.5 shadow-xs hover:border-brand transition-colors"
          >
            {vocabularyGroup ? "Mục" : "Bài"} {next.number}
            {!vocabularyGroup && `: ${next.title}`} →
          </Link>
        ) : (
          <Link
            to={`/hsk/${data.code}/review`}
            className="rounded-xl border border-line bg-white px-4 py-2.5 shadow-xs hover:border-brand transition-colors"
          >
            Ôn tập cấp độ →
          </Link>
        )}
      </div>
      <FlashcardModal
        isOpen={flashOpen}
        onClose={() => setFlashOpen(false)}
        words={words}
        title={`${data.code.toUpperCase()} · ${vocabularyGroup ? "Mục" : "Bài"} ${lesson.number}`}
      />
      <HanziStrokeModal
        isOpen={!!stroke}
        word={stroke}
        onClose={() => setStroke(null)}
      />
    </>
  );
}
