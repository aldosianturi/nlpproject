import { Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function Detector() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const examples = [
    "Saya sangat membenci orang-orang dari suku itu, mereka semua sama saja!",
    "Indonesia adalah negara yang indah dengan keberagaman budaya yang luar biasa.",
    "Kaum kafir itu tidak pantas tinggal di sini, usir mereka semua!",
    "Terima kasih atas bantuan yang diberikan kepada masyarakat yang membutuhkan.",
  ];

  const analyzeText = async () => {
    if (!text.trim()) {
      alert("Masukkan teks terlebih dahulu.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          text: text,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Tidak dapat terhubung ke backend.");
    }

    setLoading(false);
  };

  return (
    <section id="detector" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold tracking-wider">
            HATE SPEECH DETECTION
          </span>

          <h2 className="text-5xl font-bold mt-6 text-slate-900">
            Analyze Indonesian Text
          </h2>

          <p className="text-slate-500 mt-4 max-w-3xl text-lg">
            Masukkan teks media sosial berbahasa Indonesia apa pun,
            dan model BiLSTM kami akan mengklasifikasikannya sebagai ujaran
            kebencian atau bukan ujaran kebencian.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h3 className="text-3xl font-bold">
              Masukkan Ujaran
            </h3>

            <p className="text-slate-500 mt-2">   
            Tempel atau ketik teks media sosial berbahasa Indonesia.
            </p>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ketik atau tempel teks ujaran..."
              className="
                w-full
                h-56
                mt-6
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                text-lg
                resize-none
                outline-none
                focus:border-blue-500
              "
            />

            <div className="flex items-center justify-between mt-5">

              <span className="text-slate-400">
                {text.length} characters
              </span>

              <button
                onClick={analyzeText}
                disabled={loading}
                className="
                  flex items-center gap-3
                  px-8 py-4
                  bg-blue-500
                  text-white
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  hover:bg-blue-600
                  transition
                  disabled:opacity-50
                "
              >
                <Search size={20} />
                {loading ? "Analyzing..." : "Analyze Text"}
              </button>

            </div>

            {/* Examples */}

            <div className="mt-8 border-t pt-6">

              <p className="text-slate-500 mb-4">
                ⓘ Coba beberapa contoh
              </p>

              <div className="space-y-3">

                {examples.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setText(item)}
                    className="
                      w-full
                      text-left
                      bg-slate-50
                      border
                      border-slate-200
                      rounded-xl
                      px-4
                      py-3
                      hover:bg-blue-50
                      transition
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl border border-slate-200 min-h-[650px] p-8 shadow-lg">
            

            {!result ? (

              <div className="h-full flex flex-col justify-center items-center text-center">

                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-8">

                  <Search
                    size={40}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  Ready to Analyze
                </h3>

                <p className="text-slate-500 mt-3 max-w-sm leading-7">
                  Masukkan teks bahasa Indonesia di sebelah kiri, lalu klik
                  <span className="font-semibold text-blue-600">
                    {" "}Analyze Text
                  </span>{" "}
                  untuk membiarkan model BiLSTM kami mengklasifikasikan konten tersebut.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-10 w-full">

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <h2 className="text-2xl">📝</h2>
                    <p className="text-sm mt-2">Input Text</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <h2 className="text-2xl">🤖</h2>
                    <p className="text-sm mt-2">AI Analyze</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4">
                    <h2 className="text-2xl">📊</h2>
                    <p className="text-sm mt-2">Prediction</p>
                  </div>

                </div>

              </div>

            ) : (

              <div>

                <h2 className="text-3xl font-bold mb-8">
                  Prediction Result
                </h2>

                {/* Prediction Card */}

                <div
                  className={`rounded-3xl p-8 text-white shadow-xl ${
                    result.prediction === "Hate Speech"
                      ? "bg-gradient-to-r from-red-500 to-red-600"
                      : "bg-gradient-to-r from-green-500 to-emerald-600"
                  }`}
                >

                  <div className="text-6xl mb-4 text-center">
                    {result.prediction === "Hate Speech"
                      ? "🚨"
                      : "✅"}
                  </div>

                  <h2 className="text-4xl font-bold text-center">
                    {result.prediction}
                  </h2>

                  <p className="text-center opacity-90 mt-2">
                    AI Classification Result
                  </p>

                </div>

                {/* Confidence */}

                <div className="mt-8">

                  <div className="flex justify-between mb-2">

                    <span className="font-semibold">
                      Confidence
                    </span>

                    <span className="font-bold text-blue-600">
                      {(result.confidence * 100).toFixed(2)}%
                    </span>

                  </div>

                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">

                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        result.prediction === "Hate Speech"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${result.confidence * 100}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Info */}

                <div className="grid grid-cols-2 gap-5 mt-8">

                  <div className="bg-slate-50 rounded-2xl p-5">

                    <p className="text-slate-500">
                      Category
                    </p>

                    <h3 className="font-bold text-xl mt-2">
                      {result.prediction}
                    </h3>

                  </div>

                  <div className="bg-slate-50 rounded-2xl p-5">

                    <p className="text-slate-500">
                      Status
                    </p>

                    <h3
                      className={`font-bold text-xl mt-2 ${
                        result.prediction === "Hate Speech"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {result.prediction === "Hate Speech"
                        ? "Unsafe"
                        : "Safe"}
                    </h3>

                  </div>

                </div>

                {/* Recommendation */}

                <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">

                  <h3 className="font-bold text-blue-700">
                  Result
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">

                    {result.prediction === "Hate Speech"

                      ? "Konten ini diperkirakan mengandung ujaran kebencian. Disarankan untuk meninjau atau memoderasi teks tersebut sebelum dipublikasikan."

                      : "Konten ini diprediksi bukan merupakan ujaran kebencian dan dianggap aman untuk dipublikasikan."}

                  </p>

                </div>

                {/* Input */}

                <div className="mt-8 bg-slate-50 rounded-2xl p-6">

                  <h3 className="font-semibold">
                    Ujaran
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {result.text}
                  </p>

                </div>

              </div>

            )}

</div>

        </div>

      </div>
    </section>
  );
}