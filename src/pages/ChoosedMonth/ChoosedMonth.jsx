import { Link } from 'react-router-dom';

const ChoosedMonth = () => {
  return (
    <div>
      ChoosedMonth
      <br />
      <Link to="/calendar/day/:currentDate">Day</Link>
    </div>
  );
};

export default ChoosedMonth;
