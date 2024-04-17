import React from 'react';
import styles from './Header.module.scss';
import LogoMain from '../../assets/img/Logo-main.png';
import Cinema from '../../assets/img/Cinema';
import Sauna from '../../assets/img/Sauna';
import Sport from '../../assets/img/Sport';
import Leisure from '../../assets/img/Leisure';
import Alco from '../../assets/img/Alco';
import Burgersvg from '../../assets/img/Burgersvg';
import Bowling from '../../assets/img/Bowling';
import Hookah from '../../assets/img/Hookah';
import Exit from '../../assets/img/Exit';
import Profile from '../../assets/img/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsSearch, setItemsActivity } from '../../redux/locations/slice';
import { setCurrentPage } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';

export const Header = () => {
  const dispath = useDispatch();
  const eatItems = useSelector((state) => state.locations.items);

  const onClickEat = () => {
    dispath(setItemsSearch('рестораны'));
    dispath(setItemsActivity('Покушать'));
    dispath(setCurrentPage(1));
  };
  const onClickCinema = () => {
    dispath(setItemsSearch('кинотеатры'));
    dispath(setItemsActivity('Кино'));
    dispath(setCurrentPage(1));
  };
  const onClickBowling = () => {
    dispath(setItemsSearch('боулинг'));
    dispath(setItemsActivity('Боулинг'));
    dispath(setCurrentPage(1));
  };
  const onClickSport = () => {
    dispath(setItemsSearch('спортзалы'));
    dispath(setItemsActivity('Спорт'));
    dispath(setCurrentPage(1));
  };
  const onClickSauna = () => {
    dispath(setItemsSearch('сауны'));
    dispath(setItemsActivity('Сауны'));
    dispath(setCurrentPage(1));
  };
  const onClickAlco = () => {
    dispath(setItemsSearch('бары'));
    dispath(setItemsActivity('Бары'));
    dispath(setCurrentPage(1));
  };
  const onClickSmoke = () => {
    dispath(setItemsSearch('кафе с кальяном'));
    dispath(setItemsActivity('Кальянные'));
    dispath(setCurrentPage(1));
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <a href="/">
            <img src={LogoMain} alt="" />
            <span>EVENTIFY</span>
          </a>
        </div>

        <div className={styles.headerButtons}>
          <button className={styles.headerButton}>
            <Burgersvg />
            <span onClick={onClickEat}>Покушать</span>
          </button>
          <button className={styles.headerButton}>
            <Cinema />
            <span onClick={onClickCinema}>Кинотеатры</span>
          </button>
          <button className={styles.headerButton}>
            <Bowling />
            <span onClick={onClickBowling}>Боулинг</span>
          </button>
          <button className={styles.headerButton}>
            <Sport />
            <span onClick={onClickSport}>Спорт</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Sauna />
            <span onClick={onClickSauna}>Сауны</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Leisure />
            <span>
              Активный
              <br />
              отдых
            </span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Alco />
            <span onClick={onClickAlco}>Выпить</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Hookah />
            <span onClick={onClickSmoke}>Кальянные</span>
          </button>
        </div>
        <div className={styles.headerAccount}>
          <Link to="/profile">
            <div className={styles.headerAccountProfile}>
              <Profile />
              <span>Мой профиль</span>
            </div>
          </Link>
          <Link to="/login">
            <div className={styles.headerAccountExit}>
              <Exit />
              <span>Выход</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
