import React from 'react';
import styles from '../scss/components/pages/Registration.module.scss';
import Logo from '../assets/img/Logo';
import Astronaut from '../assets/img/Astronaut';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user/slice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import FormRegistration from '../components/FormRegistration';
import { useNavigate } from 'react-router-dom';
import app from '../firebase';

export const Login = () => {
  const fetchUser = async (email) => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'users/user1');
    await get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const allUsers = Object.values(snapshot.val());
          const user = allUsers.find((user, i) => user.userEmail == email);
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            dispatch(setUser(currentUser));
          } else {
            console.log('Такого юзера нет');
          }
        } else {
          alert('error');
        }
      })
      .catch((error) => {
        console.error('Ошибка чтения данных пользователя:', error);
      });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e, email, password, name, surname) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password, name, surname)
      .then(({ user }) => {
        console.log(user);
        fetchUser(email);
        navigate('/');
      })
      .catch(() => alert('Введены неверные данные!'));
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
            title="Войти"
            handleClick={(e, email, password, name, surname) =>
              handleLogin(e, email, password, surname, name)
            }
          />
          <div className={styles.buttons}>
            <span сlassName={styles.noAcc}>Еще нет аккаунта?</span>
            <Link to="/registration">Регистрация</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
