import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
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
import { Props } from './TaskColumnCard.types';

export const TaskColumnCard = ({ item, title }: Props) => {
  const { avatarURL, name } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const handleDeleteTask = (value: string) => {
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
