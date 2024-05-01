import React from 'react';
import style from './MinskViev.module.scss';
import Modal from '../../components/Modal';

export const MinskView = () => {
  const [active, setActive] = React.useState(false);

  const onOpen = () => {
    setActive(true);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.wrapperContent}>
          <button onClick={() => onOpen()}>
            <span>Подобрать активность наугад в Минске</span>
          </button>
        </div>
      </div>
      {active ? <Modal onClose={onClose} active={active} /> : null}
    </div>
  );
};

export default MinskView;
