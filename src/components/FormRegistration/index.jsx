import React from 'react';
import styles from './FormRegistration.module.scss';
import { useLocation } from 'react-router-dom';

export const FormRegistration = ({ title, handleClick }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  const { pathname } = useLocation();

  return (
    <form className={styles.rightContentForm}>
      {pathname == '/registration' ? (
        <div>
          {' '}
          <div>
            <input
              placeholder="Имя"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Фамилия"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div>
          {' '}
          <div>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      )}

      <button
        onClick={(e) => handleClick(e, email, password, name, surname)}
        className={styles.registration}>
        <span>{title}</span>
      </button>
    </form>
  );
};

export default FormRegistration;
