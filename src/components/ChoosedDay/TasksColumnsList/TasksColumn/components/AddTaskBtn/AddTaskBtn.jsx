import TaskModal from 'components/TaskModal/TaskModal';
import { Icon, Button } from './AddTaskBtn.styled';
import { useState } from 'react';
import { selectDate } from 'redux/date/selectors';
import { useAppSelector } from 'hooks/useSelector';

export const AddTaskBtn = ({ category }) => {
  const defineCategory = category => {
    const categoryLowerCase = category.toLowerCase();
    const splitedCategory = categoryLowerCase.split(' ');
    category = splitedCategory.join('-');
    return category;
  };

  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  // Реалізація неактивної кнопки у випадку дня, що минув
  const date = useAppSelector(selectDate);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Встановлюємо час на початок дня
  const isButtonActive = new Date(date) >= currentDate;

  return (
    <>
      <Button onClick={handleToggle} disabled={!isButtonActive}>
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
