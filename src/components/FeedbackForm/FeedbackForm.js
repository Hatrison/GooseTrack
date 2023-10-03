import { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
import { Formik } from 'formik';

import {
  Form,
  Label,
  EmptyStar,
  FullStar,
  RatingWrap,
  PencilIcon,
  TrashIcon,
  ErrorMessage,
  Wrap,
  ToolbarWrap,
  EditToolbarButton,
  DeleteToolbarButton,
  WrapButton,
  StyledButton,
  StyledEditButton,
  StyledTextArea,
  CancelButton,
} from './FeedbackForm.styled';
import { Rating } from '@mui/material';
import {
  createReview,
  deleteReview,
  updateReview,
} from 'redux/reviews/operations';
import { selectOwnReview } from 'redux/reviews/selectors';
import { FeedbackFormSchema } from './FeedbackFormSchema';

const initialValues = {
  rating: 5,
  text: '',
};

const FeedbackForm = ({ handlerCloseModal }) => {
  const [statusForm, setStatusForm] = useState('create');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const review = useAppSelector(selectOwnReview);

  useEffect(() => {
    review?.text ? setStatusForm('edit') : setStatusForm('create');
  }, [review]);

  const toggleIsEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={review || initialValues}
      validationSchema={FeedbackFormSchema}
      onSubmit={({ rating, text }) => {
        rating = Number(rating);
        const values = { rating, text };
        dispatch(
          statusForm === 'create' ? createReview(values) : updateReview(values)
        );
        setIsEditing(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <RatingWrap>
            <Label>
              <p>Rating</p>
              <Rating
                name="rating"
                precision={1}
                sx={{ display: 'flex', gap: '2px', maxWidth: '104px' }}
                icon={<FullStar />}
                emptyIcon={<EmptyStar />}
                value={Number(values.rating)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.rating && errors.rating}
                disabled={!isEditing && statusForm === 'edit'}
              />
            </Label>
            <ErrorMessage name="rating" component="div" />
          </RatingWrap>
          <Wrap>
            <Label htmlFor="review">Review</Label>
            {statusForm === 'edit' && (
              <ToolbarWrap>
                <EditToolbarButton
                  type="button"
                  className={isEditing ? 'active' : ''}
                  onClick={() => toggleIsEditing()}
                >
                  <PencilIcon className={isEditing ? 'active' : ''} />
                </EditToolbarButton>
                <DeleteToolbarButton
                  type="button"
                  onClick={() => dispatch(deleteReview())}
                >
                  <TrashIcon />
                </DeleteToolbarButton>
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
  );
};

export default FeedbackForm;
