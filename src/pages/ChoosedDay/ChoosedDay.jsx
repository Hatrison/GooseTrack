import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';
import { selectTasks } from 'redux/tasks/selectors';
// import { useEffect } from 'react';
// import { getTasks } from 'redux/tasks/operations';
const ChoosedDay = ({ propSelectedWeek }) => {
  // const dispatch = useDispatch();
  const { tasks } = useSelector(selectTasks);

  // console.log(tasks);

  // useEffect(() => {
  //   console.log('this id useeffect log', tasks);
  // }, [tasks]);
  return (
    <div>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList tasks={tasks} />
    </div>
  );
};

export default ChoosedDay;
