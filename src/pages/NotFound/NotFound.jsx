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

import imagePaths from './imagePaths';

const NotFound = () => {
  return (
    <Wtapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>
          {/* <Image src="" alt="Rocket" width="81px" height="188px" /> */}
          <picture>
            <source srcSet={imagePaths.webp2x} type="image/webp" />
            <source srcSet={imagePaths.webp1x} type="image/webp" />
            <source srcSet={imagePaths.png2x} type="image/png" />
            <source srcSet={imagePaths.png1x} type="image/png" />
            <Image src={imagePaths.png1x} alt="Rocket" />
          </picture>
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
