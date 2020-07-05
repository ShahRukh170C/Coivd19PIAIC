import React ,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


import {CountryData} from '../../StatesAndReducer/CountryData'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
      backgroundColor:"gray"
      
    },
  },
}));

export function MultilineTextFields({Countries}) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('Pakistan');

  const {getCountryName} = useContext(CountryData)

  const handleChange = (event) => {
    setCurrency(event.target.value);
    getCountryName(event.target.value)
    
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <div>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {Countries.map((option,index) => (
            <MenuItem key={index} value={option.Country}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
