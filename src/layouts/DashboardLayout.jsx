import React from "react";
import { Toaster } from "react-hot-toast";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const DashboardLayout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: isDark ? "#0f172a" : "#1f2937",
            color: "#fff",
            borderRadius: "8px",
            border: isDark ? "1px solid #334155" : "none",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <header className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <h1 className="text-3xl font-bold text-expense">
              Budget Now - Finance Dashboard
            </h1>
            <div className="flex items-center justify-center gap-3 md:justify-end">
              <p className="hidden md:block text-slate-500 dark:text-slate-400">
                Your Money, Always in Control
              </p>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-expense-light dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                <span>{isDark ? "Light mode" : "Dark mode"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white/90 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Budget Wow Tracker &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
