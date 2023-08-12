import { useDispatch } from 'react-redux';
import {
  HeaderWrap,
  BurgerIcon,
  BurgerButton,
  UserOptions,
  AddFeedbackBtn,
  UserInfo,
  ThemeToggler,
  UserName,
  UserAvatar,
} from './Header.styled';
import { toggleTheme } from 'redux/theme/themeSlice';

export default function Header({ onSidebarToggle }) {
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <BurgerButton type="button" onClick={() => onSidebarToggle()}>
        <BurgerIcon />
      </BurgerButton>
      <UserOptions>
        <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn>
        <UserInfo class="userDetails">
          <ThemeToggler
            onClick={() => dispatch(toggleTheme())}
            class="themeToggler"
          ></ThemeToggler>
          <UserName class="userName">Nadiia</UserName>
          <UserAvatar class="userAvatar"></UserAvatar>
        </UserInfo>
      </UserOptions>
    </HeaderWrap>
  );
}
