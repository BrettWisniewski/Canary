import { Box, Typography } from '@mui/material';
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import UserAgent from '../NetworkInfo/UserAgent';
import IPAddress from '../NetworkInfo/IPAddress';
import Chart from './Chart';

const Speedometer = (props) => {

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ReactSpeedometer
          maxValue={100}
          textColor="white"
          value={props.value}
          needleColor="white"
          startColor="green"
          segments={10}
          endColor="red"
          width={500}
          height={300}
          valueFormat="d"
          currentValueText={`${props.value}%`}
        />
      </Box>
      <Typography variant="h6" gutterBottom fontWeight="bold">Networking Info</Typography>
      <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">IP Address: <IPAddress /></Typography>
      <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">User Agent: <UserAgent /></Typography>
      <Chart />
    </>
  );
};

export default Speedometer;
