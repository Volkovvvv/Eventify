import React from 'react';
import styles from './Pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/pagination/slice';

export const Pagination = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector((state) => state.pagination.currentPage);
  const [disabledBack, setDisabledBack] = React.useState(false);
  const [disabledForward, setDisabledForward] = React.useState(false);
  const totalLocations = useSelector((state) => state.pagination.totalLocations);
  const paginationLenght = totalLocations / 9 > 5 ? 5 : Math.ceil(totalLocations / 9);

  const setPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const onClickBack = (num) => {
    if (num == 1) {
      setDisabledBack(true);
    }
    dispatch(setCurrentPage(num));
  };

  const onClickForward = (num) => {
    if (num == paginationLenght) {
      setDisabledForward(true);
      console.log(num);
    }
    dispatch(setCurrentPage(num));
  };

  React.useEffect(() => {
    setDisabledBack(false);
    setDisabledForward(false);
  }, [currentPage]);

  return (
    <div className={styles.pagination}>
      {paginationLenght > 1 && (
        <button
          disabled={disabledBack}
          onClick={() => onClickBack(currentPage > 1 ? currentPage - 1 : 1)}
          className={styles.paginationItem + ' ' + styles.back}>
          {'❮'}
        </button>
      )}

      {Array.from({ length: paginationLenght }, (_, index) => (
        <button
          onClick={() => setPage(index + 1)}
          className={
            currentPage == index + 1
              ? styles.paginationItem + ' ' + styles.focused
              : styles.paginationItem + ''
          }>
          {index + 1}
        </button>
      ))}
      {paginationLenght > 1 && (
        <button
          disabled={disabledForward}
          onClick={() =>
            onClickForward(currentPage < paginationLenght ? currentPage + 1 : paginationLenght)
          }
          className={styles.paginationItem + ' ' + styles.forward}>
          {'❯'}
        </button>
      )}
    </div>
  );
};

export default Pagination;
