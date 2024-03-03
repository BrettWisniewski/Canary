import { Typography } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  console.log(props.some)
  var formattedData = props.some?.map((value, index) => ({ index, value }));
  return (
    <>
    <Typography variant='h5' gutterBottom>Status Graph:</Typography>
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} isAnimationActive={false}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
