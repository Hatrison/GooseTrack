import { Container } from './TasksColumn.styled';
import { ColumnHeadBar, ColumnTasksList, AddTaskBtn } from './components';

export const TasksColumn = ({ tasks, taskName }) => {
  return (
    <Container>
      <ColumnHeadBar title={taskName} />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn category={taskName} />
    </Container>
  );
};
