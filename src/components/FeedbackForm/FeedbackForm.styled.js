import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';
import { ReactComponent as Trash } from 'images/svg/trash.svg';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
import { ReactComponent as StarSvg } from 'images/svg/star.svg';

export const Star = styled(StarSvg)`
  width: 24px;
  height: 24px;
`;

export const EmptyStar = styled(Star)`
  fill: ${({ theme }) => theme.emptyStar};
`;

export const FullStar = styled(Star)`
  fill: #ffac33;
`;

export const Form = styled(FormikForm)`
  color: ${({ theme }) => theme.mainTextColor};
  padding: 28px 20px;
  width: 335px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  @media screen and (max-width: 350px) {
    width: 260px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 468px;
  }
`;

export const Label = styled.label`
  font-family: 'InterNormal', sans-serif;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.feedbackLabelColor};

  p {
    margin-bottom: 8px;
  }
`;

export const RatingWrap = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const TrashIcon = styled(Trash)`
  width: 16px;
  height: 16px;
`;

export const PencilIcon = styled(Pencil)`
  width: 16px;
  height: 16px;
  stroke: #3e85f3;

  &.active {
    stroke: #fff;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-family: 'InterNormal', sans-serif;
  font-size: 12px;
  color: red;
  margin: 10px 0;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ToolbarWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const ToolbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
`;

export const EditToolbarButton = styled(ToolbarButton)`
  background-color: ${({ theme }) => theme.editMiniButton};

  &.active {
    background-color: #3e85f3;
  }
`;

export const DeleteToolbarButton = styled(ToolbarButton)`
  background-color: #ea3d6533;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  background-color: ${({ theme }) => theme.feedbackTextareaBackgroung};
  border: ${({ theme }) => theme.feedbackTextareaBorder};
  border-radius: 8px;
  padding: 12px 14px;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;

  margin-bottom: 14px;
  color: ${({ theme }) => theme.mainTextColor};
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: 'InterSemiBold', sans-serif;
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.mainTextColor};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
    margin-bottom: 18px;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.buttontextColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};

  border-radius: 8px;

  border: 0;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;

export const StyledEditButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttontextColor};

  border: 0;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;

export const CancelButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.feedbackCancelButton};
  color: ${({ theme }) => theme.mainTextColor};

  border: 0;
  cursor: poiner;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #ffffff;
    background-color: #3e85f3;
  }

  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

  @media screen and (min-width: 678px) {
    padding: 15px;
    /* background-color: rgb(246, 246, 246); */
  }
`;
