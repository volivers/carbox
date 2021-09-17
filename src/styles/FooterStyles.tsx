import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingBottom: '0.5rem',
  },
  socialRow: {
    marginLeft: '4rem',
    display: 'flex',
  },
  socialContainer: {
    height: '2.25rem',
    width: '2.25rem',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 2rem 0 0',
    opacity: 0.8,
    transition: 'opacity .3s ease-in',
    "&:hover": {
      opacity: 1,
    }
  },
  socialLink: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontSize: '1.5rem',
    padding: '0px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    textAlign: 'right',
    marginRight: '3.5rem',
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
