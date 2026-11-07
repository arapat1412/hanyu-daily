import syllabus from "../data/hsk1SyllabusVi.json";
import { normalizeSearch } from "../lib/hsk";

export function Hsk1SyllabusSections({ query }: { query: string }) {
  const normalized = normalizeSearch(query);
  const matches = (...values: string[]) =>
    normalizeSearch(values.join(" ")).includes(normalized);
  const categories = [...new Set(syllabus.topics.map((item) => item.categoryZh))];
  const topics = syllabus.topics.filter((item) =>
    matches(
      item.categoryZh, item.categoryVi, item.subcategoryZh,
      item.subcategoryVi, item.descriptionZh, item.descriptionVi,
    ),
  );
  const tasks = syllabus.tasks.map((task) => ({
    ...task,
    descriptors: task.descriptors.filter((item) =>
      matches(task.titleZh, task.titleVi, item.zh, item.vi),
    ),
  })).filter((task) => task.descriptors.length > 0);
  const taskCount = tasks.reduce((total, task) => total + task.descriptors.length, 0);
  const totalTasks = syllabus.tasks.reduce((total, task) => total + task.descriptors.length, 0);

  return (
    <>
      <details
        key={`topics-${Boolean(normalized)}`}
        open={normalized ? true : undefined}
        className="mb-4 rounded-2xl border border-line bg-white p-5"
      >
        <summary className="cursor-pointer font-bold">
          Chủ đề ({syllabus.topics.length})
        </summary>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          30 chủ đề cụ thể, thuộc 15 chủ đề nhánh và 5 nhóm lớn theo đề cương.
          Bản tiếng Việt đi kèm nguyên văn tiếng Trung để đối chiếu.
        </p>
        {normalized && (
          <p role="status" className="mt-3 text-sm font-semibold text-brand">
            Tìm thấy {topics.length}/{syllabus.topics.length} chủ đề.
          </p>
        )}
        <div className="mt-5 space-y-6">
          {categories.map((category) => {
            const items = topics.filter((item) => item.categoryZh === category);
            if (!items.length) return null;
            return (
              <section key={category} aria-label={items[0].categoryVi}>
                <h3 className="font-bold text-ink">
                  {items[0].categoryVi}
                  <span className="ml-2 font-hanzi text-sm font-normal text-muted">
                    {category}
                  </span>
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <article key={item.descriptionZh} className="rounded-xl bg-page p-4 text-sm leading-relaxed">
                      <h4 className="font-bold text-brand">{item.subcategoryVi}</h4>
                      <p className="mt-1 text-ink">{item.descriptionVi}</p>
                      <p lang="zh-CN" className="mt-2 font-hanzi text-muted">
                        {item.subcategoryZh} · {item.descriptionZh}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
          {!topics.length && (
            <p className="text-sm text-muted">Không có chủ đề phù hợp. Hãy thử từ khóa khác.</p>
          )}
        </div>
      </details>

      <details
        key={`tasks-${Boolean(normalized)}`}
        open={normalized ? true : undefined}
        className="mb-4 rounded-2xl border border-line bg-white p-5"
      >
        <summary className="cursor-pointer font-bold">
          Nhiệm vụ giao tiếp ({totalTasks})
        </summary>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          15 nhóm nhiệm vụ gồm 59 mô tả những việc người học cần làm được.
          Mở từng nhóm để đọc yêu cầu bằng tiếng Việt và đối chiếu nguyên văn.
        </p>
        {normalized && (
          <p role="status" className="mt-3 text-sm font-semibold text-brand">
            Tìm thấy {taskCount}/{totalTasks} mô tả trong {tasks.length} nhóm nhiệm vụ.
          </p>
        )}
        <div className="mt-5 space-y-3">
          {tasks.map((task) => (
            <details
              key={`${task.titleZh}-${Boolean(normalized)}`}
              open={normalized ? true : undefined}
              className="rounded-xl border border-line bg-page p-4"
            >
              <summary className="cursor-pointer text-sm font-bold leading-relaxed text-brand">
                {syllabus.tasks.findIndex((item) => item.titleZh === task.titleZh) + 1}. {task.titleVi}
                <span className="ml-2 font-normal text-muted">({task.descriptors.length} mô tả)</span>
              </summary>
              <p lang="zh-CN" className="mt-2 font-hanzi text-sm text-muted">{task.titleZh}</p>
              <ul className="mt-4 space-y-3">
                {task.descriptors.map((item) => (
                  <li key={item.zh} className="rounded-xl border border-line/60 bg-white p-4 text-sm leading-relaxed">
                    <p className="text-ink">{item.vi}</p>
                    <details className="mt-3 text-muted">
                      <summary className="cursor-pointer text-xs font-semibold text-brand">
                        Nguyên văn tiếng Trung
                      </summary>
                      <p lang="zh-CN" className="mt-2 font-hanzi text-sm leading-relaxed">{item.zh}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          {!tasks.length && (
            <p className="text-sm text-muted">Không có nhiệm vụ phù hợp. Hãy thử từ khóa khác.</p>
          )}
        </div>
      </details>

      <aside className="rounded-2xl border border-line bg-white p-5 text-xs leading-relaxed text-muted" aria-label="Nguồn đề cương HSK 1">
        <p className="font-bold text-ink">Nguồn chủ đề và nhiệm vụ HSK 1</p>
        <p className="mt-2">
          {syllabus.source.title}, {syllabus.source.publisher}, phát hành tháng 11/2025.
          Nhiệm vụ: trang in {syllabus.source.taskPrintedPages}; chủ đề: trang in {syllabus.source.topicPrintedPages}.
          Đối chiếu ngày 29/10/2026.
        </p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          <a className="font-semibold text-brand underline" href={syllabus.source.officialPage} target="_blank" rel="noreferrer">Trang HSK chính thức</a>
          <a className="font-semibold text-brand underline" href={`${syllabus.source.url}#page=${syllabus.source.topicPdfPage}`} target="_blank" rel="noreferrer">PDF phần chủ đề</a>
          <a className="font-semibold text-brand underline" href={`${syllabus.source.url}#page=${syllabus.source.taskPdfPage}`} target="_blank" rel="noreferrer">PDF phần nhiệm vụ</a>
        </div>
        <p className="mt-2">{syllabus.source.translationNote}</p>
      </aside>
    </>
  );
}
