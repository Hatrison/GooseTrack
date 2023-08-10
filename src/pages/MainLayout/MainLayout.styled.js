import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;
