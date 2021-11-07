import React from 'react';
import { units } from 'constants/constants';

export const renderUnitsSelectorOptions = () => {
  return units.map(unit => <option key={unit} value={unit}>{unit}</option>);
};
