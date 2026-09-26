import React from 'react';
import { Clock, Plane, FileQuestion, Calendar, Receipt } from 'lucide-react';
import type { PendingTaskData } from '../types';

interface Props {
  tasks: PendingTaskData;
}

export const PendingTasksCard: React.FC<Props> = ({ tasks }) => {
  const rows = [
    { label: 'Pending Approvals', value: tasks.pendingApprovals, icon: Clock, color: 'text-purple-400' },
    { label: 'New Trips Registered', value: tasks.newTripsRegistered, icon: Plane, color: 'text-cyan-400' },
    { label: 'Unreported Expenses', value: tasks.unreportedExpenses, icon: FileQuestion, color: 'text-indigo-400' },
    { label: 'Upcoming Expenses', value: tasks.upcomingExpenses, icon: Calendar, color: 'text-purple-400' },
    { label: 'Unreported Advances', value: `PhP${tasks.unreportedAdvances.toFixed(2)}`, icon: Receipt, color: 'text-cyan-400' },
  ];

  return (
    <div className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-5 shadow-lg">
      <h3 className="text-zinc-400 text-sm font-semibold mb-4 tracking-wide">Pending Tasks</h3>
      <div className="space-y-3.5">
        {rows.map((row, idx) => {
          const Icon = row.icon;
          return (
            <div key={idx} className="flex items-center justify-between text-sm py-1 border-b border-zinc-800/40 last:border-0">
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${row.color}`} />
                <span className="text-zinc-300 font-medium">{row.label}</span>
              </div>
              <span className="font-bold text-zinc-100">{row.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};