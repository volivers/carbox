import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#161d20'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      '#root > main': {
        minHeight: '100vh',
        width: '100%',
        fontFamily: 'Open Sans, serif',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      },
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;