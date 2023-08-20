import { useWindowSize } from 'hooks/useWindowSize';
import { TasksListStyled } from './TasksList.styled';
import { useMediaQuery } from 'react-responsive';

export const TasksList = ({ tasks, openModal, currentTask }) => {
  const size = useWindowSize();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const cutTitle = title => {
    if (size.width < 500) {
      return title.substring(0, 3) + '...';
    }
    if (size.width < 900) {
      return title.substring(0, 5) + '...';
    }
    if (size.width >= 900) {
      return title.substring(0, 10) + '...';
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
              openModal(true);
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
