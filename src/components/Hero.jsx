import { ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";
import ModelCard from "./ModelCard";

export default function Hero() {

  const goToDetector = () => {
    document.getElementById("detector")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-8 lg:px-10 py-24">

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">

        {/* Left Content */}
        <div>

          <div className="inline-flex items-center px-5 py-2 border border-blue-400 rounded-full text-blue-200 mb-10">
            ⚡ NLP · BiLSTM · FastText · Indonesian Language
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15]">
            Hate Speech
            <br />
            Detection on
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Indonesian Social Media
            </span>
          </h1>

         <p className="text-gray-300 mt-8 text-lg lg:text-xl max-w-2xl leading-8">
            HateGuardID merupakan sistem deteksi ujaran kebencian berbasis
            <span className="text-cyan-300 font-semibold"> BiLSTM </span>
            dengan
            <span className="text-cyan-300 font-semibold"> FastText Embedding </span>
            yang dilatih menggunakan
            <span className="text-cyan-300 font-semibold"> 7.434 tweet </span>
            berbahasa Indonesia. Model kami memperoleh
            <span className="text-cyan-300 font-semibold"> akurasi 84.17%</span>
            dalam mengklasifikasikan teks menjadi kategori Hate Speech maupun
            Non Hate Speech.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={goToDetector}
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
              <ArrowRight size={18} />
            </button>

            <button
              onClick={goToDashboard}
              className="border border-blue-400 text-white px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-cyan-300 transition-all duration-300"
            >
              View Dashboard
            </button>

          </div>

          <StatsSection />

        </div>

        {/* Right Content */}
        <ModelCard />

      </div>

    </section>
  );
}