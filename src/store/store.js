// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './widgetslice'

export const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
  },
});
