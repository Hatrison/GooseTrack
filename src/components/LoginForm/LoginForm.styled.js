import {  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,} from 'formik';
import styled from 'styled-components';


export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background-color: #dcebf7;

  @media screen and (min-width: 1200px) {
    background: url(../../shared/images/GooseImg/goose-rocket/goose-rocket.png),
      url(), #dcebf7;
    background-repeat: no-repeat;
    background-position-x: calc(50% + (480px / 2) + (368px / 2) + 52px),
      calc(50% + (480px / 2) + (207px / 2) + 156px);
    background-position-y: calc(50% + 212px - 66px),
      calc(50% + 212px - 66px - (717px / 2) + (174px / 2) + 76px);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 480px;

  & > a {
    position: relative;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: var(--main-blue-color);

    &:before {
      position: absolute;
      bottom: 0;
      left: 0;

      content: '';
      width: 100%;
      height: 1px;
      background-color: var(--main-blue-color);
    }
  }
`;

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 24px;
width: 100%;

padding: 40px 24px;
margin-bottom: 8px;

background-color: #fff;
border-radius: 8px;

@media (min-width: 768px) {
  padding: 40px;
}
`;

export const FormTitle = styled.div`
  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;

  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  margin-bottom: 0.5rem;
`;

export const Field = styled(FormikField)`
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
`;



export const SubmitBtn = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;
  padding: 14px;
  margin-top: 0.5rem;

  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #fff;

 
`;

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;

  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
`; 
export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 4px;
  font-size: 14px;
  color: red;
  max-width: 400px;
`;

export const GooseIMG = styled.img`
  display: none;

  @media (min-width: 1120px) {
    position: fixed;
    width: 368px;
    height: 521px;
    right: 20px;
    bottom: 20px;
    display: block;
  }
`;