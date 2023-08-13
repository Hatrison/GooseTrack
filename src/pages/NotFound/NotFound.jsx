// import { Link } from 'react-router-dom';
import {
  Text,
  Image,
  NumberWrap,
  Number,
  Wrapper,
  StyledLink,
  ContentWrap,
} from './NotFound.styled';

import imagePaths from './imagePaths';

const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>

          <picture>
            <source
              srcSet={`${imagePaths.webp2xTabDesk} 2x, ${imagePaths.webp1xTabDesk} 1x`}
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${imagePaths.png2xTabDesk} 2x, ${imagePaths.png1xTabDesk} 1x`}
              type="image/png"
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${imagePaths.webp2xMob} 2x, ${imagePaths.webp1xMob} 1x`}
              type="image/webp"
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${imagePaths.png2xMob} 2x, ${imagePaths.png1xMob} 1x`}
              type="image/png"
              media="(max-width: 767px)"
            />

            <Image src={imagePaths.png1xMob} alt="Rocket" />
          </picture>

          <Number>4</Number>
        </NumberWrap>
        <Text>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text>
        <StyledLink>Back to home</StyledLink>
      </ContentWrap>
    </Wrapper>
  );
};

export default NotFound;
