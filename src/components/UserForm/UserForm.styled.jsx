import styled from 'styled-components';
import { Form as FormikForm, Field as FormikFieldAdd } from 'formik';
import { ReactComponent as plusCircle } from '../../images/svg/plus.svg';
import { ReactComponent as Avatar } from '../../images/svg/user.svg';

export const Form = styled(FormikForm)``;

export const FieldAdd = styled(FormikFieldAdd)`
  display: none;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AddIcon = styled(plusCircle)`
  width: 24px;
  height: 24px;
  display: block;
  background-color: blue;
`;

export const DefaultAvatar = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  background-color: blue;
`;
