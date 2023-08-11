import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = () => {
  return (
    <List>
      <TasksColumn />
      <TasksColumn />
      <TasksColumn />
    </List>
  );
};
