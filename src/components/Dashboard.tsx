import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import useStyles from '../styles/DashboardStyles';
import ReadingsForm from './readings/ReadingsForm';
import EmissionsTimeline from './emissions/EmissionsTimeline';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <main>
      <NavBar />
      <div className={classes.root}>
        <ReadingsForm />
        <EmissionsTimeline />
      </div>
      <Footer />
    </main>
  );
}

export default Dashboard;
