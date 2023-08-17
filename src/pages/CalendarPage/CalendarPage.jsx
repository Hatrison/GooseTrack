import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDates } from 'redux/date/dateSlice';
import { format } from 'date-fns';
import { TailSpin } from 'react-loader-spinner';
import CalendarToolbar from 'components/CalendarToolbar';
import { Suspense, SpinnerWrap } from 'components/MainLayout/MainLayout.styled';

const CalendarPage = () => {
  const isFirstRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentDate = format(Date.now(), 'yyyy-MM-dd');

  useEffect(() => {
    const { pathname } = location;

    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (!pathname.includes('/calendar/day/')) {
        navigate(`/calendar/month/${currentDate}`, { replace: true });
        dispatch(setDates(currentDate));
      }
    }
  }, [location, navigate, currentDate, dispatch]);

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
