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
    min-height: 350px;
    margin-bottom: 40px;
  }
`;
