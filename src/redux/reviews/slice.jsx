import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locationReview: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReview(state, action) {
      const { id, comment, name } = action.payload;
      const reviews = state.locationReview[id] || [];
      const updatedReviews = reviews.concat({ comment, name });
      return {
        ...state,
        locationReview: {
          ...state.locationReview,
          [id]: updatedReviews,
        },
      };
    },
  },
});

export const { setReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
