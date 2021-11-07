import styled from 'styled-components';

const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 6px;
`;

export default Label;
