import React from 'react';
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { isAuth, name } = useAuth();
  console.log(isAuth);

  return (
    <div className="container">
      <div className="logo">
        <a className="logo-text">
          <Logo />
        </a>
        <a href="#">
          <Telegram />
        </a>
      </div>
      <div className="content-block">
        <div className="container-info">
          <div className="main-info">
            <Link to="main">
              <div className="main-info__cart location ">
                <h3>{name}</h3>
                <p>Лучшие места твоего города для отдыха</p>
                <img className="heart-icon" src={Heart} alt="" />
              </div>
            </Link>
            <div className="main-info__cart map">
              <h3>КАРТА</h3>
              <p>Отмечайте на карте места, в которых вы побывали</p>
              <img className="map-icon" src={Map} alt="" />
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Home;
