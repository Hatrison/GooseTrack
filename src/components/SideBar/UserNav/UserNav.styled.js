import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';
import { ReactComponent as CalendarIcon } from 'images/svg/calendarCheck.svg';
import { ReactComponent as ChartIcon } from 'images/svg/chart.svg';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px), @media (min-width: 1440px) {
    gap: 16px;
  }
`;

export const Link = styled(LinkRouter)` 
  display: inline-block;
  width: 185px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px, 10px, 65px, 10px;
  background-color: transparent;

  @media (min-width: 768px) {
  width: 225px;
  height: 56px;
  padding: 20px, 16px, 80px, 16px;
  font-size: 16px;
}

  @media (min-width: 1440px) {
  width: 241px;
  height: 56px;
  padding: 20px, 16px, 96px, 16px;
  font-size: 16px;
}

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(color: #000000) : (color: #FFFFFF)};

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (background-color: #E3F3FF) : (background-color: #3E85F3)};

  }
`;

export const User = styled(UserIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) =>
  !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;

export const Calendar = styled(CalendarIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) =>
  !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;

export const Chart = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) =>
  !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;
