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

export const TaskToolbar = ({ handleDeleteTask, item, title }) => {
  const [isChangeDirOpened, setIsChangeDirOpened] = useState(false);

  const ChangeDirTitle = title => {
    let titlesArr = [];
    switch (title) {
      case 'To do':
        titlesArr = ['In Progress', 'Done'];
        break;
      case 'In Progress':
        titlesArr = ['To do', 'Done'];
        break;
      case 'Done':
        titlesArr = ['To do', 'In Progress'];
        break;

      default:
        break;
    }

    return titlesArr;
  };

  console.log('TaskToolbar', item);

  const newTitlesArr = ChangeDirTitle(title);

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
            {newTitlesArr.map(title => () => {})}
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
            {/* Вставляється після {isChangeDirOpened && (<ChangeTaskDirModal>
            
            {something.map(element => (
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
        <Btn
        // onClick={() => handleEdit(task)}
        >
          <PencilIcon />
        </Btn>
      </li>
      <li>
        <Btn onClick={() => handleDeleteTask(item._id)}>
          <TrashIcon />
        </Btn>
      </li>
    </List>
  );
};
// {category: 'done';
// date: '2023-08-16';
// end: '11:30';
// owner: '64d9cb8bd8b377cef7108e7f';
// priority: 'low';
// start: '11:20';
// title: 'Having a party Stepan';
// _id: '64dc88d1984fe6fb475d0efc';}
