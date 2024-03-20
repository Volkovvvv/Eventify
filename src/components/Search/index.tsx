import React from 'react';
import style from './Search.module.scss';
import SearchIcon from '../../assets/img/Search-icon.png';

export const Search = () => {
  return (
    <div className={style.search}>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder="Поиск мест" />
    </div>
  );
};

export default Search;
