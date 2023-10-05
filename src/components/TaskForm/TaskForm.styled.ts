import styled from 'styled-components';
import { ReactComponent as EditPen } from 'images/svg/editModal.svg';
import { ReactComponent as Plus } from 'images/svg/addIcon.svg';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* width: 303px; */
  border-radius: 8px;
  padding: 40px 18px;

  background-color: ${({ theme }) => theme.mainBackgroundColor};
  color: ${({ theme }) => theme.mainTextColor};
  @media screen and (max-width: 290px) {
    max-width: 290px;
  }
  @media screen and (min-width: 375px) {
    width: 303px;
  }
  @media screen and (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const Label = styled.label`
  font-family: 'InterNormal', sans-serif;
  font-size: 12px;

  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
  color: yellow;
  color: ${({ theme }) => theme.taskModalTitleColor};
`;

export const Input = styled(FormikField)`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  width: 100%;
  height: 46px;
  left: 0px;
  top: 0px;

  background: ${({ theme }) => theme.taskModalInputColor};
  border-radius: 8px;
  border: none;
  padding: 0 0 0 14px;
  color: ${({ theme }) => theme.taskModalTextColor};
  @media screen and (max-width: 220px) {
    font-size: 10px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.taskModalTextColor};
    @media screen and (max-width: 220px) {
      font-size: 10px;
    }
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 0;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const StartWrap = styled.div`
  width: 100%;
`;
export const EndWrap = styled.div`
  width: 100%;
`;

export const WrapRadio = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 220px) {
    flex-direction: column;
  }
`;

export const ErrorTag = styled.div`
  font-family: 'InterNormal', sans-serif;
  font-size: 12px;
  color: red;
  margin: 10px 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonsLabel = styled.label`
  /* position: relative; */
  font-family: 'InterSemiBold', sans-serif;
  font-size: 12px;

  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.taskModalTextColor};
`;

export const RadioButtonsInput = styled(FormikField)`
  appearance: none;
  cursor: pointer;
`;

export const RadioButtonCustom = styled.span`
  /* position: absolute; */
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.defaultTransition};

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput} + & {
    background-color: #72c2f8;
    border-color: #72c2f8;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput} + & {
    background-color: #f3b249;
    border-color: #f3b249;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}+ & {
    background-color: #ea3d65;
    border-color: #ea3d65;
  }

  /* Change border when checked */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f880;

    border: 1.3px solid #72c2f880;
    transform: scale(1.2);
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #f3b24980;
    border: 1.3px solid #f3b24980;
    transform: scale(1.2);
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #ea3d6580;
    border: 1.3px solid #ea3d6580;
    transform: scale(1.2);
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  width: 100%;
  /* min-width: 51px; */
  padding: 12px 42px;

  color: ${({ theme }) => theme.buttontextColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  box-shadow: ${({ theme }) => theme.buttonShadow};

  border-radius: 8px;
  border: none;

  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: ${({ theme }) => theme.defaultTransition};
  @media screen and (max-width: 290px) {
    padding: 5px 5px;
  }
  @media screen and (min-width: 768px) {
    padding: 15px 61px;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    transform: scale(1.05);
  }
`;

export const CancelButton = styled(EditButton)`
  background: #efefef;
  color: #111111;
  padding: 12px 35px;
  @media screen and (max-width: 290px) {
    padding: 5px 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 48px;
  }
  :hover,
  :focus {
    background-color: #aa4a44;
    color: ${({ theme }) => theme.buttontextColor};
    transform: scale(1.05);
  }
`;

export const IconEditPen = styled(EditPen)`
  width: 16px;
  height: 16px;
`;

export const IconPlus = styled(Plus)`
  width: 16px;
  height: 16px;
`;
