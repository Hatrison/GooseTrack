import CalendarTable from 'components/ChoosedMonth/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { Wrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const currentDate = useSelector(selectDate);
  const tasks = useSelector(selectTasks);

  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable tasks={tasks.tasks} currentDate={currentDate} />
    </Wrapper>
  );
};

export default ChoosedMonth;
