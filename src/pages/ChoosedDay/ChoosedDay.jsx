// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTasks } from '../../redux/tasks/operations';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';

const ChoosedDay = ({ propSelectedWeek }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <div>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
