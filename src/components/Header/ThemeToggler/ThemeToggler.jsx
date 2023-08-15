import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { toggleTheme } from 'redux/theme/themeSlice';

import {
  ToggleButton,
  ToggleToDark,
  ToggleToLight,
} from './ThemeToggler.styled';

export default function ThemeToggler() {
  const dispatсh = useDispatch();

  const theme = useSelector(selectTheme);

  return (
    <ToggleButton type="button" onClick={() => dispatсh(toggleTheme())}>
      {theme === `light` && <ToggleToDark />}
      {theme === `dark` && <ToggleToLight />}
    </ToggleButton>
  );
}
