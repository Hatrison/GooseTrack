import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.tasksColumnBorder};
  background: ${props => props.theme.mainBackgroundColor};

  @media screen and (max-width: 767px) {
    padding: 14px 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const ListDate = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;
`;
export const ListDay = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;
`;

export const ListItemDay = styled.li`
  font-family: 'InterSemiBold';
  font-size: 16px;
  line-height: 1.13;
  width: calc(100% / 7);
  text-align: center;
  color: ${props => props.theme.weekCalendarText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const ListItemDate = styled.li`
  color: ${props => props.theme.headerBurgerIcon};
  font-family: 'InterBold';
  font-size: 12px;
  line-height: 1.17;
  width: calc(100% / 7);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const CurrentDay = styled.p`
  display: inline;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 6px;

  color: ${props => props.theme.CurrentDate};
  background: ${props => props.theme.accentColor};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
  }
`;
