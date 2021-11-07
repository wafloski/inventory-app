import styled from 'styled-components';

const Selector = styled.select`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
`;

export default Selector;
