import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useSelector';
import { selectDate } from 'redux/date/selectors';
import { TailSpin } from 'react-loader-spinner';
import CalendarToolbar from 'components/CalendarToolbar';
import { Suspense, SpinnerWrap } from 'components/MainLayout/MainLayout.styled';

const CalendarPage = () => {
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentDate = useAppSelector(selectDate);

  useEffect(() => {
    const { pathname } = location;
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (pathname.includes('/calendar/day/')) {
        navigate(`/calendar/day/${currentDate}`, { replace: true });
        return;
      }
      navigate(`/calendar/month/${currentDate}`, { replace: true });
    }

    if (pathname === '/calendar' || pathname === '/calendar/') {
      navigate(`/calendar/month/${currentDate}`, { replace: true });
    }
  }, [location, navigate, currentDate]);
  return (
    <div>
      <CalendarToolbar />
      <Suspense
        fallback={
          <SpinnerWrap>
            <TailSpin width={'70%'} height={'70%'} color={'#3E85F3'} />
          </SpinnerWrap>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
