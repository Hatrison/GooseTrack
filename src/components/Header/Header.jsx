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

export default function Header({ onSidebarToggle }) {
  return (
    <HeaderWrap>
      <BurgerButton type="button" onClick={() => onSidebarToggle()}>
        <BurgerIcon />
      </BurgerButton>
      <UserOptions>
        <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn>
        <UserInfo class="userDetails">
          <ThemeToggler class="themeToggler"></ThemeToggler>
          <UserName class="userName">Nadiia</UserName>
          <UserAvatar class="userAvatar"></UserAvatar>
        </UserInfo>
      </UserOptions>
    </HeaderWrap>
  );
}
