import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import useStyles from '../../styles/CarbonEstimatesStyles';
import CarbonTimeline from './CarbonTimeline';
import { CarbonEstimatesResponse } from '../../types/responseTypes';
import Grid from '@material-ui/core/Grid';

interface Props {
  estimates?: CarbonEstimatesResponse | undefined;
}

const CarbonEstimates: React.FC<Props> = ({
  estimates,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h2 className={`${classes.title} ${classes.textAccent}`}>
        <span className={`${classes.icon} ${classes.boxAccent}`}><BarChartIcon /></span>
        CO<sub className={classes.sub}>2</sub> Emissions Estimates
      </h2>
      {!!estimates ? (
        <CarbonTimeline estimates={estimates} />
      ) : (
        <Grid container justifyContent="center">
          <small>
            <p className={classes.empty}>
              There are not estimates available.
            </p>
          </small>
        </Grid>
      )}
    </section>
  );
};

export default CarbonEstimates;