import styled from 'styled-components';

import { ButtonProps } from './Button';
import { ButtonTypes } from 'types/types';

export const Button = styled.button<ButtonProps>`
  margin: 15px 0;
  padding: 8px 20px;
  font-size: 18px;
  background-color: ${({ theme, kind }) => kind === ButtonTypes.SUBMIT ? theme.colors.success : ButtonTypes.DELETE ? theme.colors.error : theme.colors.black};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: .25s;
`;
