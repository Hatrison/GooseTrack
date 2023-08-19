import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  width: 100%;
  padding: 0 14px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 114px;
  }
`;
