import React, { FunctionComponent } from 'react';

import { CategoriesList } from './components/CategoriesList';
import { CATEGORIES } from './constants/categories';

export const App: FunctionComponent = () => {
  return (
    <div>
      <CategoriesList list={CATEGORIES} />
    </div>
  );
};
