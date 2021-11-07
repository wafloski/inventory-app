import React, { FC, useContext } from 'react';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import ProductsList from 'components/organisms/ProductsList/ProductsList';
import { ProductsContext } from 'providers/ProductsProvider';

const Dashboard: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <ViewWrapper>
      <ProductsList products={products} />
    </ViewWrapper>
  );
};

export default Dashboard;
