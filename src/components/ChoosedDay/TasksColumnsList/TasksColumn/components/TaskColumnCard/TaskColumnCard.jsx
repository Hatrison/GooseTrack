import {
  TaskBox,
  TaskText,
  ToolbarBox,
  Wrapper,
  Avatar,
  PriorityLow,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../index';

export const TaskColumnCard = () => {
  return (
    <TaskBox>
      <TaskText>abrcadabra</TaskText>
      <ToolbarBox>
        <Wrapper>
          <Avatar />
          <PriorityLow>Low</PriorityLow>
        </Wrapper>
        <TaskToolbar />
      </ToolbarBox>
    </TaskBox>
  );
};
