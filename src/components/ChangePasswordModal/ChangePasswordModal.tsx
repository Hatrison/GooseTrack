import ChangePasswordForm from 'components/ChangePasswordForm';
import Modal from 'components/Modal';
import { Props } from './ChangePasswordModal.types';

const ChangePasswordModal = ({ handlerCloseModal }: Props) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <ChangePasswordForm handlerCloseModal={handlerCloseModal} />
    </Modal>
  );
};

export default ChangePasswordModal;
