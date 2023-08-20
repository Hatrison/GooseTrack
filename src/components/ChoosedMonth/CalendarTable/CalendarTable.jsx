import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import {
  format,
  endOfMonth,
  getDay,
  startOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { useState } from 'react';
import { OverflowWrapper, StyledTable } from './CalendarTable.styled';
import { DaysWithTasks } from './components/DaysWithTasks/DaysWithTasks';
import TaskModal from 'components/TaskModal/TaskModal';

const CalendarTable = ({ tasks, currentDate }) => {
  const [isOpened, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigate = useNavigate();

  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));
  const firstDayOfMonth = getDay(startMonth) - 1;
  const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
  }));

  const tableCreator = firstDayOfMonth => {
    return Array.from({ length: firstDayOfMonth }, (_, index) => (
      <td key={`empty-${index}`}></td>
    ));
  };

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      navigate(`/calendar/day/${date}`);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const currentTask = data => {
    setSelectedTask(data);
  };

  const rows = [];

  let cells = tableCreator(firstDayOfMonth);

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <DaysWithTasks
        key={index}
        day={day}
        handleClick={handleClick}
        setOpening={setIsOpen}
        currentTask={currentTask}
      />
    );

    if (cells.length === 7 || index === daysWithTasks.length - 1) {
      rows.push(<tr key={day.date}>{cells}</tr>);
      cells = [];
    }
  });

  return (
    <>
      <OverflowWrapper>
        <StyledTable>
          <tbody>{rows}</tbody>
        </StyledTable>
      </OverflowWrapper>
      {isOpened && (
        <TaskModal
          task={selectedTask}
          handlerCloseModal={handleToggle}
          category={selectedTask.category}
        ></TaskModal>
      )}
    </>
  );
};
CalendarTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          priority: PropTypes.string,
        })
      ),
    }).isRequired
  ),
  currentDate: PropTypes.string.isRequired,
};

export default CalendarTable;
