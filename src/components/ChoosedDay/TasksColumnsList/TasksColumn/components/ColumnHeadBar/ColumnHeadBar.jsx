import { BtnAdd, PlusCircleIcon, Box, Title } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  switch (title) {
    case 'toDo':
      return 'To do';
    case 'inProgress':
      return 'In progress';
    case 'done':
      return 'Done';
    default:
      break;
  }

  return (
    <Box>
      {/* <Title>{title}</Title> */}
      <Title>To Do</Title>
      <BtnAdd>
        <PlusCircleIcon />
      </BtnAdd>
    </Box>
  );
};
