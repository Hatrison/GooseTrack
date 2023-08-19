import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 100%;

  @media screen and (min-width: 390px) and (max-width: 768px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 862px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  margin-top: auto;
  width: 100%;
  border-radius: 20px;
  border: ${({ theme }) => theme.statisticsBorder};
  padding: 40px 14px;
  height: 413px;

  @media screen and (min-width: 768px) {
    height: 424px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    height: 440px;
    padding: 40px;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 48px;
`;

export const PeriodTime = styled.div`
  display: flex;
  gap: 14px;
`;

export const Period = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'InterRegular', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.periodColor};
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
