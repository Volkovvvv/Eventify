import React from 'react';
import Header from '../components/Header';
import styles from '../scss/components/pages/LocationPage.module.scss';
import LocationDescription from '../components/LocationDescription';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const LocationPage = () => {
  const { dataUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!dataUser) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      {dataUser ? (
        <div className={styles.body}>
          <Header />
          <LocationDescription />
        </div>
      ) : null}
    </>
  );
};

export default LocationPage;
