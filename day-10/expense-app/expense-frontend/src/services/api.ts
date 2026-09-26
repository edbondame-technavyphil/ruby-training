// src/services/api.ts
import type { ExpenseItem } from '../types';

const API_BASE = 'http://localhost:3000/api/v1';

export async function fetchExpenses(): Promise<ExpenseItem[]> {
  const response = await fetch(`${API_BASE}/expenses`);
  
  if (!response.ok) {
    // Attempt to extract the error payload sent by Rails
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.error || `Server responded with HTTP ${response.status} (${response.statusText})`;
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function createExpense(expense: Omit<ExpenseItem, 'id'>): Promise<ExpenseItem> {
  const response = await fetch(`${API_BASE}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.error || `Failed to create expense (HTTP ${response.status})`;
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function deleteExpense(id: string): Promise<void> {
  const response = await fetch(`${API_BASE}/expenses/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.error || `Failed to delete expense (HTTP ${response.status})`;
    throw new Error(errorMessage);
  }
}