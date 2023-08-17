import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';
import { ReactComponent as CalendarIcon } from 'images/svg/calendarCheck.svg';
import { ReactComponent as ChartIcon } from 'images/svg/chart.svg';

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  height: 40px;
  
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  color: #84828a;
  color: ${({ theme }) => theme.asideBarLinkText};

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.asideBarActiveLinkBackground};
    color: ${({ theme }) => theme.asideBarActiveLinkText};
  }
   
  @media (min-width: 768px) {
    width: 225px;
    height: 56px;
    padding-left: 0;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 190px;
    height: 56px;
    padding-right: 30px;
    font-size: 16px;
  }
`;

export const User = styled(UserIcon)`
  width: 20px;
  height: 20px;
  margin-left: -60px;
  margin-right: 8px;
  stroke: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.asideBarIconActive};
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: -84px;
  }

  @media (min-width: 1440px) {
    margin-left: -18px;
  }
`;

export const Calendar = styled(CalendarIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: -76px;
  stroke: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.asideBarIconActive};
  }

  @media (min-width: 768px) {
    margin-left: -104px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1440px) {
    margin-left: -30px;
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const Chart = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  margin-left: -76px;
  fill: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    fill: ${({ theme }) => theme.asideBarIconActive};
  }

  @media (min-width: 768px) {
    margin-left: -104px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1440px) {
    margin-left: -30px;
    font-size: 16px;
  }
`;
