import styled from 'styled-components';

export const StyledTable = styled.table`
  border-spacing: 0;
  border-style: hidden;
  height: 470px;

  width: 100%;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};

  @media (min-width: 768px) {
    height: 720px;
  }
  @media (min-width: 1440px) {
    height: 625px;
  }
`;

export const OverflowWrapper = styled.div`
  max-height: 472px;
  overflow-y: auto;

  border: ${({ theme }) => theme.tableBorder};
  border-radius: 8px;

  @media (min-width: 768px) {
    max-height: 722px;
  }
  @media (min-width: 1440px) {
    max-height: 627px;
  }
`;
