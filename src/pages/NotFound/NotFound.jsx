// import { Link } from 'react-router-dom';
import {
  Text,
  Image,
  NumberWrap,
  Number,
  Wtapper,
  StyledLink,
  ContentWrap,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Wtapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>
          <Image src="" alt="Rocket" width="81px" height="188px" />
          <Number>4</Number>
        </NumberWrap>
        <Text>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text>
        <StyledLink>Back to home</StyledLink>
      </ContentWrap>
    </Wtapper>
  );
};

export default NotFound;
