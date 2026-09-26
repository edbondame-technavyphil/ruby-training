import type { ExpenseItem, PendingTaskData, UserProfile } from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Ed Aaron Bondame',
  role: 'Web Developer',
  avatarUrl: 'https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww',
};

export const INITIAL_TASKS: PendingTaskData = {
  pendingApprovals: 5,
  newTripsRegistered: 1,
  unreportedExpenses: 4,
  upcomingExpenses: 0,
  unreportedAdvances: 0,
};

export const INITIAL_EXPENSES: ExpenseItem[] = [
  { id: '1', subject: 'Jollibee', member: 'Thea', designation: 'Sister', amount: 150.00, date: '2026-09-20', status: 'Approved', category: 'Food' },
  { id: '2', subject: 'Medicine', member: 'Raprap', designation: 'Brother', amount: 75.50, date: '2026-09-22', status: 'Approved', category: 'Medicine' },
  { id: '3', subject: 'Commmute', member: 'Ed Aaron', designation: 'Daddy', amount: 450.25, date: '2026-09-23', status: 'Pending', category: 'Travel Expense' },
  { id: '4', subject: 'Gas', member: 'Kling', designation: 'Mommy', amount: 120.00, date: '2026-09-24', status: 'Approved', category: 'Travel Expense' },
  { id: '5', subject: 'Internet Bill', member: 'Kling', designation: 'Mommy', amount: 275.75, date: '2026-09-25', status: 'Approved', category: 'Bills' },
];