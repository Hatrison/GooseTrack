import styled from 'styled-components';

export const SidebarOverlay = styled.div`
  @media (max-width: 1439px) {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const SidebarWrap = styled.div`
  border: 1px solid #3e85f3;
  background-color: #ffffff;
  min-height: 100vh;
  width: 290px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 250ms ease-in-out;

  @media (max-width: 1440px) {
    position: absolute;
    z-index: 2;

    transition: 250ms ease-in-out;
    @media (min-width: 768px) {
      width: 290px;
    }
    @media (min-width: 1440px) {
      z-index: 1;
      position: relative;
    }
  }
`;

export const SidebarCover = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 25px;
  border: 0;
  stroke: #000000;
  fill: transparent;
  background-color: ${({ theme }) => !theme.secondaryBackgroundColor};

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
    margin-left: 31px;
  }
`;

export const Logo = styled.img`
  margin-bottom: 64px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }

  background-color: ${({ theme }) => !theme.secondaryBackgroundColor};
`;
