import React from 'react';
import { Table } from 'antd';
import { ColumnType } from 'antd/lib/table';

import { Category, MonthlyExpenseState, MonthKey, MonthlyExpense, Expense } from '../../models';
import { CurrencyService, DatesService } from '../../services';

type MonthlyExpenseStateMap = { [month: string]: MonthlyExpenseState };

interface Props {
  categories: Category[];
  expenses: MonthlyExpenseStateMap;
}

export const MonthlyTotalsTable = ({ categories, expenses }: Props) => {
  return (
    <div className="monthly-totals-table">
      <Table
        columns={makeColumns(expenses)}
        dataSource={makeDataSource({ categories, expenses })}
      />
    </div>
  );
};

const makeColumns = (expenses: MonthlyExpenseStateMap): ColumnType<string>[] => {
  const months: MonthKey[] = sortedMonths(expenses);
  const fromMonthKeysToColumnHeaders = (month: MonthKey): ColumnType<string> => ({
    title: DatesService.monthLabelFor(month),
    dataIndex: month,
    key: month
  });

  return [
    { title: 'Category', dataIndex: 'category', key: 'category' },
    ...months.map(fromMonthKeysToColumnHeaders)
  ];
};

const makeDataSource = ({ categories, expenses }: Props): any[] => {
  const months: MonthKey[] = sortedMonths(expenses);

  const expenseFor = (category: Category, month: MonthKey): Expense => {
    const monthlyExpense: MonthlyExpense = expenses[month].data || {
      month: '',
      expensesPerCategory: {}
    };
    return monthlyExpense.expensesPerCategory[category.id];
  };

  return categories.map((category: Category) => {
    const categoryRow: any = { category: category.name };

    months.forEach((month: MonthKey) => {
      const expense: Expense = expenseFor(category, month);
      categoryRow[month] = CurrencyService.format(expense);
    });

    return categoryRow;
  });
};

const sortedMonths = (expenses: MonthlyExpenseStateMap): MonthKey[] => {
  return Object.keys(expenses).sort();
};
