import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // X-axis labels
    datasets: [
      {
        label: 'Value',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Replace with your data
        borderColor: 'rgba(255, 0, 0, 0.7)', // Red border color
        backgroundColor: 'rgba(255, 0, 0, 0.2)', // Red fill color
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 1,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
