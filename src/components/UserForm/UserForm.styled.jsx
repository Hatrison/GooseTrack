import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)``;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
