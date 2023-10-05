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
import { Props } from './SideBar.types';

export default function SideBar({ onSidebarToggle }: Props) {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  useEffect(() => {
    const closeMenuByEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onSidebarToggle();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onSidebarToggle]);

  const onOverlayClick = (event: React.MouseEvent) => {
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
