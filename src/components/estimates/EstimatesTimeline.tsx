import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import useStyles from '../../styles/EstimatesTimelineStyles';

const EstimatesTimeline = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h2 className={`${classes.title} ${classes.textAccent}`}>
        <span className={`${classes.icon} ${classes.boxAccent}`}><BarChartIcon /></span>
        CO<sub className={classes.sub}>2</sub> Emissions Estimates
      </h2>

    </section>
  );
};

export default EstimatesTimeline;