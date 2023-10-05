import { format } from 'date-fns';
import React from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CustomInput,
  StyledDatePicker,
  DatePickerWrapper,
} from './StatisticsCalendar.styled';
import { Props } from './StatisticsCalendar.types';

export const StatisticsCalendar = ({ selectedDate, setDate }: Props) => {
  const handleChange = (date: any) => {
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
        formatWeekDay={(nameOfDay: any) => nameOfDay.substr(0, 1)}
        fixedHeight
      />
    </DatePickerWrapper>
  );
};
