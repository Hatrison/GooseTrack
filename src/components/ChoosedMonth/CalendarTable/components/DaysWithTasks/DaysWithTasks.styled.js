import styled from 'styled-components';

export const StyledTd = styled.td`
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 94px;

  border: ${({ theme }) => theme.tableBorder};
  transition: border 250ms linear;
  text-align: center;
  vertical-align: top;
  padding-top: 40px;
  &:hover,
  &:focus {
    border: 1px solid #3e85f3;
  }
  .today {
    color: white;
    background-color: ${({ theme }) => theme.accentColor};
  }

  @media (min-width: 768px) {
    height: 144px;
    width: 100px;
    padding-top: 50px;
  }

  @media (min-width: 1440px) {
    height: 125px;
    width: 156px;
    padding-top: 40px;
  }
`;

export const StyledDay = styled.p`
  position: absolute;
  top: 8px;
  right: 4px;

  padding: 4px 6px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: ${({ theme }) => theme.calendarDate};

  border-radius: 6px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    top: 14px;
    right: 14px;
  }

  @media (min-width: 1440px) {
    top: 8px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;

  flex-grow: 1;

  color: ${({ theme }) => theme.calendarDate};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
