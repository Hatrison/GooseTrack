import { useSelector } from 'react-redux';
import { Span, StyledDay, StyledTd } from './DaysWithTasks.styled';
import { TasksList } from './TasksList';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';

const { isToday, parseISO } = require('date-fns');

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
  const selectedDate = useSelector(selectDate);

  const tasks = useSelector(selectTasks);
  const tasksByMonth = tasks.tasks;
  const tasksByDay = tasks.tasks.filter(task => task.date === day.date);

  return (
    <StyledTd onClick={e => handleClick(e, day.date)}>
      {tasksByDay.length > 0 && console.log(tasksByDay)}

      {tasksByDay.length > 0 && (
        <TasksList
          tasks={tasksByDay}
          openModal={setOpening}
          currentTask={currentTask}
        />
      )}

      {tasksByDay.length > 2 && <Span>+{tasksByDay.length - 2} tasks</Span>}

      {/* {day.tasks.length > 0 &&
        day.tasks.map(({ tasks }, index) => {
          return (
            <div key={index}>
              <TasksList
                tasks={tasks}
                openModal={setOpening}
                currentTask={currentTask}
              />
              {tasks.length > 2 && <Span>+{tasks.length - 2} tasks</Span>}
            </div>
          );
        })} */}
      <StyledDay className={isToday(parseISO(day.date)) && 'today'}>
        {formattedDay(day.date)}
      </StyledDay>
    </StyledTd>
  );
};
