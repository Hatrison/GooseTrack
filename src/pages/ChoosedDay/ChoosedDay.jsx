import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';
// import { useEffect } from 'react';

const ChoosedDay = ({ propSelectedWeek }) => {
  // const dispatch = useDispatch();
  const { tasks } = useSelector(selectTasks);
  const date = useSelector(selectDate);

  // console.log(date);
  // console.log(tasks);

  return (
    <div>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList tasks={tasks} actualDate={date} />
    </div>
  );
};

export default ChoosedDay;
