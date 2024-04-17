import React from 'react';
import styles from '../scss/components/pages/Profile.module.scss';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const curUser = useSelector((state) => state.user.currentUser);
  console.log(curUser);
  return (
    <div className={styles.body}>
      <span>Моё имя: {curUser.userName}</span>
      <span>Моя фамилия: {curUser.userSurname}</span>
      <span>Моя почта: {curUser.userEmail}</span>
    </div>
  );
};

export default Profile;
