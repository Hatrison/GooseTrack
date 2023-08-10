import { ThemeProvider } from 'styled-components';
import { theme as themeTemplate } from './Theme.styled';
import { selectTheme } from 'redux/theme/selectors';
import { useSelector } from 'react-redux';

const Theme = ({ children }) => {
  const theme = useSelector(selectTheme);
  const isDarkTheme = theme === 'dark';
  const { light, dark } = themeTemplate;

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>{children}</ThemeProvider>
  );
};

export default Theme;
