import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const TestChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [100, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = { responsive: true };

  return <Doughnut data={data} options={options} />;
};

export default TestChart;
