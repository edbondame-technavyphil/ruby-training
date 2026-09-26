export type NavTab = 'home' | 'expenses'|;

export interface ExpenseItem {
  id: string;
  subject: string;
  amount: number;
  date?: string;
  category?: string;
  status?: string;
  
  name?: string;
  member?: string;
  team?: string;
  designation?: string;
}

export interface PendingTaskData {
  pendingApprovals: number;
  newTripsRegistered: number;
  unreportedExpenses: number;
  upcomingExpenses: number;
  unreportedAdvances: number;
}

export interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
}