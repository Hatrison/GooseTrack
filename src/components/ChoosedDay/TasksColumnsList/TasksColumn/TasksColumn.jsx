import { Container } from './TasksColumn.styled';
import { ColumnHeadBar, ColumnTasksList, AddTaskBtn } from './components';

export const TasksColumn = () => {
  return (
    <Container>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </Container>
  );
};
