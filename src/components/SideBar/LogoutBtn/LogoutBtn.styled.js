import styled from 'styled-components';
import { ReactComponent as LogoutIconRaw } from 'images/svg/logout.svg';

export const LogoutIcon = styled(LogoutIconRaw)`
  width: 18px;
  height: 18px;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 6px;

  padding: 14px 28.5px;
  border: 0;
  border-radius: 16px;
  background-color: #3e85f3;
  color: #ffffff;
  cursor: pointer;

  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  &:hover ${LogoutIcon} {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 18px 23px;
    gap: 11px;
  }
`;
