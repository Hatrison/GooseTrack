import Modal from 'components/Modal';
import TaskForm from 'components/TaskForm';

const initialTask = {
  title: 'First task',
  start: '09:00',
  end: '09:15',
  priority: 'high',
  category: 'to-do',
};

export const TaskModal = ({ task = initialTask, handlerCloseModal }) => {
  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <TaskForm task={task} handlerCloseModal={handlerCloseModal}></TaskForm>
    </Modal>
  );
};

export default TaskModal;
