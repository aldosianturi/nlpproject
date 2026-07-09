import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { targetData } from "../../data/dashboardData";

export default function TargetChart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 border">

      <h2 className="text-3xl font-semibold">
        Target Distribution
      </h2>

      <p className="text-gray-500 mb-6">
        Individual vs Group targeting
      </p>

      <div className="h-[320px]">

        <ResponsiveContainer>

          <BarChart data={targetData}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#f97316"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}