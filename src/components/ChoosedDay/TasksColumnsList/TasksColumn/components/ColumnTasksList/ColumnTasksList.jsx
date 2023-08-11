import { TaskColumnCard } from '../index';
import { List } from './ColumnTasksList.styled';

export const ColumnTasksList = () => {
  return (
    <List>
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
    </List>
  );
};
