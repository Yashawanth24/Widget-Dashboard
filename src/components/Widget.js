import React from 'react';

const Widget = ({ widget }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md relative">
      <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
      <p>{widget.content}</p>
      <button className="absolute top-2 right-2 text-red-500 hover:text-red-700">
        &times;
      </button>
    </div>
  );
};

export default Widget;
