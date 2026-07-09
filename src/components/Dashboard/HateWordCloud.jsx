import { hateWords } from "../../data/dashboardData";

export default function HateWordCloud() {

  return (
    <div className="bg-white rounded-3xl p-8 border border-red-200 shadow-sm">

      <h2 className="text-3xl font-semibold mb-2">
        Hate Speech Word Cloud
      </h2>

      <p className="text-gray-500 mb-8">
        Kata-kata yang paling sering muncul dalam cuitan berisi ujaran kebencian
      </p>

      <div className="bg-red-50 rounded-3xl p-10 min-h-[320px] flex flex-wrap gap-4 justify-center items-center">

        {hateWords.map((word, index) => {

          const sizes = [
            "text-xl",
            "text-2xl",
            "text-3xl",
            "text-4xl"
          ];

          return (
            <span
              key={index}
              className={`font-bold text-red-600 ${
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