import { Link } from 'react-router-dom';

const ChoosedDay = () => {
  return (
    <div>
      ChoosedDay
      <br />
      <Link to="/calendar/month/:currentDate">Month</Link>
    </div>
  );
};

export default ChoosedDay;
