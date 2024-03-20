import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  search: 'минск развлечения',
  activityName: 'Популярное',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setItemsDefault(state, action) {
      state.items = action.payload;
    },
    setItemsSearch(state, action) {
      state.search = action.payload;
    },
    setItemsActivity(state, action) {
      state.activityName = action.payload;
    },
  },
});

export const { setItemsDefault, setItemsSearch, setItemsActivity } = locationSlice.actions;

export default locationSlice.reducer;
