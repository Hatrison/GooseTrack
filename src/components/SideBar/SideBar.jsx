import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { logoutUser } from 'redux/auth/operations';

import { SidebarOverlay, SidebarWrap, NavLink, Link } from './SideBar.styled';

export default function SideBar({ onSidebarToggle }) {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
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

  const handleLogout = () => {
    dispatch(logoutUser());
    !isDesktop && onSidebarToggle();
  };
  return (
    <SidebarOverlay onClick={onOverlayClick}>
      <SidebarWrap>
        <div>
          <div>logo</div>
          <div>WordLogo</div>
          <div>Button</div>
        </div>
        <div>
          <p>User Panel</p>
          <NavLink>
            <Link to="/account">My account</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/statistics">Statistics</Link>
          </NavLink>
        </div>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </SidebarWrap>
    </SidebarOverlay>
  );
}
