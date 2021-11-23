import React, { FC } from 'react';

import * as S from './Button.styles';
import { ButtonTypes } from 'types/types';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  kind?: ButtonTypes;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, kind, onClick }) =>
  <S.Button kind={kind} onClick={onClick}>{children}</S.Button>;

export default Button;
