import { CheckCircle2, Trophy, Leaf, Users } from "lucide-react";

const HighlightItem = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className="mt-1 rounded-lg bg-indigo-50 p-2 text-indigo-700">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default function HighlightsSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-gray-900">Perkembangan Pembelajaran</h2>
        <p className="mt-2 text-sm text-gray-600">
          Semangat ini menjadi cermin kedewasaan belajar teman-teman menjelang kelulusan.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <HighlightItem
            icon={CheckCircle2}
            title="Menulis"
            desc="Pembiasaan menulis berkembang baik; siswa proaktif mengungkapkan ide."
          />
          <HighlightItem
            icon={Users}
            title="Aktif & Interaktif"
            desc="Keberanian bertanya, menjawab, dan menyampaikan pendapat meningkat."
          />
          <HighlightItem
            icon={Leaf}
            title="Sinergi & Tanggung Jawab"
            desc="Kolaborasi tim semakin solid; peran di kelas dan organisasi berjalan baik."
          />
          <HighlightItem
            icon={Trophy}
            title="Kedisiplinan & Sikap Hormat"
            desc="Kehadiran tepat waktu, adab pada guru dan adik kelas semakin baik."
          />
        </div>

        <div className="mt-8 rounded-xl border bg-amber-50 p-4 text-amber-900">
          Pelaksanaan dan pencatatan WIGs perlu ditingkatkan agar progres setiap siswa terpantau.
        </div>
      </div>
    </section>
  );
}
