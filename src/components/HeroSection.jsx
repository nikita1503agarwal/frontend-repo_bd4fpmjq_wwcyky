import { CalendarDays, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              <CalendarDays className="h-4 w-4" />
              Pekan Pembelajaran 10–14 November 2025
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Semangat, Persaudaraan, dan Pertumbuhan Karakter
            </h1>
            <p className="mt-4 max-w-2xl text-gray-600">
              Kata Pengantar Wali Kelas — Sebagai wali kelas, saya bersyukur dapat terus
              menyaksikan pertumbuhan karakter dan semangat belajar teman-teman kelas 9 yang
              luar biasa. Sinergi antara ilmu, iman, dan kepemimpinan menjadikan setiap pekan
              sebagai perjalanan berharga.
            </p>
            <div className="mt-6 rounded-xl border border-indigo-100 bg-white/70 p-4 backdrop-blur">
              <p className="text-sm text-gray-700">
                Alhamdulillah, puji syukur kita panjatkan ke hadirat Allah SWT atas rahmat dan
                nikmat-Nya. Pekan ini teman-teman kelas 9 menunjukkan semangat belajar dan
                karakter yang semakin matang, baik dalam akademik maupun kepemimpinan. Sinergi
                antara guru, siswa, dan dukungan Ayah Bunda menjadi kunci tumbuhnya kedewasaan
                dan tanggung jawab.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-emerald-400/10 to-yellow-400/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow backdrop-blur">
                  <HeartHandshake className="h-4 w-4" />
                  Momen kolaborasi & semangat belajar kelas 9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
