import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import useStyles from '../styles/DashboardStyles';
import ElectricityForm from './electricity/ElectricityForm';
import CarbonTimeline from './carbon/CarbonTimeline';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <main>
      <NavBar />
      <div className={classes.root}>
        <ElectricityForm />
        <CarbonTimeline />
      </div>
      <Footer />
    </main>
  );
}

export default Dashboard;
