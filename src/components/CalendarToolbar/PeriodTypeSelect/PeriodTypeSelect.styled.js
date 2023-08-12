import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
export const ListItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
`;
export const StyledNavLink = styled(StyledLink)`
  font-family: Inter;
  color: ${({ theme }) => theme.accentColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColorAddTask};
  text-decoration: none;

  &.active {
    background-color: #cae8ff;
  }
  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
