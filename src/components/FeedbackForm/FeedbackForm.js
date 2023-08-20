import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ReactComponent as Star } from 'images/svg/star.svg';
import { ReactComponent as Pencil } from 'images/svg/pencil.svg';
import { ReactComponent as Trash } from 'images/svg/trash.svg';


import {
  Form,
  Label,
  PencilIcon,
  TrashIcon,
  ErrorMessage,
  Wrap,
  ToolbarWrap,
  EditToolbarButton,
  DeleteToolbarButton,
  StyledRating,
  StyledReview,
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
              <Label htmlFor="review">Review
                <StyledReview
  name="review"
  precision={1}
  sx={{ display: 'flex', width:'30px',
height: '30px',
padding: '10px', }}
  icon={<PencilIcon width="16px" height="16pxpx" fill="#3E85F3" />}
  emptyIcon={<TrashIcon width="16pxpxpx" height="16px" fill="#EA3D65" />}
  value={Number(values.review)}  
  onChange={handleChange}
  onBlur={handleBlur}
  error={touched.review && errors.review}
  disabled={!isEditing && statusForm === 'edit'}
/>
  </Label>
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