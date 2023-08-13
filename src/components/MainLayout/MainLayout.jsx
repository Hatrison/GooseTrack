import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from 'components/Header/Header';
import Sidebar from 'components/SideBar/SideBar';
import { TailSpin } from 'react-loader-spinner';
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
    if (sideBarVisible) {
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
      <Container>
        {(isDesktop || sideBarVisible) && (
          <Sidebar onSidebarToggle={onSidebarToggle} />
        )}
        <PageContainer>
          <Header onSidebarToggle={onSidebarToggle} />
          <Suspense
            fallback={
              <TailSpin width={'10%'} height={'10%'} color={'#3E85F3'} />
            }
          >
            <Outlet />
          </Suspense>
        </PageContainer>
      </Container>
    </MainWrap>
  );
}
