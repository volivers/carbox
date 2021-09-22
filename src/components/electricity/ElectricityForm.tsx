import React, { useState } from 'react';
import useStyles from '../../styles/ElectricityFormStyles';
import { useInputState } from '../../hooks/useInputState';
import { postEstimate } from '../../utils/apiService';
import { getEstimates } from '../../utils/apiService';
import { units } from '../../constants/units';
import { locations } from '../../constants/locations';
import BoltIcon from '@mui/icons-material/Bolt';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@material-ui/core/Button';
import Hotkeys from 'react-hot-keys';
// import moment from 'moment';

interface Props {
  setEstimates: (prev: any) => void;
}

const ElectricityForm: React.FC<Props> = ({
  setEstimates,
}) => {
  const [usage, setUsage] = useState('');
  const [unit, handleUnitChange] = useInputState(units[0].value);
  const [location, handleLocationChange] = useInputState(locations[0].value);
  const classes = useStyles();

  // const lastEstimateDuration = (endDate: { diff: (arg0: moment.Moment) => moment.DurationInputArg1; }) => {
  //   const now = moment(new Date());
  //   const duration = moment.duration(endDate.diff(now));
  //   return duration.asHours();
  // }

  const handleSubmit = (unit: string, usage: string, location: string) => {
    postEstimate(unit, usage, location)
      .then(response => {
        console.log(response.data);
        const item = Object.values(response.data);
        console.log(item[0]);
        // console.log(lastEstimateDuration(response.data.attributes.estimated_at));
        setUsage('');
        getEstimates().then((response) => setEstimates(response.data));
      })
      .catch((error) => alert(error));
  };

  return (
    <section className={classes.root}>
      <Hotkeys
        keyName="space"
        onKeyUp={() => (!!usage && parseFloat(usage) > 0) && handleSubmit(unit, usage, location)}
      >
        <h2 className={`${classes.title} ${classes.textAccent}`}>
          <span className={`${classes.icon} ${classes.boxAccent}`}><BoltIcon /></span>
          Electricity Readings
        </h2>
        <form className={classes.form} onSubmit={() => handleSubmit(unit, usage, location)}>
          <small><p className={classes.timestamp}>Last reading:</p></small>
          <Grid container justifyContent="space-between">
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
          </Grid>
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
      </Hotkeys>
    </section>
  );
};

export default ElectricityForm;