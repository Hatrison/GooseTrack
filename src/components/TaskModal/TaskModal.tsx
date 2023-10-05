import Modal from 'components/Modal';
import TaskForm from 'components/TaskForm';
import { Props } from './TaskModal.types';

export const TaskModal = ({ category, task, handlerCloseModal }: Props) => {
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
