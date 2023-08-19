import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikFieldAdd,
  Field as Input,
} from 'formik';
import { DatePicker } from '@mui/x-date-pickers';
import { ReactComponent as plus } from '../../images/account/plus.svg';

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

export const Form = styled(FormikForm)`
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
  min-width: 299px;
    font-weight: 400;
  font-size: 12px;
  line-height: 1.17
  color: ${({ theme }) => theme.labelText};

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
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.inputBorder};
  background-color: transparent;
  padding: 12px 14px;
  color: ${({ theme }) => theme.inputText};
  transition: ${({ theme }) => theme.defaultTransition};

  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13
    padding: 14px 18px;
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

export const BtnSave = styled.button`
  align-items: center;
  min-width: 195px;
  height: 46px;
  margin-top: 40px;
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

  @media (min-width: 768px) {
    min-width: 262px;
    height: 48px;
  }
  @media (min-width: 1440px) {
    margin-top: 88px;
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
  color: ${({ theme }) => theme.titleTextColor};
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

export const DatePickerStyled = styled(DatePicker)`
  input {
    padding-left: 0px;
    color: ${({ theme }) => theme.inputText};
  }
  input::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.inputText};
    font-weight: 600;
    opacity: 1;
  }

  /* Input value */
  .MuiInputBase-root {
    position: relative;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
  }
  .MuiButtonBase-root {
    color: ${({ theme }) => theme.inputText};
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #11111126;
  }

  .MuiOutlinedInput-root {
    min-width: 250px;
    height: 44px;
    padding-left: 14px;
    padding-right: 14px;
    outline: none;
    border: none;
    border-radius: 8px;

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid rgba(17, 17, 17, 0.1);
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #111111;
    }
  }
`;
