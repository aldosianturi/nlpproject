import { Brain } from "lucide-react";

export default function BiLSTMCard() {
  const metrics = [
    { name: "Accuracy", value: "84.17%", width: "84%" },
    { name: "Precision", value: "83.03%", width: "83%" },
    { name: "Recall", value: "77.4%", width: "77%" },
    { name: "F1-Score", value: "80.53%", width: "86%" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-blue-200 shadow-md p-8">

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
            <Brain className="text-blue-600" size={28} />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              BiLSTM
            </h3>

            <p className="text-gray-500">
              Bidirectional LSTM
            </p>
          </div>

        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
          Best
        </span>

      </div>

      <div className="space-y-6">

        {metrics.map((item, index) => (
          <div key={index}>

            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-700">
                {item.name}
              </span>

              <span className="font-semibold text-blue-600">
                {item.value}
              </span>
            </div>

            <div className="h-3 bg-blue-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: item.width }}
              />

            </div>

          </div>
        ))}

      </div>

      <div className="mt-8 pt-6 border-t text-gray-500 text-sm">
        ⚡ Bidirectional context capture
      </div>

    </div>
  );
}