import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';
import { Props } from './TaskColumnList,types';

export const TasksColumnsList = ({ tasks, actualDate }: Props) => {
  const tasksToDo = tasks.filter(
    task => task.category === 'to-do' && task.date === actualDate
  );
  const tasksInProgress = tasks.filter(
    task => task.category === 'in-progress' && task.date === actualDate
  );
  const tasksDone = tasks.filter(
    task => task.category === 'done' && task.date === actualDate
  );

  return (
    <List>
      <TasksColumn taskName={'To do'} tasks={tasksToDo} />
      <TasksColumn taskName={'In progress'} tasks={tasksInProgress} />
      <TasksColumn taskName={'Done'} tasks={tasksDone} />
    </List>
  );
};
