# Budget Now - Finance Dashboard

A modern, responsive expense tracking and financial dashboard application built with React and Vite. Track your expenses, visualize spending patterns, and manage your finances with an intuitive interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Building for Production](#building-for-production)

## 🎯 Overview

Budget Now is a financial dashboard application that helps users track their expenses and visualize spending patterns. The app provides real-time charts, expense management, and persistent data storage using browser local storage.

## ✨ Features

- **Expense Management**: Add, update, and delete expenses with ease
- **Visual Analytics**: Interactive charts displaying spending patterns
  - Pie charts for expense distribution
  - Bar charts for expense trends
- **Dashboard**: Comprehensive overview of your financial data
- **Real-time Updates**: Instant reflection of changes across all components
- **Data Persistence**: Automatic saving to local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: User-friendly feedback for actions
- **Clean UI**: Modern interface built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend Framework & Build Tool
- **React 19**: JavaScript library for building user interfaces
- **Vite 6**: Next-generation frontend build tool with lightning-fast HMR (Hot Module Replacement)

### State Management
- **React Context API**: Global state management for expense data
- **useReducer Hook**: Reducer pattern for predictable state transitions

### Styling
- **Tailwind CSS **: Utility-first CSS framework for responsive design
- **@tailwindcss/vite**: Optimized Tailwind integration with Vite

### UI Components & Icons
- **lucide-react**: Beautiful, consistent SVG icon library
- **react-icons**: Popular icon sets (Font Awesome, Bootstrap, etc.)
- **react-hot-toast**: Non-intrusive toast notifications

### Data Visualization
- **Recharts 2**: Composable charting library built on React components

### Routing
- **react-router-dom **: Client-side routing for single-page applications


## 📁 Project Structure

```
budjet-now/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Dashboard.jsx      # Main dashboard page
│   │   ├── ExpenseForm.jsx    # Form for adding/editing expenses
│   │   ├── ExpenseList.jsx    # Displays list of expenses
│   │   ├── ExpenseChart.jsx   # Base chart component
│   │   ├── ExpenseBarChart.jsx # Bar chart visualization
│   │   ├── ExpensePieChart.jsx # Pie chart visualization
│   │   └── ExpenseSummary.jsx  # Summary statistics
│   ├── context/
│   │   └── ExpenseContext.jsx # Context API state management
│   ├── layouts/
│   │   └── DashboardLayout.jsx# Main layout wrapper
│   ├── pages/
│   │   ├── Index.jsx          # Home page
│   │   └── NotFound.jsx       # 404 page
│   ├── utils/
│   │   └── expenses.js        # Utility functions for expenses
│   ├── assets/                # Static assets (images, etc.)
│   ├── App.jsx                # Root component with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static files
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## 🔄 State Management

### ExpenseContext
The application uses React Context API with `useReducer` hook for state management. This provides a lightweight, centralized way to manage expense data.

#### State Structure
```javascript
{
  expenses: [],        // Array of expense objects
  loading: false,      // Loading state for async operations
  error: null          // Error state for error handling
}
```

#### State Actions
- `ADD_EXPENSE`: Adds a new expense with a generated UUID
- `DELETE_EXPENSE`: Removes an expense by ID
- `UPDATE_EXPENSE`: Updates an existing expense
- `SET_EXPENSES`: Replaces the entire expenses array
- `SET_LOADING`: Updates loading state
- `SET_ERROR`: Sets error messages

#### Data Persistence
- Expenses are automatically saved to browser's `localStorage` whenever they change
- On app initialization, expenses are loaded from `localStorage`
- All data persists across browser sessions

#### Context Hooks
- `useExpenses()`: Custom hook to access state and dispatch functions
  - Returns: `{ expenses, loading, error, addExpense, deleteExpense }`

### Expense Object Structure
```javascript
{
  id: "uuid-string",           // Unique identifier (auto-generated)
  category: "string",          // Expense category
  amount: number,              // Amount spent
  date: "YYYY-MM-DD",          // Date of expense
  description: "string",       // Expense description
  // ... additional properties
}
```

## 📦 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**


## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
- Starts the development server with Hot Module Replacement (HMR)
- Application opens at `http://localhost:5173`
- Changes to code automatically refresh the browser

## 📚 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | Core React library |
| `react-dom` | ^19.0.0 | React DOM rendering |
| `react-router-dom` | ^7.5.1 | Client-side routing |
| `react-hot-toast` | ^2.5.2 | Toast notifications |
| `react-icons` | ^5.5.0 | Icon library (Font Awesome, Bootstrap, etc.) |
| `lucide-react` | ^0.501.0 | Modern SVG icon set |
| `recharts` | ^2.15.3 | Chart library for data visualization |
| `tailwindcss` | ^4.1.4 | CSS utility framework |
| `@tailwindcss/vite` | ^4.1.4 | Vite plugin for Tailwind CSS |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^6.3.1 | Build tool and dev server |
| `@vitejs/plugin-react` | ^4.3.4 | React Fast Refresh plugin |
| `eslint` | ^9.22.0 | JavaScript linter |
| `@eslint/js` | ^9.22.0 | ESLint JavaScript rules |
| `eslint-plugin-react-hooks` | ^5.2.0 | Rules for React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.19 | Fast Refresh rules |
| `@types/react` | ^19.0.10 | TypeScript types for React |
| `@types/react-dom` | ^19.0.4 | TypeScript types for React DOM |
| `globals` | ^16.0.0 | Global variable definitions |

## 📜 Available Scripts

```bash
# Start development server with HMR
npm run dev



## 🔧 Development

### Code Quality

The project uses ESLint for code quality assurance.

Check for linting issues:
```bash
npm run lint
```


## 🏗️ Building for Production

```bash
npm run build
```

This command:
1. Bundles all JavaScript, CSS, and assets
2. Minifies and optimizes the output
3. Creates a `dist/` directory with production-ready files
4. Generates source maps for debugging

### Deployment

The `dist/` directory is ready to be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Azure Static Web Apps
- Any web server (Apache, Nginx, etc.)


## 📝 License

This project is open source and available under the MIT License.


**Built with ❤️ for better financial management**
