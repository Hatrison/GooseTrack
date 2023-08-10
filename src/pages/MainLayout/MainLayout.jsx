import { logoutUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MainLayout = () => {
  const dispath = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      Main Layout
      <br />
      <button type="button" onClick={() => dispath(logoutUser())}>
        Logout
      </button>
      <Suspense fallback={<p>Loading, please, wait...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
