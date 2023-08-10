import styled from 'styled-components';
import { ReactComponent as IconMove } from '../../../../../../icons/ChooseDay-icons/arrow-circle-broken-right.svg';
import { ReactComponent as IconPencil } from '../../../../../../icons/ChooseDay-icons/pencil-01.svg';
import { ReactComponent as IconTrash } from '../../../../../../icons/ChooseDay-icons/trash-04.svg';

export const ChangeDirIcon = styled(IconMove)`
  width: 16px;
  height: 16px;

  stroke: #111111;

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const PencilIcon = styled(IconPencil)`
  width: 16px;
  height: 16px;

  stroke: #111111;
  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const TrashIcon = styled(IconTrash)`
  width: 16px;
  height: 16px;

  stroke: #111111;

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

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

  background-color: inherit;
  border: none;
`;
