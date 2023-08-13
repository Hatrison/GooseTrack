import styled from 'styled-components';
import { ReactComponent as IconMove } from 'images/svg/iconMove.svg';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;

  position: absolute;
  top: -56px;
  right: 80px;

  width: 115px;
  background-color: ${props => props.theme.mainBackgroundColor};
  transition: ${props => props.theme.defaultTransition};
  border: 1px solid ${props => props.theme.changeTaskDirModalBorder};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;

  @media (min-width: 768px) {
    padding: 20px 24px;
    width: 147px;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;

    width: 87px;
    color: ${props => props.theme.mainTextColor};
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    @media (min-width: 768px) {
      width: 99px;
    }
  }
`;

export const ChangeDirIconModal = styled(IconMove)`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.mainTextColor};

  transition: stroke 250ms ease-in-out;
`;

export const ModalBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  font-family: 'InterNormal';
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.mainTextColor};
  width: 100%;
  background-color: ${props => props.theme.mainBackgroundColor};
  border: 0;
  cursor: pointer;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${props => props.theme.accentColor};
  }

  &:hover ${ChangeDirIconModal}, &:focus ${ChangeDirIconModal} {
    stroke: #3e85f3;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
