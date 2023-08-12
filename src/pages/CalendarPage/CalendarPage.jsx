import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar';

const CalendarPage = () => {
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (!pathname.includes('/calendar/day/')) {
        navigate('/calendar/month/:currentDate');
      }
    }
  }, [location, navigate]);

  return (
    <div>
      <CalendarToolbar />
      <Outlet />
    </div>
  );
};

export default CalendarPage;
