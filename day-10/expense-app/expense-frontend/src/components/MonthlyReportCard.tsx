import React from 'react';

export const MonthlyReportCard: React.FC = () => {
  const teamSpendingTrend = [
    { name: 'PJ', val: 75 },
    { name: 'SJ', val: 35 },
    { name: 'MB', val: 75 },
    { name: 'JL', val: 68 },
    { name: 'DW', val: 35 },
    { name: 'NJ', val: 52 },
    { name: 'BS', val: 92 },
  ];

  const dayToDayExpenses = [
    { name: 'Accomodation', val: 40 },
    { name: 'Comms', val: 18 },
    { name: 'Services', val: 92 },
    { name: 'Food', val: 72 },
    { name: 'Fuel', val: 35 },
  ];

  return (
    <div className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-5 shadow-lg">
      <h3 className="text-zinc-400 text-sm font-semibold mb-4 tracking-wide">Monthly Report</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#121214] border border-zinc-800/50 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-medium mb-4">Team Spending Trend</span>
          <div className="h-44 flex items-end justify-around gap-2 pt-4 px-2 border-b border-zinc-800/60">
            {teamSpendingTrend.map((bar, i) => (
              <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group">
                <div 
                  className="w-full max-w-[22px] bg-[#00f2fe] rounded-t-sm transition-all duration-500 hover:brightness-125" 
                  style={{ height: `${bar.val}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-around text-[10px] text-zinc-500 font-bold mt-2">
            {teamSpendingTrend.map((bar, i) => (
              <span key={i} className="w-full text-center">{bar.name}</span>
            ))}
          </div>
        </div>

        <div className="bg-[#121214] border border-zinc-800/50 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs text-zinc-400 font-medium mb-4">Day-to-Day Expenses</span>
          <div className="h-44 flex items-end justify-around gap-3 pt-4 px-2 border-b border-zinc-800/60">
            {dayToDayExpenses.map((bar, i) => (
              <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                <div 
                  className="w-full max-w-[28px] bg-[#a855f7] rounded-t-sm transition-all duration-500 hover:brightness-125" 
                  style={{ height: `${bar.val}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-around text-[10px] text-zinc-500 font-bold mt-2">
            {dayToDayExpenses.map((bar, i) => (
              <span key={i} className="w-full text-center truncate px-0.5">{bar.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};