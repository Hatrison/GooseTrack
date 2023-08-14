import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as CloseIcon } from 'images/svg/close.svg';
import { ReactComponent as Logo } from 'images/svg/logo_text.svg';
import { SidebarOverlay, SidebarWrap, SidebarCover } from './SideBar.styled';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';

export default function SideBar({ onSidebarToggle }) {
  const [closeIconVisible, setCloseIconVisible] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  if (isDesktop || !closeIconVisible) {
    document.body.style.show = 'false';
  } else {
    document.body.style.show = 'true';
  }

  const showCloseIcon = () => {
    setCloseIconVisible(state => !state);
  };

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

  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   !isDesktop && onSidebarToggle();
  // };

  return (
    <SidebarOverlay onClick={onOverlayClick}>
      <SidebarWrap>
        <div>
          <SidebarCover>
            <div>
              <Logo />
              {(!isDesktop || closeIconVisible) && (
                <CloseIcon onClick={showCloseIcon} />
              )}
            </div>
          </SidebarCover>
        </div>
        <div>
          <p>User Panel</p>
          <UserNav />
        </div>
        <LogoutBtn />
      </SidebarWrap>
    </SidebarOverlay>
  );
}
