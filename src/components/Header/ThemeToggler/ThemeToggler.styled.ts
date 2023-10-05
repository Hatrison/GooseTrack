import styled from 'styled-components';
import { ReactComponent as ToDark } from 'images/svg/toggleToDark.svg';
import { ReactComponent as ToLight } from 'images/svg/toggleToLight.svg';

export const ToggleButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: ${({ theme }) => theme.defaultTransition};
  :hover,
  :focus {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ToggleToDark = styled(ToDark)`
  fill: ${({ theme }) => theme.accentColor};
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const ToggleToLight = styled(ToLight)`
  fill: ${({ theme }) => theme.accentColor};
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
