import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
`;

export const NoProductsInfo = styled.div`
  margin-top: 60px;
  text-align: center;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddFirstProductLink = styled(NavLink).attrs({ exact: true })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.success};
  padding: 8px 20px;
  display: block;
  margin-top: 40px;
`;
