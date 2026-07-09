import { nonHateWords } from "../../data/dashboardData";

export default function NonHateWordCloud() {

  return (
    <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-sm">

      <h2 className="text-3xl font-semibold mb-2">
        Non Hate Speech Word Cloud
      </h2>

      <p className="text-gray-500 mb-8">
        Kata-kata yang paling sering muncul dalam cuitan yang bukan ujaran kebencian
      </p>

      <div className="bg-blue-50 rounded-3xl p-10 min-h-[320px] flex flex-wrap gap-4 justify-center items-center">

        {nonHateWords.map((word, index) => {

          const sizes = [
            "text-xl",
            "text-2xl",
            "text-3xl",
            "text-4xl"
          ];

          return (
            <span
              key={index}
              className={`font-bold text-blue-600 ${
                sizes[index % sizes.length]
              }`}
            >
              {word}
            </span>
          );
        })}

      </div>

    </div>
  );
}