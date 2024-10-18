import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import Cinema from '../../assets/img/Cinema';
import Sauna from '../../assets/img/Sauna';
import Sport from '../../assets/img/Sport';
import Leisure from '../../assets/img/Leisure';
import Alco from '../../assets/img/Alco';
import Burgersvg from '../../assets/img/Burgersvg';
import Bowling from '../../assets/img/Bowling';
import Hookah from '../../assets/img/Hookah';

import {
  setItemsSearch,
  setItemsActivity,
  setRandomSearch,
  setRandomItem,
} from '../../redux/locations/slice';
import { setFilterSubwayName, setFilterSubway } from '../../redux/filter/slice';
import { setCurrentPage } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Hamburger from 'hamburger-react';
import Buttons from './Button';

export const HeaderButtons = () => {
  const dispath = useDispatch();
  const onClickAction = (place, action) => {
    console.log('действие');
    dispath(setItemsSearch(place));
    dispath(setItemsActivity(action));
    dispath(setCurrentPage(1));
    dispath(setRandomSearch(''));
    dispath(setRandomItem([]));
    dispath(setFilterSubwayName(''));
    dispath(setFilterSubway(''));
  };
  const variants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  return (
    <>
      <motion.button
        onClick={() => onClickAction('рестораны', 'Покушать')}
        className={styles.headerButton}
        whileHover="hover"
        variants={variants}>
        <Burgersvg />
        <span>Покушать</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('кинотеатры', 'Кино')}
        className={styles.headerButton}
        whileHover="hover"
        variants={variants}>
        <Cinema />
        <span>Кинотеатры</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('боулинг', 'Боулинг')}
        className={styles.headerButton}
        whileHover="hover"
        variants={variants}>
        <Bowling />
        <span>Боулинг</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('спортзалы', 'спорт')}
        className={styles.headerButton}
        whileHover="hover"
        variants={variants}>
        <Sport />
        <span>Спорт</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('сауны', 'Cауны')}
        className={styles.headerButton + ' ' + styles.eat}
        whileHover="hover"
        variants={variants}>
        <Sauna />
        <span>Сауны</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('бары', 'Бары')}
        className={styles.headerButton + ' ' + styles.eat}
        whileHover="hover"
        variants={variants}>
        <Alco />
        <span>Выпить</span>
      </motion.button>
      <motion.button
        onClick={() => onClickAction('кафе с кальяном', 'Кальянные')}
        className={styles.headerButton + ' ' + styles.eat}
        whileHover="hover"
        variants={variants}>
        <Hookah />
        <span>Кальянные</span>
      </motion.button>
    </>
  );
};

export default HeaderButtons;
