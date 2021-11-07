import React, { FC } from 'react';
import ProductsListItem from 'components/atoms/ProductsListItem/ProductsListItem';
import * as S from './ProductsList.styles';
import { Product } from '../../../types/types';

interface ProductsListProps {
  products: Product[];
}

const texts: Record<string, string> = {
  title: 'Products list'
};

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <S.Wrapper>
    <S.Title>{texts.title}</S.Title>
    {products.map(({ name, amount, unit }) =>
      <ProductsListItem
        key={name}
        amount={amount}
        name={name}
        unit={unit}
      />
    )}
  </S.Wrapper>
);

export default ProductsList;
