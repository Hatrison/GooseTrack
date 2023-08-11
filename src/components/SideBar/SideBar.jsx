import { useEffect } from 'react';

import { SidebarOverlay, SidebarWrap } from './SideBar.styled';

export default function SideBar({ onSidebarToggle }) {
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
        <div>
          <div>logo</div>
          <div>WordLogo</div>
          <div>Button</div>
        </div>
        <nav>
          <p>User Panel</p>
          <div>My account</div>
          <div>Calendar</div>
          <div>Statistics</div>
        </nav>
        <button type="button">Log out</button>
      </SidebarWrap>
    </SidebarOverlay>
  );
}
