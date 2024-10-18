import { configureStore } from '@reduxjs/toolkit';
import locations from './locations/slice';
import pagination from './pagination/slice';
import filter from './filter/slice';
import user from './user/slice';
import reviews from './reviews/slice';

export const store = configureStore({
  reducer: {
    locations,
    pagination,
    filter,
    user,
    reviews,
  },
});
