import React from 'react';

import { PREDEFINED_CATEGORIES } from '../../constants';
import { MonthlyTotalsEditableTable } from '../MonthlyTotalsEditableTable';
import { Expense, Category, MonthlyExpenseState, MonthlyExpense } from '../../models';

const expensesStates: { [month: string]: MonthlyExpenseState } = {
  '2020-01': {
    loaded: true,
    error: false,
    data: {
      month: '2020-01',
      expensesPerCategory: {
        services: 1000000,
        family: 100000,
        pets: 10000,
        'food-home': 1000,
        'food-work': 100,
        'food-outside': 10,
        cleanliness: 1,
      },
    },
  },
  '2020-02': {
    loaded: true,
    error: false,
    data: {
      month: '2020-02',
      expensesPerCategory: {
        services: 2000000,
        family: 200000,
        pets: 20000,
        'food-home': 2000,
        'food-work': 200,
        'food-outside': 20,
        cleanliness: 2,
      },
    },
  },
};
const expenses: { [month: string]: MonthlyExpense } = {
  '2020-01': {
    month: '2020-01',
    expensesPerCategory: {
      services: 1000000,
      family: 100000,
      pets: 10000,
      'food-home': 1000,
      'food-work': 100,
      'food-outside': 10,
      cleanliness: 1,
    },
  },
  '2020-02': {
    month: '2020-02',
    expensesPerCategory: {
      services: 2000000,
      family: 200000,
      pets: 20000,
      'food-home': 2000,
      'food-work': 200,
      'food-outside': 20,
      cleanliness: 2,
    },
  },
};

export const MonthlyTotalsDashboard = () => {
  return (
    <MonthlyTotalsEditableTable
      categories={getListOfCategories()}
      expenses={Object.values(expenses)}
    />
  );
};

const getListOfCategories = (): Category[] => {
  const categoriesIDs: Set<string> = new Set();
  Object.values(expensesStates)
    .map((state: MonthlyExpenseState) => state.data?.expensesPerCategory || {})
    .map((expenses: { [category: string]: Expense }) => Object.keys(expenses))
    .forEach((IDs: string[]) => {
      IDs.forEach((id: string) => categoriesIDs.add(id));
    });

  return Array.from(categoriesIDs).map((id: string) => {
    const category: Category | undefined = PREDEFINED_CATEGORIES.find(
      (category: Category) => category.id === id
    );
    return category || { id, name: id };
  });
};
