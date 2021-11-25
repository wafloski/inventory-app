import React, { FC, useContext, useReducer } from 'react';

import { ProductsContext } from 'providers/ProductsProvider';

import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';

import * as S from './AddProductForm.styles';
import { ButtonTypes, Product, Unit } from 'types/types';

const initialFormState: Product = {
  name: '',
  amount: '',
  unit: Unit.PIECES
};

type Action = {
  type: string,
  field?: string,
  value?: string
}

enum FORM_ACTIONS {
  CHANGE = 'INPUT CHANGE',
  CLEAR = 'CLEAR VALUES'
}

const formReducer = (state: Product, action: Action) => {
  switch (action.type) {
    case FORM_ACTIONS.CHANGE:
      return {
        ...state,
        [action.field as string]: action.value
      }
    case FORM_ACTIONS.CLEAR:
      return initialFormState;
    default:
      return state;
  }
};

const texts: Record<string, string> = {
  title: 'Add new product',
  add: 'Add product'
};

const AddProductForm: FC = () => {
  const [formValues, dispatch] = useReducer(formReducer, initialFormState);
  const { addProduct } = useContext(ProductsContext);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: FORM_ACTIONS.CHANGE,
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct(formValues);
    dispatch({ type: FORM_ACTIONS.CLEAR });
  };

  return (
    <ViewWrapper>
      <S.Form onSubmit={handleSubmitUser}>
        <Title>{texts.title}</Title>
        <FormField label='Name' id='name' name='name' value={formValues.name} type='text' onChange={handleFieldChange} />
        <FormField label='Amount' id='amount' name='amount' value={formValues.amount} type='number' onChange={handleFieldChange} />
        <FormField label='Unit' id='unit' name='unit' value={formValues.unit} type='select' onChange={handleFieldChange} />
        <Button type='submit' disabled={!formValues.name} kind={ButtonTypes.SUBMIT}>{texts.add}</Button>
      </S.Form>
    </ViewWrapper>
  );
};

export default AddProductForm;
