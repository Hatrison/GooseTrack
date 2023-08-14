import { DayCalendarHead, TasksColumnsList } from 'components/ChoosedDay';

const ChoosedDay = ({ propSelectedWeek }) => {
  return (
    <div>
      <DayCalendarHead selectedWeek={propSelectedWeek} />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
