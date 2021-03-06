import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.5em',
    fontWeight: 'lighter',
  },
  icon: {
    height: '1.5rem',
    width: '1.5rem',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.5rem',
    opacity: 0.8,
  },
  form: {
    marginTop: '1rem',
    marginBottom: '3.5rem',
  },
  timestamp: {
    color: theme.palette.secondary.light,
    textAlign: 'right',
  },
  input: {
    borderBottom: `1px solid ${theme.palette.secondary.light} !important`,
    color: `${theme.palette.secondary.light} !important`,
  },
  label: {
    color: `${theme.palette.secondary.light} !important`,
  },
  chevron: {
    fill: `${theme.palette.secondary.light} !important`,
  },
  button: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.primary.dark} !important`,
    opacity: `${0.8} !important`,
    boxShadow:
      `0 0 5px #fff, 0 0 5px #fff,
      0 0 15px #0073e6, 0 0 10px #0073e6,
      0 0 25px #0073e6, 0 0 15px #0073e6,
      0 0 35px #0073e6 !important`,
    transition: 'opacity .3s ease-in !important',
    "&:disabled": {
      opacity: `${0.4} !important`,
      boxShadow:
        `0 0 5px #fff, 0 0 5px #fff,
        0 0 15px #0073e6, 0 0 10px #0073e6,
        0 0 25px #0073e6, 0 0 15px #0073e6,
        0 0 35px #0073e6 !important`,
    },
    "&:hover": {
      opacity: `${1} !important`,
      boxShadow:
        `0 0 5px #fff, 0 0 5px #fff,
        0 0 15px #0073e6, 0 0 10px #0073e6,
        0 0 25px #0073e6, 0 0 15px #0073e6,
        0 0 35px #0073e6 !important`,
    }
  },
  textAccent: {
    textShadow: '0px 0px 5px #FFFFFF',
  },
  boxAccent: {
    boxShadow:
      `0 0 5px #fff, 0 0 10px #fff,
      0 0 15px #0073e6, 0 0 20px #0073e6,
      0 0 25px #0073e6, 0 0 30px #0073e6,
      0 0 35px #0073e6`,
  }
}));
