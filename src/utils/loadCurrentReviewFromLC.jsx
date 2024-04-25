import React from 'react';

const loadCurrentReviewFromLC = () => {
  const savedReviews = localStorage.getItem('locationReview');
  if (savedReviews) {
    return JSON.parse(savedReviews);
  }
  return [];
};

export default loadCurrentReviewFromLC;
