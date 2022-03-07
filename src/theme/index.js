import { ThemeProvider } from 'styled-components';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import palette from './palette';
import typography from './typography';

const theme = {
  breakpoints,
  palette,
  typography,
};

const ThemeConfig = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
