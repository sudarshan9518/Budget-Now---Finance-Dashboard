import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CATEGORY_COLORS = {
  Food: "#6366F1",
  Transport: "#06B6D4",
  Entertainment: "#A855F7",
  Utilities: "#14B8A6",
  Health: "#22C55E",
  Shopping: "#F97316",
  Other: "#64748B",
};

const formatAmount = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);

const ExpensePieChartThemed = ({ data }) => {
  const { isDark } = useTheme();

  if (data.length === 0) {
    return (
      <div className="text-center text-slate-500 dark:text-slate-400">
        No expense data to display
      </div>
    );
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;
      const total = data.reduce((sum, item) => sum + item.value, 0);
      const percentage = ((value / total) * 100).toFixed(0);

      return (
        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-md dark:border-slate-700 dark:bg-slate-900">
          <p className="font-medium text-slate-900 dark:text-slate-100">{name}</p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            {formatAmount(value)}
            <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
              ({percentage}%)
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          animationDuration={750}
          animationBegin={0}
          animationEasing="ease-out"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={CATEGORY_COLORS[entry.name] || "#8E9196"}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          formatter={(value) => (
            <span
              className={`text-sm font-medium ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensePieChartThemed;
