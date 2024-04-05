import React from 'react';
import Coin from '../../assets/img/Coin.png';
import Star from '../../assets/img/Star.png';
import style from './ItemLocation.module.scss';
import { Link } from 'react-router-dom';

export const ItemLocation = ({ items }) => {
  return (
    <div className={style.locations}>
      <div className={style.locationsItem}>
        {items.external_content[0] ? (
          <img className={style.locationsItemImg} src={items.external_content[0].main_photo_url} />
        ) : (
          'Фото не найдено'
        )}
        <div className={style.locationsItemTop}>
          <div className={style.locationsItemMoney}>
            <img src={Coin} alt="" />
            <span>25р</span>
          </div>
          <div className={style.locationsItemRating}>
            <div className={style.locationsItemStar}>
              <img src={Star} alt="" />
            </div>
            <div className={style.locationsItemNumbers}>
              <span>{items.reviews.general_rating}</span>
              <p>{items.reviews.general_review_count - 1}+</p>
            </div>
          </div>
        </div>
        <div className={style.locationsItemInfo}>
          <h3>{items.name}</h3>
          <p>{items.address_name}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemLocation;
