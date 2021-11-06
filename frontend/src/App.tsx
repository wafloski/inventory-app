import React from 'react';

import { Counter } from './features/counter/Counter';
import ProductsList from './components/organisms/ProductsList/ProductsList';

import GlobalStyle from './assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductsList />
    <Counter />
  </ThemeProvider>
);

export default App;
