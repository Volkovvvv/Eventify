import React from 'react';
import MinskView from '../../assets/img/MinskView.jpg';
import Coin from '../../assets/img/Coin.png';
import Star from '../../assets/img/Star.png';
import style from './ItemLocation.module.scss';

export const ItemLocation = ({ items }) => {
  const randomNumber = Math.floor(Math.random() * 91) + 10;
  return (
    <div className={style.locations}>
      <div className={style.locationsItem}>
        <p className={style.locationsItemAnimation}>Перейти подробнее</p>
        {items.external_content[0] ? (
          <img
            className={style.locationsItemImg}
            src={items.external_content[0].main_photo_url}
            alt="К сожалению, фотография недоступна"
          />
        ) : (
          <img width="500" height="300" src={MinskView}></img>
        )}
        <div className={style.locationsItemTop}>
          <div className={style.locationsItemMoney}>
            <img src={Coin} alt="" />
            <span>{randomNumber}р</span>
          </div>
          <div className={style.locationsItemRating}>
            <div className={style.locationsItemStar}>
              <img src={Star} alt="" />
            </div>
            <div className={style.locationsItemNumbers}>
              <span>
                {items.reviews.general_rating ? (
                  items.reviews.general_rating
                ) : (
                  <span className={style.noRating}>Нет</span>
                )}
              </span>
              <p>
                {items.reviews.general_review_count ? items.reviews.general_review_count - 1 : null}
              </p>
            </div>
          </div>
        </div>
        <div className={style.locationsItemInfo}>
          <h3>{items.name}</h3>
          <p>{items.address_name}</p>{' '}
        </div>
      </div>
    </div>
  );
};

export default ItemLocation;
