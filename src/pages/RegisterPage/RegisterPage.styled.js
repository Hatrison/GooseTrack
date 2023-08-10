import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Сontainer = styled.div`
  min-height: 100vh;
  background: #dcebf7;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 400px;
    height: 417px;
    position: absolute;
    bottom: 0;
    left: 50px;
  }
`;

export const Text = styled.div`
  width: 140px;
  font-family: 'InterSemiBolt';
  font-weight: 600;
  position: absolute;
  top: 43px;
  left: 107px;
  font-size: 14px;
  line-height: 1.15;
  color: black;
  z-index: 2;
  transform: rotate(-27deg);
`;