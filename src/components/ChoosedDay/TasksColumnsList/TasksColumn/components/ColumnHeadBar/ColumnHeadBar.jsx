// import { useState } from 'react';
import { BtnAdd, PlusCircleIcon, Box, Title } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  // const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  // const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <Box>
      <Title>{title}</Title>
      <BtnAdd
      // onClick={handleToggle}
      >
        <PlusCircleIcon />
      </BtnAdd>
      {/* {isTaskModalOpened &&
        <TaskModal onClose={handleToggle}></TaskModal>
      }, */}
    </Box>
  );
};
