import React, { useState } from 'react';

const AddWidgetModal = ({ onClose, onAddWidget, selectedCategory, setSelectedCategory }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const categories = ['CSPM', 'CWPP', 'Image', 'Ticket'];

  const handleAddWidget = () => {
    const widget = {
      id: Date.now(),
      type: 'widget',
      name: widgetName,
      content: widgetText,
    };
    onAddWidget(widget);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={onClose}></div>
      <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-50">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Add Widget</h2>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <ul className="flex border-b">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 ${selectedCategory === category ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Widget Name</label>
            <input
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter widget name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Widget Text</label>
            <input
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter widget text"
            />
          </div>
          <div className="flex justify-end">
            <button onClick={onClose} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
            <button onClick={handleAddWidget} className="px-4 py-2 bg-blue-600 text-white rounded-md">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default  AddWidgetModal;