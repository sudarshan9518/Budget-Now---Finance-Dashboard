import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { getChartData, getExpensesByMonth } from "../utils/expenses";
import { BarChart, PieChart } from "lucide-react";
import ExpensePieChartThemed from "./ExpensePieChartThemed";
import ExpenseBarChartThemed from "./ExpenseBarChartThemed";

const ExpenseChart = () => {
  const { expenses } = useExpenses();
  const [chartType, setChartType] = useState("pie");

  const chartData = getChartData(expenses);
  const monthlyData = getExpensesByMonth(expenses);

  if (expenses.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-2xl font-semibold text-expense-dark dark:text-rose-200">
          Expense Analytics
        </h2>
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setChartType("pie")}
            className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
              chartType === "pie"
                ? "bg-expense text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            <PieChart size={18} className="mr-2" />
            <span>Pie Chart</span>
          </button>
          <button
            onClick={() => setChartType("bar")}
            className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
              chartType === "bar"
                ? "bg-expense text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            <BarChart size={18} className="mr-2" />
            <span>Bar Chart</span>
          </button>
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          Add some expenses to see your spending analytics
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-semibold text-expense-dark dark:text-rose-200">
        Expense Analytics
      </h2>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setChartType("pie")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "pie"
              ? "bg-expense text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          <PieChart size={18} className="mr-2" />
          <span>Pie Chart</span>
        </button>
        <button
          onClick={() => setChartType("bar")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "bar"
              ? "bg-expense text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          <BarChart size={18} className="mr-2" />
          <span>Bar Chart</span>
        </button>
      </div>

      <div>
        {chartType === "pie" ? (
          <ExpensePieChartThemed data={chartData} />
        ) : (
          <ExpenseBarChartThemed data={monthlyData} />
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;
