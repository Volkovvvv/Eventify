import React, { useState } from 'react';
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
import rightArrow from '../../assets/img/Arrow-right.png';
import leftArrow from '../../assets/img/Left-arrow.png';
import { useDispatch, useSelector } from 'react-redux';
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
import HeaderButtons from './Button';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const dispath = useDispatch();
  const eatItems = useSelector((state) => state.locations.items);

  const variants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

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

  const clearData = () => {
    sessionStorage.removeItem('currentUser');
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <a href="/">
            <img src={LogoMain} alt="" />
            <span>EVENTIFY</span>
          </a>
        </div>
        <div className={styles.hamburgerMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <div className={styles.hamburgerMenuWrapper}>
              <div className={styles.hamburgerMenuElements}>
                {' '}
                <HeaderButtons />
              </div>
              {windowWidth < 670 ? (
                <div>
                  <Link to="/profile">
                    <div className={styles.headerAccountProfile}>
                      <Profile />
                      <span>Мой профиль</span>
                    </div>
                  </Link>
                  <Link onClick={clearData} to="/login">
                    <div className={styles.headerAccountExit}>
                      <Exit />
                      <span>Выход</span>
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={styles.headerButtons}>
          {windowWidth < 1700 ? (
            <CarouselProvider
              className={styles.slider}
              visibleSlides={windowWidth > 1230 ? 4 : windowWidth < 1100 ? 2 : 3}
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={8}>
              <Slider className={styles.slider}>
                <Slide className={styles.slide} index={0}>
                  {' '}
                  <motion.button
                    onClick={() => onClickAction('рестораны', 'Покушать')}
                    className={styles.headerButton}
                    whileHover="hover"
                    variants={variants}>
                    <Burgersvg />
                    <span>Покушать</span>
                  </motion.button>
                </Slide>
                <Slide index={1}>
                  {' '}
                  <motion.button
                    onClick={() => onClickAction('рестораны', 'Покушать')}
                    className={styles.headerButton}
                    whileHover="hover"
                    variants={variants}>
                    <Cinema />
                    <span>Кинотеатры</span>
                  </motion.button>
                </Slide>
                <Slide index={2}>
                  <motion.button
                    onClick={() => onClickAction('боулинг', 'Боулинг')}
                    className={styles.headerButton}
                    whileHover="hover"
                    variants={variants}>
                    <Bowling />
                    <span>Боулинг</span>
                  </motion.button>
                </Slide>
                <Slide index={3}>
                  <motion.button
                    onClick={() => onClickAction('спортзалы', 'спорт')}
                    className={styles.headerButton}
                    whileHover="hover"
                    variants={variants}>
                    <Sport />
                    <span>Спорт</span>
                  </motion.button>
                </Slide>
                <Slide index={4}>
                  <motion.button
                    onClick={() => onClickAction('сауны', 'Cауны')}
                    className={styles.headerButton + ' ' + styles.eat}
                    whileHover="hover"
                    variants={variants}>
                    <Sauna />
                    <span>Сауны</span>
                  </motion.button>
                </Slide>

                <Slide index={5}>
                  <motion.button
                    onClick={() => onClickAction('бары', 'Бары')}
                    className={styles.headerButton + ' ' + styles.eat}
                    whileHover="hover"
                    variants={variants}>
                    <Alco />
                    <span>Выпить</span>
                  </motion.button>
                </Slide>
                <Slide index={6}>
                  <motion.button
                    onClick={() => onClickAction('кафе с кальяном', 'Кальянные')}
                    className={styles.headerButton + ' ' + styles.eat}
                    whileHover="hover"
                    variants={variants}>
                    <Hookah />
                    <span>Кальянные</span>
                  </motion.button>
                </Slide>
              </Slider>
              <ButtonBack className={styles.back}>
                <img className={styles.leftArrow} src={leftArrow} alt="" />
              </ButtonBack>
              <ButtonNext className={styles.forward}>
                <img className={styles.rightArrow} src={rightArrow} alt="" />
              </ButtonNext>
            </CarouselProvider>
          ) : (
            <HeaderButtons />
          )}
        </div>
        <div className={styles.headerAccount}>
          {windowWidth < 670 ? null : (
            <>
              {' '}
              <Link to="/profile">
                <div className={styles.headerAccountProfile}>
                  <Profile />
                  <span>Мой профиль</span>
                </div>
              </Link>
              <Link onClick={clearData} to="/login">
                <div className={styles.headerAccountExit}>
                  <Exit />
                  <span>Выход</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
