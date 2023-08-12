import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { parse } from 'date-fns';
import { selectDate } from 'redux/date/selectors';
import { fetchTasks } from 'redux/tasks/operations';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = () => {
  const [type, setType] = useState('month');

  const location = useLocation();

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname === '/calendar/day') {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);

  const normalizedDate = useSelector(selectDate);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks({ month, year }));
  });

  useEffect(() => {
    dispatch(fetchTasks({ month, year }));
  }, [dispatch, month, year]);

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator type={type} />
      <PeriodTypeSelect onChangeType={setType} />
    </CalendarToolbarWrapper>
  );
};

export default CalendarToolbar;
