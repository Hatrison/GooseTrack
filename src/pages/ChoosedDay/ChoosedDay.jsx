import { Link } from 'react-router-dom';
import { DayCalendarHead } from 'components/ChoosedDay';
import { TaskColumnCard } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components';
import { ColumnHeadBar } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components';
import { AddTaskBtn } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components';

const ChoosedDay = () => {
  return (
    <div>
      ChoosedDay
      <br />
      <Link to="/calendar/month/:currentDate">Month</Link>
      <DayCalendarHead />
      <ColumnHeadBar />
      <TaskColumnCard />
      <AddTaskBtn />
    </div>
  );
};

export default ChoosedDay;
