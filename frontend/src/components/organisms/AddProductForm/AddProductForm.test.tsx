import React from 'react';

import AddProductForm from './AddProductForm';
import { renderWithProviders } from 'helpers/testHelpers';
import { screen, fireEvent } from '@testing-library/react';
import Dashboard from '../../../views/Dashboard';

describe('Add User Form', () => {
  test('Render the component', () => {
    renderWithProviders(
      <>
        <AddProductForm />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Test Tomato' }});
    fireEvent.change(screen.getByTestId('Amount'), { target: { value: '10' }});
    fireEvent.click(screen.getByText('Add product'));
    screen.getByText('Test Tomato');
  });
})
