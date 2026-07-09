import StatsCard from "../components/Dashboard/StatsCard";
import LabelDistribution from "../components/Dashboard/LabelDistribution";
import CategoryChart from "../components/Dashboard/CategoryChart";
import TargetChart from "../components/Dashboard/TargetChart";

import HateWordCloud from "../components/Dashboard/HateWordCloud";
import NonHateWordCloud from "../components/Dashboard/NonHateWordCloud";

import LSTMCard from "../components/Dashboard/LSTMCard";
import BiLSTMCard from "../components/Dashboard/BiLSTMCard";
import RadarComparison from "../components/Dashboard/RadarComparison";

export default function Dashboard() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            DASHBOARD
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Dataset Statistics & Analysis
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Visualisasi dan analisis dataset ujaran 
            kebencian Indonesia untuk memahami pola serta distribusi data.
          </p>

        </div>

        <StatsCard />

        {/* Data Visualization */}
        <div className="text-center mt-20 mb-10">

          <h2 className="text-4xl font-bold">
            Data Visualization
          </h2>

          <p className="text-gray-500 mt-2">
            Distribution charts across labels,
            categories, and targets.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <LabelDistribution />

          <CategoryChart />

          <TargetChart />

        </div>

        {/* Word Analysis */}
        <div className="text-center mt-24 mb-10">

          <h2 className="text-4xl font-bold">
            Word Analysis
          </h2>

          <p className="text-gray-500 mt-2">
            Kata kunci yang paling sering muncul dalam 
            cuitan berisi ujaran kebencian dan cuitan yang tidak berisi ujaran kebencian.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <HateWordCloud />

          <NonHateWordCloud />

        </div>

        {/* Model Comparison */}
        <div className="text-center mt-24 mb-10">

          <h2 className="text-4xl font-bold">
            Model Performance Comparison
          </h2>

          <p className="text-gray-500 mt-2">
            Comparative analysis between LSTM and BiLSTM.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <LSTMCard />

          <BiLSTMCard />

          <RadarComparison />

        </div>

      </div>
    </div>
  );
}