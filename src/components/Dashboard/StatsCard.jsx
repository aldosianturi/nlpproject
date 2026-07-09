import { statsData } from "../../data/dashboardData";

export default function StatsCard() {
  const colors = {
    blue: "bg-blue-50 border-blue-200",
    red: "bg-red-50 border-red-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {statsData.map((item, index) => (

        <div
          key={index}
          className={`rounded-3xl p-8 border shadow-sm ${colors[item.color]}`}
        >

          <h2 className="text-5xl font-bold text-slate-800">
            {item.value}
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            {item.title}
          </h3>

          <p className="text-gray-500 mt-2">
            {item.subtitle}
          </p>

        </div>

      ))}

    </div>
  );
}