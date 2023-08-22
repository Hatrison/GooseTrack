import Modal from 'components/Modal/Modal';
import {
  Button,
  ButtonWrapper,
  DeleteButton,
  DeleteFormWrapper,
  FormHeader,
} from './DeleteModal.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/user/operations';
import { toast } from 'react-toastify';

const DeleteModal = ({ handlerCloseModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser())
      .then(data => {
        if (data.error) {
          throw new Error(`Something went wrong`);
        }
        navigate('/', { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <DeleteFormWrapper>
        <FormHeader>Are you sure you want to delete this account?</FormHeader>
        <ButtonWrapper>
          <DeleteButton type="button" onClick={() => handleDelete()}>
            Delete
          </DeleteButton>
          <Button type="button" onClick={() => handlerCloseModal()}>
            Cancel
          </Button>
        </ButtonWrapper>
      </DeleteFormWrapper>
    </Modal>
  );
};

export default DeleteModal;
