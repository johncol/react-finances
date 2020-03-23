import { Expense } from './expense';

export interface MonthlyExpense {
  month: string;
  expensesPerCategory: { [category: string]: Expense };
}
