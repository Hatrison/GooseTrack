import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from 'images/svg/rocket.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
`;

export const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 281px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  @media screen and (min-width: 768px) {
    max-width: 503px;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -28px;

  @media screen and (min-width: 768px) {
    margin-bottom: -80px;
  }
`;

export const Number = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 100px;
  line-height: 1.5;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const RocketStyled = styled(Rocket)`
  width: 166px;
  height: 202px;

  @media screen and (min-width: 768px) {
    width: 367px;
    height: 445px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  line-height: 1.29;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.mainTextColor};
  opacity: 0.7;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 387px;
    margin-bottom: 32px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -2%;
  font-weight: 600;
  margin: 0 auto;
  padding: 14px 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.buttontextColor};

  transition: ${({ theme }) => theme.defaultTransition};

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    box-shadow: ${({ theme }) => theme.buttonShadow};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
