import styled from 'styled-components';
import { ReactComponent as IconMove } from 'images/svg/iconMove.svg';
import { ReactComponent as IconPencil } from 'images/svg/iconEdit.svg';
import { ReactComponent as IconTrash } from 'images/svg/iconDelete.svg';

export const ChangeDirIcon = styled(IconMove)`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.mainTextColor};

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.accentColor};
  }
`;

export const PencilIcon = styled(IconPencil)`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.accentColor};
  }
`;

export const TrashIcon = styled(IconTrash)`
  width: 16px;
  height: 16px;

  stroke: ${({ theme }) => theme.mainTextColor};

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: ${props => props.theme.accentColor};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  width: 62px;
  list-style: none;

  @media screen and (min-width: 768px) {
    width: 68px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  background-color: inherit;
  border: none;
`;
