import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = ({ tasks, actualDate }) => {
  const tasksToDo = tasks.filter(
    task => task.category === 'to-do' && task.date === actualDate
  );
  const tasksInProgress = tasks.filter(
    task => task.category === 'in-progress' && task.date === actualDate
  );
  const tasksDone = tasks.filter(
    task => task.category === 'done' && task.date === actualDate
  );

  // console.log(tasks);
  // console.log('TasksColumnsList to do', tasksToDo);

  return (
    <List>
      <TasksColumn taskName={'To do'} tasks={tasksToDo} />
      <TasksColumn taskName={'In progress'} tasks={tasksInProgress} />
      <TasksColumn taskName={'Done'} tasks={tasksDone} />
    </List>
  );
};
