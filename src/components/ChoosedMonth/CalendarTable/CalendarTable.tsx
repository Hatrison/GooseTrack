import { useNavigate } from 'react-router';
import {
  format,
  endOfMonth,
  getDay,
  startOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { ReactElement, useState } from 'react';
import { OverflowWrapper, StyledTable } from './CalendarTable.styled';
import { DaysWithTasks } from './components/DaysWithTasks/DaysWithTasks';
import TaskModal from 'components/TaskModal/TaskModal';
import { Props } from './CalendarTable.types';
import { TTask } from 'redux/tasks/tasks.types';

const CalendarTable = ({ tasks, currentDate }: Props) => {
  const [isOpened, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TTask>(
    null as unknown as TTask
  );

  const navigate = useNavigate();

  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));
  const firstDayOfMonth = getDay(startMonth) - 1;
  const daysOfMonth = eachDayOfInterval({ start: startMonth, end: endMonth });

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
  }));

  const tableCreator = (firstDayOfMonth: number) => {
    return Array.from({ length: firstDayOfMonth }, (_, index) => (
      <td key={`empty-${index}`}></td>
    ));
  };

  const handleClick = (e: React.MouseEvent, date: string | number) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      navigate(`/calendar/day/${date}`);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const currentTask = (data: TTask) => {
    setSelectedTask(data);
  };

  const rows: ReactElement[] = [];

  let cells = tableCreator(firstDayOfMonth);

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <DaysWithTasks
        key={index}
        day={day}
        handleClick={handleClick}
        setOpening={handleToggle}
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

export default CalendarTable;
