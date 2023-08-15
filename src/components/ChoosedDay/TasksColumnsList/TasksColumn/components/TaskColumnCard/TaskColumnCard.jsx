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
  PriorityHigh,
  PriorityMedium,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../index';
import { selectUser } from 'redux/user/selectors';

export const TaskColumnCard = ({ items }) => {
  const { avatarURL, name } = useSelector(selectUser);
  console.log('TaskColumnCard', items);

  // const dispatch = useDispatch();

  //  const handleDeleteTask = value => {
  //    dispatch(deleteTask(value));
  // };

  return (
    <>
      <TaskBox key={items._id}>
        <TaskText>{items.title}</TaskText>
        <ToolbarBox>
          <Wrapper>
            <Avatar src={avatarURL} alt={name} />
            {items.priority === 'high' && (
              <PriorityHigh>{items.priority}</PriorityHigh>
            )}
            {items.priority === 'medium' && (
              <PriorityMedium>{items.priority}</PriorityMedium>
            )}
            {items.priority === 'low' && (
              <PriorityLow>{items.priority}</PriorityLow>
            )}
          </Wrapper>
          <TaskToolbar
          // handleDeleteTask={handleDeleteTask}
          />
        </ToolbarBox>
      </TaskBox>
    </>
  );
};
