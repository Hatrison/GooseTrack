//import { ReactComponent as FavoriteIcon } from 'images/svg/fullStar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  Form,
  Label,
  ErrorMessage,
  Wrap,
  ToolbarWrap,
  EditToolbarButton,
  DeleteToolbarButton,
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
  deleteReview,
  getOwnReview,
  updateReview,
} from 'redux/reviews/operations';
import { selectOwnReview } from 'redux/reviews/selectors';
import { FeedbackFormSchema } from './FeedbackFormSchema';

const initialValues = {
  rating: 0,
  text: '',
};

const FeedbackForm = ({ handlerCloseModal }) => {
  const [statusForm, setStatusForm] = useState('edit');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const review = useSelector(selectOwnReview);

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  useEffect(() => {
    if (review?.text) setStatusForm('edit');
  }, [review]);

  const toggleIsEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackFormSchema}
      onSubmit={values => {
        dispatch(
          statusForm === 'create' ? createReview(values) : updateReview(values)
        );
      }}
    >
      <Form>
        <Label>
          Rating
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
        <ErrorMessage name="rating" component="div" />
        <Wrap>
          <Label htmlForor="name">Review</Label>
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
          id="name"
          name="text"
          placeholder="Enter text"
          as="textarea"
        />
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
    </Formik>
  );
};

export default FeedbackForm;
