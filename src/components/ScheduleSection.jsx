import { Clock, BookOpen, Activity } from "lucide-react";

const DayCard = ({ day, date, items, note }) => (
  <div className="rounded-xl border bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <Clock className="h-5 w-5 text-indigo-600" />
    </div>
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
      {items.map((it, idx) => (
        <li key={idx}>{it}</li>
      ))}
    </ul>
    {note && <p className="mt-3 text-sm font-medium text-amber-700">{note}</p>}
  </div>
);

export default function ScheduleSection() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-100 p-2">
            <BookOpen className="h-5 w-5 text-indigo-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pembelajaran yang Akan Dijalani</h2>
            <p className="text-sm text-gray-600">Periode: 10–14 November 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DayCard
            day="Senin"
            date="10 November 2025"
            items={[
              "Bimbingan Konseling – Mengelola Emosi",
              "T2Q – Murajaah dan setoran hafalan",
              "Matematika – Akar persamaan kuadrat (rumus ABC & diskriminan)",
              "IPA – Listrik statis, struktur atom",
              "PAIBP – Praktek penyembelihan hewan qurban",
              "Running Club – Gerak variasi",
            ]}
            note="Kepulangan pukul 16.30 WIB"
          />

          <DayCard
            day="Selasa"
            date="11 November 2025"
            items={[
              "T2Q – Murajaah dan setoran hafalan",
              "English – Writing Informal Letter",
              "Bahasa Indonesia – Menganalisis struktur cerpen",
              "TLiM – Review Habit 1–3",
            ]}
          />

          <DayCard
            day="Rabu"
            date="12 November 2025"
            items={[
              "PJOK – Latihan fisik",
              "T2Q – Murajaah dan setoran hafalan",
              "IPS – Modernisasi dan Westernisasi",
              "BPI – Pendalaman nilai dan akhlak",
            ]}
          />

          <DayCard
            day="Kamis"
            date="13 November 2025"
            items={[
              "T2Q – Murajaah dan setoran hafalan",
              "Pancasila – Keterbukaan informasi publik",
              "English – Writing Formal Letter",
              "Bahasa Indonesia – Menganalisis struktur cerpen",
              "Pramuka – Kolaborasi tim",
            ]}
          />

          <DayCard
            day="Jumat"
            date="14 November 2025"
            items={[
              "KreatiFarm – Pengelolaan maggot",
              "Matematika – Akar persamaan kuadrat",
              "IPA – Listrik statis, struktur atom",
              "Pengembangan Diri – Ekstrakurikuler (Badminton, Futsal, Tataboga)",
            ]}
          />
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <Activity className="mt-0.5 h-5 w-5 text-emerald-700" />
          <p className="text-sm text-emerald-900">
            Area yang masih perlu dikembangkan: Pelaksanaan dan pencatatan Wildly Important Goals (WIGs)
            secara konsisten agar setiap siswa mampu memantau progres diri.
          </p>
        </div>
      </div>
    </section>
  );
}
