import { Container } from './TasksColumn.styled';
import { ColumnHeadBar, ColumnTasksList, AddTaskBtn } from './components';

export const TasksColumn = ({ propTitle }) => {
  return (
    <Container>
      <ColumnHeadBar title={propTitle} />
      <ColumnTasksList />
      <AddTaskBtn />
    </Container>
  );
};
