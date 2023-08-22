import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnReview } from 'redux/reviews/operations';
import { selectIsLoading } from 'redux/reviews/selectors';

const AddFeedbackModal = ({ handlerCloseModal }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  return (
    !isLoading && (
      <Modal handlerCloseModal={handlerCloseModal}>
        <FeedbackForm handlerCloseModal={handlerCloseModal} />
      </Modal>
    )
  );
};

export default AddFeedbackModal;
