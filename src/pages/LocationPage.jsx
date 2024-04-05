import React from 'react';
import Header from '../components/Header';
import styles from '../scss/components/pages/LocationPage.module.scss';
import LocationDescription from '../components/LocationDescription';

export const LocationPage = () => {
  return (
    <div className={styles.body}>
      <Header />
      <LocationDescription />
    </div>
  );
};

export default LocationPage;
