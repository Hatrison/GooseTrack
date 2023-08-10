import { logoutUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';

const MainLayout = () => {
  const dispath = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      Main Layout
      <br />
      <button type="button" onClick={() => dispath(logoutUser())}>
        Logout
      </button>
      <Suspense
        fallback={<TailSpin width={'10%'} height={'10%'} color={'#3E85F3'} />}
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
