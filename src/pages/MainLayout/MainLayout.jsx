import { logoutUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toggleTheme } from 'redux/theme/themeSlice';
import { Container } from './MainLayout.styled';

const MainLayout = () => {
  const dispatсh = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      Main Layout
      <br />
      <br />
      <button type="button" onClick={() => dispatсh(toggleTheme())}>
        Switch Theme
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatсh(logoutUser()).then(() => {
            navigate('/', { replace: true });
          });
        }}
      >
        Logout
      </button>
      <Suspense
        fallback={<TailSpin width={'10%'} height={'10%'} color={'#3E85F3'} />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MainLayout;
