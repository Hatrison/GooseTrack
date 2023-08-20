import styled from 'styled-components';

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;
