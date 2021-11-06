import React, { FunctionComponent, useEffect, useState } from 'react';
import ProductsListItem from '../../atoms/ProductsListItem/ProductsListItem';
import { Product, Unit } from '../../../types/types';

import * as S from './ProductsList.styles';

const texts: Record<string, string> = {
  title: 'Products list'
};

const productsData: Product[] = [
  {
    name: 'Pomidory',
    amount: '4',
    unit: Unit.PIECE
  },
  {
    name: 'Cebula',
    amount: '300',
    unit: Unit.WEIGHT
  },
  {
    name: 'Ogórek',
    amount: '2',
    unit: Unit.PACKS
  }
];

const ProductsList: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
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
};

export default ProductsList;
