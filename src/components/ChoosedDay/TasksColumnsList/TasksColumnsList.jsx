import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
// import { selectTasks } from 'redux/tasks/selectors';

export const TasksColumnsList = () => {
  // const todoTasks = selectTasks.filter(task => task.category === 'to-do');
  // const inProgressTasks = selectTasks.filter(
  //   task => task.category === 'in-progress'
  // );
  // const doneTasks = selectTasks.filter(task => task.category === 'done');

  return (
    <List>
      <TasksColumn />
      <TasksColumn />
      <TasksColumn />
    </List>
  );
};
