import React, { FC } from 'react';

import Title from 'components/atoms/Title/Title';
import ProductsListItem from 'components/molecules/ProductsListItem/ProductsListItem';

import * as S from './ProductsList.styles';
import { Product } from 'types/types';

interface ProductsListProps {
  products: Product[];
}

const texts: Record<string, string> = {
  title: 'Products list',
  noProducts: 'There is no products',
  addFirst: 'Add first product'
};

const NoProducts = () => (
  <S.NoProductsInfo>
    {texts.noProducts}
    <S.AddFirstProductLink to='/add-product'>{texts.addFirst}</S.AddFirstProductLink>
  </S.NoProductsInfo>
);

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <S.Wrapper>
    <Title>{texts.title}</Title>
    {products.length ? products.map(({ name, amount, unit }) =>
      <ProductsListItem
        key={name}
        amount={amount}
        name={name}
        unit={unit}
      />
    ) : <NoProducts />}
  </S.Wrapper>
);

export default ProductsList;
