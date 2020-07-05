import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Header.module.css'
// import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border:'1px solid white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={[classes.root].join(' ')}>
      <AppBar position="static" className={style.AppBar}>
        <Toolbar>
        <img src="https://img.icons8.com/doodle/50/000000/coronavirus.png" alt="fa"/>
         <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
