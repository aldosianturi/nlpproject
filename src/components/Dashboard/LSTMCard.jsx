import { Brain } from "lucide-react";

export default function LSTMCard() {
  const metrics = [
    { name: "Accuracy", value: "83.36%", width: "83%" },
    { name: "Precision", value: "81.05%", width: "81%" },
    { name: "Recall", value: "79.23%", width: "79%" },
    { name: "F1-Score", value: "80.13%", width: "80%" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-yellow-100 shadow-md p-8">

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center">
          <Brain className="text-yellow-500" size={28} />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            LSTM
          </h3>

          <p className="text-gray-500">
            Long Short-Term Memory
          </p>
        </div>
      </div>

      <div className="space-y-6">

        {metrics.map((item, index) => (
          <div key={index}>

            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {item.name}
              </span>

              <span className="font-semibold text-yellow-600">
                {item.value}
              </span>
            </div>

            <div className="h-3 bg-yellow-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: item.width }}
              />

            </div>

          </div>
        ))}

      </div>

      <div className="mt-8 pt-6 border-t text-gray-500 text-sm">
        ⚡ Unidirectional sequence model
      </div>

    </div>
  );
}