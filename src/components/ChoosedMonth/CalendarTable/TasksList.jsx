import { StyledListTasks } from './TasksList.styled';

export const TasksList = ({ tasks, openModal, currentTask }) => {
  return (
    <StyledListTasks>
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
            {task.title}
          </li>
        );
      })}
    </StyledListTasks>
  );
};
