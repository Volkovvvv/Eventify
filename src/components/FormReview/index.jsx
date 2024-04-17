import React from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './FormReview.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setReview } from '../../redux/reviews/slice';
import { useParams } from 'react-router-dom';

export const FormReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentName = useSelector((state) => state.user.currentUser.userName);
  const [review, setCurrentReview] = React.useState('');

  const onInput = (e) => {
    setCurrentReview(e.target.value);
  };

  //   React.useEffect(() => {
  //     dispatch(setReview({ comment: review, name: currentName }));
  //   }, [onSubmit]);

  const onSubmit = () => {
    dispatch(setReview({ id: id, comment: review, name: currentName }));
  };

  return (
    <div className={styles.setReview}>
      <div className={styles.setReviewWrapper}>
        <div className={styles.setReviewWrapperTop}>
          <span>
            Поделиться
            <br /> мнением
          </span>
          <Rating size="40px" />
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
