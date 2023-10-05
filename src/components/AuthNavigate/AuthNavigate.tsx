import { Link } from './AuthNavigate.styled';
import { Props } from './AuthNavigate.types';

const AuthNavigate = ({ navigateTo, children }: Props) => {
  return <Link to={navigateTo}>{children}</Link>;
};

export default AuthNavigate;
