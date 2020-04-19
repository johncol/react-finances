import * as React from 'react';

import './column-header.scss';

interface Props {
  title: string;
}

export const ColumnHeader = ({ title }: Props) => {
  return <strong>{title}</strong>;
};
