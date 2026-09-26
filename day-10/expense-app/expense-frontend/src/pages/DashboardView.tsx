import React from 'react';
import { PendingTasksCard } from '../components/PendingTasksCard';
import { RecentExpensesCard } from '../components/RecentExpensesCard';
import { QuickAccessPanel } from '../components/QuickAccessPanel';
import { MonthlyReportCard } from '../components/MonthlyReportCard';
import type { ExpenseItem, PendingTaskData } from '../types';

interface Props {
  tasks: PendingTaskData;
  expenses: ExpenseItem[];
  onOpenAddModal: () => void;
}

export const DashboardView: React.FC<Props> = ({ tasks, expenses, onOpenAddModal }) => {
  return (
    <div className="space-y-5">
      {/* Top Section: Pending Tasks & Recent Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PendingTasksCard tasks={tasks} />
        <RecentExpensesCard expenses={expenses} />
      </div>

      {/* Middle Section: Quick Access Buttons */}
      <QuickAccessPanel onOpenAddModal={onOpenAddModal} />

      {/* Bottom Section: Monthly SVG Charts */}
      <MonthlyReportCard />
    </div>
  );
};