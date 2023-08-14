import React from 'react';
import {
  Container,
  Wrap,
  Image,
  Header,
  Span,
  WrapLinks,
  LinkSignUp,
  LinkLogIn,
  Icon,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Container>
      <Wrap>
        <Image
          src={'../../images/goose-mob.png'}
          alt={'Goose'}
          width={'142px'}
          height={'142px'}
        />
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
