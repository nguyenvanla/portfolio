import { Mail, Phone, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center border-b border-white/10 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/60">
            Portfolio cá nhân
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Xin chào, tôi là
            <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
              Nguyễn Văn Lá
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
            Tôi là người đam mê thiết kế giao diện và phát triển website.
            Tôi tập trung tạo ra các sản phẩm hiện đại, tối giản,
            tối ưu trải nghiệm người dùng và mang phong cách chuyên nghiệp.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl border border-white/20 bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]">
              Xem dự án
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-white">
              Dự án và sản phẩm
            </h2>

            <p className="mt-4 text-white/60">
              Một số dự án và sản phẩm tôi đã thực hiện
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
              <div className="mb-5 h-52 rounded-2xl bg-white/10" />

              <h3 className="mb-3 text-2xl font-bold">
                UI/UX Design
              </h3>

              <p className="leading-7 text-white/60">
                Thiết kế giao diện portfolio hiện đại bằng React,
                Next.js và Tailwind CSS.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
              <div className="mb-5 h-52 rounded-2xl bg-white/10" />

              <h3 className="mb-3 text-2xl font-bold">
                Website Bán Hàng
              </h3>

              <p className="leading-7 text-white/60">
                Hệ thống bán hàng hiện đại với giao diện tối ưu
                trải nghiệm người dùng.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]">
              <div className="mb-5 h-52 rounded-2xl bg-white/10" />

              <h3 className="mb-3 text-2xl font-bold">
                Quản trị Website
              </h3>

              <p className="leading-7 text-white/60">
                Thiết kế trải nghiệm người dùng hiện đại,
                tối giản và dễ sử dụng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <FileText size={36} />
          </div>

          <h2 className="text-4xl font-bold">
            CV Cá Nhân
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Tải CV để xem thêm về kỹ năng, kinh nghiệm,
            công nghệ sử dụng và các dự án tôi đã thực hiện.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.8)]">
            Tải CV
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">
              Thông tin liên hệ
            </h2>

            <p className="mt-4 text-white/60">
              Hãy kết nối với tôi để cùng tạo ra những sản phẩm tuyệt vời
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black">
                <Mail />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                Email
              </h3>

              <p className="text-white/60">
                nguyenvanla@example.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black">
                <Phone />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                Số điện thoại
              </h3>

              <p className="text-white/60">
                0123 456 789
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

