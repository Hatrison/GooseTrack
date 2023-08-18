import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ReactComponent as Star } from 'images/svg/star.svg';
import {
  Form,
  Label,
  ErrorMessage,
  Wrap,
  ToolbarWrap,
  EditToolbarButton,
  DeleteToolbarButton,
  StyledRating,
  WrapButton,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
  CancelButton,
} from './FeedbackForm.styled';
import {
  createReview,
  deleteReview,
  getOwnReview,
  updateReview,
} from 'redux/reviews/operations';
import { selectIsLoading, selectOwnReview } from 'redux/reviews/selectors';
import { FeedbackFormSchema } from './FeedbackFormSchema';

const initialValues = {
  rating: 5,
  text: '',
};

const FeedbackForm = ({ handlerCloseModal }) => {
  const [statusForm, setStatusForm] = useState('create');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const review = useSelector(selectOwnReview);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  useEffect(() => {
    review?.text ? setStatusForm('edit') : setStatusForm('create');
  }, [review]);

  const toggleIsEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    !isLoading && (
      <Formik
        initialValues={review || initialValues}
        validationSchema={FeedbackFormSchema}
        onSubmit={({ rating, text }) => {
          rating = Number(rating);
          const values = { rating, text };
          dispatch(
            statusForm === 'create'
              ? createReview(values)
              : updateReview(values)
          );
          setIsEditing(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Label>
              Rating
              <StyledRating
                name="rating"
                precision={1}
                sx={{ display: 'flex', gap: '2px', maxWidth: '104px' }}
                icon={<Star width="24px" height="24px" fill="#FFAC33" />}
                emptyIcon={<Star width="24px" height="24px" fill="#CEC9C1" />}
                value={Number(values.rating)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.rating && errors.rating}
                disabled={!isEditing && statusForm === 'edit'}
              />
            </Label>
            <ErrorMessage name="rating" component="div" />
            <Wrap>
              <Label htmlFor="review">Review</Label>
              {statusForm === 'edit' && (
                <ToolbarWrap>
                  <EditToolbarButton
                    type="button"
                    className={isEditing ? 'active' : ''}
                    onClick={() => toggleIsEditing()}
                  />
                  <DeleteToolbarButton
                    type="button"
                    onClick={() => dispatch(deleteReview())}
                  />
                </ToolbarWrap>
              )}
            </Wrap>
            <StyledTextArea
              id="review"
              name="text"
              placeholder="Enter text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEditing && statusForm === 'edit'}
            ></StyledTextArea>
            <ErrorMessage name="text" component="div" />
            <WrapButton>
              {(statusForm === 'create' || isEditing) && (
                <>
                  {isEditing ? (
                    <StyledEditButton type="submit">Edit</StyledEditButton>
                  ) : (
                    <StyledButton type="submit">Save</StyledButton>
                  )}
                  <CancelButton type="button" onClick={handlerCloseModal}>
                    Cancel
                  </CancelButton>
                </>
              )}
            </WrapButton>
          </Form>
        )}
      </Formik>
    )
  );
};

export default FeedbackForm;
