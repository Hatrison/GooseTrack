import { Props } from './TaskColumn.types';
import { Container } from './TasksColumn.styled';
import { ColumnHeadBar, ColumnTasksList, AddTaskBtn } from './components';

export const TasksColumn = ({ tasks, taskName }: Props) => {
  return (
    <Container>
      <ColumnHeadBar title={taskName} />
      <ColumnTasksList tasks={tasks} title={taskName} />
      <AddTaskBtn category={taskName} />
    </Container>
  );
};
