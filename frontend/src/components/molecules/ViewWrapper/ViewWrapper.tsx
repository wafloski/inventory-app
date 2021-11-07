import styled from 'styled-components';

const ViewWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: auto;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export default ViewWrapper;
