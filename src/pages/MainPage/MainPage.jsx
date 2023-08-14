// import { Link } from 'react-router-dom';
import { Container } from './MainPage.styled';
import AuthSection from 'components/AuthSection';

const Home = () => {
  return (
    // <div>

    // </div>
    <Container>
      <AuthSection />
      {/* <h1>Main Page</h1> */}
      {/* <Link to="/register">Register</Link> */}
      {/* <Link to="/login">Login</Link> */}
    </Container>
  );
};

export default Home;
