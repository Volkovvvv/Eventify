import React from 'react';
import styles from '../scss/components/pages/mainPage.module.scss';
import { Header } from '../components/Header';
import MinskView from '../components/MinskView';
import Filter from '../components/Filter';
import Search from '../components/Search';
import { Locations } from '../components/Main/Main';

export const MainPage = () => {
  let activityName;
  return (
    <div className={styles.body}>
      <Header />
      <MinskView />
      <Filter activityName={activityName} />
      <Search />
      <Locations />
    </div>
  );
};

export default MainPage;
