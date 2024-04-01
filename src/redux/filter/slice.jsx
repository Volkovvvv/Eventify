import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  subway: '',
  coordinates: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterSubway(state, action) {
      state.subway = action.payload;
    },
    setFilterCoordinates(state, action) {
      state.coordinates = action.payload;
    },
  },
});

export const { setFilterSubway, setFilterCoordinates } = filterSlice.actions;

export default filterSlice.reducer;
