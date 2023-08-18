import TaskModal from 'components/TaskModal/TaskModal';
import { Icon, Button } from './AddTaskBtn.styled';
import { useState } from 'react';

export const AddTaskBtn = ({ category }) => {
  const defineCategory = category => {
    const categoryLowerCase = category.toLowerCase();
    const splitedCategory = categoryLowerCase.split(' ');
    category = splitedCategory.join('-');
    return category;
  };

  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <>
      <Button onClick={handleToggle}>
        <Icon /> Add task
      </Button>
      {isTaskModalOpened && (
        <TaskModal
          handlerCloseModal={handleToggle}
          category={defineCategory(category)}
        ></TaskModal>
      )}
    </>
  );
};
