import Modal from 'components/Modal';
import TaskForm from 'components/TaskForm';

export const TaskModal = ({ task, handlerCloseModal }) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <TaskForm task={task} handlerCloseModal={handlerCloseModal}></TaskForm>
    </Modal>
  );
};

export default TaskModal;
