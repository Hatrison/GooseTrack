import { useMediaQuery } from 'react-responsive';
// import { nanoid } from 'nanoid';
import {
  ListDay,
  ListItemDate,
  CalendarContainer,
  ListDate,
  CurrentDay,
  ListItemDay,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ selectedWeek }) => {
  const mobileDevice = useMediaQuery({ maxWidth: 767 });

  return (
    <CalendarContainer>
      <ListDay>
        {mobileDevice ? (
          <>
            <ListItemDay>M</ListItemDay>
            <ListItemDay>T</ListItemDay>
            <ListItemDay>W</ListItemDay>
            <ListItemDay>T</ListItemDay>
            <ListItemDay>F</ListItemDay>
            <ListItemDay>S</ListItemDay>
            <ListItemDay>S</ListItemDay>
          </>
        ) : (
          <>
            <ListItemDay>MON</ListItemDay>
            <ListItemDay>TUE</ListItemDay>
            <ListItemDay>WED</ListItemDay>
            <ListItemDay>THU</ListItemDay>
            <ListItemDay>FRI</ListItemDay>
            <ListItemDay>SAT</ListItemDay>
            <ListItemDay>SUN</ListItemDay>
          </>
        )}
      </ListDay>

      <ListDate>
        <ListItemDate>
          <CurrentDay>1</CurrentDay>
        </ListItemDate>
        <ListItemDate>2</ListItemDate>
        <ListItemDate>3</ListItemDate>
        <ListItemDate>4</ListItemDate>
        <ListItemDate>5</ListItemDate>
        <ListItemDate>6</ListItemDate>
        <ListItemDate>7</ListItemDate>
        {/* {selectedWeek.map(day => (
        <ListItemDate key={nanoid()}>
          <CurrentDay>{day}</CurrentDay>
        </ListItemDate>
      ))} */}
      </ListDate>
    </CalendarContainer>
  );
};
