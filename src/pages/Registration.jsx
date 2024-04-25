import React from 'react';
import styles from '../scss/components/pages/Registration.module.scss';
import Logo from '../assets/img/Logo';
import Astronaut from '../assets/img/Astronaut';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, push, get } from 'firebase/database';

import { setUser } from '../redux/user/slice';
import FormRegistration from '../components/FormRegistration';
import { useNavigate } from 'react-router-dom';
import app from '../firebase';

export const Registration = () => {
  const navigate = useNavigate();
  const db = getDatabase(app);
  const handleRegister = async (e, email, password, name, surname) => {
    e.preventDefault();
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password, name, surname)
      .then(({ user }) => {
        const newDocRef = push(ref(db, 'users/user1'));
        set(newDocRef, {
          userName: name,
          userSurname: surname,
          userEmail: email,
        }).then(() => {
          alert('Вы успешно зарегистрированы');
          navigate('/login');
        });
      })
      .catch(console.error);
  };

  return (
    <div className={styles.body}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <a className={styles.logoText}>
            <Logo />
          </a>
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.mainInfoIcon}>
            <Astronaut />
          </div>
          <div className={styles.mainInfoText}>
            <h2>Добро пожаловать в приложение Eventify!</h2>
            <p>Здесь ты найдешь много интересных мест Минска</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.rightContentWrapper}>
          <div className={styles.rightContentTop}>
            <h3>Привет!</h3>
          </div>
          <FormRegistration
            title="Зарегистрироваться"
            handleClick={(e, email, password, name, surname) =>
              handleRegister(e, email, password, name, surname)
            }
          />
          <div className={styles.buttons}>
            <span>
              Уже есть аккаунт? <Link to="/login">Войти</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
