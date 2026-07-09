import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp } from "lucide-react";

const data = [
  { epoch: 1, acc: 56 },
  { epoch: 2, acc: 61 },
  { epoch: 3, acc: 66 },
  { epoch: 4, acc: 72 },
  { epoch: 5, acc: 76 },
  { epoch: 6, acc: 80 },
  { epoch: 7, acc: 82 },
  { epoch: 8, acc: 83.4 },
  { epoch: 9, acc: 84.17 },
];

export default function ModelCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >

      {/* Accuracy Badge */}
      <motion.div
        initial={{ y: -15 }}
        animate={{ y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="absolute -top-5 right-4 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-xl z-20"
      >
        <p className="text-xs opacity-80">
          Model Accuracy
        </p>

        <h3 className="text-xl font-bold">
          84.17%
        </h3>
      </motion.div>

      {/* Main Card */}
      <div className="bg-white rounded-[32px] p-6 lg:p-7 shadow-2xl">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Model Performance
            </h2>

            <p className="text-sm text-slate-400">
              BiLSTM + FastText Embedding
            </p>

          </div>

          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Brain size={22} className="text-blue-600" />
          </div>

        </div>

        {/* Chart */}
        <div className="h-56">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
              />

              <XAxis dataKey="epoch" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="acc"
                stroke="#2563eb"
                strokeWidth={4}
                dot={{
                  r: 5,
                  fill: "#2563eb",
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Bottom Cards */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-blue-50 rounded-2xl p-4">

            <div className="flex items-center gap-3 mb-3">

              <ShieldCheck className="text-blue-600" />

              <span className="font-semibold">
                Accuracy
              </span>

            </div>

            <h2 className="text-3xl font-bold text-blue-700">
              84.17%
            </h2>

          </div>

          <div className="bg-green-50 rounded-2xl p-4">

            <div className="flex items-center gap-3 mb-3">

              <TrendingUp className="text-green-600" />

              <span className="font-semibold">
                Epoch
              </span>

            </div>

            <h2 className="text-3xl font-bold text-green-700">
              9
            </h2>

          </div>

        </div>

      </div>

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="absolute -bottom-6 left-5 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl"
      >

        <p className="text-xs opacity-80">
          Best Performing Model
        </p>

        <h3 className="font-bold text-lg">
          BiLSTM
        </h3>

      </motion.div>

    </motion.div>
  );
}