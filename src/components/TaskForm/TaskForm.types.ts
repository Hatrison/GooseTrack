import { TTask } from 'redux/tasks/tasks.types';

export type Props = {
  category: string;
  task?: TTask;
  handlerCloseModal: () => void;
};

export type TFormValues = {
  title: string;
  priority: string;
  start: string;
  end: string;
};
