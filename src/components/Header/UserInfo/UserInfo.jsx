import {
  UserWrap,
  UserName,
  UserAvatar,
  AvatarFirstLetter,
  UserImage,
} from './UserInfo.styled';
import { useAppSelector } from 'hooks/useSelector';
import { selectUser } from 'redux/user/selectors';

export default function UserInfo() {
  const { name, avatarURL } = useAppSelector(selectUser);
  // const avatar =
  const firstCharName = name.charAt(0).toUpperCase();
  return (
    <UserWrap>
      <UserName>{name}</UserName>
      <UserAvatar>
        {avatarURL && avatarURL.length === 0 ? (
          <AvatarFirstLetter>{firstCharName}</AvatarFirstLetter>
        ) : (
          <UserImage src={avatarURL} alt="User's profile" />
        )}
      </UserAvatar>
    </UserWrap>
  );
}
