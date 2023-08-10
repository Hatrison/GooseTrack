// import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 335px;
  height: 469px;

  background-color:  ${props => props.theme.mainBackgroundColor};
  border-radius: 8px;
  padding: 40px 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: 480px;
    margin-bottom: 14px;
  }
`;

export const TitleForm = styled.h1`
  font-family: 'InterSemiBolt';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  color: ${props => props.theme.accentColor};

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;

  color:  ${props => props.theme.mainTextColor};
  margin-top: 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
  }
`;

export const Input = styled.input`
  font-family: 'InterRegular';
  font-weight: 400;
  width: 100%;
  display: block;
  outline: none;
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  position: relative;

  :hover,
  :focus {
    border-color: #290b78;
  }
`;

export const Error = styled.div`
  position: absolute;
  top: 10;
  width: 250px;
  font-size: 10px;
  color: #c10430;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
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
    margin-top: 48px;
  }
`;

export const Password = styled.div`
  position: relative;
`;

export const ToggleHidePassword = styled.span`
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;
`;
