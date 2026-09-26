// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { AddExpenseModal } from './components/AddExpenseModal';
import { DashboardView } from './pages/DashboardView';
import { ExpensesPage } from './pages/ExpensesPage';
import { LoginPage } from './pages/LoginPage';
import { INITIAL_TASKS, INITIAL_USER } from './data/mockData';
import { fetchExpenses, createExpense } from './services/api';
import type { ExpenseItem, NavTab } from './types';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load expenses from Rails API + Firebase on mount
  useEffect(() => {
    if (isAuthenticated) {
      loadExpenses();
    }
  }, [isAuthenticated]);

  const loadExpenses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchExpenses();
      setExpenses(data);
    } catch (err: any) {
      console.error(err);
      setError('Could not connect to Rails backend server.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (newExpData: Omit<ExpenseItem, 'id'>) => {
    try {
      const savedExpense = await createExpense(newExpData);
      setExpenses((prev) => [savedExpense, ...prev]);
      setTasks((prev) => ({
        ...prev,
        unreportedExpenses: prev.unreportedExpenses + 1,
      }));
    } catch (err: any) {
      alert('Failed to save expense: ' + err.message);
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#a78bfa] p-4 md:p-8 flex items-center justify-center font-sans select-none">
      <div className="w-full max-w-6xl bg-[#0f0f11] rounded-3xl shadow-2xl border border-zinc-800/80 flex overflow-hidden relative min-h-[720px]">
        
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user={INITIAL_USER}
          onLogout={() => setIsAuthenticated(false)}
        />

        {/* Main Application Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[85vh]">
          {error && (
            <div className="mb-4 p-3 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-xl flex justify-between items-center">
              <span>{error}</span>
              <button onClick={loadExpenses} className="underline font-bold">Retry</button>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center h-64 text-zinc-400 text-sm">
              Loading expenses from backend...
            </div>
          ) : (
            <>
              {activeTab === 'home' && (
                <DashboardView
                  tasks={tasks}
                  expenses={expenses}
                  onOpenAddModal={() => setIsModalOpen(true)}
                />
              )}

              {activeTab === 'expenses' && (
                <ExpensesPage
                  expenses={expenses}
                  onOpenAddModal={() => setIsModalOpen(true)}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Add Expense Modal */}
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
    </div>
  );
}

export default App;