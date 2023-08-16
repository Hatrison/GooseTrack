import { useDispatch, useSelector } from 'react-redux';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
import { useEffect } from 'react';

const ChoosedDay = ({ propSelectedWeek }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  console.log(tasks);

  useEffect(() => {
    dispatch(selectTasks);
  }, [dispatch]);

  return (
    <div>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
