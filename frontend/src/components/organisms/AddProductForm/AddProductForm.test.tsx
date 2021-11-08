import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <>
      <input value={inputValue} name='Name' onChange={handleInputChange} />
      <button disabled={!inputValue}>Add Product</button>
    </>
  );
};

describe('Add Product Form', () => {
  test('Button disabled when name input is empty', () => {
    render(<InputWithButton />);
    const button = screen.getByText('Add Product');
    expect(button).toBeDisabled();
  })
});
