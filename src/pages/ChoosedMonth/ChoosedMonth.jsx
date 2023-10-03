import CalendarTable from 'components/ChoosedMonth/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import { useAppSelector } from 'hooks/useSelector';
import { selectDate } from 'redux/date/selectors';
import { selectTasks } from 'redux/tasks/selectors';
import { Wrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const currentDate = useAppSelector(selectDate);
  const tasks = useAppSelector(selectTasks);

  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable tasks={tasks.tasks} currentDate={currentDate} />
    </Wrapper>
  );
};

export default ChoosedMonth;
