import React, { useState } from 'react';
import Widget from './Widget';
import GraphWidget from './GraphWidget';
import AddWidgetModal from './AddWidgetModel';

const Category = ({ category, onAddWidget }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const cloudAccountRiskData = {
    labels: ['Failed', 'Warning', 'Passed', 'Not Available'],
    datasets: [
      {
        label: 'Cloud Account Risk Assessment',
        data: [1698, 681, 7253, 36],
        backgroundColor: ['red', 'yellow', 'green', 'gray'],
      },
    ],
  };

  const cloudAccountsData = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        label: 'Cloud Accounts',
        data: [2, 2],
        backgroundColor: ['blue', 'lightgray'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddWidget = (widget) => {
    onAddWidget(widget);
    handleCloseModal(); 
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map((widget) => {
          let widgetData = null;
          
          if (widget.name === 'Cloud Account Risk Assessment') {
            widgetData = cloudAccountRiskData;
          } else if (widget.name === 'Cloud Accounts') {
            widgetData = cloudAccountsData;
          }

          return widget.type === 'graph' ? (
            <GraphWidget
              key={widget.id}
              data={widgetData}
              options={options}
              title={widget.name}
            />
          ) : (
            <Widget key={widget.id} widget={widget} />
          );
        })}
        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center bg-white border rounded-lg shadow-sm p-4 hover:shadow-md"
        >
          + Add Widget
        </button>
      </div>
      {isModalOpen && (
        <AddWidgetModal
          onClose={handleCloseModal}
          onAddWidget={handleAddWidget}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
};

export default Category;
