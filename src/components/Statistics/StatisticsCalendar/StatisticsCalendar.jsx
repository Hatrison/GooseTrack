import { format } from 'date-fns';
import React from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CustomInput,
  StyledDatePicker,
  DatePickerWrapper,
} from './StatisticsCalendar.styled';

export const StatisticsCalendar = ({ selectedDate, setDate }) => {
  const handleChange = date => {
    const formattedNewDate = format(date, 'yyyy-MM-dd');
    setDate(formattedNewDate);
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
