import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { ExpenseItem } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddExpense: (expense: Omit<ExpenseItem, 'id'>) => void;
}

export const AddExpenseModal: React.FC<Props> = ({ isOpen, onClose, onAddExpense }) => {
  const [subject, setSubject] = useState('');
  const [member, setMember] = useState('');
  const [designation, setDesignation] = useState<'Sister' | 'Brother' | 'Mommy' | 'Daddy'>('Sister');
  const [category, setCategory] = useState<'Food' | 'Groceries' | 'Medicine' | 'Travel Expenses' | 'Fuel' | 'Office'>('Food');
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !member || !amount) return;

    onAddExpense({
      subject,
      member,
      designation,
      category,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
    });

    setSubject('');
    setMember('');
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#18181b] border border-zinc-700 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold text-white mb-4">Add New Expense</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Subject</label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Family Dinner"
              className="w-full bg-[#121214] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Member Name</label>
            <input
              type="text"
              required
              value={member}
              onChange={(e) => setMember(e.target.value)}
              placeholder="e.g. Ed Aaron"
              className="w-full bg-[#121214] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1">Team</label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value as any)}
                className="w-full bg-[#121214] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
              >
                <option value="Sister">Sister</option>
                <option value="Brother">Brother</option>
                <option value="Mommy">Mommy</option>
                <option value="Daddy">Daddy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-[#121214] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
              >
                <option value="Food">Food</option>
                <option value="Medicine">Medicine</option>
                <option value="Travel Expense">Travel Expense</option>
                <option value="Bills">Bills</option>
                <option value="Pets">Pets</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Amount (Php)</label>
            <input
              type="number"
              step="0.01"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-[#121214] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#00f2fe] text-black text-sm font-bold hover:bg-cyan-300"
            >
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};