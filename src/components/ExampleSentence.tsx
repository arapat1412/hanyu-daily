import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { VocabularyWord } from "../types";
import { splitHighlightedText } from "../lib/examples.mjs";
import { speakChinese } from "../lib/hsk";

function Highlight({ text, target }: { text: string; target: string }) {
  return splitHighlightedText(text, target).map((part, index) =>
    part.highlighted ? (
      <strong
        key={`${index}-${part.text}`}
        className="rounded-sm bg-amber-100 px-0.5 font-black text-ink"
      >
        {part.text}
      </strong>
    ) : (
      <span key={`${index}-${part.text}`}>{part.text}</span>
    ),
  );
}

export default function ExampleSentence({
  word,
  compact = false,
}: {
  word: VocabularyWord;
  compact?: boolean;
}) {
  const [error, setError] = useState("");
  const example = word.exampleSentence;
  if (!example) return null;
  const sourceLabel =
    example.reviewStatus === "reviewed"
      ? "Câu ngữ cảnh · Đã rà soát"
      : example.source === "ai"
        ? "Câu AI · Chờ rà soát"
        : example.source === "dataset"
          ? "Câu corpus · Chờ rà soát"
          : example.source === "generated-template"
            ? "Câu mẫu tự động"
            : "Câu ngữ cảnh";
  return (
    <span
      className={`block rounded-xl border border-amber-100 bg-amber-50/55 text-left leading-relaxed ${
        compact ? "w-full p-3 text-xs" : "mt-3 p-3.5 text-xs"
      }`}
    >
      <span className="mb-1.5 flex items-center justify-between gap-2">
        <span className="font-semibold text-amber-900">Ví dụ</span>
        <span className="flex min-w-0 items-center justify-end gap-2">
          <span className="truncate text-[10px] text-muted">
            {sourceLabel}
          </span>
          <button
            type="button"
            aria-label={`Đọc cả câu ${example.chinese}`}
            title="Đọc toàn bộ câu ví dụ"
            onClick={() => {
              setError("");
              speakChinese(example.chinese, setError);
            }}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-amber-200 bg-white/80 px-2 py-1 text-[10px] font-semibold text-amber-900 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Volume2 size={13} aria-hidden="true" />
            <span className={compact ? "sr-only" : ""}>Nghe câu</span>
          </button>
        </span>
      </span>
      <span
        className={`${compact ? "text-sm" : "text-base"} block font-hanzi text-ink`}
      >
        <Highlight text={example.chinese} target={word.hanzi} />
      </span>
      <span className="mt-1 block font-mono text-brand">
        {example.pinyin}
      </span>
      <span className="mt-1 block text-muted">{example.vietnamese}</span>
      {error && (
        <span role="alert" className="mt-2 block text-[10px] text-red-700">
          {error}
        </span>
      )}
    </span>
  );
}
