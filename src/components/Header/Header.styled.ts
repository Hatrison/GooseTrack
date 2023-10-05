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
    align-items: start;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const BurgerIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.headerBurgerIcon};
  transition: ${({ theme }) => theme.defaultTransition};

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }

  :focus,
  :hover {
    stroke: ${({ theme }) => theme.accentColor};
    transform: scale(1.2);
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const AddFeedbackBtn = styled.button`
  font-family: 'InterSemiBolt', sans-serif;
  font-size: 12px;

  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttontextColor};
  box-shadow: ${({ theme }) => theme.buttonShadow};

  height: 32px;
  min-width: 97px;
  border-radius: 10px;
  border: none;
  margin-right: 18px;
  padding: 8px 20px;
  cursor: pointer;

  transition: ${({ theme }) => theme.defaultTransition};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    transform: scale(1.1);
  }

  @media screen and (max-width: 290px) {
    min-width: 50px;
    font-size: 8px;
    padding: 4px 10px;
    height: 16px;
    margin-right: 6px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    min-width: 130px;
    height: 42px;
    padding: 12px 32px;
    margin-right: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
