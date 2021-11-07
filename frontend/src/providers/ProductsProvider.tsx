import React, { FC, useState } from 'react';
import { products as productsData } from 'mocks/products';
import { Product } from '../types/types';

export interface ProductsContextType {
  products: Product[],
  addProduct: (values: Product) => void,
  deleteProduct: (name: string) => void,
}

export const ProductsContext = React.createContext<ProductsContextType>({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

const ProductsProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(productsData);

  const addProduct = (values: Product) => {
    const newProduct: Product = {
      name: values.name,
      amount: values.amount,
      unit: values.unit,
    };
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (name: string) => {
    const filteredUsers = products.filter((product: Product) => product.name !== name);
    setProducts(filteredUsers);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
