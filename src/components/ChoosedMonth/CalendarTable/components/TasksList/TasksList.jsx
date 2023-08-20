import { useWindowSize } from 'hooks/useWindowSize';
import { TasksListStyled } from './TasksList.styled';

export const TasksList = ({ tasks, openModal, currentTask }) => {
  const size = useWindowSize();

  const cutTitle = title => {
    if (size.width < 767) {
      return title.substring(0, 5) + '...';
    }
    if (title.length > 10) {
      return title.substring(0, 10) + '...';
    }
    return title;
  };

  return (
    <TasksListStyled>
      {tasks.map((task, index) => {
        if (index >= 2) {
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
