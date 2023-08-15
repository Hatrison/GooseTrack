import TaskModal from 'components/TaskModal/TaskModal';
import { Icon, Button } from './AddTaskBtn.styled';
import { useState } from 'react';

export const AddTaskBtn = () => {
  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <>
      <Button onClick={handleToggle}>
        <Icon /> Add task
      </Button>
      {isTaskModalOpened && (
        <TaskModal handlerCloseModal={handleToggle}></TaskModal>
      )}
    </>
  );
};
