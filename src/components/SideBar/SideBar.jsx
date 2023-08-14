import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { logoutUser } from 'redux/auth/operations';
import { LogOutBtn } from './SideBar.styled';
import { ReactComponent as ButtonIcon } from 'images/svg/logout.svg';
import { ReactComponent as CloseIcon} from 'images/svg/close.svg';
import { ReactComponent as Logo } from 'images/svg/logo_text.svg';
import { ReactComponent as User } from 'images/svg/user.svg';
import { ReactComponent as Calendar } from 'images/svg/calendarCheck.svg';
import { ReactComponent as Chart } from 'images/svg/chart.svg';

import {
  SidebarOverlay,
  SidebarWrap,
  SidebarCover,
  Link,
  NavLink,
} from './SideBar.styled';

export default function SideBar({ onSidebarToggle }) {
  const [closeIconVisible, setCloseIconVisible] = useState(false);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  if (isDesktop || !closeIconVisible) {
      document.body.style.show = 'false';
    } else {
      document.body.style.show = 'true';
  }
  
    const showCloseIcon = () => {
      setCloseIconVisible(state => !state);
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

    const handleLogout = () => {
      dispatch(logoutUser());
      !isDesktop && onSidebarToggle();
    };
  
    return (
      <SidebarOverlay onClick={onOverlayClick}>
        <SidebarWrap>
          <div>
            <SidebarCover>
              <div>
                <Logo />
                {(!isDesktop || closeIconVisible) && (
                  <CloseIcon showCloseIcon={showCloseIcon}/>
                )}
              </div>
            </SidebarCover>
            <LogOutBtn type='button'>
              Log out
              <ButtonIcon />
            </LogOutBtn>
          </div>
          <div>
            <p>User Panel</p>
            <NavLink>
              <Link to="/account"><User />My account</Link>
              <Link to="/calendar"><Calendar />Calendar</Link>
              <Link to="/statistics"><Chart />Statistics</Link>
            </NavLink>
          </div>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </SidebarWrap>
      </SidebarOverlay>
    );
  };

