import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid #2a2a2a;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
`;

export const Field = styled(FormikField)`
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #2a2a2a;
  background-color: transparent;
  width: 150px;
`;
