import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
import { TailSpin } from 'react-loader-spinner';
import CalendarToolbar from 'components/CalendarToolbar';
import { Suspense, SpinnerWrap } from 'components/MainLayout/MainLayout.styled';

const CalendarPage = () => {
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentDate = useSelector(selectDate);

  useEffect(() => {
    const { pathname } = location;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (
        !pathname.includes('/calendar/day/') &&
        (pathname.includes(`/calendar/month/${currentDate}`) ||
          pathname.includes('currentDate'))
      ) {
        navigate(`/calendar/month/${currentDate}`);
      }
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
