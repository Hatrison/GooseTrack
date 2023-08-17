import { useMediaQuery } from 'react-responsive';
import {
  ListDay,
  ListItemDate,
  CalendarContainer,
  ListDate,
  CurrentDay,
  ListItemDay,
} from './DayCalendarHead.styled';
import { startOfWeek, addDays, isSameDay, format } from 'date-fns';
import { uk } from 'date-fns/locale'; // Імпорт локалі для української мови

export const DayCalendarHead = ({ date }) => {
  const mobileDevice = useMediaQuery({ maxWidth: 767 });

  const activeDate = new Date(date);

  // Встановлюємо локаль для української мови
  const locale = uk;

  // Знаходження першого дня тижня (понеділок) для відображення
  const startOfCurrentWeek = startOfWeek(activeDate, { locale });

  const datesToDisplay = Array.from({ length: 7 }, (_, index) =>
    addDays(startOfCurrentWeek, index)
  );

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
        {datesToDisplay.map((date, index) => (
          <ListItemDate key={index}>
            {isSameDay(date, activeDate) ? ( // Перевірка, чи це поточний день
              <CurrentDay>{format(date, 'd', { locale })}</CurrentDay>
            ) : (
              format(date, 'd', { locale })
            )}
          </ListItemDate>
        ))}
      </ListDate>
    </CalendarContainer>
  );
};
