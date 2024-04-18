import React from 'react';

const loadCurrentReviewFromLC = () => {
  try {
    const currentReview = localStorage.getItem('currentReview');
    if (currentReview) {
      return JSON.parse(currentReview);
    }
  } catch (error) {
    console.error('Error loading current user from local storage:', error);
  }
  return null;
};

export default loadCurrentReviewFromLC;
