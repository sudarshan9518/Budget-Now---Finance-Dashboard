import React from "react";
import { formatCurrency } from "../utils/expenses";
import { useTheme } from "../context/ThemeContext";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ExpenseBarChartThemed = ({ data }) => {
  const { isDark } = useTheme();

  const chartData = Object.entries(data)
    .map(([name, value]) => ({
      name,
      amount: value,
    }))
    .reverse();

  if (chartData.length === 0) {
    return (
      <div className="text-center text-slate-500 dark:text-slate-400">
        No expense data to display
      </div>
    );
  }

  const axisColor = isDark ? "#94A3B8" : "#475569";
  const gridColor = isDark ? "#1E293B" : "#E2E8F0";

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-md dark:border-slate-700 dark:bg-slate-900">
          <p className="font-medium text-slate-900 dark:text-slate-100">{label}</p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid stroke={gridColor} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="end"
          height={60}
          tick={{ fontSize: 12, fill: axisColor }}
          axisLine={{ stroke: gridColor }}
          tickLine={{ stroke: gridColor }}
        />
        <YAxis
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(value)
          }
          tick={{
            fontSize: 12,
            fill: axisColor,
          }}
          axisLine={{ stroke: gridColor }}
          tickLine={{ stroke: gridColor }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="amount"
          fill={isDark ? "#f87171" : "#a85252"}
          radius={[4, 4, 0, 0]}
          animationDuration={750}
          animationBegin={0}
          animationEasing="ease-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseBarChartThemed;
