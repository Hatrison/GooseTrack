import {
  UserWrap,
  UserName,
  UserAvatar,
  AvatarFirstLetter,
} from './UserInfo.styled';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
import { ReactComponent as MyAvatar } from '../../../images/avatarTest.svg';

export default function UserInfo() {
  //   const user = useSelector(selectUser);

  const user = {
    name: 'Serg',
    email: 'serg@info.com',
    avatar: 'ok',
  };
  const firstCharName = user.name.charAt(0).toUpperCase();
  return (
    <UserWrap>
      <UserName>{user.name}</UserName>
      <UserAvatar>
        {user.avatar === null ? (
          <AvatarFirstLetter>{firstCharName}</AvatarFirstLetter>
        ) : (
          <MyAvatar />
        )}
      </UserAvatar>
    </UserWrap>
  );
}
