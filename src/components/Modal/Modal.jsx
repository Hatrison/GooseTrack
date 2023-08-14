import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  CloseButton,
  ModalContainer,
  MyCloseIcon,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, handlerCloseModal }) => {
  const onEsc = useCallback(
    event => {
      if (event.code === 'Escape') handlerCloseModal();
    },
    [handlerCloseModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onEsc]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) handlerCloseModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={handlerCloseModal}>
          <MyCloseIcon width="24" height="24"></MyCloseIcon>
        </CloseButton>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
