import { ReactComponent as FavoriteIcon } from 'images/svg/fullStar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Box from '@mui/material/Box';
import {
  LabelText,
  RatingText,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
} from './FeedbackForm.styled';
import { useEffect, useState } from 'react';
import {
  createReview,
  getOwnReview,
  updateReview,
} from 'redux/reviews/operations';
import { selectOwnReview } from 'redux/reviews/selectors';

const initialValues = {
  rating: 0,
  text: '',
};

function FeedbackForm() {
  const [statusForm, setStatusForm] = useState('create');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const review = useSelector(selectOwnReview);

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  useEffect(() => {
    if (review.text) setStatusForm('edit');
  }, [review]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(
          statusForm === 'create' ? createReview(values) : updateReview(values)
        );

        setSubmitting(false);
      }}
    >
      <Form>
        <RatingText>Rating</RatingText>
        <Box>
          <StyledRating
            name="customized-color"
            value={review.rating}
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

        {isEditing ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <StyledEditButton type="submit">Edit</StyledEditButton>
          </div>
        ) : (
          <StyledButton type="submit">Save</StyledButton>
        )}
      </Form>
    </Formik>
  );
}

export default FeedbackForm;
