import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import style from "./Main_bodys.module.css";
import { MultilineTextFields } from '../Input/Input'
import { Typography } from '@material-ui/core';

import { SimplePaper } from '../Paper/Paper'

import LeftSide from '../LeftSide/LeftSide'
import { initialGolbalData } from '../../StatesAndReducer/GlobalData'

import { CountryDataProvider } from '../../StatesAndReducer/CountryData'
import {LineChart} from '../Chart/LineChar'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: "1px solid blue",
    position: "relative",
  },
}));

export function CenteredGrid() {
  const { VirusGlobalData } = useContext(initialGolbalData)
  

  const classes = useStyles();
  if (!VirusGlobalData.Global) {
    return ''
  }
  return (
    <div className={classes.root}>

      <Grid container spacing={12}>
        <CountryDataProvider>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={style.root}
            item
            xs={12}
            sm={3}
          >
            {/* Input */}
            {/* Card for the Gload */}
            {/* Input */}
            <MultilineTextFields Countries={VirusGlobalData.Countries}></MultilineTextFields>
            <LeftSide></LeftSide>
          </Grid>
          <Grid className={style.root} item xs={12} sm={6}>
            <LineChart></LineChart>
        </Grid>
        </CountryDataProvider>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={[style.root, style.center].join(' ')}
          item
          xs={12}
          sm={3}
        >
          {/* Input */}
          {/* Card for the Gload */}
          {/* Input */}
          <Typography  align="center" variant="h5">Globel Status</Typography>
          <SimplePaper name="Conformed Cases" number={VirusGlobalData.Global.TotalConfirmed} colors="red"></SimplePaper>
          <SimplePaper name="Total Deaths" number={VirusGlobalData.Global.TotalDeaths} colors="red"></SimplePaper>
          <SimplePaper name="Total Recovered" number={VirusGlobalData.Global.TotalRecovered} colors="green"></SimplePaper>

        </Grid>
      </Grid>
    </div>
  );
}
