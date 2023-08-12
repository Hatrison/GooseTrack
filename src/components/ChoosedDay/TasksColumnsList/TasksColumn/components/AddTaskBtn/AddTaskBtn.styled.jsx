import styled from 'styled-components';
import { ReactComponent as IconPlus } from 'images/svg/plusAdd.svg';

export const Icon = styled(IconPlus)`
  width: 24px;
  height: 24px;

  stroke: ${({ theme }) => theme.mainTextColor};

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
  color: ${({ theme }) => theme.mainTextColor};

  background-color: ${({ theme }) => theme.buttonBackgroundColorAddTask};
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
    background-color: #2b78ef;
    color: #ffffff;
  }

  &:hover ${Icon}, &:focus ${Icon} {
    stroke: #ffffff;
  }
`;
