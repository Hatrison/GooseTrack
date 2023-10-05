import { Box, List } from './ChangeTaskDirModal.styled';
import { Props } from './ChangeTaskModal.types';

export const ChangeTaskDirModal = ({ children }: Props) => {
  return (
    <Box>
      <List>{children}</List>
    </Box>
  );
};
