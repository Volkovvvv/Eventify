import React from 'react';
import style from './Filter.module.scss';
import Arrow from '../../assets/img/Arrow';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const activityName = useSelector((state) => state.locations.activityName);
  return (
    <div className={style.filter}>
      <div className={style.filterWrapper}>
        <div className={style.filterWrapperInfo}>
          <h3>{activityName}</h3>
          <p>Найдено: 300</p>
        </div>
        <div className={style.filterWrapperCategories}>
          <button>
            <span>По рейтингу</span>
            <Arrow />
          </button>
          <button>
            <span>Вблизи метро</span>
            <Arrow />
          </button>
          <button>
            <span>По среднему чеку</span>
            <Arrow />
          </button>
          <button>
            <span>По популярности</span>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
