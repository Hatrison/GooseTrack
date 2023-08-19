import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
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
  border-radius: 29px;
  border: 0.8px solid #e3f3ff;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    height: 413px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 424px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    height: 440px;
    padding: 40px;
  }
`;

export const HeadContainer = styled.section`
  /* position: absolute;
  top: 12%;
  left: 11%; */
  /* position: relative; */
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 48px;

  /* @media screen and (min-width: 375px) and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 54px;
    padding-right: 54px;
  } */
`;

export const PeriodTime = styled.div`
  display: flex;
  gap: 14px;
`;

export const Period = styled.span`
  color: #343434;
  font-size: 16px;
  color: ${props => props.theme};
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
