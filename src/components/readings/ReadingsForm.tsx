import React from 'react';
// import BoltIcon from '@material-ui/icons/Bolt';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import useStyles from '../../styles/ReadingsFormStyles';

const ReadingsForm = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h2 className={`${classes.title} ${classes.textAccent}`}>
        <span className={`${classes.icon} ${classes.boxAccent}`}><OfflineBoltIcon /></span>
        Electricity Readings
      </h2>
      <form onSubmit={() => console.log("handleNewReading")}>

      </form>
    </section>
  );
};

export default ReadingsForm;