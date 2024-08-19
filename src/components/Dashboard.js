import React, { useState } from 'react';
import Category from './Category';
import AddWidgetModal from './AddWidgetModel'; 
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/widgetslice'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('CSPM');
  const dispatch = useDispatch();

  const handleAddWidget = (widget) => {
    dispatch(addWidget({ category: selectedCategory, widget }));
    setIsSidebarOpen(false);
  };

  const categories = [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, type: 'graph', name: 'Cloud Accounts', content: 'Connected: 2, Not Connected: 2' },
        { id: 2, type: 'graph', name: 'Cloud Account Risk Assessment', content: 'Failed: 1698, Warning: 681, Passed: 7253' },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [
        { id: 1, type: 'widget', name: 'Top 5 Namespace Specific Alerts', content: 'No Graph data available!' },
        { id: 2, type: 'widget', name: 'Workload Alerts', content: 'No Graph data available!' },
      ],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        { id: 1, type: 'widget', name: 'Image Risk Assessment', content: '1470 Total Vulnerabilities' },
        { id: 2, type: 'widget', name: 'Image Security Issues', content: '2 Total Images' },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} onAddWidget={handleAddWidget} />
        ))}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + Add Widget
        </button>
      </div>
      {isSidebarOpen && (
        <AddWidgetModal
          onClose={() => setIsSidebarOpen(false)}
          onAddWidget={handleAddWidget}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
};

export default Dashboard;