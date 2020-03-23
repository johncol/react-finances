import { MonthlyExpense } from './monthly-expense';

export interface MonthlyExpenseState {
  loaded: boolean;
  error: boolean;
  data?: MonthlyExpense;
}

export const NewMonthlyExpenseState = (): MonthlyExpenseState => {
  return {
    loaded: false,
    error: false,
    data: undefined
  };
};
