// import { Link } from 'react-router-dom';
import { Container } from './MainPage.styled';
import AuthSection from 'components/AuthSection';
import Description from 'components/Description';
import ReviewsSlider from 'components/ReviewsSlider';

const Home = () => {
  return (
    // <div>

    // </div>
    <Container>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      {/* <h1>Main Page</h1> */}
      {/* <Link to="/register">Register</Link> */}
      {/* <Link to="/login">Login</Link> */}
    </Container>
  );
};

export default Home;
