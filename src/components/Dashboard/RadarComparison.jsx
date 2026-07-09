import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    metric: "Accuracy",
    LSTM: 83.36,
    BiLSTM: 84.17,
  },
  {
    metric: "Precision",
    LSTM: 81.05,
    BiLSTM: 83.003,
  },
  {
    metric: "Recall",
    LSTM: 79.23,
    BiLSTM: 77.4
  },
  {
    metric: "F1-Score",
    LSTM: 80.13,
    BiLSTM: 80.53,
  },
];

export default function RadarComparison() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">

      <h3 className="text-2xl font-bold text-slate-900">
        Performance Radar
      </h3>

      <p className="text-gray-500 mt-1 mb-8">
        LSTM vs BiLSTM across metrics
      </p>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <RadarChart data={data}>

            <PolarGrid />

            <PolarAngleAxis dataKey="metric" />

            <PolarRadiusAxis
              angle={30}
              domain={[75, 95]}
            />

            <Radar
              name="LSTM"
              dataKey="LSTM"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.25}
            />

            <Radar
              name="BiLSTM"
              dataKey="BiLSTM"
              stroke="#2563EB"
              fill="#2563EB"
              fillOpacity={0.25}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

      <div className="border-t mt-6 pt-6">

        <table className="w-full">

          <thead>
            <tr className="text-left text-gray-500">
              <th>METRIC</th>
              <th className="text-orange-500">LSTM</th>
              <th className="text-blue-600">BiLSTM</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">Accuracy</td>
              <td>83.36%</td>
              <td>84.17%</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Precision</td>
              <td>81.05%</td>
              <td>83.03%</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Recall</td>
              <td>79.23%</td>
              <td>77.4%</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">F1-Score</td>
              <td>80.13%</td>
              <td>80.53%</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}