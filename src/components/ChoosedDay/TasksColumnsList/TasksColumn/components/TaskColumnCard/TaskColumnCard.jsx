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

export const TaskColumnCard = ({ tasks }) => {
  const { avatarURL, name } = useSelector(selectUser);

  // const dispatch = useDispatch();

  //  const handleDeleteTask = value => {
  //    dispatch(deleteTask(value));
  // };

  return (
    <>
      {tasks?.map(task => (
        <TaskBox key={task._id}>
          <TaskText>{task.title}</TaskText>
          <ToolbarBox>
            <Wrapper>
              <Avatar src={avatarURL} alt={name} />
              {task.priority === 'high' && (
                <PriorityHigh>{task.priority}</PriorityHigh>
              )}
              {task.priority === 'medium' && (
                <PriorityMedium>{task.priority}</PriorityMedium>
              )}
              {task.priority === 'low' && (
                <PriorityLow>{task.priority}</PriorityLow>
              )}
            </Wrapper>
            <TaskToolbar
            // handleDeleteTask={handleDeleteTask}
            />
          </ToolbarBox>
        </TaskBox>
      ))}
    </>
  );
};
