import { ThemeProvider } from 'styled-components';
import { theme as themeTemplate } from './Theme.styled';
import { selectTheme } from 'redux/theme/selectors';
import { useAppSelector } from 'hooks/useSelector';

const Theme = ({ children }) => {
  const theme = useAppSelector(selectTheme);
  const isDarkTheme = theme === 'dark';
  const { light, dark } = themeTemplate;

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>{children}</ThemeProvider>
  );
};

export default Theme;
