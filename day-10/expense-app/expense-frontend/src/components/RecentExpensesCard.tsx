import React from 'react';
import type { ExpenseItem } from '../types';

interface Props {
  expenses: ExpenseItem[];
}

export const RecentExpensesCard: React.FC<Props> = ({ expenses }) => {
  const getTeamStyle = (member?: string) => {
    switch (member) {
      case 'Sister': return 'bg-purple-950/80 text-purple-300 border border-purple-800/50';
      case 'Brother': return 'bg-red-950/80 text-red-300 border border-red-800/50';
      case 'Mommy': return 'bg-teal-950/80 text-teal-300 border border-teal-800/50';
      case 'Daddy': return 'bg-yellow-950/80 text-yellow-300 border border-yellow-800/50';
      default: return 'bg-zinc-800 text-zinc-300';
    }
  };

  return (
    <div className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
      <h3 className="text-zinc-400 text-sm font-semibold mb-3 tracking-wide">Recent Expenses</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-zinc-500 text-xs border-b border-zinc-800/80 pb-2">
              <th className="pb-2 font-medium">Subject</th>
              <th className="pb-2 font-medium">Name</th>
              <th className="pb-2 font-medium text-center">Category</th>
              <th className="pb-2 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/30">
            {expenses.slice(0, 5).map((exp) => {
              const displayName = exp.name || exp.member || '-';
              const displayMemberTag = exp.category || exp.designation || '-';

              return (
                <tr key={exp.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-2.5 font-medium text-zinc-200">{exp.subject}</td>
                  <td className="py-2.5 text-zinc-400 text-xs">{displayName}</td>
                  <td className="py-2.5 text-center">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${getTeamStyle(displayMemberTag)}`}>
                      {displayMemberTag}
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-semibold text-zinc-100">
                    PhP{Number(exp.amount || 0).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};