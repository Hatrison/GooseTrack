import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  position: relative;
  display: block;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  transition: transform 0.3s ease-in-out;
  color: ${props => props.theme.accentColor};

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;

    content: '';
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.accentColor};
  }

  :hover,
  :focus {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
