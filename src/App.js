import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'
import Dashboard from './components/Dashboard';
import TestChart from './components/TestChart';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-6">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
