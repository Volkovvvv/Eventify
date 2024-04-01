import React from 'react';
import style from './Search.module.scss';
import SearchIcon from '../../assets/img/Search-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setItemsSearch } from '../../redux/locations/slice';
import debounce from 'lodash.debounce';
import Clear from '../../assets/img/Clear';

export const Search = () => {
  const [localValue, setLocalValue] = React.useState();
  const searchValue = useSelector((state) => state.locations.search);
  console.log(searchValue);
  const dispatch = useDispatch();

  const update = React.useCallback(
    debounce((str) => {
      dispatch(setItemsSearch(str));
    }, 1000),
    [],
  );
  const updateLocalValue = (str) => {
    setLocalValue(str);
    update(str);
  };

  const onClickClear = () => {
    dispatch(setItemsSearch(''));
    setLocalValue('');
  };
  return (
    <div className={style.search}>
      <img src={SearchIcon} alt="" />
      <input
        type="text"
        value={localValue}
        onChange={(e) => updateLocalValue(e.target.value)}
        placeholder="Поиск мест"
      />
      <svg
        onClick={localValue ? () => onClickClear() : null}
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </div>
  );
};

export default Search;
