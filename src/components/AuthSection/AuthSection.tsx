import React from 'react';
import {
  Container,
  Wrap,
  Header,
  Span,
  WrapLinks,
  LinkGoogleAuth,
  LinkSignUp,
  LinkLogIn,
  Icon,
  Goose,
} from './AuthSection.styled';

const { REACT_APP_BASE_URL } = process.env;

const AuthSection = () => {
  return (
    <Container>
      <Wrap>
        <Goose />
        <Header>
          <Span>Goose</Span>Track
        </Header>
        <WrapLinks>
          <LinkLogIn to="/login">
            Log in
            <Icon />
          </LinkLogIn>
          <LinkSignUp to="/register">Sign up</LinkSignUp>
          <LinkGoogleAuth href={`${REACT_APP_BASE_URL}/api/auth/google`}>
            Google
          </LinkGoogleAuth>
        </WrapLinks>
      </Wrap>
    </Container>
  );
};

export default AuthSection;
