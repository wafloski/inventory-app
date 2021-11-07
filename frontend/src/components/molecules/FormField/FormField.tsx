import React, { FC } from 'react';

import * as S from './FormField.styles';

import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import Selector from 'components/atoms/Selector/Selector';

import { renderUnitsSelectorOptions } from 'helpers/helpers';

interface FormFieldProps {
  value: string;
  label: string;
  name: string;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormField: FC<FormFieldProps> = ({ onChange, value, label, name, id, type = 'text' }) => (
  <S.Wrapper>
    <Label htmlFor={id}>{label}</Label>
    {type === 'select'
      ? <Selector name={name} onChange={onChange}>{renderUnitsSelectorOptions()}</Selector>
      : <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    }
  </S.Wrapper>
);

export default FormField;
