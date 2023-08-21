import styled from 'styled-components';

export const DeleteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  padding: 50px 20px 28px 20px;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`;

export const FormHeader = styled.h1`
  font-family: 'InterBold', sans-serif;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
    flex-direction: row;
  }
`;

export const Button = styled.button`
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

  @media (min-width: 768px) {
    min-width: 262px;
    height: 48px;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #ea3d65bb;

  &:hover,
  &:focus {
    background-color: #ea3d65;
  }
`;
