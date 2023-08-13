import {
  Text,
  NumberWrap,
  Number,
  Wrapper,
  StyledLink,
  ContentWrap,
  RocketStyled,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>
          <RocketStyled />
          <Number>4</Number>
        </NumberWrap>
        <Text>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text>
        <StyledLink to="/">Back to home</StyledLink>
      </ContentWrap>
    </Wrapper>
  );
};

export default NotFound;
