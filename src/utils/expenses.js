import * as XLSX from "xlsx";

export const downloadExpensesAsExcel = (expenses) => {
  // Prepare data for Excel
  const data = expenses.map((expense) => ({
    Date: formatDate(expense.date),
    Description: expense.description,
    Category: expense.category.charAt(0).toUpperCase() + expense.category.slice(1),
    Amount: expense.amount,
  }));

  // Create a new workbook
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

  // Format columns (optional - set column widths)
  worksheet["!cols"] = [
    { wch: 15 }, // Date
    { wch: 30 }, // Description
    { wch: 15 }, // Category
    { wch: 12 }, // Amount
  ];

  // Generate filename with current date
  const filename = `Expenses_${new Date().toISOString().split("T")[0]}.xlsx`;

  // Download the file
  XLSX.writeFile(workbook, filename);
};


export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getTotalExpenses = (expenses) => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const getExpensesByCategory = (expenses) => {
  const categories = {
    food: 0,
    transport: 0,
    entertainment: 0,
    shopping: 0,
    utilities: 0,
    other: 0,
    health: 0,
  };

  expenses.forEach((expense) => {
    categories[expense.category] += expense.amount;
  });

  return categories;
};

export const getChartData = (expenses) => {
  const expensesByCategory = getExpensesByCategory(expenses);
  return Object.entries(expensesByCategory)
    .filter(([, value]) => value > 0)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));
};

export const getCategoryTextColor = (category) => {
  const colors = {
    food: "text-indigo-500",
    transport: "text-cyan-500",
    entertainment: "text-purple-500",
    utilities: "text-teal-500",
    health: "text-green-500",
    shopping: "text-orange-500",
    other: "text-slate-500",
  };
  return colors[category] || "text-gray-500";
};

export const getMonthName = (date) => {
  return date.toLocaleString("default", { month: "long" });
};

export const getExpensesByMonth = (expenses, numMonths = 6) => {
  const now = new Date();
  const result = {};

  for (let i = 0; i < numMonths; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthYear = `${getMonthName(d)} ${d.getFullYear()}`;
    result[monthYear] = 0;
  }

  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date);
    const monthYear = `${getMonthName(
      expenseDate
    )} ${expenseDate.getFullYear()}`;

    if (result[monthYear] !== undefined) {
      result[monthYear] += expense.amount;
    }
  });

  return result;
};
