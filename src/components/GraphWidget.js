import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import 'chart.js/auto';

const GraphWidget = ({ data, options, title }) => {
  console.log('GraphWidget Data:', data);

  const isDataAvailable = data && data.datasets && data.datasets.length > 0 && data.datasets[0].data.some(value => value > 0);

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="relative w-full h-64">
        {isDataAvailable ? (
          <Doughnut data={data} options={options} />
        ) : (
          <p className="text-center text-gray-500">No Graph Data Available!</p>
        )}
      </div>
    </div>
  );
};

export default GraphWidget;
