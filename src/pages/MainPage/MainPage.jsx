import { Link } from 'react-router-dom';
import { Container } from './MainPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';

const Home = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <h1>Main Page</h1>
      {!isLoggedIn && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {isLoggedIn && (
        <button type="button" onClick={() => dispath(logoutUser())}>
          Logout
        </button>
      )}
    </Container>
  );
};

export default Home;
