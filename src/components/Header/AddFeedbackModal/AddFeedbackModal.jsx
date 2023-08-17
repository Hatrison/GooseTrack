import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal';

const AddFeedbackModal = ({ handlerCloseModal }) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <FeedbackForm handlerCloseModal={handlerCloseModal} />
    </Modal>
  );
};

export default AddFeedbackModal;
