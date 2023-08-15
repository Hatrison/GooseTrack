import styled from 'styled-components';
import { ReactComponent as EditPen } from 'images/svg/editModal.svg';
import { ReactComponent as Plus } from 'images/svg/addIcon.svg';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 303px;
  border-radius: 8px;
  padding: 40px 18px;

  background-color: ${({ theme }) => theme.mainBackgroundColor};
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (min-width: 768px) {
    padding: 40px 28px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

  ::placeholder {
    color: ${({ theme }) => theme.taskModalTextColor};
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
`;
export const StartWrap = styled.div`
  width: 100%;
`;
export const EndWrap = styled.div`
  width: 100%;
`;

export const EditButton = styled.button`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  width: 100%;

  background: #3e85f3;
  border-radius: 8px;
  border: none;

  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

export const CancelButton = styled(EditButton)`
  background: #efefef;
  color: #111111;
`;

export const WrapRadio = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonsInput = styled(FormikField)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioButtonsLabel = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.taskModalTextColor};
`;

export const RadioButtonCustom = styled.span`
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid transparent;

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput} + & {
    background-color: #72c2f8;
    border-color: #72c2f8;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput} + & {
    background-color: #f3b249;
    border-color: #f3b249;
    border: 1px solid transparent;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}+ & {
    background-color: #ea3d65;
    border-color: #ea3d65;
  }

  /* Change border when checked */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f880;

    border: 1.3px solid #72c2f880;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #f3b24980;
    border: 1.3px solid #f3b24980;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #ea3d6580;
    border: 1.3px solid #ea3d6580;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconEditPen = styled(EditPen)`
  width: 14.5px;
  height: 14.5px;
  /* fill: red; */
`;

export const IconPlus = styled(Plus)`
  width: 11.67px;
  height: 11.67px;
  fill: red;
`;
