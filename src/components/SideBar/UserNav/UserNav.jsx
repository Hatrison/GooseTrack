import { Calendar, Chart, Navigation, User, Link } from './UserNav.styled';

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
