import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";

import { labelDistribution } from "../../data/dashboardData";

const COLORS = ["#ef4444", "#3b82f6"];

export default function LabelDistribution() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 border">

      <h2 className="text-3xl font-semibold">
        Label Distribution
      </h2>

      <p className="text-gray-500 mb-4">
        Hate Speech vs Non Hate Speech
      </p>

      <div className="h-[320px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={labelDistribution}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
            >

              {labelDistribution.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}