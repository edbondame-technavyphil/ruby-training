import React from 'react';
import { CreditCard, Receipt, FileText, Navigation } from 'lucide-react';

interface Props {
  onOpenAddModal: () => void;
}

export const QuickAccessPanel: React.FC<Props> = ({ onOpenAddModal }) => {
  const actions = [
    { title: '+ New expense', icon: CreditCard, color: 'from-pink-600 to-rose-700', onClick: onOpenAddModal },
    { title: '+ Add receipt', icon: Receipt, color: 'from-blue-600 to-indigo-700', onClick: onOpenAddModal },
    { title: '+ Create report', icon: FileText, color: 'from-emerald-600 to-teal-700', onClick: () => alert('Report generated!') },
    { title: '+ Create trip', icon: Navigation, color: 'from-amber-600 to-red-700', onClick: () => alert('Trip creation dialog opened!') },
  ];

  return (
    <div className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-5 shadow-lg">
      <h3 className="text-zinc-400 text-sm font-semibold mb-4 tracking-wide">Quick Access</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((act, index) => {
          const Icon = act.icon;
          return (
            <button
              key={index}
              onClick={act.onClick}
              className="bg-[#222226] hover:bg-[#2a2a30] border border-zinc-700/40 rounded-xl p-4 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-sm group"
            >
              <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${act.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">{act.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};