import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  totalLocations: 45,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalLocations(state, action) {
      state.totalLocations = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalLocations } = paginationSlice.actions;

export default paginationSlice.reducer;
