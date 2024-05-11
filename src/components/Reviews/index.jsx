import React from 'react';
import styles from './Reviews.module.scss';
import { Rating } from 'react-simple-star-rating';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = String(today.getDate()).padStart(2, '0');
  const date = new Date(0, month - 1);
  const monthName = date.toLocaleString('default', { month: 'long' });

  let modifiedMonthName;
  if (monthName !== 'март' || monthName !== 'август') {
    modifiedMonthName = monthName.slice(0, -1) + 'я';
  } else {
    modifiedMonthName = monthName + 'а';
  }

  const { id } = useParams();
  const reviewState = useSelector((state) => state.reviews.locationReview);
  const reviewsArray = reviewState[id] ? Object.values(reviewState[id]) : null;

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsHeader}>
        <span>Отзывы: {reviewsArray ? reviewsArray.length : 0}</span>
      </div>
      {reviewsArray ? (
        reviewsArray.map((item, i) => {
          console.log(item);
          return (
            <>
              {' '}
              <div className={styles.reviewsItem}>
                <div className={styles.reviewsItemDate}>
                  <span>
                    {day} {modifiedMonthName} {year}
                  </span>
                </div>
                <div className={styles.reviewsItemInfo}>
                  <div className={styles.reviewsItemTitle}>
                    <span>{item.name}</span>
                    <Rating readonly="true" initialValue={item.rating} size="25px" />
                  </div>
                  <div className={styles.reviewsItemDescription}>
                    <span>{item.comment}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div>
          <span>Отзывов пока нет</span>
        </div>
      )}
      <div className={styles.descriptionInfoFooter}>
        <span>Подробнее</span>
      </div>
    </div>
  );
};

export default Reviews;
