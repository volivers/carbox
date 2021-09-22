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

  const dailyFormat = (item: { estimated_at: string | number | Date; }) => (
    moment(new Date(item.estimated_at), 'YYYY-MM-DD').format('DD-MMM')
  );
  const groupsByDay = _(attributes)
    .groupBy(dailyFormat)
    .value()

  const flatten = (arr: any[]) => arr.reduce((a, b) => a.concat(b), []);
  const filterByLocation = (location: string) => (
    Object.values(groupsByDay).map(item => (
      item.filter(i => i.country === location && i)
    ))
  );

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
      categories: attributes.map(i => dailyFormat(i)),
    },
    legend: {
      fontFamily: 'Open Sans',
      fontWeight: 'normal',
    }
  };

  const series = locations.map((option: { label: string; value: string; }) => (
    {
      name: option.label,
      data:
        flatten(
          filterByLocation(option.value)
        ).map((i: { carbon_kg: number; }) => i.carbon_kg)
    }
  ));

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