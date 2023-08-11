import styled from 'styled-components';
import { Suspense as SuspenseModule } from 'react';

export const MainWrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: lightgray;

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  padding: 24px 20px 20px;

  transition: 250ms ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 40px 32px 32px;
  }
`;

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
  width: 100%;
`;

export const Suspense = styled(SuspenseModule)`
  flex-grow: 1;
  padding-top: 32px;
`;
