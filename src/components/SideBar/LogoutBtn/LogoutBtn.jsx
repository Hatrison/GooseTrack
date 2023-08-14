import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={dispatch(logoutUser())}>
      Log out
    </button>
  );
};

export default LogoutBtn;
