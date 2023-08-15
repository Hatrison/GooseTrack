import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  SidebarOverlay,
  SidebarWrap,
  SidebarCover,
  CloseIcon,
  Logo,
  LogoText,
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
      <div>
      <SidebarWrap>
        <div>
          <SidebarCover>
            <div>
                <Logo />
                <LogoText />
              {!isDesktop && <CloseIcon onClick={() => onSidebarToggle()} />}
            </div>
          </SidebarCover>
        </div>
        <div>
          <p>User Panel</p>
          <UserNav />
        </div>
        <LogoutBtn />
        </SidebarWrap>
        </div>
    </SidebarOverlay>
  );
}