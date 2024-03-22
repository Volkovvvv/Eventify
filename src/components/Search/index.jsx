import React from 'react';
import style from './Search.module.scss';
import SearchIcon from '../../assets/img/Search-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setItemsSearch } from '../../redux/locations/slice';

export const Search = () => {
  const searchValue = useSelector((state) => state.locations.search);
  console.log(searchValue);
  const dispatch = useDispatch();
  const onInput = (e) => {
    dispatch(setItemsSearch(e));
  };
  return (
    <div className={style.search}>
      <img src={SearchIcon} alt="" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onInput(e.target.value)}
        placeholder="Поиск мест"
      />
    </div>
  );
};

export default Search;
