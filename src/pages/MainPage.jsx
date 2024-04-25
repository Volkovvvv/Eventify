import React from 'react';
import styles from '../scss/components/pages/MainPage.module.scss';
import { Header } from '../components/Header';
import MinskView from '../components/MinskView';
import Filter from '../components/Filter';
import Search from '../components/Search/index.jsx';
import Pagination from '../components/Pagination';
import { Locations } from '../components/Main/Main';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const MainPage = () => {
  const { dataUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!dataUser) {
      navigate('/login');
    }
  }, []);

  let activityName;
  return (
    <>
      {dataUser ? (
        <div className={styles.body}>
          <Header />
          <MinskView />
          <Filter activityName={activityName} />
          <Search />
          <Locations />
          <Pagination />
        </div>
      ) : null}
    </>
  );
};

export default MainPage;
