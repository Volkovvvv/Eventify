import React from 'react';
import styles from '../scss/components/pages/Profile.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const Profile = () => {
  const curUser = useSelector((state) => state.user.currentUser);
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
          <span>Моё имя: {curUser.userName}</span>
          <span>Моя фамилия: {curUser.userSurname}</span>
          <span>Моя почта: {curUser.userEmail}</span>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
