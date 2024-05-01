import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { random } from 'gsap';

const initialState = {
  items: [],
  randomItems: [],
  search: 'Развлечения',
  searchRandom: '',
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
    setRandomSearch(state, action) {
      state.searchRandom = action.payload;
    },
    setRandomItem(state, action) {
      state.randomItems = action.payload;
    },
    setItemsActivity(state, action) {
      state.activityName = action.payload;
    },
  },
});

export const { setItemsDefault, setItemsSearch, setItemsActivity, setRandomSearch, setRandomItem } =
  locationSlice.actions;

export default locationSlice.reducer;
