import styled from 'styled-components';
import { ReactComponent as IconPlus } from '../../../../../../icons/ChooseDay-icons/plus.svg';

export const Icon = styled(IconPlus)`
  width: 24px;
  height: 24px;

  stroke: #111111;

  transition: stroke 250ms ease-in-out;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  font-family: 'InterSemiBolt';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  color: #111111;

  background-color: #e3f3ff;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  cursor: pointer;

  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  @media screen and (max-width: 767px) {
    height: 48px;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }

  &:hover,
  &:focus {
    background-color: #3e85f3;
    color: #ffffff;
  }

  &:hover ${Icon}, &:focus ${Icon} {
    stroke: #ffffff;
  }
`;
