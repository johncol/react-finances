const formatter: Intl.NumberFormat = new Intl.NumberFormat('co-CO', {
  style: 'currency',
  currency: 'COP',
});

const format = (value: number): string => {
  return formatter.format(value || 0).substring(-3);
};

export const CurrencyService = {
  format,
};
