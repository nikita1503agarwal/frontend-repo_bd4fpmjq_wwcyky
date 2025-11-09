import HeroSection from "./components/HeroSection";
import ScheduleSection from "./components/ScheduleSection";
import HighlightsSection from "./components/HighlightsSection";
import InfoSection from "./components/InfoSection";

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
        <p>
          Semoga seluruh aktivitas pekan ini menjadi ladang pahala dan sarana pembentukan karakter.
          Hormat kami, Rizki Salami — Wali Kelas 9 SMP Kreativa.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <ScheduleSection />
      <HighlightsSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
