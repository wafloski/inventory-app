import React, { FunctionComponent } from 'react';

import * as S from './ProductsList.styles';

interface Product {
  name: string,
  amount: string
}

const products: Product[] = [
  {
    name: 'tomato',
    amount: '4'
  },
  {
    name: 'onion',
    amount: '3'
  },
  {
    name: 'cucumber',
    amount: '2'
  }
]

export const ProductsList: FunctionComponent = () => (
  <S.Wrapper>
    {products.map((product) => <p key={product.name}>{product.name}</p>)}
  </S.Wrapper>
);
