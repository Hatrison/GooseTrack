import styled from 'styled-components';
import { theme } from 'theme';

export const FormContainer = styled.div`
  margin: 0;
`;

export const RatingText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${theme.colors.modal_form_label};

  margin: 0 0 8px;
`;

export const LabelText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${theme.colors.modal_form_label};

  margin: 0 0 8px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: ${theme.colors.textarea_bg};
  border: ${theme.colors.textarea_border};
  border-radius: 8px;
  padding: 14px 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  border-width: ${props => (props.isReviewValid ? 'none' : '1px')};
  border-color: ${props => (props.isReviewValid ? 'none' : 'red')};
  margin-bottom: 2px;
  color: ${theme.colors.second_text_mode};

  :focus {
    outline: none;
    border: 1px solid ${props => (props.isReviewValid ? 'green' : 'red')};
  }

  ::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    color: ${theme.colors.second_text_mode};
    /* color: ${p => p.theme.colors.primary_text_mode}; */
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #ffffff;

  border-radius: 8px;
  background-color: ${props => (props.disabled ? 'grey' : '#3E85F3')};

  color: #ffffff;
  margin-bottom: 28px;
  border: 0;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    box-shadow: ${props =>
      props.disabled ? 'none' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
  }
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  @media screen and (min-width: 768px) {
    padding: 15px;
    margin-bottom: 32px;
  }
`;

export const StyledEditButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => {
    return props.changed && props.isReviewValid && props.isRatingValid
      ? '#3E85F3'
      : theme.colors.button_not_active;
  }};

  color: #343434;

  border: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);
  :hover,
  :focus {
    color: #ffffff;
    background-color: ${props =>
      props.disabled ? theme.colors.second_backgrond_mode : '#3e85f3'};
    box-shadow: ${props =>
      props.isReviewValid ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' : 'none'};
  }

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #ffffff;

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;

export const StyledCancelButton = styled.button`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${theme.colors.button_not_active};
  color: #343434;

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
  color: #ffffff;

  transition: all 200ms cubic-bezier(0.25, 0.25, 0.75, 0.75);

  @media screen and (min-width: 678px) {
    padding: 15px;
  }
`;

export const CharactersQuantityText = styled.span`
  display: block;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => (props.isReviewValid ? 'green' : 'red')};
`;

export const CharactersQuantityTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 14px;
  margin-bottom: 4px;
  @media screen and (min-width: 1440px) {
    height: 18px;
  }
`;