import MainLayout from "../layouts/MainLayout";

import {
  GraduationCap,
  Database,
  Calendar,
  Brain,
  BookOpen,
} from "lucide-react";

export default function About() {
  return (
    <MainLayout>
      {/* Workflow */}

<div className="mt-20">

  <div className="text-center">

    <h2 className="text-4xl font-bold">
      Alur Sistem
    </h2>

    <p className="text-gray-500 mt-3">
      Tahapan proses deteksi ujaran kebencian menggunakan metode BiLSTM.
    </p>

  </div>

  <div className="grid md:grid-cols-5 gap-6 mt-12">

    {[
      "Dataset",
      "Preprocessing",
      "FastText",
      "BiLSTM",
      "Prediksi",
    ].map((step, index) => (

      <div
        key={index}
        className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 text-center hover:shadow-lg transition"
      >

        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-blue-700 font-bold text-xl">
          {index + 1}
        </div>

        <h3 className="font-semibold text-lg mt-5">
          {step}
        </h3>

      </div>

    ))}

  </div>

</div>
      <section className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="mb-12">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold tracking-wider">
            ABOUT PROJECT
          </span>

          <h1 className="text-5xl font-bold mt-6">Research & Methodology</h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Gambaran umum mengenai penelitian akademis, penyusunan dataset,
            dan model Deep Learning yang digunakan dalam sistem deteksi ujaran 
            kebencian berbahasa Indonesia ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-blue-100 shadow-sm p-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                <GraduationCap className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-4xl font-bold">Project Overview</h2>

                <p className="text-blue-400">Penelitian Tugas Akhir</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                HateGuardID merupakan aplikasi pendeteksi ujaran kebencian
                berbahasa Indonesia yang dikembangkan sebagai implementasi
                penelitian tugas akhir. Sistem ini memanfaatkan teknologi
                Natural Language Processing (NLP) dan Deep Learning untuk
                mengklasifikasikan teks ke dalam kategori Hate Speech maupun Non
                Hate Speech.
              </p>

              <p>
                Sebelum dilakukan proses klasifikasi, data teks melewati
                beberapa tahapan preprocessing, meliputi case folding, cleaning,
                normalisasi kata, tokenisasi, serta padding sequence.
                Selanjutnya, representasi kata dibentuk menggunakan FastText
                Embedding sebelum diproses oleh model Bidirectional Long
                Short-Term Memory (BiLSTM).
              </p>

              <p>
                Penelitian ini bertujuan untuk mendukung proses moderasi konten
                digital secara otomatis serta membandingkan performa model LSTM
                dan BiLSTM dalam mendeteksi ujaran kebencian pada media sosial
                berbahasa Indonesia.
              </p>
            </div>

            <div className="border-t mt-10 pt-10">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-3">
                    <Calendar className="text-blue-600" />
                  </div>

                  <p className="text-gray-400">Year</p>

                  <h3 className="font-bold text-xl">2025/2026</h3>
                </div>

                <div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-3">
                    <Database className="text-blue-600" />
                  </div>

                  <p className="text-gray-400">Dataset</p>

                  <h3 className="font-bold text-xl">7.434 Tweets</h3>
                </div>

                <div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-3">
                    <Brain className="text-blue-600" />
                  </div>

                  <p className="text-gray-400">Models</p>

                  <h3 className="font-bold text-xl">LSTM & BiLSTM</h3>
                </div>

                <div>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-3">
                    <BookOpen className="text-blue-600" />
                  </div>

                  <p className="text-gray-400">Language</p>

                  <h3 className="font-bold text-xl">Indonesian</h3>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Database className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Dataset Info</h3>

                <p className="text-gray-400">Indonesian tweets corpus</p>
              </div>
            </div>

            <div className="space-y-8">
              <InfoItem
                title="Jumlah Data"
                desc="Tweet berbahasa Indonesia"
                value="7.434"
              />

              <InfoItem
                title="Data Latih"
                desc="80% dari dataset"
                value="5.947"
              />

              <InfoItem
                title="Data Uji"
                desc="20% dari dataset"
                value="1.487"
              />

              <InfoItem
                title="Klasifikasi"
                desc="Hate Speech & Non Hate Speech"
                value="2"
              />

              <InfoItem
                title="Embedding"
                desc="FastText (100 Dimensi)"
                value="100"
              />

              <InfoItem
                title="Model Terbaik"
                desc="Deep Learning"
                value="BiLSTM"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

function InfoItem({ title, desc, value }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-5">
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>

        <p className="text-gray-400 text-sm">{desc}</p>
      </div>

      <span className="font-bold text-blue-600 text-xl">{value}</span>
    </div>
  );
}
