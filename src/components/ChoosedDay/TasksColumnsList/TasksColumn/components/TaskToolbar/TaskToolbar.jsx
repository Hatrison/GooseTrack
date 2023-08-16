import { ChangeTaskDirModal } from '..';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { updateTask } from 'redux/tasks/operations';

export const TaskToolbar = ({ handleDeleteTask, item, title }) => {
  const [isChangeDirOpened, setIsChangeDirOpened] = useState(false);
  const dispatch = useDispatch();

  const ChangeDirTitle = title => {
    let titlesArr = [];
    switch (title) {
      case 'To do':
        titlesArr = ['In Progress', 'Done'];
        break;
      case 'In progress':
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

  // Створюємо масив з двома ідентичними обєктами але з різними ключами category
  const newItemArray = newTitlesArr.map(newTitle => ({
    ...item,
    category: newTitle,
  }));

  const handleModalToggle = () => {
    setIsChangeDirOpened(prevState => !prevState);
  };

  const handleTransfer = task => {
    dispatch(updateTask(task));
  };

  return (
    <List>
      <li>
        <Btn onClick={handleModalToggle}>
          <ChangeDirIcon />
        </Btn>
        {isChangeDirOpened && (
          <ChangeTaskDirModal>
            {newItemArray.map(newItem => (
              <li key={newItem.category}>
                <ModalBtn onClick={() => handleTransfer(newItem)}>
                  {newItem.category}
                  <ChangeDirIconModal />
                </ModalBtn>
              </li>
            ))}
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

// {
/* Вставляється після {isChangeDirOpened && (<ChangeTaskDirModal>
            
            {something.map(element => (
              <li key={element} onClick={() => handleChangeDir(element)}>
                <ModalBtn>
                {element}
                <ChangeDirIconModal />
              </ModalBtn>
              </li>
            ))} */
// }
