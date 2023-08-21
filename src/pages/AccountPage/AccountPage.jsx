import { useState } from 'react';
import UserForm from 'components/UserForm/UserForm';
import Modal from 'components/Modal/Modal';
import ChangePasswordForm from 'components/ChangePasswordForm/ChangePasswordForm';

const AccountPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = e => {
    setModalIsOpen(true);
  };

  const closeModal = e => {
    setModalIsOpen(false);
  };

  return modalIsOpen ? (
    <div>
      <UserForm openModal={openModal} />
      <Modal handlerCloseModal={closeModal} >
        <ChangePasswordForm/>
      </Modal>
    </div>
  ) : (
    <div>
      <UserForm openModal={openModal} />
    </div>
  );
};

export default AccountPage;
