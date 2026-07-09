import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { categoryData } from "../../data/dashboardData";

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 border">

      <h2 className="text-3xl font-semibold">
        Hate Speech Categories
      </h2>

      <p className="text-gray-500 mb-6">
        Distribution by type
      </p>

      <div className="h-[320px]">

        <ResponsiveContainer>

          <BarChart
            data={categoryData}
            layout="vertical"
          >

            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="name"
            />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[10, 10, 10, 10]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}