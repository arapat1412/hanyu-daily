import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Search,
  Volume2,
} from "lucide-react";
import { HSK_LEVELS } from "../data/hskLevels";
import { SAMPLE_GRAMMAR } from "../data/grammarPoints";
import { HSK1_ENRICHED_GRAMMAR } from "../data/hsk1GrammarData";
import { HSK2_ENRICHED_GRAMMAR } from "../data/hsk2GrammarData";
import { HSK3_ENRICHED_GRAMMAR } from "../data/hsk3GrammarData";
import { HSK4_ENRICHED_GRAMMAR } from "../data/hsk4GrammarData";
import { HSK5_ENRICHED_GRAMMAR } from "../data/hsk5GrammarData";
import { HSK6_ENRICHED_GRAMMAR } from "../data/hsk6GrammarData";
import { HSK79_ENRICHED_GRAMMAR } from "../data/hsk79GrammarData";

const ALL_ENRICHED_GRAMMAR = [
  ...HSK1_ENRICHED_GRAMMAR,
  ...HSK2_ENRICHED_GRAMMAR,
  ...HSK3_ENRICHED_GRAMMAR,
  ...HSK4_ENRICHED_GRAMMAR,
  ...HSK5_ENRICHED_GRAMMAR,
  ...HSK6_ENRICHED_GRAMMAR,
  ...HSK79_ENRICHED_GRAMMAR,
];
import {
  manifest,
  enrichment,
  isVocabularyGroupLevel,
  speakChinese,
  toggleBookmark,
  useProgress,
  type Lesson,
  type SyllabusGrammar,
} from "../lib/hsk";
import type { VocabularyWord } from "../types";
import ExampleSentence from "./ExampleSentence";

export function LocalGrammarNotes({
  code,
  query,
}: {
  code: string;
  query: string;
}) {
  const notes = (
    SAMPLE_GRAMMAR[code === "hsk7-9" ? "hsk79" : code] || []
  ).filter(
    (note) =>
      !query ||
      `${note.title} ${note.structure} ${note.explanation}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  if (!notes.length) return null;
  return (
    <details className="mb-5 rounded-2xl border border-brand/20 bg-tint/50 p-5">
      <summary className="cursor-pointer text-sm font-bold text-brand">
        Ghi chú tiếng Việt có sẵn trong dự án ({notes.length})
      </summary>
      <p className="mt-2 text-xs text-muted">
        Nội dung bổ sung, không cộng vào số mục ngữ pháp của đề cương.
      </p>
      {notes.map((note) => (
        <article
          key={note.id}
          className="mt-4 rounded-xl bg-white p-4 text-sm leading-relaxed"
        >
          <h3 className="font-bold">{note.title}</h3>
          <p className="my-2 font-hanzi text-brand">{note.structure}</p>
          <p>{note.explanation}</p>
          {note.examples.map((example, index) => (
            <div key={index} className="mt-3 rounded-xl bg-page p-3.5">
              <p className="font-hanzi">{example.chinese}</p>
              <p className="text-xs font-semibold text-brand">
                {example.pinyin}
              </p>
              <p className="text-xs text-muted">{example.vietnamese}</p>
            </div>
          ))}
        </article>
      ))}
    </details>
  );
}

export function SourceNote() {
  return (
    <details className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-xs leading-relaxed text-slate-500 shadow-xs">
      <summary className="cursor-pointer font-bold text-sky-700 hover:text-sky-800 transition-colors">
        Nguồn dữ liệu & Bản quyền học liệu New HSK 3.0
      </summary>
      <p className="mt-2 text-slate-600">
        Hệ thống 11.000 mục từ vựng và khung ngữ pháp được biên soạn dựa trên đề cương New HSK 3.0 chuẩn hóa bởi Chinese Testing International (CTI), kết hợp dữ liệu mở{" "}
        <a
          className="underline text-sky-600 hover:text-sky-700 font-medium"
          href={manifest.source}
          target="_blank"
          rel="noreferrer"
        >
          profesorm/hsk30
        </a>{" "}
        (CC BY 4.0).
      </p>
      <p className="mt-2 text-slate-600">
        Toàn bộ nội dung bài học, nghĩa tiếng Việt, âm Hán Việt và câu ví dụ ứng dụng giao tiếp do học viện Hanyu Daily rà soát, biên tập và hoàn thiện nhằm phục vụ người học tiếng Trung tại Việt Nam.
      </p>
    </details>
  );
}
export function EmptyState({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-line bg-white p-10 text-center">
      <BookOpen className="mx-auto mb-3 text-brand" />
      <h2 className="font-bold text-ink">{title}</h2>
      <div className="mt-2 text-sm text-muted">{children}</div>
    </div>
  );
}
export function LevelShell({
  code,
  tab,
  children,
}: {
  code: string;
  tab: string;
  children: React.ReactNode;
}) {
  const level = HSK_LEVELS.find((item) => item.code === code)!;
  const progress = useProgress();
  const links = [
    ["overview", "Tổng quan", "🏠"],
    [
      "vocab",
      isVocabularyGroupLevel(code) ? "Các mục từ vựng" : "Bài học",
      isVocabularyGroupLevel(code) ? "📋" : "📚",
    ],
    ["words", "Kho từ vựng", "📋"],
    ["grammar", "Ngữ pháp", "📘"],
    ["review", "Ôn tập", "🔄"],
    ["syllabus", "Đề cương", "📑"],
  ];
  return (
    <div className="min-h-screen bg-page w-full overflow-x-hidden">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[210px_minmax(0,1fr)] min-w-0 w-full">
        <aside className="min-w-0 w-full">
          <Link
            to="/hsk"
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-brand"
          >
            <ArrowLeft size={14} /> Quay lại HSK 3.0
          </Link>
          <div className="rounded-2xl border border-line bg-white p-4 min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold"
                style={{ background: level.badgeBg, color: level.badgeColor }}
              >
                {level.levelNum}
              </span>
              <div>
                <strong>{level.name}</strong>
                <p className="text-xs text-muted">HSK 3.0 · 2026</p>
              </div>
            </div>
            <nav
              aria-label="Điều hướng cấp độ"
              className="flex flex-wrap gap-1.5 lg:flex-col"
            >
              {links.map(([key, label, icon]) => (
                <Link
                  key={key}
                  to={`/hsk/${code}${key === "overview" ? "" : `/${key}`}`}
                  aria-current={tab === key ? "page" : undefined}
                  className={`rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold active:scale-95 touch-manipulation transition-all ${tab === key ? "bg-tint text-brand" : "text-muted hover:bg-page"}`}
                >
                  {icon} {label}
                </Link>
              ))}
            </nav>
            <p className="mt-5 border-t border-line pt-3 text-[11px] leading-relaxed text-muted">
              Tiến độ lưu trên trình duyệt này. Chưa đồng bộ tài khoản.
            </p>
          </div>
          <label className="mt-4 block text-xs text-muted">
            Chuyển cấp độ
            <select
              aria-label="Chuyển cấp độ"
              value={code}
              onChange={(event) => {
                window.location.assign(`/hsk/${event.target.value}`);
              }}
              className="mt-2 w-full rounded-xl border border-line bg-white p-2 text-ink"
            >
              {HSK_LEVELS.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </aside>
        <div className="min-w-0">
          {progress.storageError && (
            <p
              role="alert"
              className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900"
            >
              {progress.storageError}
            </p>
          )}
          {children}
          <SourceNote />
        </div>
      </div>
    </div>
  );
}
export function VocabularyUnitCard({ lesson }: { lesson: Lesson }) {
  const progress = useProgress();
  const known = lesson.wordIds.filter((id) =>
    progress.known.includes(id),
  ).length;
  const completed = progress.lessons[lesson.id]?.completed;
  const bestScore = progress.lessons[lesson.id]?.score;
  const filledStars = completed
    ? 3
    : Math.min(3, Math.floor((known / lesson.wordIds.length) * 3));
  return (
    <Link
      to={`/lesson/${lesson.id}/list`}
      aria-label={`Mục ${lesson.number}, ${lesson.wordIds.length} từ, ${known} từ đã nhớ${bestScore === undefined ? "" : `, điểm cao nhất ${bestScore}%`}`}
      className="group flex min-w-0 items-center gap-2.5 rounded-2xl border border-line bg-white p-3 shadow-xs transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${completed ? "bg-emerald-50 text-emerald-700" : "bg-tint text-brand"}`}
      >
        {completed ? <Check size={18} /> : lesson.number}
      </span>
      <span className="min-w-0">
        <strong className="block truncate text-sm text-ink">
          Mục {lesson.number}
        </strong>
        <span className="block text-xs text-muted">
          {lesson.wordIds.length} từ
          {bestScore !== undefined && ` · ${bestScore}%`}
        </span>
      </span>
      <span
        className="ml-auto shrink-0 text-xs tracking-[-1px]"
        aria-label={`${filledStars} trên 3 sao`}
      >
        {[0, 1, 2].map((star) => (
          <span
            key={star}
            className={star < filledStars ? "text-gold" : "text-line"}
          >
            ★
          </span>
        ))}
      </span>
    </Link>
  );
}
export function LessonCard({
  lesson,
  grammarCount,
}: {
  lesson: Lesson;
  grammarCount: number;
}) {
  const progress = useProgress();
  const complete = progress.lessons[lesson.id]?.completed;
  const bestScore = progress.lessons[lesson.id]?.score;
  const known = lesson.wordIds.filter((id) =>
    progress.known.includes(id),
  ).length;
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${complete ? "bg-emerald-50 text-emerald-700" : "bg-tint text-brand"}`}
        >
          {complete ? <Check size={20} /> : lesson.number}
        </span>
        <div className="min-w-0">
          <h3 className="font-hanzi font-bold text-ink">{lesson.title}</h3>
          {lesson.titlePinyin && (
            <p className="mt-1 font-mono text-xs text-brand">
              {lesson.titlePinyin}
            </p>
          )}
          {lesson.titleVi && (
            <p className="mt-1 text-sm text-muted">{lesson.titleVi}</p>
          )}
          {!lesson.titleVi && (
            <p className="mt-1 text-xs text-muted">{lesson.subtitle}</p>
          )}
        </div>
      </div>
      <div className="mb-3 flex justify-between text-xs text-muted">
        <span>
          {lesson.wordIds.length} từ · {grammarCount} mục ngữ pháp
        </span>
        <span>
          {bestScore === undefined
            ? `${known}/${lesson.wordIds.length} đã nhớ`
            : `Điểm cao nhất: ${bestScore}%`}
        </span>
      </div>
      <div className="mb-4 h-1 overflow-hidden rounded-full bg-track">
        <div
          className="h-full bg-gold"
          style={{ width: `${(known / lesson.wordIds.length) * 100}%` }}
        />
      </div>
      <Link
        to={`/lesson/${lesson.id}/list`}
        className="mb-4 flex items-center justify-between text-sm font-bold text-brand"
      >
        {complete ? "Học lại" : known ? "Học tiếp" : "Bắt đầu"}{" "}
        <ArrowRight size={15} />
      </Link>
      <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-3 text-xs font-bold">
        <Link
          className="flex items-center justify-center rounded-xl bg-tint py-2 text-center text-brand transition-colors hover:bg-brand hover:text-white"
          to={`/lesson/${lesson.id}/list`}
        >
          📄 Từ vựng
        </Link>
        <Link
          className="flex items-center justify-center rounded-xl bg-cream py-2 text-center text-brand transition-colors hover:bg-brand/10 hover:text-brand"
          to={`/lesson/${lesson.id}/grammar`}
        >
          📘 Ngữ pháp
        </Link>
        <Link
          className="flex items-center justify-center rounded-xl bg-amber-50 py-2 text-center text-amber-900 transition-colors hover:bg-amber-100"
          to={`/lesson/${lesson.id}/test`}
        >
          ✏️ Luyện tập
        </Link>
      </div>
    </article>
  );
}
export function SearchBox({
  value,
  onChange,
  placeholder = "Tìm chữ Hán, pinyin không dấu, nghĩa Việt...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative min-w-0 flex-1">
      <Search className="absolute left-3 top-3 text-muted" size={17} />
      <input
        aria-label={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}
export function Pager({
  page,
  total,
  size,
  onChange,
}: {
  page: number;
  total: number;
  size: number;
  onChange: (page: number) => void;
}) {
  const pages = Math.max(1, Math.ceil(total / size));
  if (total === 0) return null;
  return (
    <div className="my-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
      <span>
        Hiển thị {(page - 1) * size + 1}–{Math.min(page * size, total)} /{" "}
        {total.toLocaleString("vi-VN")}
      </span>
      <div className="flex items-center gap-3">
        <button
          aria-label="Trang trước"
          disabled={page <= 1}
          onClick={() => onChange(page - 1)}
          className="rounded-xl border border-line bg-white p-2 transition hover:bg-page disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <label>
          Trang{" "}
          <select
            aria-label="Chọn trang"
            className="rounded-lg border border-line bg-white px-2 py-1"
            value={page}
            onChange={(event) => onChange(Number(event.target.value))}
          >
            {Array.from({ length: pages }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>{" "}
          / {pages}
        </label>
        <button
          aria-label="Trang sau"
          disabled={page >= pages}
          onClick={() => onChange(page + 1)}
          className="rounded-xl border border-line bg-white p-2 transition hover:bg-page disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
export function WordCard({
  word,
  onWrite,
}: {
  word: VocabularyWord;
  onWrite: (word: VocabularyWord) => void;
}) {
  const progress = useProgress();
  const [error, setError] = useState("");
  const saved = progress.bookmarks.includes(word.id);
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <button
          aria-label={`Nghe phát âm ${word.hanzi}`}
          title="Phát âm bằng giọng đọc thiết bị"
          onClick={() => {
            setError("");
            speakChinese(word.hanzi, setError);
          }}
          className="rounded-xl bg-tint/80 p-2.5 text-brand transition hover:bg-tint active:scale-95 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
        >
          <Volume2 size={18} />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <button
              onClick={() => onWrite(word)}
              className="break-all font-hanzi text-2xl text-ink transition hover:text-brand"
              title="Xem nét chữ"
            >
              {word.hanzi}
            </button>
            <span className="text-sm font-semibold text-brand font-mono">
              {word.pinyin}
            </span>
          </div>
          <p
            className={`mt-2 text-sm leading-relaxed ${word.meaning ? "text-ink" : "italic text-muted"}`}
          >
            {word.meaning || "Chưa có nghĩa Việt trong nguồn"}
          </p>
          <span className="mt-2 inline-block rounded-md bg-page px-2 py-0.5 text-[11px] font-medium text-muted">
            {word.partOfSpeech}
          </span>
          {word.sinoVietnamese && (
            <p className="mt-2 text-xs text-muted">
              Hán Việt
              {word.sinoVietnameseMethod === "character-pinyin"
                ? " (ghép từng chữ)"
                : ""}
              : {word.sinoVietnamese}
            </p>
          )}
        </div>
        <button
          aria-label={`${saved ? "Bỏ lưu" : "Lưu"} ${word.hanzi}`}
          aria-pressed={saved}
          onClick={() => toggleBookmark(word.id)}
          className={`rounded-xl border border-line p-2 transition active:scale-95 touch-manipulation min-w-[38px] min-h-[38px] flex items-center justify-center shrink-0 ${saved ? "bg-amber-50 text-amber-600 border-amber-300" : "text-muted hover:bg-page"}`}
        >
          <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <ExampleSentence word={word} />
      {word.dictionary && (
        <details className="mt-3 rounded-xl border border-line bg-page/50 p-3 text-xs leading-relaxed text-muted">
          <summary className="cursor-pointer font-medium text-brand">
            {word.dictionary.source === "editorial"
              ? "Nghĩa đã rà soát · Hanyu Daily"
              : "Nghĩa tham khảo · CVDICT"}
            {word.definitions?.length
              ? ` (${word.definitions.length} nghĩa)`
              : ""}
          </summary>
          {word.dictionary.source === "cvdict" && (
            <p className="mt-2">
              Nguồn có hỗ trợ dịch máy; cách ghép mục từ đã được rà soát cho
              các trường hợp phát âm đặc biệt.
            </p>
          )}
          {word.dictionary.notes && (
            <p className="mt-2 text-amber-800">{word.dictionary.notes}</p>
          )}
          {word.dictionary.match === "sandhi" && (
            <p className="mt-2">
              Đối chiếu có biến điệu 一 / 不; pinyin hiển thị giữ nguyên đề
              cương.
            </p>
          )}
          {word.dictionary.match === "reviewed-pronunciation" && (
            <p className="mt-2">
              Đã đối chiếu khác biệt thanh điệu hoặc âm nhẹ; pinyin hiển thị
              giữ nguyên đề cương.
            </p>
          )}
          <ol className="my-2 list-decimal space-y-1 pl-5 text-ink">
            {word.definitions?.map((definition, index) => (
              <li key={index}>{definition}</li>
            ))}
          </ol>
          <p>Chữ phồn thể: {word.dictionary.traditional.join(" / ")}</p>
          <p>Pinyin từ điển: {word.dictionary.pronunciations.join(" / ")}</p>
          <a
            href={
              word.dictionary.url ||
              (word.dictionary.source === "cvdict"
                ? enrichment.sources.cvdict.url
                : undefined)
            }
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block underline"
          >
            {word.dictionary.source === "cvdict"
              ? "Phong Phan / CC-CEDICT · CC BY-SA 4.0"
              : "Mục từ tiếng Trung dùng để đối chiếu"}
          </a>
        </details>
      )}
      {error && (
        <p role="alert" className="mt-2 text-xs text-red-700">
          {error}
        </p>
      )}
      <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11px] text-muted">
        <span>
          {progress.known.includes(word.id)
            ? "✓ Đã nhớ"
            : `${isVocabularyGroupLevel(word.hskLevel) ? "Mục" : "Bài"} ${word.unit}`}{" "}
          {word.sourceWord !== word.hanzi && word.sourceWord
            ? `· Mục gốc: ${word.sourceWord}`
            : ""}
        </span>
        <button
          onClick={() => onWrite(word)}
          className="flex items-center gap-1 text-brand"
        >
          <PenTool size={12} /> Tập viết
        </button>
      </div>
    </article>
  );
}
export function GrammarList({ items }: { items: SyllabusGrammar[] }) {
  const [error, setError] = useState("");
  return (
    <div className="space-y-3">
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      {items.map((item, i) => {
        const cleanContent = (item.content || "").replace(/\s+/g, "");
        const cleanDetail = (item.grammarDetail || "").replace(/\s+/g, "");

        const enriched = ALL_ENRICHED_GRAMMAR.find((e) => {
          const eZh = (e.titleZh || "").replace(/\s+/g, "");
          const eDetail = (e.grammarDetail || "").replace(/\s+/g, "");
          if (cleanContent && eZh === cleanContent) return true;
          if (cleanContent && (eZh.includes(cleanContent) || cleanContent.includes(eZh))) return true;
          if (cleanDetail && eDetail === cleanDetail && cleanContent === "") return true;
          return false;
        });

        if (enriched) {
          return (
            <details
              key={`${item.content}-${i}`}
              className="rounded-2xl border border-line bg-white p-5 hover:border-brand/30 transition-all group"
            >
              <summary className="cursor-pointer font-bold text-ink flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="inline-flex items-center gap-1 rounded-md bg-tint px-2 py-0.5 text-[11px] font-bold text-brand">
                      <span>{enriched.categoryIcon}</span>
                      <span>{enriched.categoryName}</span>
                    </span>
                    <span className="text-xs font-hanzi text-muted">
                      ({enriched.titleZh})
                    </span>
                  </div>
                  <h4 className="text-base text-ink font-bold group-hover:text-brand transition-colors">
                    {enriched.titleVi}
                  </h4>
                  <div className="mt-1 text-xs text-brand font-mono font-bold">
                    📐 {enriched.structure}
                  </div>
                </div>
              </summary>

              <div className="mt-3.5 space-y-3 pt-3 border-t border-line/60">
                <div className="text-xs sm:text-[13px] text-ink-2 whitespace-pre-line leading-relaxed bg-page p-3.5 rounded-xl border border-line">
                  {enriched.explanationVi}
                </div>

                {enriched.tips && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200/80 p-2.5 text-xs text-amber-900">
                    <span className="font-bold">💡 Lưu ý: </span>
                    {enriched.tips}
                  </div>
                )}

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-ink-2">
                    Ví dụ minh họa ({enriched.examples.length}):
                  </div>
                  {enriched.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="flex items-start justify-between gap-3 rounded-xl bg-white border border-line p-3 hover:border-brand/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <p className="font-hanzi text-sm font-bold text-ink">
                          {ex.chinese}
                        </p>
                        <p className="font-mono text-xs font-bold text-brand">
                          {ex.pinyin}
                        </p>
                        <p className="text-xs text-ink-2">{ex.vietnamese}</p>
                      </div>
                      <button
                        aria-label={`Nghe ví dụ ${exIdx + 1}`}
                        onClick={() => speakChinese(ex.chinese, setError)}
                        className="shrink-0 text-brand p-1.5 hover:bg-tint rounded-lg transition-colors cursor-pointer"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          );
        }

        return (
          <details
            key={`${item.content}-${i}`}
            className="rounded-2xl border border-line bg-white p-5"
          >
            <summary className="cursor-pointer font-semibold text-ink">
              <span className="mr-3 text-xs font-normal text-muted">
                {item.grammarType} · {item.categoryType}
              </span>
              <span className="font-hanzi">
                {item.content || item.grammarDetail}
              </span>
            </summary>
            <p className="my-3 text-xs text-brand">
              {item.grammarDetail} · Nội dung nguyên bản tiếng Trung
            </p>
            <div className="space-y-2">
              {item.cases
                ?.split(/\r?\n/)
                .filter(Boolean)
                .map((example, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-3 rounded-xl bg-page p-3"
                  >
                    <p className="font-hanzi text-sm">{example}</p>
                    <button
                      aria-label={`Nghe ví dụ ${index + 1}`}
                      onClick={() => speakChinese(example, setError)}
                      className="shrink-0 text-brand"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
            </div>
          </details>
        );
      })}
      {items.length === 0 && (
        <EmptyState title="Bài này chưa được phân bổ ngữ pháp">
          Bạn có thể xem toàn bộ ngữ pháp trong mục Ngữ pháp của cấp độ.
        </EmptyState>
      )}
    </div>
  );
}

export function useModalFocus(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(close);
  closeRef.current = close;
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") closeRef.current();
      if (event.key !== "Tab") return;
      const elements = Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], input, select, [tabindex="0"]',
        ) || [],
      );
      const first = elements[0],
        last = elements[elements.length - 1];
      if (!first) {
        event.preventDefault();
        return;
      }
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === ref.current)
      ) {
        event.preventDefault();
        last?.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          document.activeElement === ref.current)
      ) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", keydown);
      previous?.focus();
      window.speechSynthesis?.cancel();
    };
  }, [open]);
  return ref;
}
