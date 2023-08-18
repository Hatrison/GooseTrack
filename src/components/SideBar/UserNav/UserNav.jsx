import { useLocation } from 'react-router-dom';
import { Calendar, Chart, Navigation, User, Link } from './UserNav.styled';
import { useEffect, useState } from 'react';

const UserNav = () => {
  const { pathname } = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    if (pathname.includes('/account')) setPath('account');
    if (pathname.includes('/calendar')) setPath('calendar');
    if (pathname.includes('/statistics')) setPath('statistics');
  }, [pathname]);

  return (
    <Navigation>
      <Link to="/account" className={path === 'account' ? 'active' : ''}>
        <User />
        My account
      </Link>
      <Link to="/calendar" className={path === 'calendar' ? 'active' : ''}>
        <Calendar />
        Calendar
      </Link>
      <Link to="/statistics" className={path === 'statistics' ? 'active' : ''}>
        <Chart />
        Statistics
      </Link>
    </Navigation>
  );
};

export default UserNav;
