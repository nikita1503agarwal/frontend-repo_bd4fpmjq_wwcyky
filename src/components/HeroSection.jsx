import { CalendarDays, HeartHandshake, Play } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
        {/* Left copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            <CalendarDays className="h-4 w-4" />
            Pekan Pembelajaran 10–14 November 2025
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Semangat, Persaudaraan, dan Pertumbuhan Karakter
          </h1>
          <p className="mt-4 max-w-xl text-gray-600">
            Kata Pengantar Wali Kelas — Menyaksikan pertumbuhan karakter dan semangat belajar
            teman-teman kelas 9 yang luar biasa. Sinergi antara ilmu, iman, dan kepemimpinan
            menjadikan setiap pekan sebagai perjalanan berharga.
          </p>

          <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:inline-grid sm:auto-cols-max sm:grid-flow-col">
            <a
              href="#jadwal"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Lihat Jadwal Pekan Ini
            </a>
            <a
              href="#informasi"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 transition hover:bg-indigo-50"
            >
              <Play className="h-4 w-4" /> Sorotan & Informasi
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-indigo-100 bg-white/70 p-4 backdrop-blur">
            <p className="text-sm text-gray-700">
              Alhamdulillah, puji syukur ke hadirat Allah SWT. Pekan ini, kedewasaan dan tanggung jawab
              tumbuh berkat sinergi guru, siswa, dan dukungan Ayah Bunda.
            </p>
          </div>
        </div>

        {/* Right: Interactive Spline 3D */}
        <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl border bg-white shadow-sm">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            {/* soft glow overlay that won't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-400/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow backdrop-blur">
              <HeartHandshake className="h-4 w-4" />
              Interaktif, Playful, dan Modern — Ajak siswa menjelajah pekan yang seru!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
