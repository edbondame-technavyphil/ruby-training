import React from 'react';
import { Home, CreditCard, ArrowRightLeft } from 'lucide-react';
import type { NavTab, UserProfile } from '../types';

interface SidebarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  user: UserProfile;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, user, onLogout }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'expenses', label: 'Expenses', icon: CreditCard },
  ];

  return (
    <aside className="w-64 bg-[#121212] flex flex-col justify-between p-6 border-r border-zinc-800/50 rounded-l-3xl select-none">
      <div>
        
        <div className="flex flex-col items-center mb-10">
          <div className="relative group cursor-pointer" onClick={onLogout} title="Click to Logout">
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700 shadow-lg group-hover:opacity-80 transition"
            />
            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs font-semibold text-white">
              Logout
            </div>
          </div>
          <h2 className="mt-3 text-lg font-bold text-zinc-100 tracking-wide">{user.name}</h2>
          <span className="text-xs text-zinc-500 font-medium">{user.role}</span>
        </div>

    
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as NavTab)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1e1e1e] text-[#00f2fe] border-l-4 border-[#00f2fe] shadow-md'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#00f2fe]' : 'text-zinc-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-zinc-800/40 flex flex-col items-center">
        <div className="flex items-center gap-2 font-black tracking-widest text-xl text-white">
          <ArrowRightLeft className="w-5 h-5 text-[#00f2fe]" />
          <span>EXP<span className="text-[#00f2fe]">ENSES</span></span>
        </div>
      </div>
    </aside>
  );
};