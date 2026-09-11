import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, Headphones } from "lucide-react";
import { useHandsFreePlayer } from "../lib/hands-free-context";
import { HSK_LEVELS } from "../data/hskLevels";
import {
  isLevelCode,
  isVocabularyGroupLevel,
  normalizeSearch,
  useExamplesForWords,
  useHskData,
  useProgress,
  type HskData,
} from "../lib/hsk";
import {
  EmptyState,
  GrammarList,
  LocalGrammarNotes,
  LessonCard,
  VocabularyUnitCard,
  LevelShell,
  Pager,
  SearchBox,
  WordCard,
} from "../components/HskLearning";
import { FlashcardModal } from "../components/FlashcardModal";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import { PracticeSession } from "../components/PracticeSession";
import { HskGrammarView } from "../components/HskGrammarView";
import { HskReviewView } from "../components/HskReviewView";
import type { VocabularyWord } from "../types";

export function HskLevelPage() {
  const { code = "", tab: pathTab } = useParams();
  const [params] = useSearchParams();
  const tab = params.get("tab") || pathTab || "overview";
  const { data, error, retry } = useHskData(code);
  if (!isLevelCode(code))
    return (
      <div className="mx-auto max-w-3xl p-8">
        <EmptyState title="Không tìm thấy cấp độ HSK">
          <Link className="text-brand underline" to="/hsk">
            Quay về danh sách HSK
          </Link>
        </EmptyState>
      </div>
    );
  return (
    <LevelShell code={code} tab={tab === "lessons" ? "vocab" : tab}>
      {error ? (
        <EmptyState title={error}>
          <button
            onClick={retry}
            className="mt-3 rounded-xl bg-brand px-4 py-2 text-white"
          >
            Thử lại
          </button>
        </EmptyState>
      ) : !data ? (
        <p role="status" className="rounded-2xl bg-white p-8 text-brand">
          Đang tải dữ liệu {code.toUpperCase()}…
        </p>
      ) : (
        <LevelContent key={`${code}-${tab}`} data={data} tab={tab} />
      )}
    </LevelShell>
  );
}

function LevelContent({ data, tab }: { data: HskData; tab: string }) {
  const level = HSK_LEVELS.find((item) => item.code === data.code)!;
  const vocabularyGroups = isVocabularyGroupLevel(data.code);
  const progress = useProgress();
  const { playWordList } = useHandsFreePlayer();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [unit, setUnit] = useState("all");
  const [page, setPage] = useState(1);
  const [flashWords, setFlashWords] = useState<VocabularyWord[] | null>(null);
  const [stroke, setStroke] = useState<VocabularyWord | null>(null);
  const [practiceWords, setPracticeWords] = useState<VocabularyWord[] | null>(
    null,
  );
  const normalized = normalizeSearch(query);
  const search = (value: string) => {
    setQuery(value);
    setPage(1);
    setPracticeWords(null);
  };
  const filtered = useMemo(
    () =>
      data.words.filter((word) => {
        const text = `${word.hanzi} ${word.pinyin} ${word.meaning} ${(word.definitions || []).join(" ")} ${word.sinoVietnamese || ""}`;
        return (
          normalizeSearch(text).includes(normalized) &&
          (unit === "all" || word.unit === Number(unit)) &&
          (filter === "all" ||
            (filter === "saved" && progress.bookmarks.includes(word.id)) ||
            (filter === "wrong" && progress.mistakes.includes(word.id)) ||
            (filter === "known" && progress.known.includes(word.id)) ||
            (filter === "translated" && !!word.meaning) ||
            (filter === "untranslated" && !word.meaning))
        );
      }),
    [
      data.words,
      normalized,
      unit,
      filter,
      progress.bookmarks,
      progress.mistakes,
      progress.known,
    ],
  );
  const wordPage = Math.min(
    page,
    Math.max(1, Math.ceil(filtered.length / 24)),
  );
  const rawWordBatch = filtered.slice(
    (wordPage - 1) * 24,
    wordPage * 24,
  );
  const wordBatch = useExamplesForWords(data.code, rawWordBatch);
  const completed = data.lessons.filter(
    (lesson) => progress.lessons[lesson.id]?.completed,
  ).length;
  const known = data.words.filter((word) =>
    progress.known.includes(word.id),
  ).length;
  const pending =
    data.lessons.find((lesson) => !progress.lessons[lesson.id]?.completed) ||
    data.lessons[0];
  const grammarFor = (number: number) =>
    data.grammar.filter(
      (_, index) => index % data.lessons.length === number - 1,
    );
  const title =
    tab === "overview"
      ? level.name
      : tab === "vocab" || tab === "lessons"
        ? vocabularyGroups
          ? `Từ vựng ${level.name}`
          : `Bài học ${level.name}`
        : tab === "words"
          ? `Kho từ vựng ${level.name}`
          : tab === "grammar"
            ? `Ngữ pháp ${level.name}`
            : tab === "review"
              ? `Ôn tập ${level.name}`
              : "Đề cương HSK";
  return (
    <>
      <div
        className="relative mb-6 overflow-hidden rounded-3xl p-6 text-white sm:p-8"
        style={{
          background: `linear-gradient(120deg, ${level.badgeColor}, ${level.accentColor})`,
        }}
      >
        <span className="pointer-events-none absolute -right-1 top-0 font-hanzi text-[140px] font-black leading-none text-white/10">
          {tab === "overview" ? "汉语" : "课"}
        </span>
        <span className="relative text-[11px] font-bold uppercase tracking-widest text-white/80">
          HSK 3.0 · Đề cương 2026
        </span>
        <h1 className="relative mt-2 text-3xl font-bold">{title}</h1>
        <p className="relative mt-3 max-w-xl text-sm text-white/85">
          {data.lessons.length} {vocabularyGroups ? "mục" : "bài"} ·{" "}
          {data.words.length.toLocaleString("vi-VN")} từ · {data.grammar.length}{" "}
          mục ngữ pháp
        </p>
        <div className="relative mt-5 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/15 px-3 py-1.5">
            {data.words
              .filter((word) => word.meaning)
              .length.toLocaleString("vi-VN")}
            /{data.words.length.toLocaleString("vi-VN")} từ có nghĩa Việt
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5">
            ✓ {completed}/{data.lessons.length}{" "}
            {vocabularyGroups ? "mục" : "bài"} hoàn thành
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5">
            {known} từ đã nhớ
          </span>
        </div>
      </div>
      {tab === "overview" && (
        <>
          <div className="mb-6 rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted">Bước tiếp theo của bạn</p>
                <h2 className="mt-1 font-bold">{pending.title}</h2>
                {pending.titlePinyin && (
                  <p className="mt-1 font-mono text-xs text-brand">
                    {pending.titlePinyin}
                  </p>
                )}
                {pending.titleVi && (
                  <p className="mt-1 text-sm text-muted">{pending.titleVi}</p>
                )}
              </div>
              <Link
                to={`/lesson/${pending.id}/list`}
                className="shrink-0 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-brand-dark"
              >
                Vào học →
              </Link>
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-track">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${(completed / data.lessons.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "vocab",
                vocabularyGroups ? "词" : "课",
                vocabularyGroups ? "Các mục từ vựng" : "Bài học",
                vocabularyGroups
                  ? "Chọn từng mục 10 từ để học và ôn tập nhanh."
                  : "Từ vựng, ngữ pháp và luyện tập trong từng bài.",
              ],
              [
                "review",
                "词",
                "Ôn tập",
                "Trung tâm luyện tập: Flashcard, luyện nghe, trắc nghiệm Pinyin và củng cố câu sai.",
              ],
              [
                "grammar",
                "语",
                "Ngữ pháp",
                ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6", "hsk7-9"].includes(data.code)
                  ? `${data.grammar.length} mục ngữ pháp chuẩn kèm công thức và giải thích tiếng Việt.`
                  : `${data.grammar.length} mục ngữ pháp và ví dụ nguyên bản.`,
              ],
              [
                "words",
                "字",
                "Kho từ vựng",
                "Tra cứu toàn bộ danh mục từ vựng, nghe phát âm và luyện viết chữ Hán.",
              ],
            ].map(([key, icon, label, description]) => (
              <Link
                key={key}
                to={`/hsk/${data.code}/${key}`}
                className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span className="absolute right-3 top-2 font-hanzi text-7xl text-brand/10">
                  {icon}
                </span>
                <BookOpen className="mb-4 text-gold" size={23} />
                <h2 className="font-bold">{label}</h2>
                <p className="relative my-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-brand">
                  Khám phá <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
      {(tab === "vocab" || tab === "lessons") &&
        (vocabularyGroups ? (
          <>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="border-l-4 border-brand pl-3 text-xl font-bold text-ink">
                  Các mục từ vựng
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Mỗi mục 10 từ · chọn một mục để học và ôn
                </p>
              </div>
              <span className="rounded-full bg-tint px-3 py-1.5 text-xs font-semibold text-brand">
                {data.words.length.toLocaleString("vi-VN")} từ ·{" "}
                {data.lessons.length} mục
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
              {data.lessons.map((lesson) => (
                <VocabularyUnitCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </>
        ) : (() => {
          const lessons = data.lessons.filter(
            (lesson) =>
              normalizeSearch(
                `${lesson.title} ${lesson.titlePinyin || ""} ${lesson.titleVi || ""} ${lesson.subtitle}`,
              ).includes(normalized) &&
              (filter !== "unfinished" ||
                !progress.lessons[lesson.id]?.completed),
          );
          const current = Math.min(
            page,
            Math.max(1, Math.ceil(lessons.length / 18)),
          );
          return (
            <>
              <div className="mb-4 flex flex-wrap gap-3">
                <SearchBox
                  value={query}
                  onChange={search}
                  placeholder="Tìm chủ đề, pinyin hoặc nghĩa Việt..."
                />
                <select
                  aria-label="Lọc tiến độ bài"
                  value={filter}
                  onChange={(event) => {
                    setFilter(event.target.value);
                    setPage(1);
                  }}
                  className="rounded-xl border border-line bg-white px-3 text-sm"
                >
                  <option value="all">Tất cả bài</option>
                  <option value="unfinished">Chưa hoàn thành</option>
                </select>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted">
                {new Set(["hsk1", "hsk2", "hsk3"]).has(data.code)
                  ? "Bài được chia theo chủ đề, tiêu đề và thứ tự từ của giáo trình Meiday. Ngữ pháp đề cương được phân bổ luân phiên để tham khảo."
                  : "Bài tạm được chia theo thứ tự từ trong đề cương. Ngữ pháp được phân bổ luân phiên để tham khảo, chưa ghép theo chủ đề giáo trình."}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {lessons
                  .slice((current - 1) * 18, current * 18)
                  .map((lesson) => (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      grammarCount={grammarFor(lesson.number).length}
                    />
                  ))}
              </div>
              {!lessons.length && (
                <EmptyState title="Không tìm thấy bài phù hợp" />
              )}
              <Pager
                page={current}
                total={lessons.length}
                size={18}
                onChange={setPage}
              />
            </>
          );
        })())}
      {tab === "review" && <HskReviewView data={data} />}
      {tab === "words" &&
        (() => {
          const current = wordPage;
          const batch = wordBatch;
          return (
            <>
              <div className="mb-4 flex flex-wrap gap-3">
                <SearchBox value={query} onChange={search} />
                <select
                  aria-label="Lọc bài"
                  value={unit}
                  onChange={(event) => {
                    setUnit(event.target.value);
                    setPage(1);
                    setPracticeWords(null);
                  }}
                  className="max-w-full rounded-xl border border-line bg-white p-2 text-sm"
                >
                  <option value="all">Tất cả bài</option>
                  {data.lessons.map((lesson) => (
                    <option key={lesson.id} value={lesson.number}>
                      Bài {lesson.number}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  ["all", "Tất cả"],
                  ["saved", "Từ đã lưu"],
                  ["wrong", "Cần ôn lại"],
                  ["known", "Đã nhớ"],
                  ["translated", "Có nghĩa Việt"],
                  ["untranslated", "Chưa có nghĩa Việt"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    aria-pressed={filter === key}
                    onClick={() => {
                      setFilter(key);
                      setPage(1);
                      setPracticeWords(null);
                    }}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold ${filter === key ? "border-brand bg-brand text-white" : "border-line bg-white text-muted"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-4">
                <span className="mr-auto text-xs text-muted">
                  {filtered.length.toLocaleString("vi-VN")} kết quả · Ôn{" "}
                  {batch.length} từ trên trang này
                </span>
                <button
                  disabled={!batch.length}
                  onClick={() => playWordList({ title: `${level.name} - Trang ${current}`, words: batch })}
                  className="flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 px-4 py-2.5 text-xs font-bold text-stone-900 shadow-2xs transition hover:scale-[1.02] active:scale-95 disabled:opacity-40 cursor-pointer"
                  title="Luyện nghe rảnh tay danh sách từ trên trang này"
                >
                  <Headphones size={14} /> Nghe rảnh tay
                </button>
                <button
                  disabled={!batch.length}
                  onClick={() => setFlashWords(batch)}
                  className="flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2.5 text-xs font-bold text-amber-900 shadow-2xs transition hover:bg-amber-100 disabled:opacity-40"
                >
                  <Sparkles size={14} /> Flashcard
                </button>
                <button
                  disabled={!batch.length}
                  onClick={() => setPracticeWords(batch)}
                  className="rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-2xs transition hover:bg-brand-dark disabled:opacity-40"
                >
                  Luyện tập
                </button>
              </div>
              {practiceWords ? (
                <div className="mb-6">
                  <button
                    onClick={() => setPracticeWords(null)}
                    className="mb-4 text-sm font-semibold text-brand"
                  >
                    ← Quay về danh sách từ
                  </button>
                  <PracticeSession
                    key={practiceWords.map((w) => w.id).join(",")}
                    words={practiceWords}
                    pool={data.words}
                  />
                </div>
              ) : (
                <>
                  <div className="grid gap-3 md:grid-cols-2">
                    {batch.map((word) => (
                      <WordCard key={word.id} word={word} onWrite={setStroke} />
                    ))}
                  </div>
                  {!batch.length && (
                    <EmptyState title="Chưa có từ phù hợp">
                      Thử bỏ bộ lọc, thay từ khóa hoặc lưu thêm từ trong bài
                      học.
                    </EmptyState>
                  )}
                  <Pager
                    page={current}
                    total={filtered.length}
                    size={24}
                    onChange={setPage}
                  />
                </>
              )}
            </>
          );
        })()}
      {tab === "grammar" &&
        (() => {
          if (["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6", "hsk7-9"].includes(data.code)) {
            return <HskGrammarView levelCode={data.code} />;
          }
          const items = data.grammar.filter((item) =>
            normalizeSearch(
              `${item.content} ${item.categoryType} ${item.grammarDetail} ${item.cases}`,
            ).includes(normalized),
          );
          const current = Math.min(
            page,
            Math.max(1, Math.ceil(items.length / 20)),
          );
          return (
            <>
              <div className="mb-4">
                <SearchBox
                  value={query}
                  onChange={search}
                  placeholder="Tìm cấu trúc hoặc câu ví dụ tiếng Trung..."
                />
              </div>
              <p className="mb-4 text-xs text-muted">
                Ngữ pháp gốc từ đề cương; mở từng mục để xem ví dụ. Chưa có bản
                giải thích tiếng Việt cho toàn bộ dữ liệu.
              </p>
              <LocalGrammarNotes code={data.code} query={query} />
              <GrammarList
                items={items.slice((current - 1) * 20, current * 20)}
              />
              <Pager
                page={current}
                total={items.length}
                size={20}
                onChange={setPage}
              />
            </>
          );
        })()}
      {tab === "syllabus" && (
        <>
          <div className="mb-4">
            <SearchBox
              value={query}
              onChange={search}
              placeholder="Tìm trong Hán tự, chủ đề và nhiệm vụ..."
            />
          </div>
          <details className="mb-4 rounded-2xl border border-line bg-white p-5">
            <summary className="cursor-pointer font-bold">
              Hán tự ({data.hanzi.length})
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.hanzi
                .filter((item) => item.word.includes(query))
                .map((item, i) => (
                  <span
                    className="rounded-xl border border-line/60 bg-page px-3.5 py-2 font-hanzi text-xl transition hover:bg-tint"
                    key={`${item.word}-${i}`}
                  >
                    {item.word}
                  </span>
                ))}
            </div>
          </details>
          {(["topic", "task"] as const).map((kind) => (
            <details
              key={kind}
              className="mb-4 rounded-2xl border border-line bg-white p-5"
            >
              <summary className="cursor-pointer font-bold">
                {kind === "topic" ? "Chủ đề" : "Nhiệm vụ giao tiếp"} (
                {data[kind].length})
              </summary>
              <div className="mt-4 space-y-3">
                {data[kind]
                  .filter((item) =>
                    normalizeSearch(
                      `${item.level1Content} ${item.level2Content} ${item.level3Content || ""}`,
                    ).includes(normalized),
                  )
                  .map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-page p-4 text-sm leading-relaxed"
                    >
                      <h3 className="font-hanzi font-bold text-brand">
                        {item.level1Content}
                      </h3>
                      <p className="font-hanzi">{item.level2Content}</p>
                      {item.level3Content && (
                        <p className="mt-2 font-hanzi text-muted">
                          {item.level3Content}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </details>
          ))}
        </>
      )}
      {![
        "overview",
        "vocab",
        "lessons",
        "words",
        "grammar",
        "review",
        "syllabus",
      ].includes(tab) && (
        <EmptyState title="Không tìm thấy mục học">
          <Link to={`/hsk/${data.code}`}>Về tổng quan</Link>
        </EmptyState>
      )}
      <FlashcardModal
        isOpen={!!flashWords}
        onClose={() => setFlashWords(null)}
        words={flashWords || []}
        title={`Flashcard ${level.name}`}
      />
      <HanziStrokeModal
        isOpen={!!stroke}
        onClose={() => setStroke(null)}
        word={stroke}
      />
    </>
  );
}
