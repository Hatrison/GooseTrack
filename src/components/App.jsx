import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound';
import Theme from './Theme';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/user/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle.styled';
import { LoadContainer } from './App.styled';
import { googleAuth } from 'redux/auth/authSlice';

const MainPage = lazy(() => import('../pages/MainPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const PasswordResetPage = lazy(() => import('../pages/PasswordResetPage'));
const MainLayout = lazy(() => import('../components/MainLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const ChoosedMonth = lazy(() => import('../pages/ChoosedMonth'));
const ChoosedDay = lazy(() => import('../pages/ChoosedDay'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      dispatch(googleAuth({ accessToken, refreshToken }));
    }

    const verification = searchParams.get('emailVerification');

    if (verification === 'success') {
      toast.success('Your email has been successfully verified', {
        autoClose: 5000,
      });
    }
  }, [dispatch, searchParams]);

  return (
    <Theme>
      {isRefreshing ? (
        <LoadContainer>
          <TailSpin width={'15vh'} height={'15vh'} color={'#3E85F3'} />
        </LoadContainer>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={isLoggedIn ? <MainLayout /> : <MainPage />}
            >
              <Route
                index
                element={
                  <PrivateRoute
                    redirectTo="/"
                    component={<Navigate to="/calendar/month/:currentDate" />}
                  />
                }
              />
              <Route
                path="account"
                element={
                  <PrivateRoute redirectTo="/" component={<AccountPage />} />
                }
              />
              <Route
                path="calendar/*"
                element={
                  <PrivateRoute redirectTo="/" component={<CalendarPage />} />
                }
              >
                <Route
                  path="month/:currentDate"
                  element={
                    <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
                  }
                />
                <Route
                  path="day/:currentDate"
                  element={
                    <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
                  }
                />
              </Route>
              <Route
                path="statistics"
                element={
                  <PrivateRoute redirectTo="/" component={<StatisticsPage />} />
                }
              />
            </Route>
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="password"
              element={
                <RestrictedRoute
                  redirectTo="/"
                  component={<PasswordResetPage />}
                />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <GlobalStyle />
      <ToastContainer autoClose={1500} />
    </Theme>
  );
};
