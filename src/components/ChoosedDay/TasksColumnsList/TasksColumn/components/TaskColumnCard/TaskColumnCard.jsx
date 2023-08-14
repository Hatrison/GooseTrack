import { useSelector } from 'react-redux';
import {
  TaskBox,
  TaskText,
  ToolbarBox,
  Wrapper,
  Avatar,
  PriorityLow,
  PriorityHigh,
  PriorityMedium,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../index';
import { selectUser } from 'redux/user/selectors';

export const TaskColumnCard = ({ items }) => {
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
    //  <>
    //       {items?.map(element => (
    //        <TaskBox key={element.id}>
    //          <TaskText>{element.text}</TaskText>
    //          <ToolbarBox>
    //            <Wrapper>
    //              <Avatar src={avatarURL} alt={name} />
    //              {element.priority === 'high' && <PriorityHigh>{element.priority}</PriorityHigh>}
    //              {element.priority === 'medium' && <PriorityMedium>{element.priority}</PriorityMedium>}
    //              {element.priority === 'low' && <PriorityLow>{element.priority}</PriorityLow>}
    //            </Wrapper>
    //            <TaskToolbar/>
    //          </ToolbarBox>
    //        </TaskBox>
    //      )}
    //    </>
  );
};
