import styled from 'styled-components';
import { ReactComponent as LogoutIconRaw } from 'images/svg/logout.svg';

export const LogoutIcon = styled(LogoutIconRaw)`
  width: 18px;
  height: 18px;
  margin-left: 6px;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 131px;
  height: 46px;
  border: 0;
  border-radius: 16px;
  background-color: #3e85f3;
  color: #ffffff;
  cursor: pointer;

  font-family: 'InterSemiBolt', sans-serif;';
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  font-size: 18px;

  padding: 28px 14px;
  margin: 20px 424px 74px 24px;

  &:hover ${LogoutIcon} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @media (min-width: 768px) {
    width: 141px;
    height: 56px;
    margin: 32px 563px 116px 24px;
    padding: 23px 16px;
  }

  @media (min-width: 1440px) {
    width: 141px;
    height: 56px;
    margin: 24px 439px 124px 24px;
    padding: 23px 16px;
  }
`;
