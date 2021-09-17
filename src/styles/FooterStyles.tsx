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
    paddingBottom: '1rem',
  },
  socialRow: {
    marginLeft: '3.5rem',
  },
  socialLink: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
    fontSize: '1.5rem',
    margin: '1rem 1rem 0 0',
    padding: '0px 5px',
    transition: 'opacity .3s ease-in',
    "&:hover": {
      opacity: 0.8
    }
  },
  copyright: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    textAlign: 'right',
    marginRight: '3.5rem',
  },
}));
