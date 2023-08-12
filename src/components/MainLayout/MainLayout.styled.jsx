import styled from 'styled-components';
import { Suspense as SuspenseModule } from 'react';

export const MainWrap = styled.main`
  /* max-width: 1440px; */
  max-width: 100vw;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 24px 20px 20px;

  transition: 250ms ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 40px 32px 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 100vh;
`;

export const Suspense = styled(SuspenseModule)`
  flex-grow: 1;
  padding-top: 32px;
`;
