import { Link } from 'react-router-dom';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';

const ChoosedDay = () => {
  return (
    <div>
      ChoosedDay
      <br />
      <Link to="/calendar/month/:currentDate">Month</Link>
      <DayCalendarHead />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
