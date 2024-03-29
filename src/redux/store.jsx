import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import locations from './locations/slice';

export const store = configureStore({
  reducer: {
    locations,
  },
});
