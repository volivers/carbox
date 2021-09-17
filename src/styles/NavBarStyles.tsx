import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.light,
    marginRight: '3.5rem'
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '1em',
    fontWeight: 'lighter',
    margin: '2.5rem 2.5rem 2.5rem 3.5rem'
  }
}));
