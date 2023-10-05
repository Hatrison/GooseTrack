import { TTask } from 'redux/tasks/tasks.types';

export type Props = {
  day: {
    date: string;
    tasks: TTask[];
  };
  handleClick: (e: React.MouseEvent, date: string | number) => void;
  setOpening: () => void;
  currentTask: (data: TTask) => void;
};
