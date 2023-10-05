import { TTask } from 'redux/tasks/tasks.types';

export type Props = {
  tasks: TTask[];
  openModal: () => void;
  currentTask: (data: TTask) => void;
};
