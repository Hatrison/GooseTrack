import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'images/svg/closeModal.svg';

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
  min-width: 200px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border: ${({ theme }) => theme.modalBorder};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const MyCloseIcon = styled(CloseIcon)`
  stroke: ${({ theme }) => theme.modalCloseIcon};
  transition: stroke 250ms linear 0s;
  :hover {
    stroke: rgb(62, 133, 243);
  }
`;
