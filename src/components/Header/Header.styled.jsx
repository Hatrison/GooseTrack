import styled from 'styled-components';
import { ReactComponent as Icon } from '../../images/svg/menuBurger.svg';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const BurgerIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  fill: black;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const AddFeedbackBtn = styled.button`
  font-size: 12px;

  height: 32px;
  background-color: #3e85f3;
  color: white;
  border-radius: 9px;
  border: none;
  margin-right: 18px;
  padding: 8px 20px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ThemeToggler = styled.div`
  width: 24px;
  height: 24px;
  background-color: blue;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: blue;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
