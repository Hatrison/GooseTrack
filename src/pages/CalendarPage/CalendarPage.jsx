import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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
      console.log(pathname);
    }
  }, [location, navigate]);

  return (
    <div>
      CalendarPage
      <Suspense fallback={<p>Loading, please, wait...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
