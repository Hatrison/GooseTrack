import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/x-close.svg';

// Styled Components
export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;

  background-color: ${p => p.theme.colors.modal_window};
  border: none;

  min-width: 100px;
  min-height: 100px;

  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: ${p => p.theme.shadows.modalShadow};
  border-radius: ${p => p.theme.radii.small};

  /* @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    max-width: 468px;
    width: 468px;
  } */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  stroke: black;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    top: 18px;
    right: 18px;
  }

  /* @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    max-width: 468px;
    width: 468px;
  } */
`;

export const MyCloseIcon = styled(CloseIcon)`
  stroke: ${p => p.theme.colors.primary_text_mode};
  :hover {
    stroke: rgb(62, 133, 243);
    transition: stroke 250ms linear 0s;
  }
`;