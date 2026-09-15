import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_DESCRIPTION =
  "Học tiếng Trung New HSK 3.0 với từ vựng, ngữ pháp, luyện tập và trò chơi văn hóa mỗi ngày.";

function metadataFor(pathname: string) {
  if (pathname === "/")
    return { title: "Hanyu Daily — 泡菜学汉语 | Kim Chi học tiếng Trung", description: DEFAULT_DESCRIPTION };
  if (pathname === "/hsk")
    return { title: "Lộ trình New HSK 3.0 | Hanyu Daily", description: "Khám phá lộ trình New HSK 3.0 từ cấp 1 đến cấp 9 với 11.000 từ vựng." };
  if (pathname === "/boya")
    return { title: "Tủ Sách Giáo Trình Hán Ngữ Boya (博雅汉语) | Hanyu Daily", description: "Trọn bộ Giáo trình Hán ngữ Boya từ Sơ cấp đến Cao cấp. Tra cứu từ vựng, phát âm, flashcard và bài tập tương tác." };
  if (pathname.startsWith("/boya/so-cap-2"))
    return { title: "Giáo trình Boya Sơ cấp 2 (初级起步篇 II) | Hanyu Daily", description: "Tổng hợp toàn bộ 864 từ vựng Giáo trình Hán ngữ Boya sơ cấp 2 với 25 bài học, phát âm, flashcard và bài tập trắc nghiệm." };
  if (pathname.startsWith("/boya/"))
    return { title: "Giáo trình Boya Sơ cấp 1 (初级起步篇 I) | Hanyu Daily", description: "Tổng hợp toàn bộ 678 từ vựng Giáo trình Hán ngữ Boya sơ cấp 1 với 30 bài học, phát âm, flashcard và bài tập trắc nghiệm." };
  if (pathname.startsWith("/hsk/"))
    return { title: "Học New HSK 3.0 | Hanyu Daily", description: "Từ vựng, ngữ pháp, flashcard và bài luyện tập New HSK 3.0." };
  if (pathname.startsWith("/lesson/"))
    return { title: "Bài học tiếng Trung | Hanyu Daily", description: "Bài học tiếng Trung với từ vựng, ví dụ, luyện nghe và kiểm tra tiến độ." };
  if (pathname.startsWith("/kham-pha/tho-duong"))
    return { title: "Đường Thi Tuyển Tập | Hanyu Daily", description: "Đắm mình trong thi họa cổ phong Đường thi, ngâm thơ chuẩn, bản dịch thơ kinh điển và thử thách thi ca." };
  if (pathname.startsWith("/kham-pha/thanh-ngu-dien-co"))
    return { title: "Điển Cố & Thành Ngữ Trung Hoa | Hanyu Daily", description: "Học thành ngữ tiếng Trung qua các câu chuyện ngụ ngôn và điển tích lịch sử kinh điển kèm mini quiz." };
  if (pathname.startsWith("/kham-pha/van-hoa-trung-quoc"))
    return { title: "1000 câu hỏi Văn hóa Trung Quốc | Hanyu Daily", description: "Học lịch sử, văn học, nghệ thuật, khoa học và đời sống Trung Quốc qua trò chơi có thưởng XP." };
  if (pathname.startsWith("/yct"))
    return { title: "Tủ Sách Tiếng Trung Thiếu Nhi YCT (1 – 6) | Hanyu Daily", description: "Giáo trình tiếng Trung thiếu nhi chuẩn quốc tế Youth Chinese Test (YCT 1 – 6) với hình ảnh minh họa, phát âm và PDF sách." };
  if (pathname === "/giao-trinh")
    return { title: "Bộ Giáo Trình Tiếng Trung Chuẩn (Boya & YCT) | Hanyu Daily", description: "Hệ thống tủ sách giáo trình tiếng Trung chuẩn hóa: Hán ngữ Boya và Thiếu nhi YCT." };
  if (pathname === "/xep-hang")
    return { title: "Bảng xếp hạng học tập | Hanyu Daily", description: "Theo dõi tiến độ và duy trì động lực học tiếng Trung cùng cộng đồng Hanyu Daily." };
  if (pathname === "/khoa-hoc")
    return { title: "Khóa học tiếng Trung | Hanyu Daily", description: "Khóa học và tài liệu tiếng Trung do giáo viên Hanyu Daily biên soạn." };
  if (pathname === "/giao-vien")
    return { title: "Giới thiệu giáo viên | Hanyu Daily", description: "Thông tin giáo viên và người biên soạn nội dung tại Hanyu Daily." };
  if (pathname === "/login")
    return { title: "Đăng nhập | Hanyu Daily", description: "Đăng nhập để đồng bộ tiến độ học tiếng Trung." };
  if (pathname === "/register")
    return { title: "Tạo tài khoản | Hanyu Daily", description: "Tạo tài khoản Hanyu Daily để lưu và đồng bộ tiến độ học." };
  if (pathname === "/me")
    return { title: "Tiến độ của tôi | Hanyu Daily", description: "Xem tiến độ, điểm số và từ vựng đã học trên Hanyu Daily." };
  if (pathname === "/dieu-khoan")
    return { title: "Điều khoản dịch vụ | Hanyu Daily", description: "Điều khoản sử dụng website và dịch vụ học tiếng Trung Hanyu Daily." };
  if (pathname === "/chinh-sach-bao-mat")
    return { title: "Chính sách bảo mật | Hanyu Daily", description: "Thông tin về cách Hanyu Daily thu thập, sử dụng và bảo vệ dữ liệu người học." };
  if (pathname === "/admin")
    return { title: "Quản trị | Hanyu Daily", description: "Khu vực quản trị riêng của Hanyu Daily." };
  return { title: "Hanyu Daily — 泡菜学汉语", description: DEFAULT_DESCRIPTION };
}

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
}

export function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = metadataFor(pathname);
    const configuredOrigin = (import.meta.env.VITE_SITE_URL || "").trim().replace(/\/$/, "");
    const origin = configuredOrigin || window.location.origin;
    const canonicalUrl = `${origin}${pathname === "/" ? "/" : pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: `${origin}/pwa-icon-512.png` });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: `${origin}/pwa-icon-512.png` });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: pathname === "/admin" ? "noindex, nofollow, noarchive" : "index, follow",
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
