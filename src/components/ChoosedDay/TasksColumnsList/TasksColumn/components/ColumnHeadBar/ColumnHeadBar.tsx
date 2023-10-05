import { useState } from 'react';
import { selectDate } from 'redux/date/selectors';
import { useAppSelector } from 'hooks/useSelector';
import { BtnAdd, PlusCircleIcon, Box, Title } from './ColumnHeadBar.styled';
import TaskModal from 'components/TaskModal/TaskModal';
import { Props } from './ColumnHeadBar.types';

export const ColumnHeadBar = ({ title }: Props) => {
  const defineCategory = (category: string) => {
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
    <Box>
      <Title>{title}</Title>
      <BtnAdd onClick={handleToggle} disabled={!isButtonActive}>
        <PlusCircleIcon />
      </BtnAdd>
      {isTaskModalOpened && (
        <TaskModal
          handlerCloseModal={handleToggle}
          category={defineCategory(title)}
        ></TaskModal>
      )}
    </Box>
  );
};
