import React, { FC } from 'react';

import * as S from './Navigation.styles';

const Navigation: FC = () => (
  <S.Wrapper>
    <S.Logo>
      <h1>InventoryAPP</h1>
    </S.Logo>
    <S.Anchor to='/'>Dashboard</S.Anchor>
    <S.Anchor to='/add-product'>Add product</S.Anchor>
    {/*<S.Anchor to='/'>Settings</S.Anchor>*/}
    {/*<S.Anchor to='/'>Logout</S.Anchor>*/}
  </S.Wrapper>
);

export default Navigation;
