import { Link } from 'react-router-dom';
import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';

const ChoosedDay = ({ propSelectedWeek }) => {
  return (
    <div>
      ChoosedDay
      <br />
      <Link to="/calendar/month/:currentDate">Month</Link>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
