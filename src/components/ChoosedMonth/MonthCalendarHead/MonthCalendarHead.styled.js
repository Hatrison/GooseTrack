import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 14px 0px;

  border: ${({ theme }) => theme.cellBorder};
  border-radius: 8px;
  margin-bottom: 14px;

  background-color: ${({ theme }) => theme.mainBackgroundColor};

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;
export const StyledItem = styled.li`
  color: ${props =>
    props.item === 'SAT' || props.item === 'SUN'
      ? props.theme.monthHolidayColor
      : props.theme.monthMainColor};

  .full-name {
    display: block;
  }
  .short-name {
    display: none;
  }

  @media (max-width: 480px) {
    .full-name {
      display: none;
    }

    .short-name {
      display: block;
    }
  }
`;
