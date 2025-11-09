import { Info, Quran, Medal, Mountain } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-emerald-100 p-2"><Info className="h-5 w-5 text-emerald-700" /></div>
          <h2 className="text-2xl font-bold text-gray-900">Informasi Khusus & T2Q</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Pengingat Perlengkapan & Tugas</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Senin: IPA latihan gaya Coulomb; bawa pakaian olahraga lengkap; praktik qurban.</li>
              <li>Selasa: English—membawa kamus.</li>
              <li>Rabu: IPS—pengumpulan poster terakhir pukul 20.00 WIB.</li>
              <li>Kamis: Pramuka—sebutkan gunung tertinggi ke-12 di Indonesia.</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Quran className="h-5 w-5 text-emerald-600" />
              <h3 className="font-semibold text-gray-900">T2Q & Tahfidz Al-Qur'an</h3>
            </div>
            <p className="mt-2 text-sm text-gray-700">
              Alhamdulillah, dua ananda lulus hafalan Juz 30:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>Hayyuma Syamsi Sulaiman</li>
              <li>Aiza Aziziah</li>
            </ul>
            <a
              href="https://docs.google.com/spreadsheets/u/0/d/1MGxyGlrCNtJLpYTBJurszF7odhTZ37v/htmlview#gid=2016989662"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-indigo-700 underline"
            >
              Lihat capaian lengkap T2Q
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900">Refleksi Kompetisi & Gathering</h3>
          <p className="mt-2 text-sm text-gray-700">
            Sabtu, 1 November 2025, teman-teman mengikuti Kompetisi Badminton dan Gathering Kelas 9 di Jakarta.
            Mereka menunjukkan semangat juang, sportivitas, dan kekompakan.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            <li>Raqilla Octa Mulia Arienda — Tunggal Putra Remaja</li>
            <li>Arkananta Setyowibowo & Muhammad Ilham Atthabrani — Ganda Putra Remaja</li>
          </ul>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-indigo-50 p-4 text-indigo-900">
              “Kemenangan sejati bukan hanya pada hasil, tetapi pada proses perjuangan yang dijalani dengan ikhlas dan sabar.”
            </div>
            <div className="rounded-lg border bg-emerald-50 p-4 text-emerald-900">
              Kebersamaan saat makan siang dan canda tawa mempererat ukhuwah dan menjadi energi menuju kedewasaan.
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-600 p-6 text-white">
          <div>
            <h3 className="text-lg font-semibold">Pembiasaan Pagi</h3>
            <p className="text-sm opacity-90">Bangun maksimal 04.00, shalat Subuh tepat waktu, rapikan ruang pribadi, dan sarapan sehat.</p>
          </div>
          <Medal className="h-8 w-8 opacity-90" />
        </div>
      </div>
    </section>
  );
}
