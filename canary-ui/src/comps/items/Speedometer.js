import { Box, Typography } from '@mui/material';
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
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
    </>
  );
};

export default Speedometer;
