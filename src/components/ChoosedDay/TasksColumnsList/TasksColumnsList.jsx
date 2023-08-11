import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = () => {
  return (
    <List>
      <TasksColumn listId="toDo" />
      <TasksColumn listId="inProgress" />
      <TasksColumn listId="done" />
    </List>
  );
};
