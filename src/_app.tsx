import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#36498f',
      light: '#2d7c9d',
      dark: '#161d20',
    },
    secondary: {
      main: '#a4a29e',
      light: '#cccccc',
    },
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Dashboard />
      <GlobalStyles />
    </MuiThemeProvider>
  );
}

export default App;
