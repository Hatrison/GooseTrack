import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { LogOutBtn, LogoutIcon } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <LogOutBtn type="button" onClick={dispatch(logoutUser())}>
      Log out
      <LogoutIcon />
    </LogOutBtn>
  );
};

export default LogoutBtn;
