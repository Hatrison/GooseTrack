// import { useState } from 'react';
import { Icon, Button } from './AddTaskBtn.styled';

export const AddTaskBtn = () => {
  // const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  // const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <>
      <Button
      // onClick={handleToggle}
      >
        <Icon /> Add task
      </Button>
      {/* {isTaskModalOpened &&
        <TaskModal onClose={handleToggle}></TaskModal>
      }, */}
    </>
  );
};
