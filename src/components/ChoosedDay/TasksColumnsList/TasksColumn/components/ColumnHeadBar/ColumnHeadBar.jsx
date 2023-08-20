import { useState } from 'react';
import { BtnAdd, PlusCircleIcon, Box, Title } from './ColumnHeadBar.styled';
import TaskModal from 'components/TaskModal/TaskModal';

export const ColumnHeadBar = ({ title }) => {
  const defineCategory = category => {
    const categoryLowerCase = category.toLowerCase();
    const splitedCategory = categoryLowerCase.split(' ');
    category = splitedCategory.join('-');
    return category;
  };

  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);
  return (
    <Box>
      <Title>{title}</Title>
      <BtnAdd onClick={handleToggle}>
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
