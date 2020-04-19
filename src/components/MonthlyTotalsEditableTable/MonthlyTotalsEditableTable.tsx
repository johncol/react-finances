import React from 'react';
import { CategoriesList } from './CategoriesList';
import { Category, MonthlyExpense } from '../../models';
import { ExpensesColumn } from './ExpensesColumn';

import './monthly-totals-editable-table.scss';

interface Props {
  categories: Category[];
  expenses: MonthlyExpense[];
}

export const MonthlyTotalsEditableTable = ({ categories, expenses }: Props) => {
  return (
    <div className="monthly-totals-editable-table">
      <CategoriesList list={categories} />
      <div className="expenses">
        {expenses.map((expense: MonthlyExpense) => (
          <ExpensesColumn expense={expense} key={expense.month} />
        ))}
      </div>
    </div>
  );
};
