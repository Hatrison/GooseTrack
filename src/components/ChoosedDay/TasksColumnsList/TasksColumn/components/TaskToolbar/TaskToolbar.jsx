import { ChangeTaskDirModal } from '..';
import { useState } from 'react';
import {
  List,
  Btn,
  ChangeDirIcon,
  PencilIcon,
  TrashIcon,
} from './TaskToolbar.styled';
import {
  ModalBtn,
  ChangeDirIconModal,
} from '../ChangeTaskDirModal/ChangeTaskDirModal.styled';

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
              <ModalBtn>
                In progress
                <ChangeDirIconModal />
              </ModalBtn>
            </li>
            <li>
              <ModalBtn>
                Done
                <ChangeDirIconModal />
              </ModalBtn>
            </li>
            {/* {something.map(element => (
              <li key={element} onClick={() => handleChangeDir(element)}>
                <ModalBtn>
                {element}
                <ChangeDirIconModal />
              </ModalBtn>
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
