import { useSelector } from 'react-redux';
import {
  TaskBox,
  TaskText,
  ToolbarBox,
  Wrapper,
  Avatar,
  PriorityLow,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../index';
import { selectUser } from 'redux/user/selectors';

export const TaskColumnCard = () => {
  const { avatarURL, name } = useSelector(selectUser);

  return (
    <TaskBox>
      <TaskText>
        abracadabra, avada kedavra, focus pokus, alahai malahai, vengardium
        leviosa
      </TaskText>
      <ToolbarBox>
        <Wrapper>
          <Avatar src={avatarURL} alt={name} />
          <PriorityLow>Low</PriorityLow>
        </Wrapper>
        <TaskToolbar />
      </ToolbarBox>
    </TaskBox>
  );
};
