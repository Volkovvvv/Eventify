import { createSlice } from '@reduxjs/toolkit';
import loadCurrentReviewFromLC from '../../utils/loadCurrentReviewFromLC';

const initialState = {
  locationReview: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReview(state, action) {
      console.log(state.locationReview);
      const { id, comment, name, rating, email } = action.payload;
      const reviews = state.locationReview[id] || [];
      const updatedReviews = reviews.concat({ comment, name, rating, email });
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
