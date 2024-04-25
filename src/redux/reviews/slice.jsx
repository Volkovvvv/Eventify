// reviewsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import loadCurrentReviewFromLC from '../../utils/loadCurrentReviewFromLC';

const initialState = {
  locationReview: loadCurrentReviewFromLC() || {},
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReview(state, action) {
      const { id, comment, name, rating, email } = action.payload;
      const reviews = state.locationReview[id] || [];
      const updatedReviews = reviews.concat({ comment, name, rating, email });
      const updatedLocationReview = {
        ...state.locationReview,
        [id]: updatedReviews,
      };

      // Сохранение обновленных комментариев в localStorage
      localStorage.setItem('locationReview', JSON.stringify(updatedLocationReview));

      return {
        ...state,
        locationReview: updatedLocationReview,
      };
    },
  },
});

export const { setReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
