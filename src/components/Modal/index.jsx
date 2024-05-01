import React, { createElement } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomSearch } from '../../redux/locations/slice';

export const Modal = ({ active, onClose }) => {
  const dispatch = useDispatch();
  const modalRootElement = document.querySelector('#modal');
  const element = document.createElement('div');
  const [choise, setChoise] = React.useState();
  React.useEffect(() => {
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  });

  // const variants = {
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0 },
  // };

  const buttons = [
    { id: 0, name: 'Кино' },
    { id: 1, name: 'Рестораны' },
    { id: 2, name: 'Суши' },
    { id: 3, name: 'Пицца' },
    { id: 4, name: 'Театр' },
    { id: 5, name: 'Бары' },
    { id: 6, name: 'Квесты' },
    { id: 7, name: 'Парки' },
    { id: 8, name: 'Караоке' },
  ];

  console.log(choise);

  const onConfirm = () => {
    let namePlace = buttons[choise].name;
    dispatch(setRandomSearch(namePlace));
  };

  console.log(buttons);
  return createPortal(
    <div onClick={() => onClose()} className="modal">
      <motion.div
        // variants={variants}
        // initial="hidden"
        // animate="visible"
        onClick={(e) => e.stopPropagation()}
        className="modal-wrapper">
        <div className="modal-wrapper__content">
          <h3>Что вам интересно на сегодня?</h3>
          <p>
            Отметьте интересующую вас категорию, и мы случайно выберем одно из мест за вас, которое
            вам стоит посетить
          </p>
          <div className="modal-wrapper__content-categories">
            {buttons.map((item, i) => {
              return (
                <button
                  onClick={() => setChoise(i)}
                  className={choise === i ? 'active' : null}
                  key={i}>
                  {item.name}
                </button>
              );
            })}
          </div>
          <button onClick={() => onConfirm()} className="btn-chose">
            Выбрать
          </button>
        </div>
      </motion.div>
    </div>,
    element,
  );
};

export default Modal;
