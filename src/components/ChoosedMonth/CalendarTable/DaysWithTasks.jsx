import { useSelector } from 'react-redux';
import { isToday, parseISO } from 'date-fns';
import { Span, StyledDay, StyledTd } from './DaysWithTasks.styled';
import { TasksList } from './TasksList';
import { selectTasks } from 'redux/tasks/selectors';

const formattedDay = date => {
  const day = date.split('-')[2];
  return day.startsWith('0') ? day.slice(1) : day;
};

export const DaysWithTasks = ({
  day,
  handleClick,
  setOpening,
  currentTask,
}) => {
  const tasks = useSelector(selectTasks);
  const tasksByDay = tasks.tasks.filter(task => task.date === day.date);

  return (
    <StyledTd onClick={e => handleClick(e, day.date)}>
      {tasksByDay.length > 0 && (
        <TasksList
          tasks={tasksByDay}
          openModal={setOpening}
          currentTask={currentTask}
        />
      )}

      {tasksByDay.length > 2 && <Span>+{tasksByDay.length - 2} tasks</Span>}

      <StyledDay className={isToday(parseISO(day.date)) && 'today'}>
        {formattedDay(day.date)}
      </StyledDay>
    </StyledTd>
  );
};
