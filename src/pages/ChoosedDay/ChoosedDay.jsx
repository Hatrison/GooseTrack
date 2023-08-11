import { Link } from 'react-router-dom';
import { DayCalendarHead } from 'components/ChoosedDay';
// import { ColumnTasksList } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components/ColumnTasksList/ColumnTasksList';
// import { ColumnHeadBar } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components';
// import { AddTaskBtn } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/components';
import { TasksColumn } from 'components/ChoosedDay/TasksColumnsList/TasksColumn/TasksColumn';

const ChoosedDay = () => {
  return (
    <div>
      ChoosedDay
      <br />
      <Link to="/calendar/month/:currentDate">Month</Link>
      <DayCalendarHead />
      {/* <ColumnHeadBar />
      <ColumnTasksList /> */}
      <TasksColumn />
    </div>
  );
};

export default ChoosedDay;
