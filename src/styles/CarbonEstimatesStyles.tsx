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
  sub: {
    marginTop: '1rem',
    marginRight: '0.5rem',
  },
  empty: {
    color: theme.palette.secondary.light,
    textAlign: 'right',
    marginTop: '5rem',
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
