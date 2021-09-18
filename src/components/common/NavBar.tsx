import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../../styles/NavBarStyles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <h1 className={`${classes.title} ${classes.textAccent}`}>
            CARBO<sup>x</sup>
          </h1>
          <span className={`${classes.divider} ${classes.boxAccent}`} />
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;