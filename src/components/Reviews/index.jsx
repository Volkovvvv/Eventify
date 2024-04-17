import React from 'react';
import styles from './Reviews.module.scss';
import { Rating } from 'react-simple-star-rating';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = String(today.getMonth() + 1).padStart(2, '0');
  // const day = String(today.getDate()).padStart(2, '0');
  // const formattedDate = `${year}-${month}-${day}`;
  // console.log(formattedDate);
  const { id } = useParams();
  const reviewState = useSelector((state) => state.reviews.locationReview);
  const reviewsArray = reviewState[id] ? Object.values(reviewState[id]) : null;
  console.log(reviewState[id], 'это ревьюстейт');

  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsHeader}>
        <span>Отзывы: 2</span>
      </div>
      {reviewsArray ? (
        reviewsArray.map((item, i) => {
          console.log(item);
          return (
            <>
              {' '}
              <div className={styles.reviewsItem}>
                <div className={styles.reviewsItemDate}>
                  <span>02 апреля 2024</span>
                </div>
                <div className={styles.reviewsItemInfo}>
                  <div className={styles.reviewsItemTitle}>
                    <span>{item.name}</span>
                    <Rating size="25px" />
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
