import React from 'react';

import FormField from './FormField';
import { renderWithProviders } from 'helpers/testHelpers';

describe('Form Field', () => {
  test('Render the component', () => {
    renderWithProviders(<FormField value='name' label='name' name='name' id='name' type='name' onChange={() => {}} />)
  });
})
