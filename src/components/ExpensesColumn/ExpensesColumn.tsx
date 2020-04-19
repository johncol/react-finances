import React, { FunctionComponent } from 'react';
import { List } from 'antd';

import { Category, MonthlyExpense, Expense } from './../../models';
import { CurrencyService } from '../../services';

interface Props {
  expense: MonthlyExpense;
}

export const ExpensesColumn: FunctionComponent<Props> = ({
  expense: { month, expensesPerCategory },
}) => {
  const categories: string[] = Object.keys(expensesPerCategory);
  return (
    <div className="expenses-column">
      <List
        header={<strong>{month}</strong>}
        itemLayout="horizontal"
        dataSource={categories}
        bordered
        renderItem={(category: string) => {
          const expense: Expense = expensesPerCategory[category];
          return <List.Item>{CurrencyService.format(expense)}</List.Item>;
        }}
      />
    </div>
  );
};
