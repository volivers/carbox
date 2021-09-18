import React, { useState } from 'react';
import useStyles from '../../styles/ReadingsFormStyles';
import { useInputState } from '../../hooks/useInputState';
import { apiCall } from '../../utils/apiCall';
import { API_KEY } from '../../utils/apiKey';
import { units } from '../../constants/units';
import { locations } from '../../constants/locations';
import BoltIcon from '@mui/icons-material/Bolt';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';

const ReadingsForm = () => {
  const [usage, setUsage] = useState('');
  const [unit, handleUnitChange] = useInputState(units[0].value);
  const [location, handleLocationChange] = useInputState(locations[0].value);
  const classes = useStyles();

  const handleSubmit = (unit: string, usage: string | number, location: string) => {
    return apiCall(
      'post',
      `https://www.carboninterface.com/api/v1/estimates`,
      API_KEY,
      {
        "type": "electricity",
        "electricity_unit": unit,
        "electricity_value": usage,
        "country": location,
      }
    )
      .then(response => {
        console.log(response.data);
        setUsage('');
      })
      .catch((error) => alert(error));
  };

  return (
    <section className={classes.root}>
      <h2 className={`${classes.title} ${classes.textAccent}`}>
        <span className={`${classes.icon} ${classes.boxAccent}`}><BoltIcon /></span>
        Electricity Readings
      </h2>
      <form className={classes.form} onSubmit={() => handleSubmit(unit, usage, location)}>
        <small><p className={classes.timestamp}>Last reading:</p></small>
        <div className={classes.formRow}>
          <TextField
            autoFocus
            type="number"
            margin="dense"
            id="usage"
            label="Usage"
            placeholder="0.00"
            value={usage}
            onChange={(e) => setUsage(parseFloat(e.target.value).toFixed(2))}
            variant="standard"
            color="secondary"
            style={{ width: '40%' }}
            inputProps={{ min: 1.00, step: "0.50" }}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.label,
              shrink: true
            }}
          />
          <TextField
            select
            margin="dense"
            id="unit"
            label="Unit"
            value={unit}
            onChange={handleUnitChange}
            variant="standard"
            color="secondary"
            style={{ width: '40%' }}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.label
            }}
            SelectProps={{
              classes: {
                icon: classes.chevron,
              },
            }}
          >
            {units.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <TextField
          select
          fullWidth
          margin="dense"
          id="location"
          label="Location"
          value={location}
          onChange={handleLocationChange}
          variant="standard"
          color="secondary"
          InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            className: classes.label
          }}
          SelectProps={{
            classes: {
              icon: classes.chevron,
            },
          }}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <Button
        onClick={() => handleSubmit(unit, usage, location)}
        variant="contained"
        className={classes.button}
        disabled={(!usage || parseFloat(usage) <= 0) && true}
      >
        Confirm
      </Button>
    </section>
  );
};

export default ReadingsForm;