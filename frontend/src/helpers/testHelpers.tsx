import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import ProductsProvider from '../providers/ProductsProvider';

export const renderWithProviders = (children: any) =>
  render(
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </ThemeProvider>
  );
