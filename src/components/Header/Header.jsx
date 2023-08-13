
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
import { toggleTheme } from 'redux/theme/themeSlice';

export default function Header({ onSidebarToggle }) {

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
        <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn>
        <InfoWrap>
          <ThemeToggler />
          <UserInfo />
        </InfoWrap>

      </UserOptions>
    </HeaderWrap>
  );
}
