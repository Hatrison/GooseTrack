import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

import { ReactComponent as LoginIcon } from 'images/svg/buttonLogReg.svg';
import { ReactComponent as IconError } from 'images/svg/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'images/svg/done.svg';

export const Form = styled(FormikForm)`
  width: 335px;
  height: 100%;
  z-index: 2;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 24px;
  margin-bottom: 8px;

  @media screen and (max-width: 374px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 100%;
    padding: 40px;
    margin-bottom: 14px;
  }
`;

export const TitleForm = styled.h1`
  font-family: 'InterSemiBolt', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #3e85f3;
  // margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 24px;
    // margin-bottom: 40px;
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

  color: #111111;
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
  width: 100%;
  display: block;
  outline: none;
  padding: 14px;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;
  margin-top: 10px;

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
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
`;

export const ToggleHidePassword = styled.span`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 16px;
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
  line-height: 1.3;
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  color: #ffffff;

  padding: 14px;
  margin-top: 32px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    margin-top: 48px;
    font-size: 18px;
    padding: 16px;
  }
`;

export const IconButton = styled(LoginIcon)`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Error = styled(FormikErrorMessage)`
  margin-left: 4px;
  font-size: 14px;
  color: red;
  max-width: 400px;
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
  color: #e74a3b;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const CorrectTag = styled.div`
  color: #3cbc81;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const IconContainer = styled.div`
  position: relative;
`;
