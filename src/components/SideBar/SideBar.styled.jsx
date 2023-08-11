import styled from 'styled-components';
import { NavLink as SidebarNav, Link as SidebarLink } from 'react-router-dom';
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
  border: 1px solid blue;
  background-color: white;
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

export const NavLink = styled(SidebarNav)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
