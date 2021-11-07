import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 10px;
`;

export const Name = styled.span`
  width: 60%;
  font-size: 20px;
  display: inline-block;
`;

export const Amount = styled.span`
  width: 25%;
  font-size: 20px;
  display: inline-block;
  font-weight: bold;
`;

export const Unit = styled.span`
  width: 15%;
  font-size: 14px;
  display: inline-block;
  font-weight: lighter;
  text-align: right;
`;
