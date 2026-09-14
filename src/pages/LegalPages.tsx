import React from "react";
import { Link } from "react-router-dom";

function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream px-4 py-10 sm:px-7 sm:py-14">
      <article className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
        <Link to="/" className="text-sm font-semibold text-brand hover:underline">
          ← Về trang chủ
        </Link>
        <h1 className="mt-5 font-display text-3xl font-black text-ink">{title}</h1>
        <p className="mt-2 text-sm text-muted">Cập nhật lần cuối: 14/09/2026</p>
        <div className="mt-8 space-y-7 text-[15px] leading-7 text-ink-2">{children}</div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 font-display text-xl font-bold text-ink">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export const TermsPage: React.FC = () => (
  <LegalLayout title="Điều khoản dịch vụ">
    <Section title="1. Phạm vi dịch vụ">
      <p>
        Hanyu Daily cung cấp nội dung và công cụ hỗ trợ tự học tiếng Trung. Nội dung trên
        website không phải chứng chỉ, kết quả thi chính thức hoặc cam kết về kết quả học tập.
      </p>
    </Section>
    <Section title="2. Tài khoản">
      <p>
        Bạn chịu trách nhiệm giữ bí mật mật khẩu và các hoạt động phát sinh từ tài khoản của
        mình. Không sử dụng tài khoản để phá hoại dịch vụ, giả mạo người khác hoặc can thiệp
        trái phép vào dữ liệu của người học khác.
      </p>
      <p>
        Tài khoản sử dụng tên đăng nhập thay cho email thật nên chức năng tự khôi phục mật khẩu
        hiện chưa khả dụng. Nếu cần hỗ trợ, hãy liên hệ qua trang {" "}
        <Link to="/giao-vien" className="font-semibold text-brand hover:underline">
          Giới thiệu giáo viên
        </Link>.
      </p>
    </Section>
    <Section title="3. Tiến độ và bảng xếp hạng">
      <p>
        Điểm và thống kê được hệ thống tính từ tiến độ đã đồng bộ. Đây là công cụ tạo động lực
        học tập, không phải kết quả thi có giám sát và không nên dùng để trao thưởng có giá trị.
      </p>
    </Section>
    <Section title="4. Nội dung và quyền sử dụng">
      <p>
        Bạn chỉ được sử dụng dịch vụ cho mục đích cá nhân, hợp pháp. Dữ liệu từ vựng và tài
        nguyên của bên thứ ba tiếp tục tuân theo giấy phép và thông tin ghi nguồn được công bố
        trong website.
      </p>
    </Section>
    <Section title="5. Thay đổi và gián đoạn">
      <p>
        Dịch vụ có thể được cập nhật, tạm dừng hoặc thay đổi để bảo trì và cải thiện. Chúng tôi
        sẽ cố gắng bảo vệ dữ liệu học tập nhưng bạn nên hiểu rằng dịch vụ trực tuyến không thể
        được đảm bảo hoạt động liên tục trong mọi tình huống.
      </p>
    </Section>
  </LegalLayout>
);

export const PrivacyPage: React.FC = () => (
  <LegalLayout title="Chính sách bảo mật">
    <Section title="1. Dữ liệu được xử lý">
      <p>
        Khi bạn tạo tài khoản, Hanyu Daily lưu tên đăng nhập, tên hiển thị, thời điểm tạo tài
        khoản và, nếu bạn chọn tải lên, ảnh đại diện. Dịch vụ cũng lưu tiến độ học, điểm số và
        phản hồi bạn chủ động gửi.
      </p>
      <p>
        Khi bạn truy cập website, kể cả khi chưa đăng nhập, hệ thống ghi nhận địa chỉ IP, mã khách
        ẩn danh lưu trên trình duyệt, trang đã xem, trang giới thiệu và thông tin kỹ thuật của trình
        duyệt/thiết bị. Nếu đã đăng nhập, lượt truy cập có thể được liên kết với tài khoản của bạn.
      </p>
      <p>
        Mật khẩu được Supabase Auth xử lý; mã nguồn ứng dụng và các bảng dữ liệu công khai không
        lưu mật khẩu của bạn.
      </p>
    </Section>
    <Section title="2. Mục đích sử dụng">
      <p>
        Dữ liệu được dùng để đăng nhập, đồng bộ tiến độ giữa các thiết bị, hiển thị trải nghiệm
        cá nhân, vận hành bảng xếp hạng, thống kê lưu lượng, phát hiện hành vi bất thường và tiếp
        nhận góp ý để cải thiện dịch vụ.
      </p>
    </Section>
    <Section title="3. Dữ liệu công khai">
      <p>
        Tên hiển thị, tên đăng nhập, ảnh đại diện và thống kê học tập có thể xuất hiện công khai
        trên bảng xếp hạng. Email nội bộ dùng cho cơ chế đăng nhập và nội dung phản hồi không
        được hiển thị công khai.
      </p>
    </Section>
    <Section title="4. Lưu trữ và thời hạn lưu giữ">
      <p>
        Trình duyệt sử dụng localStorage để giữ tiến độ, trạng thái game và mã khách ẩn danh trên
        thiết bị. Dữ liệu tài khoản, tiến độ, ảnh đại diện, phản hồi và nhật ký truy cập được lưu
        trên Supabase. Nhật ký truy cập được tự động xóa sau 90 ngày. Website cũng tải phông chữ
        và một số thư viện giao diện từ các CDN bên thứ ba; các nhà cung cấp này có thể nhận thông
        tin kỹ thuật thông thường như địa chỉ IP và chuỗi trình duyệt.
      </p>
    </Section>
    <Section title="5. Lựa chọn của bạn">
      <p>
        Bạn có thể không tải ảnh đại diện và không gửi phản hồi. Bạn cũng có thể xóa dữ liệu cục
        bộ trong cài đặt trình duyệt. Để yêu cầu hỗ trợ truy cập hoặc xóa tài khoản và dữ liệu
        liên quan, hãy liên hệ qua trang {" "}
        <Link to="/giao-vien" className="font-semibold text-brand hover:underline">
          Giới thiệu giáo viên
        </Link>.
      </p>
    </Section>
    <Section title="6. Thay đổi chính sách">
      <p>
        Khi cách dịch vụ xử lý dữ liệu thay đổi đáng kể, nội dung và ngày cập nhật của chính sách
        này sẽ được điều chỉnh trước hoặc cùng thời điểm tính năng mới được đưa vào sử dụng.
      </p>
    </Section>
  </LegalLayout>
);
