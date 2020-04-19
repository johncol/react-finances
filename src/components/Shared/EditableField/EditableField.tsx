import * as React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

import './editable-field.scss';

export interface Props extends InputProps {}

export const EditableField = (props: Props) => {
  return <Input {...props} className="editable-field" />;
};
