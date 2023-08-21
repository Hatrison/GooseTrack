import React from 'react';
import {
  Container,
  Wrap,
  Header,
  Span,
  WrapLinks,
  LinkSignUp,
  LinkLogIn,
  Icon,
  Goose,
} from './AuthSection.styled';

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
        </WrapLinks>
      </Wrap>
    </Container>
  );
};

export default AuthSection;
