import PropTypes from 'prop-types';
import { Link } from './AuthNavigate.styled';
import { Props } from './AuthNavigate.types';

const AuthNavigate = ({ navigateTo, children }: Props) => {
  return <Link to={navigateTo}>{children}</Link>;
};

AuthNavigate.propTypes = {
  navigateTo: PropTypes.string.isRequired,
};

export default AuthNavigate;
