import CalendarTable from 'components/ChoosedMonth/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { endOfMonth, startOfMonth, isWithinInterval } from 'date-fns';
import { Wrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const currentDate = useSelector(selectDate);
  const tasks = useSelector(selectTasks);

  const startMonth = startOfMonth(new Date(currentDate));
  const endMonth = endOfMonth(new Date(currentDate));

  const filteredDates = tasks.tasks.filter(task => {
    const date = new Date(task.date);
    return isWithinInterval(date, { start: startMonth, end: endMonth });
  });

  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable tasks={filteredDates} currentDate={currentDate} />
    </Wrapper>
  );
};

export default ChoosedMonth;
