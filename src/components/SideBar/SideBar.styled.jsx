import styled from 'styled-components';
import { ReactComponent as IconClose } from 'images/svg/close.svg';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';

export const SidebarOverlay = styled.div`
    width: 225px;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  
`;

export const SidebarWrap = styled.div`
  border: 1px solid #3e85f3;
  background-color: ${({ theme }) => theme.asideBarBackground};
  min-height: 100vh;
  width: 225px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 250ms ease-in-out;
  position: relative;

  @media (max-width: 1440px) {
    position: absolute;
    z-index: 2;

    transition: 250ms ease-in-out;
    @media (min-width: 768px) {
      width: 289px;
    }
    @media (min-width: 1440px) {
      z-index: 1;
      width: 289px;
    }
  }
`;

export const SidebarCover = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CloseIcon = styled(IconClose)`
  position: absolute;
  top: 38px;
  right: 24px;
  width: 24px;
  height: 24px;
  margin-left: 0;
  border: 0;
  stroke: assideBarCloseIconColor;
  stroke: ${({ theme }) => theme.assideBarCloseIconColor};

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
    margin-left: 31px;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 36px;
  height: 35px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
    margin-left: 10px;
  }
`;

export const LogoText = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 6px;
  padding-bottom: 0;
  color: asideBarLogoText;
  color: ${({ theme }) => theme.asideBarLogoText};

  @media (min-width: 1440px) {
    margin-left: 22px;
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: asideBarTitle;
  color: ${({ theme }) => theme.asideBarTitle};
  margin-left: 0;
`;
