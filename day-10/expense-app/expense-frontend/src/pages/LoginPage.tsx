import React, { useState } from 'react';
import { ArrowRightLeft, Lock, Mail } from 'lucide-react';

interface Props {
  onLogin: () => void;
}

export const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState('edbondame.technavy@gmail.com');
  const [password, setPassword] = useState('••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#a78bfa] flex items-center justify-center p-4">
      <div className="bg-[#0f0f11] border border-zinc-800 rounded-3xl p-8 w-full max-w-md shadow-2xl text-center">
        <div className="flex items-center justify-center gap-2 font-black tracking-widest text-2xl text-white mb-2">
          <ArrowRightLeft className="w-7 h-7 text-[#00f2fe]" />
          <span>EXP<span className="text-[#00f2fe]">ENSES</span></span>
        </div>
        <p className="text-zinc-400 text-xs mb-8">Simple Expense & Budget Management</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#18181b] border border-zinc-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#18181b] border border-zinc-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00f2fe]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#00f2fe] text-black font-bold py-3 rounded-xl shadow-lg hover:bg-cyan-300 transition"
          >
            Sign In to Expenses
          </button>
        </form>
      </div>
    </div>
  );
};