import { TaskColumnCard } from '../index';
import { List } from './ColumnTasksList.styled';

export const ColumnTasksList = ({ tasks }) => {
  console.log('ColumnTasksList to do', tasks);

  return (
    <List>
      {/* <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard /> */}
      <TaskColumnCard items={tasks} />
    </List>
  );
};
