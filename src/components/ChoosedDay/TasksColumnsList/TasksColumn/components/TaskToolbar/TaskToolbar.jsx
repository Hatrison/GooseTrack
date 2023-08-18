import { ChangeTaskDirModal } from '..';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  List,
  Btn,
  ChangeDirIcon,
  PencilIcon,
  TrashIcon,
  TaskDirModalOverlay,
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
        titlesArr = ['In progress', 'Done'];
        break;
      case 'In progress':
        titlesArr = ['To do', 'Done'];
        break;
      case 'Done':
        titlesArr = ['To do', 'In progress'];
        break;

      default:
        break;
    }

    return titlesArr;
  };

  // Cтворюється масив з іншими титулами відмінними від оригінального
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
    const modifiedTask = { ...task };

    switch (modifiedTask.category) {
      case 'Done':
        modifiedTask.category = 'done';
        break;
      case 'In progress':
        modifiedTask.category = 'in-progress';
        break;
      case 'To do':
        modifiedTask.category = 'to-do';
        break;
      default:
        break;
    }

    dispatch(updateTask(modifiedTask));
  };
  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleModalToggle();
    }
  };

  return (
    <List>
      <li>
        <Btn onClick={handleModalToggle}>
          <ChangeDirIcon />
        </Btn>
        {isChangeDirOpened && (
          <div>
            <TaskDirModalOverlay onClick={onOverlayClick}></TaskDirModalOverlay>
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
          </div>
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
