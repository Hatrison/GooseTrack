import { Box, List } from './ChangeTaskDirModal.styled';

export const ChangeTaskDirModal = ({ children, propList }) => {
  return (
    <Box>
      <List list={propList}>{children}</List>
    </Box>
  );
};
