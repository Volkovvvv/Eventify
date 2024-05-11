import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  subway: '',
  subwayName: '',
  coordinates: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterSubway(state, action) {
      state.subway = action.payload;
    },
    setFilterSubwayName(state, action) {
      state.subwayName = action.payload;
    },
    setFilterCoordinates(state, action) {
      state.coordinates = action.payload;
    },
  },
});

export const { setFilterSubway, setFilterCoordinates, setFilterSubwayName } = filterSlice.actions;

export default filterSlice.reducer;
