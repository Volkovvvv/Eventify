import React from 'react';
import style from './MinskViev.module.scss';

export const MinskView = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.wrapperContent}>
          <button>
            <span>Подобрать активность наугад в Минске</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinskView;
