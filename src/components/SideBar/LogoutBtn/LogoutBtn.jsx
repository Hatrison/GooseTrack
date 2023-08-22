import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { LogoutButton, LogoutIcon } from './LogoutBtn.styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LogoutButton
      type="button"
      onClick={() =>
        dispatch(logoutUser())
          .then(data => {
            if (data.error) {
              throw new Error(`Something went wrong`);
            }
            navigate('/', { replace: true });
          })
          .catch(error => {
            toast.error(error.message);
          })
      }
    >
      Log out
      <LogoutIcon />
    </LogoutButton>
  );
};

export default LogoutBtn;
