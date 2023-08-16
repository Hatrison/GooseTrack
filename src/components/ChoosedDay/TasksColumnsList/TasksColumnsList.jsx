import { useSelector } from 'react-redux';
import { List } from './TasksColumnsList.styled';
import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = () => {
  const tasks = useSelector(state => state.tasks.tasks);

  const tasksToDo = tasks.filter(task => task.category === 'to-do');
  const tasksInProgress = tasks.filter(task => task.category === 'in-progress');
  const tasksDone = tasks.filter(task => task.category === 'done');

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
