import React from 'react';
import {
  Container,
  Wrap,
  Image,
  Header,
  Span,
  WrapLinks,
  LinkGoogleAuth,
  LinkSignUp,
  LinkLogIn,
  Icon,
} from './AuthSection.styled';

import Goose1xMobPng from 'images/main-page/goose1xMob.png';
import Goose2xMobPng from 'images/main-page/goose2xMob.png';
import goose1xTabDeskPng from 'images/main-page/goose1xTabDesk.png';
import goose2xTabDeskPng from 'images/main-page/goose2xTabDesk.png';
import Goose1xMobWebp from 'images/main-page/goose1xMob.webp';
import Goose2xMobWebp from 'images/main-page/goose2xMob.webp';
import goose1xTabDeskWebp from 'images/main-page/goose1xTabDesk.webp';
import goose2xTabDeskWebp from 'images/main-page/goose2xTabDesk.webp';

const AuthSection = () => {
  return (
    <Container>
      <Wrap>
        <picture>
          <source
            srcSet={`${goose1xTabDeskWebp} 1x, ${goose2xTabDeskWebp} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${goose1xTabDeskPng} 1x, ${goose2xTabDeskPng} 2x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${Goose1xMobWebp} 1x, ${Goose2xMobWebp} 2x`} />
          <source srcSet={`${Goose1xMobPng} 1x, ${Goose2xMobPng} 2x`} />
          <Image src={`${Goose1xMobPng}`} alt="Goose" />
        </picture>
        <Header>
          <Span>Goose</Span>Track
        </Header>
        <WrapLinks>
          <LinkLogIn to="/login">
            Log in
            <Icon />
          </LinkLogIn>
          <LinkSignUp to="/register">Sign up</LinkSignUp>
          <LinkGoogleAuth to="/google">Google</LinkGoogleAuth>
        </WrapLinks>
      </Wrap>
    </Container>
  );
};

export default AuthSection;
