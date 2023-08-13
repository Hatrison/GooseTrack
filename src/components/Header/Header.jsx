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
        <UserInfo className="userDetails">
          <ThemeToggler
            onClick={() => dispatch(toggleTheme())}
            className="themeToggler"
          ></ThemeToggler>
          <UserName className="userName">Nadiia</UserName>
          <UserAvatar className="userAvatar"></UserAvatar>
        </UserInfo>
      </UserOptions>
    </HeaderWrap>
  );
}
