import { useDispatch } from 'react-redux';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
import { useEffect } from 'react';

const ChoosedDay = ({ propSelectedWeek }) => {
  const dispatch = useDispatch();

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
