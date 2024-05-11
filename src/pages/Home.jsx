import React, { useLayoutEffect } from 'react';
import Logo from '../assets/img/Logo';
import Telegram from '../assets/img/Telegram';
import Heart from '../assets/img/Heart.png';
import Map from '../assets/img/map-icon.png';
import Arrow from '../assets/img/arrow.png';
import Music from '../assets/img/Music.png';
import Coffee from '../assets/img/Coffee.png';
import Draw from '../assets/img/Draw.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export const Home = () => {
  const { dataUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!dataUser) {
      navigate('/login');
    }
  }, []);

  useLayoutEffect(() => {
    gsap.to('.logo', { rotation: 360, duration: 1 });
  });

  const variants = {
    visible: { x: -1000, opacity: 0 },
    hidden: { x: 0, opacity: 1 },
  };

  return (
    <>
      {dataUser ? (
        <div className="container">
          <div className="logo">
            <a className="logo-text">
              <Logo />
              <a href="#">
                <Telegram />
              </a>
            </a>
          </div>
          <motion.div
            className="content-block"
            initial="visible"
            animate="hidden"
            transition={{ delay: 0.5, ease: 'easeInOut', type: 'just' }}
            variants={variants}>
            <div className="container-info">
              <motion.div className="main-info">
                <Link to="main">
                  <div className="main-info__cart location ">
                    <h3>ЛОКАЦИИ</h3>
                    <p>Лучшие места твоего города для отдыха</p>
                    <img className="heart-icon" src={Heart} alt="" />
                  </div>
                </Link>
                <div className="main-info__cart map">
                  <h3>КАРТА</h3>
                  <p>Отмечайте на карте места, в которых вы побывали</p>
                  <img className="map-icon" src={Map} alt="" />
                </div>
              </motion.div>
              <div className="bottom-info">
                <div className="bottom-info__recommendation">
                  <h3>РЕКОМЕНДАЦИИ</h3>
                  <p>Получите персональные рекомендации мест на основе ваших интересов</p>
                  <img className="arrow-icon" src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="right-info">
              <div className="right-info__content">
                <h1>ПОИСК</h1>
                <p>
                  Помогаем найти<br></br> любой досуг на вечер
                </p>
                <div className="right-info__content-markers">
                  <div className="right-info__content-markers__music">
                    <img src={Music} alt="" />
                  </div>
                  <div className="right-info__content-markers__draw">
                    <img src={Draw} alt="" />
                  </div>
                  <div className="right-info__content-markers__coffee">
                    <img src={Coffee} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
