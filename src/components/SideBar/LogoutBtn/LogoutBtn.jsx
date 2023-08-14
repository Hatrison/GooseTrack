import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { LogoutButton, LogoutIcon } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <LogoutButton type="button" onClick={() => dispatch(logoutUser())}>
      Log out
      <LogoutIcon />
    </LogoutButton>
  );
};

export default LogoutBtn;
