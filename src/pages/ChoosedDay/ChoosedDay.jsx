import { useSelector } from 'react-redux';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';

const ChoosedDay = () => {
  const { tasks } = useSelector(selectTasks);
  const date = useSelector(selectDate);

  return (
    <div>
      <DayCalendarHead date={date} />
      <TasksColumnsList tasks={tasks} actualDate={date} />
    </div>
  );
};

export default ChoosedDay;
