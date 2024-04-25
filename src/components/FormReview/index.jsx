import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './FormReview.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setReview } from '../../redux/reviews/slice';
import { useParams } from 'react-router-dom';
import loadCurrentReviewFromLC from '../../utils/loadCurrentReviewFromLC';

export const FormReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentName = useSelector((state) => state.user.currentUser.userName);
  const currentEmail = useSelector((state) => state.user.currentUser.userEmail);
  const reviewState = useSelector((state) => state.reviews.locationReview);
  const reviewsArray = reviewState[id] ? Object.values(reviewState[id]) : null;
  let isReview = false;

  React.useEffect(() => {
    const currentSavedReview = loadCurrentReviewFromLC();
    if (currentSavedReview) {
      setCurrentReview(currentSavedReview.comment);
      setRating(currentSavedReview.rating);
    }
  }, []);

  reviewsArray
    ? reviewState[id].map((item) => {
        if (item.email === currentEmail) {
          isReview = true;
        }
      })
    : console.log('отзывов нет');

  const [review, setCurrentReview] = React.useState('');
  const [rating, setRating] = React.useState();

  const onInput = (e) => {
    setCurrentReview(e.target.value);
  };

  const onRating = (rate) => {
    setRating(rate);
  };

  localStorage.setItem(
    'currentReview',
    JSON.stringify({
      id: id,
      comment: review,
      name: currentName,
      rating: rating,
      email: currentEmail,
    }),
  );

  const currentSavedReview = JSON.parse(localStorage.getItem('currentReview'));
  React.useEffect(() => {});

  const onSubmit = () => {
    if (isReview) {
      alert('Вы уже оставили комментарий');
    } else if (!rating) {
      alert('Поставьте пожалуйста оценку');
    } else if (!review) {
      alert('Напишите пожалуйста комментарий');
    } else {
      dispatch(setReview(currentSavedReview));
    }
  };

  return (
    <div className={styles.setReview}>
      <div className={styles.setReviewWrapper}>
        <div className={styles.setReviewWrapperTop}>
          <span>
            Поделиться
            <br /> мнением
          </span>
          <Rating initialValue={rating} onClick={(rate) => onRating(rate)} size="40px" />
        </div>
        <div className={styles.setReviewWrapperText}>
          <input
            value={review}
            placeholder="Напишите отзыв..."
            type="text"
            onChange={(e) => onInput(e)}
          />
        </div>
        <button onClick={() => onSubmit()} className={styles.setReviewWrapperSend}>
          Написать отзыв
        </button>
      </div>
    </div>
  );
};

export default FormReview;
