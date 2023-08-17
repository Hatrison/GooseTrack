//import { ReactComponent as FavoriteIcon } from 'images/svg/fullStar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  Form,
  Label,
  RatingText,
  //StyledRating,
  WrapButton,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
  CancelButton,
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

const FeedbackForm = ({ handlerCloseModal }) => {
  const [statusForm, setStatusForm] = useState('create');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const review = useSelector(selectOwnReview);

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  useEffect(() => {
    if (review?.text) setStatusForm('edit');
  }, [review]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        dispatch(
          statusForm === 'create' ? createReview(values) : updateReview(values)
        );
      }}
    >
      <Form>
        <Label>
          <RatingText>Rating</RatingText>
          {/* <StyledRating
            name="rating"
            value={review.rating}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" width="24px" />}
            emptyIcon={<EmptyBigStar fontSize="inherit" width="24px" />}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
            sx={{ display: 'flex', gap: '2px', maxWidth: '104px' }}
          /> */}
        </Label>
        <Label>
          Review
          <StyledTextArea name="text" placeholder="Enter text" />
        </Label>
        <WrapButton>
          {isEditing ? (
            <div style={{ display: 'flex', gap: '8px' }}>
              <StyledEditButton type="submit">Edit</StyledEditButton>
            </div>
          ) : (
            <StyledButton type="submit">Save</StyledButton>
          )}
          <CancelButton type="button" onClick={handlerCloseModal}>
            Cancel
          </CancelButton>
        </WrapButton>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
