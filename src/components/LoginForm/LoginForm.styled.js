import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/buttonLogReg.svg';
import { ReactComponent as IconError } from 'images/svg/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'images/svg/done.svg';

export const FormContainer = styled.div`
  min-height: 100vh;
  background: #dcebf7;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  & > a {
    position: relative;
    display: block;
    font-family: 'InterSemiBolt', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;

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
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const Form = styled(FormikForm)`
  width: 335px;
  min-height: 376px;
  margin-bottom: 32px;

  background-color: ${({ theme }) => theme.backgroundColorForm};
  border-radius: 8px;
  padding: 40px 24px;

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 480px;
    min-height: 424px;
    margin-bottom: 40px;
  }
`;

export const FormTitle = styled.h1`
  font-family: 'InterSemiBolt', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 32px;
  color: ${props => props.theme.accentColor};

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

export const FormField = styled.label`
  display: block;
  font-family: 'InterSemiBolt', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  position: relative;

  color: ${props => props.theme.mainTextColor};
  :nth-of-type(even) {
    margin-top: 24px;
  }
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
    :nth-of-type(even) {
      margin-top: 18px;
    }
  }
`;

export const Field = styled(FormikField)`
font-family: 'InterRegular', sans-serif;
font-weight: 400;
font-size: 16px;
height: 100%; 
width: 100%;
display: block;
outline: none;
padding: 14px;
color: ${({ theme }) => theme.loginInputColor};
border: ${({ theme }) => theme.loginInputBorder};
border-radius: 8px;

:hover,
:focus {
 border-color: #290b78;
}

::placeholder {
font-family: 'InterSemiBolt', sans-serif;
font-size: 16px;
font-style: normal;
line-height: 18px; 
color: rgba(17, 17, 17, 0.15);

@media (min-width: 768px) {
  padding: 19px;
}
`;

export const ErrorIcon = styled(IconError)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CorrectIcon = styled(IconCorrect)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ErrorTag = styled.div`
  color: ${({ theme }) => theme.errorTagColor};
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const CorrectTag = styled.div`
  color: ${({ theme }) => theme.correctTagColor};
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const IconContainer = styled.div`
height: 50px;
position: relative;

@media (min-width: 768px) {
  height: 56px;
}

`;

export const ButtonIcon = styled(Icon)`
  fill: transparent;
  stroke: #ffffff;
  width: 18px;
  height: 18px;
  margin-left: 13px;

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
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitBtn = styled.button`
border: transparent;
cursor: pointer;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: 'InterSemiBolt', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
background: ${props => props.theme.accentColor};
box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
border-radius: 16px;
color: ${props => props.theme.secondaryTextColor};

padding: 14px;
margin-top: 32px;

:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  font-size: 18px;
  line-height: 24px;
  margin-top: 48px;
  padding: 16px;
}

&:hover ${ButtonIcon} {
  animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;}

`;

export const GooseIMG = styled.img`
  display: none;

  @media (min-width: 1280px) {
    position: fixed;
    width: 368px;
    height: 521px;
    right: 60px;
    bottom: 19px;
    display: block;
  }
`;
