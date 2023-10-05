import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'date-fns';
import { selectDate } from 'redux/date/selectors';
import { getTasks } from 'redux/tasks/operations';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';
import { useAppDispatch } from 'hooks/useDispatch';
import { useAppSelector } from 'hooks/useSelector';

const CalendarToolbar = () => {
  const [type, setType] = useState('month');

  const { pathname } = useLocation();

  const normalizedDate = useAppSelector(selectDate);
  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pathname.includes('/calendar/day/')) {
      setType('day');
    }
    dispatch(getTasks({ month, year }));
  }, [dispatch, month, year, pathname]);

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator type={type} />
      <PeriodTypeSelect onChangeType={setType} />
    </CalendarToolbarWrapper>
  );
};

export default CalendarToolbar;
