import React, { Suspense } from 'react';
import moment from 'moment';
import _ from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { CarbonEstimatesResponse } from '../../types/responseTypes';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { locations } from '../../constants/locations';

interface Props {
  estimates: CarbonEstimatesResponse;
}

const CarbonTimeline: React.FC<Props> = ({
  estimates,
}) => {
  const attributes = Object.values(estimates).map(e => e.data.attributes);
  const days = (item: { estimated_at: string | number | Date; }) => (
    moment(new Date(item.estimated_at), 'YYYY-MM-DD').format('DD-MMM')
  );
  const groups = _(attributes)
    .groupBy(days)
    // .mapValues(items => _.map(items, 'country'))
    .value()

  const options = {
    chart: {
      foreColor: '#cccccc',
      fontFamily: 'Open Sans',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
    },
    marker: {
      show: false,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
      }
    },
    title: {
      text: 'Daily Carbon Emissions (kg)',
      style: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
      }
    },
    xaxis: {
      categories: Object.keys(groups),
    },
    legend: {
      fontFamily: 'Open Sans',
      fontWeight: 'normal',
    }
  };

  const flatten = (arr: any[]) => arr.reduce((a, b) => a.concat(b), []);
  console.log(attributes);
  console.log(Object.values(groups).map(item => item.map(i => i.electricity_value)));

  const filterByLocation = (location: any) => (
    Object.values(groups).map(item => item.filter(i => (
      i.country === location
    )))
  );


  // const highCount = (month) => {
  //   const high = [];
  //   month.map(item => {
  //     if (item === 'High') { high.push(item) };
  //     return item;
  //   });
  //   return high.length;
  // };

  // const mediumCount = (month) => {
  //   const medium = [];
  //   month.map(item => {
  //     if (item === 'Medium') { medium.push(item) };
  //     return item;
  //   });
  //   return medium.length;
  // };

  // const lowCount = (month) => {
  //   const low = [];
  //   month.map(item => {
  //     if (item === 'Low') { low.push(item) };
  //     return item;
  //   });
  //   return low.length;
  // };

  const series = locations.map((option: { label: any; value: any; }) => (
    { name: option.label, data: flatten(filterByLocation(option.value)).map((i: { electricity_value: any; }) => i.electricity_value) }
  ));

  console.log(series)

  return (
    <>
      <Suspense fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }>
        <ReactApexChart options={options} series={series} type="area" height={300} />
      </Suspense>
    </>
  );
};

export default CarbonTimeline;