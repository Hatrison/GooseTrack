import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { ReactComponent as IconError } from 'images/svg/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'images/svg/done.svg';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 335px;
  padding: 28px 20px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  @media screen and (max-width: 375px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 32px;
  }
`;

export const FormField = styled.label`
  font-family: 'InterNormal', sans-serif;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.feedbackLabelColor};
  margin-top: 18px;
  margin-bottom: 8px;
`;

export const Field = styled(FormikField)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  height: 42px;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.inputBorder};
  background-color: transparent;
  padding: 12px 14px;
  color: ${({ theme }) => theme.inputText};
  transition: ${({ theme }) => theme.defaultTransition};

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.placeholderColor};
  }
  :hover,
  :focus {
    outline: none;
  }

  @media (min-width: 768px) {
    line-height: 1.13;
    padding: 14px 18px;
    height: 46px;
  }
`;

export const IconContainer = styled.div`
  position: relative;
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

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const StyledButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.buttontextColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};

  border-radius: 8px;

  border: 0;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;

export const CancelButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.feedbackCancelButton};
  color: ${({ theme }) => theme.mainTextColor};

  border: 0;
  cursor: poiner;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #ffffff;
    background-color: #3e85f3;
  }

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;
