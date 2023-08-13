import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/plus-circle.svg';

export const PlusCircleIcon = styled(Icon)`
  width: 22px;
  height: 22px;

  stroke: ${({ theme }) => theme.mainTextColor};

  transition: stroke 250ms ease-in-out;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;

export const BtnAdd = styled.button`
  border: none;
  background-color: transparent;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const Title = styled.h3`
  font-family: 'InterSemiBolt';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: ${({ theme }) => theme.mainTextColor};

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
