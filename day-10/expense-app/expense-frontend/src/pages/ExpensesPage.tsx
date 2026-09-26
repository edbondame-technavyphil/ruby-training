import React from 'react';
import { Plus } from 'lucide-react';
import type { ExpenseItem } from '../types';

interface Props {
  expenses: ExpenseItem[];
  onOpenAddModal: () => void;
}

export const ExpensesPage: React.FC<Props> = ({ expenses, onOpenAddModal }) => {
  return (
    <div className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Expense Records</h2>
          <p className="text-xs text-zinc-400">View and track all submitted company transactions</p>
        </div>
        <button
          onClick={onOpenAddModal}
          className="flex items-center gap-2 bg-[#00f2fe] text-black px-4 py-2 rounded-xl font-bold text-xs hover:bg-cyan-300 transition"
        >
          <Plus className="w-4 h-4" /> Add Expense
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-zinc-500 text-xs border-b border-zinc-800 pb-2">
              <th className="pb-3 font-medium">Subject</th>
              <th className="pb-3 font-medium">Family Member</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Team</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40">
            {expenses.map((exp) => (
              <tr key={exp.id} className="hover:bg-zinc-900/40 transition">
                <td className="py-3 font-medium text-zinc-200">{exp.subject}</td>
                <td className="py-3 text-zinc-400">{exp.member}</td>
                <td className="py-3 text-zinc-400">{exp.category}</td>
                <td className="py-3 text-zinc-400">{exp.designation}</td>
                <td className="py-3 text-zinc-500 text-xs">{exp.date}</td>
                <td className="py-3 text-right font-bold text-zinc-100">Php{exp.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};