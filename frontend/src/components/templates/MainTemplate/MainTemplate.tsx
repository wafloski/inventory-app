import React, { FunctionComponent } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';

import * as S from './MainTemplate.styles'

const MainTemplate: FunctionComponent = ({ children }) => (
  <S.Wrapper>
    <Navigation />
    {children}
  </S.Wrapper>
);

export default MainTemplate;
