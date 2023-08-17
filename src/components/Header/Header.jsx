import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';
import PageInfo from './PageInfo/PageInfo';
import { useMediaQuery } from 'react-responsive';

import {
  HeaderWrap,
  BurgerIcon,
  BurgerButton,
  UserOptions,
  AddFeedbackBtn,
  InfoWrap,
} from './Header.styled';
import { useState } from 'react';
import AddFeedbackModal from './AddFeedbackModal';

export default function Header({ onSidebarToggle }) {
  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);

  const handleToggleModal = () => setIsTaskModalOpened(prevState => !prevState);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <HeaderWrap>
      {isDesktop && <PageInfo />}
      {!isDesktop && (
        <BurgerButton type="button" onClick={() => onSidebarToggle()}>
          <BurgerIcon />
        </BurgerButton>
      )}
      <UserOptions>
        <AddFeedbackBtn onClick={() => handleToggleModal()} type="button">
          Feedback
        </AddFeedbackBtn>
        {isTaskModalOpened && (
          <AddFeedbackModal handlerCloseModal={handleToggleModal} />
        )}
        <InfoWrap>
          <ThemeToggler />
          <UserInfo />
        </InfoWrap>
      </UserOptions>
    </HeaderWrap>
  );
}
