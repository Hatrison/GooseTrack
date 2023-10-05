import { TTask } from 'redux/tasks/tasks.types';

export type Props = {
  handleDeleteTask: (id: string) => void;
  item: TTask;
  title: string;
};
