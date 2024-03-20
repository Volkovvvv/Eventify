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
import { useDispatch, useSelector } from 'react-redux';
import { setItemsSearch, setItemsActivity } from '../../redux/locations/slice';

export const Header = () => {
  const dispath = useDispatch();
  const eatItems = useSelector((state) => state.locations.items);

  const onClickEat = () => {
    dispath(setItemsSearch('минск рестораны'));
    dispath(setItemsActivity('Покушать'));
  };
  const onClickCinema = () => {
    dispath(setItemsSearch('минск кино'));
    dispath(setItemsActivity('Кино'));
  };
  const onClickBowling = () => {
    dispath(setItemsSearch('минск боулинг'));
    dispath(setItemsActivity('Боулинг'));
  };
  const onClickSport = () => {
    dispath(setItemsSearch('минск спортзалы'));
    dispath(setItemsActivity('Спорт'));
  };
  const onClickSauna = () => {
    dispath(setItemsSearch('минск сауны'));
    dispath(setItemsActivity('Сауны'));
  };
  const onClickAlco = () => {
    dispath(setItemsSearch('минск бары'));
  };
  const onClickSmoke = () => {
    dispath(setItemsSearch('минск кальянные'));
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
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Burgersvg />
            <span onClick={onClickEat}>Покушать</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.cinema}>
            <Cinema />
            <span onClick={onClickCinema}>Кинотеатры</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
            <Bowling />
            <span onClick={onClickBowling}>Боулинг</span>
          </button>
          <button className={styles.headerButton + ' ' + styles.eat}>
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
      </div>
    </header>
  );
};

export default Header;
