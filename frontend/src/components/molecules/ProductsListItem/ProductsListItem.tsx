import React, { FC, useContext } from 'react';

import { ProductsContext } from 'providers/ProductsProvider';

import Button from 'components/atoms/Button/Button';

import * as S from './ProductsListItem.styles';
import { ButtonTypes, Unit } from 'types/types';

interface ProductsListItemProps {
  name: string;
  amount: string;
  unit: Unit;
}

const ProductsListItem: FC<ProductsListItemProps> = ({ name, amount, unit }) => {
  const { deleteProduct } = useContext(ProductsContext);

  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Amount>{amount}</S.Amount>
      <S.Unit>{unit}</S.Unit>
      <S.Actions>
        <Button kind={ButtonTypes.DELETE} onClick={() => deleteProduct(name)}>X</Button>
      </S.Actions>
    </S.Wrapper>
  );
}

export default ProductsListItem;
