import { useSelector, useDispatch } from 'react-redux';
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
import { deleteTask } from 'redux/tasks/operations';

export const TaskColumnCard = ({ item, title }) => {
  const { avatarURL, name } = useSelector(selectUser);
  // console.log('TaskColumnCard', items);

  const dispatch = useDispatch();

  const handleDeleteTask = value => {
    dispatch(deleteTask(value));
  };

  return (
    <>
      <TaskBox key={item._id}>
        <TaskText>{item.title}</TaskText>
        <ToolbarBox>
          <Wrapper>
            <Avatar src={avatarURL} alt={name} />
            {item.priority === 'high' && (
              <PriorityHigh>{item.priority}</PriorityHigh>
            )}
            {item.priority === 'medium' && (
              <PriorityMedium>{item.priority}</PriorityMedium>
            )}
            {item.priority === 'low' && (
              <PriorityLow>{item.priority}</PriorityLow>
            )}
          </Wrapper>
          <TaskToolbar
            item={item}
            title={title}
            handleDeleteTask={handleDeleteTask}
          />
        </ToolbarBox>
      </TaskBox>
    </>
  );
};
