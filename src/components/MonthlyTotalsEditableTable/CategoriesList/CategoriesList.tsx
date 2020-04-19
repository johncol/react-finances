import React, { FunctionComponent } from 'react';
import { List } from 'antd';

import { Category } from './../../../models';
import { ColumnHeader } from '../ColumnHeader';

interface Props {
  list: Category[];
}

export const CategoriesList: FunctionComponent<Props> = ({ list }) => {
  return (
    <div className="categories-list">
      <List
        header={<ColumnHeader title="Categories" />}
        itemLayout="horizontal"
        dataSource={list}
        bordered
        renderItem={(category: Category) => <List.Item>{category.name}</List.Item>}
      />
    </div>
  );
};
