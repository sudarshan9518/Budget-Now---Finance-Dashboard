import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import toast from "react-hot-toast";

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { value: "food", label: "Food & Dining" },
    { value: "transport", label: "Transportation" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "utilities", label: "Utilities" },
    { value: "health", label: "Health & Medical" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!description.trim()) {
        throw new Error("Please enter a description");
      }

      if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
        throw new Error("Please enter a valid amount");
      }

      addExpense({
        description: description.trim(),
        amount: Number(amount),
        category,
        date,
      });

      toast.success("Expense added successfully");

      setDescription("");
      setAmount("");
      setCategory("food");
      setDate(new Date().toISOString().split("T")[0]);
    } catch {
      toast.error("Failed to add expense");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-center text-2xl font-semibold text-expense-dark dark:text-rose-200">
        Add New Expense
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="What did you spend on?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-expense-light dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-expense-light dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Category
          </label>
          <select
            id="category"
            placeholder="What did you spend on?"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-expense-light dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            disabled={isSubmitting}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-expense-light dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-expense py-2 font-medium text-white transition-all hover:bg-expense-dark focus:outline-none focus:ring-2 focus:ring-expense-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
