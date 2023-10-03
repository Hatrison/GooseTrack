import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  width: 100%;
  padding: 34px 14px 135px 14px;

  @media screen and (min-width: 768px) {
    padding: 132px 32px 224px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 134px 114px 104px 114px;
  }
`;
