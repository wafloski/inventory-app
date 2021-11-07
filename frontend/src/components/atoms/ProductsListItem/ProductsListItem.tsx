import React, { FunctionComponent } from 'react';

import * as S from './ProductsListeItem.styles';
import { Unit } from 'types/types';

interface ProductsListItemProps {
  name: string;
  amount: string;
  unit: Unit;
}

const ProductsListItem: FunctionComponent<ProductsListItemProps> = ({ name, amount, unit }) => (
  <S.Wrapper>
    <S.Name>{name}</S.Name>
    <S.Amount>{amount}</S.Amount>
    <S.Unit>{unit}</S.Unit>
  </S.Wrapper>
);

export default ProductsListItem;
