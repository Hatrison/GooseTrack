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
  padding-right: 23px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  color: #84828A;
  color: ${({ theme }) => theme.asideBarLinkText};

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.asideBarActiveLinkBackground};
  }

  @media (min-width: 768px) {
    width: 225px;
    height: 56px;
    padding-right: 47px;
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
  position: absolute;
  top: 10px;
  left: 12px;
  width: 20px;
  height: 20px;
  margin-left: 4px;
  stroke: asideBarIcon;
  stroke: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.asideBarIconActive};
  }

  @media (min-width: 768px) {
    top: 16px;
    left: 12px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  @media (min-width: 1440px) {
    top: 16px;
    left: 2px;
    width: 24px;
    height: 24px;
  }
`;

export const Calendar = styled(CalendarIcon)`
  position: absolute;
  top: 68px;
  left: 15px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 0;
  stroke: asideBarIcon;
  stroke: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.accentColor};
  }

  @media (min-width: 768px) {
    top: 87px;
    left: 15px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1440px) {
    top: 87px;
    left: 3px;
    width: 24px;
    height: 24px;
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const Chart = styled(ChartIcon)`
  position: absolute;
  top: 126px;
  left: 15px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-left: 0;
  stroke: asideBarIcon;
  stroke: ${({ theme }) => theme.asideBarIcon};

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.asideBarIconActive};
  }

  @media (min-width: 768px) {
    top: 162px;
    left: 15px;
    width: 24px;
    height: 24px;
  }
  
  @media (min-width: 1440px) {
    top: 161px;
    left: 6px;
    width: 24px;
    height: 24px;
    font-size: 16px;
  }
`;

