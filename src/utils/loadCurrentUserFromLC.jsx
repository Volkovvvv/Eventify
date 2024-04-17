import React from 'react';

const loadCurrentUserFromLC = () => {
  try {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    }
  } catch (error) {
    console.error('Error loading current user from local storage:', error);
  }
  return null;
};

export default loadCurrentUserFromLC;
