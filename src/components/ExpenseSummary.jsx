import React from "react";
import { useExpenses } from "../context/ExpenseContext";
import {
  formatCurrency,
  getExpensesByCategory,
  getTotalExpenses,
} from "../utils/expenses";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

const ExpenseSummary = () => {
  const { expenses } = useExpenses();

  const totalExpenses = getTotalExpenses(expenses);
  const categoriesData = getExpensesByCategory(expenses);

  let highestCategory = {
    name: "none",
    amount: 0,
  };

  Object.entries(categoriesData).forEach(([category, amount]) => {
    if (amount > highestCategory.amount) {
      highestCategory = { name: category, amount: amount };
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-expense-light/20 p-3">
            <Wallet size={24} className="text-expense" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Expenses
            </h3>
            <p className="text-2xl font-bold text-expense-dark dark:text-rose-200">
              {formatCurrency(totalExpenses)}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-red-100 p-3 dark:bg-red-500/15">
            <TrendingUp size={24} className="text-red-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Highest Category
            </h3>
            <p className="text-2xl font-bold text-expense-dark dark:text-rose-200">
              {highestCategory.name !== "none" ? (
                <>
                  <span className="capitalize">{highestCategory.name}</span>
                  <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
                    ({formatCurrency(highestCategory.amount)})
                  </span>
                </>
              ) : (
                "None"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-500/15">
            <TrendingDown size={24} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Entries
            </h3>
            <p className="text-2xl font-bold text-expense-dark dark:text-rose-200">
              {expenses.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
