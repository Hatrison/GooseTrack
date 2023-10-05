import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useDispatch';
import { selectTheme } from 'redux/theme/selectors';

import { toggleTheme } from 'redux/theme/themeSlice';

import {
  ToggleButton,
  ToggleToDark,
  ToggleToLight,
} from './ThemeToggler.styled';

export default function ThemeToggler() {
  const dispatсh = useAppDispatch();

  const theme = useAppSelector(selectTheme);

  return (
    <ToggleButton type="button" onClick={() => dispatсh(toggleTheme())}>
      {theme === `light` && <ToggleToDark />}
      {theme === `dark` && <ToggleToLight />}
    </ToggleButton>
  );
}
