import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import locations from './locations/slice';
import pagination from './pagination/slice';
import filter from './filter/slice';
import user from './user/slice';

export const store = configureStore({
  reducer: {
    locations,
    pagination,
    filter,
    user,
  },
});
