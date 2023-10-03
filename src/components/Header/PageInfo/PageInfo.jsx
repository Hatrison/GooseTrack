import { useLocation } from 'react-router';
import { useAppSelector } from 'hooks/useSelector';
import { selectTasks } from 'redux/tasks/selectors';
import { selectDate } from 'redux/date/selectors';

import {
  PageInfoWrap,
  Wrapper,
  LocationName,
  MotivationPhrase,
  MotivationStart,
  MotivationEnd,
  GooseMotivator,
} from './PageInfo.styled';

export default function PageInfo() {
  const tasks = useAppSelector(selectTasks);
  const { pathname } = useLocation();
  const currentDate = useAppSelector(selectDate);

  const tasksByDay = tasks.tasks.filter(
    task => task.date === currentDate && task.category !== 'done'
  );

  let location = ``;
  if (pathname.includes(`account`)) {
    location = `Account`;
  } else if (pathname.includes(`calendar`)) {
    location = `Calendar`;
  } else if (pathname.includes(`statistics`)) {
    location = `Statistics`;
  }

  return (
    <PageInfoWrap>
      {location === 'Calendar' && tasksByDay.length > 0 && <GooseMotivator />}
      <Wrapper>
        <LocationName>{location}</LocationName>
        {location === 'Calendar' && tasksByDay.length > 0 && (
          <MotivationPhrase>
            <MotivationStart>Let go{` `}</MotivationStart>
            <MotivationEnd>of the past and focus on the present</MotivationEnd>
          </MotivationPhrase>
        )}
      </Wrapper>
    </PageInfoWrap>
  );
}
