import { useAppSelector } from 'hooks/useSelector';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';

const ChoosedDay = () => {
  const { tasks } = useAppSelector(selectTasks);
  const date = useAppSelector(selectDate);

  return (
    <div>
      <DayCalendarHead date={date} />
      <TasksColumnsList tasks={tasks} actualDate={date} />
    </div>
  );
};

export default ChoosedDay;
