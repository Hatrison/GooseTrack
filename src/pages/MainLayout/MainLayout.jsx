import { logoutUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const MainLayout = () => {
  const dispath = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      Main Layout
      <br />
      <button type="button" onClick={() => dispath(logoutUser())}>
        Logout
      </button>
    </div>
  );
};

export default MainLayout;
