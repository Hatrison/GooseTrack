import {
  useSelector,
  // useDispatch
} from 'react-redux';
import {
  TaskBox,
  TaskText,
  ToolbarBox,
  Wrapper,
  Avatar,
  PriorityLow,
  // PriorityHigh,
  // PriorityMedium,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../index';
import { selectUser } from 'redux/user/selectors';

export const TaskColumnCard = ({ tasks }) => {
  const { avatarURL, name } = useSelector(selectUser);

  // const dispatch = useDispatch();

  // const handleDeleteTask = value => {
  //   dispatch(deleteTask(value));
  // };

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
    // Вставляється після ретурна
    //  <>
    //       {items?.map(element => (
    //        <TaskBox key={element._id}>
    //          <TaskText>{element.title}</TaskText>
    //          <ToolbarBox>
    //            <Wrapper>
    //              <Avatar src={avatarURL} alt={name} />
    //              {element.priority === 'high' && <PriorityHigh>{element.priority}</PriorityHigh>}
    //              {element.priority === 'medium' && <PriorityMedium>{element.priority}</PriorityMedium>}
    //              {element.priority === 'low' && <PriorityLow>{element.priority}</PriorityLow>}
    //            </Wrapper>
    //            <TaskToolbar
    //              handleDeleteTask={handleDeleteTask}
    //            />
    //          </ToolbarBox>
    //        </TaskBox>
    //      )}
    //    </>
  );
};
