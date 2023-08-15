import { TaskColumnCard } from '../index';
import { List } from './ColumnTasksList.styled';

export const ColumnTasksList = ({ items }) => {
  return (
    <List>
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      {/* <TaskColumnCard items={items} /> */}
    </List>
  );
};
