import { useWindowSize } from 'hooks/useWindowSize';
import { TasksListStyled } from './TasksList.styled';
import { useMediaQuery } from 'react-responsive';
import { Props } from './TasksList.types';

export const TasksList = ({ tasks, openModal, currentTask }: Props) => {
  const size = useWindowSize();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const cutTitle = (title: string) => {
    if ((size.width as number) < 500) {
      return title.length > 3 ? title.substring(0, 3) + '...' : title;
    }
    if ((size.width as number) < 900) {
      return title.length > 5 ? title.substring(0, 5) + '...' : title;
    }
    if ((size.width as number) >= 900) {
      return title.length > 10 ? title.substring(0, 10) + '...' : title;
    }
    return title;
  };

  return (
    <TasksListStyled>
      {tasks.map((task, index) => {
        if (index >= (isMobile ? 1 : 2)) {
          return null;
        }
        return (
          <li
            key={task._id}
            className={task.priority}
            onClick={() => {
              openModal();
              currentTask(task);
            }}
          >
            {cutTitle(task.title)}
          </li>
        );
      })}
    </TasksListStyled>
  );
};
