import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  SidebarOverlay,
  SidebarWrap,
  SidebarCover,
  LogoWrap,
  CloseIcon,
  Logo,
  LogoText,
  Paragraph,
} from './SideBar.styled';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';

export default function SideBar({ onSidebarToggle }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  if (isDesktop) {
    document.body.style.show = 'false';
  } else {
    document.body.style.show = 'true';
  }

  useEffect(() => {
    const closeMenuByEsc = e => {
      if (e.code === 'Escape') {
        onSidebarToggle();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
    };
  }, [onSidebarToggle]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onSidebarToggle();
    }
  };

  return (
    <SidebarOverlay onClick={onOverlayClick}>
      <SidebarWrap>
        <SidebarCover>
          <LogoWrap>
            <Logo />
            <LogoText>
              G<span>oo</span>seTrack
            </LogoText>
            {!isDesktop && <CloseIcon onClick={() => onSidebarToggle()} />}
          </LogoWrap>
          <Paragraph>User Panel</Paragraph>
          <UserNav />
        </SidebarCover>
        <LogoutBtn />
      </SidebarWrap>
    </SidebarOverlay>
  );
}
