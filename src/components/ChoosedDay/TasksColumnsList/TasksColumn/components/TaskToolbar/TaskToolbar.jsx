import ReactDOM from 'react-dom';
import {
  List,
  Btn,
  ChangeDirIcon,
  PencilIcon,
  TrashIcon,
} from './TaskToolbar.styled';

export const TaskToolbar = () => {
  return (
    <List>
      <li>
        <Btn>
          <ChangeDirIcon />
        </Btn>
      </li>
      <li>
        <Btn>
          <PencilIcon />
        </Btn>
      </li>
      <li>
        <Btn>
          <TrashIcon />
        </Btn>
      </li>
    </List>
  );
};
