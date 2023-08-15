import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogInIcon } from '../../images/svg/IconLogin.svg';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  height: 100vh;
  background-color: #3e85f3;

  @media screen and (min-width: 768px) {
  }
`;

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Header = styled.h1`
  font-family: 'Inter', sans-serif;
  margin-top: 2px;
  margin-bottom: 32px;
  text-align: center;
  color: #ffffff;
  font-size: 44px;
  font-weight: bold;
  line-height: 1.09;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const Span = styled.span`
  font-style: italic;
`;

export const WrapLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 24px;
    flex-direction: row-reverse;
  }
`;

export const LinkSignUp = styled(Link)`
  display: block;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  text-decoration: underline;
  transition: all 250ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LinkLogIn = styled(Link)`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 14px 32px;
  background-color: #ffffff;
  border: none;
  border-radius: 16px;
  color: #3e85f3;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -2%;
  transition: all 250ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 22px;
  }
`;

export const Icon = styled(LogInIcon)`
  width: 18px;
  height: 18px;
`;
