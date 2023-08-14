import styled from 'styled-components';
import { ReactComponent as EditPen } from 'images/svg/editModal.svg';
import { ReactComponent as Plus } from 'images/svg/addIcon.svg';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  width: 303px;
  padding: 10px;
  border-radius: 8px;
  padding: 48px 18px 40px 18px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (min-width: 768px) {
    padding: 40px 28px;
  }
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.taskModalTitleColor};
`;

export const Input = styled(FormikField)`
  margin-top: 8px;
  height: 46px;
  left: 0px;
  top: 0px;

  background: ${({ theme }) => theme.taskModalInputColor};
  border-radius: 8px;
  border: none;
  padding-left: 18px;

  color: ${({ theme }) => theme.taskModalTextColor};
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin: 0;
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
  margin-top: 10px;
  margin-bottom: 32px;
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
  color: #343434;
`;

export const RadioButtonCustom = styled.span`
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 10px;
  height: 10px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;

  /* Define different colors for each radio button */
  ${RadioContainer}:nth-child(1) ${RadioButtonsInput}:checked + & {
    background-color: #72c2f8;
    border-color: #72c2f8;
  }

  ${RadioContainer}:nth-child(2) ${RadioButtonsInput}:checked + & {
    background-color: #f3b249;
    border-color: #f3b249;
  }

  ${RadioContainer}:nth-child(3) ${RadioButtonsInput}:checked + & {
    background-color: #ea3d65;
    border-color: #ea3d65;
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
