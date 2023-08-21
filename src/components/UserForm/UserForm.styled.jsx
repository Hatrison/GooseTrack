import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikFieldAdd,
  Field as Input,
} from 'formik';

import { ReactComponent as plus } from '../../images/account/plus.svg';

export const WrapperForm = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 40px;
  position: relative;
  @media screen and (min-width: 375px) and (max-width: 768px) {
    max-width: 335px;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
    padding-bottom: 38px;
  }
  @media (min-width: 1440px) {
    min-width: 100%;
    padding-bottom: 32px;
  }
`;

export const Form = styled(FormikForm)`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 59px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border-radius: 16px;
  @media (min-width: 768px) {
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FieldAdd = styled(FormikFieldAdd)`
  display: none;
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.labelText};
  @media screen and (min-width: 375px) and (max-width: 768px) {
    min-width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const InputInfo = styled(Input)`
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
    color: ${({ theme }) => theme.placeholderColor};
  }
  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.inputText};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
    padding: 14px 18px;
    height: 46px;
  }
`;

export const IconStatusBox = styled.div`
  position: relative;
  height: 46px;
  @media (min-width: 768px) {
    height: 46px;
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
  gap: 18px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 1440px) {
    margin-top: 88px;
  }
`;

export const ControlBtn = styled.button`
  align-items: center;
  min-width: 195px;
  height: 46px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttontextColor};
  transition: ${({ theme }) => theme.defaultTransition};
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
  }
  &:disabled {
    opacity: 0.45;
  }
  @media screen and (max-width: 240px) {
    min-width: 100px;
    font-size: 10px;
  }
  @media (min-width: 768px) {
    min-width: 262px;
    height: 48px;
  }
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

export const UserTitle = styled.h2`
  color: ${({ theme }) => theme.titleTextColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const User = styled.p`
  color: ${({ theme }) => theme.labelText};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
