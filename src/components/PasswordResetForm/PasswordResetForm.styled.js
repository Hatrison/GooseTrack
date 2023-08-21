import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 335px;
  min-height: 300px;
  margin-bottom: 32px;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 24px;

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 480px;
    min-height: 340px;
    margin-bottom: 40px;
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
    font-size: 18px;
    line-height: 24px;
    padding: 16px;
    margin-top: 48px;
  }
`;
