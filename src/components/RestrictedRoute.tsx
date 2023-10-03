import { useAppSelector } from 'hooks/useSelector';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { RouteProps } from './Route.types';

export const RestrictedRoute = ({
  component: Component,
  redirectTo,
}: RouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
