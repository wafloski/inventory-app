import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default Button;
