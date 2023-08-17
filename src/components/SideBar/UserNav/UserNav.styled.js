import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';
import { ReactComponent as CalendarIcon } from 'images/svg/calendarCheck.svg';
import { ReactComponent as ChartIcon } from 'images/svg/chart.svg';

const baseIconStyles = css`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.asideBarIcon};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const User = styled(UserIcon)`
  ${baseIconStyles}
`;

export const Calendar = styled(CalendarIcon)`
  ${baseIconStyles}
`;

export const Chart = styled(ChartIcon)`
  ${baseIconStyles}

  stroke: none;
  fill: ${({ theme }) => theme.asideBarIcon};
`;

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
  gap: 8px;
  padding: 10px 14px;

  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.asideBarLinkText};

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.asideBarActiveLinkBackground};
    color: ${({ theme }) => theme.asideBarActiveLinkText};
  }

  :focus ${User}, :hover ${User}, :focus ${Calendar}, :hover ${Calendar} {
    stroke: ${({ theme }) => theme.asideBarActiveLinkText};
  }

  :focus ${Chart}, :hover ${Chart} {
    fill: ${({ theme }) => theme.asideBarActiveLinkText};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
    gap: 10px;
  }
`;
