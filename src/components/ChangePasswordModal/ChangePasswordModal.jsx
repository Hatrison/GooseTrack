import ChangePasswordForm from 'components/ChangePasswordForm';
import Modal from 'components/Modal';

const ChangePasswordModal = ({ handlerCloseModal }) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ChangePasswordForm handlerCloseModal={handlerCloseModal} />
    </Modal>
  );
};

export default ChangePasswordModal;
