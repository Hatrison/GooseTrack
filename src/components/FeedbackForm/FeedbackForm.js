import { ReactComponent as FavoriteIcon } from 'images/svg/fullStar.svg';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import * as React from 'react';
import Box from '@mui/material/Box';
import {
  LabelText,
  RatingText,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
} from './FeedbackForm.styled';

import { addReview, updateReview } from '../../redux/reviews/operations';

function FeedbackForm({
  feedback,
  rating,
  toggleEditFeedback,
  isEditFeedbackOpen,
  id,
}) {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ rating: rating, review: feedback }}
      onSubmit={(values, { setSubmitting }) => {
        if (isEditFeedbackOpen) {
          dispatch(
            updateReview({ id, rating: values.rating, comment: values.review })
          );
          toggleEditFeedback();
        } else {
          dispatch(
            addReview({ rating: values.rating, comment: values.review })
          );
        }
        setSubmitting(false);
      }}
    >
      <Form>
        <RatingText>Rating</RatingText>
        <Box>
          <StyledRating
            name="customized-color"
            value={rating}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" width="24px" />}
            emptyIcon={<EmptyBigStar fontSize="inherit" width="24px" />}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
            sx={{ display: 'flex', gap: '2px', maxWidth: '104px' }}
          />
        </Box>
        <label htmlFor="review">
          <LabelText>Review</LabelText>
        </label>
        <StyledTextArea
          id="review"
          placeholder="Enter text"
          name="review"
          component="textarea"
        />

        {isEditFeedbackOpen ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <StyledEditButton type="submit" disabled={isSubmitting}>
              Edit
            </StyledEditButton>
          </div>
        ) : (
          <StyledButton type="submit" disabled={isSubmitting}>
            Save
          </StyledButton>
        )}
      </Form>
    </Formik>
  );
}

export default FeedbackForm;
