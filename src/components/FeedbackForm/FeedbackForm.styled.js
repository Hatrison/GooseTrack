import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';
import { Rating } from '@mui/material';

export const Form = styled(FormikForm)`
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 32px;
`;

export const Label = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.taskModalTitleColor};
`;

export const StyledRating = styled(Rating)`
  & .MuiRating-iconFilled {
    color: '#ff6d75';
  }

  & .MuiRating-iconHover {
    color: '#ff3d47';
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  color: red;
  margin: 15px 0;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ToolbarWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const ToolbarButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
`;

export const EditToolbarButton = styled(ToolbarButton)`
  background-color: lightblue;

  &.active {
    background-color: blue;
  }
`;

export const DeleteToolbarButton = styled(ToolbarButton)`
  background: red;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: ${({ theme }) => theme.taskModalInputColor};
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 14px 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  margin-bottom: 2px;
  color: ${({ theme }) => theme.mainTextColor};
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.mainTextColor};
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

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
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

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;

export const CancelButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
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

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;
