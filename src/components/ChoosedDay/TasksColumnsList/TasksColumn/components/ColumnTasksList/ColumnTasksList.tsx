import { TaskColumnCard } from '../index';
import { List } from './ColumnTasksList.styled';
import { Props } from './ColumnTasksList.types';

export const ColumnTasksList = ({ tasks, title }: Props) => {
  return (
    <List>
      {tasks?.map(task => (
        <TaskColumnCard key={task._id} item={task} title={title} />
      ))}
    </List>
  );
};
