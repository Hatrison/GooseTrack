import styled from 'styled-components';
import { ReactComponent as IconClose } from 'images/svg/close.svg';
import { ReactComponent as LogoIcon } from 'images/svg/logo.svg';

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  @media screen and (min-width: 1440px) {
    width: 290px;
    z-index: 0;
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
    padding: 24px 32px;
    width: 289px;
  }

  @media (min-width: 1440px) {
    padding: 24px;
    padding-top: 32px;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    gap: 10px;
    margin-bottom: 32px;
  }
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
    top: 36px;
    right: 32px;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 36px;
  height: 35px;

  @media (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;

export const LogoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.asideBarLogoText};

  @media (min-width: 1440px) {
    font-size: 24px;
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

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;
