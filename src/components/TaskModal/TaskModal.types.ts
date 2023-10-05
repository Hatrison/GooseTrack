import { TTask } from 'redux/tasks/tasks.types';

export type Props = {
  category: string;
  task?: TTask;
  handlerCloseModal: () => void;
};
