import { useDispatch, useSelector } from 'react-redux';
import { setDates } from 'redux/date/dateSlice';
import { format } from 'date-fns';
import React from 'react';
// import DatePicker from 'react-datepicker';
import { selectDate } from 'redux/date/selectors';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CustomInput,
  StyledDatePicker,
  DatePickerWrapper,
} from './StatisticsCalendar.styled';

export const StatisticsCalendar = () => {
  const selectedDate = useSelector(selectDate);

  const dispatch = useDispatch();
  const handleChange = date => {
    const formattedNewDate = format(date, 'yyyy-MM-dd');
    dispatch(setDates(formattedNewDate));
  };

  return (
    <DatePickerWrapper>
      <StyledDatePicker
        selected={new Date(selectedDate)}
        onChange={handleChange}
        customInput={<CustomInput />}
        dateFormat="yyyy-MM-dd"
        calendarStartDay={1}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
        fixedHeight
      />
    </DatePickerWrapper>
  );
};
