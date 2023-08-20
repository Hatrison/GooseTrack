import Modal from 'components/Modal';
import TaskForm from 'components/TaskForm';

export const TaskModal = ({ category, task, handlerCloseModal }) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <TaskForm
        task={task}
        handlerCloseModal={handlerCloseModal}
        category={category}
      ></TaskForm>
    </Modal>
  );
};

export default TaskModal;
