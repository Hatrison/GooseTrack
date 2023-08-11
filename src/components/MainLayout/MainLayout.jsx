import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from 'components/Header/Header';
import Sidebar from 'components/SideBar/SideBar';
import {
  Suspense,
  MainWrap,
  Container,
  PageContainer,
} from './MainLayout.styled';

export default function MainLayout() {
  const [sideBarVisible, setSitebarVisible] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  useEffect(() => {
    if (setSitebarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sideBarVisible]);

  const onSidebarToggle = () => {
    setSitebarVisible(state => !state);
  };
  return (
    <MainWrap>
      <main>
        <Container>
          {(isDesktop || sideBarVisible) && (
            <Sidebar onSidebarToggle={onSidebarToggle} />
          )}
          <PageContainer>
            <Header onSidebarToggle={onSidebarToggle} />
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </PageContainer>
        </Container>
      </main>
    </MainWrap>
  );
}
