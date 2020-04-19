import React, { FunctionComponent } from 'react';
import { List } from 'antd';

import { MonthlyExpense, Expense } from './../../../models';
import { CurrencyService } from '../../../services';
import { ColumnHeader } from '../ColumnHeader';
import { EditableField } from '../../Shared/EditableField';

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
        header={<ColumnHeader title={month} />}
        itemLayout="horizontal"
        dataSource={categories}
        bordered
        renderItem={(category: string) => {
          const expense: Expense = expensesPerCategory[category];
          return (
            <List.Item>
              <ExpenseField expense={expense} />
            </List.Item>
          );
        }}
      />
    </div>
  );
};

const ExpenseField = ({ expense }: { expense: Expense }) => {
  return <EditableField value={CurrencyService.format(expense)} />;
};
