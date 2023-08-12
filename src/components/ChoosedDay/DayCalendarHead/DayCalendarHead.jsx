import { useMediaQuery } from 'react-responsive';
// import { nanoid } from 'nanoid';
import {
  ListDay,
  ListItem,
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
        <ListItem>
          <CurrentDay>1</CurrentDay>
        </ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
        <ListItem>5</ListItem>
        <ListItem>6</ListItem>
        <ListItem>7</ListItem>
      </ListDate>
      {/* {selectedWeek.map(day => (
        <ListItem key={nanoid()}>
          <CurrentDay>{day}</CurrentDay>
        </ListItem>
      ))} */}
    </CalendarContainer>
  );
};
