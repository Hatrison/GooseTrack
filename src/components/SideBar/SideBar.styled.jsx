import styled from 'styled-components';
import { ReactComponent as IconClose } from 'images/svg/close.svg';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';

export const SidebarOverlay = styled.div`
  width: 225px;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 290px;
  }
`;

export const SidebarWrap = styled.div`
  background-color: ${({ theme }) => theme.asideBarBackground};
  min-height: 100vh;
  width: 225px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) {
    width: 289px;
  }
`;

export const SidebarCover = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 64px;
`;

export const CloseIcon = styled(IconClose)`
  position: absolute;
  top: 29px;
  right: 20px;
  width: 24px;
  height: 24px;
  border: 0;
  stroke: ${({ theme }) => theme.assideBarCloseIconColor};
  transition: ${({ theme }) => theme.defaultTransition};
  cursor: pointer;

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
    margin-left: 31px;
    margin-top: 4px;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 36px;
  height: 35px;

  @media (min-width: 768px) {
    width: 60px;
    height: 58px;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    width: 71px;
    height: 68px;
    margin-bottom: 32px;
    margin-left: 10px;
  }
`;

export const LogoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.asideBarLogoText};

  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 6px;
    margin-top: 17px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    margin-left: 10px;
    margin-top: 22px;
  }

  & span {
    font-style: italic;
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.asideBarTitle};
  margin-bottom: 24px;
`;
