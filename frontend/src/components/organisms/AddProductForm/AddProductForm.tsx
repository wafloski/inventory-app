import React, { useState, useContext, FC } from 'react';

import { ProductsContext } from 'providers/ProductsProvider';

import Title from 'components/atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';

import * as S from './AddProductForm.styles';
import { Product, Unit } from '../../../types/types';

const initialFormState: Product = {
  name: '',
  amount: '0',
  unit: Unit.PIECES
};

const AddProductForm: FC = () => {
  const [formValues, setFormValues] = useState<Product>(initialFormState);
  const { addProduct } = useContext(ProductsContext);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper>
      <S.Form onSubmit={handleSubmitUser}>
        <Title>Add new product</Title>
        <FormField label='Name' id='name' name='name' value={formValues.name} type='text' onChange={handleFieldChange} />
        <FormField label='Amount' id='amount' name='amount' value={formValues.amount} type='text' onChange={handleFieldChange} />
        <FormField label='Unit' id='unit' name='unit' value={formValues.unit} type='select' onChange={handleFieldChange} />
        <Button type='submit'>Add</Button>
      </S.Form>
    </ViewWrapper>
  );
};

export default AddProductForm;
