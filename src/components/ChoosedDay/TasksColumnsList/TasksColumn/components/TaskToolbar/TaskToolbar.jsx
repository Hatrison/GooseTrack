import { ChangeTaskDirModal } from '..';
import { useState } from 'react';
import {
  List,
  Btn,
  ChangeDirIcon,
  PencilIcon,
  TrashIcon,
} from './TaskToolbar.styled';

export const TaskToolbar = () => {
  const [isChangeDirOpened, setIsChangeDirOpened] = useState(false);

  const handleModalToggle = () => {
    setIsChangeDirOpened(prevState => !prevState);
  };

  return (
    <List>
      <li>
        <Btn onClick={handleModalToggle}>
          <ChangeDirIcon />
        </Btn>
        {isChangeDirOpened && (
          <ChangeTaskDirModal>
            <li>
              <p>In progress</p>
              <ChangeDirIcon />
            </li>
            <li>
              <p>Done</p>
              <ChangeDirIcon />
            </li>
            {/* {something.map(element => (
              <li key={element} onClick={() => handleChangeDir(element)}>
                <p>{element}</p>
                <ChangeDirIcon />
              </li>
            ))} */}
          </ChangeTaskDirModal>
        )}
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
