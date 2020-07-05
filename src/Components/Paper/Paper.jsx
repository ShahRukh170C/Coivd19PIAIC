import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import style from './Paper.module.css'
import CountUp from 'react-countup';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(16),
    },
  },
}));

export function SimplePaper({name,number,colors}) {
  const classes = useStyles();
  if(number===''){
    return ''
  }
  return (
    <div className={classes.root}>
      <Paper className={style.containor}>
        <Typography  className={style.text} align="center" variant="subtitle1">{name}</Typography>
        <Typography className={style.figur} align="center" variant="h4">
          <CountUp
              start={0}
              end={number}
              duration={3}
              separator="," 
            >
            </CountUp>  
        </Typography>
        <Typography className={(colors === 'red') ? style.red : style.green} align="center">+ 9.67</Typography>
      </Paper>
      
    </div>
  );
}
