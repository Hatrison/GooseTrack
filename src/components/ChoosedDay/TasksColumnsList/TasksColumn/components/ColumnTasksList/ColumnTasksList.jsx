import { TaskColumnCard } from '../index';
import { List } from './ColumnTasksList.styled';

export const ColumnTasksList = ({ tasks, title }) => {
  // console.log('ColumnTasksList to do', tasks);

  return (
    <List>
      {tasks?.map(task => (
        <TaskColumnCard key={task._id} item={task} title={title} />
      ))}
    </List>
  );
};
