import { MonthKey } from '../models';
import { MONTHS } from '../constants';

const monthLabelFor = (monthKey: MonthKey): string => {
  const [year, month] = monthKey.split('-');
  const monthIndex: number = parseInt(month, 10);
  if (isNaN(monthIndex) || monthIndex < 1 || monthIndex > 12) {
    throw new Error(
      `Index for month was expected to be a number between 1 and 12, but was "${month}"`
    );
  }
  return `${year} ${MONTHS[monthIndex]}`;
};

export const DatesService = {
  monthLabelFor
};
