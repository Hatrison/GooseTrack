import { useAppSelector } from 'hooks/useSelector';
import { isToday, parseISO } from 'date-fns';
import { Span, StyledDay, StyledTd } from './DaysWithTasks.styled';
import { TasksList } from '../TasksList/TasksList';
import { selectTasks } from 'redux/tasks/selectors';
import { useMediaQuery } from 'react-responsive';

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
  const tasks = useAppSelector(selectTasks);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
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

      {isMobile
        ? tasksByDay.length > 1 && <Span>+{tasksByDay.length - 1} tasks</Span>
        : tasksByDay.length > 2 && <Span>+{tasksByDay.length - 2} tasks</Span>}

      <StyledDay className={isToday(parseISO(day.date)) && 'today'}>
        {formattedDay(day.date)}
      </StyledDay>
    </StyledTd>
  );
};
