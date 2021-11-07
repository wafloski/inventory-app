import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'assets/styles/globalStyle';
import theme from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

import ProductsProvider from 'providers/ProductsProvider';

// import { Counter } from 'features/counter/Counter';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';

const App: FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <ProductsProvider>
          <Routes>
            <Route path='/add-product' element={<AddProduct />} />
          </Routes>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </ProductsProvider>
      </MainTemplate>
      {/*<Counter />*/}
    </ThemeProvider>
  </Router>
);

export default App;
