import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';
import React, { useEffect, useState } from 'react';

const initialTask = {
  title: '',
  date: '2023-08-15',
  start: '09:00',
  end: '09:15',
  priority: 'low',
  category: 'to-do',
  statusOperation: 'create',
};

export const TaskModal = ({ task_info = initialTask, handlerCloseModal }) => {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const { _id, category } = task_info;

    if (_id) {
      setInitialData({ ...task_info, statusOperation: 'edit' });
    } else if (category) {
      setInitialData(initialTask);
    } else {
      handlerCloseModal();
    }
  }, [task_info, handlerCloseModal]);

  return (
    <Modal handlerCloseModal={handlerCloseModal}>
      <TaskForm
        initialData={initialData}
        handlerCloseModal={handlerCloseModal}
      ></TaskForm>
    </Modal>
  );
};

export default TaskModal;
