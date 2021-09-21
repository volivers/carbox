import React, { useState, useEffect } from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import useStyles from '../styles/DashboardStyles';
import ElectricityForm from './electricity/ElectricityForm';
import CarbonEstimates from './carbon/CarbonEstimates';
import { getEstimates } from '../utils/apiService';
import { CarbonEstimatesResponse } from '../types/responseTypes';

const Dashboard = () => {
  const classes = useStyles();

  const [estimates, setEstimates] = useState<CarbonEstimatesResponse>();
  useEffect(() => {
    getEstimates()
      .then(response => setEstimates(response.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <main>
      <NavBar />
      <div className={classes.root}>
        <ElectricityForm setEstimates={setEstimates} />
        <CarbonEstimates estimates={estimates} />
      </div>
      <Footer />
    </main>
  );
}

export default Dashboard;
