import { ChangeTaskDirModal } from '..';
import { useState } from 'react';
import { useAppDispatch } from 'hooks/useDispatch';
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
import TaskModal from 'components/TaskModal/TaskModal';

export const TaskToolbar = ({ handleDeleteTask, item, title }) => {
  const [isChangeDirOpened, setIsChangeDirOpened] = useState(false);
  const dispatch = useAppDispatch();

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

  const modifyCategory = task => {
    const { category } = task;
    const categoryLowerCase = category.toLowerCase();
    const splitedCategory = categoryLowerCase.split(' ');
    const modifiedCategory = splitedCategory.join('-');
    return { ...task, category: modifiedCategory };
  };

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleModalToggle();
    }
  };

  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <List>
      <li>
        <Btn onClick={handleModalToggle}>
          <ChangeDirIcon />
        </Btn>
        {isChangeDirOpened && (
          <div>
            <TaskDirModalOverlay onClick={onOverlayClick} />
            <ChangeTaskDirModal>
              {newItemArray.map(newItem => (
                <li key={newItem.category}>
                  <ModalBtn
                    onClick={() =>
                      dispatch(updateTask(modifyCategory(newItem)))
                    }
                  >
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
        <Btn onClick={handleToggle}>
          <PencilIcon />
        </Btn>
        {isTaskModalOpened && (
          <TaskModal
            task={item}
            handlerCloseModal={handleToggle}
            category={item.category}
          ></TaskModal>
        )}
      </li>
      <li>
        <Btn onClick={() => handleDeleteTask(item._id)}>
          <TrashIcon />
        </Btn>
      </li>
    </List>
  );
};
