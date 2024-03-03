import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const newData = [0.1, 0.2, 0.3, 0.4, 0.1, 0.2, 0.3, 0.4, 0.5, 0.1, 0.2, 0.3]
const formattedData = newData.map((value, index) => ({ index, value }));

const Chart = () => {
  const [chartData, setChartData] = useState(newData);
  return (
    <>
    <Typography variant='h5' gutterBottom>Status Graph:</Typography>
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
