import { Link } from 'react-router-dom';
import { Navigation } from './UserNav.styled';
import { ReactComponent as User } from 'images/svg/user.svg';
import { ReactComponent as Calendar } from 'images/svg/calendarCheck.svg';
import { ReactComponent as Chart } from 'images/svg/chart.svg';

const UserNav = () => {
  return (
    <Navigation>
      <Link to="/account">
        <User />
        My account
      </Link>
      <Link to="/calendar">
        <Calendar />
        Calendar
      </Link>
      <Link to="/statistics">
        <Chart />
        Statistics
      </Link>
    </Navigation>
  );
};

export default UserNav;
