import styled from 'styled-components';
import { Form as FormikForm, Field as FormikFieldAdd } from 'formik';
import { ReactComponent as plus } from '../../images/account/plus.svg';
//import { ReactComponent as Avatar } from '../../images/svg/user.svg';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border-radius: ${({ theme }) => theme.bordeRadius};

  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1400px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FieldAdd = styled(FormikFieldAdd)`
  display: none;
`;

export const UserWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  gap: 50px;
`;

export const WrapperForm = styled.div`
  max-width: 375px;
  padding-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    max-width: 100%;
    min-width: 768px;
    padding-bottom: 38px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
    padding-bottom: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 14px;
  width: 72px;
  height: 72px;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  fill: rgba(62, 133, 243, 0.18);
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border: 2px solid #3e85f3;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const ImgAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AddIcon = styled(plus)`
  position: absolute;
  left: 53%;
  top: 25px;
  width: 14px;
  height: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;

export const DefaultAvatar = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  background-color: blue;
`;
