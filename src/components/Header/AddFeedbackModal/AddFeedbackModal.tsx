import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal';
import { useEffect } from 'react';
import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
import { getOwnReview } from 'redux/reviews/operations';
import { selectIsLoading } from 'redux/reviews/selectors';
import { Props } from './AddFeedbackModal.types';

const AddFeedbackModal = ({ handlerCloseModal }: Props) => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  return !isLoading ? (
    <Modal handlerCloseModal={handlerCloseModal}>
      <FeedbackForm handlerCloseModal={handlerCloseModal} />
    </Modal>
  ) : (
    <div></div>
  );
};

export default AddFeedbackModal;
